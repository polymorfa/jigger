__d("WAWebWdsIllLinkWebIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-link-web";
	function d(t) {
		var n = o("react-compiler-runtime").c(29), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 121, 180, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b, v;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx("path", {
			fill: "#E6FFDA",
			stroke: "#111B21",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M34.05 110.86c-8.64 0-15.7-7.05-15.7-15.7v-72.2a12.1 12.1 0 0 1 12.1-12.1h119.1a12.1 12.1 0 0 1 12.1 12.1v72.2c0 8.65-7.06 15.7-15.7 15.7H34.05Z"
		}), v = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M18.36 26.02v-3.06a12.1 12.1 0 0 1 12.1-12.1h119.08a12.1 12.1 0 0 1 12.1 12.1V26H18.36Z"
		}), h = u.jsx("path", {
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "m143.1 15.18 7.24 7.24m.06-7.24-7.24 7.24"
		}), y = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeWidth: 1.5,
			d: "M84.06 47.9a3.68 3.68 0 0 1 0 7.37h-8.8c-2.1 0-3.88.68-5.4 2.06l-.29.28a7.73 7.73 0 0 0-2.34 5.7c0 2.25.77 4.13 2.34 5.7a7.73 7.73 0 0 0 5.7 2.35h8.8a3.68 3.68 0 0 1 0 7.36h-8.8c-4.12 0-7.67-1.42-10.62-4.23l-.28-.28c-3-3-4.5-6.65-4.5-10.9s1.5-7.9 4.5-10.9l.28-.28a14.85 14.85 0 0 1 10.62-4.23h8.8Zm14.66 11.73a3.68 3.68 0 1 1 0 7.36H81.13a3.68 3.68 0 0 1 0-7.36h17.6Z"
		}), C = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeWidth: 1.5,
			d: "M95.94 47.9a3.68 3.68 0 0 0 0 7.37h8.8c2.1 0 3.89.68 5.4 2.06l.29.28a7.74 7.74 0 0 1 2.34 5.7c0 2.25-.77 4.13-2.34 5.7a7.73 7.73 0 0 1-5.7 2.35h-8.8a3.68 3.68 0 0 0 0 7.36h8.8c4.12 0 7.67-1.42 10.62-4.23l.28-.28c3-3 4.5-6.65 4.5-10.9s-1.5-7.9-4.5-10.9l-.28-.28a14.85 14.85 0 0 0-10.62-4.23h-8.8Z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v) : (h = n[12], y = n[13], C = n[14], b = n[15], v = n[16]);
		var S;
		n[17] !== l || n[18] !== s || n[19] !== d || n[20] !== m || n[21] !== p || n[22] !== g ? (S = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				b,
				v,
				h,
				y,
				C
			]
		}), n[17] = l, n[18] = s, n[19] = d, n[20] = m, n[21] = p, n[22] = g, n[23] = S) : S = n[23];
		var R;
		return n[24] !== a || n[25] !== S || n[26] !== _ || n[27] !== f ? (R = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: S
		})), n[24] = a, n[25] = S, n[26] = _, n[27] = f, n[28] = R) : R = n[28], R;
	}
	l.WdsIllLinkWebIcon = d;
}), 98);
