__d("WAWebWindowsLinkScreenWrapper.react", [
	"fbt",
	"WAWebAutoLogoutGating",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebLandingPromoGating",
	"WAWebLinkDeviceMethod.react",
	"WAWebPairingType",
	"WAWebWindowsLinkDeviceV2.react",
	"WAWebWindowsTaskbarController",
	"WAWebWindowsWelcomeScreenUtils",
	"WAWebWindowsWelcomeV2.react",
	"WDSIconIcArrowBack.react",
	"react",
	"useWAWebLinkDeviceAutoLogout",
	"useWAWebSmsRegistration"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		outerContainer: {
			backgroundColor: "x1h3rtpe",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		container: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "x1280gxy",
			minWidth: "x1q18rhr",
			maxWidth: "x1wtp3jp",
			width: "xm6i5cn",
			minHeight: "xmaeki8",
			maxHeight: "x1aysy39 xs7vrp5",
			boxSizing: "x9f619",
			height: "x1ck2h3a",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			marginTop: "x1ci5j9l xw07rgd",
			marginInlineEnd: "x5jkbfu x1wxr1zq",
			marginBottom: "xg6s713 x6h1cav",
			marginInlineStart: "xoud76o x1xdtf2h",
			$$css: !0
		},
		containerFooterPromo: {
			maxHeight: "x1rkru5j xs7vrp5",
			$$css: !0
		},
		containerPairing: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		backIcon: {
			insetInlineStart: "x1n8ud3w",
			left: null,
			right: null,
			cursor: "x1ypdohk",
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			color: "xhslqc4",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		content: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			paddingTop: "xexx8yu xo8btsf",
			paddingInlineEnd: "xsvpdpl x1siyn35",
			paddingBottom: "x18d9i69 xrjntua",
			paddingInlineStart: "x4g923t xur3ugl",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.apiCmd, n = e.forcedView, a = p(n != null ? n : o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome), i = a[0], l = a[1], s = p(o("WAWebPairingType").PairingType.QR_CODE), c = s[0], _ = s[1], f = p(!1), h = f[0], y = f[1], C = r("useWAWebSmsRegistration")(), b = m(null);
		d(function() {
			o("WAWebWindowsTaskbarController").WATaskbarController.ResetTaskbarBadge();
		}, []);
		var v = function() {
			if (i === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup) {
				var e;
				if (((e = b.current) == null ? void 0 : e.handleBack()) === !0) return;
				l(o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome);
				return;
			}
			if (i === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice && c === o("WAWebPairingType").PairingType.QR_CODE) {
				if (h) {
					y(!1), l(o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup);
					return;
				}
				l(o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome);
				return;
			}
			var t = (function(e) {
				if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome) return [o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome, null];
				if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice) return [null, o("WAWebPairingType").PairingType.QR_CODE];
				if (Array.isArray(e) && e.length === 2 && e[0] === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup) return [o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome, null];
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
			})([i, c]), n = t[0], r = t[1];
			n != null && l(n), r != null && _(r);
		}, S = r("useWAWebLinkDeviceAutoLogout")(), R = S.autoLogoutEnabled, L = S.handleAutoLogoutToggle, E = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || R;
		return u.jsx(g, {
			view: i,
			showBack: i !== o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome,
			onBackClick: v,
			children: i === o("WAWebWindowsWelcomeScreenUtils").ViewType.Welcome ? u.jsx(r("WAWebWindowsWelcomeV2.react"), {
				onClickHandler: function() {
					l(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
				},
				onSignupClickHandler: function() {
					l(o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup);
				},
				smsRegistration: C
			}) : i === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice ? u.jsx(r("WAWebWindowsLinkDeviceV2.react"), {
				apiCmd: t,
				pairingType: c,
				onPairingTypeChange: _,
				theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
			}, "qr-code") : i === o("WAWebWindowsWelcomeScreenUtils").ViewType.Signup ? u.jsx(r("WAWebLinkDeviceMethod.react"), {
				apiCmd: {
					resultType: "WEB_REGISTRATION_CAMPAIGN",
					data: {
						url: "/",
						referrer: "windows"
					}
				},
				autoLogoutEnabled: E,
				imperativeRef: b,
				onAutoLogoutToggle: L,
				onContinue: function() {
					y(!0), l(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
				},
				setApiCmd: function(t) {
					t == null && l(o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice);
				},
				smsRegistration: C
			}) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
			})()
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.children, n = e.onBackClick, a = e.showBack, i = e.view;
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.outerContainer,
			justify: "center",
			align: "center",
			grow: 1,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [
					_.container,
					i === o("WAWebWindowsWelcomeScreenUtils").ViewType.LinkDevice && _.containerPairing,
					o("WAWebLandingPromoGating").isLandingPromoEnabled() && _.containerFooterPromo
				],
				justify: "center",
				align: "center",
				grow: 1,
				children: [a && u.jsx(o("WAWebFlex.react").FlexRow, {
					alignSelf: "start",
					children: u.jsx(o("WAWebClickable.react").Clickable, {
						ariaLabel: s._(
							/*BTDS*/
							""
						),
						onClick: n,
						xstyle: _.backIcon,
						children: u.jsx(r("WDSIconIcArrowBack.react"), {})
					})
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					grow: 1,
					xstyle: _.content,
					children: t
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
