__d("WAWebMmsClientCheckIfUploadExistsMethod", [
	"WAExponentialBackoff",
	"WALogger",
	"WAWebMmsClientIsErrorRetryable",
	"WAWebMmsClientMmsBackoffOptions",
	"WAWebMmsClientMmsCheckIfUploadExists",
	"WAWebMmsClientMmsLogError",
	"WAWebMmsClientSelectHost",
	"WAWebMmsOperationsConst",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t) {
		return n;
		async function n(n) {
			var a = n.encFilehash, i = n.generateThumbnailOnServer, l = n.mediaId, c = n.signal, d = n.type, m = !1, p = {
				encFilehash: n.encFilehash,
				type: n.type
			};
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["mmsClient.checkIfUploadExists: start"])));
			try {
				var _ = null, f = await o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), { signal: c }), async function(e, u) {
					o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["mmsClient.checkIfUploadExists: attempt #", ""])), u + 1), await t.networkStatus.waitIfOffline();
					try {
						var p = await t.mediaHosts.getHostsInfo({
							operation: r("WAWebMmsOperationsConst").UPLOAD,
							encFilehash: a,
							type: d,
							signal: c
						}), f = p.auth, g = p.fallbackHost, h = p.selectedHost, y = r("WAWebMmsClientSelectHost")({
							selectedHost: h,
							fallbackHost: g,
							lastHostUsed: _,
							attemptCount: u,
							lastFetchMadeProgress: m
						});
						return _ = y, await r("WAWebMmsClientMmsCheckIfUploadExists")({
							auth: f,
							encFilehash: a,
							hostname: y.hostname,
							type: d,
							signal: c,
							onProgress: function() {
								m = !0;
							},
							mediaId: l,
							token: n.token,
							generateThumbnailOnServer: i
						});
					} catch (t) {
						var C = r("getErrorSafe")(t);
						if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(C)) return e(C);
						throw C;
					}
				});
				return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["mmsClient.checkIfUploadExists: success"]))), f;
			} catch (e) {
				var g = r("getErrorSafe")(e);
				throw o("WAWebMmsClientMmsLogError").mmsLogError("mmsClient.checkIfUploadExists", g, p), g;
			}
		}
	}
	l.createCheckIfUploadExistsWithDependencies = c;
}), 98);
