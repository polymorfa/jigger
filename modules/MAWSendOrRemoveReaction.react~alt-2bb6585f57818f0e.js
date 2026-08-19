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
	"asyncToGeneratorRuntime",
	"err",
	"promiseDone",
	"qpl",
	"sendToSentQPLLogger",
	"useMWLSDefaultThreadSourceAndResetAttribution",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		var i = o("MAWLoggerUtils").createInstanceKey(), l = o("MWPActor.react").useActor(), s = (e || (e = r("useReStore")))(), u = o("MAWOptimisticCreateOrDeleteReactionLSDB").useOptimisticReactionLSDB(), c = r("useMWLSDefaultThreadSourceAndResetAttribution")();
		return o("Int64Hooks").useCallbackInt64((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, d, m, p, _) {
				var f = o("MAWDbMsg").toMsgId(e);
				if (a == null || f == null) return o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "msg-id-null"
				});
				r("QPLUserFlow").start(r("qpl")._(1056843664, "1465"), { instanceKey: i }), r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "create_optimistic_reaction_start", { instanceKey: i });
				var g = c(t), h = u(t, f, d, i, s, l);
				r("promiseDone")(h);
				var y = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(s.tables, t, "MAWSendOrRemoveReaction.react"), C = y.chatJid;
				return o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(f).then((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						if (e == null) return o("WAResultOrError").makeError({
							isRetriable: !1,
							type: "protocol-msg-id-null"
						});
						var n = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendReactionMsg", {
							args: {
								groupIndex: _,
								groupingKey: "",
								reaction: d,
								reactToAuthor: a,
								reactToProtocolMsgId: e,
								source: g
							},
							chatJid: C,
							externalId: p,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m
						}).catch(function(e) {
							throw r("promiseDone")(o("MAWOptimisticCreateOrDeleteReactionLSDB").markOptimisticReactionAsFailedLSDB(s, t, f, l, h)), e;
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: C,
							externalId: p
						}, n, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m
						}, s);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()).then(function(e) {
					return r("QPLUserFlow").endSuccess(r("qpl")._(1056843664, "1465"), { instanceKey: i }), o("sendToSentQPLLogger").markSendToSentSuccess(m), (e == null ? void 0 : e.success) === !1 ? o("WAResultOrError").makeError(e.error) : (e == null ? void 0 : e.value) != null ? e : o("WAResultOrError").makeResult({
						description: "removal pending rollout of MAWMessageSendReporterV2",
						messageType: "fixMe"
					});
				}).catch(function(e) {
					throw r("FBLogger")("messenger_web").catching(e).mustfix("Failed to send or unsend optimistic reaction: %s.", e), r("QPLUserFlow").endFailure(r("qpl")._(1056843664, "1465"), "failure", { instanceKey: i }), o("sendToSentQPLLogger").markSendToSentFail(m, "failed_to_send_remove_reaction", e), r("err")("Failed to send or unsend optimistic reaction: " + e + " ");
				});
			});
			return function(t, n, r, o, a) {
				return e.apply(this, arguments);
			};
		})(), [
			a,
			i,
			c,
			t,
			u,
			s,
			l
		]);
	}
	l.useSendOrRemoveReaction = s;
}), 98);
