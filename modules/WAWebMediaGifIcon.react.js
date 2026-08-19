__d("WAWebMediaGifIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-gif";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M17.9 9v2h3.5c.2 0 .5.1.6.2.3.2.4.6.3 1-.1.4-.4.6-.8.6h-3.6v2.7c0 .8-.8 1.2-1.4.9-.3-.2-.5-.5-.5-.9V8.4c0-.7.4-1.1 1.1-1.1H22c.5 0 .9.3 1 .7.1.6-.3 1-.9 1h-4.2ZM7.7 12.8H6.3c-.2 0-.4-.1-.5-.1-.3-.2-.4-.5-.3-.9.1-.3.4-.6.7-.6h2.6c.4 0 .8.4.8.9v2.5c0 .5-.3.8-.7 1.1-1.1.6-2.2 1-3.5.9-1.8-.1-3.3-.9-4-2.7-1.2-2.6.1-5.9 3.3-6.6 1.4-.3 2.8-.1 4.1.7.4.2.5.6.4 1-.1.4-.3.6-.7.7-.3.1-.6 0-.8-.2-.5-.3-1-.5-1.5-.6-1.5-.2-2.9.9-3.1 2.4-.1.6 0 1.2.2 1.8.5 1.2 1.7 1.9 3 1.7.5-.1 1-.2 1.4-.5.1-.1.2-.2.2-.3-.2-.4-.2-.8-.2-1.2Zm5.9-1v3.6c0 .7-.5 1.1-1.2 1-.4-.1-.7-.4-.7-.8V8.3c0-.2 0-.4.1-.6.2-.4.6-.6 1.1-.5.4.1.7.5.7.9v3.7Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.MediaGifIcon = d;
}), 98);
