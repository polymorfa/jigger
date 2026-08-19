__d("WAWebCustomerDataFieldSaver", [
	"WAJids",
	"WALogger",
	"WAWebContactCollection",
	"WAWebContactManagerApplyLeadLabelAction",
	"WAWebContactManagerCustomerProfileUpsertMutation",
	"WAWebContactType",
	"WAWebCustomerDataAction",
	"WAWebCustomerDataCollection",
	"WAWebFrontendContactGetters",
	"WAWebLeadStage",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e) {
		var t, n, r, o, a, i, l;
		return {
			contactType: e.contactType,
			email: (t = e.email) != null ? t : "",
			altPhoneNumbers: (n = e.altPhoneNumbers) != null ? n : "",
			birthday: (r = e.birthday) != null ? r : void 0,
			address: (o = e.address) != null ? o : "",
			acquisitionSource: (a = e.acquisitionSource) != null ? a : void 0,
			leadStage: (i = e.leadStage) != null ? i : void 0,
			lastOrder: (l = e.lastOrder) != null ? l : void 0
		};
	}
	function p(e, t, n) {
		if (t != null) {
			t.set(n);
			var r = m(t);
			return o("WAWebCustomerDataAction").customerDataEditAction(t.chatJid, r, t.createdAt);
		}
		var a = babelHelpers.extends({
			contactType: o("WAWebContactType").ContactType.NONE,
			email: "",
			altPhoneNumbers: "",
			address: "",
			leadStage: o("WAWebLeadStage").LeadStage.NONE
		}, n);
		return o("WAWebCustomerDataAction").customerDataAddAction(e, a);
	}
	async function _(t, n, a) {
		if (!t.endsWith(o("WAJids").LID_DOMAIN)) throw r("err")("[ContactManager] upsertAsCustomer: chatJid must be LID-based, got \"" + t + "\"");
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[ContactManager] upsertAsCustomer: chatJid ",
			", leadStage ",
			""
		])), t, String(n)), o("WAWebContactManagerApplyLeadLabelAction").contactManagerApplyLeadLabelToChat(t).catch(function(e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] Failed to auto-apply Lead label: ", ""])), String(e)).sendLogs("customer_manager_label_apply_failed");
		}), await o("WAWebContactManagerCustomerProfileUpsertMutation").upsertCustomerProfileToServer(t, {
			acquisitionSource: a == null ? void 0 : a.acquisitionSource,
			address: a == null ? void 0 : a.address,
			email: a == null ? void 0 : a.email,
			lastOrder: a == null ? void 0 : a.lastOrder,
			leadStage: n,
			name: g(t)
		});
	}
	async function f(e, t) {
		await o("WAWebContactManagerCustomerProfileUpsertMutation").upsertCustomerProfileToServer(e, {
			leadStage: t,
			name: g(e)
		});
	}
	function g(e) {
		var t = o("WAWebContactCollection").ContactCollection.get(e);
		return t != null ? o("WAWebFrontendContactGetters").getDisplayName(t) : null;
	}
	function h(e) {
		if (!e.endsWith(o("WAJids").LID_DOMAIN)) throw r("err")("[ContactManager] deactivateCustomer: chatJid must be LID-based, got \"" + e + "\"");
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] deactivateCustomer: chatJid ", ""])), e);
		var t = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(e);
		t != null && p(e, t, {
			contactType: o("WAWebContactType").ContactType.NONE,
			leadStage: o("WAWebLeadStage").LeadStage.NONE
		}).catch(function(e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] Failed to deactivate customer: ", ""])), String(e)).sendLogs("customer_manager_deactivate_customer_failed");
		});
	}
	function y(e, t, n, r) {
		r !== n && (r === o("WAWebLeadStage").LeadStage.NONE && n !== o("WAWebLeadStage").LeadStage.NONE ? _(e, n).catch(function(e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] Failed to upsert customer profile to server: ", ""])), String(e)).sendLogs("customer_manager_server_profile_upsert_failed");
		}) : r !== o("WAWebLeadStage").LeadStage.NONE && n === o("WAWebLeadStage").LeadStage.NONE ? h(e) : p(e, t, { leadStage: n }));
	}
	l.saveCustomerDataField = p, l.upsertAsCustomer = _, l.upsertLeadStageToProfile = f, l.deactivateCustomer = h, l.handleLeadStageTransition = y;
}), 98);
