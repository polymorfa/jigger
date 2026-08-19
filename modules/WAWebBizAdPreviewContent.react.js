__d("WAWebBizAdPreviewContent.react", [
	"fbt",
	"WAWebBizAdCreationFBPreview.react",
	"WAWebBizAdCreationIGPreview.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizAdPreviewLoggingUtils",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WAWebTabs.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = {
		header: {
			alignItems: "x6s0dn4",
			columnGap: "xs2akgl",
			flexShrink: "x2lah0s",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			rowGap: "x1f0uite",
			$$css: !0
		},
		tabs: {
			backgroundColor: "x1280gxy",
			flexShrink: "x2lah0s",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, h = {
		facebook: "facebook",
		instagram: "instagram"
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(46), n = e.adAccountID, a = e.loggerContext, i = e.onClose, l = e.previewData, c = e.xstyle, d = f(h.instagram), y = d[0], C = d[1], b = m(r("WAWebBizAdCreationLoggerContext")), v = a != null ? a : b, S = _(null), R, L;
		t[0] !== n || t[1] !== v || t[2] !== l.medias ? (R = function() {
			if (n != null && v != null) {
				var e, t, a = (e = (t = l.medias) == null ? void 0 : t.length) != null ? e : 0, i = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(l.medias), s = S.current, u = s == null, c = u || (s == null ? void 0 : s.count) !== a || (s == null ? void 0 : s.type) !== i;
				c && (S.current = {
					count: a,
					type: i
				}, r("WAWebBizAdLogger").logCritical({
					adAccountID: n,
					event: "ad_preview_modal_impression",
					extra: {
						initial_load: u,
						media_count: a,
						media_type: i
					},
					loggerContext: v
				}));
			}
		}, L = [
			n,
			v,
			l.medias
		], t[0] = n, t[1] = v, t[2] = l.medias, t[3] = R, t[4] = L) : (R = t[3], L = t[4]), p(R, L);
		var E;
		t[5] !== n || t[6] !== v || t[7] !== i ? (E = function() {
			n != null && v != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				event: "ad_preview_modal_close_click",
				loggerContext: v
			}), i();
		}, t[5] = n, t[6] = v, t[7] = i, t[8] = E) : E = t[8];
		var k = E, I;
		t[9] !== n || t[10] !== v || t[11] !== l.medias || t[12] !== y ? (I = function(t) {
			if (n != null && v != null) {
				var e, a, i = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(l.medias);
				r("WAWebBizAdLogger").log({
					adAccountID: n,
					event: "previews_tab_click",
					extra: {
						after: t,
						before: y,
						media_count: (e = (a = l.medias) == null ? void 0 : a.length) != null ? e : 0,
						media_type: i
					},
					loggerContext: v
				});
			}
			C(t);
		}, t[9] = n, t[10] = v, t[11] = l.medias, t[12] = y, t[13] = I) : I = t[13];
		var T = I, D;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (D = {
			id: h.instagram,
			title: s._(
				/*BTDS*/
				""
			)
		}, t[14] = D) : D = t[14];
		var x;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (x = [D, {
			id: h.facebook,
			title: s._(
				/*BTDS*/
				""
			)
		}], t[15] = x) : x = t[15];
		var $;
		t[16] !== T || t[17] !== y ? ($ = u.jsx(r("WAWebTabs.react"), {
			onSelect: T,
			selectedId: y,
			tabConfigs: x,
			testIdPrefix: "biz-ad-creation-preview-tab",
			xstyle: g.tabs
		}), t[16] = T, t[17] = y, t[18] = $) : $ = t[18];
		var P = $, N;
		t[19] !== c ? (N = [g.root, c], t[19] = c, t[20] = N) : N = t[20];
		var M;
		t[21] !== k ? (M = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcArrowBack.react"),
			onPress: k,
			size: "medium",
			variant: "borderless"
		}), t[21] = k, t[22] = M) : M = t[22];
		var w;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[23] = w) : w = t[23];
		var A;
		t[24] !== M ? (A = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.header,
			children: [M, w]
		}), t[24] = M, t[25] = A) : A = t[25];
		var F, O, B;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x98rzlu x2lwn1j x1odjw0f" }, O = { className: "xb0esv5 xyo0t3i" }, B = { className: "x6s0dn4 x78zum5 xdt5ytf xl56j7k x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, t[26] = F, t[27] = O, t[28] = B) : (F = t[26], O = t[27], B = t[28]);
		var W;
		t[29] !== l || t[30] !== y ? (W = u.jsx("div", babelHelpers.extends({}, B, { children: y === h.instagram ? u.jsx("div", {
			"data-testid": "biz_native_ads_see_all_ig_preview",
			children: u.jsx(r("WAWebBizAdCreationIGPreview.react"), babelHelpers.extends({}, l))
		}) : u.jsx("div", {
			"data-testid": "biz_native_ads_see_all_fb_preview",
			children: u.jsx(r("WAWebBizAdCreationFBPreview.react"), babelHelpers.extends({}, l))
		}) })), t[29] = l, t[30] = y, t[31] = W) : W = t[31];
		var q, U;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), U = { className: "x16ovd2e x12xbjc7 x2b8uid" }, t[32] = q, t[33] = U) : (q = t[32], U = t[33]);
		var V;
		t[34] !== y ? (V = y === h.instagram ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[34] = y, t[35] = V) : V = t[35];
		var H;
		t[36] !== V ? (H = u.jsx("div", babelHelpers.extends({}, U, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: V
		}) })), t[36] = V, t[37] = H) : H = t[37];
		var G;
		t[38] !== W || t[39] !== H ? (G = u.jsx("div", babelHelpers.extends({}, F, { children: u.jsxs("div", babelHelpers.extends({}, O, { children: [
			W,
			q,
			H
		] })) })), t[38] = W, t[39] = H, t[40] = G) : G = t[40];
		var z;
		return t[41] !== P || t[42] !== A || t[43] !== G || t[44] !== N ? (z = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_preview_modal_content",
			xstyle: N,
			children: [
				A,
				P,
				G
			]
		}), t[41] = P, t[42] = A, t[43] = G, t[44] = N, t[45] = z) : z = t[45], z;
	}
	l.default = y;
}), 226);
