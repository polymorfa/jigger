__d("WAWebSendOrRequestPaymentMessage.react", [
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMediaBubble.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgModelPropUtils",
	"WAWebMsgPhoneNumbers",
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
		}
	};
	function d(t) {
		var n, a = t.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebFrontendMsgGetters").getDir,
			(n = o("WAWebMsgGetters")).getIsGroupMsg,
			n.getIsPSA,
			n.getIsSentByMe,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getPaymentNoteMsg
		]), l = i[0], s = i[1], d = i[2], m = i[3], p = i[4], _ = i[5], f = i[6], g = f == null ? void 0 : f.body, h = !g, y = null, C;
		if (g) {
			var b = o("WAWebFormatConfigurationConversation").Conversation({
				mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(a),
				groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(a),
				phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(a.unsafe()),
				links: o("WAWebMsgLinks").getLinksFromMsg(a.unsafe()),
				trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
				fromMe: a.id.fromMe
			});
			y = u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				c.paddingTop7,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd4,
				c.paddingBottom6,
				c.paddingInlineStart6
			]), { children: u.jsx(r("WAWebMessageSpacerText.react"), {
				msg: a.unsafe(),
				children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: g,
					selectable: !0,
					formatters: b,
					dirMismatch: l !== r("WAWebL10N").isRTL(),
					direction: s
				})
			}) }));
		} else C = u.jsx("div", {
			className: "x10l6tqk x11dcrhx xrb244j",
			children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: a })
		});
		return u.jsxs(r("WAWebMediaBubble.react"), {
			displayAuthor: t.displayAuthor,
			displayType: t.displayType,
			hasCaption: !!y,
			msg: a,
			quotedMsg: t.quotedMsg,
			hideMeta: h,
			children: [
				t.paymentInfo,
				C,
				y
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
