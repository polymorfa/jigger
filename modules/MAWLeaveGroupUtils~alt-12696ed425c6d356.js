__d("MAWLeaveGroupUtils", [
	"fbt",
	"I64",
	"LSFactory",
	"LSIntEnum",
	"LSIssueNewErrorStoredProcedure",
	"LSOptimisticRemoveThreadStoredProcedure",
	"LSThreadRemoveType",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWODSProxy",
	"MAWTimedJob",
	"ReQL",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"WAResultOrError",
	"qex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(t, n) {
		return async function() {
			var a = await t.runInTransaction(function(e) {
				return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(n));
			}, "readwrite", void 0, void 0, i.id + ":39");
			if (a == null) return Promise.resolve();
			var l = (e || (e = o("I64"))).to_string(a.jid), c = o("WAJids").toGroupJid(l), p, _;
			return r("qex")._("5856") === !0 ? (_ = "direct", p = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "leaveGroup", { groupJid: c })) : (_ = "MAWJobManager", p = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.leaveGroups([c], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })).then(o("WAResultOrError").makeResult).catch(function() {
				return o("WAResultOrError").makeError("runtime-error");
			})), p.then(function(e) {
				if (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: "leaveGroup." + _ + "." + (e.success === !0 ? "success" : "failure")
				}), e.success === !0) return d(t, {
					removeType: (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadRemoveType").ARCHIVE_THREAD),
					threadKey: n
				});
				var a = s._(
					/*BTDS*/
					""
				).toString();
				return m(t, {
					errorBodyText: a,
					errorTitleText: a
				});
			});
		};
	}
	function d(e, t) {
		var n = t.removeType, o = t.threadKey;
		return e.runInTransaction(function(e) {
			return r("LSOptimisticRemoveThreadStoredProcedure")(r("LSFactory")(e), {
				removeType: n,
				threadKey: o
			});
		}, "readwrite", void 0, void 0, i.id + ":98");
	}
	function m(e, t) {
		var n = t.errorBodyText, o = t.errorTitleText;
		return e.runInTransaction(function(e) {
			return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
				errorBodyText: n,
				errorTitleText: o
			});
		}, "readwrite", void 0, void 0, i.id + ":113");
	}
	function p(e, t) {
		return c(e, t);
	}
	l.createLeaveGroupCallback = p;
}), 226);
