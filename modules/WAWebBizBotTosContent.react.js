__d("WAWebBizBotTosContent.react", [
	"fbt",
	"WAWebBizBotConsumerContentVariant",
	"WAWebBox.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebWdsPictoMetaDataDoubleChevronIcon.react",
	"WDSIconIcSyncAlt.react",
	"WDSIconWdsIcAi.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} }, m = {
		centerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		iconUpdatedUI: {
			color: "xrfrzu4",
			$$css: !0
		},
		sectionDescription: {
			color: "x14ug900",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function p() {
		var e = o("react-compiler-runtime").c(8), t = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant(), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? null : c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginVer16,
			children: c.jsx(o("WAWebWdsPictoMetaDataDoubleChevronIcon.react").WdsPictoMetaDataDoubleChevronIcon, { width: 67 })
		}), e[0] = n) : n = e[0];
		var a = n, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(o("WAWebText.react").WAWebTextLarge, {
			weight: "medium",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = i) : i = e[1];
		var l = i, u;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (u = {
			icon: c.jsx(r("WDSIconWdsIcAi.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI
			}),
			title: s._(
				/*BTDS*/
				""
			)
		}, e[2] = u) : u = e[2];
		var d = u, p;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (p = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? {
			icon: c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI,
				testid: "double-chevron-in-circle"
			}),
			title: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		} : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.ROW ? {
			icon: c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI,
				testid: "double-chevron-in-circle"
			}),
			title: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})), s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		} : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? {
			icon: c.jsx(r("WDSIconIcSyncAlt.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI,
				testid: "business-data-sharing"
			}),
			title: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})), s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		} : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? {
			icon: c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI,
				testid: "double-chevron-in-circle"
			}),
			title: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})), s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		} : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(), e[3] = p) : p = e[3];
		var f = p, g;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (g = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._(
			/*BTDS*/
			"",
			[
				s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotTermsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m7", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsappBrazilBizBotRightsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m11", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsappBrazilBizBotObjectUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m14", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsappPrivacyPolicyBrazilUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		) : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._(
			/*BTDS*/
			"",
			[
				s._param("business_app_privacy_policy_link", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsappBusinessAppPrivacyPolicyUrl(),
					children: "Privacy Policy"
				})),
				s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotTermsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getBotTermsUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			})), s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), e[4] = g) : g = e[4];
		var h = g, y, C;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(r("WAWebBox.react"), {
			flex: !0,
			direction: "vertical",
			rowGap: 8,
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop16, o("WDSMargins.stylex").wdsMargins.marginBottom8],
			children: l
		}), C = [d, f].filter(Boolean).map(_), e[5] = y, e[6] = C) : (y = e[5], C = e[6]);
		var b;
		return e[7] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginVerAuto,
			children: [
				a,
				y,
				C,
				c.jsx(r("WAWebBox.react"), {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginVer8,
					children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: m.centerText,
						children: h
					})
				})
			]
		}), e[7] = b) : b = e[7], b;
	}
	function _(t, n) {
		var a = t.icon, i = t.title;
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 24,
			className: (e || (e = r("stylex")))(d.marginBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8),
			align: "center",
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				xstyle: m.sectionIcon,
				children: a
			}), c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: m.sectionDescription,
				children: i
			})]
		}, n);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
