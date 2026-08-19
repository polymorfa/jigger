__d("WAWebNewsletterSendReactionAction", [
	"WAAckLevel",
	"WAJobOrchestratorTypes",
	"WALogger",
	"WATimeUtils",
	"WAWebAddOnsUpdateSendStatesAction",
	"WAWebDBGetReactions",
	"WAWebFrontendMsgGetters",
	"WAWebMsgCollection",
	"WAWebMsgDataFromModel",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebNewsletterBridgeApi",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterReactionCollection",
	"WAWebNewsletterSendMessageJob",
	"WAWebNewsletterUpdateMsgsRecordsJob",
	"WAWebNewsletterValidationUtils",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebReactionsBEUtils",
	"WAWebReactionsMsgAction",
	"WAWebReactionsMsgActionUtils",
	"WAWebReactionsUtils",
	"WAWebSchemaMessage",
	"WAWebSendMsgResultAction",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d(t, n) {
		var a = t instanceof r("WAWebMsgKey") ? [o("WAWebMsgCollection").MsgCollection.get(t), t] : [t, t.id], i = a[0], l = a[1];
		if (i == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sendNewsletterReaction] Could not find message for msgKey"]))), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
		var d = i.serverId;
		if (d == null) return o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sendNewsletterReaction] Message missing serverId"]))), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
		var p = o("WAWebFrontendMsgGetters").getChat(i);
		if (!o("WAWebReactionsUtils").isNewsletterReactionAllowed(n, p)) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sendNewsletterReaction] emoji not allowed"]))), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
		var _ = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), f = p.id, g = o("WATimeUtils").unixTime(), h = g * 1e3, y = new (r("WAWebMsgKey"))({
			from: _,
			to: f,
			id: await r("WAWebMsgKey").newId()
		}), C = await o("WAWebReactionsMsgActionUtils").getReactionMsgData({
			from: _,
			globalClockUnixTimeSeconds: g,
			msg: i,
			msgKey: y,
			reaction: n,
			reactionTimestamp: h,
			to: f
		}), b = {
			msgKey: y.toString(),
			parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(d, f).toString(),
			senderUserJid: _.toString(),
			reactionText: n,
			timestamp: h,
			orphan: 0,
			read: !0,
			ack: o("WAAckLevel").ACK.CLOCK
		}, v = new (o("WAWebMsgModel")).Msg(C);
		return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendNewsletterReaction", async function() {
			var e = await o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
				parentMsgKey: b.parentMsgKey,
				senderUserJid: b.senderUserJid
			});
			n !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT && (await m(i, v, { reactionCode: n }), await o("WAWebReactionsMsgAction").addOrUpdateReactions(b, !1), await o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateChatPreviewFromReaction({
				reactionMsgObj: b,
				parentMsgKey: l
			}));
			try {
				e != null && await o("WAWebSchemaMessage").getMessageTable().remove(e.msgKey), await o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords([o("WAWebMsgDataFromModel").msgDataFromMsgModel(v)]);
				var t = await o("WAWebNewsletterSendMessageJob").sendNewsletterMessage({
					type: "reaction",
					reactionCode: n,
					newsletterJid: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(f.toJid()),
					parentMsgServerId: d,
					msg: v
				});
				switch (t.success) {
					case !0: return await m(i, v, {
						reactionCode: n === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT ? n : null,
						timestamp: t.ack.t
					}), n === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT && (await o("WAWebReactionsMsgAction").addOrUpdateReactions(b, !1), await o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateChatPreviewFromReaction({
						reactionMsgObj: b,
						parentMsgKey: l
					})), o("WAWebSendMsgResultAction").SendMsgResult.OK;
					case !1: return v.updateAck(o("WAAckLevel").ACK.FAILED), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
				}
			} catch (e) {
				return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletter] Failed to send reaction"]))).tags("newsletter"), v.updateAck(o("WAAckLevel").ACK.FAILED, void 0), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
			}
		}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted();
	}
	async function m(e, t, n) {
		var r = n.reactionCode, a = n.timestamp;
		if (r != null && o("WAWebNewsletterReactionCollection").updateOrCreateMessageReaction({
			parentMsg: e,
			reactionMsg: t,
			reactionCode: r
		}), a != null) {
			var i;
			(i = o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.get(e.id)) == null || i.set("myReactionTs", a), t.updateAck(o("WAAckLevel").ACK.SENT), await o("WAWebAddOnsUpdateSendStatesAction").maybeUpdateAddOnAckForMsgAction(t, o("WAAckLevel").ACK.SENT);
		}
	}
	l.sendNewsletterReaction = d;
}), 98);
