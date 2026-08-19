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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(36), n = e.entryPoint, a = e.onPreviewCatalog, i = e.onRemoveMedia, l = e.selectedCatalogData, c = l.catalogData, d = l.fileName, p;
		t[0] !== c ? (p = c != null ? c : {}, t[0] = c, t[1] = p) : p = t[1];
		var f = p, g = f.productImageUrl, h = f.productName, y = h != null ? h : d, C = m(!1), b = C[0], v = C[1], S = m(!1), R = S[0], L = S[1], E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			var e = t.currentTarget, n = t.relatedTarget;
			(!(n instanceof Node) || !(e instanceof Node) || !e.contains(n)) && L(!1);
		}, t[2] = E) : E = t[2];
		var k = E, I = b || R, T;
		t[3] !== n || t[4] !== i ? (T = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(n, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_CATALOG_REMOVE_BUTTON, null, null), i();
		}, t[3] = n, t[4] = i, t[5] = T) : T = t[5];
		var D = T, x;
		t[6] !== n ? (x = function() {
			return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentSectionErrorRender(n);
		}, t[6] = n, t[7] = x) : x = t[7];
		var $ = I ? _.catalogBackgroundHovered : _.catalogBackgroundNotHovered, P;
		t[8] !== $ ? (P = [_.catalogPreview, $], t[8] = $, t[9] = P) : P = t[9];
		var N, M, w;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			return v(!0);
		}, M = function() {
			return v(!1);
		}, w = function() {
			return L(!0);
		}, t[10] = N, t[11] = M, t[12] = w) : (N = t[10], M = t[11], w = t[12]);
		var A;
		t[13] !== g ? (A = g != null ? u.jsx("img", {
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xnnlda6 xl1xv1r x15yg21f",
			src: g,
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
		}), t[13] = g, t[14] = A) : A = t[14];
		var F;
		t[15] !== y ? (F = u.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDefault",
			type: "Body2Emphasized",
			testid: "biz-broadcast-creation-catalog-product-name",
			children: y
		}), t[15] = y, t[16] = F) : F = t[16];
		var O;
		t[17] !== c ? (O = (c == null ? void 0 : c.productId) == null && (c == null ? void 0 : c.productCount) != null ? u.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDeemphasized",
			type: "Body3",
			testid: "biz-broadcast-creation-catalog-item-count",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", c.productCount, [0]), s._plural(c.productCount)]
			)
		}) : u.jsx(r("WAWebBizBroadcastCatalogPriceText.react"), {
			catalogData: c,
			maxLines: 1,
			testid: "biz-broadcast-creation-catalog-price"
		}), t[17] = c, t[18] = O) : O = t[18];
		var B;
		t[19] !== F || t[20] !== O ? (B = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			justify: "center",
			xstyle: _.text,
			children: [F, O]
		}), t[19] = F, t[20] = O, t[21] = B) : B = t[21];
		var W;
		t[22] !== A || t[23] !== B ? (W = u.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			xstyle: _.row,
			children: [A, B]
		}), t[22] = A, t[23] = B, t[24] = W) : W = t[24];
		var q;
		t[25] !== D || t[26] !== I || t[27] !== a ? (q = I && u.jsxs(o("WAWebFlexBox.react").FlexRow, {
			xstyle: _.actionButtons,
			children: [u.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcEdit.react"),
				onPress: a,
				testid: "biz-broadcast-creation-catalog-preview-button"
			}), u.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcClose.react"),
				onPress: D,
				testid: "biz-broadcast-creation-catalog-remove-button"
			})]
		}), t[25] = D, t[26] = I, t[27] = a, t[28] = q) : q = t[28];
		var U;
		t[29] !== W || t[30] !== q || t[31] !== P ? (U = u.jsxs(o("WAWebFlexBox.react").FlexRow, {
			role: "group",
			xstyle: P,
			onMouseEnter: N,
			onMouseLeave: M,
			onFocus: w,
			onBlur: k,
			children: [W, q]
		}), t[29] = W, t[30] = q, t[31] = P, t[32] = U) : U = t[32];
		var V;
		return t[33] !== U || t[34] !== x ? (V = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-catalog-section",
			onError: x,
			children: U
		}), t[33] = U, t[34] = x, t[35] = V) : V = t[35], V;
	}
	l.default = f;
}), 226);
