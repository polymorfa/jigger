__d("WAWebMessageProcessRenderable", [
	"WALogger",
	"WAWebABProps",
	"WAWebApiChatCommon",
	"WAWebApiFilterAndReplaceMessages",
	"WAWebBackendEventBus",
	"WAWebBotBaseGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBotIncomingInvokeSystemMsg",
	"WAWebBotSignatureVerificationPostProcessor",
	"WAWebBotUtils",
	"WAWebContactSystemMsg",
	"WAWebCurrentUser",
	"WAWebGetPrivacyModeWhenSent",
	"WAWebGroupHistoryNoticeHandler",
	"WAWebHandleBizBotMsgs",
	"WAWebHandleMsgTypes.flow",
	"WAWebHandleMsgValidate",
	"WAWebHandlePrivacyModeChange",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebLimitSharingGatingUtils",
	"WAWebMaybeUpdateMessageThreadDetails",
	"WAWebMessageAssociation.flow",
	"WAWebMessagePostprocessRenderable",
	"WAWebMessageProcessDBPipeline",
	"WAWebMessagingGatingUtils",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebMsgType",
	"WAWebMsmsgMsgSecretCache",
	"WAWebOfflineHandler",
	"WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
	"WAWebOfflineResumeTypes",
	"WAWebPreProcessOrderEphemeralExemption",
	"WAWebProtobufsProtocol.pb",
	"WAWebSagaSystemMsg",
	"WAWebStatusDBMessageInfo",
	"WAWebWamEnumPlaceholderPopulationType",
	"WAWebWid",
	"cr:37261"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = (e = n("cr:37261")) != null ? e : {}, p = m.opusProcessChat;
	function _(e, t) {
		var n = r("WAWebMsgKey").from({
			fromMe: e.fromMe,
			id: e.id,
			participant: e.participant,
			remote: t
		});
		return o("WAWebCurrentUser").isEmployee() && o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"processRenderableMessagesForLid: override msgKey: ",
			" --> ",
			""
		])), e.toString(), n.toString()), n;
	}
	function f(e) {
		var t = e.chat, n = e.messages, r = e.preMatChat;
		return r == null || !t.isRegularUser() ? n : n.map(function(e) {
			return o("WAWebMessageAssociation.flow").isAssociatedMsg(e) ? babelHelpers.extends({}, e, { parentMsgKey: _(e.parentMsgKey, t) }) : e;
		});
	}
	function g(e) {
		return !!e.bizBotType && !o("WAWebMsgGetters").getIsCAPISupport(e) && !o("WAWebMsgGetters").getIsCoexV2Relay(e);
	}
	async function h(e, t, n, a) {
		var i = f({
			chat: t.chat,
			messages: e,
			preMatChat: t.preMatChat
		}), l = await o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(t, n), s = C(a);
		s != null && (i = i.map(function(e) {
			return babelHelpers.extends({}, e, { placeholderPopulationType: s });
		})), i = l == null ? i : i.map(function(e) {
			return babelHelpers.extends({}, e, { privacyModeWhenSent: l });
		});
		var u = t.addressingMode;
		i = u == null ? i : i.map(function(e) {
			return babelHelpers.extends({}, e, { groupAddressingMode: u });
		});
		var c = n.decisionId, d = n.sourceType, m = n.decisionSources;
		return (c != null || d != null || m != null) && (i = i.map(function(e) {
			return babelHelpers.extends({}, e, {
				decisionId: c,
				sourceType: d,
				decisionSources: m
			});
		})), i = await o("WAWebPreProcessOrderEphemeralExemption").preProcessOrderEphemeralExemption(i), i = i.map(function(e) {
			var t, n = e.messageSecret != null ? (t = e.mentionedJidList) == null ? void 0 : t.find(function(e) {
				return e && r("WAWebWid").isWid(e) && e.isBot();
			}) : null;
			return n != null ? babelHelpers.extends({}, e, { invokedBotWid: n }) : e;
		}), i = await o("WAWebMaybeUpdateMessageThreadDetails").maybeUpdateMessageThreadDetails(i), o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(i);
	}
	async function y(e, t, n, a, i, l, s) {
		if (e.length !== 0) {
			try {
				var c, d, m, p = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.PreProcessing), _ = t.chat, f = t.offline != null && !s, y = "online";
				s ? y = "reparsing" : f && (y = "offline");
				var C = await h(e, t, a, l), v = C.newMsgs;
				if (p == null || p(), o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
					var S = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.ProcessReportingTokenInfo);
					await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({ renderableMsgs: v }), S == null || S();
				}
				var R = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.Processing);
				v.forEach(function(e) {
					e.id.fromMe && o("WAWebMsgGetters").getIsStatus(e) && o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(e.id, f, t.statusSetting);
				});
				for (var L = null, E = 0; E < v.length; E++) {
					var k, I, T, D = v[E], x = D.messageSecret, $ = !!(x && (k = D.id.remote) != null && k.isBot()), P = (I = (T = D.invokedBotWid) == null ? void 0 : T.isBot()) != null ? I : !1, N = D.botGroupParticipant, M = o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && N instanceof r("WAWebWid") && N.equals(o("WAWebBotUtils").META_BOT_FBID_WID), w = o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && N instanceof r("WAWebWid") && N.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
					x && ($ || P || M || w) && D.isForwarded !== !0 && (P && (L = D), o("WAWebMsmsgMsgSecretCache").msmsgMsgSecretCache.addMsmsgMsgSecretToCache(D.id.toString(), x)), (M || w) && N != null && o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(D.id.toString(), N), v[E] = await o("WAWebBotSignatureVerificationPostProcessor").verifyForwardedBotMessage(D);
				}
				if (L != null) {
					var A = await o("WAWebBotIncomingInvokeSystemMsg").createSysMsgForIncomingBotInvoke(L);
					A && v.unshift(A);
				}
				var F;
				if (_.isUser() && (F = await o("WAWebHandlePrivacyModeChange").handlePrivacyModeChangeAndCreateChat({
					msgs: v,
					chatWid: _,
					bizInfo: a,
					msgMeta: i,
					msgInfo: t
				})), o("WAWebBotBaseGating").isBotEnabled()) {
					var O = v.filter(g);
					if (O.length) {
						var B = await o("WAWebHandleBizBotMsgs").handleBizBotMsgs(_, O);
						v.unshift.apply(v, B);
					}
				}
				var W = await b(v, _);
				if (W != null && v.unshift(W), r("WAWebWid").isCAPISupportAccount(_)) {
					var q = v.some(function(e) {
						return e.shouldShowSupportAISystemMessage === !0;
					});
					q === !0 && await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
						chatId: _,
						newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(_),
						handleSingleMsgOrigin: "supportSagaInit"
					});
				}
				var U = {
					msgInfo: t,
					messageOverwriteOption: l,
					msgs: v,
					isOffline: f,
					latestPrivacyMode: (c = F) == null ? void 0 : c.latestPrivacyMode,
					shouldQueryContactInfo: (d = (m = F) == null ? void 0 : m.shouldQueryContactInfo) != null ? d : !1
				}, V = o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline(v, !f);
				if (v.forEach(function(e) {
					return void o("WAWebGroupHistoryNoticeHandler").maybeHandleGroupHistoryNotice(e);
				}), o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || s) {
					R == null || R(), o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd && await V;
					var H = o("WAWebMessagePostprocessRenderable").postprocessRenderableMessages(U);
					if (f && o("WAWebOfflineHandler").OfflineMessageHandler.getResumeType() === o("WAWebOfflineResumeTypes").ResumeType.NonBlocking) return;
					await H;
					return;
				}
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"processRenderableMessage: msgId:",
					", failed with error: ",
					""
				])), t.externalId, e).tags("messaging").sendLogs("handle_msg: error storing/processing single message");
			}
			return Promise.resolve();
		}
	}
	function C(e) {
		return e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE || e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.FUTURE_PROOF || e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG ? null : e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY ? o("WAWebWamEnumPlaceholderPopulationType").PLACEHOLDER_POPULATION_TYPE.RETRY : e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.PEER_RETRY ? o("WAWebWamEnumPlaceholderPopulationType").PLACEHOLDER_POPULATION_TYPE.PEER_MESSAGE : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	async function b(e, t) {
		if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || p == null) return null;
		var n = o("WAWebABProps").getABPropConfigValue("opus_t");
		if (n == null) return null;
		var r = e.some(function(e) {
			return e.t != null && e.t >= n && !(e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (e.subtype === "sender_revoke" || e.subtype === "admin_revoke"));
		});
		if (!r) return null;
		try {
			var a, i = await o("WAWebApiChatCommon").getChatRecord(t);
			return (i == null || (a = i.limitSharing) == null ? void 0 : a.sharingLimited) !== !0 ? null : (await p(t.toString(), {
				skipSystemMessage: !0,
				skipSharingLimitedCheck: !0
			}), babelHelpers.extends({}, o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(t, {
				sharingLimited: !1,
				trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN
			}), { t: n }));
		} catch (e) {
			return e instanceof Error ? o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[opus] incoming msg fallback failed"]))).catching(e).sendLogs("opus-incoming-fail") : o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[opus] incoming msg fallback failed"]))).sendLogs("opus-incoming-fail"), null;
		}
	}
	l.overrideParentKeyForAssociations = f, l.isBizBotDisclosureMsg = g, l.processRenderableMessages = y, l.maybeCreateOpusSystemMsg = b;
}), 98);
