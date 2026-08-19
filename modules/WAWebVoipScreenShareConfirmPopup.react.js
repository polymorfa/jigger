__d("WAWebVoipScreenShareConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebVoipStackInterface",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(19), a = e.closeModal, i = e.hideCancel, l = e.message, c = e.okText, d = e.onOK, m = i === void 0 ? !1 : i, p = a != null ? a : o("WAWebModalManager").closeModalManager, _;
		t[0] !== p || t[1] !== d ? (_ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (d) yield d();
				else {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && (yield e.requestVideoUpgrade());
				}
				p();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = p, t[1] = d, t[2] = _) : _ = t[2];
		var f = _, g;
		t[3] !== p ? (g = function() {
			p();
		}, t[3] = p, t[4] = g) : g = t[4];
		var h = g, y = m ? void 0 : h, C;
		t[5] !== c ? (C = c != null ? c : s._(
			/*BTDS*/
			""
		), t[5] = c, t[6] = C) : C = t[6];
		var b;
		t[7] !== m ? (b = m ? void 0 : s._(
			/*BTDS*/
			""
		), t[7] = m, t[8] = b) : b = t[8];
		var v;
		t[9] !== l ? (v = l != null ? l : s._(
			/*BTDS*/
			""
		), t[9] = l, t[10] = v) : v = t[10];
		var S;
		t[11] !== v ? (S = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			preserveNewLines: !1,
			children: v
		}), t[11] = v, t[12] = S) : S = t[12];
		var R;
		return t[13] !== f || t[14] !== y || t[15] !== C || t[16] !== b || t[17] !== S ? (R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: f,
			onCancel: y,
			okText: C,
			cancelText: b,
			children: S
		}), t[13] = f, t[14] = y, t[15] = C, t[16] = b, t[17] = S, t[18] = R) : R = t[18], R;
	}
	l.WAWebVoipScreenShareConfirmPopup = c;
}), 226);
