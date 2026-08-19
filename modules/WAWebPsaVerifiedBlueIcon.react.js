__d("WAWebPsaVerifiedBlueIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "psa-verified-blue";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#007BFC",
			fillRule: "evenodd",
			d: "m16.6 8.24 1.17 1.19c.3.31.3.82 0 1.14l-1.18 1.2.42 1.61c.1.44-.15.89-.58 1l-1.61.44-.44 1.61a.82.82 0 0 1-1 .58l-1.62-.42-1.2 1.17A.82.82 0 0 1 10 18a.82.82 0 0 1-.58-.24L8.23 16.6l-1.62.4a.82.82 0 0 1-1-.58l-.43-1.61-1.62-.44a.82.82 0 0 1-.57-1l.42-1.62-1.17-1.19a.81.81 0 0 1 0-1.15L3.4 8.23 3 6.61a.81.81 0 0 1 .57-1l1.62-.44.44-1.61a.82.82 0 0 1 1-.57l1.61.42 1.2-1.17a.81.81 0 0 1 1.15 0l1.19 1.17L13.39 3c.43-.1.88.15 1 .58l.43 1.61 1.62.44c.43.12.7.56.58 1l-.43 1.62Zm-7.22 4.53a.79.79 0 0 1-.57.23.83.83 0 0 1-.57-.23l-2-2a.8.8 0 1 1 1.12-1.13l1.44 1.43 3.84-3.84a.8.8 0 1 1 1.13 1.13l-2.2 2.2-2.2 2.2Z",
			clipRule: "evenodd",
			style: {
				fill: "#007bfc",
				fillOpacity: 1
			}
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
	l.PsaVerifiedBlueIcon = d;
}), 98);
