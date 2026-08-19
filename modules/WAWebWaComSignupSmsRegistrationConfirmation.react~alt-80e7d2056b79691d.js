__d("WAWebWaComSignupSmsRegistrationConfirmation.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceInstructionsList.react",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebWdsIllPhoneTextDownloadV2Icon.react",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		return e.length === 11 ? "+" + e.slice(0, 1) + " (" + e.slice(1, 4) + ") " + e.slice(4, 7) + "-" + e.slice(7) : e;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(27), n = e.onBack, a = e.onLinkDevice, i = e.onRetry, l = e.phoneNumberWithoutCountryCode, d = e.providerNumber, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = { onVisible: m }, t[0] = _) : _ = t[0];
		var f = r("useVisibility")(_), g = f[0], h = "1" + l, y;
		t[1] !== h ? (y = c(h), t[1] = h, t[2] = y) : y = t[2];
		var C = y, b;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, { value: s._(
			/*BTDS*/
			""
		) }) }), t[3] = b) : b = t[3];
		var v;
		t[4] !== C ? (v = s._(
			/*BTDS*/
			"",
			[s._param("phone", C)]
		), t[4] = C, t[5] = v) : v = t[5];
		var S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[6] = S) : S = t[6];
		var R;
		t[7] !== n ? (R = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
			text: S,
			isBold: !1,
			showArrow: !1,
			showUnderline: !0,
			onClick: async function() {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED), n();
			}
		}), t[7] = n, t[8] = R) : R = t[8];
		var L;
		t[9] !== v || t[10] !== R ? (L = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 12,
			children: [b, u.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 8,
				children: [
					v,
					".",
					R
				]
			})]
		}) }), t[9] = v, t[10] = R, t[11] = L) : L = t[11];
		var E;
		t[12] !== a || t[13] !== i || t[14] !== d ? (E = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(p, {
			onLinkDevice: a,
			onRetry: i,
			providerNumber: d
		}) }), t[12] = a, t[13] = i, t[14] = d, t[15] = E) : E = t[15];
		var k;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[16] = k) : k = t[16];
		var I;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [k, u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: s._(
					/*BTDS*/
					""
				),
				isBold: !1,
				showArrow: !1,
				showUnderline: !0,
				url: "https://www.whatsapp.com/contact"
			})]
		}), t[17] = I) : I = t[17];
		var T;
		t[18] !== E ? (T = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			children: [E, I]
		}) }), t[18] = E, t[19] = T) : T = t[19];
		var D;
		t[20] !== T || t[21] !== L ? (D = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 32,
			children: [L, T]
		}), t[20] = T, t[21] = L, t[22] = D) : D = t[22];
		var x;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			alignSelf: "center",
			children: u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {})
		}), t[23] = x) : x = t[23];
		var $;
		return t[24] !== g || t[25] !== D ? ($ = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 20,
			ref: g,
			children: [D, x]
		}), t[24] = g, t[25] = D, t[26] = $) : $ = t[26], $;
	}
	function m() {
		o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_SCREEN_LOADED);
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onLinkDevice, a = e.onRetry, i = e.providerNumber, l;
		t[0] !== a || t[1] !== i ? (l = u.jsx(_, {
			onRetry: a,
			providerNumber: i
		}, "postreginstruction1"), t[0] = a, t[1] = i, t[2] = l) : l = t[2];
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(f, {}, "postreginstruction2"), t[3] = s) : s = t[3];
		var c;
		t[4] !== n ? (c = u.jsx(g, { onLinkDevice: n }, "postreginstruction3"), t[4] = n, t[5] = c) : c = t[5];
		var d;
		if (t[6] !== l || t[7] !== c) {
			var m = [
				l,
				s,
				c
			];
			d = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
				instructionSource: "postreg",
				instructions: m
			}), t[6] = l, t[7] = c, t[8] = d;
		} else d = t[8];
		return d;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onRetry, r = e.providerNumber, a;
		t[0] !== r ? (a = r != null ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(h, { children: s._(
				/*BTDS*/
				""
			) })), s._implicitParam("=m4", u.jsx(h, { children: s._(
				/*BTDS*/
				"",
				[s._param("provider_number", r)]
			) }))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(h, { children: s._(
				/*BTDS*/
				""
			) }))]
		), t[0] = r, t[1] = a) : a = t[1];
		var i;
		if (t[2] !== n) {
			var l;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
				/*BTDS*/
				""
			), t[4] = l) : l = t[4];
			var c = async function() {
				o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED), await n();
			}, d;
			t[5] !== c ? (d = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: l,
				isBold: !1,
				showArrow: !1,
				showUnderline: !0,
				onClick: c
			}), t[5] = c, t[6] = d) : d = t[6], i = s._(
				/*BTDS*/
				"",
				[s._param("resend_sms", d)]
			), t[2] = n, t[3] = i;
		} else i = t[3];
		var m;
		return t[7] !== a || t[8] !== i ? (m = u.jsxs(u.Fragment, { children: [
			a,
			".",
			" ",
			i
		] }), t[7] = a, t[8] = i, t[9] = m) : m = t[9], m;
	}
	function f() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0], t;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onLinkDevice, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[1] = a) : a = t[1];
		var i;
		return t[2] !== n ? (i = u.jsxs(u.Fragment, { children: [
			r,
			"\xA0",
			u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
				text: a,
				isBold: !1,
				onClick: async function() {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_CONTINUE_CLICKED), n();
				},
				showArrow: !1,
				showUnderline: !0
			})
		] }), t[2] = n, t[3] = i) : i = t[3], i;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1rg5ohu xk50ysn x1o2sk6j" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("strong", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = d;
}), 226);
