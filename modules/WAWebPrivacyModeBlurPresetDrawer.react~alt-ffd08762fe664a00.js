__d("WAWebPrivacyModeBlurPresetDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebPrivacyModeBlurConfig",
	"WAWebPrivacyModeContext",
	"WAWebPrivacyModeSettingsFBT",
	"WAWebPrivacyModeUtils",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebUserPrefsPrivacyMode",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, d = [
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Off,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Light,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Strong
	];
	function m(e) {
		var t = e.category, n = e.onBack, a = o("WAWebPrivacyModeContext").usePrivacyMode(), i = a.updateBlurPreset, l = u(function() {
			return o("WAWebUserPrefsPrivacyMode").getBlurPreset(t);
		}), m = l[0], _ = l[1], f = function(n) {
			i(t, n), _(n);
		}, g = p(t);
		return s.jsxs(r("WAWebDrawer.react"), {
			testid: "privacy-blur-preset-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "privacy-blur-preset"
			},
			children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-privacy-blur-preset",
				title: g,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n,
				focusBackOrCancel: !0
			}), s.jsx(r("WAWebDrawerBody.react"), { children: s.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: [c.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20],
				children: s.jsx("div", {
					role: "radiogroup",
					"aria-label": g.toString(),
					children: d.map(function(e) {
						return s.jsx(r("WAWebPrivacyVisibilityOption.react"), {
							text: o("WAWebPrivacyModeUtils").getPresetLabel(e),
							selected: m === e,
							testid: "privacy-blur-preset-" + e,
							onClick: function() {
								return f(e);
							}
						}, e);
					})
				})
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		return e === o("WAWebPrivacyModeBlurConfig").BlurCategory.General ? o("WAWebPrivacyModeSettingsFBT").privacyModeGeneralLabel() : o("WAWebPrivacyModeSettingsFBT").privacyModeMediaLabel();
	}
	l.default = m;
}), 98);
