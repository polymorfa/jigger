__d("WAWebStatusReactionCTLLogging", [
	"WALogger",
	"WATimeUtils",
	"WAWebChatThreadLogging",
	"WAWebReactionsBEUtils",
	"WAWebStatusInteractionReceivedWamEvent",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumStatusInteractionActors",
	"WAWebWamEnumStatusInteractionMessageType",
	"WAWebWamEnumStatusInteractionResultType",
	"WAWebWamEnumStatusInteractionType",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t) {
		var n, r = t.reactionParentKey;
		if (!r.fromMe || !r.remote.isStatus() || t.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) return null;
		var a = (n = t.author) != null ? n : t.from;
		if (a == null || o("WAWebUserPrefsMeUser").isSerializedWidMe(a.toString())) return null;
		try {
			return o("WAWebWidFactory").asUserWidOrThrow(a);
		} catch (t) {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[status][reaction] skipped engagement for unresolvable sender"]))).sendLogs("status-reaction-received-logging-failed"), null;
		}
	}
	function u(e) {
		var t = [];
		for (var n of e) {
			var r = s(n);
			r != null && (t.push({
				activityType: "statusReactionsReceived",
				ts: o("WATimeUtils").unixTime(),
				chatId: r
			}), new (o("WAWebStatusInteractionReceivedWamEvent")).StatusInteractionReceivedWamEvent({
				statusInteractionActors: o("WAWebWamEnumStatusInteractionActors").STATUS_INTERACTION_ACTORS.POSTER_VIEWER,
				statusInteractionMessageType: o("WAWebWamEnumStatusInteractionMessageType").STATUS_INTERACTION_MESSAGE_TYPE.LIKE,
				statusInteractionResultType: o("WAWebWamEnumStatusInteractionResultType").STATUS_INTERACTION_RESULT_TYPE.OK,
				statusInteractionType: o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE.REACTION
			}).commit());
		}
		t.length > 0 && o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(t);
	}
	l.logReceivedStatusReactionEngagement = u;
}), 98);
