__d("WAWebLinkDevicePhoneNumber.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebAltDeviceLinkingIq",
	"WAWebAltDeviceLinkingQpl",
	"WAWebLinkDeviceAction",
	"WAWebLinkDeviceEvents",
	"WAWebLinkDevicePhoneNumberCodeScreen.react",
	"WAWebLinkDevicePhoneNumberEntryScreen.react",
	"WAWebModalSingleActionOpener",
	"WAWebNetworkStatus",
	"WAWebPairingType",
	"cr:1064",
	"nullthrows",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["apiCmd"], u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useState, h = n("$InternalEnum").Mirrored(["STEP1_PHONE_NUMBER_ENTRY", "STEP2_DISPLAY_CODE"]);
	function y(t) {
		var a = g(h.STEP1_PHONE_NUMBER_ENTRY), i = a[0], l = a[1], m = g(null), _ = m[0], y = m[1], C = g(null), b = C[0], v = C[1], S = g(!1), R = S[0], L = S[1], E = function() {
			return o("WAWebModalSingleActionOpener").openSingleActionModal({
				title: s._(
					/*BTDS*/
					""
				),
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: function() {
					l(h.STEP1_PHONE_NUMBER_ENTRY);
				}
			});
		}, k = function() {
			return o("WAWebModalSingleActionOpener").openSingleActionModal({
				title: s._(
					/*BTDS*/
					""
				),
				body: s._(
					/*BTDS*/
					""
				),
				buttonText: s._(
					/*BTDS*/
					""
				),
				onDismiss: function() {
					return t.onClickLinkWithQr();
				}
			});
		}, I = function() {
			return o("WAWebModalSingleActionOpener").openSingleActionModal({
				title: s._(
					/*BTDS*/
					""
				),
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: function() {
					return t.onClickLinkWithQr();
				}
			});
		}, T = r("useWAWebStableCallback")(async function(e, t) {
			y(e), L(!1), l(h.STEP2_DISPLAY_CODE);
			try {
				if (r("WAWebNetworkStatus").online) {
					var n = await o("WAWebLinkDeviceAction").genLinkDeviceCodeForPhoneNumber(e, t);
					v(n);
				}
			} catch (e) {
				if (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("gen_code_exception"), await o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING }), e instanceof o("WAWebAltDeviceLinkingIq").CompanionHelloError) {
					var a;
					switch (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[alt pairing] companion-hello err starting flow: ", ""])), e), (a = e.type) == null ? void 0 : a.name) {
						case "IQErrorFeatureNotAvailable":
							l(h.STEP1_PHONE_NUMBER_ENTRY), k();
							return;
						case "IQErrorRateOverlimit":
							l(h.STEP1_PHONE_NUMBER_ENTRY), I();
							return;
					}
				}
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["alt pairing: unexpected error happened while starting flow: ", ""])), e).sendLogs("alt pairing: unexpected error happened while starting flow"), E();
			}
		}), D = async function() {
			i !== h.STEP2_DISPLAY_CODE || _ == null || (v(null), o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("refresh_code"), await o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING }), await T(_, !1));
		};
		switch (o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:refresh_alt_linking_code", D), o("useWAWebListener").useListener(r("WAWebNetworkStatus"), "change:online", function() {
			r("WAWebNetworkStatus").online ? D() : v(null);
		}), o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:error_alt_linking", E), f(function() {
			n("cr:1064") == null || n("cr:1064").initialize();
		}, []), _ == null && i !== h.STEP1_PHONE_NUMBER_ENTRY && (o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[alt pairing] invalid state: null phone in code screen"]))).sendLogs("alt pairing: null phone in code screen"), l(h.STEP1_PHONE_NUMBER_ENTRY)), i) {
			case h.STEP1_PHONE_NUMBER_ENTRY: {
				var x = t.apiCmd, $ = babelHelpers.objectWithoutPropertiesLoose(t, e);
				return p.jsx(o("WAWebLinkDevicePhoneNumberEntryScreen.react").LinkWithPhoneNumberEntryScreen, babelHelpers.extends({
					initialPhoneNumber: _,
					showUpdatePrimaryAppBanner: R,
					onSubmitPhoneNumber: function(t) {
						return T(t, !0);
					}
				}, $));
			}
			case h.STEP2_DISPLAY_CODE: return p.jsx(r("WAWebLinkDevicePhoneNumberCodeScreen.react"), {
				code: b,
				phoneNumber: r("nullthrows")(_),
				onClickEditPhoneNumber: async function() {
					await o("WAWebLinkDeviceAction").resetLinkDeviceState({ linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING }), l(h.STEP1_PHONE_NUMBER_ENTRY), v(null);
				},
				onClickLinkWithQr: t.onClickLinkWithQr,
				apiCmd: t.apiCmd
			});
		}
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
