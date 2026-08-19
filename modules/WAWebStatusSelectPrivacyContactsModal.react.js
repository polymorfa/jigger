__d("WAWebStatusSelectPrivacyContactsModal.react", [
	"WAWebModalManager",
	"WAWebStatusSelectContactsModal.react",
	"WAWebUserPrefsStatusType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(17), n = e.onBack, r = e.onClose, a = e.setStatusPostingPrivacyConfig, i = e.statusPostingPrivacyConfig, l = e.updatedSettings, u;
		if (t[0] !== (i == null ? void 0 : i.allowList)) {
			var d;
			u = (d = i == null ? void 0 : i.allowList) != null ? d : [], t[0] = i == null ? void 0 : i.allowList, t[1] = u;
		} else u = t[1];
		var m = u, p;
		if (t[2] !== (i == null ? void 0 : i.denyList)) {
			var _;
			p = (_ = i == null ? void 0 : i.denyList) != null ? _ : [], t[2] = i == null ? void 0 : i.denyList, t[3] = p;
		} else p = t[3];
		var f = p, g = l === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? m : f, h = l === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? o("WAWebStatusSelectContactsModal.react").StatusPrivacySettingListType.AllowList : o("WAWebStatusSelectContactsModal.react").StatusPrivacySettingListType.DenyList, y;
		t[4] !== r ? (y = function() {
			if (r != null) {
				r();
				return;
			}
			o("WAWebModalManager").ModalManager.existsSupportModal(c);
		}, t[4] = r, t[5] = y) : y = t[5];
		var C = y, b;
		t[6] !== m || t[7] !== f || t[8] !== a || t[9] !== l ? (b = function(t) {
			l === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? a({
				setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
				allowList: t,
				denyList: f
			}) : a({
				setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
				allowList: m,
				denyList: t
			});
		}, t[6] = m, t[7] = f, t[8] = a, t[9] = l, t[10] = b) : b = t[10];
		var v;
		return t[11] !== C || t[12] !== n || t[13] !== g || t[14] !== h || t[15] !== b ? (v = s.jsx(o("WAWebStatusSelectContactsModal.react").SelectStatusContactsModal, {
			list: g,
			setting: h,
			onBack: n,
			onDismiss: C,
			onOverlayClick: C,
			onConfirm: b
		}), t[11] = C, t[12] = n, t[13] = g, t[14] = h, t[15] = b, t[16] = v) : v = t[16], v;
	}
	function c(e) {
		e ? o("WAWebModalManager").ModalManager.closeSupportModal() : o("WAWebModalManager").ModalManager.close();
	}
	l.default = u;
}), 98);
