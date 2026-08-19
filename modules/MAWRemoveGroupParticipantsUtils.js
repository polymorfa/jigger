__d("MAWRemoveGroupParticipantsUtils", [
	"fbt",
	"I64",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWODSProxy",
	"MAWTimedJob",
	"Promise",
	"ReQL",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"qex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(t, a) {
		return (function() {
			var l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (l) {
				var c = yield t.runInTransaction(function(e) {
					return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(a));
				}, "readwrite", void 0, void 0, i.id + ":36");
				if (c == null) return (u || (u = n("Promise"))).resolve();
				var d = (e || (e = o("I64"))).to_string(c.jid), m = o("WAJids").toGroupJid(d), _, f;
				return r("qex")._("5858") === !0 ? (f = "direct", _ = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "removeGroupParticipants", {
					group: m,
					users: [(e || (e = o("I64"))).to_string(l)]
				})) : (f = "MAWJobManager", _ = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.removeGroupParticipants(m, [(e || (e = o("I64"))).to_string(l)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), _.then(function(e) {
					if (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "removeGroupParticipants." + f + "." + (e.success ? "success" : "failure")
					}), e.success) return (u || (u = n("Promise"))).resolve();
					var r = s._(
						/*BTDS*/
						""
					).toString();
					return p(t, {
						errorBodyText: r,
						errorTitleText: r
					});
				});
			});
			return function(e) {
				return l.apply(this, arguments);
			};
		})();
	}
	function d(e, t) {
		return c(e, t);
	}
	function m(e, t) {
		return c(e, t);
	}
	function p(e, t) {
		var n = t.errorBodyText, o = t.errorTitleText;
		return e.runInTransaction(function(e) {
			return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
				errorBodyText: n,
				errorTitleText: o
			});
		}, "readwrite", void 0, void 0, i.id + ":112");
	}
	l.createRemoveParticipantCallbackFromThreadKey = d, l.createRemoveParticipantCallback = m;
}), 226);
