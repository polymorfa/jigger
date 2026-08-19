__d("WAWebRecUnitCard.react", [
	"fbt",
	"WAWebApiParse",
	"WAWebBizHomeCardCarouselLogger",
	"WAWebExecApiCmd",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebQuickPromotionDebugLogger",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = 48, m = 50, p = {
		closeButton: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		contentContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = e.cardSeqId, a = n === void 0 ? 0 : n, i = e.item, l = i.model.promotion.data.primaryAction, d = (t = l == null ? void 0 : l.deepLink) != null ? t : l == null ? void 0 : l.universalLink, m = l == null ? void 0 : l.text, _ = i.dismiss, f = m != null && d != null && d !== "";
		c(function() {
			o("WAWebQuickPromotionDebugLogger").qpLog("render.card.mounted", {
				promotionId: i.promotionId,
				cardSeqId: a,
				hasImage: i.image != null,
				ctaRendered: f,
				dismissShown: _ != null,
				productTeamName: i.productTeamName,
				deepLink: l == null ? void 0 : l.deepLink,
				universalLink: l == null ? void 0 : l.universalLink,
				resolvedActionLink: d
			});
		}, [i.promotionId, a]);
		var g = _ != null ? function() {
			o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logDismissCard(i.promotionId, a), o("WAWebQuickPromotionDebugLogger").qpLog("render.card.dismiss.click", {
				promotionId: i.promotionId,
				cardSeqId: a,
				productTeamName: i.productTeamName
			}), _();
		} : null, h = function() {
			if (o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logPrimaryClick(i.promotionId, a), i.primaryActionClick(), d == null || d === "") {
				o("WAWebQuickPromotionDebugLogger").qpLog("render.card.cta.click.no_link", {
					promotionId: i.promotionId,
					cardSeqId: a
				});
				return;
			}
			var e = d.trim();
			if (e === "") {
				o("WAWebQuickPromotionDebugLogger").qpLog("render.card.cta.click.empty_after_trim", {
					promotionId: i.promotionId,
					cardSeqId: a,
					rawActionLink: d
				});
				return;
			}
			if (e.toLowerCase().startsWith("https://")) o("WAWebQuickPromotionDebugLogger").qpLog("render.card.cta.click.external_link", {
				promotionId: i.promotionId,
				cardSeqId: a,
				href: e
			}), o("WAWebExternalLink.react").openExternalLink(e);
			else {
				o("WAWebQuickPromotionDebugLogger").qpLog("render.card.cta.click.api_cmd", {
					promotionId: i.promotionId,
					cardSeqId: a,
					trimmedLink: e
				});
				var t = o("WAWebApiParse").parseAPICmd(e);
				r("WAWebExecApiCmd")({
					cmdData: t,
					isExternal: !1
				});
			}
		};
		return u.jsx("div", {
			className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x1xrf6ya xde1mab xscbp6u x1iw51ew x9f619 x78zum5 xdt5ytf x1iyjqo2 xkh2ocl",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 12,
				align: "start",
				grow: 1,
				children: [
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						shrink: 0,
						children: u.jsx("div", {
							className: "x2lah0s x1useyqa x10wjd1d xlr9sxt xvvg52n xwd4zgb xq8v1ta x1h3rtpe x6ikm8r x10wlt62 x78zum5 x6s0dn4 xl56j7k",
							children: i.image
						})
					}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						alignSelf: "stretch",
						xstyle: p.contentContainer,
						children: [
							u.jsx(r("WDSText.react"), {
								type: "Body1Emphasized",
								colorName: "contentDefault",
								children: i.title
							}),
							u.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: i.sanitizedText
							}),
							m != null && d != null && d !== "" && u.jsx("div", {
								className: "xr1yuqi x16ovd2e",
								children: u.jsx(r("WDSButton.react"), {
									variant: "filled",
									size: "small",
									label: m,
									onPress: h
								})
							})
						]
					}),
					g != null && u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: p.closeButton,
						children: u.jsx(r("WDSButton.react"), {
							variant: "borderless",
							size: "small",
							Icon: r("WDSIconIcClose.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onPress: g
						})
					})
				]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
