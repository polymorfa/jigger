__d("WAWebGifRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gif-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M4.25 4.5h11.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H4.25c-.97 0-1.75-.78-1.75-1.75v-7.5c0-.97.78-1.75 1.75-1.75ZM1 6.25C1 4.45 2.46 3 4.25 3h11.5C17.55 3 19 4.46 19 6.25v7.5c0 1.8-1.46 3.25-3.25 3.25H4.25A3.25 3.25 0 0 1 1 13.75v-7.5Zm9.29 6.54a.73.73 0 0 1-.54.21.73.73 0 0 1-.75-.75v-4.5A.73.73 0 0 1 9.75 7a.73.73 0 0 1 .75.75v4.5c0 .22-.07.4-.21.54ZM7 13H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 12V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2.25a.73.73 0 0 1 .75.75.73.73 0 0 1-.75.75H5.5v3h1v-.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75V12c0 .28-.1.52-.29.71A.94.94 0 0 1 7 13Zm5.75 0a.73.73 0 0 0 .75-.75V11h1.25a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75H13.5v-1h2.25a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75h-3a.73.73 0 0 0-.75.75v4.5a.73.73 0 0 0 .75.75Z",
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
	l.GifRefreshedIcon = d;
}), 98);
