__d("WAWebContactManagerExportConfirm.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e, t) {
		var n = e.length;
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: function() {
				o("WAWebModalManager").closeModalManager(), t();
			},
			onCancel: o("WAWebModalManager").closeModalManager,
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			testid: "customer-manager-export-confirm",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			)
		}));
	}
	l.openExportConfirmDialog = c;
}), 226);
