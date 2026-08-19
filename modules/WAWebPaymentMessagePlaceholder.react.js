__d("WAWebPaymentMessagePlaceholder.react", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessagePlaceholder.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgModelPropUtils",
	"WAWebMsgPhoneNumbers",
	"WAWebMsgSelectors",
	"WDSIconIcSchedule.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		paddingInlineEnd3: {
			paddingInlineEnd: "x1im30kd",
			$$css: !0
		},
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginBottom14: {
			marginBottom: "x1u7kmwd",
			$$css: !0
		}
	}, m = {
		quote: {
			marginTop: "x1198e8h",
			marginInlineEnd: "xv9t0rm",
			marginBottom: "xyorhqc",
			marginInlineStart: "xw01apr",
			$$css: !0
		},
		hasText: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		}
	};
	function p(t) {
		var n, a = t.displayAuthor, i = t.msg, l = t.paymentInfo, u = t.placeholderText, p = t.quotedMsg, _ = o("useWAWebMsgValues").useMsgValues(i.id, [
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebFrontendMsgGetters").getDir,
			(n = o("WAWebMsgGetters")).getIsSentByMe,
			n.getIsGroupMsg,
			n.getIsPSA,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getPaymentNoteMsg
		]), f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = _[5], v = _[6], S, R = v == null ? void 0 : v.body;
		if (R) {
			var L = o("WAWebFormatConfigurationConversation").Conversation({
				mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(i),
				groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(i),
				links: o("WAWebMsgLinks").getLinksFromMsg(i.unsafe()),
				phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(i.unsafe()),
				trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
				fromMe: i.id.fromMe
			});
			S = c.jsx(r("WAWebMessageSpacerText.react"), {
				msg: i.unsafe(),
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: R,
					selectable: !0,
					formatters: L,
					dirMismatch: f !== r("WAWebL10N").isRTL(),
					direction: g
				})
			});
		}
		var E;
		if (p) {
			var k = (e || (e = r("stylex")))(m.quote, a || o("WAWebMsgSelectors").showForwarded(i) && d.marginTop5);
			E = c.jsx("div", {
				className: k,
				children: p
			});
		}
		var I, T = s._(
			/*BTDS*/
			""
		);
		u && (I = c.jsx(r("WDSIconIcSchedule.react"), {
			height: 24,
			width: 24
		}), T = u);
		var D = (e || (e = r("stylex")))(S ? [
			m.hasText,
			d.marginBottom10,
			d.paddingTop5,
			d.paddingInlineEnd3,
			d.paddingBottom10,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart0
		] : [o("WDSMargins.stylex").wdsMargins.marginTop4, d.marginBottom14]);
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			children: [
				E,
				l,
				c.jsx("div", {
					className: D,
					children: c.jsx(r("WAWebMessagePlaceholder.react"), {
						hasCaption: !!S,
						Icon: I,
						msg: i.unsafe(),
						children: T
					})
				}),
				S
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
