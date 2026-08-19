__d("MAWRevokeParticipantGroupInvite", [
	"MAWODSProxy",
	"MWFBLogger",
	"WAAssertUnreachable",
	"WAOdsEnums",
	"WAResultOrError",
	"WASmaxGroupsRevokeRequestCodeRPC",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = o("MWFBLogger").MWLogger().tags(["backend", "MAWRevokeGroupInvite"]);
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			if (n.length === 0) return m.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Called revoke with no participants"]))), o("WAResultOrError").makeResult();
			m.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"revoking invite for ",
				" in ",
				""
			])), String(n), t);
			var a = yield o("WASmaxGroupsRevokeRequestCodeRPC").sendRevokeRequestCodeRPC({
				iqTo: t,
				participantArgs: n.map(function(e) {
					return { participantJid: e };
				})
			});
			switch (a.name) {
				case "RevokeRequestCodeResponseClientError": {
					var i = a.value.errorClientErrors.name;
					return m.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["revoke failed: ", ""])), i), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.GROUP_REVOKE_PARTICIPANT_INVITE,
						key: "fail"
					}), o("WAResultOrError").makeError("revoke_failed");
				}
				case "RevokeRequestCodeResponseServerError": {
					var l = a.value.errorServerErrors.name;
					return m.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["revoke failed: ", ""])), l), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.GROUP_REVOKE_PARTICIPANT_INVITE,
						key: "fail"
					}), o("WAResultOrError").makeError("revoke_failed");
				}
				case "RevokeRequestCodeResponseSuccess": return m.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"revoke successful for ",
					" in ",
					""
				])), String(n), t), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.GROUP_REVOKE_PARTICIPANT_INVITE,
					key: "success"
				}), o("WAResultOrError").makeResult();
				default: return a.name, r("WAAssertUnreachable")(a.name);
			}
		}), _.apply(this, arguments);
	}
	l.revokeParticipantsGroupInvite = p;
}), 98);
