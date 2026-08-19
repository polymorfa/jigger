__d("MAWRemoveGroupParticipants", [
	"E2EEMetadataMailboxRemoveGroupParticipantsMutation",
	"FBLogger",
	"MAWDbParticipantTxns",
	"MAWIndexedDb",
	"MAWJobManager",
	"MAWODSProxy",
	"MAWRemoveGroupParticipantsApi",
	"MAWRevokeParticipantGroupInvite",
	"MAWTransactionMode",
	"QPLFlow",
	"WAArrayZip",
	"WAJids",
	"WALogger",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"getErrorSafe",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("sendIq", function(e, t, n) {
		var r = e.group, o = e.users;
		return m({
			group: r,
			users: o
		});
	}).end();
	function u(t, n) {
		c(t, n).then(function(e) {
			if (e.length > 0) return o("MAWRevokeParticipantGroupInvite").revokeParticipantsGroupInvite(t, e);
		}).catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Exception occurred when revoking group invites: ", ""])), t);
		});
	}
	async function c(e, t) {
		var n = t.map(function(t) {
			return [e, t];
		}), r = await d(n), a = o("WAArrayZip").zip(t, r);
		return a.map(function(e) {
			var t = e[0], n = e[1];
			return n == null || n.type === "invitedParticipant" ? t : null;
		}).filter(Boolean);
	}
	var d = o("MAWIndexedDb").makeMsgrTransactor({ participants: o("MAWTransactionMode").READONLY }, "getParticipantsWithTransaction", function(e) {
		return function(t) {
			return o("MAWDbParticipantTxns").bulkGetParticipants(e, t);
		};
	});
	async function m(e) {
		var t = e.group, n = e.users, a = o("QPLFlow").startQPLFlow(r("qpl")._(25312342, "971"), { annotations: { int: { removedParticipants: n.length } } }), i = n.map(function(e) {
			return o("WAJids").toMsgrUserJid(e);
		}), l = [];
		if (i.length > 0) {
			u(t, i);
			try {
				await o("E2EEMetadataMailboxRemoveGroupParticipantsMutation").removeMISOTGroupParticipantsOverGraphQL({
					group_id: o("WAJids").groupIdFromJid(t),
					participants: n
				}), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_REMOVE_PARTICIPANT,
					key: "success"
				}), i.forEach(function(e) {
					l.push({
						addressable: !0,
						type: "nonparticipant",
						user: e
					});
				}), a.addPoint("finish_graphql_mutation");
			} catch (e) {
				return o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_REMOVE_PARTICIPANT,
					key: "fail"
				}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to remove participants from group"), a.endFail("graphql_mutation_failed"), o("WAResultOrError").makeError("RemoveParticipantsResponseServerError");
			}
		}
		return a.addPoint("start_remove_participant_txn"), await o("MAWRemoveGroupParticipantsApi").removeGroupParticipants(null, t, o("WAJids").AUTHOR_ME, l, !0, o("WATimeUtils").unixTime()), a.addPoint("finish_remove_participant_txn"), a.endSuccess(), o("WAResultOrError").makeResult({
			groupJid: t,
			participants: l
		});
	}
	l.removeGroupParticipants = s, l.removeGroupParticipantsImpl = m;
}), 98);
