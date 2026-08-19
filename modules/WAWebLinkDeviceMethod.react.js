__d("WAWebLinkDeviceMethod.react", [
	"CometPlaceholder.react",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"deferredLoadComponent",
	"react",
	"requireDeferred",
	"requireDeferredForDisplay",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState, _ = r("requireDeferred")("WAWebLinkDeviceAction").__setRef("WAWebLinkDeviceMethod.react"), f = r("requireDeferred")("WAWebLinkDevicePhoneNumber.react").__setRef("WAWebLinkDeviceMethod.react"), g = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceMethod.react"), h = r("requireDeferred")("WAWebShortcakeLinkingAction").__setRef("WAWebLinkDeviceMethod.react"), y = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebLinkDeviceQrcode.react").__setRef("WAWebLinkDeviceMethod.react")), C = r("deferredLoadComponent")(r("requireDeferred")("WAWebShortcakePasskeyScreen.react").__setRef("WAWebLinkDeviceMethod.react")), b = r("deferredLoadComponent")(f), v = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationConfirmation.react").__setRef("WAWebLinkDeviceMethod.react")), S = r("deferredLoadComponent")(r("requireDeferred")("WAWebSmsRegistrationPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react")), R = r("deferredLoadComponent")(r("requireDeferred")("WAWebWaComSignupSmsPhoneNumberInput.react").__setRef("WAWebLinkDeviceMethod.react"));
	function L(t) {
		var a, l = t.apiCmd, s = t.autoLogoutEnabled, c = t.imperativeRef, L = t.isLinkingWithPhoneNumber, E = L === void 0 ? !1 : L, k = t.onAutoLogoutToggle, I = t.onBack, T = t.onContinue, D = t.setApiCmd, x = t.setIsLinkingWithPhoneNumber, $ = t.smsRegistration, P = o("WAWebUA").UA.isOculusBrowser, N = p(P), M = N[0], w = N[1], A = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var r = yield (e || (e = n("Promise"))).all([_.load()]), a = r[0].resetLinkDeviceState;
				yield a({ linkDeviceMethod: t ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING : o("WAWebPairingType").PairingType.QR_CODE }), x == null || x(t);
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), F = p(!1), O = F[0], B = F[1];
		o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:passkey_prologue_request", d(function() {
			B(!0);
		}, []));
		var W = p(null), q = W[0], U = W[1], V = p(function() {
			return f.getModuleIfRequireable() != null;
		}), H = V[0], G = V[1];
		if (m(function() {
			if (!H) {
				var e = f.onReady(function() {
					G(!0);
				});
				return function() {
					return e.remove();
				};
			}
		}, [H]), o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (M && E) {
				var t = yield (e || (e = n("Promise"))).all([_.load()]), r = t[0].resetLinkDeviceState;
				r({ linkDeviceMethod: o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING }).then(function() {
					return w(!1);
				});
				return;
			}
			var a = yield _.load(), i = a.getPreselectedCountryCodeIso, l = yield i();
			U(l);
		}), { once: !0 }), $ != null && ((a = $.serverResponse) == null ? void 0 : a.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT) {
			var z = $.lastCountryId, j = $.lastPhoneNumber, K = $.reset, Q = $.sendSms, X = $.serverResponse;
			return u.jsx(r("CometPlaceholder.react"), {
				fallback: u.jsx("div", {}),
				name: "WAWebSmsRegistrationConfirmation",
				children: u.jsx(v, {
					selectedCountryId: z,
					phoneNumberWithoutCountryCode: j,
					onBack: function() {
						if (I) {
							I();
							return;
						}
						K();
					},
					onContinue: T,
					onRetry: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						yield Q(z, j);
					}),
					providerNumber: X == null ? void 0 : X.provider_number,
					theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
				})
			});
		}
		if (O) return u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx("div", {}),
			name: "WAWebShortcakePasskeyScreen",
			children: u.jsx(C, {
				onCancel: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var t = yield (e || (e = n("Promise"))).all([h.load(), _.load()]), r = t[0], a = t[1];
						r.cancelShortcakePasskeyPairing(), yield a.resetLinkDeviceState({ linkDeviceMethod: o("WAWebPairingType").PairingType.QR_CODE });
					} finally {
						B(!1);
					}
				}),
				onConfirmVerificationCode: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield h.load();
					yield e.confirmShortcakeVerificationCode();
				}),
				onStartPasskeyPairing: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield h.load();
					yield e.startShortcakePasskeyPairing();
				})
			})
		});
		if ((l == null ? void 0 : l.resultType) === "WEB_REGISTRATION" && o("WAWebLinkDeviceScreenGatedUtils").getOptimizedRegFromWebVariant() === "test") return u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx("div", {}),
			name: "WAWebSmsRegistrationPhoneNumberInput",
			children: u.jsx(S, {
				imperativeRef: c,
				onBack: I,
				onContinue: T,
				setApiCmd: D
			})
		});
		if ((l == null ? void 0 : l.resultType) === "WEB_REGISTRATION_CAMPAIGN") {
			if (l.data.phoneNumberWithoutCountryCode == null || l.data.group == null || l.data.group === o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_CONTROL) {
				var Y;
				return u.jsx(r("CometPlaceholder.react"), {
					fallback: u.jsx("div", {}),
					name: "WAWebSmsRegistrationPhoneNumberInput",
					children: u.jsx(S, {
						experimentBucket: l == null || (Y = l.data) == null ? void 0 : Y.group,
						imperativeRef: c,
						onBack: I,
						onContinue: T,
						setApiCmd: D
					})
				});
			}
			return u.jsx(r("CometPlaceholder.react"), {
				fallback: u.jsx("div", {}),
				name: "WAWebWaComSignupSmsPhoneNumberInput",
				children: u.jsx(R, {
					setApiCmd: D,
					experimentBucket: l.data.group,
					phoneNumberWithoutCountryCodeFromQueryParams: l.data.phoneNumberWithoutCountryCode,
					providerNumberFromQueryParams: l.data.providerNumber
				})
			});
		}
		if (E) return u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx("div", {}),
			name: i.id,
			children: u.jsx(b, {
				apiCmd: l,
				initialCountryId: q,
				isLinkingPageLoading: M,
				onClickLinkWithQr: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						e == null || e.preventDefault(), e == null || e.stopPropagation(), yield A(!1);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()
			})
		});
		var J = !s || o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe(), Z = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				e == null || e.preventDefault(), e == null || e.stopPropagation(), g.onReady(function(e) {
					return e.companionDeviceLinkingScreenQpl.switchToPhoneNumber();
				}), yield A(!0);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), ee = H ? Z : null;
		return u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx(o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout, {
				apiCmd: l,
				autoLogoutEnabled: s,
				enabedAlternateDeviceLinking: J,
				onAutoLogoutToggle: k,
				children: u.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {})
			}),
			name: "WAWebLinkDeviceQrcode",
			children: u.jsx(y, {
				apiCmd: l,
				enabedAlternateDeviceLinking: J,
				onAutoLogoutToggle: k,
				autoLogoutEnabled: s,
				onClickLinkWithPhoneNumber: ee
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 98);
