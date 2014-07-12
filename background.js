var linkfilterPattern = /^https?:\/\/steamcommunity\.com\/linkfilter\/\?url=(.*)$/;
var newUrl;

chrome.webRequest.onBeforeRequest.addListener(
  function(page) {
    newUrl = page.url.match(linkfilterPattern)[1]
    return { redirectUrl: newUrl }
  },
  {urls: ["*://steamcommunity.com/linkfilter/*"]}, ["blocking"]); // I didn't want to make it "blocking" but it works so whatever.