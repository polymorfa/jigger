__d("WAWebRecUnitCarouselSection.react", [
	"fbt",
	"WAWebBizHomeCardCarouselLogger",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebCTWAConstants",
	"WAWebCarousel.react",
	"WAWebL10N",
	"WAWebQuickPromotionDebugCopyLogsButton.react",
	"WAWebQuickPromotionDebugLogger",
	"WAWebRecUnitCardWithViewTracking.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAllQuickPromotionsForSurface",
	"useWAWebLogCarouselViewOnce"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = 360, f = 8;
	function g() {
		var e = o("react-compiler-runtime").c(12), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], d(h, t);
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD }, e[1] = n) : n = e[1];
		var a = o("useWAWebAllQuickPromotionsForSurface").useAllQuickPromotionsForSurface(n), i = p(!1), l = i[0], c = i[1], g = m(-1);
		r("useWAWebLogCarouselViewOnce")(a);
		var y = o("WAWebQuickPromotionDebugLogger").isDebugEnabledForSurface(o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD), C = a.length > 0;
		if (!C && !y) return null;
		var b;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), e[2] = b) : b = e[2];
		var v;
		e[3] !== C ? (v = u.jsx(r("WAWebQuickPromotionDebugCopyLogsButton.react"), {
			surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
			hasItems: C
		}), e[3] = C, e[4] = v) : v = e[4];
		var S;
		e[5] !== C || e[6] !== l || e[7] !== a ? (S = C && u.jsx("div", {
			role: "group",
			className: "x16ovd2e x12xbjc7 xb0esv5 xyo0t3i x6ikm8r x10wlt62",
			onMouseEnter: function() {
				return c(!0);
			},
			onMouseLeave: function() {
				return c(!1);
			},
			children: u.jsx(r("WAWebCarousel.react"), {
				allowPartialCards: !0,
				cardWidth: _,
				spacing: f,
				enableWheelScroll: !0,
				isRTL: r("WAWebL10N").isRTL(),
				onStepForward: function(t) {
					var e = a[t];
					e != null && o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logSwipeNext(e.promotionId, t);
				},
				onStepBackward: function(t) {
					var e = a[t];
					e != null && o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logSwipePrev(e.promotionId, t);
				},
				stepButtonProps: {
					hideButtons: !l,
					offset: 12,
					size: 40
				},
				children: a.map(function(e, t) {
					return u.jsx(r("WAWebRecUnitCardWithViewTracking.react"), {
						cardSeqId: t,
						item: e,
						lastVisibleIndexRef: g
					}, e.promotionId);
				})
			})
		}), e[5] = C, e[6] = l, e[7] = a, e[8] = S) : S = e[8];
		var R;
		return e[9] !== v || e[10] !== S ? (R = u.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			headerText: b,
			children: [v, S]
		}), e[9] = v, e[10] = S, e[11] = R) : R = e[11], R;
	}
	function h() {
		return o("WAWebQuickPromotionDebugLogger").startQPDebugSession(o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD), o("WAWebQuickPromotionDebugLogger").qpLog("session.mount", {
			surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
			variant: "carousel"
		}), y;
	}
	function y() {
		o("WAWebQuickPromotionDebugLogger").qpLog("session.unmount", { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD });
	}
	l.default = g;
}), 226);
