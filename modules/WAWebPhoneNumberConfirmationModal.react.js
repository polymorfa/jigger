__d("WAWebPhoneNumberConfirmationModal.react", [
	"fbt",
	"WACcToIso",
	"WAIsoToCc",
	"WAPhoneFindCC",
	"WAWebConfirmationModal.react",
	"WAWebFlex.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLinkDevicePhoneNumberEntryScreen.react",
	"react",
	"react-compiler-runtime",
	"useWAWebConfirmationActions"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, f = { error: {
		color: "x30a034",
		fontSize: "x1nxh6w3",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(28), n = e.actions, a = e.actionText, i = e.actionType, l = e.contentText, c = e.mePn, d = e.onCancel, g = e.onCompletion, h = e.successText, y = e.tsNavigationData, C = r("useWAWebConfirmationActions")(n, g, h), b = C.actionFailure, v = C.failureText, S = C.isRunningAction, R = C.runActions, L = p(!1), E = L[0], k = L[1], I;
		t[0] !== c.user ? (I = function() {
			var e = o("WAPhoneFindCC").findCC(c.user);
			return r("WACcToIso")[parseInt(e, 10)];
		}, t[0] = c.user, t[1] = I) : I = t[1];
		var T = p(I), D = T[0], x = T[1], $ = p(""), P = $[0], N = $[1], M = m(null), w;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (w = function(t, n) {
			k(!1), x(t), N(n);
		}, t[2] = w) : w = t[2];
		var A = w, F;
		t[3] !== c.user || t[4] !== P || t[5] !== R || t[6] !== D ? (F = function() {
			var e;
			if (D != null && o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc")[D], P)) {
				var t = "" + r("WAIsoToCc")[D] + P;
				if (t === c.user) {
					R();
					return;
				}
			}
			k(!0), (e = M.current) == null || e.focus();
		}, t[3] = c.user, t[4] = P, t[5] = R, t[6] = D, t[7] = F) : F = t[7];
		var O = F, B = P === "", W;
		t[8] !== O || t[9] !== P || t[10] !== D || t[11] !== E ? (W = u.jsx(o("WAWebLinkDevicePhoneNumberEntryScreen.react").PhoneNumberSection, {
			shouldDisplayError: E,
			phoneNumberWithoutCountryCode: P,
			selectedCountryId: D,
			onSubmit: O,
			onChangePhoneNumber: A,
			onChangeSelectedCountry: x,
			isInsideModal: !0
		}), t[8] = O, t[9] = P, t[10] = D, t[11] = E, t[12] = W) : W = t[12];
		var q;
		t[13] !== E ? (q = E && u.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "phone-number-confirmation-modal-number-mismatch",
			xstyle: [_.marginTop10, f.error],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[13] = E, t[14] = q) : q = t[14];
		var U;
		return t[15] !== b || t[16] !== a || t[17] !== i || t[18] !== l || t[19] !== v || t[20] !== O || t[21] !== S || t[22] !== d || t[23] !== B || t[24] !== W || t[25] !== q || t[26] !== y ? (U = u.jsxs(r("WAWebConfirmationModal.react"), {
			actionFailure: b,
			actionText: a,
			actionType: i,
			contentText: l,
			failureText: v,
			isInputEmpty: B,
			isRunningAction: S,
			onCancel: d,
			onSubmit: O,
			testidPrefix: "phone-number-confirmation-modal",
			tsNavigationData: y,
			children: [W, q]
		}), t[15] = b, t[16] = a, t[17] = i, t[18] = l, t[19] = v, t[20] = O, t[21] = S, t[22] = d, t[23] = B, t[24] = W, t[25] = q, t[26] = y, t[27] = U) : U = t[27], U;
	}
	l.default = g;
}), 226);
