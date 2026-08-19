__d("WAWebIcLightbulbIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-lightbulb";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M12 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41h4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm-3-3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 15 19H9Zm-.75-3a7.66 7.66 0 0 1-2.74-2.75A7.28 7.28 0 0 1 4.5 9.5c0-2.08.73-3.85 2.19-5.31A7.23 7.23 0 0 1 12 2c2.08 0 3.85.73 5.31 2.19A7.23 7.23 0 0 1 19.5 9.5c0 1.35-.34 2.6-1.01 3.75A7.66 7.66 0 0 1 15.75 16h-7.5Zm.6-2h6.3a5.55 5.55 0 0 0 2.35-4.5 5.3 5.3 0 0 0-1.6-3.9A5.3 5.3 0 0 0 12 4a5.3 5.3 0 0 0-3.9 1.6 5.3 5.3 0 0 0-1.6 3.9A5.38 5.38 0 0 0 8.85 14Z"
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
	l.IcLightbulbIcon = d;
}), 98);
