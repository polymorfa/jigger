__d("MAWThreadCutover", [
	"I64",
	"LSAuthorityLevel",
	"LSContactBitOffset",
	"LSDatabaseSingleton",
	"LSMessagingThreadTypeUtil",
	"MWEncryptedBackupsLocalStorageEntryEnum",
	"MWEncryptedBackupsSharedState",
	"MWPActor.react",
	"MWPreloadableQueries",
	"ReQL",
	"ReQLSuspense",
	"WAJids",
	"asyncToGeneratorRuntime",
	"useCometMessengerhasDefaultThreadOneToOneCapability",
	"useMAWCanThreadBeCutoverOnDemand",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		var n = (u || (u = r("useReStore")))(), a = L(e), i = r("useCometMessengerhasDefaultThreadOneToOneCapability")(n, e), l = t != null && o("LSMessagingThreadTypeUtil").isGroup(t);
		return l ? !0 : a || i;
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return (yield $(e)) != null;
		}), m.apply(this, arguments);
	}
	function p(e) {
		var t = (u || (u = r("useReStore")))();
		return o("ReQLSuspense").useFirst(function() {
			return e != null ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(t, e) : o("ReQL").empty();
		}, [t, e], i.id + ":62") != null;
	}
	function _(e) {
		var t, n = (u || (u = r("useReStore")))(), a = (t = o("ReQLSuspense").useFirst(function() {
			return e != null ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(n, e) : o("ReQL").empty();
		}, [n, e], i.id + ":74")) == null ? void 0 : t.showOpenMessageHistory;
		return a === !1;
	}
	function f(e) {
		var t = R(e);
		return _(t);
	}
	function g(e, t) {
		return o("ReQL").fromTableAscending(e.tables.mi_act_mapping_table).getKeyRange(t);
	}
	function h(t, n) {
		return o("ReQL").fromTableAscending(t.tables.cutover_threads).filter(function(t) {
			return (e || (e = o("I64"))).equal(t.armadilloThreadId, n);
		});
	}
	function y(e) {
		var t = (u || (u = r("useReStore")))(), n = o("ReQLSuspense").useFirst(function() {
			return e == null ? o("ReQL").empty() : g(t, e);
		}, [t, e], i.id + ":112");
		return o("ReQLSuspense").useFirst(function() {
			return n == null ? o("ReQL").empty() : h(t, n.jid);
		}, [t, n], i.id + ":120");
	}
	function C(e, t) {
		return o("ReQL").fromTableAscending(e.tables.threads).getKeyRange(t.openThreadId);
	}
	function b(t) {
		var n = v(t);
		if (!(n == null || (e || (e = o("I64"))).lt(n.authorityLevel, (e || (e = o("I64"))).of_int32(r("LSAuthorityLevel").SERVER_PARTIAL)))) return n;
	}
	function v(e) {
		var t = (u || (u = r("useReStore")))(), n = y(e);
		return o("ReQLSuspense").useFirst(function() {
			return n == null ? o("ReQL").empty() : C(t, n);
		}, [t, n], i.id + ":162");
	}
	function S(e) {
		var t = (u || (u = r("useReStore")))(), n = o("ReQLSuspense").useFirst(function() {
			return e == null ? o("ReQL").empty() : g(t, e);
		}, [t, e], i.id + ":174"), a = n == null ? void 0 : n.jid, l = o("ReQLSuspense").useFirst(function() {
			return a != null ? o("ReQL").fromTableAscending(t.tables.threads).getKeyRange(a) : o("ReQL").empty();
		}, [t.tables.threads, a], i.id + ":183"), s = r("useMAWCanThreadBeCutoverOnDemand")(a);
		return s ? l : void 0;
	}
	function R(e) {
		var t = y(e);
		if (t != null) return t.openThreadId;
	}
	function L(e) {
		return y(e) != null;
	}
	function E(t, n) {
		var r = o("WAJids").threadIdForChatJid(n);
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.cutover_threads).getKeyRange((e || (e = o("I64"))).of_string(r))).then(function(e) {
			return e != null;
		});
	}
	function k() {
		var e, t = (u || (u = r("useReStore")))(), n = o("MWPActor.react").useActor(), a = o("ReQLSuspense").first(o("ReQL").fromTableAscending(t.tables.contacts).getKeyRange(n), i.id + ":223");
		return a != null && ((e = o("LSContactBitOffset").has(75, a)) != null ? e : !1);
	}
	function I() {
		var e = (u || (u = r("useReStore")))(), t = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(e.tables.experiences_shared_state).getKeyRange(r("MWEncryptedBackupsLocalStorageEntryEnum").ENCRYPTED_BACKUPS_RESTORED_SUCCESSFULLY);
		}, [e], i.id + ":238"), n = o("MWEncryptedBackupsSharedState").getEntryValue({
			db: e,
			sharedStateRow: t,
			stateKey: r("MWEncryptedBackupsLocalStorageEntryEnum").ENCRYPTED_BACKUPS_RESTORED_SUCCESSFULLY
		});
		return n != null;
	}
	function T(t) {
		var n = (u || (u = r("useReStore")))(), a = t != null ? (e || (e = o("I64"))).of_string(t) : void 0, l = p(a);
		return o("ReQLSuspense").useFirst(function() {
			return l && a != null ? o("ReQL").fromTableAscending(n.tables.mi_act_mapping_table).filter(function(t) {
				return (e || (e = o("I64"))).equal(t.jid, a);
			}).map(function(t) {
				return (e || (e = o("I64"))).to_string(t.serverThreadKey);
			}) : o("ReQL").empty();
		}, [
			n,
			a,
			l
		], i.id + ":259");
	}
	function D() {
		return !0;
	}
	function x(e) {
		var t = (u || (u = r("useReStore")))(), n = o("ReQLSuspense").useFirst(function() {
			return e != null ? o("MWPreloadableQueries").getCutoverThreadByThreadKey(t, e) : o("ReQL").empty();
		}, [t, e], i.id + ":286"), a = n == null ? void 0 : n.armadilloThreadId, l = o("ReQLSuspense").useFirst(function() {
			return a != null ? o("ReQL").fromTableAscending(t.tables.mi_act_mapping_table.index("jid")).getKeyRange(a) : o("ReQL").empty();
		}, [a, t.tables.mi_act_mapping_table], i.id + ":297");
		return l == null ? void 0 : l.serverThreadKey;
	}
	function $(e) {
		return P.apply(this, arguments);
	}
	function P() {
		return P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.mi_act_mapping_table).getKeyRange(t));
			if (r != null) {
				var a = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.cutover_threads).filter(function(t) {
					return (e || (e = o("I64"))).equal(t.armadilloThreadId, r.jid);
				}));
				return a;
			}
		}), P.apply(this, arguments);
	}
	l.useShouldHideE2eeAttribution = c, l.isCutoverThreadKey = d, l.useIsCutoverOpenThread = p, l.useIsDualThreadCutoverOpenThread = _, l.useIsDualThreadCutoverSecureThread = f, l.getMiActMappings = g, l.getCutoverThreadsByJid = h, l.useGetCutoverMapping = y, l.getThreadByCutoverThread = C, l.useOpenThreadIfExistsFromCutoverThread = b, l.useCutoverOpenThread = v, l.useODCutoverEligibleOpenOneToOneThread = S, l.useGetCutoverOpenThreadKey = R, l.useIsCutoverSecureThread = L, l.isCutoverSecureThreadFromChatJid = E, l.useIsCurrentUserCutoverUser = k, l.useGetHasUserRestoredBefore = I, l.useGetCutoverSecureThreadKey = T, l.useSupportedCutoverEnvironment = D, l.useCutoverSecureThreadKeyForOpenThreadKey = x, l.getCutoverThreadBySecureThreadKey = $;
}), 98);
