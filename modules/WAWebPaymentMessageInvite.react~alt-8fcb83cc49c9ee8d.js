__d("WAWebPaymentMessageInvite.react", [
	"WAWebEmojiText.react",
	"WAWebFormatPaymentMsg",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMediaBubble.react",
	"WAWebMessageSpacerText.react",
	"WAWebMsgGetters",
	"WAWebPaymentImageAssets.stylex",
	"WAWebProtobufsE2E.pb",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingTop7: {
			paddingTop: "xm7lytj",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInlineEnd6: {
			paddingInlineEnd: "x1icxu4v",
			$$css: !0
		}
	}, d = {
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		inviteBackground: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			height: "xwzfr38",
			backgroundPosition: "xztyhrg",
			backgroundSize: "x18d0r48",
			$$css: !0
		},
		inviteImage: {
			height: "x10wjd1d",
			backgroundRepeat: "xiy17q3",
			backgroundPosition: "x158usst",
			backgroundSize: "x1tbiz1a",
			$$css: !0
		},
		body: {
			display: "x78zum5",
			textDecoration: "x1hl2dhg",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = t.displayAuthor, i = t.displayType, l = t.msg, s = t.serviceType, m = o("useWAWebMsgValues").useMsgValues(l.id, [
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebFrontendMsgGetters").getDir,
			(n = o("WAWebMsgGetters")).getIsSentByMe,
			n.getPaymentInviteServiceType,
			n.getIsGroupMsg,
			n.getIsPSA,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getPaymentNoteMsg,
			n.getId,
			n.getTo,
			n.getFrom
		]), p = m[0], _ = m[1], f = m[2], g = m[3], h = m[4], y = m[5], C = m[6], b = m[7], v = m[8], S = m[9], R = m[10], L = g === o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType.UPI ? o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.inviteUpi : null, E = u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom6, c.paddingInlineStart6), { children: u.jsx(r("WAWebMessageSpacerText.react"), {
			msg: l.unsafe(),
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(v),
				selectable: !0,
				dirMismatch: p !== r("WAWebL10N").isRTL(),
				direction: _
			})
		}) }));
		return u.jsx(r("WAWebMediaBubble.react"), {
			displayAuthor: a,
			displayType: i,
			hasCaption: !!E,
			msg: l,
			children: u.jsxs("div", { children: [u.jsx("div", babelHelpers.extends({}, e.props(d.inviteBackground, o("WAWebPaymentImageAssets.stylex").paymentImageAssetStyles.background), { children: u.jsx("div", babelHelpers.extends({}, e.props(d.inviteImage, L))) })), u.jsx("div", babelHelpers.extends({}, e.props(d.body, f ? d.bubbleOut : d.bubbleIn, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, c.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, o("WDSPaddings.stylex").wdsPaddings.paddingStart8), { children: u.jsx("div", {
				className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
				children: E
			}) }))] })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
