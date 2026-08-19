__d("WAWebBizAdDetailsDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdDetailsContent.react",
	"WAWebBizAdDetailsDrawer_asyncRequest.graphql",
	"WAWebBizAdDetailsDrawer_boostedComponent.graphql",
	"WAWebBizAdDetailsInfo.react",
	"WAWebBizAdDetailsPerformance.react",
	"WAWebBizAdPreviewDrawer.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebBizSectionDivider.react",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = {
		drawerContainer: {
			height: "x5yr21d",
			$$css: !0
		},
		rightDrawerHeader: {
			flexShrink: "x2lah0s",
			height: "x1peatla",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		scrollableContent: {
			flex: "x98rzlu",
			minHeight: "x2lwn1j",
			overflowY: "x1odjw0f",
			paddingBottom: "x1ci70gm",
			$$css: !0
		},
		sectionDivider: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			height: "xsdox4t",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	}, h = e !== void 0 ? e : e = n("WAWebBizAdDetailsDrawer_boostedComponent.graphql"), y = u !== void 0 ? u : u = n("WAWebBizAdDetailsDrawer_asyncRequest.graphql");
	function C(e) {
		var t, n, a = e.item, i = e.onClose, l = o("CometRelay").useFragment(h, a.boostedComponentRef), u = o("CometRelay").useFragment(y, a.asyncRequestRef), c = l != null ? l : u, m = (t = c == null || (n = c.spec) == null ? void 0 : n.boosting_status) != null ? t : a.boostingStatus, C = babelHelpers.extends({}, a, { boostingStatus: m }), b = f(!1), v = b[0], S = b[1], R = r("useWAWebNativeAdsFlowIDContext")(), L = _(!1);
		p(function() {
			L.current || (L.current = !0, o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_SEE_DETAILS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, R.manageAdsFlowID, a.boostId));
		}, [R.manageAdsFlowID, a.boostId]);
		var E = function() {
			S(!0);
		}, k = function() {
			S(!1);
		};
		return v ? d.jsx(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: g.drawerContainer,
			children: d.jsx(r("WAWebBizAdPreviewDrawer.react"), {
				item: C,
				onClose: k
			})
		}) : d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: g.drawerContainer,
			children: [d.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: g.rightDrawerHeader,
				children: [d.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcClose.react"),
					onPress: i,
					variant: "borderless"
				}), d.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: g.scrollableContent,
				children: [
					d.jsx("div", {
						className: "x2lah0s",
						children: d.jsx(r("WAWebBizAdDetailsContent.react"), {
							item: C,
							onDelete: i,
							onViewPreview: E
						})
					}),
					d.jsx(r("WAWebBizSectionDivider.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						xstyle: g.sectionDivider
					}),
					d.jsx("div", {
						className: "x2lah0s",
						children: d.jsx(r("WAWebBizAdDetailsPerformance.react"), { item: C })
					}),
					d.jsx(r("WAWebBizSectionDivider.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						xstyle: g.sectionDivider
					}),
					d.jsx("div", {
						className: "x2lah0s",
						children: d.jsx(r("WAWebBizAdDetailsInfo.react"), { item: C })
					})
				]
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
