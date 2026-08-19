__d("WAWebShopIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shop";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M11.9 2c2.1 0 3.32 1.16 3.54 3.27h.5a3.97 3.97 0 0 1 3.94 3.54l.91 8.18a3.97 3.97 0 0 1-3.95 4.41H6.97a3.97 3.97 0 0 1-3.95-4.41l.91-8.18a3.97 3.97 0 0 1 3.75-3.53h.7C8.59 3.15 9.8 2 11.9 2Zm4.03 4.67H7.71a2.57 2.57 0 0 0-2.39 2.3l-.9 8.17A2.57 2.57 0 0 0 6.97 20h9.87a2.57 2.57 0 0 0 2.56-2.86l-.91-8.18a2.57 2.57 0 0 0-2.56-2.29Zm-1.17 1.88h.1c.37.04.65.4.6.78-.25 2.24-1.49 3.48-3.55 3.48-2.07 0-3.3-1.24-3.56-3.48a.7.7 0 1 1 1.39-.16c.18 1.57.85 2.24 2.17 2.24 1.31 0 1.98-.67 2.17-2.24a.7.7 0 0 1 .58-.62h.1ZM11.9 3.4c-1.3 0-1.96.56-2.13 1.87h4.25c-.16-1.3-.83-1.87-2.12-1.87Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.ShopIcon = d;
}), 98);
