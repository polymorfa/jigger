__d("WAWebNewsletterIntegrityDeleteStatus.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterRevokeStatusAction",
	"WAWebStatusCollection",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.msg, r = e.onDeleteSuccess, a = m(!1), i = a[0], l = a[1], c = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			l(!0);
			var e = o("WAWebStatusCollection").StatusCollection.get(t.id.remote);
			if (e == null) {
				o("WAWebModalManager").ModalManager.close(), o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
				return;
			}
			var n = yield o("WAWebNewsletterRevokeStatusAction").revokeNewsletterStatusAction(e, t);
			o("WAWebModalManager").ModalManager.close(), n ? (o("WAWebNewsletterIntegrityUtils").showStatusDeleteSuccessToast(), r == null || r()) : o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
		}), [t, r]), p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: p,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "negative-destructive",
			okDisabled: i,
			okSpinner: i,
			cancelDisabled: i,
			onOK: c,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: _
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
