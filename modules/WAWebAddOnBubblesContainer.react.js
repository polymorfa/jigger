__d("WAWebAddOnBubblesContainer.react", [
	"WAWebAddOnBubble.react",
	"WAWebAddOnBubbleRenderUtils",
	"WAWebAddOnBubbleType",
	"WAWebAddOnBubblesContainerConditions",
	"WAWebBroadcastInsightsChip.react",
	"WAWebCommentsBubbleContainer.react",
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebMessageHandlers",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebReactionsBubbleContainer.react",
	"WAWebRollerCounter.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcFastForward.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		container: {
			display: "x78zum5",
			bottom: "xbfrwjf",
			zIndex: "x8k05lb",
			width: "xeq5yr9",
			$$css: !0
		},
		positionRelative: {
			position: "x1n2onr6",
			$$css: !0
		},
		startAlign: {
			insetInlineStart: "xrr41r3",
			left: null,
			right: null,
			alignSelf: "xqcrz7y",
			$$css: !0
		},
		endAlign: {
			insetInlineEnd: "x1f889gz",
			left: null,
			right: null,
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		startAlignMediaViewer: {
			position: "x10l6tqk",
			insetInlineStart: "xaoy8p5",
			insetInlineEnd: "xvihmje",
			left: null,
			right: null,
			bottom: "x130t2gz",
			$$css: !0
		},
		endAlignMediaViewer: {
			position: "x10l6tqk",
			insetInlineStart: "x1tvzbhf",
			insetInlineEnd: "xz03a8w",
			left: null,
			right: null,
			bottom: "x130t2gz",
			$$css: !0
		},
		sticker: {
			insetInlineStart: "x1tvzbhf",
			insetInlineEnd: "xz03a8w",
			left: null,
			right: null,
			$$css: !0
		},
		image: {
			bottom: "x1wa3icf",
			$$css: !0
		},
		wideSticker: {
			insetInlineStart: "xrr41r3",
			insetInlineEnd: "xvihmje",
			left: null,
			right: null,
			$$css: !0
		},
		svgColorRefreshed: {
			color: "xhslqc4",
			$$css: !0
		},
		button: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			paddingInlineStart: "x181vq82",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(34), a = t.bubbleType, i = t.canHaveComments, l = t.displayType, s = t.isOutgoingMsg, d = t.parentIds, p, _, f, g;
		if (n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== s || n[4] !== d || n[5] !== t.displayReactionBubble || n[6] !== t.hasReaction || n[7] !== t.onDetailsPaneClosed) {
			var h = o("WAWebDisplayType").isWideDisplay(l), y = s && !h, C = !y;
			p = null, f = null;
			var b;
			if (n[12] !== a || n[13] !== l || n[14] !== d ? (b = u.jsx(m, {
				parentIds: d,
				displayType: l,
				bubbleType: a
			}), n[12] = a, n[13] = l, n[14] = d, n[15] = b) : b = n[15], _ = b, i !== !1 && d != null && d.length > 0) {
				var v;
				n[16] !== d ? (v = u.jsx(r("WAWebCommentsBubbleContainer.react"), { msgIds: d }), n[16] = d, n[17] = v) : v = n[17], p = v;
			}
			if (d != null && d.length > 0) {
				var S;
				n[18] !== a || n[19] !== l || n[20] !== s || n[21] !== d || n[22] !== t.displayReactionBubble || n[23] !== t.hasReaction || n[24] !== t.onDetailsPaneClosed ? (S = u.jsx(o("WAWebReactionsBubbleContainer.react").ReactionBubbleContainer, {
					msgIds: d,
					isOutgoingMsg: s,
					displayType: l,
					reactionBubbleType: a,
					hasReaction: t.hasReaction,
					onDetailsPaneClosed: t.onDetailsPaneClosed,
					reactionBubbleVisible: t.displayReactionBubble
				}), n[18] = a, n[19] = l, n[20] = s, n[21] = d, n[22] = t.displayReactionBubble, n[23] = t.hasReaction, n[24] = t.onDetailsPaneClosed, n[25] = S) : S = n[25], f = S;
			}
			g = (e || (e = r("stylex"))).props(c.container, (!o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(l) || a !== o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG) && c.positionRelative, C && c.startAlign, y && c.endAlign, a === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && c.sticker, a === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && h && c.wideSticker, a === o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG && c.image, a === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && C && c.startAlignMediaViewer, a === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && y && c.endAlignMediaViewer), n[0] = a, n[1] = i, n[2] = l, n[3] = s, n[4] = d, n[5] = t.displayReactionBubble, n[6] = t.hasReaction, n[7] = t.onDetailsPaneClosed, n[8] = p, n[9] = _, n[10] = f, n[11] = g;
		} else p = n[8], _ = n[9], f = n[10], g = n[11];
		var R;
		n[26] !== t.insightsChipMsg ? (R = t.insightsChipMsg != null && u.jsx(r("WAWebBroadcastInsightsChip.react"), { msg: t.insightsChipMsg }), n[26] = t.insightsChipMsg, n[27] = R) : R = n[27];
		var L;
		return n[28] !== p || n[29] !== _ || n[30] !== f || n[31] !== g || n[32] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, g, {
			"data-testid": "addon-bubble-container",
			children: [
				R,
				f,
				p,
				_
			]
		})), n[28] = p, n[29] = _, n[30] = f, n[31] = g, n[32] = R, n[33] = L) : L = n[33], L;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(12), a = e.bubbleType, i = e.displayType, l = e.parentIds, s, d, m, p;
		if (t[0] !== a || t[1] !== i || t[2] !== l) {
			p = Symbol.for("react.early_return_sentinel");
			e: {
				var _, f = o("WAWebAddOnBubblesContainerConditions").getForwardBubbleTargetMsg(l, i, a);
				if (!f) {
					p = null;
					break e;
				}
				var g;
				t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSIconIcFastForward.react"), {
					directional: !0,
					iconXstyle: c.svgColorRefreshed,
					height: 20
				}), t[7] = g) : g = t[7], s = g, d = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						f != null && o("WAWebMessageHandlers").handleOpenForwardFlow({
							msg: f,
							multiSelect: !1
						});
					});
					return function() {
						return e.apply(this, arguments);
					};
				})();
				var h = f != null && f.forwardedNewsletterMessageInfo ? 0 : (_ = f == null ? void 0 : f.forwardsCount) != null ? _ : 0;
				m = h > 0 && o("WAWebNewsletterExtendedGatingUtils").shouldShowNewsletterForwardCounterBubble(o("WAWebFrontendMsgGetters").getChat(f)) ? u.jsx(r("WAWebRollerCounter.react"), {
					counter: h,
					shouldAnimate: !1,
					rollerCounterOptions: {
						showAggregateMax: !0,
						showOneToTwoAnimation: !1
					}
				}) : null;
			}
			t[0] = a, t[1] = i, t[2] = l, t[3] = s, t[4] = d, t[5] = m, t[6] = p;
		} else s = t[3], d = t[4], m = t[5], p = t[6];
		if (p !== Symbol.for("react.early_return_sentinel")) return p;
		var y = m, C;
		return t[8] !== s || t[9] !== y || t[10] !== d ? (C = u.jsx(r("WAWebAddOnBubble.react"), { children: u.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: c.button,
			onClick: d,
			children: [s, y]
		}) }), t[8] = s, t[9] = y, t[10] = d, t[11] = C) : C = t[11], C;
	}
	l.default = d;
}), 98);
