__d("MAWRemoveGroupParticipantsUtils", [
	"fbt",
	"I64",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWODSProxy",
	"MAWTimedJob",
	"ReQL",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"qex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(t, n) {
		return async function(a) {
			var l = await t.runInTransaction(function(e) {
				return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(n));
			}, "readwrite", void 0, void 0, i.id + ":36");
			if (l == null) return Promise.resolve();
			var u = (e || (e = o("I64"))).to_string(l.jid), c = o("WAJids").toGroupJid(u), d, p;
			return r("qex")._("5858") === !0 ? (p = "direct", d = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "removeGroupParticipants", {
				group: c,
				users: [(e || (e = o("I64"))).to_string(a)]
			})) : (p = "MAWJobManager", d = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.removeGroupParticipants(c, [(e || (e = o("I64"))).to_string(a)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), d.then(function(e) {
				if (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: "removeGroupParticipants." + p + "." + (e.success ? "success" : "failure")
				}), e.success) return Promise.resolve();
				var n = s._(
					/*BTDS*/
					""
				).toString();
				return m(t, {
					errorBodyText: n,
					errorTitleText: n
				});
			});
		};
	}
	function c(e, t) {
		return u(e, t);
	}
	function d(e, t) {
		return u(e, t);
	}
	function m(e, t) {
		var n = t.errorBodyText, o = t.errorTitleText;
		return e.runInTransaction(function(e) {
			return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
				errorBodyText: n,
				errorTitleText: o
			});
		}, "readwrite", void 0, void 0, i.id + ":112");
	}
	l.createRemoveParticipantCallbackFromThreadKey = c, l.createRemoveParticipantCallback = d;
}), 226);
