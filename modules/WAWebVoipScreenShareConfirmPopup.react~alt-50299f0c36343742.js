__d("WAWebVoipScreenShareConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebVoipStackInterface",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.closeModal, n = e.hideCancel, a = n === void 0 ? !1 : n, i = e.message, l = e.okText, c = e.onOK, d = t != null ? t : o("WAWebModalManager").closeModalManager, m = async function() {
			if (c) await c();
			else {
				var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
				(e == null ? void 0 : e.type) === "web" && await e.requestVideoUpgrade();
			}
			d();
		}, p = function() {
			d();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: m,
			onCancel: a ? void 0 : p,
			okText: l != null ? l : s._(
				/*BTDS*/
				""
			),
			cancelText: a ? void 0 : s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				preserveNewLines: !1,
				children: i != null ? i : s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.WAWebVoipScreenShareConfirmPopup = c;
}), 226);
