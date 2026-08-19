__d("WAWebCallLinkJoinCallLiteFooter.react", [
	"fbt",
	"WAWebCallLinkDownloadArrowIcon.react",
	"WAWebCallLinkJoinCallLiteData",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebCallLinkSocialLinks.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = "https://www.whatsapp.com/", _ = "https://www.whatsapp.com/legal/", f = {
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
		},
		footerBranding: {
			rowGap: "x1na6gtj",
			alignItems: "x1cy8zhl",
			gridColumnStart: "x8a1x49 xhqn8mo",
			gridColumnEnd: "x1d1dmfs x1pmoy5h",
			$$css: !0
		},
		footerLogoLink: {
			textDecoration: "x1hl2dhg",
			$$css: !0
		},
		footerDownloadOverride: {
			marginTop: "xb8qb8r",
			display: "x3nfvp2 xilz9nn",
			$$css: !0
		},
		footerColumn: {
			width: "xq1dxzn",
			rowGap: "xi32cqo",
			alignItems: "x1cy8zhl",
			$$css: !0
		},
		footerColumnLinks: {
			rowGap: "xgpatz3",
			alignItems: "x1cy8zhl",
			$$css: !0
		},
		footerColumnLink: {
			fontSize: "x1c3i2sq",
			fontWeight: "xo1l8bm",
			lineHeight: "x37zpob",
			letterSpacing: "x1jxy7q1",
			color: "x2iuggo",
			textDecoration: "x1hl2dhg xt0b8zv",
			$$css: !0
		},
		footerCopyrightRow: {
			alignSelf: "xkh2ocl",
			marginTop: "x8g2yf8",
			paddingTop: "x1p5oq8j xzywqkr",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			borderTopColor: "x11fyeb9",
			columnGap: "xs2akgl",
			rowGap: "x1qvou4u x1z0mvju",
			flexWrap: "xozqiw3 x1f2ii9k",
			flexDirection: "x1q0g3np xgx7vo6",
			position: "x1n2onr6",
			$$css: !0
		},
		footerCopyLink: {
			fontSize: "x1nxh6w3",
			fontWeight: "xo1l8bm",
			color: "x2iuggo",
			opacity: "x18km98s",
			textDecoration: "x1hl2dhg xt0b8zv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		footerLocaleChevron: {
			position: "x10l6tqk",
			insetInlineEnd: "xdg88n9",
			left: null,
			right: null,
			top: "xwa60dl",
			transform: "x1cb1t30",
			pointerEvents: "x47corl",
			color: "x144vdff",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.locales, n = e.onDownload, a = m(function() {
			var e;
			return typeof window == "undefined" ? "en" : (e = new URLSearchParams(window.location.search).get("lang")) != null ? e : "en";
		}, []), i = d(function(e) {
			var t = e.currentTarget.value, n = new URL(window.location.href);
			n.searchParams.set("lang", t), window.location.href = n.toString();
		}, []);
		return u.jsxs("footer", {
			"data-testid": "call-link-join-call-lite-footer",
			className: "xkh2ocl x17teg8n xzywqkr xo0ha1f x14vchrl xgu3ndv x12ie6ac x1558ewf x1y773p9 x1v9lz50 x1cymdht x2iuggo x9f619",
			children: [
				u.jsxs("div", {
					"data-testid": "call-link-join-call-lite-footer-narrow-top",
					className: "x1s85apg xm4l750 xdt5ytf x6s0dn4 xi32cqo x13ihpsm",
					children: [u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
						icon: u.jsx("span", {
							className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
							children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {})
						}),
						onClick: n,
						testId: "call-link-join-call-lite-footer-download-button-narrow",
						theme: "dark-surface",
						text: s._(
							/*BTDS*/
							""
						),
						xstyle: [f.headerCtaCommon, f.headerDownloadButtonOverride]
					}), u.jsxs("div", {
						"data-testid": "call-link-join-call-lite-footer-social-narrow",
						className: "x1s85apg xm4l750 x6s0dn4 xl56j7k xkh2ocl x1qgv0r9 x1miatn0 x1gan7if x1n2onr6",
						children: [
							u.jsx("div", { className: "x1s85apg xog793 x10l6tqk x1o0tod x1x124l8 xmbrsc3 xtijo5x xju23sy x6vwr96 xjm9jq1 x1k1o04r x13vifvy" }),
							u.jsx("div", { className: "x1s85apg xog793 x10l6tqk x1o0tod x1x124l8 xmbrsc3 xtijo5x xju23sy x6vwr96 xjm9jq1 x1k1o04r x1ey2m1c" }),
							u.jsx(r("WAWebCallLinkSocialLinks.react"), {})
						]
					})]
				}),
				u.jsxs("nav", {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: "xrvj5dj xe80zcm xe824el x1qgv0r9 xi32cqo xh8yej3",
					children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.footerBranding,
						children: [u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: p,
							testid: "call-link-join-call-lite-footer-home",
							"aria-label": s._(
								/*BTDS*/
								""
							),
							xstyle: f.footerLogoLink,
							children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
								variant: "white",
								height: 29,
								width: 125,
								testid: "call-link-join-call-lite-footer-logo"
							})
						}), u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
							icon: u.jsx("span", {
								className: "x3nfvp2 x6s0dn4 xl56j7k x1kky2od xlup9mm x1ni14s7 x1hb08if",
								children: u.jsx(r("WAWebCallLinkDownloadArrowIcon.react"), {})
							}),
							onClick: n,
							testId: "call-link-join-call-lite-footer-download",
							theme: "dark-surface",
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [
								f.headerCtaCommon,
								f.headerDownloadButtonOverride,
								f.footerDownloadOverride
							]
						})]
					}), o("WAWebCallLinkJoinCallLiteData").FOOTER_COLUMNS.map(function(e, t) {
						return u.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: f.footerColumn,
							children: [u.jsx("h2", {
								className: "xdj266r x14z9mp xat24cr x1lziwak x1pg5gke xo1l8bm xwn7fz2 xqhqf4p x1us6l5c x2iuggo",
								children: e.heading()
							}), u.jsx(o("WAWebFlex.react").FlexColumn, {
								xstyle: f.footerColumnLinks,
								children: e.links.map(function(e) {
									return u.jsx(o("WAWebExternalLink.react").ExternalLink, {
										href: e.href,
										xstyle: f.footerColumnLink,
										children: e.label()
									}, e.href);
								})
							})]
						}, t);
					})]
				}),
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: f.footerCopyrightRow,
					children: [
						u.jsx("div", { className: "x1s85apg xog793 x10l6tqk x1o0tod x1x124l8 xmbrsc3 xtijo5x xju23sy x6vwr96 xjm9jq1 x1k1o04r x13vifvy" }),
						u.jsx("span", {
							className: "x1nxh6w3 x2iuggo x18km98s",
							children: s._(
								/*BTDS*/
								"",
								[s._param("year", new Date().getFullYear())]
							)
						}),
						u.jsx("span", { className: "x1iyjqo2" }),
						u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: _,
							testid: "call-link-join-call-lite-footer-terms",
							xstyle: f.footerCopyLink,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx("span", { className: "x1iyjqo2" }),
						u.jsx("div", {
							"data-testid": "call-link-join-call-lite-footer-social",
							className: "x78zum5 xilz9nn x6s0dn4 x1qgv0r9",
							children: u.jsx(r("WAWebCallLinkSocialLinks.react"), {})
						}),
						u.jsx("span", { className: "x1iyjqo2" }),
						u.jsxs("div", {
							"data-testid": "call-link-join-call-lite-footer-locale-wrapper",
							className: "x1n2onr6 x3nfvp2 x6s0dn4 x2lah0s",
							children: [u.jsx("select", {
								"data-testid": "call-link-join-call-lite-footer-locale",
								defaultValue: a,
								onChange: i,
								"aria-label": s._(
									/*BTDS*/
									""
								),
								className: "xjb2p0i x1jchvi3 xk50ysn x132q4wb xfq947u x144vdff xjyslct xgs7gye x1apjxte x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf xekzhlg x16p9vl9 xo8mher x1e48zop xt8t1vi x1xc408v x129tdwq x15urzxu xz9dl7a xsag5q8 x13jy36j x8ozs88 x12rczxh x1ypdohk xuxw1ft x1t137rt x9v5kkp x784prv xixqht9 x12ijfkc",
								children: t.map(function(e) {
									return u.jsx("option", {
										value: e.value,
										lang: e.value,
										children: e.label
									}, e.value);
								})
							}), u.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {
								"aria-hidden": !0,
								height: 16,
								width: 16,
								iconXstyle: f.footerLocaleChevron
							})]
						})
					]
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
