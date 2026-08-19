__d("WAWebViewOnceSunsetIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "view-once-sunset";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 48, 48, "0 0 48 48"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("circle", {
			cx: 24,
			cy: 24,
			r: 24,
			fill: "#8497A3"
		}), C = u.jsx("path", {
			fill: "white",
			fillRule: "evenodd",
			d: "M24 34.33h.25a1 1 0 1 0-.05-2H24v2Zm0-18.66h.2a1 1 0 0 0 .05-2H24v2Zm4.95-.74a1 1 0 0 0-.96 1.75l.35.2a1 1 0 1 0 1.04-1.7l-.43-.25Zm3.87 3.7a1 1 0 1 0-1.7 1.03l.2.35a1 1 0 0 0 1.75-.96l-.25-.43Zm1.51 5.12a1 1 0 0 0-2 .05 8.25 8.25 0 0 1 0 .4 1 1 0 0 0 2 .05 10.6 10.6 0 0 0 0-.5Zm-1.26 5.2a1 1 0 0 0-1.75-.96l-.2.35a1 1 0 1 0 1.7 1.04l.25-.43Zm-3.69 3.87a1 1 0 0 0-1.04-1.7l-.35.2a1 1 0 0 0 .96 1.75l.43-.25ZM24 13.67a10.33 10.33 0 0 0 0 20.66v-2a8.33 8.33 0 0 1 0-16.66v-2Z",
			clipRule: "evenodd"
		}), h = u.jsx("path", {
			fill: "white",
			fillRule: "evenodd",
			d: "M22.67 19.33a1 1 0 1 0 0 2h1v6.34a1 1 0 1 0 2 0v-7.44a1 1 0 0 0-1-.9h-2Z",
			clipRule: "evenodd"
		}), n[12] = h, n[13] = y, n[14] = C) : (h = n[12], y = n[13], C = n[14]);
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				y,
				C,
				h
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.ViewOnceSunsetIcon = d;
}), 98);
