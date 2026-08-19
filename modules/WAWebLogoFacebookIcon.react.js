__d("WAWebLogoFacebookIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "logo-facebook";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 28, "0 0 28 28"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#263238",
			fillOpacity: .3,
			d: "M15.09 14.73 15.1 26H4.33A4.3 4.3 0 0 1 0 21.67V4.33A4.3 4.3 0 0 1 4.33 0h17.34A4.3 4.3 0 0 1 26 4.33v17.34A4.3 4.3 0 0 1 21.67 26h-5.3l-.02-11.27h3.46l.2-1.28h-3.65v-1l.02-2.11c0-1.64.78-2.6 2.58-2.6l1.22-.06v-1.3h-.02l-1.95.03c-2.07 0-3.1 1.03-3.1 3.27l-.03 3.77H11.8v1.28h3.29ZM14.1 25v-9.27h-3.3v-3.28h3.28l.02-2.78c0-2.86 1.57-4.26 4.1-4.26 1.2 0 2.98-.05 2.98-.05v3.28l-2.17.1c-1.4 0-1.63.67-1.63 1.6l-.02 2.11h3.83l-.53 3.28h-3.3V25h4.3A3.3 3.3 0 0 0 25 21.67V4.33A3.3 3.3 0 0 0 21.67 1H4.33A3.3 3.3 0 0 0 1 4.33v17.34A3.3 3.3 0 0 0 4.33 25h9.77Z"
		}), y = u.jsx("path", {
			fill: "#FFFFFF",
			fillOpacity: .6,
			d: "M14.1 25H4.33A3.3 3.3 0 0 1 1 21.67V4.33A3.3 3.3 0 0 1 4.33 1h17.34A3.3 3.3 0 0 1 25 4.33v17.34A3.3 3.3 0 0 1 21.67 25h-4.3l-.02-9.27h3.31l.53-3.28h-3.83l.02-2.11c0-.93.23-1.6 1.63-1.6l2.17-.1V5.36s-1.77.05-2.97.05c-2.54 0-4.1 1.4-4.1 4.26l-.03 2.78H10.8v3.28h3.3V25Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
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
	l.LogoFacebookIcon = d;
}), 98);
