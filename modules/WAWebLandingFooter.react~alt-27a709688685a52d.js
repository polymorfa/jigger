__d("WAWebLandingFooter.react", [
	"fbt",
	"WAWebAppRootInteractionContext.react",
	"WAWebFlex.react",
	"WAWebInteractionTracePolicy",
	"WAWebLandingPromoGating",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebLockOutlineIcon.react",
	"WAWebNoop",
	"WAWebSmsRegistrationSubtitle.react",
	"WDSText.react",
	"WDSThemes",
	"deferredLoadComponent",
	"react",
	"requireDeferred",
	"stylex",
	"useWAWebRegPromo"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = r("deferredLoadComponent")(r("requireDeferred")("WAWebPhoneNumberCaptureFields.react").__setRef("WAWebLandingFooter.react")), m = {
		landingFooterWrapper: {
			paddingTop: "x1y1aw1k",
			$$css: !0
		},
		noWaAccountText: {
			fontSize: "x1c3i2sq",
			lineHeight: "x1a6qonq",
			$$css: !0
		},
		externalHelpLinkText: {
			fontSize: "x1jchvi3",
			fontWeight: "xk50ysn",
			lineHeight: "x1ud3kw6",
			$$css: !0
		},
		e2ee: {
			color: "x65c15g",
			lineHeight: "x9d7mpn",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		promoCard: {
			width: "xy296fx",
			paddingTop: "x1p5oq8j",
			paddingInlineEnd: "x15zmtp0",
			paddingBottom: "xwxc41k",
			paddingInlineStart: "x1oiqv2n",
			borderStartStartRadius: "x1rsuxf0",
			borderStartEndRadius: "xcgujcq",
			borderEndEndRadius: "x1igtfuo",
			borderEndStartRadius: "x13up0n2",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xpypsur",
			borderInlineEndColor: "x1fe0zbt",
			borderBottomColor: "x249io5",
			borderInlineStartColor: "xtq6bvn",
			backgroundColor: "x12peec7",
			"@media screen and (max-width: 900px)_width": "x91od0",
			"@media screen and (max-width: 900px)_paddingTop": "x18w32sv",
			"@media screen and (max-width: 900px)_paddingInlineEnd": "xym2i8p",
			"@media screen and (max-width: 900px)_paddingBottom": "xk3sftt",
			"@media screen and (max-width: 900px)_paddingInlineStart": "x1i50ybd",
			$$css: !0
		},
		promoButton: {
			width: "xdzyupr",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.isWebReg, n = e.onGetStartedNav, a = e.smsRegistration, i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED
		}), l = i.startInteraction, u = async function() {
			l(), await n();
		};
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: o("WAWebLandingPromoGating").isLandingPromoEnabled() ? void 0 : m.landingFooterWrapper,
			rowGap: 24,
			children: [
				o("WAWebLandingPromoGating").isLandingPromoEnabled() ? c.jsx(f, {
					isWebReg: t,
					smsRegistration: a
				}) : c.jsx(_, {
					isWebReg: t,
					onClick: u
				}),
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					columnGap: 4,
					align: "center",
					children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
						width: 20,
						iconXstyle: m.e2ee
					}) }), c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: m.e2ee,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				c.jsx(o("WAWebLinkDeviceCommonInstructions.react").TCLink, {})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.isWebReg, n = e.onClick;
		return t ? null : c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 8,
				xstyle: m.noWaAccountText,
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 12,
				xstyle: m.externalHelpLinkText,
				children: c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: s._(
						/*BTDS*/
						""
					),
					onClick: n
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n, a = t.isWebReg, i = t.smsRegistration, l = r("useWAWebRegPromo")(i), u = l.handleChangePhoneNumber, p = l.handleSubmit, _ = l.isDisabled, f = l.phoneNumberWithoutCountryCode, g = l.selectedCountryId;
		return a ? null : c.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			className: (e || (e = r("stylex")))(o("WDSThemes").WDSLightTheme, m.promoCard),
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				columnGap: 24,
				children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					rowGap: 4,
					children: [c.jsx(o("WAWebFlex.react").FlexRow, {
						className: "x1c3i2sq xk50ysn x1o2sk6j xowvryd",
						children: c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "LargeTitle2",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}), c.jsx(o("WAWebFlex.react").FlexColumn, {
						rowGap: 8,
						children: c.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitle, {
							includesSmsText: !1,
							textAlign: "start",
							ctaText: s._(
								/*BTDS*/
								""
							)
						})
					})]
				}), c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
						rowGap: 8,
						align: "stretch",
						children: [c.jsx(d, {
							phoneNumberWithoutCountryCode: f,
							selectedCountryId: g,
							onChangePhoneNumber: u,
							onChangeSelectedCountry: r("WAWebNoop"),
							showCountrySelect: !1,
							surface: "link-device-phone-number",
							onSubmit: function() {
								p();
							},
							error: (n = i.serverResponse) == null ? void 0 : n.error_reason,
							theme: "wds"
						}), c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							text: s._(
								/*BTDS*/
								""
							),
							onClick: p,
							disabled: _,
							testId: "wa-web-landing-promo-get-started",
							useFullWidthSweep: !0,
							xstyle: m.promoButton
						})]
					})
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 226);
