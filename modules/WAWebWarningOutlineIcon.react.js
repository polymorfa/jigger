__d("WAWebWarningOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "warning-outline";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M1.16 22a1.14 1.14 0 0 1-1-.58 1.13 1.13 0 0 1 0-1.17L10.98 1.58c.11-.2.26-.34.45-.43.19-.1.38-.15.57-.15a1.21 1.21 0 0 1 1.02.58l10.82 18.67a1.13 1.13 0 0 1 0 1.17 1.14 1.14 0 0 1-1 .58H1.16Zm2.01-2.33h17.66L12 4.5 3.17 19.67ZM12 18.5c.33 0 .6-.11.83-.34.23-.22.34-.5.34-.83 0-.33-.11-.6-.34-.83-.22-.22-.5-.33-.83-.33-.33 0-.6.1-.83.33-.23.23-.34.5-.34.83 0 .33.11.61.34.83.22.23.5.34.83.34Zm0-3.5c.33 0 .6-.11.83-.34.23-.22.34-.5.34-.83v-3.5c0-.33-.11-.6-.34-.83-.22-.22-.5-.33-.83-.33-.33 0-.6.1-.83.33-.23.23-.34.5-.34.83v3.5c0 .33.11.61.34.83.22.23.5.34.83.34Z"
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
	l.WarningOutlineIcon = d;
}), 98);
