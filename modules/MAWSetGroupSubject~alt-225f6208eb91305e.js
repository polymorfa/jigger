__d("MAWSetGroupSubject", [
	"E2EEMetadataMailboxSetGroupSubjectMutation",
	"FBLogger",
	"MAWJobManager",
	"MAWODSProxy",
	"MAWUpdateGroupSubjectApi",
	"WAGlobals",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("sendSetSubjectRPC", function(e) {
		var t = e.group, n = e.subject;
		return s({
			group: t,
			subject: n
		});
	}).end();
	async function s(e) {
		var t = e.group, n = e.subject;
		try {
			return await o("E2EEMetadataMailboxSetGroupSubjectMutation").setMISOTGroupSubjectOverGraphQL({
				group_id: o("WAJids").groupIdFromJid(t),
				subject: n
			}), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_SET_SUBJECT,
				key: "success"
			}), await o("MAWUpdateGroupSubjectApi").updateGroupSubject(t, {
				content: n,
				ts: o("WATimeUtils").unixTime(),
				user: o("WAGlobals").getMyUserJid()
			}, "skip_admin_message"), o("WAResultOrError").makeResult();
		} catch (e) {
			return o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_SET_SUBJECT,
				key: "fail"
			}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to set subject for MI SOT group via GraphQL"), o("WAResultOrError").makeError("SetSubjectResponseServerError");
		}
	}
	l.setGroupSubject = e, l.setGroupSubjectImpl = s;
}), 98);
