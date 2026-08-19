__d("WAWebGalleryMsg.react", [
	"WAWebGalleryMsg.stylex",
	"react",
	"stylex",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = t.active, a = t.children, i = t.current, l = t.footer, s = t.hover, d = t.onClick, m = t.onMouseEnter, p = t.onMouseLeave, _ = t.onMouseOver, f = t.testid, g = c(null), h = o("useWAWebHover").useWAWebHover(g), y = u.jsx("div", babelHelpers.extends({
			"data-testid": f,
			ref: g
		}, (e || (e = r("stylex"))).props(o("WAWebGalleryMsg.stylex").styles.msg, (h === !0 || s === !0) && o("WAWebGalleryMsg.stylex").styles.hover, i === !0 && o("WAWebGalleryMsg.stylex").styles.current, n === !0 && o("WAWebGalleryMsg.stylex").styles.active), {
			onClick: d,
			onMouseEnter: m,
			onMouseOver: _,
			onMouseLeave: p,
			children: a
		}));
		return u.jsxs(u.Fragment, { children: [y, l] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
