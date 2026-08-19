__d("WAWebAddGroupToCommunityDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNewGroupIcon.react",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"WDSIconWdsIcCommunities.react",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		drawerButtonHeight: {
			minHeight: "x1qafhyn",
			height: "xt7dq6l",
			$$css: !0
		},
		drawerButtonText: {
			textWrap: "xk4td0m",
			$$css: !0
		},
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginBottom2: {
			marginBottom: "x13m54ha",
			$$css: !0
		},
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onAddGroupToExistingCommunity, l = a.onAddGroupToNewCommunity, u = a.onBack, d = r("useWAWebFocusOnMount")(), m = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = c.jsx(r("WAWebRoundShape.react"), { children: c.jsx(o("WAWebNewGroupIcon.react").NewGroupIcon, {}) }), C = c.jsx(r("WAWebRoundShape.react"), { children: c.jsx(r("WDSIconWdsIcCommunities.react"), {
			height: 24,
			width: 24
		}) });
		return c.jsx("div", {
			role: "complementary",
			ref: d,
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: n,
				testid: "add-group-to-community-drawer",
				tsNavigationData: {
					surface: "unknown",
					viewName: "add-group-to-community"
				},
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: m,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: u
				}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), { children: [c.jsx(p, {
					testId: "new-community-row",
					icon: y,
					onClick: l,
					title: _,
					description: f
				}), c.jsx(p, {
					testId: "existing-community-row",
					icon: C,
					onClick: i,
					title: g,
					description: h
				})] }) })]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.description, n = e.icon, r = e.onClick, a = e.testId, i = e.title;
		return c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: a,
			icon: n,
			onClick: r,
			ariaLabel: i,
			xstyle: d.drawerButtonHeight,
			children: [c.jsx(o("WAWebText.react").WAWebTextTitle, {
				xstyle: [
					d.drawerButtonText,
					d.marginTop16,
					d.marginBottom2
				],
				children: i
			}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: [d.drawerButtonText, d.marginBottom16],
				children: t
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
