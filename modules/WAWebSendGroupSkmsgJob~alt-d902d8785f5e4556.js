__d("WAWebSendGroupSkmsgJob", [
	"WALogger",
	"WATimeUtils",
	"WAWap",
	"WAWebAck",
	"WAWebAdvSignatureApi",
	"WAWebApiMessageInfoStore",
	"WAWebApiParticipantStore",
	"WAWebBackendJobs.flow",
	"WAWebBackendJobsCommon",
	"WAWebBotBaseGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBotUtils",
	"WAWebCommsAckParser",
	"WAWebCommsWapMd",
	"WAWebCreateNackFromStanza",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebE2EProtoGenerator",
	"WAWebE2EProtoUtils",
	"WAWebEncryptMsgProtobuf",
	"WAWebGetGroupKeyDistributionMsg",
	"WAWebGroupHandleAddressingModeMismatch",
	"WAWebGroupQueryBridge",
	"WAWebHandleMsgCommon",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebManageE2ESessionsJob",
	"WAWebMsgGetters",
	"WAWebPhashUtils",
	"WAWebPostPrekeysDepletionMetric",
	"WAWebReportingTokenUtils",
	"WAWebResendGroupMsg",
	"WAWebScheduledMsgStanzaContributor",
	"WAWebSchemaMessage",
	"WAWebSendMsgCommonApi",
	"WAWebSendMsgCreateFanoutStanza",
	"WAWebSendMsgMetaNode",
	"WAWebSendMsgTypes",
	"WAWebSessionScope",
	"WAWebSignal",
	"WAWebSignalProtocolStore",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumMessageDistributionEnumType",
	"WAWebWamEnumMessageType",
	"WAWebWamEnumMismatchOriginType",
	"WAWebWamEnumPrekeysFetchContext",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"cr:10198",
	"cr:10199",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _;
	async function f(t) {
		var n, r, a, i = t.groupData, l = t.metricReporter, s = t.skDistribList;
		if ((n = l.sendPerfReporter) == null || n.startPrekeysFetchStage(), (r = l.sendPerfReporter) == null || r.setFetchedPrekeyCount(0), s.length > 0) try {
			var u, c = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
				wids: s
			});
			(u = l.sendPerfReporter) == null || u.setFetchedPrekeyCount(c == null ? void 0 : c.missedPrekeyCount), o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
				count: c == null ? void 0 : c.depletedPrekeyCount,
				prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
				messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
				deviceSizeBucket: i.deviceSizeBucket
			});
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"ensureE2ESessions: failed for ",
				" devices: ",
				""
			])), s.length, t).tags("messaging");
		}
		(a = l.sendPerfReporter) == null || a.postPrekeysFetchStage();
	}
	async function g(e, t, n, r, a, i, l, s, u) {
		var c, d, m, p;
		(c = l.sendPerfReporter) == null || c.startClientEncryptStage();
		var _ = o("WAWebSendMsgCommonApi").encodeAndPad(a), f = (u == null ? void 0 : u.kind) === "schedule" ? u.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a), g = o("WAWebBotBaseGating").isBotEnabled() && ((d = e.invokedBotWid) == null ? void 0 : d.isBot()) === !0, h = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(e), y = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e), C = await o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(e, t, _, i), v = C.ciphertext, S = C.senderKeyBytes, R;
		n.length > 0 && (R = await o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(e, t, n, S, !1)), (m = l.sendPerfReporter) == null || m.postClientEncryptStage();
		var L = null, E = !1;
		R && R.length > 0 && !h ? L = o("WAWap").wap("participants", null, R.map(function(e) {
			var t = e.ciphertext, n = e.participant, r = e.type;
			r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (E = !0);
			var i = s == null ? void 0 : s.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(n))), l = i != null ? o("WAWap").wap("content_binding", null, i) : null;
			return o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(n) }, o("WAWap").wap("enc", {
				v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
				type: o("WAWap").CUSTOM_STRING(r),
				"decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a))
			}, t), l);
		})) : s != null && (L = o("WAWap").wap("participants", null, r.map(function(e) {
			var t = s == null ? void 0 : s.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(e)));
			return t != null ? o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(e) }, o("WAWap").wap("content_binding", null, t)) : null;
		})));
		var k = h ? null : o("WAWap").wap("enc", {
			v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
			type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
			mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(f),
			"decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a))
		}, v), I = null, T = g || h || y || o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i.isOpenBotGroup === !0 ? await b({
			isOpenBotGroupSend: (p = i.isOpenBotGroup) != null ? p : !1,
			msg: e,
			msgProtobuf: a
		}) : [null, !1], D = T[0], x = T[1];
		if (E || x) {
			var $ = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
			I = o("WAWap").wap("device-identity", null, $);
		}
		return {
			keyDistributionMsg: L,
			skeyEncryptedGroupMsg: k,
			identityNode: I,
			botMsgNode: D
		};
	}
	function h(e, t) {
		var n = t.data, a = o("WAWebE2EProtoUtils").getBizNativeFlowName(e), i = n.nativeFlowInteractiveMsg;
		if (a != null && r("WAWebInteractiveMessagesNativeFlowName").cast(a) === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO && i === !0) {
			var l;
			return (l = o("WAWap")).wap("biz", null, l.wap("interactive", {
				v: "1",
				type: l.CUSTOM_STRING("native_flow")
			}, l.wap("native_flow", { name: l.CUSTOM_STRING(a) })));
		}
		return null;
	}
	async function y(e, t, a, i, l, y, b) {
		var v, S, R, L, E, k, I = e.data, T = I.id, D = I.to, x = e.data;
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendSenderKeyMsg: sending ", ""])), T).tags("messaging");
		var $ = T.id, P = a.rotateKey, N = a.skDistribList, M = a.skList;
		C(D, l), (v = l.sendPerfReporter) == null || v.setSenderKeyDistributionCount(N.length);
		var w = M.concat(N), A = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(), F = await o("WAWebPhashUtils").phashV2([].concat(w, [A]), o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && i.isOpenBotGroup === !0, o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && i.isTeeBotGroup === !0), O = o("WAWebMsgGetters").getIsBotFeedbackMessage(x);
		await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(w.map(function(e) {
			return {
				msgKey: T,
				receiverId: e
			};
		})), P && await o("WAWebSignal").Session.deleteGroupSenderKeyInfo(D, A), await f({
			groupData: i,
			metricReporter: l,
			skDistribList: N
		});
		var B = await g(x, D, N, M, t, i, l, y, b), W = B.botMsgNode, q = B.identityNode, U = B.keyDistributionMsg, V = B.skeyEncryptedGroupMsg, H = y == null ? void 0 : y.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(A))), G = H != null ? o("WAWap").wap("sender_content_binding", null, H) : null, z = i.isLidAddressingMode === !0 ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn, j = await o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(x, t, T.toString()), K = o("WAWap").wap("message", {
			id: o("WAWap").CUSTOM_STRING($),
			to: o("WAWebCommsWapMd").CHAT_JID(D),
			phash: O ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(F),
			type: (S = b == null ? void 0 : b.originalStanzaType) != null ? S : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
			edit: o("WAWebSendMsgCommonApi").editAttribute(t, x.subtype),
			addressing_mode: o("WAWap").CUSTOM_STRING(z)
		}, U, V, q, h(t, e), o("WAWebSendMsgMetaNode").genMetaNode({
			chatId: D,
			groupData: i,
			includeAttributes: {},
			msgProtobuf: t,
			msgRecord: e
		}), b != null ? o("WAWebScheduledMsgStanzaContributor").genScheduledMsgMetaNode(b) : null, W, G, j);
		await o("WAWebSendMsgCommonApi").updateIdentityRange(e, w), await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), (R = l.sendPerfReporter) == null || R.postReadyToSendStage(), (L = l.sendPerfReporter) == null || L.startWrittenWireStage(), n("cr:10199") == null || n("cr:10199").printEncNode(t);
		var Q = await o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(K, o("WAWebCommsAckParser").toCoreAckTemplate({
			id: $,
			class: "message",
			from: D,
			participant: null
		}));
		if (U) {
			var X;
			(X = l.sendReporter) == null || X.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE);
		}
		(E = l.sendPerfReporter) == null || E.postWrittenWireStage(), l.sendPerfReporter = null, (k = l.sendReporter) == null || k.postSuccess(), l.sendReporter = null;
		var Y = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(Q);
		if (Y.error) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendSenderKeyMsg: invalid ack from server for ", ""])), x.id).tags("messaging"), Promise.reject(r("err")("[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server"));
		var J = Y.success.error;
		if (J === o("WAWebCreateNackFromStanza").NackReason.StaleGroupAddressingMode) return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendSenderKeyMsg: ack with error code 421"]))).tags("messaging"), Promise.resolve().then(function() {
			return o("WAWebGroupQueryBridge").sendQueryGroup(D);
		}).catch(function(e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendSenderKeyMsg: sendQueryGroup failed ", ""])), e).tags("messaging");
		}), e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message && e.data.updateAck(o("WAWebAck").ACK.FAILED, !1), Promise.reject(r("err")("[messaging] encryptAndSendSenderKeyMsg: ack with error code 421"));
		await o("WAWebApiParticipantStore").markHasSenderKey(D, N);
		var Z = Y.success, ee = Z.addressingMode, te = Z.count, ne = Z.phash;
		return ne != null && ne !== F ? (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndSendSenderKeyMsg: phash mismatch ",
			" server=",
			""
		])), x.id, ne).tags("messaging"), o("WAWebResendGroupMsg").resendPersistedGroupMsgWrapper({
			isDirect: !1,
			msgRecord: e,
			msgProtobuf: t,
			oldList: w,
			ackTime: o("WATimeUtils").unixTime(),
			groupData: i,
			metricReporter: l,
			serverAddressingMode: ee
		}).catch(function(t) {
			o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"resendGroupMsg: failed to resend group msg: ",
				", type: ",
				""
			])), e.data.id.toString(), e.data.type).tags("messaging"), o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["resendGroupMsg: failed to resend group msg: ", ""])), t).tags("messaging").sendLogs("message-resend-failed", { sampling: .01 });
		})) : ee != null && ee !== z && o("WAWebGroupHandleAddressingModeMismatch").handleAddressingModeMismatch(D, {
			localAddressingMode: z,
			serverAddressingMode: ee,
			mismatchOrigin: o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE
		}), te != null && o("WAWebSchemaMessage").getMessageTable().merge(String(T), { count: te }), Y.success;
	}
	function C(e, t) {
		var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
		if (n) {
			var r, a;
			(r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0), (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0);
		}
	}
	async function b(e) {
		var t = e.isOpenBotGroupSend, n = e.msg, r = e.msgProtobuf, a = o("WAWebMsgGetters").getIsBotFeedbackMessage(n), i = null, l = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(n);
		if (a) {
			var s;
			i = (s = n.protocolMessageKey) == null ? void 0 : s.participant;
		} else l ? i = n.botRespOrInvocationRevokeBotWid : o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && t === !0 ? i = o("WAWebBotUtils").META_BOT_FBID_WID : i = n.invokedBotWid;
		if (!i || !i.isBot()) return [null, !1];
		await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords([{
			msgKey: n.id,
			receiverId: i
		}]);
		var u = !1;
		await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
			identityChanged: !1,
			sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
			wids: [i]
		});
		var c = await o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
			message: r,
			botMessageSecret: n.botMessageSecret,
			isOpenBotGroup: o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && t,
			mentionedJidList: n.mentionedJidList
		});
		l && i.isFbidBot() && (c = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(c));
		var d = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(i, 0, c, n, 0), m = d.ciphertext, p = d.type;
		p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (u = !0);
		var _ = o("WAWebSendMsgCreateFanoutStanza").getBotAgentEngagementType(t, null, n), f = o("WAWap").wap("bot", {
			type: a ? "feedback" : o("WAWap").DROP_ATTR,
			agent_engagement_type: _ != null ? o("WAWap").CUSTOM_STRING(_) : o("WAWap").DROP_ATTR
		}, o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(i) }, o("WAWap").wap("enc", {
			v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
			type: o("WAWap").CUSTOM_STRING(p)
		}, m)));
		return [f, u];
	}
	l.encryptAndSendSenderKeyMsg = y;
}), 98);
