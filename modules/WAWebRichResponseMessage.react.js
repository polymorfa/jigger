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
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(32), n = e.displayAuthor, a = e.displayType, i = e.msg, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebMsgGetters").getUnifiedResponse, o("WAWebMsgGetters").getForwardedAiBotMessageInfo], t[0] = l) : l = t[0];
		var u = o("useWAWebMsgValues").useMsgValues(i.id, l), c = u[0], _ = u[1], f;
		t[1] !== i ? (f = function() {
			o("WAWebUpdateForwardedBotValidationStatusAction").acceptForwardedBotDownloadConsentAction(i);
		}, t[1] = i, t[2] = f) : f = t[2];
		var g = f, h;
		if (t[3] !== _ || t[4] !== i || t[5] !== c) {
			var y = i.unsafe(), C = y.senderObj != null && o("WAWebFrontendContactGetters").getIsMyContact(y.senderObj);
			h = _ != null ? o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(_.validationStatus, C, c) : "normal", t[3] = _, t[4] = i, t[5] = c, t[6] = h;
		} else h = t[6];
		var b = h;
		if (b !== "normal") {
			var v;
			return t[7] !== n || t[8] !== b || t[9] !== a || t[10] !== g || t[11] !== i ? (v = s.jsx(r("WAWebForwardedBotFallbackBubble.react"), {
				displayAuthor: n,
				displayType: a,
				mode: b,
				msg: i,
				onDownloadClick: g
			}), t[7] = n, t[8] = b, t[9] = a, t[10] = g, t[11] = i, t[12] = v) : v = t[12], v;
		}
		if (c != null && o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(i.unsafe())) {
			var S;
			t[13] !== n || t[14] !== a || t[15] !== i ? (S = function() {
				return s.jsx(m, {
					displayAuthor: n,
					displayType: a,
					msg: i
				});
			}, t[13] = n, t[14] = a, t[15] = i, t[16] = S) : S = t[16];
			var R;
			t[17] !== i ? (R = function() {
				return s.jsx(d, { msg: i });
			}, t[17] = i, t[18] = R) : R = t[18];
			var L;
			t[19] !== n || t[20] !== a || t[21] !== i || t[22] !== R || t[23] !== c ? (L = s.jsx(o("WAWebUnifiedResponseBubble.react").WAWebUnifiedResponseBubble, {
				displayAuthor: n,
				displayType: a,
				errorFallback: R,
				msg: i,
				unifiedResponse: c
			}), t[19] = n, t[20] = a, t[21] = i, t[22] = R, t[23] = c, t[24] = L) : L = t[24];
			var E;
			return t[25] !== S || t[26] !== L ? (E = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "WAWebUnifiedResponseBubble",
				fallback: S,
				onError: p,
				children: L
			}), t[25] = S, t[26] = L, t[27] = E) : E = t[27], E;
		}
		var k;
		return t[28] !== n || t[29] !== a || t[30] !== i ? (k = s.jsx(m, {
			displayAuthor: n,
			displayType: a,
			msg: i
		}), t[28] = n, t[29] = a, t[30] = i, t[31] = k) : k = t[31], k;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n = e.msg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebMsgGetters").getRichResponse], t[0] = a) : a = t[0];
		var i = o("useWAWebMsgValues").useMsgValues(n.id, a), l = i[0], u;
		if (t[1] !== n || t[2] !== (l == null ? void 0 : l.fragments)) {
			var c;
			t[4] !== (l == null ? void 0 : l.fragments) ? (c = (l == null ? void 0 : l.fragments) || [], t[4] = l == null ? void 0 : l.fragments, t[5] = c) : c = t[5];
			var d;
			t[6] !== n ? (d = function(t, o) {
				return s.jsx(r("WAWebRichResponseFragment.react"), {
					fragment: t,
					msg: n
				}, o);
			}, t[6] = n, t[7] = d) : d = t[7], u = o("WAWebRichResponseMsgUtils").getBundledRichResponseFragments(c).map(d), t[1] = n, t[2] = l == null ? void 0 : l.fragments, t[3] = u;
		} else u = t[3];
		var m = u, p;
		return t[8] !== m ? (p = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 12,
			children: m
		}), t[8] = m, t[9] = p) : p = t[9], p;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(20), n = e.displayAuthor, a = e.displayType, i = e.msg, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebMsgGetters").getRichResponse, o("WAWebMsgGetters").getBotEditType], t[0] = l) : l = t[0];
		var u = o("useWAWebMsgValues").useMsgValues(i.id, l), c = u[0], m = u[1], p;
		if (t[1] !== i ? (p = i.unsafe(), t[1] = i, t[2] = p) : p = t[2], o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(p), (c == null ? void 0 : c.parseState) === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed) {
			var _;
			return t[3] !== m || t[4] !== n || t[5] !== a || t[6] !== i ? (_ = m == null || m === o("WAWebBotTypes").BotMsgEditType.LAST ? s.jsx(r("WAWebUnsupportedMessage"), {
				msg: i,
				displayAuthor: n,
				hideUpdateButton: !0
			}) : s.jsx(r("WAWebMessageTextBubble.react"), {
				msg: i,
				displayAuthor: n,
				displayType: a,
				children: s.jsx(r("WAWebMessageBubbleTypingIndicator.react"), { isBotMsgStreaming: !1 })
			}), t[3] = m, t[4] = n, t[5] = a, t[6] = i, t[7] = _) : _ = t[7], _;
		}
		var f;
		t[8] !== i ? (f = i.unsafe(), t[8] = i, t[9] = f) : f = t[9];
		var g;
		t[10] !== i ? (g = s.jsx(d, { msg: i }), t[10] = i, t[11] = g) : g = t[11];
		var h;
		t[12] !== f || t[13] !== g ? (h = s.jsx(r("WAWebMessageSpacerText.react"), {
			msg: f,
			children: g
		}), t[12] = f, t[13] = g, t[14] = h) : h = t[14];
		var y;
		return t[15] !== n || t[16] !== a || t[17] !== i || t[18] !== h ? (y = s.jsx(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: n,
			displayType: a,
			children: h
		}), t[15] = n, t[16] = a, t[17] = i, t[18] = h, t[19] = y) : y = t[19], y;
	}
	function p(e) {
		r("FBLogger")("wa_web_ur_parser").catching(e).mustfix("Error rendering WAWebUnifiedResponseBubble, falling back to RichResponseBubble");
	}
	l.default = c;
}), 98);
