__d("WAWebKeepInChatWarningUnkeepOwnMsgModal", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onCancel, n = e.onConfirm, r = function() {
			n(), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, a = function() {
			t == null || t(), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, i = function() {
			a();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "kic-unkeep-own-msg"
			},
			onOK: r,
			onCancel: a,
			onOverlayClick: i,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
