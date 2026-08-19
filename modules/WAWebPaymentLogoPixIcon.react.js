__d("WAWebPaymentLogoPixIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-logo-pix";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fillRule: "evenodd",
			d: "M3.52 3.55c.5 0 .99.2 1.35.56l1.96 1.95c.14.15.37.15.5 0L9.3 4.11a1.9 1.9 0 0 1 1.35-.56h.23L8.4 1.08a1.98 1.98 0 0 0-2.8 0L3.13 3.55zm7.12 6.9c-.51 0-1-.2-1.35-.56L7.34 7.94a.37.37 0 0 0-.51 0L4.87 9.89a1.9 1.9 0 0 1-1.35.56h-.39l2.47 2.47a1.98 1.98 0 0 0 2.8 0l2.47-2.47zm.78-6.34 1.5 1.5a1.98 1.98 0 0 1 0 2.79l-1.5 1.5a.3.3 0 0 0-.1-.03h-.68a1.34 1.34 0 0 1-.95-.39L7.74 7.53a.96.96 0 0 0-1.32 0L4.46 9.5a1.35 1.35 0 0 1-.94.39h-.84a.3.3 0 0 0-.1.02l-1.5-1.5a1.98 1.98 0 0 1 0-2.8l1.5-1.5.1.02h.84c.35 0 .7.14.94.4l1.96 1.95a.93.93 0 0 0 1.32 0L9.7 4.52c.25-.25.6-.4.95-.4h.68a.3.3 0 0 0 .1-.01",
			clipRule: "evenodd",
			style: { fill: "color(display-p3 .1961 .7373 .6745)" }
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
	l.PaymentLogoPixIcon = d;
}), 98);
