__d("MawMessageSendService", [
	"FBLogger",
	"MAWExternalId",
	"MAWFrontendMediaUtils",
	"MAWMsgType",
	"MAWQplProxy",
	"MawBackendReached",
	"MpsTypes",
	"Promise",
	"QPLFlow",
	"WAGlobals",
	"WAJids",
	"WAResultOrError",
	"WAStanzaUtils",
	"WMIAttachmentPublisher",
	"WMIForwardMsgProcessor",
	"WMIMPSPublisher",
	"WMIMinosPublisher",
	"WMIProtobufBuilder",
	"WMIWAMessagePublisher",
	"WMIXmaValidationPreprocessor",
	"WmiMessageSendService",
	"WmiXmaMessagePublisher",
	"err",
	"fbLoggerNullThrow",
	"getSafeQplErrorMessage",
	"gkx",
	"justknobx",
	"memoizeWithArgs",
	"performanceAbsoluteNow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("memoizeWithArgs")(function() {
		return new (o("WmiMessageSendService")).MessageSendService({
			pipeline: [
				o("MawBackendReached").backendReachedLogger,
				o("WMIForwardMsgProcessor").forwardMsgProcessor,
				o("WmiMessageSendService").criticalSectionPipeline("maw_message_send_service", function() {
					return !0;
				}, [
					o("WMIAttachmentPublisher").attachmentPreprocessor,
					o("WmiXmaMessagePublisher").xmaPreprocessor,
					o("WMIWAMessagePublisher").waiPreprocessor,
					o("WMIProtobufBuilder").protobufBuilder
				].concat(r("justknobx")._("3894") ? [o("WMIXmaValidationPreprocessor").xmaValidationPreprocessor] : [], [
					o("WMIAttachmentPublisher").attachmentProcessor,
					o("WMIWAMessagePublisher").waiPublisher,
					o("WMIWAMessagePublisher").waiPostprocessor
				], r("gkx")("11214") ? [o("WMIMinosPublisher").minosPublisher] : []), {
					concurrency: 5,
					defaultSamplingRate: 500,
					promotionTimeoutMs: 500,
					timeoutMs: 24e4
				})
			],
			postSendPipeline: [o("WMIMPSPublisher").mpsPublisher]
		});
	}, function() {
		return "cache";
	});
	function c(t) {
		var a = t.msgIds[0].chat, i = o("MAWExternalId").generateExternalId(), l = {
			directive: {},
			messageId: o("MpsTypes").toMessageId(i),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(a)
		}, c = o("QPLFlow").startQPLFlow(r("qpl")._(25313175, "1551"), { annotations: {
			bool: { backendSetupReady: !0 },
			int: { timeMsSinceSessionStart: (s || (s = r("performanceAbsoluteNow")))() },
			string: {
				hostname: self.location.hostname,
				sentMessageType: "delete-for-me"
			}
		} });
		return u().publish({
			msgIds: t.msgIds,
			type: o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME
		}, l, c).then(function() {
			c.endSuccess();
		}, function(t) {
			return c.endFail("fail", { string: { errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t) } }), (e || (e = n("Promise"))).reject(t);
		});
	}
	function d(t) {
		var a = o("MAWExternalId").generateExternalId(), i = {
			directive: {},
			messageId: o("MpsTypes").toMessageId(a),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(t.chatJid)
		}, l = o("QPLFlow").startQPLFlow(r("qpl")._(25313175, "1551"), { annotations: {
			bool: { backendSetupReady: !0 },
			int: { timeMsSinceSessionStart: (s || (s = r("performanceAbsoluteNow")))() },
			string: {
				hostname: self.location.hostname,
				sentMessageType: "delete-thread"
			}
		} });
		return u().publish({
			chatJid: t.chatJid,
			lastMessageTimestamp: t.lastMessageTimestamp,
			type: o("MAWMsgType").MSG_TYPE.DELETE_THREAD
		}, i, l).then(function() {
			l.endSuccess();
		}, function(t) {
			return l.endFail("fail", { string: { errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t) } }), (e || (e = n("Promise"))).reject(t);
		});
	}
	function m(e) {
		var t, n = e.args.args, r = e.qplEventType, a = e.qplInstanceKey, i = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(r, { instanceKey: a }), l = e.args.chatJid, s = e.args.externalId, c = {
			directive: {},
			messageId: o("MpsTypes").toMessageId(s),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(l)
		};
		return u().publish({
			ephemeralSetting: n.ephemeralSetting,
			forwardingScore: ((t = n.forwardingScore) != null ? t : 0) + 1,
			isForwarded: !0,
			mediaGroupMetadata: n.mediaGroupMetadata,
			protocolMsgId: e.args.protocolMsgId,
			type: "forwardMsg"
		}, c, i).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: l,
				content: n.content,
				ephemeralSetting: n.ephemeralSetting,
				externalId: s,
				initiatingSource: n.initiatingSource,
				messageType: "sendMsg",
				quote: n.quote,
				source: n.source,
				specialTextSize: n.specialTextSize,
				xmaMessageType: n.xmaMessageType
			});
		});
	}
	function p(e) {
		var t = e.args, n = e.chatJid, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey, l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(a, { instanceKey: i });
		return u().publish({
			commands: t.commands,
			content: t.content,
			ephemeralSetting: t.ephemeralSetting,
			forwardingScore: t.forwardingScore,
			isForwarded: t.isForwarded,
			mentionedJids: t.mentionedJids,
			quote: t.quote,
			specialTextSize: t.specialTextSize,
			type: o("MAWMsgType").MSG_TYPE.TEXT
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				content: t.content,
				ephemeralSetting: t.ephemeralSetting,
				externalId: r,
				initiatingSource: t.initiatingSource,
				messageType: "sendMsg",
				quote: t.quote,
				source: t.source,
				specialTextSize: t.specialTextSize,
				xmaMessageType: t.xmaMessageType
			});
		});
	}
	function _(e) {
		var t = e.args, n = e.chatJid, a = e.externalId, i = e.qplEventType, l = e.qplInstanceKey, s = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(i, { instanceKey: l }), c = r("fbLoggerNullThrow")(t.quote, "quote is empty to bump");
		return u().publish({
			quote: c,
			type: o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(a),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		}, s).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				externalId: a,
				messageType: "bumpMsg",
				quote: t.quote,
				source: t.source
			});
		});
	}
	function f(e) {
		var t = e.args, n = e.attachmentType, a = e.chatJid, i = e.externalId, l = e.mimeType, s = e.plaintext, c = e.qplEventType, d = e.qplInstanceKey, m = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(c, { instanceKey: d });
		try {
			var p;
			m.addPoint("send_to_worker_end"), m.addAnnotations({ bool: { worker_zero_byte_file: s.byteLength === 0 } });
			var _ = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(l, void 0, n), f = _.mediaType, h = _.serverMediaType;
			return t.receiverFetchId != null ? g(t, a, i, l, f, m) : u().publish({
				accessibilityLabel: t.accessibilityLabel,
				arrayBuffer: s,
				attachmentType: n,
				duration: t.duration,
				ephemeralSetting: t.ephemeralSetting,
				filename: (p = t.filename) != null ? p : "document",
				forwardingScore: t.forwardingScore,
				hdType: t.hdType,
				height: t.height,
				isForwarded: t.isForwarded,
				isPtt: t.isPtt,
				isVideoGif: t.isVideoGif,
				jpegThumbnail: t.jpegThumbnail,
				jpegThumbnailHeight: t.jpegThumbnailHeight,
				jpegThumbnailWidth: t.jpegThumbnailWidth,
				mediaGroupMetadata: t.mediaGroupMetadata,
				mediaType: f,
				mimeType: l,
				quote: t.quote,
				serverMediaType: h,
				type: "Media",
				waveform: t.waveform,
				width: t.width
			}, {
				directive: {},
				messageId: o("MpsTypes").toMessageId(i),
				senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
				threadId: o("MpsTypes").toThreadId(a)
			}, m).then(function() {
				return o("WAResultOrError").makeResult({
					chatJid: a,
					content: t.content,
					ephemeralSetting: t.ephemeralSetting,
					externalId: i,
					fileType: l,
					initiatingSource: t.initiatingSource,
					isVideoGif: t.isVideoGif,
					messageType: "sendMsg",
					quote: t.quote,
					source: t.source,
					specialTextSize: t.specialTextSize,
					xmaMessageType: t.xmaMessageType
				});
			});
		} catch (e) {
			var y = e instanceof Error ? e : r("err")(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e));
			throw r("FBLogger")("wmi").tags(["send_media_msg_error"]).catching(y).mustfix("sendMediaMsg failed: %s", y.message), m.endFail("fail", { string: { send_message_error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e) } }), e;
		}
	}
	function g(e, t, n, r, a, i) {
		return u().publish({
			accessibilityLabel: e.accessibilityLabel,
			ephemeralSetting: e.ephemeralSetting,
			forwardingScore: e.forwardingScore,
			height: e.height,
			isForwarded: e.isForwarded,
			mediaType: a,
			quote: e.quote,
			receiverFetchId: e.receiverFetchId,
			type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH,
			width: e.width
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(n),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(t)
		}, i).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: t,
				content: e.content,
				ephemeralSetting: e.ephemeralSetting,
				externalId: n,
				fileType: r,
				initiatingSource: e.initiatingSource,
				messageType: "sendMsg",
				quote: e.quote,
				source: e.source,
				specialTextSize: e.specialTextSize
			});
		});
	}
	function h(e) {
		var t = e.args, n = e.chatJid, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey, l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(a, { instanceKey: i });
		return u().publish(babelHelpers.extends({}, t.editMsgContent, {
			originalProtocolMsgId: t.originalProtocolMsgId,
			type: o("MAWMsgType").MSG_TYPE.EDIT_ACTION
		}), {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				externalId: r,
				messageType: "editMsg",
				specialTextSize: t.specialTextSize
			});
		});
	}
	function y(e) {
		var t = e.args, n = e.externalId, r = e.qplEventType, a = e.qplInstanceKey, i = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(r, { instanceKey: a });
		return u().publish({
			ephemeralSetting: t.ephemeralSetting,
			expiration: t.expiration,
			groupJid: t.groupJid,
			groupName: t.groupName,
			inviteCode: t.inviteCode,
			invitedParticipantUserJid: t.invitedParticipantUserJid,
			inviterUserJid: t.inviterUserJid,
			quote: t.quote,
			type: o("MAWMsgType").MSG_TYPE.GROUP_INVITE
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(n),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(t.groupJid)
		}, i).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: t.groupJid,
				content: t.content,
				ephemeralSetting: t.ephemeralSetting,
				externalId: n,
				initiatingSource: t.initiatingSource,
				messageType: "sendMsg",
				quote: t.quote,
				source: t.source,
				specialTextSize: t.specialTextSize,
				xmaMessageType: t.xmaMessageType
			});
		});
	}
	function C(e) {
		var t = e.args, n = e.chatJid, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey, l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(a, { instanceKey: i });
		return u().publish({
			groupIndex: t.groupIndex,
			groupingKey: t.groupingKey,
			reaction: t.reaction,
			reactToAuthor: t.reactToAuthor,
			reactToProtocolMsgId: babelHelpers.extends({}, t.reactToProtocolMsgId, { author: o("WAJids").isAuthorMe(t.reactToProtocolMsgId.author) ? o("WAGlobals").getMyUserJid() : t.reactToProtocolMsgId.author }),
			type: o("MAWMsgType").MSG_TYPE.REACTION
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				externalId: r,
				messageType: "reactionMsg",
				reaction: t.reaction,
				source: t.source
			});
		});
	}
	function b(e) {
		var t = e.messageExpiryTimestampMs, n = e.msgId, r = e.qplEventType, a = e.qplInstanceKey, i = o("MAWExternalId").generateExternalId(), l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(r, { instanceKey: a });
		return u().publish({
			messageExpiryTimestampMs: t,
			msgId: n,
			type: o("MAWMsgType").MSG_TYPE.REVOKED
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(i),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n.chat)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n.chat,
				externalId: i,
				messageType: "revokeMsg",
				referencedExternalId: n.externalId
			});
		});
	}
	function v(e) {
		var t = e.args, n = e.chatJid, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey, l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(a, { instanceKey: i });
		return u().publish({
			commands: t.commands,
			content: t.content,
			ephemeralSetting: t.ephemeralSetting,
			forwardingScore: t.forwardingScore,
			isForwarded: t.isForwarded,
			mentionedJids: t.mentionedJids,
			noteContent: t.noteContent,
			noteExpirationTs: t.noteExpirationTs,
			quote: t.quote,
			specialTextSize: t.specialTextSize,
			type: o("MAWMsgType").MSG_TYPE.NOTE_REPLY
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				externalId: r,
				messageType: "noteReplyMsg",
				quote: t.quote
			});
		});
	}
	function S(e) {
		var t = e.args, n = e.chatJid, r = e.faviconFile, a = e.headerFile, i = e.previewFile, l = e.qplEventType, s = e.qplInstanceKey, c = e.xmaArgs, d = e.xmaDataclass, m = e.xmaMsgExternalId, p = e.associatedMsgContent, _ = e.associatedMsgContentExternalId, f = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(l, { instanceKey: s }), g = {
			directive: {},
			messageId: o("MpsTypes").toMessageId(m),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(n)
		};
		return p || (p = void 0, _ = void 0), u().publish({
			accessibilityLabel: t.accessibilityLabel,
			commands: t.commands,
			content: t.content,
			ephemeralSetting: t.ephemeralSetting,
			forwardingScore: t.forwardingScore,
			isForwarded: t.isForwarded,
			mentionedJids: t.mentionedJids,
			quote: t.quote,
			specialTextSize: t.specialTextSize,
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xma: {
				args: c,
				associatedMsgContent: p,
				associatedMsgContentExternalId: _,
				faviconFile: r,
				headerFile: a,
				previewFile: i
			},
			xmaDataclass: d != null ? d : null,
			xmaMessageType: t.xmaMessageType
		}, g, f).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: n,
				content: t.content,
				ephemeralSetting: t.ephemeralSetting,
				externalId: o("WAStanzaUtils").toStanzaId(g.messageId),
				initiatingSource: t.initiatingSource,
				messageType: "sendMsg",
				quote: t.quote,
				source: t.source,
				specialTextSize: t.specialTextSize,
				xmaMessageType: t.xmaMessageType
			});
		});
	}
	function R(e) {
		var t = e.chatJid, n = e.ephemeralSetting, r = e.externalId, a = e.isEphemeralSettingReset, i = e.qplEventType, l = e.qplInstanceKey, s = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(i, { instanceKey: l });
		return u().publish({
			ephemeralSetting: n,
			isEphemeralSettingReset: a,
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(t)
		}, s).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: t,
				ephemeralSetting: n,
				externalId: r,
				messageType: "ephemeralSettingMsg"
			});
		});
	}
	function L(e) {
		var t = e.chatJid, n = e.ephemeralSetting, r = e.externalId, a = e.qplEventType, i = e.qplInstanceKey, l = o("MAWQplProxy").continueQplAsCrossBridgeQplFlow(a, { instanceKey: i });
		return u().publish({
			ephemeralSetting: n,
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE
		}, {
			directive: {},
			messageId: o("MpsTypes").toMessageId(r),
			senderId: o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
			threadId: o("MpsTypes").toThreadId(t)
		}, l).then(function() {
			return o("WAResultOrError").makeResult({
				chatJid: t,
				ephemeralSetting: n,
				externalId: r,
				messageType: "ephemeralSettingMsg"
			});
		});
	}
	l.messagePublishService = u, l.sendDeleteMsgForMe = c, l.sendDeleteThread = d, l.sendForwardedMsg = m, l.sendTextMsg = p, l.sendBumpMsg = _, l.sendMediaMsg = f, l.sendEditMsg = h, l.sendGroupInviteMsg = y, l.sendReactionMsg = C, l.sendRevokeMsg = b, l.sendNoteReplyMsg = v, l.sendXMAShareMsg = S, l.sendEphemeralSettingChangeMsg = R, l.sendEphemeralSyncResponseMsg = L;
}), 98);
