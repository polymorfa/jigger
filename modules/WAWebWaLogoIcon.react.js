__d("WAWebWaLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wa-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 30, 31, "0 0 31 30"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.17 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.15-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.23 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.WaLogoIcon = d;
}), 98);
