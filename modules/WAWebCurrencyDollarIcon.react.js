__d("WAWebCurrencyDollarIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "currency-dollar";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			d: "M12.03 21a.97.97 0 0 1-.72-.29.97.97 0 0 1-.28-.71v-1.15a5.2 5.2 0 0 1-1.98-.88q-.85-.62-1.38-1.74a.85.85 0 0 1 0-.74q.16-.39.58-.56a.88.88 0 0 1 .72 0q.38.17.58.55.42.75 1.07 1.13t1.6.39q1.03 0 1.74-.46t.71-1.44q0-.87-.55-1.39-.55-.51-2.55-1.16-2.15-.67-2.95-1.61t-.8-2.29q0-1.62 1.05-2.52t2.15-1.03V4q0-.42.3-.71a.97.97 0 0 1 .7-.29q.43 0 .72.29.29.28.29.71v1.1q.95.15 1.65.61t1.15 1.14q.22.33.08.72a.94.94 0 0 1-.56.58.95.95 0 0 1-.72.01 1.8 1.8 0 0 1-.7-.49 2.2 2.2 0 0 0-.77-.53q-.43-.19-1.08-.19-1.1 0-1.68.49-.57.48-.57 1.21 0 .82.75 1.3t2.6 1q1.72.5 2.6 1.59.9 1.08.9 2.51 0 1.77-1.05 2.7-1.05.93-2.6 1.15V20q0 .42-.3.71a.97.97 0 0 1-.7.29",
			style: { fill: "color(display-p3 .3725 .3882 .4078)" }
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
	l.CurrencyDollarIcon = d;
}), 98);
