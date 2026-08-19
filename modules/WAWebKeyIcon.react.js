__d("WAWebKeyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "key";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("mask", {
			id: "WAWebKeyIcon__a",
			width: 20,
			height: 20,
			x: 0,
			y: 0,
			maskUnits: "userSpaceOnUse",
			style: { maskType: "alpha" },
			children: u.jsx("path", {
				fill: "currentColor",
				d: "M0 0h20v20H0z"
			})
		}), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("g", {
			mask: "url(#WAWebKeyIcon__a)",
			children: u.jsx("path", {
				fill: "currentColor",
				d: "M6 12.81c-.64 0-1.18-.22-1.64-.67-.45-.45-.67-1-.67-1.64 0-.64.22-1.18.67-1.64.45-.45 1-.67 1.64-.67.64 0 1.18.22 1.64.67.45.45.67 1 .67 1.64 0 .64-.22 1.18-.67 1.64-.45.45-1 .67-1.64.67Zm0 2.69a4.9 4.9 0 0 0 2.88-.94 4.65 4.65 0 0 0 1.8-2.41H11l1.06 1.06a.8.8 0 0 0 .3.19c.1.04.22.06.33.06a.86.86 0 0 0 .6-.25l1.04-1.04 1.07 1.04a.83.83 0 0 0 .6.25.98.98 0 0 0 .63-.25l2.1-2.13a1 1 0 0 0 .2-.29.8.8 0 0 0 0-.67 1 1 0 0 0-.2-.29l-.77-.77a.84.84 0 0 0-.6-.25h-6.67A4.72 4.72 0 0 0 8.9 6.44 4.86 4.86 0 0 0 6 5.5c-1.39 0-2.57.49-3.54 1.46A4.82 4.82 0 0 0 1 10.5c0 1.39.49 2.57 1.46 3.54A4.82 4.82 0 0 0 6 15.5Z"
			})
		}), n[13] = y) : y = n[13];
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
	l.KeyIcon = d;
}), 98);
