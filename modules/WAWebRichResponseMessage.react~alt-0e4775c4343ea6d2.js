__d("WAWebRichResponseMessage.react", [
	"FBLogger",
	"WAWebBotTypes",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebForwardedBotFallbackBubble.react",
	"WAWebForwardedBotMessageUtils",
	"WAWebFrontendContactGetters",
	"WAWebMessageBubbleTypingIndicator.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebRichResponse.flow",
	"WAWebRichResponseFragment.react",
	"WAWebRichResponseMsgUtils",
	"WAWebUnifiedResponseBubble.react",
	"WAWebUnifiedResponseUtils",
	"WAWebUnsupportedMessage",
	"WAWebUpdateForwardedBotValidationStatusAction",
	"WAWebUseBotMessageUpdateScrolling",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.displayAuthor, n = e.displayType, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [o("WAWebMsgGetters").getUnifiedResponse, o("WAWebMsgGetters").getForwardedAiBotMessageInfo]), l = i[0], c = i[1], _ = u(function() {
			o("WAWebUpdateForwardedBotValidationStatusAction").acceptForwardedBotDownloadConsentAction(a);
		}, [a]), f = a.unsafe(), g = f.senderObj != null && o("WAWebFrontendContactGetters").getIsMyContact(f.senderObj), h = c != null ? o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(c.validationStatus, g, l) : "normal";
		return h !== "normal" ? s.jsx(r("WAWebForwardedBotFallbackBubble.react"), {
			displayAuthor: t,
			displayType: n,
			mode: h,
			msg: a,
			onDownloadClick: _
		}) : l != null && o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(a.unsafe()) ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebUnifiedResponseBubble",
			fallback: function() {
				return s.jsx(m, {
					displayAuthor: t,
					displayType: n,
					msg: a
				});
			},
			onError: p,
			children: s.jsx(o("WAWebUnifiedResponseBubble.react").WAWebUnifiedResponseBubble, {
				displayAuthor: t,
				displayType: n,
				errorFallback: function() {
					return s.jsx(d, { msg: a });
				},
				msg: a,
				unifiedResponse: l
			})
		}) : s.jsx(m, {
			displayAuthor: t,
			displayType: n,
			msg: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getRichResponse]), a = n[0], i = o("WAWebRichResponseMsgUtils").getBundledRichResponseFragments((a == null ? void 0 : a.fragments) || []).map(function(e, n) {
			return s.jsx(r("WAWebRichResponseFragment.react"), {
				fragment: e,
				msg: t
			}, n);
		});
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 12,
			children: i
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.displayAuthor, n = e.displayType, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [o("WAWebMsgGetters").getRichResponse, o("WAWebMsgGetters").getBotEditType]), l = i[0], u = i[1];
		return o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(a.unsafe()), (l == null ? void 0 : l.parseState) === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed ? u == null || u === o("WAWebBotTypes").BotMsgEditType.LAST ? s.jsx(r("WAWebUnsupportedMessage"), {
			msg: a,
			displayAuthor: t,
			hideUpdateButton: !0
		}) : s.jsx(r("WAWebMessageTextBubble.react"), {
			msg: a,
			displayAuthor: t,
			displayType: n,
			children: s.jsx(r("WAWebMessageBubbleTypingIndicator.react"), { isBotMsgStreaming: !1 })
		}) : s.jsx(r("WAWebMessageTextBubble.react"), {
			msg: a,
			displayAuthor: t,
			displayType: n,
			children: s.jsx(r("WAWebMessageSpacerText.react"), {
				msg: a.unsafe(),
				children: s.jsx(d, { msg: a })
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		r("FBLogger")("wa_web_ur_parser").catching(e).mustfix("Error rendering WAWebUnifiedResponseBubble, falling back to RichResponseBubble");
	}
	l.default = c;
}), 98);
