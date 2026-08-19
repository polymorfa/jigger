__d("WAWebDrawerStickyCtaButton.react", [
	"WAWebButton.react",
	"WAWebDrawerSection.react",
	"react",
	"useWAWebIntersection"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = { ctaContainerSticky: {
		position: "xet78yd",
		bottom: "x1ey2m1c",
		left: "xu96u03",
		insetInlineStart: null,
		insetInlineEnd: null,
		boxShadow: "x1906y37",
		$$css: !0
	} };
	function p(e) {
		var t = d(), n = t[0], o = t[1], a = d(), i = a[0], l = a[1], s = r("useWAWebIntersection")({
			root: e,
			rootMargin: n != null ? "-" + n.offsetHeight + "px" : void 0
		}), u = s[0], m = s[1].isIntersecting, p = function(t) {
			u(t), l(t);
		};
		return c(function() {
			if (e != null && n != null && i != null) {
				if (m) n.style.removeProperty("right");
				else {
					var t = e.offsetWidth - (e.clientWidth + e.clientLeft * 2);
					n.style.setProperty("right", t + "px");
				}
				i.style.setProperty("min-height", n.offsetHeight + "px");
			}
		}, [
			m,
			e,
			n,
			i
		]), [
			m,
			p,
			o
		];
	}
	function _(e) {
		var t = e.children, n = e.disabled, a = e.onClick, i = e.rootRef, l = p(i), u = l[0], c = l[1], d = l[2];
		return s.jsx("div", {
			ref: c,
			className: "xyorhqc",
			children: s.jsx(r("WAWebDrawerSection.react"), {
				ref: d,
				xstyle: u ? null : m.ctaContainerSticky,
				theme: "sticky-button-section",
				children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
					onClick: a,
					disabled: n,
					stretch: !0,
					children: t
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
