__d("WAWebHandleMsgProcess", [
	"WACryptoPkcs7",
	"WALogger",
	"WAWebABProps",
	"WAWebAddonQueryUtils",
	"WAWebApiDeferredMessagesStorage",
	"WAWebBackendApi",
	"WAWebBackendEventBus",
	"WAWebBackendJobs.flow",
	"WAWebConditionalRevealPreProcessor",
	"WAWebCurrentUser",
	"WAWebDBMsgUtils",
	"WAWebGalaxyFlowsUtils",
	"WAWebGetGroupAddressingMode",
	"WAWebGetMessageCache",
	"WAWebHandleCloudApiThreadControlNotification",
	"WAWebHandleMsgError",
	"WAWebHandleMsgProcessUtils",
	"WAWebHandleMsgTypes.flow",
	"WAWebHandleMsgValidate",
	"WAWebHandlePushnameUpdate",
	"WAWebLogMissingGroupParticipantMappings",
	"WAWebLogReceivedMessages",
	"WAWebMessageAssociationConstants",
	"WAWebMessageProcessPlaceholder",
	"WAWebMessageProcessRenderable",
	"WAWebMessageSecretLocationUtils",
	"WAWebMessagingGatingUtils",
	"WAWebMsgProcessingApiUtils",
	"WAWebMsgType",
	"WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
	"WAWebParsedProtocolMsgType",
	"WAWebProtobufsE2E.pb",
	"WAWebQuarantineActionUtils",
	"WAWebRuntimeEnvironmentUtils",
	"WAWebSignal",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsNotifications",
	"WAWebVerifyProtobufMsgObjectKeys",
	"WAWebWamEnumDsmError",
	"WAWebWasaRootSecretWriter",
	"WAWebWid",
	"WAWebWidFactory",
	"WAWebWorkerSafeBackendApi",
	"cr:10197",
	"cr:37440",
	"cr:37441",
	"decodeProtobuf",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k = (e = n("cr:37440")) != null ? e : {}, I = k.castToAddonMsgData, T = k.getParentMsgKey, D = (s = n("cr:37441")) != null ? s : {}, x = D.isUnifiedInfraEnabledForType;
	async function $(e) {
		var t, n, a = e.bizInfo, i = e.decrypted, l = e.e2eInfo, s = e.hsmInfo, h = e.info, y = e.isPadded, C = y === void 0 ? !0 : y, b = e.msgBotInfo, v = e.msgMeta, S = e.paymentInfo, R = e.reparsing, L = R === void 0 ? !1 : R, E = e.reportingTokenInfo, k = l.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg ? !1 : C, I = k ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(i)) : new Uint8Array(i), T = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, I);
		o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys(T), o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(T, o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Receiver, h.externalId);
		var D = null, x = (t = T.deviceSentMessage) == null || (t = t.message) == null ? void 0 : t.conditionalRevealMessage, $ = (n = T.conditionalRevealMessage) != null ? n : x;
		if ($ != null) {
			var N, w, A, F, W, q, U, V = T.conditionalRevealMessage == null && x != null ? (N = (w = (A = T.deviceSentMessage) == null ? void 0 : A.destinationJid) != null ? w : (F = h.chat) == null ? void 0 : F.toString()) != null ? N : "" : (W = (q = h.chat) == null ? void 0 : q.toString()) != null ? W : "", H = h.author != null && !o("WAWebUserPrefsMeUser").isMeAccount(h.author) ? h.author.toString() : null, G = await o("WAWebConditionalRevealPreProcessor").maybePreProcessConditionalRevealForReceive({
				conditionalRevealMessage: $,
				msgId: h.externalId,
				rawChatJid: V,
				reportingTokenInfo: E,
				senderJid: H,
				stanzaScheduledMsgMeta: (U = v == null ? void 0 : v.scheduledMsgMeta) != null ? U : null
			});
			if (G.proto != null && G.protoBytes != null && (T = G.proto, I = G.protoBytes, o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys(T), o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(T, o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Receiver, h.externalId)), D = G.scheduledMsgViewMode, G.isRevealPending) return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] reveal-pending, skip processing msgId=", ""])), h.externalId), { hasInactiveMsg: !1 };
		}
		var z = o("WAWebMsgProcessingApiUtils").getFrom(h), j = l.retryCount > 0 && o("WAWebMsgProcessingApiUtils").isRevokeInfo(h) || L, K = j ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
		if (L) {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[processDecryptedMessageProto] reparsing msgId=", ""])), h.externalId).tags("messaging");
			var Q = await o("WAWebMsgProcessingApiUtils").parseMessage({
				info: h,
				ciphertextType: l.e2eType,
				msgProtobuf: T,
				paymentInfo: S,
				bizInfo: a,
				hsmInfo: s,
				hidePlaceholder: l.hideFail,
				processDecryptedProtoParams: e,
				msgBotInfo: b,
				meta: v,
				reportingTokenInfo: E,
				isMessageRetry: l.retryCount > 0,
				isOffline: h.offline != null,
				protobufBytes: I
			});
			if (Q.renderableMsgs == null) o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["parsed render able msgs not reparsed as expected"])));
			else {
				var X = o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(Q.renderableMsgs, D);
				o("WAWebHandleMsgValidate").renderableMessagesValidation({
					renderableMsgs: X,
					msgMeta: v,
					info: h,
					proto: T,
					bizInfo: a
				}), o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled() || await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({ renderableMsgs: X });
				var Y = P({
					renderableMsgs: X,
					reparsing: !0,
					bizInfo: a,
					msgMeta: v,
					paymentInfo: S,
					info: h,
					messageOverwriteOption: K
				}), J = Y.hasInactiveMsg, Z = Y.tasks;
				return await Promise.all(Z), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[processDecryptedMessageProto] reparsed msgId=", ""])), h.externalId).tags("messaging"), { hasInactiveMsg: J };
			}
		}
		var ee = await o("WAWebHandleMsgProcessUtils").preProcessMsg(h, T);
		if ((ee == null ? void 0 : ee.senderOrRecipientAccountTypeHosted) === !0 && (h.senderOrRecipientAccountTypeHosted = !0), (ee == null ? void 0 : ee.hostedBizEncMismatch) === !0 && (h.hostedBizEncStateMismatch = !0), h.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST && l.retryCount > 0) {
			var te = await o("WAWebDBMsgUtils").getMsgByMsgKey(o("WAWebMsgProcessingApiUtils").messageInfoToKey(h));
			(te == null ? void 0 : te.bclParticipants) != null ? h.bclParticipants = te.bclParticipants : (te == null ? void 0 : te.broadcastParticipants) != null && (h.bclParticipants = te.broadcastParticipants.map(function(e) {
				return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
			}));
		}
		var ne = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.Parsing), re = L ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine : await o("WAWebQuarantineActionUtils").getQuarantineAction(T, z), oe = re === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine ? await o("WAWebMsgProcessingApiUtils").parseMessage({
			info: h,
			ciphertextType: l.e2eType,
			msgProtobuf: T,
			paymentInfo: S,
			bizInfo: a,
			hsmInfo: s,
			hidePlaceholder: l.hideFail,
			processDecryptedProtoParams: e,
			msgBotInfo: b,
			meta: v,
			reportingTokenInfo: E,
			isMessageRetry: l.retryCount > 0,
			isOffline: h.offline != null,
			protobufBytes: I
		}) : {
			deviceSent: null,
			senderKey: null,
			rootSecretDistribute: null,
			storeMsg: null,
			renderableMsgs: [babelHelpers.extends({}, o("WAWebMsgProcessingApiUtils").generateBaseMsg(h), {
				type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
				kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
				quarantineOriginalProtobuf: I.slice().buffer,
				quarantineExtractedText: o("WAWebQuarantineActionUtils").maybeGetQuarantineText(re)
			})]
		};
		if (o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages")) {
			var ae;
			(ae = oe.renderableMsgs) == null || ae.forEach(function(e) {
				l.retryCount > 0 && (e.backgroundColor = 16711680);
			});
		}
		ne == null || ne();
		var ie = null;
		if (oe.history ? ie = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY : oe.appStateSyncKeyShare ? ie = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE : oe.appStateSyncKeyRequest ? ie = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST : oe.peerDataOperationRequestResponseMessage ? ie = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE : oe.peerDataOperationRequestMessage && (ie = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_MESSAGE), o("WAWebRuntimeEnvironmentUtils").isWorker() && ie) await o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([{
			id: h.externalId,
			type: ie,
			plaintext: I,
			info: h,
			paymentInfo: S,
			bizInfo: a
		}]);
		else if (oe.history) o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleHistorySyncNotification", {
			historySyncMetaData: oe.history,
			from: z,
			externalId: h.externalId
		});
		else if (oe.appStateSyncKeyShare) await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleAppStateSyncKeyShare", {
			keyShare: oe.appStateSyncKeyShare,
			from: z
		});
		else if (oe.appStateSyncKeyRequest) o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleAppStateSyncKeyRequest", {
			keyRequest: oe.appStateSyncKeyRequest,
			from: z
		});
		else if (oe.peerDataOperationRequestResponseMessage) o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handlePeerDataOperationRequestResponse", {
			stanzaId: h.externalId,
			response: oe.peerDataOperationRequestResponseMessage
		});
		else if (oe.peerDataOperationRequestMessage) o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handlePeerDataOperationRequest", {
			stanzaId: h.externalId,
			request: oe.peerDataOperationRequestMessage
		});
		else if (oe.securityNotificationEnabled) z == null || !(z instanceof r("WAWebWid")) ? o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Handle security notification empty wid error"]))).sendLogs("Handle security notification empty wid error") : o("WAWebUserPrefsMeUser").isMePrimary(z) ? o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications(oe.securityNotificationEnabled.isEnabled) : o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Handle security notification payload wid error"]))).sendLogs("Handle security notification payload wid error");
		else if (oe.cloudApiThreadControlNotification) r("WAWebHandleCloudApiThreadControlNotification")(oe.cloudApiThreadControlNotification);
		else if (oe.lidMigrationSyncMessage != null) o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[LID] received peer migration stanza but client-to-LID migration is no longer supported"]))).sendLogs(o("WAWebUserPrefsMeUser").isMeAccount(z) ? "lid-migration-peer-stanza-received" : "lid-migration-non-peer-stanza-received");
		else {
			var le = !1;
			if (oe.deviceSent == null ? le = !0 : oe.deviceSent.phash ? le = await o("WAWebHandleMsgValidate").validateBclHash(oe.deviceSent.phash, oe.deviceSent.info) : oe.deviceSent.destination && (le = await o("WAWebHandleMsgValidate").validateMsgDestination(oe.deviceSent.destination, h)), !le) throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(o("WAWebMsgProcessingApiUtils").getDeviceType(h.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM);
			var se = oe.renderableMsgs;
			if (o("WAWebHandleMsgValidate").renderableMessagesValidation({
				renderableMsgs: se,
				msgMeta: v,
				info: h,
				proto: T,
				bizInfo: a
			}), !o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
				var ue = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.ProcessReportingTokenInfo);
				await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({ renderableMsgs: se }), ue == null || ue();
			}
			var ce = await o("WAWebGalaxyFlowsUtils").maybeAddGalaxyFlowMessageIds(se), de = o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(oe.storeMsg != null ? [oe.storeMsg].concat(ce) : ce, D), me = P({
				renderableMsgs: de,
				reparsing: L,
				bizInfo: a,
				msgMeta: v,
				paymentInfo: S,
				info: h,
				messageOverwriteOption: K
			}), pe = me.hasInactiveMsg, _e = me.tasks, fe = !1;
			if (o("WAWebABProps").getABPropConfigValue("web_send_orphan_in_receipts_enabled")) {
				var ge = de[0], he = M(ge);
				if (he != null) {
					var ye = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([he]), Ce = ye.get(he.toString());
					fe = Ce == null || Ce.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || Ce.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && (Ce.futureproofType == null || !o("WAWebMessageAssociationConstants").orphanIneligibleFutureproofTypes.has(Ce.futureproofType));
				}
			}
			var be = oe.senderKey;
			be != null && _e.push(o("WAWebSignal").Session.createGroupSignalSession(h.author, be.groupId, be.key));
			var ve = oe.rootSecretDistribute;
			if (ve != null) if (o("WAWebUserPrefsMeUser").isMeAccount(h.author)) {
				var Se = ve.chatJid, Re = ve.rootSecret, Le = ve.stanzaId;
				_e.push(o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(Se, Le, Re));
			} else o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[wasa] dropping rootSecretDistribute from non-self author ", ""])), h.author.toString());
			r("isStringNullOrEmpty")(h.pushname) || o("WAWebHandlePushnameUpdate").updatePushname(h.author, h.pushname, h.offline != null);
			var Ee = O(h.chat);
			await Promise.all(_e);
			var ke = await Ee;
			return o("WAWebLogMissingGroupParticipantMappings").logMissingGroupParticipantMappings({
				author: h.author,
				groupId: h.chat,
				localAddressingMode: ke,
				serverAddressingMode: h.addressingMode
			}), o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
				msgs: ce,
				offline: B(h.offline),
				tsMillis: h.ts * 1e3,
				clientReceivedTsMillis: h.clientReceivedTsMillis,
				msgProcessStartTsMillis: h.msgProcessStartTsMillis,
				serverAddressingMode: h.addressingMode,
				localAddressingMode: ke,
				oppositeHasUsername: o("WAWebUserPrefsMeUser").isMeAccount(h.author) ? h.peerRecipientUsername != null : h.username != null
			}), {
				hasInactiveMsg: pe,
				isOrphanAddon: fe
			};
		}
		return { hasInactiveMsg: !1 };
	}
	function P(e) {
		var t, n, r, a, i, l = e.bizInfo, s = e.info, u = e.messageOverwriteOption, c = e.msgMeta, d = e.paymentInfo, m = e.renderableMsgs, p = e.reparsing, _ = [], f = !1, g = m[0], k = x != null && x(g == null ? void 0 : g.type) ? I == null ? void 0 : I(g) : null;
		return k != null ? (o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: addon"]))), f = !0, _.push(F({
			messageOverwriteOption: u,
			msg: k,
			msgInfo: s,
			reparsing: p
		}))) : g != null && g.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted ? (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: pollVote"]))), _.push(A(g, s, p))) : ((t = m[0]) == null ? void 0 : t.type) === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ? (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: keepInChat"]))), f = !0, _.push(o("WAWebHandleMsgProcessUtils").processKeepInChatMsg(m[0], s, p))) : ((n = m[0]) == null ? void 0 : n.type) === o("WAWebMsgType").MSG_TYPE.PROTOCOL && ((r = m[0]) == null ? void 0 : r.subtype) === "message_edit" ? (o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: messageEdit"]))), _.push(o("WAWebHandleMsgProcessUtils").processEditProtocolMsg(m[0], s, p))) : ((a = m[0]) == null ? void 0 : a.type) === o("WAWebMsgType").MSG_TYPE.PROTOCOL && ((i = m[0]) == null ? void 0 : i.subtype) === "ephemeral_sync_response" ? (o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: ephemeralSyncResponse"]))), _.push(o("WAWebHandleMsgProcessUtils").processEphemeralSyncResponseMsg({
			msg: m[0],
			msgInfo: s,
			reparsing: p
		}))) : m.length > 0 && ((g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (g == null ? void 0 : g.subtype) === "member_label" ? (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: memberLabel"]))), f = !0) : (g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (g == null ? void 0 : g.subtype) === "hatch_metadata_sync" ? (o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: hatchMetadataSync"]))), f = !0) : (g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.REACTION || (g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.REACTION_ENC ? (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: reaction"]))), f = !0) : (g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE || (g == null ? void 0 : g.type) === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE ? f = !0 : o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["processMsgs: renderableMsgs"]))), _.push(N(m, s, d, l, c, u, p))), {
			tasks: _,
			hasInactiveMsg: f
		};
	}
	function N(e, t, n, r, a, i, l) {
		return o("WAWebMessageProcessRenderable").processRenderableMessages(e, t, n, r, a, i, l);
	}
	function M(e) {
		if (e == null) return null;
		if ((I == null ? void 0 : I(e)) != null) {
			var t;
			return (t = T == null ? void 0 : T(e)) != null ? t : null;
		}
		return e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted && e.pollUpdateParentKey ? e.pollUpdateParentKey : e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT && e.kicKey ? e.kicKey : e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "message_edit" && e.protocolMessageKey != null ? e.protocolMessageKey : null;
	}
	function w(e) {
		return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
	}
	async function A(e, t, n) {
		var r = t.offline != null && !n, a = e, i = o("WAWebGetMessageCache").getMessageCache().addMessages([{ msg: a }], !r);
		(n || o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) && await i;
	}
	async function F(e) {
		var t = e.messageOverwriteOption, n = e.msg, r = e.msgInfo, a = e.reparsing, i = r.offline != null && !a, l = n, s = o("WAWebGetMessageCache").getMessageCache().addMessages([{ msg: l }], !i);
		(a || o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) && await s, t === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY && o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", { msg: n });
	}
	function O(e) {
		return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
	}
	function B(e) {
		var t = parseInt(e, 10);
		return Number.isNaN(t) ? null : t;
	}
	l.processDecryptedMessageProto = $, l.processMsgs = P, l.processRenderableMsg = N, l.processPlaceholderMsg = w;
}), 98);
