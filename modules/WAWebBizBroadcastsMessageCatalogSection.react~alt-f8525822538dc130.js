__d("WAWebBizBroadcastsMessageCatalogSection.react", [
	"fbt",
	"WAWebBBLoggerTypes",
	"WAWebBizBroadcastCatalogPriceText.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebErrorBoundary.react",
	"WAWebFlexBox.react",
	"WAWebStorefrontFilledIcon.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = 56, _ = {
		actionButtons: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			top: "x1ngp85i",
			insetInlineEnd: "xe9xzdg",
			left: null,
			right: null,
			position: "x10l6tqk",
			$$css: !0
		},
		catalogBackgroundHovered: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		catalogBackgroundNotHovered: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		catalogPreview: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			maxWidth: "x1ncir08",
			minWidth: "x1jzhcrs",
			position: "x1n2onr6",
			$$css: !0
		},
		row: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			$$css: !0
		},
		text: {
			minWidth: "xeuugli",
			paddingInlineEnd: "xde1mab",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		thumbnailFallback: {
			backgroundColor: "x1abdmlv",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			flexShrink: "x2lah0s",
			height: "xnnlda6",
			width: "x15yg21f",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.entryPoint, n = e.onPreviewCatalog, a = e.onRemoveMedia, i = e.selectedCatalogData, l = i.catalogData, c = i.fileName, p = l != null ? l : {}, f = p.productImageUrl, g = p.productName, h = g != null ? g : c, y = m(!1), C = y[0], b = y[1], v = m(!1), S = v[0], R = v[1], L = function(t) {
			var e = t.currentTarget, n = t.relatedTarget;
			(!(n instanceof Node) || !(e instanceof Node) || !e.contains(n)) && R(!1);
		}, E = C || S, k = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(t, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_CATALOG_REMOVE_BUTTON, null, null), a();
		}, [t, a]);
		return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-catalog-section",
			onError: function() {
				return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentSectionErrorRender(t);
			},
			children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
				role: "group",
				xstyle: [_.catalogPreview, E ? _.catalogBackgroundHovered : _.catalogBackgroundNotHovered],
				onMouseEnter: function() {
					return b(!0);
				},
				onMouseLeave: function() {
					return b(!1);
				},
				onFocus: function() {
					return R(!0);
				},
				onBlur: L,
				children: [u.jsxs(o("WAWebFlexBox.react").FlexRow, {
					align: "center",
					xstyle: _.row,
					children: [f != null ? u.jsx("img", {
						className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xnnlda6 xl1xv1r x15yg21f",
						src: f,
						alt: s._(
							/*BTDS*/
							""
						),
						"data-testid": "biz-broadcast-creation-catalog-thumbnail"
					}) : u.jsx(o("WAWebFlexBox.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: _.thumbnailFallback,
						children: u.jsx(o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon, { "aria-hidden": !0 })
					}), u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
						justify: "center",
						xstyle: _.text,
						children: [u.jsx(r("WDSText.react"), {
							maxLines: 1,
							colorName: "contentDefault",
							type: "Body2Emphasized",
							testid: "biz-broadcast-creation-catalog-product-name",
							children: h
						}), (l == null ? void 0 : l.productId) == null && (l == null ? void 0 : l.productCount) != null ? u.jsx(r("WDSText.react"), {
							maxLines: 1,
							colorName: "contentDeemphasized",
							type: "Body3",
							testid: "biz-broadcast-creation-catalog-item-count",
							children: s._(
								/*BTDS*/
								"",
								[s._param("count", l.productCount, [0]), s._plural(l.productCount)]
							)
						}) : u.jsx(r("WAWebBizBroadcastCatalogPriceText.react"), {
							catalogData: l,
							maxLines: 1,
							testid: "biz-broadcast-creation-catalog-price"
						})]
					})]
				}), E && u.jsxs(o("WAWebFlexBox.react").FlexRow, {
					xstyle: _.actionButtons,
					children: [u.jsx(r("WDSButton.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						size: "small",
						variant: "filled",
						Icon: r("WDSIconIcEdit.react"),
						onPress: n,
						testid: "biz-broadcast-creation-catalog-preview-button"
					}), u.jsx(r("WDSButton.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						size: "small",
						variant: "filled",
						Icon: r("WDSIconIcClose.react"),
						onPress: k,
						testid: "biz-broadcast-creation-catalog-remove-button"
					})]
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
