__d("MAWPromoteGroupParticipants", [
	"E2EEMetadataMailboxPromoteGroupParticipantsMutation",
	"FBLogger",
	"MAWChangeGroupParticipantAdminStatusApi",
	"MAWJobManager",
	"MAWODSProxy",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("promoteGroupParticipants", function(e) {
		var t = e.group, n = e.users;
		return s({
			group: t,
			users: n
		});
	}).end();
	async function s(e) {
		var t = e.group, n = e.users, a = n.map(function(e) {
			return o("WAJids").toMsgrUserJid(e);
		});
		if (a.length === 0) return o("WAResultOrError").makeResult({
			groupJid: t,
			participants: [],
			type: "default"
		});
		var i = [];
		try {
			await o("E2EEMetadataMailboxPromoteGroupParticipantsMutation").promoteMISOTGroupParticipantsOverGraphQL({
				group_id: o("WAJids").groupIdFromJid(t),
				participants: n
			}), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_PROMOTE_PARTICIPANT,
				key: "success"
			}), i = a.map(function(e) {
				return {
					addressable: !0,
					type: "participant",
					user: e
				};
			});
		} catch (e) {
			return o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_PROMOTE_PARTICIPANT,
				key: "fail"
			}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to promote participants in group"), o("WAResultOrError").makeError("PromoteParticipantsResponseServerError");
		}
		return await o("MAWChangeGroupParticipantAdminStatusApi").changeGroupParticipantAdminStatus(null, t, o("WAJids").AUTHOR_ME, i, "admin", o("WATimeUtils").unixTime()), o("WAResultOrError").makeResult({
			groupJid: t,
			participants: i,
			type: "default"
		});
	}
	l.promoteGroupParticipants = e, l.promoteGroupParticipantsImpl = s;
}), 98);
