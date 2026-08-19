__d("WAWebSparklesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "sparkles";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 25, 24, "0 0 24 25"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M6.97 14.14c-.06-.27-.23-.39-.47-.39-.24 0-.43.14-.47.39-.56 3.04-.54 3.02-3.6 3.63-.29.06-.43.25-.43.47 0 .24.14.43.43.49 3.06.6 2.96.63 3.6 3.61.04.25.23.41.47.41.26 0 .4-.14.47-.4.64-3 .54-3.01 3.6-3.62.27-.06.43-.23.43-.49 0-.24-.16-.4-.43-.47-3.05-.57-3.06-.59-3.6-3.62v-.01ZM15.14 3.4c-.02-.4-.29-.65-.66-.65-.33 0-.6.24-.62.6-.7 5.23-.86 5.2-6.28 6.27a.63.63 0 0 0-.58.64c0 .36.24.6.58.64 5.42.78 5.6.93 6.28 6.23.02.38.29.62.62.62.37 0 .64-.24.66-.64.64-5.2.93-5.19 6.28-6.2.34-.07.58-.3.58-.65 0-.38-.24-.6-.66-.64-5.31-.89-5.56-1.02-6.2-6.23Z",
			style: { fillOpacity: 1 }
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
	l.SparklesIcon = d;
}), 98);
