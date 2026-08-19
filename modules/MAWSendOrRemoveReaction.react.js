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
	"react-compiler-runtime",
	"sendToSentQPLLogger",
	"useMWLSDefaultThreadSourceAndResetAttribution",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		var i = o("react-compiler-runtime").c(9), l;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("MAWLoggerUtils").createInstanceKey(), i[0] = l) : l = i[0];
		var s = l, u = o("MWPActor.react").useActor(), c = (e || (e = r("useReStore")))(), d = o("MAWOptimisticCreateOrDeleteReactionLSDB").useOptimisticReactionLSDB(), m = r("useMWLSDefaultThreadSourceAndResetAttribution")(), p, _;
		return i[1] !== u || i[2] !== d || i[3] !== c || i[4] !== m || i[5] !== a || i[6] !== t ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, i, l, p, _) {
				var f = o("MAWDbMsg").toMsgId(e);
				if (a == null || f == null) return o("WAResultOrError").makeError({
					isRetriable: !1,
					type: "msg-id-null"
				});
				r("QPLUserFlow").start(r("qpl")._(1056843664, "1465"), { instanceKey: s }), r("QPLUserFlow").addPoint(r("qpl")._(1056843664, "1465"), "create_optimistic_reaction_start", { instanceKey: s });
				var g = m(t), h = d(t, f, i, s, c, u);
				r("promiseDone")(h);
				var y = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(c.tables, t, "MAWSendOrRemoveReaction.react"), C = y.chatJid;
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
								reaction: i,
								reactToAuthor: a,
								reactToProtocolMsgId: e,
								source: g
							},
							chatJid: C,
							externalId: p,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: l
						}).catch(function(e) {
							throw r("promiseDone")(o("MAWOptimisticCreateOrDeleteReactionLSDB").markOptimisticReactionAsFailedLSDB(c, t, f, u, h)), e;
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: C,
							externalId: p
						}, n, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: l
						}, c);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()).then(function(e) {
					return r("QPLUserFlow").endSuccess(r("qpl")._(1056843664, "1465"), { instanceKey: s }), o("sendToSentQPLLogger").markSendToSentSuccess(l), (e == null ? void 0 : e.success) === !1 ? o("WAResultOrError").makeError(e.error) : (e == null ? void 0 : e.value) != null ? e : o("WAResultOrError").makeResult({
						description: "removal pending rollout of MAWMessageSendReporterV2",
						messageType: "fixMe"
					});
				}).catch(function(e) {
					throw r("FBLogger")("messenger_web").catching(e).mustfix("Failed to send or unsend optimistic reaction: %s.", e), r("QPLUserFlow").endFailure(r("qpl")._(1056843664, "1465"), "failure", { instanceKey: s }), o("sendToSentQPLLogger").markSendToSentFail(l, "failed_to_send_remove_reaction", e), r("err")("Failed to send or unsend optimistic reaction: " + e + " ");
				});
			});
			return function(n, r, o, a, i) {
				return e.apply(this, arguments);
			};
		})(), _ = [
			a,
			s,
			m,
			t,
			d,
			c,
			u
		], i[1] = u, i[2] = d, i[3] = c, i[4] = m, i[5] = a, i[6] = t, i[7] = p, i[8] = _) : (p = i[7], _ = i[8]), o("Int64Hooks").useCallbackInt64(p, _);
	}
	l.useSendOrRemoveReaction = s;
}), 98);
