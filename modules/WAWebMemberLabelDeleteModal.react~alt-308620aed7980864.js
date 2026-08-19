__d("WAWebMemberLabelDeleteModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.onDelete, a = c(!1), i = a[0], l = a[1], d = function() {
			o("WAWebModalManager").ModalManager.closeSupportModal();
		}, m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				l(!0), yield t(), l(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: f,
			okText: _,
			okButtonType: "solid-warning",
			onCancel: d,
			onOverlayClick: d,
			okSpinner: i,
			okDisabled: i,
			title: m,
			children: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: p
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
