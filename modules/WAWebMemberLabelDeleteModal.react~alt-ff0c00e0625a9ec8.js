__d("WAWebMemberLabelDeleteModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.onDelete, n = c(!1), a = n[0], i = n[1], l = function() {
			o("WAWebModalManager").ModalManager.closeSupportModal();
		}, d = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = async function() {
			i(!0), await t(), i(!1);
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: _,
			okText: p,
			okButtonType: "solid-warning",
			onCancel: l,
			onOverlayClick: l,
			okSpinner: a,
			okDisabled: a,
			title: d,
			children: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: m
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
