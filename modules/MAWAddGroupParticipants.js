__d("MAWAddGroupParticipants", [
	"E2EEMetadataMailboxAddGroupParticipantsMutation",
	"FBLogger",
	"MAWAddGroupParticipantsApi",
	"MAWJobManager",
	"MAWODSProxy",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("addGroupParticipants", function(e) {
		var t = e.group, n = e.s2sInstanceKey, r = e.users;
		return s({
			group: t,
			users: r
		});
	}).end();
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.group, n = e.users, a = n.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			});
			if (a.length === 0) return o("WAResultOrError").makeResult({
				groupJid: t,
				participants: []
			});
			try {
				yield o("E2EEMetadataMailboxAddGroupParticipantsMutation").addMISOTGroupParticipantsOverGraphQL({
					group_id: o("WAJids").groupIdFromJid(t),
					participants: n
				}), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_ADD_PARTICIPANT,
					key: "success"
				});
				var i = a.map(function(e) {
					return {
						addressable: !0,
						type: "participant",
						user: e
					};
				});
				return yield o("MAWAddGroupParticipantsApi").addGroupParticipants(null, t, o("WAJids").AUTHOR_ME, i, !0, null, o("WATimeUtils").unixTime()), o("WAResultOrError").makeResult({
					groupJid: t,
					participants: i
				});
			} catch (e) {
				return o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_ADD_PARTICIPANT,
					key: "fail"
				}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to add participants to group"), o("WAResultOrError").makeError("AddParticipantsResponseServerError");
			}
		}), u.apply(this, arguments);
	}
	l.addGroupParticipants = e, l.addGroupParticipantsImpl = s;
}), 98);
