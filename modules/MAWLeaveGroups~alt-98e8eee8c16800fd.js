__d("MAWLeaveGroups", [
	"E2EEMetadataMailboxLeaveGroupMutation",
	"FBLogger",
	"MAWJobManager",
	"MAWLeaveGroupsApi",
	"MAWODSProxy",
	"WADbPersonalSenderKeyStatusTxns",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		try {
			try {
				await o("E2EEMetadataMailboxLeaveGroupMutation").leaveMISOTGroupOverGraphQL({ group_id: o("WAJids").groupIdFromJid(e) }), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
					key: "success"
				});
			} catch (e) {
				throw o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
					key: "fail"
				}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfixThrow("Failed to leave MI SOT group via GraphQL");
			}
			return await o("MAWLeaveGroupsApi").leaveGroups({ groupJids: [e] }), await o("WADbPersonalSenderKeyStatusTxns").deletePersonalSenderKeyStatus([e]), o("WAResultOrError").makeResult();
		} catch (e) {
			var t = r("getErrorSafe")(e);
			return r("FBLogger")("messenger_e2ee_web").catching(t).mustfix("Failed to leave group"), o("WAResultOrError").makeError("runtime-error");
		}
	}
	var s = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("leaveGroups", async function(e) {
		var t = e.groups, n = [];
		if (await Promise.all(t.map(async function(e) {
			try {
				await o("E2EEMetadataMailboxLeaveGroupMutation").leaveMISOTGroupOverGraphQL({ group_id: o("WAJids").groupIdFromJid(e) }), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
					key: "success"
				}), n.push(e);
			} catch (e) {
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_LEAVE_PARTICIPANT,
					key: "fail"
				}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to leave MI SOT group via GraphQL");
			}
		})), n.length > 0 && (await o("MAWLeaveGroupsApi").leaveGroups({ groupJids: n }), await o("WADbPersonalSenderKeyStatusTxns").deletePersonalSenderKeyStatus(n)), n.length !== t.length) throw r("err")("Failed to leave groups");
	}).end();
	l.leaveGroupImpl = e, l.leaveGroupsJob = s;
}), 98);
