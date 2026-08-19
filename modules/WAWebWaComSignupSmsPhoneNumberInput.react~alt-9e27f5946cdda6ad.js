__d("WAWebWaComSignupSmsPhoneNumberInput.react", [
	"fbt",
	"$InternalEnum",
	"CometHeroHoldTrigger.react",
	"WAIsoToCc",
	"WALogger",
	"WAWebAppRootInteractionContext.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebInteractionTracePolicy",
	"WAWebL10N",
	"WAWebLinkDeviceCommonComponents.react",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceFlagEmojiSetup",
	"WAWebLinkDevicePhoneNumberEntryInput.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLinkDeviceQplHelpLinkEvent",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebRegistrationCampaignConstants",
	"WAWebSpinner.react",
	"WAWebWaBrandArrowRightIconWrapper.react",
	"WAWebWaComSignupSmsRegistrationConfirmation.react",
	"WAXWhatsAppWebRegistrationControllerRouteBuilder",
	"asyncToGeneratorRuntime",
	"react",
	"useVisibility",
	"useWAWebAsync",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useMemo, f = m.useState, g = "reg-exp-m1-phone-number-entry-screen-error", h = {
		subtitle: {
			lineHeight: "x1qfxs89",
			letterSpacing: "xfq947u",
			textAlign: "x2b8uid",
			$$css: !0
		},
		error: {
			backgroundColor: "xrkjzwr",
			color: "x30a034",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			marginBottom: "x1e56ztr",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		combinedPill: {
			boxSizing: "x9f619",
			height: "xsdox4t",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			backgroundColor: "x1p8t8ri",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			paddingInlineStart: "x106a9eq",
			paddingInlineEnd: "x1xnnf8n",
			columnGap: "x1amjocr",
			width: "x121pien",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xkh25tn",
			borderInlineEndColor: "x9zucqe",
			borderBottomColor: "x1fftf1g",
			borderInlineStartColor: "x4zyt7s",
			$$css: !0
		},
		phoneInputInPill: {
			flexGrow: "x1iyjqo2",
			height: "xt7dq6l",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "xjbqb8w",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		combinedPillFocused: {
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		},
		combinedPillError: {
			borderTopColor: "x113kvv2",
			borderInlineEndColor: "xce17vl",
			borderBottomColor: "x61tcke",
			borderInlineStartColor: "x1kfnm9f",
			$$css: !0
		},
		inputAndButtonColumn: {
			width: "x121pien",
			$$css: !0
		},
		buttonHeight: {
			height: "xsdox4t",
			$$css: !0
		}
	}, y = "for (;;);", C = n("$InternalEnum")({
		SENT: 1,
		ERROR: 2
	});
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			try {
				var n = r("WAXWhatsAppWebRegistrationControllerRouteBuilder").buildUri({
					phone: t,
					step: "otp",
					locale: r("WAWebL10N").getLocale(),
					source: 2
				}).toString().concat("&__a=1"), a = yield window.fetch(n, { headers: { "Content-Type": "application/json" } }), i = yield a.text();
				i.startsWith(y) && (i = i.substring(y.length));
				var l = JSON.parse(i).payload;
				return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sendSmsCall] response received +"]))), l;
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sendSmsCall] call failed ", ""])), e).sendLogs("wa-web-reg");
			}
			return {
				status: C.ERROR,
				error_reason: r("WAWebFbtCommon")("Try Again"),
				retry_after: 5
			};
		}), v.apply(this, arguments);
	}
	function S(e) {
		var t = e.children;
		return t;
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.errorReason;
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "center",
			xstyle: h.error,
			children: t
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t, a = e.experimentBucket, i = e.phoneNumberWithoutCountryCodeFromQueryParams, l = e.providerNumberFromQueryParams, u = e.setApiCmd, c = f(i), m = c[0], y = c[1], v = f(!1), L = v[0], k = v[1], I = f(!1), T = I[0], D = I[1], x = f(!1), $ = x[0], P = x[1], N = f(!1), M = N[0], w = N[1], A = f(!1), F = A[0], O = A[1], B = o("useWAWebTimeout").useManualTimeout(function() {
			w(!1), O(!1);
		}), W = B[0], q = f(), U = q[0], V = q[1], H = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []), G = p(function(e, t) {
			y(t.substr(0, 10)), F && O(!1);
		}, [F]), z = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
		}), j = z.startInteraction, K = _(function() {
			return $ || M || !o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc").US, m);
		}, [
			M,
			$,
			m
		]), Q = r("useVisibility")({ onVisible: function() {
			o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_LOADED);
		} }), X = Q[0], Y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				if (!K) {
					o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED), P(!0);
					var t = ((e = r("WAIsoToCc").US) != null ? e : "") + m, n = yield b(t), a = n == null ? void 0 : n.retry_after;
					(n == null ? void 0 : n.status) === C.ERROR && (O(!0), a != null && a > 0 && (w(!0), W(a * 1e3))), V(n), P(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		if ((U == null ? void 0 : U.status) === C.SENT || a === o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_FLOW_2 && !T) {
			var J;
			return d.jsx(r("WAWebWaComSignupSmsRegistrationConfirmation.react"), {
				phoneNumberWithoutCountryCode: m,
				providerNumber: (J = U == null ? void 0 : U.provider_number) != null ? J : l,
				onBack: function() {
					y(m), V(null), D(!0);
				},
				onLinkDevice: function() {
					j(), u(null);
				},
				onRetry: Y
			});
		}
		if (H.loading || H.error) return d.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			children: [d.jsx(r("CometHeroHoldTrigger.react"), {
				description: "WAWebSmsRegistrationPhoneNumberInput",
				hold: !0
			}), d.jsx(o("WAWebSpinner.react").Spinner, {})]
		});
		var Z = String.fromCodePoint(127482, 127480), ee = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(Z);
		return d.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 24,
			className: "light",
			ref: X,
			children: [
				d.jsx(o("WAWebFlex.react").FlexRow, {
					alignSelf: "center",
					children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
						rowGap: 16,
						children: [d.jsx(o("WAWebFlex.react").FlexRow, {
							alignSelf: "center",
							children: d.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
								value: s._(
									/*BTDS*/
									""
								),
								theme: void 0
							})
						}), d.jsx(o("WAWebFlex.react").FlexRow, { children: d.jsx(E, {}) })]
					})
				}),
				d.jsx(o("WAWebFlex.react").FlexRow, {
					alignSelf: "center",
					children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
						rowGap: 20,
						align: "stretch",
						xstyle: h.inputAndButtonColumn,
						children: [
							d.jsxs(r("WAWebFlexItem.react"), {
								isFlexContainer: !0,
								xstyle: [h.combinedPill, F ? h.combinedPillError : L && h.combinedPillFocused],
								align: "center",
								children: [ee != null && d.jsx(r("WAWebEmoji.react"), {
									DEPRECATED_className: "xngnso2",
									emoji: ee,
									selectable: !1
								}), d.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
									countryCodeIso: "US",
									phoneNumberWithoutCountryPrefix: m,
									a11yErrorMessage: {
										errorShown: (U == null ? void 0 : U.error_reason) != null && F,
										errorMessageDOMId: g,
										errorMessage: U == null ? void 0 : U.error_reason
									},
									onChange: G,
									onEnter: function() {
										Y();
									},
									onFocus: function() {
										return k(!0);
									},
									onBlur: function() {
										return k(!1);
									},
									theme: "default",
									xstyle: h.phoneInputInPill
								})]
							}),
							(U == null ? void 0 : U.error_reason) != null && F && d.jsx(R, { errorReason: (t = U == null ? void 0 : U.error_reason) != null ? t : r("WAWebFbtCommon")("Try Again") }),
							d.jsx("div", {
								className: "xrvj5dj",
								children: d.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
									text: r("WAWebFbtCommon")("Continue"),
									onClick: Y,
									animate: !1,
									disabled: K,
									testId: "link-device-sms-pn-entry-continue-button",
									icon: d.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {}),
									theme: void 0,
									xstyle: h.buttonHeight
								})
							})
						]
					})
				}),
				d.jsxs(o("WAWebFlex.react").FlexRow, {
					columnGap: 8,
					alignSelf: "center",
					children: [d.jsx(o("WAWebFlex.react").FlexColumn, { children: d.jsx(S, { children: s._(
						/*BTDS*/
						""
					) }) }), d.jsx(o("WAWebFlex.react").FlexColumn, { children: d.jsx(S, { children: d.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: !1,
						text: s._(
							/*BTDS*/
							""
						),
						onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							j(), u(null);
						}),
						showArrow: void 0,
						showUnderline: void 0
					}) }) })]
				})
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		return d.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 2,
			xstyle: h.subtitle,
			children: [d.jsx(o("WAWebFlex.react").FlexRow, {
				alignSelf: "center",
				align: "center",
				wrap: "wrap",
				justify: "center",
				children: d.jsx(S, { children: s._(
					/*BTDS*/
					""
				) })
			}), d.jsx(o("WAWebFlex.react").FlexRow, {
				alignSelf: "center",
				align: "center",
				wrap: "wrap",
				justify: "center",
				children: d.jsx(S, { children: s._(
					/*BTDS*/
					"",
					[s._param("privacy_policy_link", d.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: !1,
						text: s._(
							/*BTDS*/
							""
						),
						url: "https://www.whatsapp.com/legal/privacy-policy",
						showArrow: !1,
						showUnderline: void 0
					})), s._param("terms_of_service_link", d.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: !1,
						text: s._(
							/*BTDS*/
							""
						),
						url: "https://www.whatsapp.com/legal/terms-of-service",
						showArrow: !1,
						showUnderline: void 0
					}))]
				) })
			})]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = L;
}), 226);
