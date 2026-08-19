__d("WAWebWorkplaceLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "workplace-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 2500, 2258, "57.298 33.288 725.764 773.407"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#4526ce",
			d: "M783 373c0-187.67-152.18-339.57-339.58-339.57A378 378 0 0 0 293.23 64.1a386.62 386.62 0 0 0 0 712.09 383.25 383.25 0 0 0 150.48 30.38 387.7 387.7 0 0 0 142.25-27l-29.25-73.82A307.16 307.16 0 0 1 226.5 202.94c58.21-57.92 135.15-90 217.21-90 143.67 0 260.07 116.41 260.07 260.08a259.15 259.15 0 0 1-43.15 143.38L593.05 350c-9.93-24.42-21.86-61-66.72-61s-56.78 36.91-66.44 61l-62.18 153.62-83.47-210.68H226.5L330.42 549c10.51 25.84 22.15 61.05 67.29 61.05s56.5-35.21 67-61.05l61.61-152.18L588.23 549c12.49 31.52 25.83 61.05 67 61.05 29.25 0 47.7-18.74 57.92-31A338 338 0 0 0 783 373"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.WorkplaceLogoIcon = d;
}), 98);
