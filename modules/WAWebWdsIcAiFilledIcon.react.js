__d("WAWebWdsIcAiFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-ai-filled";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M15.63 4.73a2.73 2.73 0 1 1-5.45 0 2.73 2.73 0 0 1 5.45 0Zm4.46 1.43c.36.11.63.4.72.77l1.17 5.22a1.05 1.05 0 0 1-1.34 1.24l-5.1-1.6a1.05 1.05 0 0 1-.4-1.78l3.93-3.62a1.05 1.05 0 0 1 1.02-.23M7.86 9A1.05 1.05 0 0 1 9.8 9l1.39 3.24c.1.25.3.45.55.55L15 14.2c.85.36.85 1.56 0 1.92l-3.25 1.4a1.05 1.05 0 0 0-.55.54l-1.42 3.31c-.36.84-1.55.86-1.93.02l-1.52-3.35a1.05 1.05 0 0 0-.54-.52l-3.15-1.39a1.05 1.05 0 0 1 0-1.92l3.29-1.4a1.05 1.05 0 0 0 .55-.56z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.WdsIcAiFilledIcon = d;
}), 98);
