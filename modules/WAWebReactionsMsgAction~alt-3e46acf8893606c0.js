__d("WAWebReactionsMsgAction", [
	"WAAbortError",
	"WAJobOrchestratorTypes",
	"WALogger",
	"WAWebAck",
	"WAWebAddOnsUpdateSendStatesAction",
	"WAWebAddonGatingUtils",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebLidMigrationUtils",
	"WAWebMaybe",
	"WAWebMessageAddOnType",
	"WAWebMsgCollection",
	"WAWebMsgModel",
	"WAWebMsgReactionsBridge",
	"WAWebNotificationBackend",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebReactionDataUtils",
	"WAWebReactionNotificationUtils",
	"WAWebReactionsBEUtils",
	"WAWebReactionsCollection",
	"WAWebReactionsMsgActionUtils",
	"WAWebSendAddonMsgChatAction",
	"WAWebSendMsgRecordAction",
	"WAWebSendMsgResultAction",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s = ["senderUserJid"];
	async function u(e, t) {
		var n = t.allowNotify, r = e.parentMsgKey, a = o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e), i = !!n && !o("WAWebReactionNotificationUtils").nonHydratedShouldMuteReactionNotification(a), l;
		if (i ? l = await o("WAWebReactionsCollection").ReactionsCollection.find(r) : l = o("WAWebReactionsCollection").ReactionsCollection.getAddressingModeInsensitive(r), l) {
			o("WAWebReactionsCollection").ReactionsCollection.addOrUpdateReaction(e);
			var s = l.reactions.length > 0;
			await o("WAWebMsgReactionsBridge").updateHasReactionInParent(r, s);
		} else e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT && await o("WAWebMsgReactionsBridge").updateHasReactionInParent(r, !0);
	}
	async function c(e, t) {
		var n = await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([e]), r = n[0];
		if (r) return u(r, { allowNotify: t }), r;
	}
	async function d(t) {
		var n, r = t.senderUserJid, a = babelHelpers.objectWithoutPropertiesLoose(t, s), i = (n = o("WAWebReactionsCollection").ReactionsCollection.getExistingSenderModelFromReactionDetails(a)) != null ? n : o("WAWebMaybe").ifSome(o("WAWebLidMigrationUtils").getAlternateMsgKey(a.msgKey), function(e) {
			return o("WAWebReactionsCollection").ReactionsCollection.getExistingSenderModelFromReactionDetails(babelHelpers.extends({}, a, { msgKey: e }));
		});
		if (i == null) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["resendUpdateFailedPropsForSentReactionsDBAndModel: no model"])));
			return;
		}
		await m(t, i.timestamp);
	}
	async function m(e, t) {
		var n = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey), a = e.parentMsgKey, i = e.msgKey;
		if (n) {
			var l = a.remote, s = o("WAWebReactionsMsgActionUtils").getFromForReactionMessage(n), u = await o("WAWebReactionsMsgActionUtils").getReactionMsgData({
				from: s,
				globalClockUnixTimeSeconds: Math.floor(t / 1e3),
				msg: n,
				msgKey: i,
				reaction: e.reactionText,
				reactionTimestamp: t,
				to: l
			});
			if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(u)) {
				var c = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(u);
				if (c.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) throw r("err")("Reaction send error");
				return;
			}
			var d = new (o("WAWebMsgModel")).Msg(u);
			return await o("WAWebAddOnsUpdateSendStatesAction").updateAddOnSendStatesAction(new Map([[o("WAWebMessageAddOnType").MessageAddOnType.Reaction, [{
				msgKey: e.msgKey.toString(),
				ack: o("WAWebAck").ACK.CLOCK,
				isSendFailure: !1
			}]]])), o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", async function() {
				return o("WAWebSendMsgRecordAction").sendMsgRecord(d);
			}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted();
		}
	}
	function p(e) {
		for (var t of e) {
			var n = !o("WAWebReactionNotificationUtils").nonHydratedShouldMuteReactionNotification(t);
			n && o("WAWebNotificationBackend").showReactionNotification(t).catch(o("WAAbortError").catchAbort(function(e) {}));
		}
	}
	l.addOrUpdateReactionsModelCollection = u, l.addOrUpdateReactions = c, l.resendUpdateFailedPropsForSentReactionsDBAndModel = d, l.handleReactionNotification = p;
}), 98);
