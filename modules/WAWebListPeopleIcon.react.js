__d("WAWebListPeopleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "list-people";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M8 18.38c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.4v-12c0-.56.2-1.03.59-1.42.39-.4.86-.59 1.41-.59h12c.55 0 1.02.2 1.41.59.4.4.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.6-1.41.6H8Zm7.74-2.75c.56.17 1.08.42 1.56.75h-6.6a5.52 5.52 0 0 1 3.3-1c.6 0 1.18.08 1.74.25ZM4 22.38c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.4v-13c0-.3.1-.53.29-.72.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.2.29.43.29.71v13h13c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.3-.71.3H4Zm4-6.3a7.77 7.77 0 0 1 6-2.7 7.77 7.77 0 0 1 6 2.7V4.38H8v11.7Zm8.13-5.07a2.9 2.9 0 0 1-2.13.87 2.9 2.9 0 0 1-2.13-.87A2.9 2.9 0 0 1 11 8.88c0-.83.3-1.54.88-2.12A2.9 2.9 0 0 1 14 5.88c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13ZM15 8.88a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
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
	l.ListPeopleIcon = d;
}), 98);
