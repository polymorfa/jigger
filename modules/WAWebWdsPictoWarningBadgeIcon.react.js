__d("WAWebWdsPictoWarningBadgeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-warning-badge";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			fill: "#FFB938",
			stroke: "#111B21",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M16 31a15 15 0 1 0 0-30 15 15 0 0 0 0 30Z"
		}), C = u.jsx("path", {
			fill: "white",
			d: "M16.46 6.54h-.91v.01c-1.2 0-2.16.96-2.16 2.16v6.59a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17V8.69c0-1.19-.96-2.15-2.15-2.15Zm0 14.16h-.91c-1.2 0-2.16.97-2.16 2.16v.47a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17v-.43c0-1.2-.96-2.16-2.15-2.16Z"
		}), h = u.jsx("path", {
			stroke: "#111B21",
			strokeLinejoin: "round",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M16.46 6.54h-.91v.01c-1.2 0-2.16.96-2.16 2.16v6.59a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17V8.69c0-1.19-.96-2.15-2.15-2.15Zm0 14.16h-.91c-1.2 0-2.16.97-2.16 2.16v.47a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17v-.43c0-1.2-.96-2.16-2.15-2.16Z"
		}), n[12] = h, n[13] = y, n[14] = C) : (h = n[12], y = n[13], C = n[14]);
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				y,
				C,
				h
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.WdsPictoWarningBadgeIcon = d;
}), 98);
