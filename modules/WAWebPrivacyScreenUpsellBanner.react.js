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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState;
	function m() {
		return d(p);
	}
	function p() {
		return !(!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled() || o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled() || o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER));
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onClose, a;
		t[0] !== n ? (a = function() {
			r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER), n();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== n ? (l = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "settings",
				initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
			} : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings })), r("WAWebNuxSync").acknowledgeNux(o("WAWebNux").NuxSyncKey.PRIVACY_SCREEN_UPSELL_BANNER), n();
		}, t[2] = n, t[3] = l) : l = t[3];
		var u = l, c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1uvdrpn x14mko6t x1380le5 xefnzgg" }, t[4] = c) : c = t[4];
		var d, m, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebPrivacyModeSettingsFBT").privacyScreenModeTitle(), m = o("WAWebPrivacyModeSettingsFBT").privacyScreenModeDescription(), p = o("WAWebPrivacyModeSettingsFBT").privacyScreenUpsellCta(), t[5] = d, t[6] = m, t[7] = p) : (d = t[5], m = t[6], p = t[7]);
		var _;
		return t[8] !== u || t[9] !== i ? (_ = s.jsx("div", babelHelpers.extends({}, c, { children: s.jsx(r("WDSBanner.react"), {
			type: "tip",
			title: d,
			body: m,
			actionText: p,
			onAction: u,
			onDismiss: i,
			testid: "privacy_screen_upsell_banner"
		}) })), t[8] = u, t[9] = i, t[10] = _) : _ = t[10], _;
	}
	l.useShowPrivacyScreenUpsellBanner = m, l.PrivacyScreenUpsellBanner = _;
}), 98);
