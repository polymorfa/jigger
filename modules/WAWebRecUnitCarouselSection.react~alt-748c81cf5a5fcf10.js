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
	"useWAWebAllQuickPromotionsForSurface",
	"useWAWebLogCarouselViewOnce"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = 360, f = 8;
	function g() {
		d(function() {
			return o("WAWebQuickPromotionDebugLogger").startQPDebugSession(o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD), o("WAWebQuickPromotionDebugLogger").qpLog("session.mount", {
				surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
				variant: "carousel"
			}), function() {
				o("WAWebQuickPromotionDebugLogger").qpLog("session.unmount", { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD });
			};
		}, []);
		var e = o("useWAWebAllQuickPromotionsForSurface").useAllQuickPromotionsForSurface({ surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD }), t = p(!1), n = t[0], a = t[1], i = m(-1);
		r("useWAWebLogCarouselViewOnce")(e);
		var l = o("WAWebQuickPromotionDebugLogger").isDebugEnabledForSurface(o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD), c = e.length > 0;
		return !c && !l ? null : u.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			headerText: s._(
				/*BTDS*/
				""
			),
			children: [u.jsx(r("WAWebQuickPromotionDebugCopyLogsButton.react"), {
				surfaceId: o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD,
				hasItems: c
			}), c && u.jsx("div", {
				role: "group",
				className: "x16ovd2e x12xbjc7 xb0esv5 xyo0t3i x6ikm8r x10wlt62",
				onMouseEnter: function() {
					return a(!0);
				},
				onMouseLeave: function() {
					return a(!1);
				},
				children: u.jsx(r("WAWebCarousel.react"), {
					allowPartialCards: !0,
					cardWidth: _,
					spacing: f,
					enableWheelScroll: !0,
					isRTL: r("WAWebL10N").isRTL(),
					onStepForward: function(n) {
						var t = e[n];
						t != null && o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logSwipeNext(t.promotionId, n);
					},
					onStepBackward: function(n) {
						var t = e[n];
						t != null && o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logSwipePrev(t.promotionId, n);
					},
					stepButtonProps: {
						hideButtons: !n,
						offset: 12,
						size: 40
					},
					children: e.map(function(e, t) {
						return u.jsx(r("WAWebRecUnitCardWithViewTracking.react"), {
							cardSeqId: t,
							item: e,
							lastVisibleIndexRef: i
						}, e.promotionId);
					})
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
