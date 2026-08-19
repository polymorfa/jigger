__d("WAWebSupportChatConfirmationModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "support-chat-confirmation"
			},
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
				/*BTDS*/
				""
			) }) })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
