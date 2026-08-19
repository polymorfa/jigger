__d("WAWebPrivacyScreenModeToggle.react", [
	"WAWebDrawerItem.react",
	"WAWebPrivacyModeContext",
	"WAWebPrivacyModeGating",
	"WAWebPrivacyModeSettingsFBT",
	"WAWebTabOrder",
	"WDSSwitch.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.onOpenCustomize, a = o("WAWebPrivacyModeContext").usePrivacyMode(), i = a.isPrivacyModeEnabled, l = a.setPrivacyModeEnabled, u = function(t) {
			t.stopPropagation(), n == null || n();
		};
		return s.jsxs(r("WAWebDrawerItem.react"), {
			title: (t = o("WAWebPrivacyModeSettingsFBT")).privacyScreenModeTitle(),
			tabIndex: -1,
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			icon: s.jsx("div", {
				className: "x1849jeq x78zum5 xl56j7k",
				children: s.jsx(r("WDSSwitch.react"), {
					value: i,
					"aria-label": t.privacyScreenModeTitle().toString() + ". " + t.privacyScreenModeDescription().toString()
				})
			}),
			theme: "privacy",
			isLastItem: !1,
			disableKeydownHandling: !0,
			onClick: function() {
				l(!i);
			},
			testid: "screen-privacy-mode-settings-item",
			children: [s.jsx("div", {
				className: "xcldk2z",
				children: t.privacyScreenModeDescription()
			}), i && n != null && s.jsx("div", {
				className: "x1v5yvga x1ypdohk x1f6kntn x1380le5",
				onClick: u,
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), u(t));
				},
				role: "button",
				tabIndex: 0,
				children: o("WAWebPrivacyModeSettingsFBT").privacyModeCustomize()
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.onOpenCustomize;
		return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled() ? s.jsx(u, { onOpenCustomize: t }) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.WAWebPrivacyScreenModeToggle = c;
}), 98);
