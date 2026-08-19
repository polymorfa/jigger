__d("WAWebPDFNHeaderImage.react", [
	"WAWebPDFNSanitizedSvg.react",
	"WAWebPDFNUtils",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(17), a = t.content, i = t.xstyle, l = a.icon, s = a.iconDescription, m = a.iconSvg, _ = o("WAWebPDFNUtils").usePDFNThemedIcon(m);
		if ((l == null ? void 0 : l.type) === "lottie") return null;
		var f, g, h, y, C;
		if (n[0] !== s || n[1] !== m || n[2] !== _ || n[3] !== i) {
			g = p(_);
			var b = [
				d.topIcon,
				c.paddingAuto,
				g && d.pngHeader,
				i
			];
			f = r("WAWebPDFNSanitizedSvg.react"), h = m, y = s, C = (e || (e = r("stylex")))(b), n[0] = s, n[1] = m, n[2] = _, n[3] = i, n[4] = f, n[5] = g, n[6] = h, n[7] = y, n[8] = C;
		} else f = n[4], g = n[5], h = n[6], y = n[7], C = n[8];
		var v;
		n[9] !== f || n[10] !== h || n[11] !== y || n[12] !== C ? (v = u.jsx(f, {
			iconSvg: h,
			ariaLabel: y,
			classNames: C
		}), n[9] = f, n[10] = h, n[11] = y, n[12] = C, n[13] = v) : v = n[13];
		var S = v;
		if (g) {
			var R;
			n[14] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x78zum5 xl56j7k" }, n[14] = R) : R = n[14];
			var L;
			return n[15] !== S ? (L = u.jsx("div", babelHelpers.extends({}, R, { children: S })), n[15] = S, n[16] = L) : L = n[16], L;
		}
		return S;
	}
	var p = function(t) {
		return t == null ? !1 : t.startsWith("data:image/png");
	};
	l.default = m;
}), 98);
