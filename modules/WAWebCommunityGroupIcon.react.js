__d("WAWebCommunityGroupIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "community-group";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 19, 28, "0 0 28 19"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "white",
			fillRule: "evenodd",
			d: "M20.08 6.83a3.02 3.02 0 0 0 .49 1.25 2.6 2.6 0 0 0 2.13 1.1 2.72 2.72 0 0 0 2.65-2.78 2.72 2.72 0 0 0-2.65-2.78 2.66 2.66 0 0 0-1.16.26 2.6 2.6 0 0 0-1.37 1.68 3.27 3.27 0 0 0-.09 1.27Zm-12.16 0A2.83 2.83 0 0 1 6.9 8.64a2.63 2.63 0 0 1-1.6.55A2.72 2.72 0 0 1 2.65 6.4 2.72 2.72 0 0 1 5.3 3.62a2.66 2.66 0 0 1 1.16.26 2.6 2.6 0 0 1 1.37 1.68 3.6 3.6 0 0 1 .09.4c.04.3.04.59 0 .87Zm19.93 6.8a4.43 4.43 0 0 0-.73-.98 5.64 5.64 0 0 0-1.74-1.26h-.01a7.4 7.4 0 0 0-5.87 0c-.03 0-.06.02-.08.03l-.12.07.07.04a9.31 9.31 0 0 1 3.3 3.3c.11.18.19.37.24.58l.02.14H28v-1.62l-.15-.3Zm-9.73-9.1a4.66 4.66 0 0 0-.77-1.97A4.05 4.05 0 0 0 14 .83c-2.36 0-4.16 1.9-4.16 4.38s1.8 4.37 4.16 4.37a4.28 4.28 0 0 0 1.83-.42 4.05 4.05 0 0 0 2.01-2.22 4.88 4.88 0 0 0 .28-2.41Zm3.6 10.83a6.83 6.83 0 0 0-1.04-1.43 8.2 8.2 0 0 0-2.5-1.86 9.53 9.53 0 0 0-4.18-.9 9.5 9.5 0 0 0-4.19.9l-.1.06a8.77 8.77 0 0 0-1.73 1.15 8.19 8.19 0 0 0-1.83 2.33l-.1.2v2.52h15.9v-2.52c-.07-.15-.14-.3-.23-.45Zm-16.64.05c.01-.1.05-.2.1-.29.03-.07.06-.16.13-.27l.19-.34a9.15 9.15 0 0 1 3.2-3.03l-.1-.06-.07-.03a6.88 6.88 0 0 0-2.94-.61 6.88 6.88 0 0 0-2.94.6l-.02.01a5.64 5.64 0 0 0-2.35 2.05l-.12.19-.16.3v1.62h5.07l.01-.14Z",
			className: "primary",
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
	l.CommunityGroupIcon = d;
}), 98);
