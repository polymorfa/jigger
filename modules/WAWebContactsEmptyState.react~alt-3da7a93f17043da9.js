__d("WAWebContactsEmptyState.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebIntroPanelStyles.stylex",
	"WDSIconIcContacts.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		heroIcon: {
			color: "x1vef352",
			display: "x1rg5ohu",
			$$css: !0
		},
		spacingSingleBottom: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		spacingTripleTop: {
			marginTop: "x9u28bd",
			$$css: !0
		}
	};
	function m() {
		return c.jsx(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "contacts-empty-state-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "contacts-empty-state"
			},
			children: c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro), { children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), { children: [
				c.jsx(r("WDSIconIcContacts.react"), {
					height: 64,
					width: 64,
					xstyle: d.heroIcon
				}),
				c.jsx(r("WDSText.react"), {
					type: "LargeTitle1",
					colorName: "contentDefault",
					isPrimaryHeading: !0,
					xstyle: [d.spacingSingleBottom, d.spacingTripleTop],
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			] })) })) })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
