__d("WAWebWindowsLinkDeviceV2.react", [
	"WAWebConnModel",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebLinkDeviceAction",
	"WAWebLinkDevicePhoneNumber.react",
	"WAWebLinkDeviceQrcode.react",
	"WAWebNoop",
	"WAWebPageLoadLogging",
	"WAWebPairingType",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(19);
		c(p, void 0);
		var n = d(null), a = n[0], i = n[1], l, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = async function() {
			var e = await o("WAWebLinkDeviceAction").getPreselectedCountryCodeIso();
			i(e);
		}, u = { once: !0 }, t[0] = l, t[1] = u) : (l = t[0], u = t[1]), o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", l, u);
		var m;
		t[2] !== e ? (m = async function(n) {
			await o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: n ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), e.onPairingTypeChange(n ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE);
		}, t[2] = e, t[3] = m) : m = t[3];
		var _ = m, f, g;
		if (e.pairingType === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING) {
			var h;
			t[4] !== _ ? (h = async function(t) {
				t == null || t.preventDefault(), t == null || t.stopPropagation(), await _(!1);
			}, t[4] = _, t[5] = h) : h = t[5];
			var y;
			t[6] !== a || t[7] !== e.apiCmd || t[8] !== h ? (y = s.jsx(r("WAWebLinkDevicePhoneNumber.react"), {
				apiCmd: e.apiCmd,
				initialCountryId: a,
				onClickLinkWithQr: h
			}), t[6] = a, t[7] = e.apiCmd, t[8] = h, t[9] = y) : y = t[9], g = y;
		} else {
			var C;
			t[10] !== _ ? (C = async function(t) {
				t == null || t.preventDefault(), t == null || t.stopPropagation(), await _(!0);
			}, t[10] = _, t[11] = C) : C = t[11];
			var b;
			t[12] !== e.apiCmd || t[13] !== e.theme || t[14] !== C ? (b = s.jsx(r("WAWebLinkDeviceQrcode.react"), {
				apiCmd: e.apiCmd,
				enabedAlternateDeviceLinking: !0,
				onAutoLogoutToggle: r("WAWebNoop"),
				autoLogoutEnabled: !1,
				onClickLinkWithPhoneNumber: C,
				theme: e.theme
			}), t[12] = e.apiCmd, t[13] = e.theme, t[14] = C, t[15] = b) : b = t[15], f = b;
		}
		var v;
		return t[16] !== g || t[17] !== f ? (v = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [g, f] }), t[16] = g, t[17] = f, t[18] = v) : v = t[18], v;
	}
	function p() {
		o("WAWebPageLoadLogging").endPageLoadQpl(!0, null, r("WAWebL10N").getLocale());
	}
	l.default = m;
}), 98);
