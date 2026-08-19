__d("WAWebNewsletterSendStatusReactionAction", [
	"WALogger",
	"WATimeUtils",
	"WAWebChatThreadLogging",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebFrontendMsgGetters",
	"WAWebMsgKey",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterReactionCollection",
	"WAWebNewsletterSendStatusJob",
	"WAWebNewsletterValidationUtils",
	"WAWebReactionsUtils",
	"WAWebSendMsgResultAction",
	"WAWebStatusInteractionSentWamEvent",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumStatusInteractionActors",
	"WAWebWamEnumStatusInteractionMessageType",
	"WAWebWamEnumStatusInteractionResultType",
	"WAWebWamEnumStatusInteractionType",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = t.serverId;
			if (a == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][reaction] parent status missing serverId"]))), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
			var i = o("WAWebFrontendMsgGetters").getChat(t);
			if (!o("WAWebReactionsUtils").isNewsletterReactionAllowed(n, i)) return o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][reaction] reaction not allowed"]))), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
			try {
				var l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(i.id.toJid()), d = yield r("WAWebMsgKey").newId(), m = yield o("WAWebNewsletterSendStatusJob").sendNewsletterStatus({
					type: "reaction",
					newsletterJid: l,
					reactionId: d,
					parentStatusServerId: a,
					reactionCode: n
				});
				return m.success ? (yield _(t, a, n), g(i.id, a, n), o("WAWebSendMsgResultAction").SendMsgResult.OK) : (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][reaction] send failed: ", ""])), m.ack.error).tags("newsletter", "status").sendLogs("newsletter-status-reaction-send-failed"), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK);
			} catch (e) {
				return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][reaction] send threw"]))).tags("newsletter", "status").sendLogs("newsletter-status-reaction-send-threw"), o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
			}
		}), p.apply(this, arguments);
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			try {
				var r = o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(t, e.id.remote).toString(), a = {
					parentMsgKey: r,
					senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
					reactionText: n,
					timestamp: o("WATimeUtils").unixTimeMs(),
					orphan: 0,
					msgKey: r
				};
				yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([a]), o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.gadd({ id: e.id }).updateMyReaction(n);
			} catch (e) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][reaction] local persist failed"]))).tags("newsletter", "status").sendLogs("newsletter-status-reaction-persist-failed");
			}
		}), f.apply(this, arguments);
	}
	function g(e, t, n) {
		n !== "" && (o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
			activityType: "statusReactionsSent",
			ts: o("WATimeUtils").unixTime(),
			chatId: e
		}]), new (o("WAWebStatusInteractionSentWamEvent")).StatusInteractionSentWamEvent({
			statusInteractionType: o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE.REACTION,
			statusInteractionMessageType: o("WAWebWamEnumStatusInteractionMessageType").STATUS_INTERACTION_MESSAGE_TYPE.LIKE,
			statusInteractionResultType: o("WAWebWamEnumStatusInteractionResultType").STATUS_INTERACTION_RESULT_TYPE.OK,
			statusInteractionActors: o("WAWebWamEnumStatusInteractionActors").STATUS_INTERACTION_ACTORS.POSTER_VIEWER,
			cid: e.user,
			channelStatusId: t
		}).commit());
	}
	l.sendNewsletterStatusReaction = m;
}), 98);
