__d("WAWebExitAndDeleteGroupDialogV2.react", [
	"fbt",
	"WAWebDeleteChatAction",
	"WAWebExitGroupAction",
	"WAWebNetworkStatus",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.chat, n = c(!1), a = n[0], i = n[1], l = function() {
			o("WDSDialogBridge").closeWDSDialog();
		}, d = function() {
			if (!a) {
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
					o("WDSDialogBridge").closeWDSDialog(), i(!1);
				});
			}
		};
		return u.jsx(r("WDSConfirmDialog.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			confirmLabel: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onConfirm: d,
			onDismiss: l,
			open: !0
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
