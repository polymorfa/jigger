__d("WAWebPrivacyModeIndicator.react", [
	"WAWebPrivacyModeContext",
	"WAWebPrivacyModeGating",
	"WAWebPrivacyModeSettingsFBT",
	"WAWebPrivacyModeToast",
	"WDSIconIcHidden.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled() ? s.jsx(c, {}) : null;
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		var e = o("WAWebPrivacyModeContext").usePrivacyMode(), t = e.isPrivacyModeEnabled, n = e.setPrivacyModeEnabled;
		if (!t) return null;
		var a = function() {
			n(!1), o("WAWebPrivacyModeToast").showPrivacyModeToast(!1, function() {
				n(!0);
			});
		};
		return s.jsx(r("WDSMenuBarItem.react"), {
			testid: "privacy-mode-indicator",
			icon: r("WDSIconIcHidden.react"),
			title: o("WAWebPrivacyModeSettingsFBT").privacyModeIndicatorTooltip(),
			isActive: !1,
			onClick: a,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);
