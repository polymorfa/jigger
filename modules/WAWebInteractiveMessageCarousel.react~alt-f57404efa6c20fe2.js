__d("WAWebInteractiveMessageCarousel.react", [
	"invariant",
	"WAWebABProps",
	"WAWebBizVPVTrackableMessageComponent.react",
	"WAWebCarousel.react",
	"WAWebCopyPasteCopyable.react",
	"WAWebFrontendMsgGetters",
	"WAWebGetInteractiveActionsForCarouselCard",
	"WAWebInteractiveBubble.react",
	"WAWebInteractiveHeader",
	"WAWebInteractiveMessageCarouselLogEvents",
	"WAWebL10N",
	"WAWebMessageCropping",
	"WAWebMsgType",
	"WAWebResizeObserver",
	"WAWebShowMessageActionFallbackErrorAction",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebWamEnumMessageBodyTypeEnum",
	"react",
	"stylex",
	"useWAWebConversationPanelCanCompose",
	"useWAWebMeasureTimeOnScreen",
	"useWAWebMsgValues",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useImperativeHandle, f = d.useLayoutEffect, g = d.useMemo, h = d.useRef, y = d.useState, C = 4;
	function b(t) {
		var n, a = t.bizVPVData, i = t.isMsgVisible, l = t.mainMsgWrapperRef, u = t.msg, d = t.msgComponentRef, p = h(null), b = y(0), E = b[0], k = b[1], I = y(null), T = I[0], D = I[1], x = L(), $ = x[0], P = x[1], N = o("WAWebFrontendMsgGetters").getChat(u.unsafe()), M = r("useWAWebConversationPanelCanCompose")(N), w = M[0], A = o("useWAWebMsgValues").useMsgValues(u.id, [o("WAWebFrontendMsgGetters").getCarouselCards]), F = A[0];
		S(p == null || (n = p.current) == null ? void 0 : n.outerDivRef, u);
		var O = g(function() {
			return F == null ? null : F.map(function(e) {
				var t = e.safe();
				return t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || s(0, 73709), {
					card: t,
					actions: v(t, w)
				};
			});
		}, [F, w]);
		f(function() {
			var e, t = p == null || (e = p.current) == null || (e = e.outerDivRef) == null ? void 0 : e.current;
			if (t != null) {
				var n = o("WAWebCopyPasteCopyable.react").findCopyableChildren(t), r = n.reduce(function(e, t) {
					return t.getBoundingClientRect().height > e ? t.getBoundingClientRect().height : e;
				}, Number.MIN_VALUE);
				k(r);
			}
		}, [k, O]);
		var B = m(function(e) {
			var t = getComputedStyle(e);
			D({
				left: parseFloat(t.paddingLeft),
				right: parseFloat(t.paddingRight)
			});
		}, [D]);
		f(function() {
			var e, t = (e = l == null ? void 0 : l.current) != null ? e : null;
			if (t != null) return B(t), o("WAWebResizeObserver").observe(t, function() {
				return B(t);
			});
		}, [
			B,
			l,
			D
		]);
		var W = m(function(e) {
			var t, n = p == null || (t = p.current) == null ? void 0 : t.scrollToCard;
			O == null || n == null || n(e);
		}, [O]), q = g(function() {
			var e = {};
			if (O == null) return e;
			for (var t = 0; t < O.length; t++) {
				var n = O[t].card;
				e[n.id.toString()] = t;
			}
			return e;
		}, [O]), U = m(function(e) {
			var t = q[e.toString()], n = $(t).header;
			return n == null || n.getImgNode == null ? null : n.getImgNode();
		}, [$, q]), V = m(function(e) {
			var t = q[e.toString()];
			return $(t).visibility === !0;
		}, [$, q]);
		if (_(d, function() {
			return {
				scrollToCard: W,
				getImgNodeByMsgKey: U,
				isCardVisible: V
			};
		}), O == null) return null;
		var H = u.id.fromMe === !1;
		return c.jsx("div", babelHelpers.extends({ onDoubleClick: o("WAWebStopEvent").stopPropagation }, {
			0: { className: "x78zum5 xh8yej3 x13a6bvl" },
			1: { className: "x78zum5 xh8yej3 x1nhvcw1" }
		}[!!H << 0], { children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(!H && !r("WAWebL10N").isRTL()), { children: c.jsx(r("WAWebCarousel.react"), {
			cardWidth: o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS.bubbleWidth,
			spacing: C,
			carouselMargins: T,
			enableWheelScroll: !0,
			isRTL: r("WAWebL10N").isRTL(),
			stepButtonProps: {
				offset: 12,
				size: 40
			},
			ref: p,
			children: O.map(function(e, t) {
				var n, l = c.jsx(R, {
					msg: e.card,
					visibilityRef: function(n) {
						return P(t, { visibility: n });
					},
					children: c.jsx(r("WAWebInteractiveBubble.react"), {
						msg: e.card,
						displayAuthor: !1,
						displayFooter: !1,
						header: c.jsx(r("WAWebInteractiveHeader"), {
							msg: e.card,
							isMsgVisible: i,
							headerRef: function(n) {
								return P(t, { header: n });
							}
						}),
						actions: e.actions,
						minTextHeight: E,
						hideMeta: !0
					})
				});
				return c.jsx("div", babelHelpers.extends({}, {
					0: { className: "xfl633f x1g5lz36 x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x17fgdl5 x1n2onr6" },
					2: { className: "xfl633f x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x17fgdl5 x1n2onr6" },
					1: { className: "xfl633f x1g5lz36 x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x1n2onr6 x19v9tvf" },
					3: { className: "xfl633f x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x1n2onr6 x19v9tvf" }
				}[!!H << 1 | !!o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") << 0], {
					ref: function(n) {
						return P(t, { containerEl: n });
					},
					children: a != null && ((n = e.card.id) == null ? void 0 : n.id) != null ? c.jsx(r("WAWebBizVPVTrackableMessageComponent.react"), {
						component: l,
						visibilityData: babelHelpers.extends({}, a, {
							messageId: e.card.id.id,
							messageBodyType: o("WAWebWamEnumMessageBodyTypeEnum").MESSAGE_BODY_TYPE_ENUM.CAROUSEL_CARD,
							mmCarouselCardIndex: t
						})
					}) : l
				}), e.card.id.toString());
			})
		}) })) }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t) {
		var n = r("WAWebGetInteractiveActionsForCarouselCard")(e, t);
		return n.map(function(e) {
			var t;
			return babelHelpers.extends({}, e, { onClick: (t = e.onClick) != null ? t : function() {
				return r("WAWebShowMessageActionFallbackErrorAction")();
			} });
		});
	}
	function S(e, t) {
		var n = m(function(e) {
			return o("WAWebInteractiveMessageCarouselLogEvents").logViewCarousel(o("WAWebStateUtils").unproxy(t.unsafe()), e);
		}, [t]);
		r("useWAWebMeasureTimeOnScreen")(e, n);
	}
	function R(e) {
		var t = e.children, n = e.msg, a = e.visibilityRef, i = h(), l = m(function(e) {
			return o("WAWebInteractiveMessageCarouselLogEvents").logViewCarouselCard(o("WAWebStateUtils").unproxy(n.unsafe()), e);
		}, [n]);
		r("useWAWebMeasureTimeOnScreen")(i, l);
		var s = r("useWAWebOnScreen")(i, function() {
			return a(!1);
		});
		return p(function() {
			a(s);
		}, [s, a]), c.jsx("span", {
			ref: i,
			children: t
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L() {
		var e = h([]), t = m(function(t, n) {
			e.current[t] = babelHelpers.extends({}, e.current[t], n);
		}, []), n = m(function(t) {
			var n;
			return (n = e.current[t]) != null ? n : {};
		}, []);
		return [n, t];
	}
	l.default = b;
}), 98);
