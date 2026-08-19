__d("WAWebMsgSendFailIcon.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebChatGetters",
	"WAWebClock",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebFailIcon.react",
	"WAWebFailedMessageEditResendModal.react",
	"WAWebFailedMessageModal.react",
	"WAWebFbtIntlList",
	"WAWebFrontendMsgGetters",
	"WAWebFrontendPollVoteGetters",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebPinMsgConstants",
	"WAWebPollVoteGetters",
	"WAWebPollsPollVoteModel",
	"WAWebPollsRestoreLastSuccessfulVote",
	"WAWebPollsSendVoteMsgAction",
	"WAWebReactionsMsgAction",
	"WAWebReactionsUtils",
	"WAWebResendMsgAction",
	"WAWebSendCommentMessageAction",
	"WAWebSendEventResponseMsgAction",
	"WAWebSendMsgResultAction",
	"WAWebSendPinMessageAction",
	"WAWebStateUtils",
	"err",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebEventResponsesToResend",
	"useWAWebEventTargetValue",
	"useWAWebMsgValues",
	"useWAWebPinsToResend",
	"useWAWebPollVotesToResend",
	"useWAWebReactionsByMe"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react"));
	function h(t) {
		var n = o("react-compiler-runtime").c(33), a = t.displayType, i = t.msgs, l = t.showForAddOns, d = t.showForMessages, m = r("nullthrows")(i[0]), p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WAWebMsgGetters").getIsSentByMe], n[0] = p) : p = n[0];
		var _ = o("useWAWebMsgValues").useMsgValues(m.id, p), f = _[0], h = o("WAWebFrontendMsgGetters").getChat(m.unsafe()), E;
		n[1] !== i || n[2] !== d ? (E = d ? i : [], n[1] = i, n[2] = d, n[3] = E) : E = n[3];
		var k = E, I;
		n[4] !== k ? (I = function() {
			return k.filter(v);
		}, n[4] = k, n[5] = I) : I = n[5];
		var D = r("useWAWebEventTargetValue")(k, "change:ack change:isSendFailure", I), x;
		n[6] !== k[0] ? (x = k[0] != null && o("WAWebMsgGetters").getIsEdited(k[0]), n[6] = k[0], n[7] = x) : x = n[7];
		var $ = x, P;
		n[8] !== i || n[9] !== l ? (P = l ? i : [], n[8] = i, n[9] = l, n[10] = P) : P = n[10];
		var N = P, M;
		n[11] !== N ? (M = N.map(b), n[11] = N, n[12] = M) : M = n[12];
		var w = M, A;
		n[13] !== i ? (A = i.some(C), n[13] = i, n[14] = A) : A = n[14];
		var F = r("useWAWebReactionsByMe")(w, A), O;
		n[15] !== F ? (O = function() {
			return F.filter(y);
		}, n[15] = F, n[16] = O) : O = n[16];
		var B = r("useWAWebEventTargetValue")(F, "change:isFailed", O), W = N[0], q;
		n[17] !== W ? (q = W.unsafe(), n[17] = W, n[18] = q) : q = n[18];
		var U = r("useWAWebPollVotesToResend")(q), V = r("useWAWebPinsToResend")(w), H = r("useWAWebEventResponsesToResend")(w);
		if (D.length === 0 && B.length === 0 && U.length === 0 && V.length === 0 && H.length === 0) return null;
		var G;
		n[19] !== h || n[20] !== H || n[21] !== m || n[22] !== $ || n[23] !== D || n[24] !== V || n[25] !== B || n[26] !== U ? (G = function() {
			$ && B.length === 0 ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MsgSendFailIcon:handleClick: edit send failure"]))), S(m, h)) : T(U) ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MsgSendFailIcon:handleClick: ended poll vote failure"]))), L(U)) : (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["MsgSendFailIcon:handleClick: generic send failure"]))), R({
				messagesToResend: D,
				reactionsToResend: B,
				votesToResend: U,
				pinsToResend: V,
				eventResponsesToResend: H,
				commentsToResend: []
			}));
		}, n[19] = h, n[20] = H, n[21] = m, n[22] = $, n[23] = D, n[24] = V, n[25] = B, n[26] = U, n[27] = G) : G = n[27];
		var z = G, j;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), n[28] = j) : j = n[28];
		var K = j, Q;
		return n[29] !== a || n[30] !== z || n[31] !== f ? (Q = g.jsx(r("WAWebFailIcon.react"), {
			displayType: a,
			tooltip: K,
			ariaLabel: K,
			fromMe: f,
			onClick: z,
			isGroupChatProfilePictureDisplayed: !0
		}), n[29] = a, n[30] = z, n[31] = f, n[32] = Q) : Q = n[32], Q;
	}
	function y(e) {
		return e.isFailed;
	}
	function C(e) {
		return o("WAWebMsgGetters").getHasReaction(e);
	}
	function b(e) {
		return e.id;
	}
	function v(e) {
		return o("WAWebMsgGetters").getIsFailed(e);
	}
	function S(e, t) {
		var n = o("WAWebMsgActionCapability").canEditText(e.unsafe()), a = n ? g.jsx(r("WAWebFailedMessageEditResendModal.react"), { failedEditedMsg: e.unsafe() }) : g.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
			chat: t,
			msgList: [e.unsafe()].map(o("WAWebStateUtils").unproxy)
		});
		o("WAWebModalManager").ModalManager.open(a);
	}
	function R(e) {
		var t = E(e), n = e.messagesToResend[0], a = n != null ? o("WAWebFrontendMsgGetters").getChat(n.unsafe()) : null, i = n != null && (o("WAWebMsgGetters").getBroadcastId(n) != null || a != null && o("WAWebChatGetters").getIsBroadcast(a));
		o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebFailedMessageModal.react"), {
			text: t,
			resend: i ? void 0 : function() {
				k(e);
			}
		}));
	}
	function L(e) {
		var t = I(e), n = s._(
			/*BTDS*/
			""
		);
		o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebFailedMessageModal.react"), {
			title: t,
			text: n,
			onDelete: function() {
				return e.forEach(function(e) {
					e instanceof o("WAWebPollsPollVoteModel").PollVote && o("WAWebPollsRestoreLastSuccessfulVote").restoreLastSuccessfulVote(e);
				});
			}
		}));
	}
	function E(e) {
		var t = e.commentsToResend, n = e.eventResponsesToResend, a = e.messagesToResend, i = e.pinsToResend, l = e.reactionsToResend, u = e.votesToResend, c = l.length + u.length + i.length + n.length, d = a.length + c;
		if (a.length > 0 && d === a.length) return s._(
			/*BTDS*/
			""
		);
		if (a.length > 0) return s._(
			/*BTDS*/
			""
		);
		if (l.length === c) {
			var m = r("WAWebFbtIntlList")(l.map(function(e) {
				return e.reactionText;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
			return l.length > 2 ? s._(
				/*BTDS*/
				"",
				[s._plural(l.length, "count")]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(l.length), s._param("reactions", m)]
			);
		}
		if (u.length === c) return I(u);
		if (i.length === c) {
			var p = i[0];
			return p.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
		if (n.length === c) return s._(
			/*BTDS*/
			""
		);
		if (t.length === c) return s._(
			/*BTDS*/
			""
		);
		if (c > 0) return s._(
			/*BTDS*/
			""
		);
		throw r("err")("Unhandled case: " + a.length + " messages, " + l.length + " reactions, " + u.length + " votes, " + d + " total.");
	}
	function k(e) {
		var t = e.commentsToResend, r = e.eventResponsesToResend, a = e.messagesToResend, i = e.pinsToResend, l = e.reactionsToResend, s = e.votesToResend;
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"FailedMessageModal:resend: resend failed messages and add-ons, ",
			" messages, ",
			" reactions, ",
			" votes, ",
			" pins, ",
			" event responses, ",
			" comments"
		])), a.length, l.length, s.length, i.length, r.length, t.length);
		var u = 0, c = a.map(function(e) {
			return o("WAWebResendMsgAction").resendMsg(e.unsafe()).then(function(e) {
				e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN && u++;
			}).catch(function(e) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["FailedMessageModal:resend: resend failure ", ""])), e).tags("messaging");
			});
		});
		(_ || (_ = n("Promise"))).allSettled(c).then(function() {
			u > 0 && o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["FailedMessageModal:resend: ", " failures with SendMsgResult.ERROR_UNKNOWN"])), u).tags("messaging");
		}), l.forEach(function(e) {
			var t = o("WAWebReactionsUtils").reactionSenderToReactionUpdate(e);
			o("WAWebReactionsMsgAction").resendUpdateFailedPropsForSentReactionsDBAndModel(t);
		}), s.forEach(o("WAWebPollsSendVoteMsgAction").resendVote), i.forEach(o("WAWebSendPinMessageAction").resendPinInChatMsg), r.forEach(o("WAWebSendEventResponseMsgAction").resendEventResponseMsg), t.forEach(o("WAWebSendCommentMessageAction").resendComment);
	}
	function I(e) {
		var t = e[0], n = t instanceof o("WAWebPollsPollVoteModel").PollVote ? o("WAWebPollVoteGetters").getIsUnvote(t) : t.isUnvote;
		return n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function T(e) {
		return e.some(function(e) {
			if (!(e instanceof o("WAWebPollsPollVoteModel").PollVote)) return !1;
			var t = o("WAWebFrontendPollVoteGetters").getParentMsg(e), n = o("WAWebMsgGetters").getPollEndTime(t);
			return n != null && n <= o("WAWebClock").Clock.getServerTimeMs();
		});
	}
	l.MsgSendFailIcon = h, l.showResendDialog = R;
}), 226);
