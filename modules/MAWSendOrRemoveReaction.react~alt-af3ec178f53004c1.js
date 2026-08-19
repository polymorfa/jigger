__d("MAWSendOrRemoveReaction.react", [
	"FBLogger",
	"Int64Hooks",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"MAWGetProtocolMsgIdByMsgIdInUI",
	"MAWLoggerUtils",
	"MAWMessageSendReporter",
	"MAWMiActOnActThreadReady",
	"MAWOptimisticCreateOrDeleteReactionLSDB",
	"MWPActor.react",
	"QPLUserFlow",
	"WAResultOrError",
	"err",
	"promiseDone",
	"qpl",
	"sendToSentQPLLogger",
	"useMWLSDefaultThreadSourceAndResetAttribution",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var a = o("MAWLoggerUtils").createInstanceKey(), i = o("MWPActor.react").useActor(), l = (e || (e = r("useReStore")))(), s = o("MAWOptimisticCreateOrDeleteReactionLSDB").useOptimisticReactionLSDB(), u = r("useMWLSDefaultThreadSourceAndResetAttribution")();
		return o("Int64Hooks").useCallbackInt64(async function(e, c, d, m, p) {
			var _ = o("MAWDbMsg").toMsgId(e);
			if (n == null || _ == null) return o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "msg-id-null"
			});
			r("QPLUserFlow").start(r("qpl")._(1056843664, "1465"), { instanceKey: a }), r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "create_optimistic_reaction_start", { instanceKey: a });
			var f = u(t), g = s(t, _, c, a, l, i);
			r("promiseDone")(g);
			var h = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(l.tables, t, "MAWSendOrRemoveReaction.react"), y = h.chatJid;
			return o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(_).then(async function(e) {
				if (e == null) return o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "protocol-msg-id-null"
				});
				var a = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendReactionMsg", {
					args: {
						groupIndex: p,
						groupingKey: "",
						reaction: c,
						reactToAuthor: n,
						reactToProtocolMsgId: e,
						source: f
					},
					chatJid: y,
					externalId: m,
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: d
				}).catch(function(e) {
					throw r("promiseDone")(o("MAWOptimisticCreateOrDeleteReactionLSDB").markOptimisticReactionAsFailedLSDB(l, t, _, i, g)), e;
				});
				return o("MAWMessageSendReporter").MAWMessageSendReporter({
					chatJid: y,
					externalId: m
				}, a, {
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: d
				}, l);
			}).then(function(e) {
				return r("QPLUserFlow").endSuccess(r("qpl")._(1056843664, "1465"), { instanceKey: a }), o("sendToSentQPLLogger").markSendToSentSuccess(d), (e == null ? void 0 : e.success) === !1 ? o("WAResultOrError").makeError(e.error) : (e == null ? void 0 : e.value) != null ? e : o("WAResultOrError").makeResult({
					description: "removal pending rollout of MAWMessageSendReporterV2",
					messageType: "fixMe"
				});
			}).catch(function(e) {
				throw r("FBLogger")("messenger_web").catching(e).mustfix("Failed to send or unsend optimistic reaction: %s.", e), r("QPLUserFlow").endFailure(r("qpl")._(1056843664, "1465"), "failure", { instanceKey: a }), o("sendToSentQPLLogger").markSendToSentFail(d, "failed_to_send_remove_reaction", e), r("err")("Failed to send or unsend optimistic reaction: " + e + " ");
			});
		}, [
			n,
			a,
			u,
			t,
			s,
			l,
			i
		]);
	}
	l.useSendOrRemoveReaction = s;
}), 98);
