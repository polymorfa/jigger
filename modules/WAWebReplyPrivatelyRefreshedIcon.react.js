__d("WAWebReplyPrivatelyRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "reply-privately-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M10 12a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 6 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 10 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 14 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 10 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 8.07-1.45l-1.79 1.79-.11.11a12.72 12.72 0 0 0-5.27 1.35.97.97 0 0 0-.5.85v.8h5.17c.15.42.4.8.71 1.11l.89.89H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm8-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59C8.19 6.98 8 7.45 8 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Zm5.6 6h-1.15l1.87-1.88a.97.97 0 0 0 0-1.43.97.97 0 0 0-.71-.29c-.28 0-.51.1-.71.3l-3.6 3.6a.96.96 0 0 0 0 1.4l3.6 3.6c.18.18.4.28.68.29.28 0 .52-.09.72-.29.2-.2.3-.44.3-.71a.93.93 0 0 0-.28-.72L14.45 18H18a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5h-2.4Z",
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
	l.ReplyPrivatelyRefreshedIcon = d;
}), 98);
