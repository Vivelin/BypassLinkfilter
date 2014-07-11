const { Cc, Ci, Cr } = require('chrome');
var events = require('sdk/system/events');
var utils = require('sdk/url/utils');
var linkfilterPattern = /^https?:\/\/steamcommunity\.com\/linkfilter\/\?url=(.*)$/;

events.on('http-on-modify-request', function (event) {
    var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
    var url = event.subject.URI.spec;
    var match = url.match(linkfilterPattern);
    if (match) {
        var actualUrl = utils.newURI(match[1]);
        event.subject.redirectTo(actualUrl);
    }
}, true);
