__d("WAWebBizAdCreationShowIdentityChangeConfirmation", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelText: r("WAWebFbtCommon")("Cancel"),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: function() {
				o("WAWebModalManager").ModalManager.close(), e();
			},
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	l.default = c;
}), 226);
