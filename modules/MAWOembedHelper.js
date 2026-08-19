__d("MAWOembedHelper", [
	"$InternalEnum",
	"ConstUriUtils",
	"FBLogger",
	"MAWExternalLinkUtil",
	"SecureMessageListener",
	"SecurePostMessage",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"facebook.com",
		"messenger.com",
		"instagram.com",
		"internalfb.com"
	];
	function s(e) {
		if (e == null || typeof e != "object") return null;
		var t = e.requestURL, n = e.requestMessageType;
		if (typeof n != "string" || typeof t != "string" || !o("ConstUriUtils").isValidUri(t)) return null;
		var r = c.cast(n);
		return r == null || r !== c.OEMBED_REQUEST_URL && r !== c.THUMBNAIL_URL ? null : [r, t];
	}
	function u() {
		var t = null, n = new (r("SecureMessageListener"))(window);
		function a(e) {
			t = e.origin;
			var n = e.data, a = s(n);
			if (a != null) {
				var l = a[0], u = a[1];
				o("MAWExternalLinkUtil").isAllowedRequestForFbsbx(u) && r("promiseDone")(window.fetch(u).then(function(e) {
					switch (e.status !== 200 && r("FBLogger")("messenger_web").mustfix("[external link] fbsbx page fetching for the response is not successful."), l) {
						case c.OEMBED_REQUEST_URL: return e.json();
						case c.THUMBNAIL_URL: return e.blob();
					}
				}).then(function(e) {
					i({
						type: l,
						url: u,
						value: e
					});
				}).catch(function() {
					r("FBLogger")("messenger_web").warn("[external link] Failed to fetch response in helper js.");
				}));
			}
		}
		n.setEventHandler(a).setSupportedOrigins(e), n.beginListening();
		function i(e, n) {
			var o = n != null ? n : 1;
			if (t == null) {
				o <= 3 && window.setTimeout(function() {
					i(e, o + 1);
				}, 250 * Math.pow(2, o * o));
				return;
			}
			r("SecurePostMessage").sendMessageToSpecificOrigin(window.parent, e, t);
		}
	}
	var c = n("$InternalEnum").Mirrored(["OEMBED_REQUEST_URL", "THUMBNAIL_URL"]);
	l.init = u, l.MAWOembedIFrameMessageType = c;
}), 98);
