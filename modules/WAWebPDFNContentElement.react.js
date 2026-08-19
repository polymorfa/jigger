__d("WAWebPDFNContentElement.react", [
	"WAWebDomSanitize",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(10), a = t.as, i = t.content, l = t.xstyle, s = a, c;
		n[0] !== i ? (c = o("WAWebDomSanitize").sanitizeNoticeText(i), n[0] = i, n[1] = c) : c = n[1];
		var d = c, m;
		n[2] !== l ? (m = (e || (e = r("stylex"))).props(l), n[2] = l, n[3] = m) : m = n[3];
		var p;
		n[4] !== d ? (p = { __html: d }, n[4] = d, n[5] = p) : p = n[5];
		var _;
		return n[6] !== s || n[7] !== m || n[8] !== p ? (_ = u.jsx(s, babelHelpers.extends({}, m, { dangerouslySetInnerHTML: p })), n[6] = s, n[7] = m, n[8] = p, n[9] = _) : _ = n[9], _;
	}
	l.default = c;
}), 98);
