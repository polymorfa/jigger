__d("MAWGroupSetMemberAddMode", [
	"E2EEMetadataMailboxSetGroupParticipantUpdateModeMutation",
	"FBLogger",
	"MAWChangeGroupMemberAddModeApi",
	"MAWODSProxy",
	"WAGlobals",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.groupJid, n = e.memberAddMode;
			try {
				var a = n === "admin_add" ? "ADMIN_ONLY" : "OPEN";
				yield o("E2EEMetadataMailboxSetGroupParticipantUpdateModeMutation").setMISOTGroupParticipantUpdateModeOverGraphQL({
					participant_update_mode: a,
					transport_thread_fbid: o("WAJids").groupIdFromJid(t)
				}), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_SET_MEMBER_ADD_MODE,
					key: "success"
				});
			} catch (e) {
				return o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_SET_MEMBER_ADD_MODE,
					key: "fail"
				}), r("FBLogger")("wmi").tags(["MiSOTGroupMetadataUpdate"]).catching(r("getErrorSafe")(e)).mustfix("Failed to set participant update mode for MI SOT group via GraphQL"), o("WAResultOrError").makeError("server-error");
			}
			return yield o("MAWChangeGroupMemberAddModeApi").changeGroupMemberAddMode(t, o("WAGlobals").getMyUserJid(), n, o("WATimeUtils").unixTime(), "skip_admin_message"), o("WAResultOrError").makeResult();
		}), s.apply(this, arguments);
	}
	l.setMemberAddModeImpl = e;
}), 98);
