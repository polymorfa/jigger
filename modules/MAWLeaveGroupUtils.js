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
	"Promise",
	"ReQL",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"qex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c;
	function d(t, a) {
		return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var l = yield t.runInTransaction(function(e) {
				return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(a));
			}, "readwrite", void 0, void 0, i.id + ":39");
			if (l == null) return (c || (c = n("Promise"))).resolve();
			var d = (e || (e = o("I64"))).to_string(l.jid), _ = o("WAJids").toGroupJid(d), f, g;
			return r("qex")._("5856") === !0 ? (g = "direct", f = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "leaveGroup", { groupJid: _ })) : (g = "MAWJobManager", f = o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.leaveGroups([_], { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })).then(o("WAResultOrError").makeResult).catch(function() {
				return o("WAResultOrError").makeError("runtime-error");
			})), f.then(function(e) {
				if (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
					key: "leaveGroup." + g + "." + (e.success === !0 ? "success" : "failure")
				}), e.success === !0) return m(t, {
					removeType: (u || (u = o("LSIntEnum"))).ofNumber(r("LSThreadRemoveType").ARCHIVE_THREAD),
					threadKey: a
				});
				var n = s._(
					/*BTDS*/
					""
				).toString();
				return p(t, {
					errorBodyText: n,
					errorTitleText: n
				});
			});
		});
	}
	function m(e, t) {
		var n = t.removeType, o = t.threadKey;
		return e.runInTransaction(function(e) {
			return r("LSOptimisticRemoveThreadStoredProcedure")(r("LSFactory")(e), {
				removeType: n,
				threadKey: o
			});
		}, "readwrite", void 0, void 0, i.id + ":98");
	}
	function p(e, t) {
		var n = t.errorBodyText, o = t.errorTitleText;
		return e.runInTransaction(function(e) {
			return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
				errorBodyText: n,
				errorTitleText: o
			});
		}, "readwrite", void 0, void 0, i.id + ":113");
	}
	function _(e, t) {
		return d(e, t);
	}
	l.createLeaveGroupCallback = _;
}), 226);
