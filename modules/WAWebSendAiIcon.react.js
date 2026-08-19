__d("WAWebSendAiIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "send-ai";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M16.11 16.8a.58.58 0 0 1 1.07 0l.77 1.79c.06.14.17.25.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.77a.55.55 0 0 0-.3.3l-.78 1.82a.58.58 0 0 1-1.06.01l-.84-1.85a.58.58 0 0 0-.29-.29l-1.74-.76a.58.58 0 0 1 0-1.06l1.81-.77a.55.55 0 0 0 .3-.3l.77-1.79h-.01Zm3.66.19a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68Zm-.08-4.5-15.4 6.5a1 1 0 0 1-.95-.09.93.93 0 0 1-.45-.84v-13c0-.37.15-.65.45-.84a1 1 0 0 1 .95-.09l15.4 6.5c.42.18.62.49.62.93 0 .44-.21.74-.62.93Zm-14.8 4.07 11.85-5-11.85-5v3.5l6 1.5-6 1.5v3.5Z"
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
	l.SendAiIcon = d;
}), 98);
