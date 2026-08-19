__d("WAWebLimitSharingInvokeBlockedPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebLimitSharingUIUtils",
	"WAWebModalManager",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("Learn more"),
			onCancel: function() {
				o("WAWebLimitSharingUIUtils").showLimitSharingDrawer(t), o("WAWebModalManager").ModalManager.close();
			},
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "limit-sharing-invoke-blocked-popup",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
