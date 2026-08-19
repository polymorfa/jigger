__d("WAWebIcLocalShippingIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-local-shipping";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M6 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 3 17H2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 1 16V6c0-.55.2-1.02.59-1.41C1.98 4.19 2.45 4 3 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2h2a1.99 1.99 0 0 1 1.6.8l2.2 2.92c.07.09.12.18.15.28.03.1.05.2.05.32V16c0 .28-.1.52-.29.71A.94.94 0 0 1 22 17h-1c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 18 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 15 17H9c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 6 20Zm0-2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 6 16c-.28 0-.52.1-.71.29A.94.94 0 0 0 5 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm-3-3h.8c.28-.3.6-.54.98-.72A2.7 2.7 0 0 1 6 14c.45 0 .86.1 1.22.28.37.18.7.42.98.72H15V6H3v9Zm15 3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 18 16c-.28 0-.52.1-.71.29A.94.94 0 0 0 17 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm-1-5h4.25L19 10h-2v3Z"
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
	l.IcLocalShippingIcon = d;
}), 98);
