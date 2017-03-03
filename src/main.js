chrome.webRequest.onCompleted.addListener(function(details) {
        if (details.statusCode == 404 || details.statusCode == 403) {
            chrome.tabs.query({'active': true}, function(tabs) {

                // Detect if this is the url in the tab. Avoid redirects when
                // it's a 404 in the page
                var currentUrl = tabs[0].url;
                if (details.url == currentUrl) {
                    // Rewrite URL
                    var newUrl = new URL(details.url);
                    newUrl.host = "obamawhitehouse.archives.gov";

                    // Redirect
                    chrome.tabs.update(tabs[0].id, {url: newUrl.href});
                }
            });
        }
    },
    {urls: ["*://*.whitehouse.gov/*"]},
    ["responseHeaders"]
);


