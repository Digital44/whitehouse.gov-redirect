chrome.webRequest.onCompleted.addListener(function(details) {
        if (details.statusCode == 404) {
            chrome.tabs.query({'active': true}, function(tabs) {

                // Detect if this is the url in the tab. Avoid redirects when
                // it's a 404 in the page
                var currentUrl = tabs[0].url;
                if (details.url == currentUrl) {
                    var newUrl = new URL(details.url);
                    newUrl.host = "obamawhitehouse.archives.gov";
                    var xhr = new XMLHttpRequest();
                    // Had to use a CORS proxy - https://crossorigin.me/
                    xhr.open("GET", `https://crossorigin.me/${newUrl.href}`, false);
                    xhr.send()
                    if (xhr.status == 200) {
                        // Redirect since the page exists on the Obama archive.
                        chrome.tabs.update(tabs[0].id, {url: newUrl.href});
                    }
                }
            });
        }
    },
    {urls: ["*://*.whitehouse.gov/*"]},
    ["responseHeaders"]
);


