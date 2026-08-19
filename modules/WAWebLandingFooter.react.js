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
	"asyncToGeneratorRuntime",
	"deferredLoadComponent",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(13), a = e.isWebReg, i = e.onGetStartedNav, l = e.smsRegistration, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED
		}, t[0] = u) : u = t[0];
		var d = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(u), p = d.startInteraction, g;
		t[1] !== i || t[2] !== p ? (g = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				p(), yield i();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = i, t[2] = p, t[3] = g) : g = t[3];
		var h = g, y;
		t[4] !== h || t[5] !== a || t[6] !== l ? (y = o("WAWebLandingPromoGating").isLandingPromoEnabled() ? c.jsx(f, {
			isWebReg: a,
			smsRegistration: l
		}) : c.jsx(_, {
			isWebReg: a,
			onClick: h
		}), t[4] = h, t[5] = a, t[6] = l, t[7] = y) : y = t[7];
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
			width: 20,
			iconXstyle: m.e2ee
		}) }), t[8] = C) : C = t[8];
		var b, v;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 4,
			align: "center",
			children: [C, c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: m.e2ee,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), v = c.jsx(o("WAWebLinkDeviceCommonInstructions.react").TCLink, {}), t[9] = b, t[10] = v) : (b = t[9], v = t[10]);
		var S;
		return t[11] !== y ? (S = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: o("WAWebLandingPromoGating").isLandingPromoEnabled() ? void 0 : m.landingFooterWrapper,
			rowGap: 24,
			children: [
				y,
				b,
				v
			]
		}), t[11] = y, t[12] = S) : S = t[12], S;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isWebReg, r = e.onClick;
		if (n) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(o("WAWebFlex.react").FlexColumn, {
			paddingTop: 8,
			xstyle: m.noWaAccountText,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[1] = i) : i = t[1];
		var l;
		return t[2] !== r ? (l = c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			children: [a, c.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 12,
				xstyle: m.externalHelpLinkText,
				children: c.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
					text: i,
					onClick: r
				})
			})]
		}), t[2] = r, t[3] = l) : l = t[3], l;
	}
	function f(t) {
		var n, a = o("react-compiler-runtime").c(19), i = t.isWebReg, l = t.smsRegistration, u = r("useWAWebRegPromo")(l), p = u.handleChangePhoneNumber, _ = u.handleSubmit, f = u.isDisabled, g = u.phoneNumberWithoutCountryCode, h = u.selectedCountryId;
		if (i) return null;
		var y;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex")))(o("WDSThemes").WDSLightTheme, m.promoCard), a[0] = y) : y = a[0];
		var C;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (C = "x1c3i2sq xk50ysn x1o2sk6j xowvryd", a[1] = C) : C = a[1];
		var b;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx(o("WAWebFlex.react").FlexRow, {
			className: C,
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "LargeTitle2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), a[2] = b) : b = a[2];
		var v;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			rowGap: 4,
			children: [b, c.jsx(o("WAWebFlex.react").FlexColumn, {
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
		}), a[3] = v) : v = a[3];
		var S;
		a[4] !== _ ? (S = function() {
			_();
		}, a[4] = _, a[5] = S) : S = a[5];
		var R = (n = l.serverResponse) == null ? void 0 : n.error_reason, L;
		a[6] !== p || a[7] !== g || a[8] !== h || a[9] !== S || a[10] !== R ? (L = c.jsx(d, {
			phoneNumberWithoutCountryCode: g,
			selectedCountryId: h,
			onChangePhoneNumber: p,
			onChangeSelectedCountry: r("WAWebNoop"),
			showCountrySelect: !1,
			surface: "link-device-phone-number",
			onSubmit: S,
			error: R,
			theme: "wds"
		}), a[6] = p, a[7] = g, a[8] = h, a[9] = S, a[10] = R, a[11] = L) : L = a[11];
		var E;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), a[12] = E) : E = a[12];
		var k;
		a[13] !== _ || a[14] !== f ? (k = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			text: E,
			onClick: _,
			disabled: f,
			testId: "wa-web-landing-promo-get-started",
			useFullWidthSweep: !0,
			xstyle: m.promoButton
		}), a[13] = _, a[14] = f, a[15] = k) : k = a[15];
		var I;
		if (a[16] !== L || a[17] !== k) {
			var T;
			I = c.jsx((T = o("WAWebFlex.react")).FlexItem, {
				align: "center",
				justify: "center",
				className: y,
				children: c.jsxs(T.FlexRow, {
					align: "center",
					justify: "center",
					columnGap: 24,
					children: [v, c.jsx(T.FlexItem, {
						shrink: 0,
						children: c.jsxs(T.FlexColumn, {
							rowGap: 8,
							align: "stretch",
							children: [L, k]
						})
					})]
				})
			}), a[16] = L, a[17] = k, a[18] = I;
		} else I = a[18];
		return I;
	}
	l.default = p;
}), 226);
