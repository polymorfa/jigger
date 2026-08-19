__d("WAWebTeamLinkCreateInvitationMutation", [
	"WAWebFetchAdAccountToken",
	"WAWebRelayClient",
	"WAWebTeamLinkCreateInvitationMutation.graphql",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("WAWebTeamLinkCreateInvitationMutation.graphql");
	async function u(e, t) {
		var n = await o("WAWebFetchAdAccountToken").fetchToken();
		if (n.type !== "success") return {
			type: "error",
			error: r("err")("fetchToken failed: " + n.type)
		};
		try {
			var a = await o("WAWebRelayClient").commitMutation(s, {
				lid: e,
				employeeName: t
			}, {
				environmentType: "facebook",
				accessToken: n.token
			}), i = a == null ? void 0 : a.whatsapp_teamlink_create_agent_invitation;
			return i == null ? {
				type: "error",
				error: r("err")("create invitation returned no result")
			} : {
				type: "success",
				invitation: {
					employeeLid: i.employee_lid,
					employeeName: i.employee_name,
					invitationStatus: i.invitation_status,
					nonceCode: i.nonce_code,
					expiresAt: i.expires_at
				}
			};
		} catch (e) {
			return {
				type: "error",
				error: e instanceof Error ? e : r("err")("createTeamLinkInvitation failed")
			};
		}
	}
	l.createTeamLinkInvitation = u;
}), 98);
