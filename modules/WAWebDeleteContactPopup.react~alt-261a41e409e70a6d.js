__d("WAWebDeleteContactPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.hasCustomerData, n = e.onCancel, r = e.onOK, a = e.syncToAddressbook, i = s._(
			/*BTDS*/
			""
		), l;
		t === !0 ? l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		var c = s._(
			/*BTDS*/
			""
		), d = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: r,
			okText: c,
			okButtonType: "solid-warning",
			onCancel: n,
			cancelText: d,
			title: i,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
