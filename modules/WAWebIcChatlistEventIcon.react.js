__d("WAWebIcChatlistEventIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-chatlist-event";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M10 15c-.55 0-1.03-.2-1.42-.58A1.92 1.92 0 0 1 8 13a1.98 1.98 0 0 1 2-2 1.98 1.98 0 0 1 2 2 1.98 1.98 0 0 1-2 2Zm-7.5 3c-.41 0-.77-.15-1.06-.45-.3-.3-.44-.65-.44-1.05v-11c0-.4.15-.75.44-1.05.3-.3.65-.45 1.06-.45H4V2.75c0-.21.07-.4.21-.53A.72.72 0 0 1 4.75 2c.2 0 .39.07.53.22a.7.7 0 0 1 .22.53V4h5V2.75c0-.21.07-.4.21-.53a.72.72 0 0 1 .54-.22c.2 0 .39.07.53.22a.7.7 0 0 1 .22.53V4h1.5c.41 0 .77.15 1.06.45.3.3.44.65.44 1.05v11c0 .4-.15.75-.44 1.05-.3.3-.65.45-1.06.45h-11Zm0-1.5h11V9h-11v7.5Z"
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
	l.IcChatlistEventIcon = d;
}), 98);
