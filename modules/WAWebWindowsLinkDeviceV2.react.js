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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(19);
		c(p, void 0);
		var a = d(null), i = a[0], l = a[1], u, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebLinkDeviceAction").getPreselectedCountryCodeIso();
				l(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), m = { once: !0 }, t[0] = u, t[1] = m) : (u = t[0], m = t[1]), o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", u, m);
		var _;
		t[2] !== e ? (_ = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				yield o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), e.onPairingTypeChange(t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE);
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), t[2] = e, t[3] = _) : _ = t[3];
		var f = _, g, h;
		if (e.pairingType === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING) {
			var y;
			t[4] !== f ? (y = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					e == null || e.preventDefault(), e == null || e.stopPropagation(), yield f(!1);
				});
				return function(n) {
					return e.apply(this, arguments);
				};
			})(), t[4] = f, t[5] = y) : y = t[5];
			var C;
			t[6] !== i || t[7] !== e.apiCmd || t[8] !== y ? (C = s.jsx(r("WAWebLinkDevicePhoneNumber.react"), {
				apiCmd: e.apiCmd,
				initialCountryId: i,
				onClickLinkWithQr: y
			}), t[6] = i, t[7] = e.apiCmd, t[8] = y, t[9] = C) : C = t[9], h = C;
		} else {
			var b;
			t[10] !== f ? (b = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					e == null || e.preventDefault(), e == null || e.stopPropagation(), yield f(!0);
				});
				return function(n) {
					return e.apply(this, arguments);
				};
			})(), t[10] = f, t[11] = b) : b = t[11];
			var v;
			t[12] !== e.apiCmd || t[13] !== e.theme || t[14] !== b ? (v = s.jsx(r("WAWebLinkDeviceQrcode.react"), {
				apiCmd: e.apiCmd,
				enabedAlternateDeviceLinking: !0,
				onAutoLogoutToggle: r("WAWebNoop"),
				autoLogoutEnabled: !1,
				onClickLinkWithPhoneNumber: b,
				theme: e.theme
			}), t[12] = e.apiCmd, t[13] = e.theme, t[14] = b, t[15] = v) : v = t[15], g = v;
		}
		var S;
		return t[16] !== h || t[17] !== g ? (S = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [h, g] }), t[16] = h, t[17] = g, t[18] = S) : S = t[18], S;
	}
	function p() {
		o("WAWebPageLoadLogging").endPageLoadQpl(!0, null, r("WAWebL10N").getLocale());
	}
	l.default = m;
}), 98);
