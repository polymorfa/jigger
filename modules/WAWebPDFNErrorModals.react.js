__d("WAWebPDFNErrorModals.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("Try again"),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("Try again"),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.InternetErrorModal = c, l.ServerErrorModal = d;
}), 226);
