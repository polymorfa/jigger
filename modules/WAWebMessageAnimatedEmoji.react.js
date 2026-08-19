__d("WAWebMessageAnimatedEmoji.react", [
	"WAWebLottieWrapper.react",
	"WAWebMessageStickerLikeBubbleContainer.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		marginBottom14: {
			marginBottom: "x1u7kmwd",
			$$css: !0
		},
		marginInlineStart15: {
			marginInlineStart: "xx6jrq6",
			$$css: !0
		},
		marginInlineEnd18: {
			marginInlineEnd: "x14iifvp",
			$$css: !0
		}
	}, c = {
		bubble: {
			zIndex: "x157c1n",
			$$css: !0
		},
		placeholderContainer: {
			position: "x10l6tqk",
			width: "x193ckjc",
			height: "x1p6ewto",
			$$css: !0
		}
	}, d = {
		svgContainer: {
			width: "x115h58n",
			height: "xa9868e",
			pointerEvents: "x47corl",
			position: "x10l6tqk",
			zIndex: "xupqr0c",
			$$css: !0
		},
		wrapper: {
			position: "x1n2onr6",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		lottieAnimatedEmojiContainer: {
			width: "x193ckjc",
			height: "x1p6ewto",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.asset, n = e.msg, a = s.jsx(r("WAWebLottieWrapper.react"), {
			data: t,
			lottieWrapperXStyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
				u.marginBottom14,
				u.marginInlineStart15,
				u.marginInlineEnd18,
				d.lottieAnimatedEmojiContainer
			],
			lottieSVGContainerXStyle: d.svgContainer,
			lottieSVGContainerWrapperXStyle: d.wrapper,
			placeholderContainerXStyle: c.placeholderContainer,
			maxLoopCount: 1
		});
		return s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
			displayAuthor: e.displayAuthor,
			msg: n,
			quotedMsg: e.quotedMsg,
			position: e.position,
			displayType: e.displayType,
			onDetailsPaneClosed: e.onDetailsPaneClosed,
			msgContent: a,
			ref: e.stickerLikeBubbleContainerRef,
			bubbleStyle: c.bubble
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = m;
	l.default = p;
}), 98);
