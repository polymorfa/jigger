__d("WAWebTeamLinkRemoveInvitationMutation", [
	"WAWebFetchAdAccountToken",
	"WAWebRelayClient",
	"WAWebTeamLinkRemoveInvitationMutation.graphql",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e !== void 0 ? e : e = n("WAWebTeamLinkRemoveInvitationMutation.graphql");
	async function u(e) {
		var t = await o("WAWebFetchAdAccountToken").fetchToken();
		if (t.type !== "success") return {
			type: "error",
			error: r("err")("fetchToken failed: " + t.type)
		};
		try {
			var n = await o("WAWebRelayClient").commitMutation(s, { lid: e }, {
				environmentType: "facebook",
				accessToken: t.token
			}), a = n == null ? void 0 : n.whatsapp_teamlink_remove_agent_invitation;
			return a == null ? {
				type: "error",
				error: r("err")("remove invitation returned no result")
			} : {
				type: "success",
				removed: a.removed === !0,
				wasOnboarded: a.was_onboarded === !0
			};
		} catch (e) {
			return {
				type: "error",
				error: e instanceof Error ? e : r("err")("removeTeamLinkInvitation failed")
			};
		}
	}
	l.removeTeamLinkInvitation = u;
}), 98);
