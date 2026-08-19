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
	"react-compiler-runtime",
	"sendToSentQPLLogger",
	"useMWLSDefaultThreadSourceAndResetAttribution",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var a = o("react-compiler-runtime").c(9), i;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("MAWLoggerUtils").createInstanceKey(), a[0] = i) : i = a[0];
		var l = i, s = o("MWPActor.react").useActor(), u = (e || (e = r("useReStore")))(), c = o("MAWOptimisticCreateOrDeleteReactionLSDB").useOptimisticReactionLSDB(), d = r("useMWLSDefaultThreadSourceAndResetAttribution")(), m, p;
		return a[1] !== s || a[2] !== c || a[3] !== u || a[4] !== d || a[5] !== n || a[6] !== t ? (m = async function(a, i, m, p, _) {
			var e = o("MAWDbMsg").toMsgId(a);
			if (n == null || e == null) return o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "msg-id-null"
			});
			r("QPLUserFlow").start(r("qpl")._(1056843664, "1465"), { instanceKey: l }), r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "create_optimistic_reaction_start", { instanceKey: l });
			var f = d(t), g = c(t, e, i, l, u, s);
			r("promiseDone")(g);
			var h = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(u.tables, t, "MAWSendOrRemoveReaction.react"), y = h.chatJid;
			return o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(e).then(async function(a) {
				if (a == null) return o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "protocol-msg-id-null"
				});
				var l = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendReactionMsg", {
					args: {
						groupIndex: _,
						groupingKey: "",
						reaction: i,
						reactToAuthor: n,
						reactToProtocolMsgId: a,
						source: f
					},
					chatJid: y,
					externalId: p,
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: m
				}).catch(function(n) {
					throw r("promiseDone")(o("MAWOptimisticCreateOrDeleteReactionLSDB").markOptimisticReactionAsFailedLSDB(u, t, e, s, g)), n;
				});
				return o("MAWMessageSendReporter").MAWMessageSendReporter({
					chatJid: y,
					externalId: p
				}, l, {
					qplEventType: r("qpl")._(25313175, "1551"),
					qplInstanceKey: m
				}, u);
			}).then(function(e) {
				return r("QPLUserFlow").endSuccess(r("qpl")._(1056843664, "1465"), { instanceKey: l }), o("sendToSentQPLLogger").markSendToSentSuccess(m), (e == null ? void 0 : e.success) === !1 ? o("WAResultOrError").makeError(e.error) : (e == null ? void 0 : e.value) != null ? e : o("WAResultOrError").makeResult({
					description: "removal pending rollout of MAWMessageSendReporterV2",
					messageType: "fixMe"
				});
			}).catch(function(e) {
				throw r("FBLogger")("messenger_web").catching(e).mustfix("Failed to send or unsend optimistic reaction: %s.", e), r("QPLUserFlow").endFailure(r("qpl")._(1056843664, "1465"), "failure", { instanceKey: l }), o("sendToSentQPLLogger").markSendToSentFail(m, "failed_to_send_remove_reaction", e), r("err")("Failed to send or unsend optimistic reaction: " + e + " ");
			});
		}, p = [
			n,
			l,
			d,
			t,
			c,
			u,
			s
		], a[1] = s, a[2] = c, a[3] = u, a[4] = d, a[5] = n, a[6] = t, a[7] = m, a[8] = p) : (m = a[7], p = a[8]), o("Int64Hooks").useCallbackInt64(m, p);
	}
	l.useSendOrRemoveReaction = s;
}), 98);
