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
		var t, n = o("react-compiler-runtime").c(47), a = e.onBack, i = e.onContinue, l = e.onRetry, d = e.phoneNumberWithoutCountryCode, _ = e.providerNumber, f = e.selectedCountryId, g = e.theme, h;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (h = { onVisible: r("once")(m) }, n[0] = h) : h = n[0];
		var y = r("useVisibility")(h), C = y[0], b;
		n[1] !== d || n[2] !== f ? (b = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			phoneNumberWithoutCountryCode: d,
			countryCodeIso: f
		}), n[1] = d, n[2] = f, n[3] = b) : b = n[3];
		var v = b, S = (t = r("WAIsoToCc")[f]) != null ? t : "", R = g === "wds" ? "+" + S : S, L = (v == null ? void 0 : v.formattedInputValue) != null ? R + " " + (v == null ? void 0 : v.formattedInputValue) : R + " " + d, E = g === "wds" && c.containerWds, k;
		n[4] !== E ? (k = [c.container, E], n[4] = E, n[5] = k) : k = n[5];
		var I;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), n[6] = I) : I = n[6];
		var T;
		n[7] !== g ? (T = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
			value: I,
			theme: g
		}) }), n[7] = g, n[8] = T) : T = n[8];
		var D;
		n[9] !== L ? (D = s._(
			/*BTDS*/
			"",
			[s._param("phone", L)]
		), n[9] = L, n[10] = D) : D = n[10];
		var x;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), n[11] = x) : x = n[11];
		var $ = g === "wds", P = g !== "wds", N;
		n[12] !== a ? (N = async function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_WRONG_NUMBER_CLICKED), a();
		}, n[12] = a, n[13] = N) : N = n[13];
		var M;
		n[14] !== P || n[15] !== N || n[16] !== $ ? (M = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
			text: x,
			isBold: $,
			showArrow: !1,
			showUnderline: P,
			onClick: N
		}), n[14] = P, n[15] = N, n[16] = $, n[17] = M) : M = n[17];
		var w;
		n[18] !== M || n[19] !== D ? (w = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [
				D,
				".",
				M
			]
		}), n[18] = M, n[19] = D, n[20] = w) : w = n[20];
		var A;
		n[21] !== w || n[22] !== T ? (A = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 12,
			children: [T, w]
		}) }), n[21] = w, n[22] = T, n[23] = A) : A = n[23];
		var F;
		n[24] !== l || n[25] !== _ || n[26] !== g ? (F = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(p, {
			onRetry: l,
			providerNumber: _,
			theme: g
		}) }), n[24] = l, n[25] = _, n[26] = g, n[27] = F) : F = n[27];
		var O;
		n[28] !== i || n[29] !== g ? (O = g === "wds" && i != null && u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 16,
			children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_CONTINUE_CLICKED), i();
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
		}), n[28] = i, n[29] = g, n[30] = O) : O = n[30];
		var B;
		n[31] !== g ? (B = g !== "wds" && u.jsxs(o("WAWebFlex.react").FlexRow, {
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
		}), n[31] = g, n[32] = B) : B = n[32];
		var W;
		n[33] !== F || n[34] !== O || n[35] !== B ? (W = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			children: [
				F,
				O,
				B
			]
		}) }), n[33] = F, n[34] = O, n[35] = B, n[36] = W) : W = n[36];
		var q;
		n[37] !== A || n[38] !== W ? (q = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			xstyle: c.contentColumn,
			children: [A, W]
		}), n[37] = A, n[38] = W, n[39] = q) : q = n[39];
		var U;
		n[40] !== g ? (U = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			alignSelf: "center",
			xstyle: c.illustrationColumn,
			shrink: 0,
			children: g === "wds" ? u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {}) : u.jsx(o("WAWebWdsIllPhoneTextDownloadIcon.react").WdsIllPhoneTextDownloadIcon, {})
		}), n[40] = g, n[41] = U) : U = n[41];
		var V;
		return n[42] !== C || n[43] !== q || n[44] !== U || n[45] !== k ? (V = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 20,
			ref: C,
			xstyle: k,
			children: [q, U]
		}), n[42] = C, n[43] = q, n[44] = U, n[45] = k, n[46] = V) : V = n[46], V;
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
		var t = o("react-compiler-runtime").c(18), n = e.onRetry, r = e.providerNumber, a = e.theme, i = a === "wds", l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		), t[0] = l) : l = t[0];
		var c = l, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[1] = d) : d = t[1];
		var m = d, p;
		t[2] !== n ? (p = async function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_RESEND_SMS_CLICKED), await n();
		}, t[2] = n, t[3] = p) : p = t[3];
		var _ = p;
		if (i) {
			var f;
			t[4] !== r ? (f = r != null && r.length > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("provider_number", u.jsx(C, { children: r })), s._implicitParam("=m1", u.jsx(C, { children: s._(
					/*BTDS*/
					""
				) }))]
			) : c, t[4] = r, t[5] = f) : f = t[5];
			var g;
			t[6] !== _ ? (g = s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: m,
					isBold: !0,
					showArrow: !1,
					showUnderline: !1,
					onClick: _
				}))]
			), t[6] = _, t[7] = g) : g = t[7];
			var h;
			return t[8] !== f || t[9] !== g ? (h = u.jsxs(u.Fragment, { children: [
				f,
				" ",
				g
			] }), t[8] = f, t[9] = g, t[10] = h) : h = t[10], h;
		}
		var y;
		t[11] !== r ? (y = r != null && r.length > 0 ? s._(
			/*BTDS*/
			"",
			[s._param("provider_number", r), s._implicitParam("=m1", u.jsx(C, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : c, t[11] = r, t[12] = y) : y = t[12];
		var b;
		t[13] !== _ ? (b = s._(
			/*BTDS*/
			"",
			[s._param("resend_sms", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: m,
				isBold: !1,
				showArrow: !1,
				showUnderline: !0,
				onClick: _
			}))]
		), t[13] = _, t[14] = b) : b = t[14];
		var v;
		return t[15] !== y || t[16] !== b ? (v = u.jsxs(u.Fragment, { children: [
			y,
			" ",
			b
		] }), t[15] = y, t[16] = b, t[17] = v) : v = t[17], v;
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
