var ignore = [];

chrome.webRequest.onCompleted.addListener(function(details) {
        // details.type == main_frame to avoid redirect on in-page 404 elements
        // Live test case: https://www.whitehouse.gov/contact/write-or-call
        if (details.statusCode == 404 && details.type == "main_frame") {
            if (ignore.indexOf(details.tabId) != -1) {
                // Remove the tab from the ignore and then do nothing
                ignore.splice(ignore.indexOf(details.tabId), 1);
            } else {
                // Redirect
                var newUrl = new URL(details.url);
                newUrl.host = "obamawhitehouse.archives.gov";
                chrome.tabs.update(details.tabId, {url: newUrl.href}, function(tab) {

                    // Set up listener if the redirected page is also 404
                    // Cannot check before because of CORS
                    var wh_tab_id = tab.id;
                    chrome.tabs.onUpdated.addListener(function(id, changeInfo, tab){
                        // Would prefer to do this before the page finishes
                        // loading, but can't get status before rendering.
                        // Have to make due with title of the page which is
                        // unlikely to change given the archival process
                        if (id == wh_tab_id && changeInfo.status == "complete") {
                            if (tab.title.search("404 Page Not Found") != -1){
                                var newUrl = new URL(tab.url);
                                newUrl.host = "whitehouse.gov";

                                // Make sure we don't enter a redirect loop
                                ignore.push(tab.id);
                                chrome.tabs.update(tab.id, {url: newUrl.href}, function(tab) {});
                            }
                        }
                    });
                });
            }
        }
    },
    {urls: ["*://*.whitehouse.gov/*"]},
    ["responseHeaders"]
);


