__d("WAWebLimitSharingDisableConfirmationPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onOK;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("Continue"),
			onOK: async function() {
				o("WAWebModalManager").ModalManager.close(), await t();
			},
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "limit-sharing-disable-confirmation-popup",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
