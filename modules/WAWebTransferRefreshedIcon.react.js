__d("WAWebTransferRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "transfer-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "m5.82 17 1.9 1.9c.2.2.3.43.3.7a1 1 0 0 1-.32.7c-.2.18-.43.28-.7.29a.92.92 0 0 1-.7-.29l-3.6-3.6a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1 0-.75.88.88 0 0 1 .21-.33l3.6-3.6a.93.93 0 0 1 .69-.27.97.97 0 0 1 1.01.99c0 .27-.1.5-.3.7L5.82 15H20c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 17H5.82Zm12.35-8H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14.17l-1.9-1.9a.92.92 0 0 1-.28-.7 1 1 0 0 1 .31-.7c.2-.18.43-.28.7-.29.27 0 .5.09.7.29l3.6 3.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .75.88.88 0 0 1-.21.33l-3.6 3.6a.93.93 0 0 1-.69.27.97.97 0 0 1-1.01-.99c0-.27.1-.5.3-.7L18.17 9Z"
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
	l.TransferRefreshedIcon = d;
}), 98);
