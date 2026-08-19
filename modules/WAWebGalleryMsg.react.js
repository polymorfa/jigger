__d("WAWebGalleryMsg.react", [
	"WAWebGalleryMsg.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = o("react-compiler-runtime").c(16), a = t.active, i = t.children, l = t.current, s = t.footer, d = t.hover, m = t.onClick, p = t.onMouseEnter, _ = t.onMouseLeave, f = t.onMouseOver, g = t.testid, h = c(null), y = o("useWAWebHover").useWAWebHover(h), C;
		n[0] !== a || n[1] !== l || n[2] !== d || n[3] !== y ? (C = (e || (e = r("stylex"))).props(o("WAWebGalleryMsg.stylex").styles.msg, (y === !0 || d === !0) && o("WAWebGalleryMsg.stylex").styles.hover, l === !0 && o("WAWebGalleryMsg.stylex").styles.current, a === !0 && o("WAWebGalleryMsg.stylex").styles.active), n[0] = a, n[1] = l, n[2] = d, n[3] = y, n[4] = C) : C = n[4];
		var b;
		n[5] !== i || n[6] !== m || n[7] !== p || n[8] !== _ || n[9] !== f || n[10] !== C || n[11] !== g ? (b = u.jsx("div", babelHelpers.extends({
			"data-testid": g,
			ref: h
		}, C, {
			onClick: m,
			onMouseEnter: p,
			onMouseOver: f,
			onMouseLeave: _,
			children: i
		})), n[5] = i, n[6] = m, n[7] = p, n[8] = _, n[9] = f, n[10] = C, n[11] = g, n[12] = b) : b = n[12];
		var v = b, S;
		return n[13] !== s || n[14] !== v ? (S = u.jsxs(u.Fragment, { children: [v, s] }), n[13] = s, n[14] = v, n[15] = S) : S = n[15], S;
	}
	l.default = d;
}), 98);
