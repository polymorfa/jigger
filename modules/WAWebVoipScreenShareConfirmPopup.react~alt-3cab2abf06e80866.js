__d("WAWebVoipScreenShareConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebVoipStackInterface",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.closeModal, a = e.hideCancel, i = a === void 0 ? !1 : a, l = e.message, c = e.okText, d = e.onOK, m = t != null ? t : o("WAWebModalManager").closeModalManager, p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (d) yield d();
				else {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && (yield e.requestVideoUpgrade());
				}
				m();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), _ = function() {
			m();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: p,
			onCancel: i ? void 0 : _,
			okText: c != null ? c : s._(
				/*BTDS*/
				""
			),
			cancelText: i ? void 0 : s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				preserveNewLines: !1,
				children: l != null ? l : s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.WAWebVoipScreenShareConfirmPopup = c;
}), 226);
