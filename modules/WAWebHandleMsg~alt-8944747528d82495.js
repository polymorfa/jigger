__d("WAWebHandleMsg", [
	"WALogger",
	"WAParsableWapNode",
	"WATimeUtils",
	"WAWebCreateNackFromStanza",
	"WAWebDBReportingTokenUtils",
	"WAWebGetMessageCache",
	"WAWebGroupHistoryReportingTokenDBUtils",
	"WAWebHandleMsgCommon",
	"WAWebHandleMsgMetaUtils",
	"WAWebHandleMsgParser",
	"WAWebHandleMsgProcess",
	"WAWebHandleMsgSendReceipt",
	"WAWebHandleMsgTypes.flow",
	"WAWebInsertUsernameChangeSystemMsg",
	"WAWebMaybePostOfflineCountTooHighMetric",
	"WAWebMessageInsertDebugPlaceholderWorkerCompatible",
	"WAWebMessageQueue",
	"WAWebMsgProcessingApiUtils",
	"WAWebMsgProcessingDecryptApi",
	"WAWebMsgType",
	"WAWebOfflineHandler",
	"WAWebPQGatingUtils",
	"WAWebPostIncomingMessageDropMetric",
	"WAWebPostUnknownStanzaMetric",
	"WAWebProcessMsgInfoForLid",
	"WAWebSessionScope",
	"WAWebSetUsernameJob",
	"WAWebStatusSessionGatingUtils",
	"WAWebUsernameGatingUtils",
	"WAWebWidFactory",
	"cr:4122",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y;
	async function C(t, a) {
		var i = a === void 0 ? {} : a, l = i.isGroupStatusStanza, v = l === void 0 ? !1 : l, S = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
		if (S.error) {
			var R;
			r("gkx")("26258") ? o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleMsg: error while parsing message stanza"]))).tags("messaging") : o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"handleMsg: error while parsing message stanza: ",
				", node: ",
				""
			])), S.error, t.toString()).tags("messaging"), o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
			var L = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(t);
			if (L.error) return L.error instanceof o("WAParsableWapNode").XmppParsingFailure ? o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["failedParsingMessage: ", ""])), L.error).tags("messaging").sendLogs("msg-stanza-parsing-failed-xmpp-no-ack", { sampling: .01 }) : o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["failedParsingMessage"]))).tags("messaging").sendLogs("msg-stanza-parsing-failed-no-ack", { sampling: .01 }), o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanza(t), Promise.resolve(o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.ParsingError));
			var E = L.success, k = E.externalId, I = E.msgInfo, T = E.offline, D = E.type, x = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
			return D == null ? (x = o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanzaType, o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropUnknownMessageType(t)) : S.error instanceof o("WAParsableWapNode").XmppParsingFailure && ((R = S.error) == null ? void 0 : R.reason) === "" + o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza ? (x = o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza, o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropForCoexV2RelayOrHostedCompanion(t, L.success.from)) : o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanza(t), o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder({
				externalId: k,
				nackReason: x,
				msgInfo: I,
				offline: T
			}), S.error instanceof o("WAParsableWapNode").XmppParsingFailure ? o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["failedParsingMessage: ", ""])), S.error).tags("messaging").sendLogs("msg-stanza-parsing-failed-xmpp", { sampling: .01 }) : o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["failedParsingMessage"]))).tags("messaging").sendLogs("msg-stanza-parsing-failed", { sampling: .01 }), Promise.resolve(o("WAWebCreateNackFromStanza").createNackFromStanza(t, x));
		}
		var $ = S.success;
		v && ($.msgMeta.isGroupStatus = !0), o("WAWebMaybePostOfflineCountTooHighMetric").maybePostOfflineCountTooHigh($);
		var P = $.encs, N = $.ghsReportingTokenInfos, M = $.msgBotInfo, w = $.msgInfo, A = $.msgMeta;
		w.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs(), w.offline != null && (o("WAWebOfflineHandler").OfflineMessageHandler.addOfflinePendingMessage(), o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete());
		var F = 1;
		return o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete() && delete $.msgInfo.offline, n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, C) ? (o("WAWebHandleMsgSendReceipt").sendReceipt($.msgInfo, $.msgMeta, { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS }), null) : o("WAWebMessageQueue").onMessageQueue({
			chatWid: w.chat,
			isOffline: !!$.msgInfo.offline,
			msgCategory: w.category,
			action: async function() {
				var e;
				if (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"handleMsg: chat=",
					" id=",
					" offline=",
					""
				])), w.chat.toLogString(), w.externalId, (e = w.offline) != null ? e : "").tags("messaging"), w.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs(), await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
					msgInfo: w,
					msgMeta: A
				}), o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
					var t = [];
					if (w.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP) {
						var n = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
							userId: o("WAWebWidFactory").asUserWidOrThrow(w.author),
							username: w.participantUsername
						});
						n && t.push(n);
					} else if (w.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) w.bclParticipants.forEach(function(e) {
						var n, r = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
							userId: o("WAWebWidFactory").asUserWidOrThrow((n = e.peerRecipientLid) != null ? n : e.wid),
							username: e.peerRecipientUsername
						});
						r && t.push(r);
					});
					else if (w.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) {
						var a, i = w.participantLid || (a = w.participant) != null && a.isLid() ? w.participant : null, l = i ? o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
							userId: o("WAWebWidFactory").asUserWidOrThrow(i),
							username: w.participantUsername
						}) : null;
						l && t.push(l);
					} else {
						var s = o("WAWebWidFactory").asUserWidOrThrow(w.author);
						if (w.username == null && w.senderPn != null && s.isLid()) {
							var u;
							t.push({
								userId: s,
								deleteUsername: !0,
								usernameCountryCode: (u = w.senderCountryCode) != null ? u : void 0
							});
						} else {
							var c = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
								userId: s,
								username: w.username,
								usernameCountryCode: w.senderCountryCode
							});
							c && t.push(c);
						}
						var d;
						w.peerRecipientLid ? d = o("WAWebWidFactory").asUserWidOrThrow(w.peerRecipientLid) : w.chat.isLid() && (d = o("WAWebWidFactory").asUserWidOrThrow(w.chat));
						var m = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
							userId: d,
							username: w.peerRecipientUsername
						});
						m && t.push(m);
					}
					if (t.length > 0) {
						var C = await o("WAWebSetUsernameJob").setUsernamesJob(t);
						await o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(t, C, "handleMsg");
					}
				}
				var v = o("WAWebMsgProcessingApiUtils").messageInfoToKey(w);
				if (N != null && N.length > 0 && (await o("WAWebGroupHistoryReportingTokenDBUtils").storeGroupHistoryReportingTokenInfos(v.toString(), N, !1), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"[group-history] Stored ",
					" reporting tokens for bundle ",
					""
				])), N.length, v.toString()).tags("messaging", "wa-ice", "group-history")), A.isUnavailable) {
					o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
						msgKey: v,
						stanzaId: w.externalId,
						msgTs: w.ts,
						incomingMsgReportingTokenInfo: $.reportingTokenInfo
					}), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["handleMessage: msgId::", ", get fanout placeholder"])), w.externalId).tags("messaging");
					var S = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
					return M != null ? S = o("WAWebHandleMsgTypes.flow").PlaceholderType.BOT_UNAVAILABLE_FANOUT : A.isHostedMsgUnavailable === !0 ? S = o("WAWebHandleMsgTypes.flow").PlaceholderType.HOSTED_UNAVAILABLE_FANOUT : A.isViewOnceUnavailable === !0 && (S = o("WAWebHandleMsgTypes.flow").PlaceholderType.VIEW_ONCE_UNAVAILABLE_FANOUT), await o("WAWebHandleMsgProcess").processPlaceholderMsg({
						type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
						msgMeta: A,
						msgInfo: w,
						placeholderType: S
					}), o("WAWebHandleMsgSendReceipt").sendReceipt(w, A, { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL }).catch(function(e) {
						o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt failed for unavailable/backfill message"]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-backfill-error", { sampling: .01 });
					}), null;
				}
				var R = o("WAWebMsgProcessingApiUtils").getFrom(w), L = R.isStatus() || A.isGroupStatus === !0, E;
				if (L ? E = o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForIncomingMessage(A.metaSessionScope) ? o("WAWebSessionScope").SessionScope.STATUS : void 0 : o("WAWebPQGatingUtils").isPq1on1MessageEnabled() && P.some(function(e) {
					return e.sessionType === "pq";
				}) && (E = o("WAWebSessionScope").SessionScope.PQ), E != null) {
					var k;
					o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
						"[status-session] grpStatus=",
						" scope=",
						" metaScope=",
						""
					])), String(A.isGroupStatus === !0), E, (k = A.metaSessionScope) != null ? k : "none").tags("messaging");
				}
				var I = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload($, o("WAWebHandleMsgProcess").processDecryptedMessageProto, E);
				return w.offline != null && o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(I.result), I.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS && o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
					msgKey: v,
					stanzaId: w.externalId,
					msgTs: w.ts,
					incomingMsgReportingTokenInfo: $.reportingTokenInfo
				}), I.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR && b($) ? o("WAWebGetMessageCache").getMessageCache().addMessages([{ duplicateMsgReceiptInfo: {
					externalId: w.externalId,
					from: o("WAWebMsgProcessingApiUtils").getFrom(w),
					author: w.author,
					msgInfo: w,
					msgMeta: A,
					enc: I.failedEnc || P[0],
					hasHideFailEnc: P.some(function(e) {
						return e.hideFail;
					}),
					msgReceivedTimes: F
				} }], w.offline == null) : w.offline == null || w.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer || o("WAWebHandleMsgSendReceipt").isCoexV2SenderReceiptMessage(w) || A.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify || I.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS && I.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR ? o("WAWebHandleMsgSendReceipt").sendReceipt(w, A, I, { canNack: b($) }).catch(function(e) {
					o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt failed"]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-error", { sampling: .01 });
				}) : o("WAWebGetMessageCache").getMessageCache().addMessages([{ receiptInfo: {
					externalId: w.externalId,
					from: o("WAWebMsgProcessingApiUtils").getFrom(w),
					author: w.author
				} }], !1), null;
			}
		});
	}
	function b(e) {
		var t = e.encs, n = e.msgMeta, r = t.some(function(e) {
			return e.hideFail;
		});
		return r ? o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(n) || o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(n) : n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
	}
	l.default = C;
}), 98);
