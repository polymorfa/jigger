__d("WAWebVoipScreenShareUpdateAppModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip_screen_share_update_app_modal",
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
