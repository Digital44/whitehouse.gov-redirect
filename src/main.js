chrome.webRequest.onCompleted.addListener(function(details) {
    if (details.statusCode == 404) {
        //
        var newUrl = new URL(details.url);
        newUrl.host = "obamawhitehouse.archives.gov";
        chrome.tabs.query({'active': true}, function(tabs) {
          chrome.tabs.update(tabs[0].id, {url: newUrl.href});
        });
    }
},
{urls: ["*://*.whitehouse.gov/*"]},
["responseHeaders"]
);


