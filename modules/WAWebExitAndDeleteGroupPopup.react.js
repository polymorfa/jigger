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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n = e.chat, a = c(!1), i = a[0], l = a[1], d;
		t[0] !== n ? (d = function() {
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
				o("WAWebModalManager").ModalManager.close(), l(!1);
			});
		}, t[0] = n, t[1] = d) : d = t[1];
		var m = d, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[3] = f) : f = t[3];
		var g = f, h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[4] = h) : h = t[4];
		var y = h, C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			surface: "unknown",
			viewName: "exit-delete-group"
		}, t[5] = C) : C = t[5];
		var b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: g }), t[6] = b) : b = t[6];
		var v;
		return t[7] !== i || t[8] !== m ? (v = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: C,
			title: _,
			onOK: m,
			okButtonType: "solid-warning",
			okSpinner: i,
			okText: y,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: b
		}), t[7] = i, t[8] = m, t[9] = v) : v = t[9], v;
	}
	l.default = d;
}), 226);
