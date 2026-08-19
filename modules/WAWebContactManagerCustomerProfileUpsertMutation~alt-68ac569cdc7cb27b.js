__d("WAWebContactManagerCustomerProfileUpsertMutation", [
	"WAJids",
	"WALogger",
	"WAWebContactManagerCustomerProfileUpsertMutation.graphql",
	"WAWebFetchAdAccountToken",
	"WAWebLeadStage",
	"WAWebNetworkStatus",
	"WAWebRelayClient",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = 0, c = 1, d = 2, m = 4, p = e !== void 0 ? e : e = n("WAWebContactManagerCustomerProfileUpsertMutation.graphql");
	async function _(e, t) {
		var n = f(e, t), a = await o("WAWebFetchAdAccountToken").fetchToken();
		if (a.type !== "success") throw r("err")("[ContactManager] upsertCustomerProfileToServer: no access token (" + a.type + ")");
		await r("WAWebNetworkStatus").waitIfOffline(), await o("WAWebRelayClient").commitMutation(p, { input: [n] }, {
			accessToken: a.token,
			environmentType: "facebook"
		}), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] upsertCustomerProfileToServer: synced ", ""])), e);
	}
	function f(e, t) {
		var n = { lid: h(e) };
		t.leadStage != null && (n.lead_stage = y(t.leadStage)), t.name != null && t.name !== "" && (n.name = t.name), t.email != null && t.email !== "" && (n.email = t.email), t.address != null && t.address !== "" && (n.address = t.address), t.lastOrder != null && (n.last_order_date = t.lastOrder);
		var r = g(t.acquisitionSource);
		return r != null && (n.acquisition_source = r), n;
	}
	function g(e) {
		return e === u ? "CTWA" : e === c || e === d ? "ORGANIC" : e === m ? "REFERRAL" : null;
	}
	function h(e) {
		if (!e.endsWith(o("WAJids").LID_DOMAIN)) throw r("err")("[ContactManager] upsertCustomerProfileToServer: chatJid must be a LID-based JID, got \"" + e + "\"");
		return e.slice(0, -o("WAJids").LID_DOMAIN.length);
	}
	function y(e) {
		return e === o("WAWebLeadStage").LeadStage.INTAKE ? "INTAKE" : e === o("WAWebLeadStage").LeadStage.QUALIFIED ? "QUALIFIED" : e === o("WAWebLeadStage").LeadStage.CONVERTED ? "CONVERTED" : e === o("WAWebLeadStage").LeadStage.LOST ? "LOST" : e === o("WAWebLeadStage").LeadStage.NOT_QUALIFIED ? "NOT_QUALIFIED" : "NONE";
	}
	l.upsertCustomerProfileToServer = _;
}), 98);
