__d("WAWebTeamLinkMemberRowActions.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcMoreHoriz.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = e.invitation, n = e.onRemove, o = e.onRenew, a = t.invitationStatus, i = a === "PENDING" || a === "EXPIRED", l = a === "PENDING" || a === "EXPIRED", c = a === "COMPLETED", p = i || l || c, _ = m(null), f = u.jsxs(r("WDSMenu.react"), { children: [
			i && u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return o(t);
				},
				testid: "teamlink-row-renew"
			}),
			l && u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0,
				onPress: function() {
					return n(t);
				},
				testid: "teamlink-row-delete"
			}),
			c && u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0,
				onPress: function() {
					return n(t);
				},
				testid: "teamlink-row-offboard"
			})
		] }), g = r("useWDSMenu")({
			targetRef: _,
			menu: f
		}), h = g.closeMenu, y = g.isMenuOpen, C = g.menuPortal, b = g.openMenu, v = d(function(e) {
			e.stopPropagation(), y ? h() : b();
		}, [
			y,
			h,
			b
		]);
		return p ? u.jsxs("div", {
			className: "x2lah0s x1td3qas x10w6t97 x78zum5 x6s0dn4 xl56j7k",
			children: [u.jsx(r("WDSButton.react"), {
				ref: _,
				Icon: r("WDSIconIcMoreHoriz.react"),
				variant: "borderless",
				type: "default",
				size: "small",
				onPress: v,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"aria-haspopup": "menu",
				"aria-expanded": y,
				testid: "teamlink-row-actions-btn"
			}), C]
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
