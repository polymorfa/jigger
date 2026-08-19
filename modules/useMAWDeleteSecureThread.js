__d("useMAWDeleteSecureThread", [
	"DeletedThreadsForLoggingCache",
	"I64",
	"LSFactory",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSOptimisticRemoveThreadStoredProcedure",
	"LSThreadRemoveType",
	"MAWBridgeFireAndForget",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWThreadCutover",
	"MAWTimedJob",
	"MWFBLogger",
	"MessengerWebUXLogger",
	"Promise",
	"QPLUserFlow",
	"Random",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"WebUserFlowLoggingDataContextProvider.react",
	"isThreadLevelCutoverEnabled",
	"promiseDone",
	"qex",
	"qpl",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = d || (d = o("react")), p = m.useCallback, _ = m.useContext, f = o("MWFBLogger").MWLogger().tags(["DeleteThread"]);
	function g(t, a) {
		var l = o("react-compiler-runtime").c(9), d = o("MAWThreadCutover").useGetCutoverOpenThreadKey(t.threadKey), m = o("MAWThreadCutover").useIsDualThreadCutoverOpenThread(d), p = (s || (s = r("useReStore")))(), g = r("MessengerWebUXLogger").useInteractionLogger(), C = _(o("WebUserFlowLoggingDataContextProvider.react").WebUserFlowLoggingDataContext), b = C.loggingDataRef, v;
		return l[0] !== d || l[1] !== p || l[2] !== m || l[3] !== g || l[4] !== b || l[5] !== a || l[6] !== t.threadKey || l[7] !== t.threadType ? (v = function() {
			if (f.debug("Starting Delete Secure thread"), o("LSMessagingThreadTypeUtil").isArmadilloSecure(t.threadType)) {
				var l = r("qpl")._(25308751, "2014"), s = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4);
				r("QPLUserFlow").start(l, {
					annotations: { string: {
						action_type: "delete",
						thread_type: (c || (c = o("I64"))).to_string(t.threadType)
					} },
					instanceKey: s
				});
				var _ = babelHelpers.extends({}, b.current, { eventType: "backend" });
				r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(p.tables, t.threadKey, "useMAWDeleteSecureThread", function(t, C) {
					var b;
					r("qex")._("5852") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "deleteThread", { chatJid: C }), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "deleteThread.direct.success"
					}), b = (e || (e = n("Promise"))).resolve()) : (b = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").createStartJobInfo("deleteThread", {
						chatJid: C,
						scheduleConfig: { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }
					})), b.then(y, h));
					var v = r("isThreadLevelCutoverEnabled")();
					r("QPLUserFlow").addAnnotations(l, {
						bool: { isThreadLevelCutoverEnabled: v },
						string: { cutoverOpenThreadKey: d != null ? (c || (c = o("I64"))).to_string(d) : null }
					}, { instanceKey: s });
					var S = v && d != null && !m ? p.runInTransaction(function(e) {
						return r("LSOptimisticRemoveThreadStoredProcedure")(r("LSFactory")(e), {
							removeType: (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadRemoveType").DELETE_THREAD),
							threadKey: d
						});
					}, "readwrite", void 0, void 0, i.id + ":139") : (e || (e = n("Promise"))).resolve();
					return (e || (e = n("Promise"))).all([b, S]).then(function() {
						var e = o("WAJids").threadIdForChatJid(C);
						r("DeletedThreadsForLoggingCache").add(e), a(), g == null || g(babelHelpers.extends({}, _, { eventName: "thread_delete_success" })), r("QPLUserFlow").endSuccess(l, { instanceKey: s }), f.debug("Delete Secure thread successful");
					}).catch(function(e) {
						throw g == null || g(babelHelpers.extends({}, _, { eventName: "thread_delete_failure" })), r("QPLUserFlow").endFailure(l, e, { instanceKey: s }), f.catching(e).mustfix("Delete Secure thread failed"), e;
					});
				}));
			}
		}, l[0] = d, l[1] = p, l[2] = m, l[3] = g, l[4] = b, l[5] = a, l[6] = t.threadKey, l[7] = t.threadType, l[8] = v) : v = l[8], v;
	}
	function h() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "deleteThread.MAWJobManager.failure"
		});
	}
	function y() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "deleteThread.MAWJobManager.success"
		});
	}
	l.default = g;
}), 98);
