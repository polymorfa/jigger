__d("WAWebMessageTextBody.react", [
	"WAWebBizCtwaAGMUtils",
	"WAWebDisplayType",
	"WAWebEmoji",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessageMultiEmoji.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgPhoneNumbers",
	"WAWebQbmMessageLevelActionEvent",
	"WAWebWamEnumMessageActionEntryPoint",
	"WAWebWamEnumMessageLevelAction",
	"WDSFontTokenStyles",
	"react",
	"useWAWebMessageHighlightTerms"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		templateBold: {
			opacity: "x16vickp",
			$$css: !0
		},
		codeFontSize: {
			fontSize: "x1nxh6w3",
			$$css: !0
		}
	};
	function c(e) {
		var t, n, a = e.botCommands, i = e.botMsgTextToRender, l = e.displayType, c = e.handleLinkClick, d = e.linkXstyle, m = e.msg, p = e.trusted, _ = r("useWAWebMessageHighlightTerms")(m.id), f = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(m.body);
		if (f) {
			var g = f.length === 1 && o("WAWebEmoji").EmojiUtil.getHeartEmojis().some(function(e) {
				return o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) === o("WAWebEmoji").EmojiUtil.normalizeEmoji(f[0]);
			});
			return s.jsx(r("WAWebMessageMultiEmoji.react"), {
				animation: g,
				emojis: f
			});
		}
		var h = !0, y = !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (t = m.ctwaContext) == null ? void 0 : t.automatedGreetingMessageShown,
			msgSource: (n = m.ctwaContext) == null ? void 0 : n.sourceApp,
			msgSubtype: m.subtype,
			msgType: m.type
		}) && i != null && o("WAWebMsgGetters").getIsMetaBotResponse(m) ? i : m.body;
		return s.jsx(o("WAWebExpandableText.react").ExpandableText, {
			text: y,
			textLimit: o("WAWebMsgGetters").getInitialPageSize(m),
			children: function(t) {
				var e = t.textLimit, n = o("WAWebFormatConfigurationConversation").Conversation({
					mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(m),
					groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(m),
					hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(m.unsafe()),
					links: o("WAWebMsgLinks").getLinksFromMsg(m.unsafe(), e),
					linkXstyle: d,
					phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(m.unsafe(), e),
					selectable: h,
					trusted: p === !0,
					fromMe: m.id.fromMe,
					fromChatWid: m.id.remote,
					commands: l === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION ? a : null,
					parseLists: !0,
					parseQuotes: !0,
					parseInlineCode: !0,
					messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(m),
					codeXstyle: u.codeFontSize,
					boldXstyle: o("WAWebMsgGetters").getIsFromTemplate(m.unsafe()) ? u.templateBold : void 0,
					onLinkClick: function() {
						c && (c(), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
							msg: m.unsafe(),
							chat: o("WAWebFrontendMsgGetters").getChat(m.unsafe()),
							messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.URL_FRICTION_BANNER_VIEW,
							messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.URL_CLICK_BANNER
						}));
					},
					terms: _ != null ? _ : null
				});
				return s.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: y,
					lastBotEditBodyLength: m.lastBotEditBodyLength,
					className: l === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft" : "",
					xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
					dirMismatch: o("WAWebFrontendMsgGetters").getRtl(m) !== r("WAWebL10N").isRTL(),
					direction: o("WAWebFrontendMsgGetters").getDir(m),
					inferLinesDirection: !0,
					formatters: n,
					selectable: h,
					textLimit: e
				});
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
