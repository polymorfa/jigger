__d("MIMediaUrl", [
	"CurrentEnvironment",
	"WABase64",
	"WAHttpUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "/messenger_eb";
	function s(t, n, a, i) {
		var l = o("WABase64").encodeB64UrlSafe(n), s = o("WABase64").encodeB64UrlSafe(t), u = {
			direct_ip: 0,
			token: s
		};
		i === !0 && (u.resume = 1), a != null && a > 0 && (u.bytestart = a);
		var c = r("CurrentEnvironment").messengerdotcom ? "https://rupload.messenger.com" : "https://rupload.facebook.com";
		return o("WAHttpUtils").buildUrl(c, e + "/" + l, u);
	}
	l.MI_UPLOAD_ROOT = e, l.buildMIUploadUrl = s;
}), 98);
