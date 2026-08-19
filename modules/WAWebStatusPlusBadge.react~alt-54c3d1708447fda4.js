__d("WAWebStatusPlusBadge.react", [
	"WAWebRound.react",
	"WDSIconIcAdd.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		badge: {
			height: "x1ta3ar0",
			width: "x1se2ifz",
			transitionProperty: "x13b0p5u",
			boxShadow: "x1gnnqk1",
			backgroundColor: "xfn3atn",
			color: "x1pse0pq",
			$$css: !0
		},
		badgeBackplate: {
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1j8ymqv",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x4tra6z",
			position: "x10l6tqk",
			bottom: "x1o583il",
			insetInlineEnd: "x1euzuty",
			left: null,
			right: null,
			zIndex: "xupqr0c",
			backgroundColor: "x1280gxy",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.anchorRef, n = e.onClick, a = e.positionXstyle;
		return s.jsx(o("WAWebRound.react").Round, {
			ref: t,
			testid: "status-plus-badge",
			onClick: n,
			xstyle: [
				u.badge,
				u.badgeBackplate,
				a
			],
			children: s.jsx(o("WAWebRound.react").Round, {
				xstyle: u.badge,
				children: s.jsx(r("WDSIconIcAdd.react"), {
					width: 14,
					height: 14
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
