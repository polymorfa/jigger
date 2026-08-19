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
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = (e = {}, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.MY_CONTACTS_CLICKED, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.MY_CONTACTS_EXCEPT_CLICKED, e[o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList] = o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.ONLY_SHARE_WITH_CLICKED, e), m = n("$InternalEnum").Mirrored(["StatusPrivacySettingModal", "StatusPrivacySettingContactsSelection"]);
	function p(e) {
		var t = o("react-compiler-runtime").c(23), n = e.onClose, a = e.setStatusPostingPrivacyConfig, i = e.statusPostingPrivacyConfig, l = e.surface, s;
		if (t[0] !== (i == null ? void 0 : i.allowList)) {
			var p;
			s = (p = i == null ? void 0 : i.allowList) != null ? p : [], t[0] = i == null ? void 0 : i.allowList, t[1] = s;
		} else s = t[1];
		var f = s, g;
		if (t[2] !== (i == null ? void 0 : i.denyList)) {
			var h;
			g = (h = i == null ? void 0 : i.denyList) != null ? h : [], t[2] = i == null ? void 0 : i.denyList, t[3] = g;
		} else g = t[3];
		var y = g, C = c(null), b = C[0], v = C[1], S;
		t[4] !== n ? (S = function() {
			if (n != null) {
				n();
				return;
			}
			o("WAWebModalManager").ModalManager.existsSupportModal(_);
		}, t[4] = n, t[5] = S) : S = t[5];
		var R = S, L = function() {
			D.pop("flow-transition-box-size-drawer-pop");
		}, E;
		t[6] !== R ? (E = {
			transitions: o("useWAWebFlow").FlowTransitions.Modal,
			onEnd: R
		}, t[6] = R, t[7] = E) : E = t[7];
		var k = o("useWAWebFlow").useFlow(m.StatusPrivacySettingModal, E), I = k[0], T = k[1], D = T;
		if (D.step == null) return null;
		var x;
		t[8] !== f || t[9] !== y || t[10] !== R || t[11] !== D || t[12] !== n || t[13] !== L || t[14] !== a || t[15] !== i || t[16] !== l || t[17] !== b ? (x = D.step === m.StatusPrivacySettingModal ? u.jsx(r("WAWebStatusPrivacySettingsModal.react"), {
			onClose: R,
			onSelectStatusPrivacyOption: function(t) {
				o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
					statusPrivacySettingsAction: d[t],
					statusPrivacySurface: l,
					setting: t,
					previousSetting: i == null ? void 0 : i.setting
				}), v(t), t === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact ? (o("WAWebStatusPrivacySettingUtils").handleContactClick(a, f, y), R()) : (o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
					statusPrivacySettingsAction: t === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.INCLUDE_CONTACT_LIST_LAUNCHED : o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.EXCLUDE_CONTACT_LIST_LAUNCHED,
					statusPrivacySurface: l,
					setting: t,
					previousSetting: i == null ? void 0 : i.setting
				}), D.push(m.StatusPrivacySettingContactsSelection, "flow-transition-box-size-drawer-push"));
			},
			statusPostingPrivacyConfig: i
		}) : D.step === m.StatusPrivacySettingContactsSelection ? u.jsx(r("WAWebStatusSelectPrivacyContactsModal.react"), {
			updatedSettings: r("nullthrows")(b),
			statusPostingPrivacyConfig: i,
			setStatusPostingPrivacyConfig: a,
			onBack: L,
			onClose: n
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + D.step);
		})(), t[8] = f, t[9] = y, t[10] = R, t[11] = D, t[12] = n, t[13] = L, t[14] = a, t[15] = i, t[16] = l, t[17] = b, t[18] = x) : x = t[18];
		var $ = x, P;
		return t[19] !== I || t[20] !== D || t[21] !== $ ? (P = u.jsx(I, {
			flow: D,
			children: $
		}), t[19] = I, t[20] = D, t[21] = $, t[22] = P) : P = t[22], P;
	}
	function _(e) {
		e ? o("WAWebModalManager").ModalManager.closeSupportModal() : o("WAWebModalManager").ModalManager.close();
	}
	l.default = p;
}), 98);
