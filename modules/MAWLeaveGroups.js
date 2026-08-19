__d("MAWLeaveGroups", [
	"E2EEMetadataMailboxLeaveGroupMutation",
	"FBLogger",
	"MAWJobManager",
	"MAWLeaveGroupsApi",
	"MAWODSProxy",
	"Promise",
	"WADbPersonalSenderKeyStatusTxns",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				try {
					yield o("E2EEMetadataMailboxLeaveGroupMutation").leaveMISOTGroupOverGraphQL({ group_id: o("WAJids").groupIdFromJid(e) }), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
						key: "success"
					});
				} catch (e) {
					throw o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
						key: "fail"
					}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfixThrow("Failed to leave MI SOT group via GraphQL");
				}
				return yield o("MAWLeaveGroupsApi").leaveGroups({ groupJids: [e] }), yield o("WADbPersonalSenderKeyStatusTxns").deletePersonalSenderKeyStatus([e]), o("WAResultOrError").makeResult();
			} catch (e) {
				var t = r("getErrorSafe")(e);
				return r("FBLogger")("messenger_e2ee_web").catching(t).mustfix("Failed to leave group"), o("WAResultOrError").makeError("runtime-error");
			}
		}), u.apply(this, arguments);
	}
	var c = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("leaveGroups", (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.groups, i = [];
			if (yield (e || (e = n("Promise"))).all(a.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					try {
						yield o("E2EEMetadataMailboxLeaveGroupMutation").leaveMISOTGroupOverGraphQL({ group_id: o("WAJids").groupIdFromJid(e) }), o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
							key: "success"
						}), i.push(e);
					} catch (e) {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
							key: "fail"
						}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to leave MI SOT group via GraphQL");
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), i.length > 0 && (yield o("MAWLeaveGroupsApi").leaveGroups({ groupJids: i }), yield o("WADbPersonalSenderKeyStatusTxns").deletePersonalSenderKeyStatus(i)), i.length !== a.length) throw r("err")("Failed to leave groups");
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	})()).end();
	l.leaveGroupImpl = s, l.leaveGroupsJob = c;
}), 98);
