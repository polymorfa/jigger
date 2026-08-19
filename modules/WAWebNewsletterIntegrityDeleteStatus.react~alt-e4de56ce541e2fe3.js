__d("WAWebNewsletterIntegrityDeleteStatus.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterRevokeStatusAction",
	"WAWebStatusCollection",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.msg, n = e.onDeleteSuccess, r = m(!1), a = r[0], i = r[1], l = d(async function() {
			i(!0);
			var e = o("WAWebStatusCollection").StatusCollection.get(t.id.remote);
			if (e == null) {
				o("WAWebModalManager").ModalManager.close(), o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
				return;
			}
			var r = await o("WAWebNewsletterRevokeStatusAction").revokeNewsletterStatusAction(e, t);
			o("WAWebModalManager").ModalManager.close(), r ? (o("WAWebNewsletterIntegrityUtils").showStatusDeleteSuccessToast(), n == null || n()) : o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
		}, [t, n]), c = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: c,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "negative-destructive",
			okDisabled: a,
			okSpinner: a,
			cancelDisabled: a,
			onOK: l,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: p
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
