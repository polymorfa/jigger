__d("WAWebStatusPrivacySettingsModal.react", [
	"fbt",
	"WAWebModal.react",
	"WAWebStatusPrivacySettingOptionsDrawer.react",
	"WAWebUserPrefsStatusType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.onClose, a = e.onSelectStatusPrivacyOption, i = e.ref, l = e.statusPostingPrivacyConfig, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[0] = c) : c = t[0];
		var d, m, p;
		t[1] !== a ? (d = function() {
			a(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact);
		}, m = function() {
			a(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList);
		}, p = function() {
			a(o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList);
		}, t[1] = a, t[2] = d, t[3] = m, t[4] = p) : (d = t[2], m = t[3], p = t[4]);
		var _;
		t[5] !== n || t[6] !== l || t[7] !== d || t[8] !== m || t[9] !== p ? (_ = u.jsx(r("WAWebStatusPrivacySettingOptionsDrawer.react"), {
			statusPostingPrivacyConfig: l,
			onContactClick: d,
			onDenyListClick: m,
			onAllowListClick: p,
			isModal: !0,
			onClose: n
		}), t[5] = n, t[6] = l, t[7] = d, t[8] = m, t[9] = p, t[10] = _) : _ = t[10];
		var f;
		return t[11] !== n || t[12] !== i || t[13] !== _ ? (f = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			ref: i,
			onOverlayClick: n,
			ariaLabel: c,
			children: _
		}), t[11] = n, t[12] = i, t[13] = _, t[14] = f) : f = t[14], f;
	}
	l.default = c;
}), 226);
