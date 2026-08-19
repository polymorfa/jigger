__d("WAWebStatusSelectPrivacyContactsModal.react", [
	"WAWebModalManager",
	"WAWebStatusSelectContactsModal.react",
	"WAWebUserPrefsStatusType",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, r = e.onBack, a = e.onClose, i = e.setStatusPostingPrivacyConfig, l = e.statusPostingPrivacyConfig, u = e.updatedSettings, c = (t = l == null ? void 0 : l.allowList) != null ? t : [], d = (n = l == null ? void 0 : l.denyList) != null ? n : [], m = u === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? c : d, p = u === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? o("WAWebStatusSelectContactsModal.react").StatusPrivacySettingListType.AllowList : o("WAWebStatusSelectContactsModal.react").StatusPrivacySettingListType.DenyList, _ = function() {
			if (a != null) {
				a();
				return;
			}
			o("WAWebModalManager").ModalManager.existsSupportModal(function(e) {
				e ? o("WAWebModalManager").ModalManager.closeSupportModal() : o("WAWebModalManager").ModalManager.close();
			});
		};
		return s.jsx(o("WAWebStatusSelectContactsModal.react").SelectStatusContactsModal, {
			list: m,
			setting: p,
			onBack: r,
			onDismiss: _,
			onOverlayClick: _,
			onConfirm: function(t) {
				u === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? i({
					setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
					allowList: t,
					denyList: d
				}) : i({
					setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
					allowList: c,
					denyList: t
				});
			}
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
