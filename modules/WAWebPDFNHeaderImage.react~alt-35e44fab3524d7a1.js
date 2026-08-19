__d("WAWebPDFNHeaderImage.react", [
	"WAWebPDFNSanitizedSvg.react",
	"WAWebPDFNUtils",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { paddingAuto: {
		paddingTop: null,
		paddingInlineEnd: null,
		paddingBottom: null,
		paddingInlineStart: null,
		$$css: !0
	} }, d = {
		topIcon: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		pngHeader: {
			height: "x1b51vyi",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.content, a = t.xstyle, i = n.icon, l = n.iconDescription, s = n.iconSvg, m = o("WAWebPDFNUtils").usePDFNThemedIcon(s);
		if ((i == null ? void 0 : i.type) === "lottie") return null;
		var _ = p(m), f = [
			d.topIcon,
			c.paddingAuto,
			_ && d.pngHeader,
			a
		], g = u.jsx(r("WAWebPDFNSanitizedSvg.react"), {
			iconSvg: s,
			ariaLabel: l,
			classNames: (e || (e = r("stylex")))(f)
		});
		return _ ? u.jsx("div", {
			className: "x78zum5 xl56j7k",
			children: g
		}) : g;
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = function(t) {
		return t == null ? !1 : t.startsWith("data:image/png");
	};
	l.default = m;
}), 98);
