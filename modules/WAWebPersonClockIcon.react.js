__d("WAWebPersonClockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-clock";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M7.17 10.82A3.85 3.85 0 0 0 10 12c1.1 0 2.04-.4 2.82-1.18A3.85 3.85 0 0 0 14 8c0-1.1-.4-2.04-1.18-2.83A3.85 3.85 0 0 0 10 4c-1.1 0-2.04.4-2.83 1.17A3.85 3.85 0 0 0 6 8c0 1.1.4 2.04 1.17 2.82ZM2 17.2v.8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h5.78c.28 0 .52-.1.7-.29.2-.19.3-.43.3-.71 0-.28-.1-.52-.3-.71a.97.97 0 0 0-.7-.29H4v-.8c0-.18.04-.35.13-.5.08-.15.2-.27.37-.35.83-.42 1.69-.74 2.56-.98.88-.23 1.78-.34 2.72-.34a.9.9 0 0 0 .7-.3.9.9 0 0 0 .3-.7 1.01 1.01 0 0 0-1-1.03c-1.09 0-2.15.14-3.18.41-1.03.28-2.03.66-3 1.14-.5.25-.9.62-1.18 1.1-.28.48-.42 1-.42 1.55Zm9.41-7.79c-.39.4-.86.59-1.41.59-.55 0-1.02-.2-1.41-.59C8.19 9.02 8 8.55 8 8c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41Zm2.05 10.13A4.82 4.82 0 0 0 17 21c1.38 0 2.56-.49 3.54-1.46A4.82 4.82 0 0 0 22 16c0-1.38-.49-2.56-1.46-3.54A4.82 4.82 0 0 0 17 11c-1.38 0-2.56.49-3.54 1.46A4.82 4.82 0 0 0 12 16c0 1.38.49 2.56 1.46 3.54ZM19 18c-.2.2-.5.2-.7 0l-1.8-1.8v-2.7a.5.5 0 0 1 1 0v2.3l1.5 1.5c.2.2.2.5 0 .7Z",
			clipRule: "evenodd"
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
	l.PersonClockIcon = d;
}), 98);
