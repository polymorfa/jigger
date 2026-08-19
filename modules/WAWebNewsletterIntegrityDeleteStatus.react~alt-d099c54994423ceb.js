__d("WAWebNewsletterIntegrityDeleteStatus.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterRevokeStatusAction",
	"WAWebStatusCollection",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, r = e.onDeleteSuccess, a = m(!1), i = a[0], l = a[1], c;
		t[0] !== n || t[1] !== r ? (c = async function() {
			l(!0);
			var e = o("WAWebStatusCollection").StatusCollection.get(n.id.remote);
			if (e == null) {
				o("WAWebModalManager").ModalManager.close(), o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
				return;
			}
			var t = await o("WAWebNewsletterRevokeStatusAction").revokeNewsletterStatusAction(e, n);
			o("WAWebModalManager").ModalManager.close(), t ? (o("WAWebNewsletterIntegrityUtils").showStatusDeleteSuccessToast(), r == null || r()) : o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
		}, t[0] = n, t[1] = r, t[2] = c) : c = t[2];
		var d = c, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[3] = p) : p = t[3];
		var _ = p, f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[4] = f) : f = t[4];
		var g = f, h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[5] = h) : h = t[5];
		var y;
		return t[6] !== d || t[7] !== i ? (y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: _,
			okText: h,
			okButtonType: "negative-destructive",
			okDisabled: i,
			okSpinner: i,
			cancelDisabled: i,
			onOK: d,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: g
		}), t[6] = d, t[7] = i, t[8] = y) : y = t[8], y;
	}
	l.default = p;
}), 226);
