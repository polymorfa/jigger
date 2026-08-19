__d("WAWebMediaPdfDocumentIframe.react", [
	"WAWebPdfViewerTestIds",
	"WAWebTPFrameUrlBuilder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.iframeRef, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl(), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xh8yej3 x5yr21d" }, t[1] = l) : l = t[1];
		var u;
		return t[2] !== n ? (u = s.jsx("iframe", babelHelpers.extends({
			credentialless: !1,
			ref: n,
			src: i
		}, l, {
			sandbox: "allow-scripts allow-same-origin",
			"data-testid": r("WAWebPdfViewerTestIds").IFRAME
		})), t[2] = n, t[3] = u) : u = t[3], u;
	}
	l.default = c;
}), 98);
