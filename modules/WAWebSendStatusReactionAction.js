__d("WAWebSendStatusReactionAction", [
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebAddonConstants",
	"WAWebAddonProcessMsgs",
	"WAWebChatThreadLogging",
	"WAWebDBDeviceListFanout",
	"WAWebDBGetReactions",
	"WAWebEncryptAndSendStatusMsg",
	"WAWebLidStatusMigrationUtils",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebMsgKeyUtils",
	"WAWebMsgModel",
	"WAWebMsgType",
	"WAWebOutgoingMessage",
	"WAWebReactionsUtils",
	"WAWebReferentialMsgKey",
	"WAWebSendMsgMetricReporter",
	"WAWebSendMsgTypes",
	"WAWebSessionScope",
	"WAWebStatusInteractionSentWamEvent",
	"WAWebStatusSessionGatingUtils",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWamEnumStatusInteractionActors",
	"WAWebWamEnumStatusInteractionMessageType",
	"WAWebWamEnumStatusInteractionResultType",
	"WAWebWamEnumStatusInteractionType",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			try {
				var a = r("nullthrows")(o("WAWebMsgGetters").getSender(t)), i = o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow()), l = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebLidStatusMigrationUtils").matWidConvert(a)), s = new (r("WAWebMsgKey"))({
					fromMe: !0,
					remote: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
					id: yield r("WAWebMsgKey").newId(),
					participant: l
				}), u = yield c({
					msgKey: s,
					reaction: n,
					parent: t
				}), d = yield o("WAWebAddonProcessMsgs").processOutgoingMsgOptimisticUpdate(o("WAWebAddonConstants").AddonProcessMode.Send, u), m = {
					type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
					data: d.encryptedMsgData
				}, p = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status, m), _ = yield o("WAWebDBDeviceListFanout").getFanOutList({
					wids: [l, i],
					shouldMergeAltDevices: !0
				});
				yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusDirectMsg({
					deviceList: _,
					metricsReporter: o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(new (o("WAWebMsgModel")).Msg(u)),
					msgProtobuf: p,
					sendMsgRecord: m,
					sessionScope: o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForOutgoingMessage() ? o("WAWebSessionScope").SessionScope.STATUS : o("WAWebSessionScope").SessionScope.DEFAULT
				}), o("WAWebReactionsUtils").updateRecentReaction(n, u.reactionTimestamp), n !== "" && (o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
					activityType: "statusReactionsSent",
					ts: o("WATimeUtils").unixTime(),
					chatId: l
				}]), new (o("WAWebStatusInteractionSentWamEvent")).StatusInteractionSentWamEvent({
					statusInteractionType: o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE.REACTION,
					statusInteractionMessageType: o("WAWebWamEnumStatusInteractionMessageType").STATUS_INTERACTION_MESSAGE_TYPE.LIKE,
					statusInteractionResultType: o("WAWebWamEnumStatusInteractionResultType").STATUS_INTERACTION_RESULT_TYPE.OK,
					statusInteractionActors: o("WAWebWamEnumStatusInteractionActors").STATUS_INTERACTION_ACTORS.POSTER_VIEWER
				}).commit());
			} catch (t) {
				throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendStatusReaction: failed with ", ""])), t).sendLogs("status-reaction-send-error"), r("err")("Status reaction send error");
			}
		}), u.apply(this, arguments);
	}
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.msgKey, n = e.parent, r = e.reaction, a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), i = o("WATimeUtils").unixTime(), l = i * 1e3, s = yield o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
				parentMsgKey: n.id.toString(),
				senderUserJid: a.from.toString()
			});
			return s && (l = Math.max(s.timestamp + 1, l)), babelHelpers.extends({ id: t }, a, {
				reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(n),
				type: o("WAWebMsgType").MSG_TYPE.REACTION,
				kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
				t: i,
				viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
				ack: o("WAWebAck").ACK.CLOCK,
				reactionText: r,
				reactionTimestamp: l,
				read: !0
			});
		}), d.apply(this, arguments);
	}
	l.sendStatusReaction = s, l.buildStatusReactionMsgData = c;
}), 98);
