__d("WAWebBizBotLearnMoreContent.react", [
	"fbt",
	"WAWebBizBotConsumerContentVariant",
	"WAWebBox.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebLightningIcon.react",
	"WAWebText.react",
	"WAWebWdsPictoMetaDataDoubleChevronIcon.react",
	"WDSIconIcSyncAlt.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} }, m = {
		iconUpdatedUI: {
			color: "xrfrzu4",
			$$css: !0
		},
		lightningIconWrapper: {
			stroke: "xw3rpt6",
			strokeWidth: "xvlca1e",
			$$css: !0
		},
		lightningIcon: {
			color: "x19co3pv",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionDescription: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function p() {
		var t = o("WAWebBizBotConsumerContentVariant").getBizBotConsumerContentVariant(), n = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.INDIA ? null : c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginVer16,
			children: c.jsx(o("WAWebWdsPictoMetaDataDoubleChevronIcon.react").WdsPictoMetaDataDoubleChevronIcon, { width: 67 })
		}), a = function() {
			var e = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.BRAZIL ? s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) : t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "medium",
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(o("WAWebText.react").WAWebTextTitle, {
				testid: "biz-bot-tos-subheader",
				children: e
			})] });
		}, i = {
			icon: c.jsx(o("WAWebLightningIcon.react").LightningIcon, {
				width: 24,
				height: 24,
				viewBox: {
					x: 0,
					y: -1,
					width: 13,
					height: 24
				},
				xstyle: m.lightningIconWrapper,
				iconXstyle: [m.iconUpdatedUI, m.lightningIcon]
			}),
			title: s._(
				/*BTDS*/
				""
			)
		}, l = t === o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant.EU_UK ? {
			icon: c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI,
				testid: "double-chevron-in-circle"
			}),
			title: s._(
				/*BTDS*/
				""
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
				""
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
				""
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
				""
			)
		} : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(), u = {
			icon: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
				width: 24,
				height: 24,
				iconXstyle: m.iconUpdatedUI
			}),
			title: s._(
				/*BTDS*/
				""
			)
		};
		return c.jsxs(c.Fragment, { children: [
			n,
			c.jsx(r("WAWebBox.react"), {
				flex: !0,
				direction: "vertical",
				rowGap: 8,
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop16, o("WDSMargins.stylex").wdsMargins.marginBottom8],
				children: a()
			}),
			[
				i,
				l,
				u
			].filter(Boolean).map(function(t, n) {
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
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
