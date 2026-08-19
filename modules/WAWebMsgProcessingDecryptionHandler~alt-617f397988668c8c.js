__d("WAWebMsgProcessingDecryptionHandler", [
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWebBackendJobs.flow",
	"WAWebBackendJobsCommon",
	"WAWebCreateNackFromStanza",
	"WAWebEphemeralDecodeBroadcastSetting",
	"WAWebHandleMsgCommon",
	"WAWebHandleMsgError",
	"WAWebHandleMsgProcess",
	"WAWebHandleMsgTypes.flow",
	"WAWebIsOfficialClient",
	"WAWebMessagingGatingUtils",
	"WAWebMsgProcessingApiUtils",
	"WAWebMsgType",
	"WAWebOrphanBotMsgError",
	"WAWebPostE2eMessageRecvMetric",
	"WAWebPostIncomingMessageDropMetric",
	"WAWebSendRetryReceiptJob",
	"WAWebSignalCommonErrors",
	"WAWebWamEnumE2eFailureReason",
	"cr:4122",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b = n("$InternalEnum").Mirrored([
		"SignalRetryable",
		"SignalDuplicateMessage",
		"UnknownDevice",
		"DeviceSentMessage",
		"InvalidProtobuf",
		"HsmMismatch",
		"BroadcastEphSettings",
		"OrphanBotMsg",
		"Unknown"
	]), v = new Set([b.SignalRetryable]);
	function S(e) {
		return e.message === "errDuplicateMsg" ? b.SignalDuplicateMessage : b.SignalRetryable;
	}
	function R(e) {
		return e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ? b.UnknownDevice : e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ? S(e) : e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError ? b.SignalDuplicateMessage : e instanceof o("WAWebHandleMsgError").DeviceSentMessageError ? b.DeviceSentMessage : e instanceof o("WAWebHandleMsgError").MessageValidationError ? b.InvalidProtobuf : e instanceof o("WAWebHandleMsgCommon").HsmMismatchError ? b.HsmMismatch : e instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError ? b.BroadcastEphSettings : e instanceof r("WAWebOrphanBotMsgError") ? b.OrphanBotMsg : b.Unknown;
	}
	function L(e) {
		var t = {
			accessedEncs: new Set(),
			pkOrMsgFailedEnc: null,
			skMsgFailedEnc: null
		};
		return {
			handleError: function(r, a) {
				var n = R(a);
				r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg ? t.skMsgFailedEnc = {
					enc: r,
					error: a,
					errorType: n
				} : t.pkOrMsgFailedEnc = {
					enc: r,
					error: a,
					errorType: n
				}, T(e, {
					enc: r,
					error: a,
					errorType: n
				});
			},
			canDecryptNext: function(n) {
				var e;
				r("gkx")("26258") || x();
				var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
				return o != null && v.has(o) ? !1 : (t.accessedEncs.add(n.e2eType), !0);
			},
			getResult: function(r, o) {
				return k({
					handlerState: t,
					hasInactiveMsg: r,
					isOrphanAddon: o,
					parsedMsgPayload: e
				});
			}
		};
	}
	function E(e) {
		var t = e.msgInfo, n = t.chat, r = t.ts;
		if (n.isStatus()) {
			var a = o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - (r + o("WATimeUtils").DAY_SECONDS);
			return a > 0;
		}
		return !1;
	}
	async function k(t) {
		var n, a = t.handlerState, i = t.hasInactiveMsg, l = t.isOrphanAddon, s = t.parsedMsgPayload, u = (n = a.skMsgFailedEnc) != null ? n : a.pkOrMsgFailedEnc, c = u != null && a.accessedEncs.has(o("WAWebBackendJobs.flow").CiphertextType.Skmsg) && a.skMsgFailedEnc == null;
		if (u == null || c) return {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
			hasInactiveMsg: i,
			isOrphanAddon: l
		};
		I(s, a), D(s, a);
		var d = u.enc, m = u.error, p = u.errorType, _ = !1, f;
		return (m instanceof o("WAWebSignalCommonErrors").SignalDecryptionError || m instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError || m instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError) && (f = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(m), p !== b.SignalDuplicateMessage ? d.hideFail || (_ = await o("WAWebHandleMsgProcess").processPlaceholderMsg({
			type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
			msgMeta: s.msgMeta,
			msgInfo: s.msgInfo,
			placeholderType: o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E,
			placeholderAddReason: o("WAWebBackendJobsCommon").getPlaceholderAddReason(m, s)
		})) : s.msgInfo.chat.isGroup() && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"GroupLidInfra: duplicate-skip drop with no placeholder, skmsg = ",
			", group = ",
			", participant = ",
			""
		])), String(a.accessedEncs.has(o("WAWebBackendJobs.flow").CiphertextType.Skmsg)), s.msgInfo.chat, s.msgInfo.author).sendLogs("grouplidinfra-duplicate-skip-drop", { sampling: .01 })), p === b.SignalRetryable || p === b.UnknownDevice ? {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
			retryCount: d.retryCount,
			retryReason: f,
			placeholderCreated: _,
			isOrphanAddon: l
		} : p === b.SignalDuplicateMessage ? {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR,
			failedEnc: d
		} : p === b.DeviceSentMessage ? { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR } : p === b.InvalidProtobuf ? {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR,
			e2eFailureReason: m instanceof o("WAWebHandleMsgError").MessageValidationError ? m.e2eFailureReason : void 0
		} : p === b.HsmMismatch ? { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH } : p === b.BroadcastEphSettings ? {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
			retryCount: d.retryCount,
			retryReason: f,
			placeholderCreated: _,
			e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_BROADCAST_STANZA_ATTRIBUTE
		} : p === b.OrphanBotMsg ? u.error instanceof r("WAWebOrphanBotMsgError") ? {
			result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED,
			targetMsgKey: u.error.targetMsgKey
		} : { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR } : p === b.Unknown ? { result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR } : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + p);
		})();
	}
	function I(e, t) {
		var n = t.pkOrMsgFailedEnc, r = t.skMsgFailedEnc, a = e.msgInfo, i = e.msgMeta, l = r != null ? r : n;
		if (l != null) {
			var s = l.enc, u = l.error, c = l.errorType;
			if (E(e)) {
				o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropExpired({
					msgInfo: a,
					msgMeta: i,
					enc: s,
					error: u instanceof o("WAWebHandleMsgError").MessageValidationError ? u : void 0
				});
				return;
			}
			switch (c) {
				case b.SignalRetryable:
				case b.UnknownDevice:
				case b.HsmMismatch:
				case b.BroadcastEphSettings:
				case b.SignalDuplicateMessage:
				case b.OrphanBotMsg: break;
				case b.InvalidProtobuf:
				case b.DeviceSentMessage: {
					o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidProtobuf({
						msgInfo: a,
						msgMeta: i,
						enc: s,
						error: u instanceof o("WAWebHandleMsgError").MessageValidationError ? u : void 0
					});
					break;
				}
				case b.Unknown: o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo({
					msgInfo: a,
					msgMeta: i,
					enc: s
				});
			}
		}
	}
	function T(e, t) {
		var n, a = e.msgBotInfo, i = e.msgInfo, l = e.msgMeta, y = t.enc, C = t.error, v = t.errorType, S = o("WAWebMsgProcessingApiUtils").getFrom(i);
		switch (o("WAWebPostE2eMessageRecvMetric").postFailureE2eMessageRecvMetric({
			enc: y,
			from: S,
			msgMeta: l,
			msgInfo: i,
			msgBotInfo: a,
			error: C instanceof o("WAWebHandleMsgError").MessageValidationError ? C : null
		}), o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"decryptE2EPayload: msgId::",
			" e2eType:",
			" error:",
			""
		])), i.externalId, y.e2eType, (n = C.stack) != null ? n : String(C)).tags("messaging"), v) {
			case b.SignalDuplicateMessage: break;
			case b.SignalRetryable:
			case b.UnknownDevice: {
				r("gkx")("26258") || o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg: decryption error");
				break;
			}
			case b.InvalidProtobuf: {
				C instanceof o("WAWebHandleMsgError").MessageValidationError && (o("WAWebIsOfficialClient").isUnofficialStanzaId(i.externalId) ? o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg from UC: " + C.name, { sampling: C.sendLogs === !0 ? .01 : C.sendLogs }) : r("gkx")("26259") && C instanceof o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes ? o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("(intern) handleMsg: " + C.name) : o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg: " + C.name, C.sendLogs === !0 ? void 0 : { sampling: C.sendLogs }));
				break;
			}
			case b.DeviceSentMessage: {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" infoType:",
					" isDirect:",
					" error:",
					""
				])), y.e2eType, i.type, i.isDirect, C).tags("messaging").sendLogs("handleMsg: parse device sent message error");
				break;
			}
			case b.HsmMismatch: {
				o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg: hsm mismatch error");
				break;
			}
			case b.BroadcastEphSettings: {
				o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg: failed to decrypt broadcast ephemeral settings");
				break;
			}
			case b.OrphanBotMsg: {
				o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["decryptE2EPayload: e2eType:", " orphan bot msg deferred"])), y.e2eType).tags("messaging").sendLogs("handleMsg: orphan bot message deferred");
				break;
			}
			case b.Unknown: {
				o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
					"decryptE2EPayload: e2eType:",
					" error:",
					""
				])), y.e2eType, C).tags("messaging").sendLogs("handleMsg: parse decrypted message error");
				break;
			}
		}
	}
	function D(e, t) {
		var n = t.pkOrMsgFailedEnc, r = t.skMsgFailedEnc, a = r != null ? r : n;
		if (a != null && o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()) {
			var i = e.msgInfo.chat;
			if ((i.isUser() || i.isGroup()) && !E(e)) {
				var l = null;
				switch (a.errorType) {
					case b.SignalRetryable:
					case b.SignalDuplicateMessage:
					case b.BroadcastEphSettings:
					case b.UnknownDevice:
					case b.OrphanBotMsg: break;
					case b.DeviceSentMessage:
					case b.InvalidProtobuf: {
						l = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
						break;
					}
					case b.HsmMismatch:
					case b.Unknown: {
						l = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
						break;
					}
				}
				if (l != null) {
					var s = e.msgInfo.externalId;
					o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
						"messageDrop: insert a debug placeholder for ",
						", reason: ",
						""
					])), s, a.errorType).tags("messaging"), o("WAWebHandleMsgProcess").processPlaceholderMsg({
						type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
						msgInfo: e.msgInfo,
						nackReason: l
					});
				}
			}
		}
	}
	function x() {
		if (!r("gkx")("26258")) {
			var e, t = (e = n("cr:4122") == null ? void 0 : n("cr:4122").isNextMessageDropped()) != null ? e : null;
			if (t == null) return;
			switch (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Dropping incoming message with ", " error"])), t), t) {
				case b.SignalRetryable: throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("errSignalErr");
				case b.SignalDuplicateMessage: throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("errDuplicateMsg");
				case b.InvalidProtobuf: throw new (o("WAWebHandleMsgError")).MessageValidationError("test", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
				case b.DeviceSentMessage: throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(1, 1);
				default: return;
			}
		}
	}
	l.DecryptionErrorType = b, l.createDecryptionHandler = L;
}), 98);
