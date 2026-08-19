__d("WAWebWdsPictoDisappearingMessagesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-disappearing-messages";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "#25d366",
			stroke: "#111b21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M77.5 44a33.5 33.5 0 1 1-67 0 33.5 33.5 0 0 1 67 0z"
		}), b = u.jsx("path", {
			fill: "none",
			stroke: "#111b21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M43.3 16.5c-14.1.9-25.4 11.3-27 23.8-2 14.8 10 29.9 27 31.3"
		}), h = u.jsx("path", {
			fill: "none",
			stroke: "#111b21",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M56.5 22.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1.9.8 1.7 1.7 1.7zm10.1 10.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7s.8 1.7 1.7 1.7zm3.7 13.8c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7 0 .9.8 1.7 1.7 1.7zm-3.7 13.7c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7zM57 69.5c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7z"
		}), y = u.jsx("path", {
			fill: "none",
			stroke: "#111b21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M55.8 33.6c-.6-.6-1.6-.7-2.2-.2l-12.3 9.2a3.54 3.54 0 0 0-.4 5.3l.5.5c1.5 1.5 4 1.3 5.3-.4L56 35.8c.5-.7.4-1.6-.2-2.2h0z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b) : (h = n[12], y = n[13], C = n[14], b = n[15]);
		var v;
		n[16] !== l || n[17] !== s || n[18] !== d || n[19] !== m || n[20] !== p || n[21] !== g ? (v = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			id: "Layer_1",
			x: "0",
			y: "0",
			version: "1.1",
			children: [
				g,
				C,
				b,
				h,
				y
			]
		}), n[16] = l, n[17] = s, n[18] = d, n[19] = m, n[20] = p, n[21] = g, n[22] = v) : v = n[22];
		var S;
		return n[23] !== a || n[24] !== v || n[25] !== _ || n[26] !== f ? (S = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: v
		})), n[23] = a, n[24] = v, n[25] = _, n[26] = f, n[27] = S) : S = n[27], S;
	}
	l.WdsPictoDisappearingMessagesIcon = d;
}), 98);
