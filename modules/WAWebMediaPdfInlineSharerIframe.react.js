__d("WAWebMediaPdfInlineSharerIframe.react", [
	"WAWebPdfViewerTestIds",
	"WAWebTPFrameUrlBuilder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.iframeRef, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl(), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xh8yej3 x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1lliihq x6nvzda x4i4b9w xhl9efl xj65ea0" }, t[1] = l) : l = t[1];
		var u;
		return t[2] !== n ? (u = s.jsx("iframe", babelHelpers.extends({
			credentialless: !1,
			ref: n,
			src: i,
			"data-testid": r("WAWebPdfViewerTestIds").EDIT_INLINE_IFRAME
		}, l, { sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" })), t[2] = n, t[3] = u) : u = t[3], u;
	}
	l.default = c;
}), 98);
