__d("WAWebPrivacyScreenUpsellBanner.react", [
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebDrawerManager",
	"WAWebNux",
	"WAWebNuxSync",
	"WAWebPrivacyModeGating",
	"WAWebPrivacyModeSettingsFBT",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebUserPrefsNuxPreferences",
	"WAWebUserPrefsPrivacyMode",
	"WDSBanner.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m() {
		return d(function() {
			return !(!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled() || o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled() || o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER));
		});
	}
	function p(e) {
		var t = e.onClose, n = c(function() {
			r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER), t();
		}, [t]), a = c(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "settings",
				initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
			} : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings })), r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER), t();
		}, [t]);
		return s.jsx("div", {
			className: "x1uvdrpn x14mko6t x1380le5 xefnzgg",
			children: s.jsx(r("WDSBanner.react"), {
				type: "tip",
				title: o("WAWebPrivacyModeSettingsFBT").privacyScreenModeTitle(),
				body: o("WAWebPrivacyModeSettingsFBT").privacyScreenModeDescription(),
				actionText: o("WAWebPrivacyModeSettingsFBT").privacyScreenUpsellCta(),
				onAction: a,
				onDismiss: n,
				testid: "privacy_screen_upsell_banner"
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.useShowPrivacyScreenUpsellBanner = m, l.PrivacyScreenUpsellBanner = p;
}), 98);
