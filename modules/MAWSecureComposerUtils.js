__d("MAWSecureComposerUtils", [
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWBridgeFireAndForget",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWUIJob",
	"MessageRequestsLog",
	"Promise",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"promiseDone",
	"qex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a, i, l) {
		if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType)) {
			i != null && o("MessageRequestsLog").logActionConfirmed(a, 8, (s || (s = o("I64"))).to_string(i)), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(t.tables, a.threadKey, "MAWSecureComposerUtils", function(t, a) {
				return r("qex")._("5852") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "sendThreadDeletionAppData", { chatJid: a }), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: "sendThreadDeletionAppData.direct.success"
				})) : (o("MAWUIJob").UIJobStarters.fireAndForget(o("MAWJobDefinitions").createStartJobInfo("deleteThread", {
					chatJid: a,
					scheduleConfig: { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }
				})), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: "sendThreadDeletionAppData.MAWJobManager.success"
				})), (e || (e = n("Promise"))).resolve();
			}));
			return;
		}
	}
	l.onDeleteThread = u;
}), 98);
