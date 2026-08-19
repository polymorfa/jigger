__d("WAWebSendBroadcastMsgAction", [
	"WALogger",
	"WAWebAck",
	"WAWebBatchUpdateBroadcastAck",
	"WAWebBroadcastEphemeralUtils",
	"WAWebBroadcastMsgCollectionUtils",
	"WAWebBroadcastODS",
	"WAWebBuildBroadcastMsgModels",
	"WAWebDBMessageBulkHelper",
	"WAWebEncryptAndSendBroadcastMsg",
	"WAWebEphemeralEncodeBroadcastSetting",
	"WAWebHandleMsgError",
	"WAWebMessageProcessUtils",
	"WAWebMessageSendReporter",
	"WAWebMessageSendReporterFrontendDeps",
	"WAWebMsgCollection",
	"WAWebMsgModelUtils",
	"WAWebMsgUtilsBridge",
	"WAWebOutgoingMessage",
	"WAWebSendMsgResultAction",
	"WAWebSendMsgTypes",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumMessageSendResultType",
	"WAWebWidFactory",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C;
	function b() {
		return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
	}
	async function v(t) {
		try {
			var n = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(t);
			if (n == null) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:ctl] no fanout keys; skipping CTL emission"])));
				return;
			}
			var a = [];
			for (var i of n) {
				var l = o("WAWebMsgCollection").MsgCollection.get(i);
				if (l == null) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:ctl] missing clone for fanoutKey=", ""])), i.toString());
					continue;
				}
				a.push(o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(l));
			}
			await Promise.all(a);
		} catch (e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:ctl] emission failed"]))).catching(r("getErrorSafe")(e));
		}
	}
	async function S(e) {
		var t = e.authorId, n = e.businessMetadata, a = e.ephemeralSharedSecret, i = e.ephSettingMap, l = e.msg, s = e.recipients, u = e.reporter, f = l.id.toString(), g = s.length;
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"[broadcast:send] start msgId=",
			" rcpts=",
			""
		])), f, g);
		var h = {
			type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
			data: l
		}, y = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat, h), C = i;
		if (a != null) {
			var b = o("WAWebBroadcastEphemeralUtils").addSharedSecretToProto(y, a), S = b.injected, R = b.proto;
			y = R, S || (C = null);
		}
		o("WAWebBroadcastODS").bumpBroadcastSend();
		try {
			await o("WAWebEncryptAndSendBroadcastMsg").encryptAndSendBroadcastMsg(h, y, s, t, n, C);
			var L = await o("WAWebBatchUpdateBroadcastAck").batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.SENT);
			return L != null && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] Batch ack update failed after send: error=", ""])), L).sendLogs("broadcast-batch-ack-sent-" + L), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"[broadcast:send] Successfully sent: msgId=",
				", ack=",
				""
			])), f, o("WAWebAck").ACK.SENT), o("WAWebBroadcastODS").bumpBroadcastSendSuccess(), u.postSuccess(), L == null && v(l), {
				messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
				msgId: f
			};
		} catch (e) {
			var E = await o("WAWebBatchUpdateBroadcastAck").batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.FAILED);
			E != null && o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] batch ack failed post-send err=", ""])), E).sendLogs("broadcast-batch-ack-failed-" + E), o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"[broadcast:send] Send failed: recipientCount=",
				", ack=",
				""
			])), g, o("WAWebAck").ACK.FAILED).catching(r("getErrorSafe")(e)).sendLogs("broadcast-send-failure"), o("WAWebBroadcastODS").bumpBroadcastSendError(), u.postFailure({
				isTerminal: !1,
				result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN
			});
			var k = e instanceof o("WAWebHandleMsgError").MessageSentAckError ? e.ackErrorCode : null;
			return {
				messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
				msgId: f,
				ackErrorCode: k
			};
		}
	}
	async function R(e) {
		var t = e.msgData, n = b(), a = await Promise.all(e.recipients.map(async function(e) {
			try {
				var t = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({ lid: e }), n = t.chatId;
				return o("WAWebWidFactory").asUserWidOrThrow(n);
			} catch (t) {
				return e;
			}
		})), i = e.recipients.map(function(e, t) {
			return {
				lid: e,
				resolved: a[t]
			};
		}), l = null, s = null;
		try {
			var u = await L(t, i, n);
			u != null && (l = u.sharedSecret, s = u.ephSettingMap);
		} catch (e) {
			o("WAWebBroadcastODS").bumpBroadcastEphemeralSetupError(), o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] ephemeral setup failed, sending without DM"]))).catching(r("getErrorSafe")(e)).sendLogs("broadcast-ephemeral-setup-failed");
		}
		var c = o("WAWebBuildBroadcastMsgModels").buildBroadcastMsgModelsFromMsgData(t, a), d = o("WAWebBuildBroadcastMsgModels").bulkBroadcastMessagesToBulkUpdateInput(c), m = d.chatsIdWithNewMsgs, p = d.msgs;
		await o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(p, m);
		var _ = o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(c.mainMessage, c.messageClones), v = new (o("WAWebMessageSendReporter")).MessageSendReporter(_, { frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS });
		v.setParticipantCount(e.recipients.length);
		var R = e.beforeSend;
		try {
			R != null && (await _.waitForPrep(), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] Media prep complete: msgId=", ""])), _.id), await R(_), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] Media upload complete: msgId=", ""])), _.id), await o("WAWebBuildBroadcastMsgModels").propagateMediaFieldsToBroadcastClones(_), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] media fields persisted to clones msgId=", ""])), _.id));
		} catch (e) {
			return o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[broadcast:send] Media prep/upload failed"]))).catching(r("getErrorSafe")(e)).sendLogs("broadcast-media-prep-upload-error"), o("WAWebBroadcastODS").bumpBroadcastSendError(), v.postFailure({
				isTerminal: !1,
				result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD
			}), await _.updateAck(o("WAWebAck").ACK.FAILED), {
				messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD,
				msgId: _.id.toString()
			};
		}
		return S({
			authorId: n,
			businessMetadata: e.businessMetadata,
			ephemeralSharedSecret: l,
			ephSettingMap: s,
			msg: _,
			recipients: e.recipients,
			reporter: v
		});
	}
	async function L(e, t, n) {
		var r = await Promise.all(t.map(async function(e) {
			var t = e.lid, n = e.resolved;
			return {
				lid: t,
				setting: await o("WAWebBroadcastEphemeralUtils").getBroadcastEphemeralSettingForRecipient(n)
			};
		}));
		if (!r.some(function(e) {
			var t = e.setting;
			return t.duration > 0;
		})) return null;
		var a = o("WAWebEphemeralEncodeBroadcastSetting").generateEphemeralSharedSecret(), i = e.to, l = new Map(), s = [].concat(r, [{
			lid: n,
			setting: {
				duration: 0,
				timestamp: 0
			}
		}]);
		return await Promise.all(s.map(async function(e) {
			var t = e.lid, r = e.setting, s = await o("WAWebEphemeralEncodeBroadcastSetting").encodeBroadcastEphemeralSetting({
				broadcastJid: i,
				duration: r.duration,
				recipient: t,
				sender: n,
				sharedSecret: a,
				timestamp: r.timestamp
			});
			l.set(t.toString(), s);
		})), {
			sharedSecret: a,
			ephSettingMap: l
		};
	}
	l.sendBroadcastMsgAction = R;
}), 98);
