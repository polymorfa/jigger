__d("WAWebPaymentVisaLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-visa-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#1434CB",
			fillRule: "evenodd",
			d: "m17 8.97-.23 1.38-.16-.07a3.3 3.3 0 0 0-1.33-.24c-.7 0-1.02.28-1.02.55 0 .3.37.5 1 .79 1.02.45 1.5 1 1.49 1.74-.02 1.32-1.23 2.18-3.1 2.18-.8 0-1.56-.16-1.98-.34l.25-1.43.23.1c.59.24.96.34 1.68.34.5 0 1.05-.2 1.06-.63 0-.28-.23-.48-.92-.8-.68-.3-1.57-.81-1.56-1.73.01-1.24 1.25-2.11 3-2.11.7 0 1.24.14 1.6.27m-12.98 1.4A6.8 6.8 0 0 0 1 8.85l.02-.13H3.9c.38.01.7.13.8.54l.6 2.81.08.22.18.89L7.3 8.82h1.89l-2.8 6.38H4.5L2.9 9.6a5 5 0 0 1 1.13.77M23 15.2l-1.44-6.4H20.2c-.43 0-.75.12-.93.54l-2.64 5.86h1.86l.38-.96h2.27a85 85 0 0 1 .22.96zM9.9 8.8h1.77l-1.1 6.4h-1.8zm10.95 4.13h-1.48l.7-1.79.08-.19.16-.42.12.55z",
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
	l.PaymentVisaLogoIcon = d;
}), 98);
