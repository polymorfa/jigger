__d("WAWebWdsIllOrderRequestIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-order-request";
	function d(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 120, 180, "0 0 180 120"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b, v, S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M107.4 74.2H155v24.5c0 11.2-9.1 20.3-20.3 20.3h-27.2l-.1-44.8h0z"
		}), S = u.jsx("path", {
			fill: "#E6FFDA",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M114.6 1c-4.5 0-4.5 4.3-9 4.3s-4.5-4.3-9-4.3-4.5 4.3-8.9 4.3c-4.5 0-4.5-4.3-9-4.3s-4.5 4.3-8.9 4.3-4.5-4.3-9-4.3-4.5 4.3-9 4.3S47.4 1 42.9 1s-4.5 4.3-9 4.3-4.5-4.3-9-4.3v97.4c0 11.3 6.9 20.6 18.2 20.6h89.6c-11.3 0-18.2-9.2-18.2-20.6l.1-97.4h0z"
		}), h = u.jsx("path", {
			fill: "none",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M46 77h44M46 99h44M46 34.4h44m-44 22h44"
		}), y = u.jsx("path", {
			fill: "#FCF5EB",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "m137.9 60.4-41.4.6c-1.1 0-1.9-1.3-1.3-2.2l3.9-6.3-.2-14.7c-.1-9.5 7.5-17.3 17-17.5l21.5-.3c9.5-.1 17.3 7.5 17.5 17l.1 5.9c0 9.6-7.6 17.4-17.1 17.5h0z"
		}), C = u.jsx("path", {
			fill: "none",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M112.1 29.6h2.5c1.4 0 2.7 1 2.9 2.5l2 11.9c.2 1.3 1.3 2.2 2.7 2.2h14.4"
		}), b = u.jsx("path", {
			fill: "none",
			stroke: "#111B21",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M119.1 41.9h15.7c1.5 0 2.8-1.1 3-2.6l.9-6.5h-21.3m5.3 20.2a1.9 1.9 0 1 0-1.9-1.9c0 1.1.8 1.9 1.9 1.9zm11.4 0a1.9 1.9 0 1 0-1.9-1.9c.1 1.1.9 1.9 1.9 1.9z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S) : (h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== g ? (R = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			id: "Layer_1",
			x: "0px",
			y: "0px",
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
	l.WdsIllOrderRequestIcon = d;
}), 98);
