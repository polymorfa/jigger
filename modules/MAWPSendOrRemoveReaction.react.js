__d("MAWPSendOrRemoveReaction.react", [
	"I64",
	"Int64Hooks",
	"LSMessagingThreadAttributionType",
	"MAWExternalId",
	"MAWODSProxy",
	"MWInboxFollowUps",
	"MWLSThread",
	"MWPActor.react",
	"WAOdsEnums",
	"cr:9778",
	"promiseDone",
	"requireDeferred",
	"sendToSentQPLLogger",
	"useIsLastNonAdminMessage",
	"useIsSecureMessage",
	"useLSMessagingSource",
	"useMWPSendOrUnsendReaction",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("MWLogMessageAction").__setRef("MAWPSendOrRemoveReaction.react");
	function c(t, a, i) {
		var l, c = (s || (s = r("useReStore")))(), d = o("MWPActor.react").useActor(), m = (l = n("cr:9778") == null ? void 0 : n("cr:9778").useSendOrRemoveReaction(t.threadKey, (e || (e = o("I64"))).to_string(t.senderId))) != null ? l : null, p = r("useIsSecureMessage")(c, t, { fallbackIsSecure: a }), _ = r("useIsLastNonAdminMessage")(t.threadKey, t.messageId), f = r("useMWPSendOrUnsendReaction")(t), g = r("useLSMessagingSource")(), h = o("MWLSThread").useThread(t.threadKey);
		return o("Int64Hooks").useMemoInt64(function() {
			return (function(e, n, l, s) {
				if (_ && o("MWInboxFollowUps").touchThreadMetadata(t.threadKey), p && m !== null) {
					var g = o("MAWExternalId").generateExternalId(), y = function(r) {
						return m(e, n, r, g, s).then(function(e) {
							return [e];
						});
					}, C = o("sendToSentQPLLogger").markSendToSentStartWithAnnotation(h, { isReaction: !0 }, r("LSMessagingThreadAttributionType").UNKNOWN, void 0, void 0, g);
					r("promiseDone")(y(C)), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_SEND_REACTION,
						key: "post-cutover_msg"
					});
				} else a && o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_SEND_REACTION,
					key: "pre-cutover_msg"
				}), f(n != null ? n : "");
				u.onReady(function(e) {
					return r("promiseDone")(e.log(c, t.messageId, t.threadKey, i, l, void 0, void 0, void 0, t.senderId, void 0, d));
				});
			});
		}, [
			_,
			p,
			m,
			a,
			f,
			c,
			g,
			h,
			t.messageId,
			t.threadKey,
			t.senderId,
			i,
			d
		]);
	}
	l.useSendOrRemoveReaction = c;
}), 98);
