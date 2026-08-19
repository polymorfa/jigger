__d("WAWebGmeetLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gmeet-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 72, 87.5, "0 0 87.5 72"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b, v, S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx("path", {
			fill: "#00832d",
			d: "m49.5 36 8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"
		}), S = u.jsx("path", {
			fill: "#0066da",
			d: "M0 51.5V66a6 6 0 0 0 6 6h14.5l3-10.96-3-9.54-9.95-3z"
		}), h = u.jsx("path", {
			fill: "#e94235",
			d: "M20.5 0 0 20.5l10.55 3 9.95-3 2.95-9.41z"
		}), y = u.jsx("path", {
			fill: "#2684fc",
			d: "M20.5 20.5H0v31h20.5z"
		}), C = u.jsx("path", {
			fill: "#00ac47",
			d: "M82.6 8.68 69.5 19.42v33.66l13.16 10.79a3 3 0 0 0 4.85-2.37V11a3 3 0 0 0-4.91-2.32M49.5 36v15.5h-29V72h43a6 6 0 0 0 6-6V53.08z"
		}), b = u.jsx("path", {
			fill: "#ffba00",
			d: "M63.5 0h-43v20.5h29V36l20-16.57V6a6 6 0 0 0-6-6"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S) : (h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== g ? (R = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				v,
				S,
				h,
				y,
				C,
				b
			]
		}), n[18] = l, n[19] = s, n[20] = d, n[21] = m, n[22] = p, n[23] = g, n[24] = R) : R = n[24];
		var L;
		return n[25] !== a || n[26] !== R || n[27] !== _ || n[28] !== f ? (L = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: R
		})), n[25] = a, n[26] = R, n[27] = _, n[28] = f, n[29] = L) : L = n[29], L;
	}
	l.GmeetLogoIcon = d;
}), 98);
