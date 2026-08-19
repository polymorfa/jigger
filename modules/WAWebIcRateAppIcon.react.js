__d("WAWebIcRateAppIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-rate-app";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "m12 13.63 2.11 1.28q.3.2.61-.02a.5.5 0 0 0 .22-.57l-.55-2.41 1.88-1.64a.53.53 0 0 0 .17-.6q-.11-.34-.5-.37l-2.47-.2-.97-2.27a.5.5 0 0 0-.5-.33.5.5 0 0 0-.5.33l-.97 2.28-2.47.2q-.39.02-.5.37a.53.53 0 0 0 .17.6L9.6 11.9l-.55 2.41q-.08.36.22.57a.51.51 0 0 0 .61.02z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M2 4.6A2.6 2.6 0 0 1 4.6 2h14.8A2.6 2.6 0 0 1 22 4.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-3.49l-3.03 3.03a1.25 1.25 0 0 1-1.76 0L8.09 20H4.6A2.6 2.6 0 0 1 2 17.4zM4.6 4a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6h3.7a1.5 1.5 0 0 1 1.05.44L12 21.08l2.65-2.64A1.5 1.5 0 0 1 15.7 18h3.69a.6.6 0 0 0 .6-.6V4.6a.6.6 0 0 0-.6-.6z",
			clipRule: "evenodd"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.IcRateAppIcon = d;
}), 98);
