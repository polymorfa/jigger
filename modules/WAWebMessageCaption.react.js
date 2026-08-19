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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(33), n = e.highlightText, a = e.msg, i = e.overflowVisible, l = e.shouldFormatLinks, c = e.spacer, d = e.testId, m = e.trusted, p = r("useWAWebMessageHighlightTerms")(a.id), _;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var f;
			_ = [
				(f = o("WAWebMsgGetters")).getT,
				f.getId,
				o("WAWebFrontendMsgGetters").getDir,
				o("WAWebFrontendMsgGetters").getRtl,
				o("WAWebFrontendMsgGetters").getText,
				f.getInitialPageSize,
				f.getFooter,
				f.getCtwaContext,
				f.getIsSpoiler
			], t[0] = _;
		} else _ = t[0];
		var g = o("useWAWebMsgValues").useMsgValues(a.id, _), h = g[1], y = g[2], C = g[3], b = g[4], v = g[5], S = g[7], R = g[8];
		if (b == null || b === "") return null;
		var L;
		t[1] !== y || t[2] !== C ? (L = y && C !== r("WAWebL10N").isRTL(), t[1] = y, t[2] = C, t[3] = L) : L = t[3];
		var E = !!L, k;
		t[4] !== S || t[5] !== a ? (k = !S && s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, { msg: a }), t[4] = S, t[5] = a, t[6] = k) : k = t[6];
		var I;
		t[7] !== y || t[8] !== E || t[9] !== p || t[10] !== n || t[11] !== h.fromMe || t[12] !== h.remote || t[13] !== R || t[14] !== a || t[15] !== l || t[16] !== d || t[17] !== b || t[18] !== m ? (I = function(t) {
			var e = t.textLimit, r = n != null ? n.toLowerCase().split(" ") : p, i = o("WAWebFormatConfigurationConversation").Conversation({
				mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(a),
				groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(a),
				hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(a),
				links: l === !1 ? void 0 : o("WAWebMsgLinks").getLinksFromMsg(a, e),
				phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(a),
				selectable: !0,
				trusted: m === !0,
				fromMe: h.fromMe,
				fromChatWid: h.remote,
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
				direction: y,
				dirMismatch: E,
				formatters: i,
				inferLinesDirection: !0,
				selectable: !0,
				text: b,
				textLimit: e
			});
		}, t[7] = y, t[8] = E, t[9] = p, t[10] = n, t[11] = h.fromMe, t[12] = h.remote, t[13] = R, t[14] = a, t[15] = l, t[16] = d, t[17] = b, t[18] = m, t[19] = I) : I = t[19];
		var T;
		t[20] !== v || t[21] !== I || t[22] !== b ? (T = s.jsx(o("WAWebExpandableText.react").ExpandableText, {
			text: b,
			textLimit: v,
			children: I
		}), t[20] = v, t[21] = I, t[22] = b, t[23] = T) : T = t[23];
		var D;
		t[24] !== h || t[25] !== a || t[26] !== i || t[27] !== c || t[28] !== T ? (D = s.jsx(r("WAWebMessageSpacerText.react"), {
			overflowVisible: i,
			msg: a,
			"data-id": h,
			spacer: c,
			children: T
		}), t[24] = h, t[25] = a, t[26] = i, t[27] = c, t[28] = T, t[29] = D) : D = t[29];
		var x;
		return t[30] !== k || t[31] !== D ? (x = s.jsxs(s.Fragment, { children: [k, D] }), t[30] = k, t[31] = D, t[32] = x) : x = t[32], x;
	}
	l.default = c;
}), 98);
