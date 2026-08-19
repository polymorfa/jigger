__d("WAWebCallLinkJoinCallLiteHeader.react", [
	"fbt",
	"WAWebCallLinkDownloadArrowIcon.react",
	"WAWebCallLinkJoinCallLiteData",
	"WAWebCallLinkLoginChevronIcon.react",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WDSIconIcMenu.react",
	"react",
	"useMergeRefs",
	"useWAWebFocusOnMount",
	"useWAWebListener",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = "https://www.whatsapp.com/", f = {
		marketingHeader: {
			alignSelf: "xkh2ocl",
			height: "xwzfr38 x1ugx4es",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			columnGap: "x13a9art",
			flexWrap: "xozqiw3 x1a3ezpb",
			position: "x1n2onr6",
			$$css: !0
		},
		headerLogoLink: {
			columnGap: "xmixu3c",
			textDecoration: "x1hl2dhg",
			flexShrink: "x2lah0s",
			alignSelf: "xqcrz7y",
			marginTop: "x1tht7el",
			display: "x78zum5 xilz9nn",
			$$css: !0
		},
		headerLogoCenteredLink: {
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		headerPillHideNarrow: {
			display: "x3nfvp2 xilz9nn",
			$$css: !0
		},
		marketingNavLink: {
			color: "xipbhat",
			fontSize: "x1jchvi3",
			fontWeight: "xo1l8bm",
			lineHeight: "x19v9tvf",
			textDecoration: "x1hl2dhg",
			textDecorationLine: "xkrqix3 x1ubmc1d",
			whiteSpace: "xuxw1ft",
			display: "x3nfvp2",
			alignItems: "x6s0dn4",
			columnGap: "xmixu3c",
			position: "x1n2onr6",
			$$css: !0
		},
		marketingActions: {
			columnGap: "xtqikln",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		headerCtaCommon: {
			minWidth: "x15x72sd",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		loginButtonOverride: {
			backgroundColor: "xb1i3fl x19qpkoy",
			color: "xipbhat xmp5vt6",
			fontWeight: "xo1l8bm",
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "x110972j",
			paddingInlineEnd: "xziim83",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		headerDownloadButtonOverride: {
			fontWeight: "xo1l8bm",
			paddingTop: "xyamay9",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "x110972j",
			paddingInlineEnd: "xziim83",
			paddingLeft: null,
			paddingRight: null,
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopColor: "x20xl7p",
			borderInlineEndColor: "x1uiyo9q",
			borderBottomColor: "xqcoddb",
			borderInlineStartColor: "xgylblj",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.onDownload, n = e.onLogin, a = p(!1), i = a[0], l = a[1], c = m(null), g = d(function(e) {
			e != null && e.preventDefault(), l(function(e) {
				return !e;
			});
		}, []), y = d(function(e) {
			if (l(!1), e) {
				var t;
				(t = c.current) == null || t.focus();
			}
		}, []);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			shrink: 0,
			testid: "call-link-join-call-lite-header",
			xstyle: f.marketingHeader,
			children: [
				u.jsx("button", {
					ref: c,
					type: "button",
					"data-testid": "call-link-join-call-lite-header-hamburger",
					onClick: g,
					"aria-expanded": i,
					"aria-controls": "call-link-join-call-lite-hamburger-drawer",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: "x1s85apg xcj0trt x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1ypdohk xipbhat x2lah0s xexx8yu xyri2b x18d9i69 x1c1uobl",
					children: u.jsx(r("WDSIconIcMenu.react"), {
						"aria-hidden": !0,
						height: 24,
						width: 24
					})
				}),
				u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: _,
					testid: "call-link-join-call-lite-header-home",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					xstyle: f.headerLogoLink,
					children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
						height: 30,
						width: 130,
						testid: "call-link-join-call-lite-header-logo"
					})
				}),
				u.jsx("div", {
					className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1s85apg xm4l750 x6s0dn4 xl56j7k x1hl2dhg x47corl",
					children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: _,
						testid: "call-link-join-call-lite-header-home-centered",
						"aria-label": s._(
							/*BTDS*/
							""
						),
						xstyle: f.headerLogoCenteredLink,
						children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
							height: 26,
							width: 110,
							testid: "call-link-join-call-lite-header-logo-centered"
						})
					})
				}),
				u.jsx("span", { className: "x1iyjqo2" }),
				u.jsx("nav", {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: "xf91ah9 x1qvou4u x6s0dn4 x1a02dak x78zum5 xilz9nn x1n2onr6 xl3v32j",
					children: o("WAWebCallLinkJoinCallLiteData").HEADER_NAV_LINKS.map(function(e) {
						return u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
							href: e.href,
							xstyle: f.marketingNavLink,
							children: [e.label(), u.jsx("span", {
								"aria-hidden": !0,
								className: "x10l6tqk x1t1qrwb x1o0tod x36qwtl xh8yej3 xq4q3us x19w6rv x1ufz0iv x2rt36x xqob4bo x11xpdln x15tc24c xcj1dhv"
							})]
						}, e.href);
					})
				}),
				u.jsx("span", { className: "x1iyjqo2" }),
				i ? u.jsx(h, { onClose: y }) : null,
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: f.marketingActions,
					children: [
						u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							icon: u.jsx("span", {
								"data-testid": "login-pill-icon",
								className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
								children: u.jsx(r("WAWebCallLinkLoginChevronIcon.react"), {})
							}),
							onClick: n,
							testId: "call-link-join-call-lite-header-login",
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [
								f.headerCtaCommon,
								f.loginButtonOverride,
								f.headerPillHideNarrow
							]
						}),
						u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							icon: u.jsx("span", {
								"data-testid": "download-pill-icon",
								className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
								children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {})
							}),
							onClick: t,
							testId: "call-link-join-call-lite-header-download",
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [
								f.headerCtaCommon,
								f.headerDownloadButtonOverride,
								f.headerPillHideNarrow
							]
						}),
						u.jsxs("button", {
							type: "button",
							"data-testid": "call-link-join-call-lite-header-download-icon",
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onClick: t,
							className: "x-default-marker x1s85apg xcj0trt x6s0dn4 xl56j7k x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xq4q3us xipbhat x1qehtsu x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x20xl7p x1uiyo9q xqcoddb xgylblj x1ypdohk x2lah0s xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x6ikm8r x10wlt62 x1vjfegm",
							children: [u.jsx("span", {
								className: "x1n2onr6 x1vjfegm",
								children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {
									width: 14,
									height: 14
								})
							}), u.jsx("div", { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1c9tyrk xeusxvb x1pahc9y x1ertn4p x37n5ga x8knxv4 x1ufz0iv x2rt36x x19w6rv x11xpdln x1wsgiic x9lcvmn" })]
						})
					]
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.onClose, n = r("useWAWebFocusOnMount")(), a = d(function(e) {
			var n = e.target;
			n instanceof Element && n.closest("[data-testid=\"call-link-join-call-lite-header-hamburger\"]") != null || t(!1);
		}, [t]), i = o("useWAWebOnOutsideClick").useOnOutsideClickRef(a), l = r("useMergeRefs")(n, i), c = d(function(e) {
			e.key === "Escape" && t(!0);
		}, [t]);
		return o("useWAWebListener").useListener(document, "keydown", c), u.jsx("div", {
			ref: l,
			id: "call-link-join-call-lite-hamburger-drawer",
			"data-testid": "call-link-join-call-lite-hamburger-drawer",
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			className: "x10l6tqk x1o0tod xtijo5x xdsb8wn x1n327nk xlo9req xl7twdi xvg22vi xu7uy1i x1e5xhrn x1t7qo4d x9lt2cq xkfbf7x x78zum5 xdt5ytf x1f0uite",
			children: o("WAWebCallLinkJoinCallLiteData").HEADER_NAV_LINKS.map(function(e) {
				return u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: e.href,
					xstyle: f.marketingNavLink,
					children: e.label()
				}, e.href);
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
