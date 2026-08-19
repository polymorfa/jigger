__d("WAWebMsgGifIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "msg-gif";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 21, "0 0 21 14"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M17.5 1.1H3.4C2 1.1.8 2.3.8 3.7v5.8c0 1.4 1.2 2.6 2.6 2.6h14.1c1.4 0 2.6-1.2 2.6-2.6V3.7c0-1.4-1.2-2.6-2.6-2.6zm-8.4 6c0 1.6-1 2.5-2.6 2.5-1.8 0-2.8-1.1-2.8-3s1.1-3 2.8-3c1.4 0 2.4.8 2.6 2H7.6c-.2-.5-.6-.8-1.2-.8-.8 0-1.3.7-1.3 1.8s.5 1.8 1.4 1.8c.7 0 1.1-.4 1.2-1v-.1H6.4v-1h2.7v.8zm2.6 2.4h-1.5V3.7h1.5v5.8zm5.2-4.6h-2.4v1.3h2.2v1.1h-2.2v2.1H13V3.7h3.9v1.2z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 21 14",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.MsgGifIcon = d;
}), 98);
