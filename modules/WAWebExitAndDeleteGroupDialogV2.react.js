__d("WAWebExitAndDeleteGroupDialogV2.react", [
	"fbt",
	"WAWebDeleteChatAction",
	"WAWebExitGroupAction",
	"WAWebNetworkStatus",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, a = c(!1), i = a[0], l = a[1], d = m, p;
		t[0] !== n || t[1] !== i ? (p = function() {
			if (!i) {
				if (l(!0), !r("WAWebNetworkStatus").online) {
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), l(!1);
					return;
				}
				o("WAWebExitGroupAction").sendExitGroup(n).then(function(e) {
					e && o("WAWebDeleteChatAction").sendDelete(n);
				}).finally(function() {
					o("WDSDialogBridge").closeWDSDialog(), l(!1);
				});
			}
		}, t[0] = n, t[1] = i, t[2] = p) : p = t[2];
		var _ = p, f, g, h;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), t[3] = f, t[4] = g, t[5] = h) : (f = t[3], g = t[4], h = t[5]);
		var y;
		return t[6] !== _ ? (y = u.jsx(r("WDSConfirmDialog.react"), {
			title: f,
			description: g,
			confirmLabel: h,
			destructive: !0,
			onConfirm: _,
			onDismiss: d,
			open: !0
		}), t[6] = _, t[7] = y) : y = t[7], y;
	}
	function m() {
		o("WDSDialogBridge").closeWDSDialog();
	}
	l.default = d;
}), 226);
