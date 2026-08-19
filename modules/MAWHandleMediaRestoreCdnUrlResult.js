__d("MAWHandleMediaRestoreCdnUrlResult", [
	"EncryptedBackupsResignCdnUrl",
	"MAWLowLevelMediaDownloadQplBridgeHandler",
	"MWFBLogger",
	"WADirectPath",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = o("MWFBLogger").MWMediaLogger().tags(["RestoreCdnUrlThroughSproc"]);
	function _(t) {
		var n, r, a, i = (n = (r = t.value) == null ? void 0 : r.rawTraceId) != null ? n : (a = t.error) == null ? void 0 : a.rawTraceId;
		if (i == null) {
			var l;
			p.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"handleMediaRestoreCdnUrlResult: traceId is null. success: ",
				", error: ",
				""
			])), t.success, t.success ? "" : (l = t.error.errorMessage) != null ? l : "");
			return;
		}
		var _ = isNaN(parseInt(i, 10)) ? null : parseInt(i, 10);
		if (_ == null) {
			var g;
			p.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"handleMediaRestoreCdnUrlResult: traceId is not a number. success: ",
				", error: ",
				""
			])), t.success, t.success ? "" : (g = t.error.errorMessage) != null ? g : "");
			return;
		}
		var h = p.tags([i]), y = o("EncryptedBackupsResignCdnUrl").getRestoredCdnUrlResolvable(_);
		if (y == null) {
			p.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handleMediaRestoreCdnUrlResult: restoredCdnUrlResolvable is null"])));
			return;
		}
		if (!t.success) {
			var C;
			h.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["handleMediaRestoreCdnUrlResult request error: ", ""])), (C = t.error.errorMessage) != null ? C : ""), y == null || y.resolve(o("WAResultOrError").makeError("resign-cdn-url-request-error")), y == null && f(_, t.error.errorMessage);
			return;
		}
		var b = o("WADirectPath").validateDirectPath(t.value.rawDirectPath);
		if (!b.success) {
			h.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["handleMediaRestoreCdnUrlResult direct path error: ", ""])), b.error), y == null || y.resolve(b);
			return;
		}
		var v = b.value;
		p.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["handleMediaRestoreCdnUrlResult success. directPath: ", ""])), v), y == null || y.resolve(o("WAResultOrError").makeResult(v));
	}
	function f(e, t) {
		o("MAWLowLevelMediaDownloadQplBridgeHandler").handleBridgeMediaDownloadQPL("fail", e, "attachment_restore_failure", { string: { error: t != null ? t : "" } });
	}
	l.handleMediaRestoreCdnUrlResult = _;
}), 98);
