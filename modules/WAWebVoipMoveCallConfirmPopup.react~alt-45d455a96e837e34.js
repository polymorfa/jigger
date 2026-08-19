__d("WAWebVoipMoveCallConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.closeModal, n = e.onConfirm, a = async function() {
			try {
				await n();
			} finally {
				t();
			}
		}, i = function() {
			t();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip-move-call-confirm-popup",
			onOK: a,
			onCancel: i,
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				preserveNewLines: !1,
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
