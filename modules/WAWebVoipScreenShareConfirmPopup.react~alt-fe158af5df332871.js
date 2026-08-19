__d("WAWebVoipScreenShareConfirmPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebVoipStackInterface",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.closeModal, a = e.hideCancel, i = e.message, l = e.okText, c = e.onOK, d = a === void 0 ? !1 : a, m = n != null ? n : o("WAWebModalManager").closeModalManager, p;
		t[0] !== m || t[1] !== c ? (p = async function() {
			if (c) await c();
			else {
				var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
				(e == null ? void 0 : e.type) === "web" && await e.requestVideoUpgrade();
			}
			m();
		}, t[0] = m, t[1] = c, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] !== m ? (f = function() {
			m();
		}, t[3] = m, t[4] = f) : f = t[4];
		var g = f, h = d ? void 0 : g, y;
		t[5] !== l ? (y = l != null ? l : s._(
			/*BTDS*/
			""
		), t[5] = l, t[6] = y) : y = t[6];
		var C;
		t[7] !== d ? (C = d ? void 0 : s._(
			/*BTDS*/
			""
		), t[7] = d, t[8] = C) : C = t[8];
		var b;
		t[9] !== i ? (b = i != null ? i : s._(
			/*BTDS*/
			""
		), t[9] = i, t[10] = b) : b = t[10];
		var v;
		t[11] !== b ? (v = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			preserveNewLines: !1,
			children: b
		}), t[11] = b, t[12] = v) : v = t[12];
		var S;
		return t[13] !== _ || t[14] !== h || t[15] !== y || t[16] !== C || t[17] !== v ? (S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: _,
			onCancel: h,
			okText: y,
			cancelText: C,
			children: v
		}), t[13] = _, t[14] = h, t[15] = y, t[16] = C, t[17] = v, t[18] = S) : S = t[18], S;
	}
	l.WAWebVoipScreenShareConfirmPopup = c;
}), 226);
