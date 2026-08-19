__d("EncryptedBackupsResignCdnUrl", [
	"EBLSResignCdnUrlDeferred",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"getSafeQplErrorMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map();
	function u(e) {
		return s.get(e);
	}
	function c(t) {
		var n = t.deliveryObjectId, r = t.logger, a = t.mediaDownloadFlow, i = t.mediaKey, l = t.mediaType, s = t.msgId, u = t.protocolMsgId, c = t.sortOrderMs;
		return a.addPoint("resign_cdn_url_start"), d({
			deliveryObjectId: n,
			mediaDownloadFlow: {
				addAnnotations: function(t) {
					a == null || a.addAnnotations(babelHelpers.extends({}, t));
				},
				addPoint: function(t, n) {
					a == null || a.addPoint(t, babelHelpers.extends({}, n));
				}
			},
			mediaKey: i,
			mediaType: l,
			msgId: s,
			protocolMsgId: u,
			sortOrderMs: c
		}).then(function(e) {
			return e.success ? (a == null || a.addPoint("resign_cdn_url_end"), e) : (a.addPoint("resign_cdn_url_fail", { string: { resignCdnUrlFailReason: e.error } }), e);
		}).catch(function(t) {
			return r.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["resignCdnUrl runtime-error: ", ""])), t), a.addPoint("resign_cdn_url_fail", { string: { resignCdnUrlFailReason: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t) } }), o("WAResultOrError").makeError("resign-cdn-url-runtime-error");
		});
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.deliveryObjectId, n = e.mediaDownloadFlow, r = e.mediaKey, a = e.mediaType, i = e.msgId, l = e.protocolMsgId, s = e.sortOrderMs, u = yield o("EBLSResignCdnUrlDeferred").eblsResignCdnUrlWithGraphQL({
				chatJid: l.chat,
				deliveryObjectId: t,
				externalId: l.externalId,
				mediaDownloadFlow: n,
				mediaKey: r,
				mediaType: a,
				sortOrderMs: s
			});
			return u.success ? o("WAResultOrError").makeResult(u.value) : u;
		}), m.apply(this, arguments);
	}
	l.getRestoredCdnUrlResolvable = u, l.resignCdnUrl = c;
}), 98);
