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
		var n = t.bubbleType, a = t.canHaveComments, i = t.displayType, l = t.isOutgoingMsg, s = t.parentIds, d = o("WAWebDisplayType").isWideDisplay(i), p = l && !d, _ = !p, f = null, g = null, h = null;
		return h = u.jsx(m, {
			parentIds: s,
			displayType: i,
			bubbleType: n
		}), a !== !1 && s != null && s.length > 0 && (f = u.jsx(r("WAWebCommentsBubbleContainer.react"), { msgIds: s })), s != null && s.length > 0 && (g = u.jsx(o("WAWebReactionsBubbleContainer.react").ReactionBubbleContainer, {
			msgIds: s,
			isOutgoingMsg: l,
			displayType: i,
			reactionBubbleType: n,
			hasReaction: t.hasReaction,
			onDetailsPaneClosed: t.onDetailsPaneClosed,
			reactionBubbleVisible: t.displayReactionBubble
		})), u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.container, (!o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i) || n !== o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG) && c.positionRelative, _ && c.startAlign, p && c.endAlign, n === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && c.sticker, n === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && d && c.wideSticker, n === o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG && c.image, n === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && _ && c.startAlignMediaViewer, n === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && p && c.endAlignMediaViewer), {
			"data-testid": "addon-bubble-container",
			children: [
				t.insightsChipMsg != null && u.jsx(r("WAWebBroadcastInsightsChip.react"), { msg: t.insightsChipMsg }),
				g,
				f,
				h
			]
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, a = e.bubbleType, i = e.displayType, l = e.parentIds, s = o("WAWebAddOnBubblesContainerConditions").getForwardBubbleTargetMsg(l, i, a);
		if (!s) return null;
		var d = u.jsx(r("WDSIconIcFastForward.react"), {
			directional: !0,
			iconXstyle: c.svgColorRefreshed,
			height: 20
		}), m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				s != null && o("WAWebMessageHandlers").handleOpenForwardFlow({
					msg: s,
					multiSelect: !1
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), p = s != null && s.forwardedNewsletterMessageInfo ? 0 : (t = s == null ? void 0 : s.forwardsCount) != null ? t : 0, _ = p > 0 && o("WAWebNewsletterExtendedGatingUtils").shouldShowNewsletterForwardCounterBubble(o("WAWebFrontendMsgGetters").getChat(s)) ? u.jsx(r("WAWebRollerCounter.react"), {
			counter: p,
			shouldAnimate: !1,
			rollerCounterOptions: {
				showAggregateMax: !0,
				showOneToTwoAnimation: !1
			}
		}) : null;
		return u.jsx(r("WAWebAddOnBubble.react"), { children: u.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: c.button,
			onClick: m,
			children: [d, _]
		}) });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);
