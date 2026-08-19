__d("WAWebQuotaUpsellCompanionAlert.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "quota-upsell-companion-alert",
			title: s._(
				/*BTDS*/
				""
			),
			onOK: function() {
				return o("WAWebModalManager").ModalManager.closeAlert();
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
