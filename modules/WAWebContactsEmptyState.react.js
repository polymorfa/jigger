__d("WAWebContactsEmptyState.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebIntroPanelStyles.stylex",
	"WDSIconIcContacts.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(6), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
			surface: "unknown",
			viewName: "contacts-empty-state"
		}, t[0] = n) : n = t[0];
		var a, i, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro), i = e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), l = c.jsx(r("WDSIconIcContacts.react"), {
			height: 64,
			width: 64,
			xstyle: d.heroIcon
		}), t[1] = a, t[2] = i, t[3] = l) : (a = t[1], i = t[2], l = t[3]);
		var u;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx(r("WDSText.react"), {
			type: "LargeTitle1",
			colorName: "contentDefault",
			isPrimaryHeading: !0,
			xstyle: [d.spacingSingleBottom, d.spacingTripleTop],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = u) : u = t[4];
		var m;
		return t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "contacts-empty-state-drawer",
			tsNavigationData: n,
			children: c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("div", babelHelpers.extends({}, a, { children: c.jsxs("div", babelHelpers.extends({}, i, { children: [
				l,
				u,
				c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			] })) })) })
		}), t[5] = m) : m = t[5], m;
	}
	l.default = m;
}), 226);
