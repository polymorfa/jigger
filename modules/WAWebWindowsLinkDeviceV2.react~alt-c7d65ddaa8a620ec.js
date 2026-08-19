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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		c(function() {
			o("WAWebPageLoadLogging").endPageLoadQpl(!0, null, r("WAWebL10N").getLocale());
		}, void 0);
		var t = d(null), n = t[0], a = t[1];
		o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", async function() {
			var e = await o("WAWebLinkDeviceAction").getPreselectedCountryCodeIso();
			a(e);
		}, { once: !0 });
		var i = async function(n) {
			await o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: n ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), e.onPairingTypeChange(n ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE);
		}, l, u;
		return e.pairingType === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING ? u = s.jsx(r("WAWebLinkDevicePhoneNumber.react"), {
			apiCmd: e.apiCmd,
			initialCountryId: n,
			onClickLinkWithQr: async function(t) {
				t == null || t.preventDefault(), t == null || t.stopPropagation(), await i(!1);
			}
		}) : l = s.jsx(r("WAWebLinkDeviceQrcode.react"), {
			apiCmd: e.apiCmd,
			enabedAlternateDeviceLinking: !0,
			onAutoLogoutToggle: r("WAWebNoop"),
			autoLogoutEnabled: !1,
			onClickLinkWithPhoneNumber: async function(t) {
				t == null || t.preventDefault(), t == null || t.stopPropagation(), await i(!0);
			},
			theme: e.theme
		}), s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u, l] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
