__d("WAWebHighlyForwardedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "highly-forwarded";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 20, "0 0 20 16"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillOpacity: .25,
			d: "M13.6 5.26h.03l.04-1.44c.02-.85.52-1.05 1.11-.44l3.63 3.69c.3.3.3.8.01 1.11l-3.65 3.85c-.59.61-1.06.42-1.06-.43V9.94l1.16-1.23c.58-.6.57-1.58-.02-2.18l-1.24-1.27Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillOpacity: .4,
			d: "M9.56 3.82c.02-.85.52-1.05 1.1-.44l3.64 3.69c.3.3.3.8.01 1.11l-3.65 3.85c-.59.61-1.07.42-1.07-.43V9.87s-4.56-.37-7.16 2.51c-.6.52-.77.58-.96.48-.14-.12-.19-.48.26-1.6 1.83-5.56 7.79-6 7.79-6l.04-1.44Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
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
	l.HighlyForwardedIcon = d;
}), 98);
