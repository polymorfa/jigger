__d("WAWebStatusPrivacySettingsModalFlow.react", [
	"$InternalEnum",
	"WAWebLogStatusPrivacySettings",
	"WAWebModalManager",
	"WAWebStatusPrivacySettingUtils",
	"WAWebStatusPrivacySettingsModal.react",
	"WAWebStatusSelectPrivacyContactsModal.react",
	"WAWebUserPrefsStatusType",
	"nullthrows",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = (e = {}, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.MY_CONTACTS_CLICKED, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.MY_CONTACTS_EXCEPT_CLICKED, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.ONLY_SHARE_WITH_CLICKED, e), m = n("$InternalEnum").Mirrored(["StatusPrivacySettingModal", "StatusPrivacySettingContactsSelection"]);
	function p(e) {
		var t, n, a = e.onClose, i = e.setStatusPostingPrivacyConfig, l = e.statusPostingPrivacyConfig, s = e.surface, p = (t = l == null ? void 0 : l.allowList) != null ? t : [], _ = (n = l == null ? void 0 : l.denyList) != null ? n : [], f = c(null), g = f[0], h = f[1], y = function() {
			if (a != null) {
				a();
				return;
			}
			o("WAWebModalManager").ModalManager.existsSupportModal(function(e) {
				e ? o("WAWebModalManager").ModalManager.closeSupportModal() : o("WAWebModalManager").ModalManager.close();
			});
		}, C = function() {
			S.pop("flow-transition-box-size-drawer-pop");
		}, b = o("useWAWebFlow").useFlow(m.StatusPrivacySettingModal, {
			transitions: o("useWAWebFlow").FlowTransitions.Modal,
			onEnd: y
		}), v = b[0], S = b[1];
		if (S.step == null) return null;
		var R = S.step === m.StatusPrivacySettingModal ? u.jsx(r("WAWebStatusPrivacySettingsModal.react"), {
			onClose: y,
			onSelectStatusPrivacyOption: function(t) {
				o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
					statusPrivacySettingsAction: d[t],
					statusPrivacySurface: s,
					setting: t,
					previousSetting: l == null ? void 0 : l.setting
				}), h(t), t === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact ? (o("WAWebStatusPrivacySettingUtils").handleContactClick(i, p, _), y()) : (o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
					statusPrivacySettingsAction: t === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.INCLUDE_CONTACT_LIST_LAUNCHED : o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.EXCLUDE_CONTACT_LIST_LAUNCHED,
					statusPrivacySurface: s,
					setting: t,
					previousSetting: l == null ? void 0 : l.setting
				}), S.push(m.StatusPrivacySettingContactsSelection, "flow-transition-box-size-drawer-push"));
			},
			statusPostingPrivacyConfig: l
		}) : S.step === m.StatusPrivacySettingContactsSelection ? u.jsx(r("WAWebStatusSelectPrivacyContactsModal.react"), {
			updatedSettings: r("nullthrows")(g),
			statusPostingPrivacyConfig: l,
			setStatusPostingPrivacyConfig: i,
			onBack: C,
			onClose: a
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S.step);
		})();
		return u.jsx(v, {
			flow: S,
			children: R
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
