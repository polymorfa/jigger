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
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c;
	function d(t, a) {
		var l = o("react-compiler-runtime").c(4), d = (c || (c = r("useReStore")))(), m;
		return l[0] !== a || l[1] !== d || l[2] !== t ? (m = function() {
			return o("MAWMiActOnActThreadReady").onActThreadReady(d.tables, t, "MAWGroupAdminUtils_create", function(t, l) {
				var c = o("WAJids").validateGroupJid(l);
				if (c == null) return (u || (u = n("Promise"))).resolve();
				var m, p;
				return r("qex")._("5857") === !0 ? (p = "direct", m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "promoteGroupParticipants", {
					group: c,
					users: [(e || (e = o("I64"))).to_string(a)]
				})) : (p = "MAWJobManager", m = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.promoteGroupParticipants(c, [(e || (e = o("I64"))).to_string(a)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), m.then(function(e) {
					if (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "promoteGroupParticipants." + p + "." + (e.success ? "success" : "failure")
					}), e.success) return (u || (u = n("Promise"))).resolve();
					var t = s._(
						/*BTDS*/
						""
					).toString();
					return d.runInTransaction(function(e) {
						return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
							errorBodyText: t,
							errorTitleText: t
						});
					}, "readwrite", void 0, void 0, i.id + ":82");
				});
			});
		}, l[0] = a, l[1] = d, l[2] = t, l[3] = m) : m = l[3], m;
	}
	function m(t, a) {
		var l = o("react-compiler-runtime").c(4), d = (c || (c = r("useReStore")))(), m;
		return l[0] !== a || l[1] !== d || l[2] !== t ? (m = function() {
			return o("MAWMiActOnActThreadReady").onActThreadReady(d.tables, t, "MAWGroupAdminUtils_remove", function(t, l) {
				var c = o("WAJids").validateGroupJid(l);
				if (c == null) return (u || (u = n("Promise"))).resolve();
				var m, p;
				return r("qex")._("5855") === !0 ? (p = "direct", m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "demoteGroupParticipants", {
					group: c,
					users: [(e || (e = o("I64"))).to_string(a)]
				})) : (p = "MAWJobManager", m = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.demoteGroupParticipants(c, [(e || (e = o("I64"))).to_string(a)], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }))), m.then(function(e) {
					if (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "demoteGroupParticipants." + p + "." + (e.success ? "success" : "failure")
					}), e.success) return (u || (u = n("Promise"))).resolve();
					var t = s._(
						/*BTDS*/
						""
					).toString();
					return d.runInTransaction(function(e) {
						return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
							errorBodyText: t,
							errorTitleText: t
						});
					}, "readwrite", void 0, void 0, i.id + ":148");
				});
			});
		}, l[0] = a, l[1] = d, l[2] = t, l[3] = m) : m = l[3], m;
	}
	var p = d, _ = m;
	l.useCreateMakeAdminCallback = p, l.useCreateRemoveAdminCallback = _;
}), 226);
