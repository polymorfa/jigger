__d("WAWebMessageCaption.react", [
	"WAWebBizSuspiciousLabel.react",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessageSpacerText.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgPhoneNumbers",
	"react",
	"useWAWebMessageHighlightTerms",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
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
		var t, n = e.highlightText, a = e.msg, i = e.overflowVisible, l = e.shouldFormatLinks, c = e.spacer, d = e.testId, m = e.trusted, p = r("useWAWebMessageHighlightTerms")(a.id), _ = o("useWAWebMsgValues").useMsgValues(a.id, [
			(t = o("WAWebMsgGetters")).getT,
			t.getId,
			o("WAWebFrontendMsgGetters").getDir,
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebFrontendMsgGetters").getText,
			t.getInitialPageSize,
			t.getFooter,
			t.getCtwaContext,
			t.getIsSpoiler
		]), f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = _[5], v = _[6], S = _[7], R = _[8], L = !0;
		if (C == null || C === "") return null;
		var E = !!(h && y !== r("WAWebL10N").isRTL());
		return s.jsxs(s.Fragment, { children: [!S && s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, { msg: a }), s.jsx(r("WAWebMessageSpacerText.react"), {
			overflowVisible: i,
			msg: a,
			"data-id": g,
			spacer: c,
			children: s.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: C,
				textLimit: b,
				children: function(t) {
					var e = t.textLimit, r = n != null ? n.toLowerCase().split(" ") : p, i = o("WAWebFormatConfigurationConversation").Conversation({
						mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(a),
						groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(a),
						hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(a),
						links: l === !1 ? void 0 : o("WAWebMsgLinks").getLinksFromMsg(a, e),
						phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(a),
						selectable: L,
						trusted: m === !0,
						fromMe: g.fromMe,
						fromChatWid: g.remote,
						parseLists: !0,
						parseQuotes: !0,
						parseInlineCode: !0,
						messageHasSpoiler: R,
						codeXstyle: u.codeFontSize,
						boldXstyle: o("WAWebMsgGetters").getIsFromTemplate(a) ? u.templateBold : void 0,
						terms: r != null ? r : null
					});
					return s.jsx(o("WAWebEmojiText.react").EmojiText, {
						testid: d,
						direction: h,
						dirMismatch: E,
						formatters: i,
						inferLinesDirection: !0,
						selectable: L,
						text: C,
						textLimit: e
					});
				}
			})
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
