__d("MAWVerifyThreadCutover", [
	"CometRelay",
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSContactBitOffset",
	"LSCutoverMappingQueryFromOpenThreadIdStoredProcedure",
	"LSFactory",
	"LSPlatformWaitForTaskCompletion",
	"LSVerifyContactExistsWithID",
	"MAWDefaultE2eeOneToOneEligibility",
	"MAWVerifyThreadCutover_ContactCapabilities2Query.graphql",
	"ReQL",
	"ReQLSubscribe",
	"ensureContactsExistAndUpdatedSync",
	"err",
	"getErrorSafe",
	"gkx",
	"isThreadLevelCutoverEnabled",
	"justknobx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 1e4, c = Math.min(r("justknobx")._("2730"), u), d = r("justknobx")._("2731"), m = e !== void 0 ? e : e = n("MAWVerifyThreadCutover_ContactCapabilities2Query.graphql");
	async function p(e, t) {
		if (r("isThreadLevelCutoverEnabled")()) {
			var n = await e, a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.mi_act_mapping_table.index("jid")).getKeyRange(t));
			return a;
		}
		return Promise.resolve();
	}
	async function _(e, t) {
		if (r("isThreadLevelCutoverEnabled")()) {
			var n, a = await e, i = await Promise.all([(n = o("ReQL")).firstAsync(n.fromTableAscending(a.tables.cutover_threads).getKeyRange(t)), n.firstAsync(n.fromTableAscending(a.tables.contacts).getKeyRange(t))]), l = i[0], s = i[1], u = s != null && o("LSContactBitOffset").has(76, s);
			return l != null || u;
		}
		return !1;
	}
	async function f(e, t) {
		var n = await e, a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.mi_act_mapping_table).getKeyRange(t));
		if (a == null) {
			var i = null, l = new Promise(function(e, a) {
				var l = o("ReQLSubscribe").subscribeToFirst(o("ReQL").fromTableAscending(n.tables.mi_act_mapping_table.index("jid")).getKeyRange(t), function(t) {
					t != null && (i != null && window.clearTimeout(i), l(), e());
				});
				i = window.setTimeout(function() {
					l(), a(r("err")("Timeout"));
				}, d), r("promiseDone")(r("LSPlatformWaitForTaskCompletion")(n, function(e) {
					return r("LSCutoverMappingQueryFromOpenThreadIdStoredProcedure")(r("LSFactory")(e), { openThreadId: t });
				}, "readwrite", "cutover_mapping_query_" + (s || (s = o("I64"))).to_string(t)), function() {
					i != null && window.clearTimeout(i), l(), e();
				});
			});
			try {
				await l;
			} catch (e) {
				r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).warn("Issue waiting for ACT thread to be ready");
			}
			await l;
		}
	}
	async function g(e, t, n) {
		var a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(n));
		if (a != null && (s || (s = o("I64"))).ge(a.authorityLevel, (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").AUTHORITATIVE))) return a;
		r("promiseDone")(r("ensureContactsExistAndUpdatedSync")(e, t, n));
		var i = new Promise(function(t, a) {
			var i = null, l = o("ReQLSubscribe").subscribeToFirst(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(n), function(e) {
				e != null && (s || (s = o("I64"))).ge(e.authorityLevel, (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").AUTHORITATIVE)) && (r("FBLogger")("messenger_web").info("Contact retrieval was successful"), i != null && window.clearTimeout(i), l(), t(e));
			});
			i = window.setTimeout(function() {
				l(), a(r("err")("Timeout"));
			}, c);
		});
		try {
			a = await i;
		} catch (t) {
			var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(n));
			r("FBLogger")("messenger_web").catching(r("getErrorSafe")(t)).warn("Error retrieving and navigating to the most recent thread: contact exists in LSDB is %s and AuthorityLevel is %s", l != null, (l == null ? void 0 : l.authorityLevel) != null ? (s || (s = o("I64"))).to_string(l == null ? void 0 : l.authorityLevel) : "null");
		}
		return a;
	}
	async function h(e, t, n, a) {
		var l = await e;
		a == null || a("update_contact_capabilities2_db_ready");
		var u = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(l.tables.contacts).getKeyRange(t));
		a == null || a("update_contact_capabilities2_contact_ready");
		var c = o("LSContactBitOffset").contactCapabilitiesHas(83, (s || (s = o("I64"))).of_string(n)), d = o("LSContactBitOffset").contactCapabilitiesHas(76, s.of_string(n));
		if (u == null) return r("FBLogger")("messenger_web").warn("contact is null in maybeUpdateContactCapabilities2IfOutOfSync"), (c || d) && r("FBLogger")("messenger_web").warn("contact is null and they have hasServerCutoverCapabilities as %s and hasServerDefaultE2eeCapabilities as %s from server", d, c), null;
		var m = o("LSContactBitOffset").contactCapabilitiesHas(83, u.capabilities2), p = o("LSContactBitOffset").contactCapabilitiesHas(76, u.capabilities2);
		if (c && !m && !p || d && !p) {
			var _ = c ? "default_e2ee" : "cutover";
			r("FBLogger")("messenger_web").info("sync LS contactCapabilities2 with server value where contactAuthoritativeLevel is %s and serverContactCapabilities2 is %s", (s || (s = o("I64"))).to_string(u.authorityLevel), _);
			var f = babelHelpers.extends({}, u, { capabilities2: s.of_string(n) });
			return a == null || a("fetch_contact_from_lsdb_start"), await l.runInTransaction(async function(e) {
				await e.contacts.put(f);
			}, "readwrite", void 0, void 0, i.id + ":308"), f;
		} else r("gkx")("9396") && r("FBLogger")("messenger_web").info("LS contactCapabilities2 isDefaultE2ee: %s and isCutover: %s is synced with server values where contactAuthoritativeLevel is %s", m, p, (s || (s = o("I64"))).to_string(u.authorityLevel));
		return u;
	}
	async function y(e, t, n, a, l) {
		var u = null, c = null;
		if (l != null) {
			var d = l.contactSync;
			if (d != null ? await d : await o("LSVerifyContactExistsWithID").runInTransaction(e, n, !1, void 0, i.id + ":340"), a == null || a("verify_contact_exists_with_id_complete"), c = await l.contactFetch, u = await l.contactCapabilities, a == null || a("fetch_contact_completed_from_preload"), c != null && (s || (s = o("I64"))).ge(c.authorityLevel, (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").AUTHORITATIVE))) return a == null || a("contact_not_available"), c;
		} else {
			var p;
			if (await o("LSVerifyContactExistsWithID").runInTransaction(e, n, !1, void 0, i.id + ":360"), a == null || a("verify_contact_exists_with_id_complete"), c = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(n)), a == null || a("fetch_contact_from_db_complete"), c != null && (s || (s = o("I64"))).ge(c.authorityLevel, (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").AUTHORITATIVE))) return a == null || a("contact_not_available"), c;
			var _ = await o("CometRelay").fetchQuery(t, m, { id: (s || (s = o("I64"))).to_string(n) }, { fetchPolicy: "store-or-network" }).toPromise();
			a == null || a("fetch_contact_capability_from_graphql_complete"), u = _ == null || (p = _.user) == null ? void 0 : p.message_capabilities2_str;
		}
		if (u == null) return r("gkx")("9396") && r("FBLogger")("messenger_web").warn("messageCapabilities2Str is null in makeSureContactCapabilitiesIsLoaded"), a == null || a("contact_capability_not_available"), c;
		var f = await h(Promise.resolve(e), n, u, a);
		return a == null || a("update_contact_complete"), f;
	}
	async function C(e, t, n, a, i) {
		var l, u = await e, c = await g(u, t, n);
		if (c == null && r("gkx")("9396") && r("FBLogger")("messenger_web").warn("contact is null in verifyContactCutoverOrOndemandCutover"), i != null) {
			var d = await h(Promise.resolve(u), n, i);
			d != null && (c = d);
		}
		var m = i != null ? (s || (s = o("I64"))).of_string(i) : (l = c) == null ? void 0 : l.capabilities2, p = m != null && o("LSContactBitOffset").contactCapabilitiesHas(76, m), f = p || await _(Promise.resolve(u), n);
		return f ? a === !0 ? "on_demand_cutover" : "cutover" : o("MAWDefaultE2eeOneToOneEligibility").isContactDefaultE2eeOneToOneEligible({ maybeContact: c }) ? "default_e2ee" : null;
	}
	async function b(e, t, n) {
		var a = await e, i = await g(a, t, n);
		i == null && r("gkx")("9396") && r("FBLogger")("messenger_web").warn("contact is null in verifyContactCutoverOrOndemandCutover");
		var l = await _(Promise.resolve(a), n);
		if (l) {
			await f(Promise.resolve(a), n);
			var s = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(a.tables.mi_act_mapping_table).getKeyRange(n));
			return s == null ? "default_e2ee" : "cutover";
		}
		return o("MAWDefaultE2eeOneToOneEligibility").isContactDefaultE2eeOneToOneEligible({ maybeContact: i }) ? "default_e2ee" : null;
	}
	function v(e, t) {
		return t == null ? Promise.resolve(!1) : _(e, (s || (s = o("I64"))).of_string(t));
	}
	l.getCutoverThread = p, l.verifyThreadCutover = _, l.ensureContactCapabilities2IsLoaded = y, l.verifyContactCutoverOrOndemandCutoverOrDefaultE2EE = C, l.verifyContactCutoverOrDefaultE2EEWhenReady = b, l.verifyThreadCutoverWithStringInput = v;
}), 98);
