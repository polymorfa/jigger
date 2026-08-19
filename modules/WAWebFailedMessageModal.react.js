__d("WAWebFailedMessageModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onDelete, n = e.resend, a = e.text, i = e.title;
		return n == null && t == null ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "failed-message"
			},
			children: a
		}) : t != null ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: i,
			onOK: function() {
				t(), o("WAWebModalManager").ModalManager.close();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "failed-message"
			},
			children: a
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: function() {
				n == null || n(), o("WAWebModalManager").ModalManager.close();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "failed-message"
			},
			children: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
