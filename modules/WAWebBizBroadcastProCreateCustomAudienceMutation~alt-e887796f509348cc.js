__d("WAWebBizBroadcastProCreateCustomAudienceMutation", [
	"WAWebBizBroadcastProCreateCustomAudienceMutation.graphql",
	"WAWebFetchAdAccountToken",
	"WAWebRelayClient",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s = e !== void 0 ? e : e = n("WAWebBizBroadcastProCreateCustomAudienceMutation.graphql");
	async function u(e, t, n) {
		var a, i = await o("WAWebFetchAdAccountToken").fetchToken();
		if (i.type !== "success") throw r("err")("Failed to fetch access token");
		var l = i.token, u = await o("WAWebRelayClient").commitMutation(s, { input: {
			subscriber_pool_id: e,
			name: t,
			phone_numbers: n
		} }, {
			accessToken: {
				type: "FB",
				token: l.token,
				bp_id: l.bp_id
			},
			environmentType: "facebook"
		}), c = u == null || (a = u.create_wa_marketing_messages_custom_audience) == null ? void 0 : a.custom_audience_id;
		if (c == null) throw r("err")("Failed to create custom audience");
		return {
			id: c,
			name: t,
			audienceSize: n.length,
			phoneNumbers: n
		};
	}
	l.createCustomAudienceList = u;
}), 98);
