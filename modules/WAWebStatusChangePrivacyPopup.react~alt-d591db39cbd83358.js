__d("WAWebStatusChangePrivacyPopup.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebLogStatusPrivacySettings",
	"WAWebModalManager",
	"WAWebStatusPrivacySettingsFlowLoadable",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.setStatusPostingPrivacyConfig, n = e.statusPostingPrivacyConfig, a = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
				statusPostingPrivacyConfig: n,
				setStatusPostingPrivacyConfig: t,
				surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS
			}));
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onCancel: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WAWebClickableLink.react"), {
					onClick: a,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
