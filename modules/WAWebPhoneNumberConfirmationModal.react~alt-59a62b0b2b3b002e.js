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
		var t = e.actions, n = e.actionText, a = e.actionType, i = e.contentText, l = e.mePn, c = e.onCancel, g = e.onCompletion, h = e.successText, y = e.tsNavigationData, C = r("useWAWebConfirmationActions")(t, g, h), b = C.actionFailure, v = C.failureText, S = C.isRunningAction, R = C.runActions, L = p(!1), E = L[0], k = L[1], I = p(function() {
			var e = o("WAPhoneFindCC").findCC(l.user);
			return r("WACcToIso")[parseInt(e, 10)];
		}), T = I[0], D = I[1], x = p(""), $ = x[0], P = x[1], N = m(null), M = d(function(e, t) {
			k(!1), D(e), P(t);
		}, []), w = d(function() {
			var e;
			if (T != null && o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc")[T], $)) {
				var t = "" + r("WAIsoToCc")[T] + $;
				if (t === l.user) {
					R();
					return;
				}
			}
			k(!0), (e = N.current) == null || e.focus();
		}, [
			R,
			$,
			T,
			l
		]);
		return u.jsxs(r("WAWebConfirmationModal.react"), {
			actionFailure: b,
			actionText: n,
			actionType: a,
			contentText: i,
			failureText: v,
			isInputEmpty: $ === "",
			isRunningAction: S,
			onCancel: c,
			onSubmit: w,
			testidPrefix: "phone-number-confirmation-modal",
			tsNavigationData: y,
			children: [u.jsx(o("WAWebLinkDevicePhoneNumberEntryScreen.react").PhoneNumberSection, {
				shouldDisplayError: E,
				phoneNumberWithoutCountryCode: $,
				selectedCountryId: T,
				onSubmit: w,
				onChangePhoneNumber: M,
				onChangeSelectedCountry: D,
				isInsideModal: !0
			}), E && u.jsx(o("WAWebFlex.react").FlexRow, {
				testid: "phone-number-confirmation-modal-number-mismatch",
				xstyle: [_.marginTop10, f.error],
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
