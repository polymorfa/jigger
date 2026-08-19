__d("WAWebStatusDeletePopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModal.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onCancel, n = e.onDelete, r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.StatusReport,
			title: r,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "negative-destructive",
			onOK: n,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: t,
			children: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
