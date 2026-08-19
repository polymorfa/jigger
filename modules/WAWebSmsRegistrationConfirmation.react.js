__d("WAWebSmsRegistrationConfirmation.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebFlex.react",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceInstructionsList.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebWdsIllPhoneTextDownloadIcon.react",
	"WAWebWdsIllPhoneTextDownloadV2Icon.react",
	"WDSButton.react",
	"asyncToGeneratorRuntime",
	"once",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		continueButton: {
			minWidth: "x173radd",
			$$css: !0
		},
		container: {
			flexDirection: "x1q0g3np",
			"@media (max-width: 600px)_flexDirection": "x3wxgri",
			$$css: !0
		},
		containerWds: {
			color: "x14ug900",
			$$css: !0
		},
		contentColumn: {
			"@media (max-width: 600px)_alignItems": "xcjwdqn",
			$$css: !0
		},
		illustrationColumn: {
			width: "x9r4l05",
			"@media (max-width: 600px)_marginBottom": "xudy9kh",
			$$css: !0
		}
	};
	function d(e) {
		var t, a = o("react-compiler-runtime").c(47), i = e.onBack, l = e.onContinue, d = e.onRetry, _ = e.phoneNumberWithoutCountryCode, f = e.providerNumber, g = e.selectedCountryId, h = e.theme, y;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (y = { onVisible: r("once")(m) }, a[0] = y) : y = a[0];
		var C = r("useVisibility")(y), b = C[0], v;
		a[1] !== _ || a[2] !== g ? (v = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			phoneNumberWithoutCountryCode: _,
			countryCodeIso: g
		}), a[1] = _, a[2] = g, a[3] = v) : v = a[3];
		var S = v, R = (t = r("WAIsoToCc")[g]) != null ? t : "", L = h === "wds" ? "+" + R : R, E = (S == null ? void 0 : S.formattedInputValue) != null ? L + " " + (S == null ? void 0 : S.formattedInputValue) : L + " " + _, k = h === "wds" && c.containerWds, I;
		a[4] !== k ? (I = [c.container, k], a[4] = k, a[5] = I) : I = a[5];
		var T;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), a[6] = T) : T = a[6];
		var D;
		a[7] !== h ? (D = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
			value: T,
			theme: h
		}) }), a[7] = h, a[8] = D) : D = a[8];
		var x;
		a[9] !== E ? (x = s._(
			/*BTDS*/
			"",
			[s._param("phone", E)]
		), a[9] = E, a[10] = x) : x = a[10];
		var $;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), a[11] = $) : $ = a[11];
		var P = h === "wds", N = h !== "wds", M;
		a[12] !== i ? (M = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_WRONG_NUMBER_CLICKED), i();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[12] = i, a[13] = M) : M = a[13];
		var w;
		a[14] !== N || a[15] !== M || a[16] !== P ? (w = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
			text: $,
			isBold: P,
			showArrow: !1,
			showUnderline: N,
			onClick: M
		}), a[14] = N, a[15] = M, a[16] = P, a[17] = w) : w = a[17];
		var A;
		a[18] !== w || a[19] !== x ? (A = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [
				x,
				".",
				w
			]
		}), a[18] = w, a[19] = x, a[20] = A) : A = a[20];
		var F;
		a[21] !== A || a[22] !== D ? (F = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 12,
			children: [D, A]
		}) }), a[21] = A, a[22] = D, a[23] = F) : F = a[23];
		var O;
		a[24] !== d || a[25] !== f || a[26] !== h ? (O = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(p, {
			onRetry: d,
			providerNumber: f,
			theme: h
		}) }), a[24] = d, a[25] = f, a[26] = h, a[27] = O) : O = a[27];
		var B;
		a[28] !== l || a[29] !== h ? (B = h === "wds" && l != null && u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 16,
			children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_CONTINUE_CLICKED), l();
				},
				variant: "filled",
				widthMode: "fit",
				xstyle: c.continueButton
			}) }), u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				isBold: !0,
				showArrow: !1,
				showUnderline: !1,
				url: "https://www.whatsapp.com/contact"
			}) })]
		}), a[28] = l, a[29] = h, a[30] = B) : B = a[30];
		var W;
		a[31] !== h ? (W = h !== "wds" && u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [s._(
				/*BTDS*/
				""
			), u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				isBold: !1,
				showArrow: !1,
				showUnderline: !0,
				url: "https://www.whatsapp.com/contact"
			})]
		}), a[31] = h, a[32] = W) : W = a[32];
		var q;
		a[33] !== O || a[34] !== B || a[35] !== W ? (q = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			children: [
				O,
				B,
				W
			]
		}) }), a[33] = O, a[34] = B, a[35] = W, a[36] = q) : q = a[36];
		var U;
		a[37] !== F || a[38] !== q ? (U = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			xstyle: c.contentColumn,
			children: [F, q]
		}), a[37] = F, a[38] = q, a[39] = U) : U = a[39];
		var V;
		a[40] !== h ? (V = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			alignSelf: "center",
			xstyle: c.illustrationColumn,
			shrink: 0,
			children: h === "wds" ? u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {}) : u.jsx(o("WAWebWdsIllPhoneTextDownloadIcon.react").WdsIllPhoneTextDownloadIcon, {})
		}), a[40] = h, a[41] = V) : V = a[41];
		var H;
		return a[42] !== b || a[43] !== U || a[44] !== V || a[45] !== I ? (H = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 20,
			ref: b,
			xstyle: I,
			children: [U, V]
		}), a[42] = b, a[43] = U, a[44] = V, a[45] = I, a[46] = H) : H = a[46], H;
	}
	function m() {
		o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_SCREEN_LOADED);
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onRetry, a = e.providerNumber, i = e.theme, l;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var s = i === "wds" ? [
				u.jsx(_, {
					onRetry: n,
					providerNumber: a,
					theme: i
				}, "smsregistrationconfirmationinstruction1"),
				u.jsx(f, {}, "smsregistrationconfirmationinstruction2"),
				u.jsx(y, { theme: i }, "smsregistrationconfirmationinstruction3")
			] : [
				u.jsx(_, {
					onRetry: n,
					providerNumber: a,
					theme: i
				}, "smsregistrationconfirmationinstruction1"),
				u.jsx(g, {}, "smsregistrationconfirmationinstruction2"),
				u.jsx(h, {}, "smsregistrationconfirmationinstruction3"),
				u.jsx(y, { theme: i }, "smsregistrationconfirmationinstruction4")
			];
			l = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
				instructionSource: "smsreg",
				instructions: s
			}), t[0] = n, t[1] = a, t[2] = i, t[3] = l;
		} else l = t[3];
		return l;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(18), r = e.onRetry, a = e.providerNumber, i = e.theme, l = i === "wds", c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		), t[0] = c) : c = t[0];
		var d = c, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[1] = m) : m = t[1];
		var p = m, _;
		t[2] !== r ? (_ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_RESEND_SMS_CLICKED), yield r();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[2] = r, t[3] = _) : _ = t[3];
		var f = _;
		if (l) {
			var g;
			t[4] !== a ? (g = a != null && a.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", u.jsx(C, { children: a })), s._implicitParam("=m1", u.jsx(C, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : d, t[4] = a, t[5] = g) : g = t[5];
			var h;
			t[6] !== f ? (h = s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: p,
					isBold: !0,
					showArrow: !1,
					showUnderline: !1,
					onClick: f
				}))]
			), t[6] = f, t[7] = h) : h = t[7];
			var y;
			return t[8] !== g || t[9] !== h ? (y = u.jsxs(u.Fragment, { children: [
				g,
				" ",
				h
			] }), t[8] = g, t[9] = h, t[10] = y) : y = t[10], y;
		}
		var b;
		t[11] !== a ? (b = a != null && a.length > 0 ? s._(
			/*BTDS*/
			"",
			[s._param("provider_number", a), s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : d, t[11] = a, t[12] = b) : b = t[12];
		var v;
		t[13] !== f ? (v = s._(
			/*BTDS*/
			"",
			[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: p,
				isBold: !1,
				showArrow: !1,
				showUnderline: !0,
				onClick: f
			}))]
		), t[13] = f, t[14] = v) : v = t[14];
		var S;
		return t[15] !== b || t[16] !== v ? (S = u.jsxs(u.Fragment, { children: [
			b,
			" ",
			v
		] }), t[15] = b, t[16] = v, t[17] = S) : S = t[17], S;
	}
	function f() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) })), s._implicitParam("=m2", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		), e[0] = t) : t = e[0], t;
	}
	function g() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		), e[0] = t) : t = e[0], t;
	}
	function h() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		), e[0] = t) : t = e[0], t;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(2), n = e.theme, r;
		return t[0] !== n ? (r = u.jsx(u.Fragment, { children: n === "wds" ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : u.jsxs(u.Fragment, { children: [
			s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(C, { children: s._(
					/*BTDS*/
					""
				) }))]
			),
			"\xA0",
			u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				url: "https://faq.whatsapp.com/497209988909970",
				isBold: n === "wds",
				showArrow: !1,
				showUnderline: n !== "wds"
			})
		] }) }), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1rg5ohu xk50ysn x1o2sk6j" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("strong", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = d;
}), 226);
