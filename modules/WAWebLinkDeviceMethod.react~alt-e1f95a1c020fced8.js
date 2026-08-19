__d("WAWebLinkDeviceMethod.react", [
	"CometPlaceholder.react",
	"WAWebAutoLogoutGating",
	"WAWebConnModel",
	"WAWebHybridRegGating",
	"WAWebLinkDeviceEvents",
	"WAWebLinkDeviceQrcodeLayout.react",
	"WAWebLinkDeviceScreenGatedUtils",
	"WAWebPairingType",
	"WAWebRegistrationCampaignConstants",
	"WAWebSmsRegistrationSendSmsCall",
	"WAWebUA",
	"deferredLoadComponent",
	"react",
	"requireDeferred",
	"requireDeferredForDisplay",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState, p = r("requireDeferred")("WAWebLinkDeviceAction").__setRef("WAWebLinkDeviceMethod.react"), _ = r("requireDeferred")("WAWebLinkDevicePhoneNumber.react").__setRef("WAWebLinkDeviceMethod.react"), f = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceMethod.react"), g = r("requireDeferred")("WAWebShortcakeLinkingAction").__setRef("WAWebLinkDeviceMethod.react"), h = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebLinkDeviceQrcode.react").__setRef("WAWebLinkDeviceMethod.react")), y = r("deferredLoadComponent")(r("requireDeferred")("WAWebShortcakePasskeyScreen.react").__setRef("WAWebLinkDeviceMethod.react")), C = r("deferredLoadComponent")(_), b = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationConfirmation.react").__setRef("WAWebLinkDeviceMethod.react")), v = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react")), S = r("deferredLoadComponent")(r("requireDeferred")("WAWebWaComSignupSmsPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react"));
	function R(e) {
		var t, n = e.apiCmd, a = e.autoLogoutEnabled, l = e.imperativeRef, u = e.isLinkingWithPhoneNumber, R = u === void 0 ? !1 : u, L = e.onAutoLogoutToggle, E = e.onBack, k = e.onContinue, I = e.setApiCmd, T = e.setIsLinkingWithPhoneNumber, D = e.smsRegistration, x = o("WAWebUA").UA.isOculusBrowser, $ = m(x), P = $[0], N = $[1], M = async function(t) {
			var e = await Promise.all([p.load()]), n = e[0].resetLinkDeviceState;
			await n({ linkDeviceMethod: t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), T == null || T(t);
		}, w = m(!1), A = w[0], F = w[1];
		o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:passkey_prologue_request", c(function() {
			F(!0);
		}, []));
		var O = m(null), B = O[0], W = O[1], q = m(function() {
			return _.getModuleIfRequireable() != null;
		}), U = q[0], V = q[1];
		if (d(function() {
			if (!U) {
				var e = _.onReady(function() {
					V(!0);
				});
				return function() {
					return e.remove();
				};
			}
		}, [U]), o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", async function() {
			if (P && R) {
				var e = await Promise.all([p.load()]), t = e[0].resetLinkDeviceState;
				t({ linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING }).then(function() {
					return N(!1);
				});
				return;
			}
			var n = await p.load(), r = n.getPreselectedCountryCodeIso, a = await r();
			W(a);
		}, { once: !0 }), D != null && ((t = D.serverResponse) == null ? void 0 : t.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT) {
			var H = D.lastCountryId, G = D.lastPhoneNumber, z = D.reset, j = D.sendSms, K = D.serverResponse;
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: s.jsx("div", {}),
				name: "WAWebSmsRegistrationConfirmation",
				children: s.jsx(b, {
					selectedCountryId: H,
					phoneNumberWithoutCountryCode: G,
					onBack: function() {
						if (E) {
							E();
							return;
						}
						z();
					},
					onContinue: k,
					onRetry: async function() {
						await j(H, G);
					},
					providerNumber: K == null ? void 0 : K.provider_number,
					theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
				})
			});
		}
		if (A) return s.jsx(r("CometPlaceholder.react"), {
			fallback: s.jsx("div", {}),
			name: "WAWebShortcakePasskeyScreen",
			children: s.jsx(y, {
				onCancel: async function() {
					try {
						var e = await Promise.all([g.load(), p.load()]), t = e[0], n = e[1];
						t.cancelShortcakePasskeyPairing(), await n.resetLinkDeviceState({ linkDeviceMethod: o("WAWebPairingType").PairingType.QR_CODE });
					} finally {
						F(!1);
					}
				},
				onConfirmVerificationCode: async function() {
					var e = await g.load();
					await e.confirmShortcakeVerificationCode();
				},
				onStartPasskeyPairing: async function() {
					var e = await g.load();
					await e.startShortcakePasskeyPairing();
				}
			})
		});
		if ((n == null ? void 0 : n.resultType) === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test") return s.jsx(r("CometPlaceholder.react"), {
			fallback: s.jsx("div", {}),
			name: "WAWebSmsRegistrationPhoneNumberInput",
			children: s.jsx(v, {
				imperativeRef: l,
				onBack: E,
				onContinue: k,
				setApiCmd: I
			})
		});
		if ((n == null ? void 0 : n.resultType) === "WEB_REGISTRATION_CAMPAIGN") {
			if (n.data.phoneNumberWithoutCountryCode == null || n.data.group == null || n.data.group === o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_CONTROL) {
				var Q;
				return s.jsx(r("CometPlaceholder.react"), {
					fallback: s.jsx("div", {}),
					name: "WAWebSmsRegistrationPhoneNumberInput",
					children: s.jsx(v, {
						experimentBucket: n == null || (Q = n.data) == null ? void 0 : Q.group,
						imperativeRef: l,
						onBack: E,
						onContinue: k,
						setApiCmd: I
					})
				});
			}
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: s.jsx("div", {}),
				name: "WAWebWaComSignupSmsPhoneNumberInput",
				children: s.jsx(S, {
					setApiCmd: I,
					experimentBucket: n.data.group,
					phoneNumberWithoutCountryCodeFromQueryParams: n.data.phoneNumberWithoutCountryCode,
					providerNumberFromQueryParams: n.data.providerNumber
				})
			});
		}
		if (R) return s.jsx(r("CometPlaceholder.react"), {
			fallback: s.jsx("div", {}),
			name: i.id,
			children: s.jsx(C, {
				apiCmd: n,
				initialCountryId: B,
				isLinkingPageLoading: P,
				onClickLinkWithQr: async function(t) {
					t == null || t.preventDefault(), t == null || t.stopPropagation(), await M(!1);
				}
			})
		});
		var X = !a || o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe(), Y = async function(t) {
			t == null || t.preventDefault(), t == null || t.stopPropagation(), f.onReady(function(e) {
				return e.companionDeviceLinkingScreenQpl.switchToPhoneNumber();
			}), await M(!0);
		}, J = U ? Y : null;
		return s.jsx(r("CometPlaceholder.react"), {
			fallback: s.jsx(o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout, {
				apiCmd: n,
				autoLogoutEnabled: a,
				enabedAlternateDeviceLinking: X,
				onAutoLogoutToggle: L,
				children: s.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {})
			}),
			name: "WAWebLinkDeviceQrcode",
			children: s.jsx(h, {
				apiCmd: n,
				enabedAlternateDeviceLinking: X,
				onAutoLogoutToggle: L,
				autoLogoutEnabled: a,
				onClickLinkWithPhoneNumber: J
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);
