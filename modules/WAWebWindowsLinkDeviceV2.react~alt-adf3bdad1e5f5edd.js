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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		c(function() {
			o("WAWebPageLoadLogging").endPageLoadQpl(!0, null, r("WAWebL10N").getLocale());
		}, void 0);
		var t = d(null), a = t[0], i = t[1];
		o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebLinkDeviceAction").getPreselectedCountryCodeIso();
			i(e);
		}), { once: !0 });
		var l = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				yield o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), e.onPairingTypeChange(t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE);
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), u, m;
		return e.pairingType === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING ? m = s.jsx(r("WAWebLinkDevicePhoneNumber.react"), {
			apiCmd: e.apiCmd,
			initialCountryId: a,
			onClickLinkWithQr: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					e == null || e.preventDefault(), e == null || e.stopPropagation(), yield l(!1);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()
		}) : u = s.jsx(r("WAWebLinkDeviceQrcode.react"), {
			apiCmd: e.apiCmd,
			enabedAlternateDeviceLinking: !0,
			onAutoLogoutToggle: r("WAWebNoop"),
			autoLogoutEnabled: !1,
			onClickLinkWithPhoneNumber: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					e == null || e.preventDefault(), e == null || e.stopPropagation(), yield l(!0);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(),
			theme: e.theme
		}), s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [m, u] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
