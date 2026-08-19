__d("WAWebReceiptRefreshedFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "receipt-refreshed-filled";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M3 21.4V2.6c0-.12.05-.2.15-.24.1-.04.2-.02.27.06l.73.73a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.8-.8a.48.48 0 0 1 .7 0l.8.8a.48.48 0 0 0 .7 0l.72-.73c.09-.08.18-.1.28-.06.1.04.15.12.15.24v18.8c0 .12-.05.2-.15.24-.1.04-.2.02-.28-.07l-.72-.72a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.8.8a.48.48 0 0 1-.7 0l-.8-.8a.48.48 0 0 0-.7 0l-.73.72c-.08.09-.17.1-.27.07-.1-.04-.15-.12-.15-.24ZM7 17h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 15H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 16c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 11H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 12c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h10c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 7H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 8c0 .28.1.52.29.71.19.2.43.29.71.29Z"
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
	l.ReceiptRefreshedFilledIcon = d;
}), 98);
