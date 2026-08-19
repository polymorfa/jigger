__d("WAWebPDFNContentElement.react", [
	"WAWebDomSanitize",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.as, a = t.content, i = t.xstyle, l = n, s = o("WAWebDomSanitize").sanitizeNoticeText(a);
		return u.jsx(l, babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), { dangerouslySetInnerHTML: { __html: s } }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
