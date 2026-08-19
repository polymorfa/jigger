__d("WAWebNewGroupIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "new-group";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M15.31 15.67c2.4 0 4.24-1.83 4.24-4.23S17.71 7.2 15.31 7.2s-4.23 1.84-4.23 4.24 1.83 4.23 4.23 4.23zm9.35-.64c1.57 0 2.77-1.2 2.77-2.77s-1.2-2.77-2.77-2.77-2.77 1.2-2.77 2.77 1.2 2.77 2.77 2.77zm-1.72 5.84a7.88 7.88 0 0 0-3.4-2.86l-.01-.01c-1.1-.5-2.5-.85-4.23-.85-1.74 0-3.13.35-4.24.85l-.1.05a9.25 9.25 0 0 0-1.75 1.1 8.2 8.2 0 0 0-1.56 1.72l-.16.27-.01.02a4.5 4.5 0 0 0-.22.4v2.28h16.06v-2.28s-.07-.16-.22-.42l-.16-.27zm1.72-4.35c-1.33 0-2.37.3-3.18.7.71.4 1.29.83 1.74 1.23a8.08 8.08 0 0 1 2.01 2.64l.02.05h4.96v-1.57s-1.3-3.05-5.55-3.05zM9.41 13.78H6.26v-3.15H4.34v3.15H1.2v1.92h3.14v3.14h1.92V15.7h3.15v-1.92z"
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
			enableBackground: "new 0 0 32 32",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.NewGroupIcon = d;
}), 98);
