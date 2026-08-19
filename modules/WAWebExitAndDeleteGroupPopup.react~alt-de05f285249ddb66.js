__d("WAWebExitAndDeleteGroupPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDeleteChatAction",
	"WAWebExitGroupAction",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.chat, n = c(!1), a = n[0], i = n[1], l = function() {
			if (i(!0), !r("WAWebNetworkStatus").online) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), i(!1);
				return;
			}
			o("WAWebExitGroupAction").sendExitGroup(t).then(function(e) {
				e && o("WAWebDeleteChatAction").sendDelete(t);
			}).finally(function() {
				o("WAWebModalManager").ModalManager.close(), i(!1);
			});
		}, d = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "exit-delete-group"
			},
			title: d,
			onOK: l,
			okButtonType: "solid-warning",
			okSpinner: a,
			okText: p,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: m })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
