__d("WAWebNewsletterReactionCollection", [
	"WATimeUtils",
	"WAWebBaseCollection",
	"WAWebDBGetReactions",
	"WAWebGetUserMediaErrors",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterReactionModel",
	"WAWebReactionsBEUtils",
	"WAWebUserPrefsMeUser",
	"WAWebdbCRUDOperationsNewsletterReaction"
], (function(t, n, r, o, a, i, l) {
	var e = (function(e) {
		function t() {
			for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
			return t = e.call.apply(e, [this].concat(a)) || this, t.findImpl = async function(e) {
				var t = await o("WAWebdbCRUDOperationsNewsletterReaction").getNewsletterReaction(e), n = await o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([e]), a = n[0];
				if (a == null) throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No reactions found");
				var i = a.id.remote.toJid(), l = a.serverId, s = l != null ? await o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(l, i) : null, u = s != null ? await o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
					parentMsgKey: s.toString(),
					senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid()
				}) : null;
				if (t == null && u == null) throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No reactions to display");
				var c = { id: r("WAWebMsgKey").fromString(e) };
				return l != null && (c.parentMsgServerId = l), t != null && (c.reactionCountMap = t.emojiCountMap, c.reactionCountMapTs = o("WATimeUtils").castToUnixTime(t.serverTimestamp)), u != null && u.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT && (c.myReactionMsgKey = r("WAWebMsgKey").from(u.msgKey), c.myReaction = u.reactionText, c.myReactionTs = o("WATimeUtils").castToUnixTime(u.timestamp)), c;
			}, babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(o("WAWebBaseCollection").BaseCollection);
	e.model = o("WAWebNewsletterReactionModel").NewsletterMessageReactions;
	var s = new e();
	function u(e) {
		var t = e.parentMsg, n = e.reactionCode, r = e.reactionMsg, o = s.gadd({
			id: t.id,
			myReactionMsgKey: r.id
		});
		return o.updateMyReaction(n), o;
	}
	l.NewsletterMessageReactionsCollection = s, l.updateOrCreateMessageReaction = u;
}), 98);
