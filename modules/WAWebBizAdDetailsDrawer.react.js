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
	"react-compiler-runtime",
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
		var t, n, a = o("react-compiler-runtime").c(35), i = e.item, l = e.onClose, u = o("CometRelay").useFragment(h, i.boostedComponentRef), c = o("CometRelay").useFragment(y, i.asyncRequestRef), m = u != null ? u : c, C = (t = m == null || (n = m.spec) == null ? void 0 : n.boosting_status) != null ? t : i.boostingStatus, b;
		a[0] !== i || a[1] !== C ? (b = babelHelpers.extends({}, i, { boostingStatus: C }), a[0] = i, a[1] = C, a[2] = b) : b = a[2];
		var v = b, S = f(!1), R = S[0], L = S[1], E = r("useWAWebNativeAdsFlowIDContext")(), k = _(!1), I, T;
		a[3] !== E.manageAdsFlowID || a[4] !== i.boostId ? (I = function() {
			k.current || (k.current = !0, o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_SEE_DETAILS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, E.manageAdsFlowID, i.boostId));
		}, T = [E.manageAdsFlowID, i.boostId], a[3] = E.manageAdsFlowID, a[4] = i.boostId, a[5] = I, a[6] = T) : (I = a[5], T = a[6]), p(I, T);
		var D;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			L(!0);
		}, a[7] = D) : D = a[7];
		var x = D, $;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			L(!1);
		}, a[8] = $) : $ = a[8];
		var P = $;
		if (R) {
			var N;
			return a[9] !== v ? (N = d.jsx(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: g.drawerContainer,
				children: d.jsx(r("WAWebBizAdPreviewDrawer.react"), {
					item: v,
					onClose: P
				})
			}), a[9] = v, a[10] = N) : N = a[10], N;
		}
		var M;
		a[11] !== l ? (M = d.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: l,
			variant: "borderless"
		}), a[11] = l, a[12] = M) : M = a[12];
		var w;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (w = d.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[13] = w) : w = a[13];
		var A;
		a[14] !== M ? (A = d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: g.rightDrawerHeader,
			children: [M, w]
		}), a[14] = M, a[15] = A) : A = a[15];
		var F;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x2lah0s" }, a[16] = F) : F = a[16];
		var O;
		a[17] !== v || a[18] !== l ? (O = d.jsx("div", babelHelpers.extends({}, F, { children: d.jsx(r("WAWebBizAdDetailsContent.react"), {
			item: v,
			onDelete: l,
			onViewPreview: x
		}) })), a[17] = v, a[18] = l, a[19] = O) : O = a[19];
		var B, W;
		a[20] === Symbol.for("react.memo_cache_sentinel") ? (B = d.jsx(r("WAWebBizSectionDivider.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			xstyle: g.sectionDivider
		}), W = { className: "x2lah0s" }, a[20] = B, a[21] = W) : (B = a[20], W = a[21]);
		var q;
		a[22] !== v ? (q = d.jsx("div", babelHelpers.extends({}, W, { children: d.jsx(r("WAWebBizAdDetailsPerformance.react"), { item: v }) })), a[22] = v, a[23] = q) : q = a[23];
		var U, V;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (U = d.jsx(r("WAWebBizSectionDivider.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			xstyle: g.sectionDivider
		}), V = { className: "x2lah0s" }, a[24] = U, a[25] = V) : (U = a[24], V = a[25]);
		var H;
		a[26] !== v ? (H = d.jsx("div", babelHelpers.extends({}, V, { children: d.jsx(r("WAWebBizAdDetailsInfo.react"), { item: v }) })), a[26] = v, a[27] = H) : H = a[27];
		var G;
		a[28] !== O || a[29] !== q || a[30] !== H ? (G = d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: g.scrollableContent,
			children: [
				O,
				B,
				q,
				U,
				H
			]
		}), a[28] = O, a[29] = q, a[30] = H, a[31] = G) : G = a[31];
		var z;
		return a[32] !== G || a[33] !== A ? (z = d.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: g.drawerContainer,
			children: [A, G]
		}), a[32] = G, a[33] = A, a[34] = z) : z = a[34], z;
	}
	l.default = C;
}), 226);
