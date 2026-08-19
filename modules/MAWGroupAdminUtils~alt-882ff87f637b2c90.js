__d("MAWGroupAdminUtils", [
	"fbt",
	"I64",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWTimedJob",
	"Promise",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"qex",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c;
	function d(t, a) {
		var l = (c || (c = r("useReStore")))();
		return function() {
			return o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, t, "MAWGroupAdminUtils_create", function(t, c) {
				var d = o("WAJids").validateGroupJid(c);
				if (d == null) return (u || (u = n("Promise"))).resolve();
				var m, p;
				return r("qex")._("5857") === !0 ? (p = "direct", m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "promoteGroupParticipants", {
					group: d,
					users: [(e || (e = o("I64"))).to_string(a)]
				})) : (p = "MAWJobManager", m = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.promoteGroupParticipants(d, [(e || (e = o("I64"))).to_string(a)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), m.then(function(e) {
					if (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "promoteGroupParticipants." + p + "." + (e.success ? "success" : "failure")
					}), e.success) return (u || (u = n("Promise"))).resolve();
					var t = s._(
						/*BTDS*/
						""
					).toString();
					return l.runInTransaction(function(e) {
						return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
							errorBodyText: t,
							errorTitleText: t
						});
					}, "readwrite", void 0, void 0, i.id + ":82");
				});
			});
		};
	}
	function m(t, a) {
		var l = (c || (c = r("useReStore")))();
		return function() {
			return o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, t, "MAWGroupAdminUtils_remove", function(t, c) {
				var d = o("WAJids").validateGroupJid(c);
				if (d == null) return (u || (u = n("Promise"))).resolve();
				var m, p;
				return r("qex")._("5855") === !0 ? (p = "direct", m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "demoteGroupParticipants", {
					group: d,
					users: [(e || (e = o("I64"))).to_string(a)]
				})) : (p = "MAWJobManager", m = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.demoteGroupParticipants(d, [(e || (e = o("I64"))).to_string(a)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), m.then(function(e) {
					if (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "demoteGroupParticipants." + p + "." + (e.success ? "success" : "failure")
					}), e.success) return (u || (u = n("Promise"))).resolve();
					var t = s._(
						/*BTDS*/
						""
					).toString();
					return l.runInTransaction(function(e) {
						return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
							errorBodyText: t,
							errorTitleText: t
						});
					}, "readwrite", void 0, void 0, i.id + ":148");
				});
			});
		};
	}
	var p = d, _ = m;
	l.useCreateMakeAdminCallback = p, l.useCreateRemoveAdminCallback = _;
}), 226);
