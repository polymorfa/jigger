__d("MWEnsureCutoverOpenThreadExists", [
	"Int64Hooks",
	"LSFactory",
	"LSIntEnum",
	"LSVerifyThreadRowExistsStoredProcedure",
	"MAWThreadCutover",
	"MWGetChatTabOpenQPLEventTrace",
	"ReQL",
	"ReQLSuspense",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("ReQL").firstAsync(o("MAWThreadCutover").getMiActMappings(e, t));
			if (n != null) {
				var a = yield o("ReQL").firstAsync(o("MAWThreadCutover").getCutoverThreadsByJid(e, n.jid));
				if (a != null) {
					var l = a.openThreadId, u = yield o("ReQL").firstAsync(o("MAWThreadCutover").getThreadByCutoverThread(e, a));
					if (u == null) return e.runInTransaction(function(e) {
						return r("LSVerifyThreadRowExistsStoredProcedure")(r("LSFactory")(e), {
							syncGroup: (s || (s = o("LSIntEnum"))).ofNumber(1),
							threadKey: l
						});
					}, "readwrite", void 0, void 0, i.id + ":54");
				}
			}
		}), c.apply(this, arguments);
	}
	function d(t) {
		var n = o("react-compiler-runtime").c(10), a = (e || (e = r("useReStore")))(), l = o("MAWThreadCutover").useGetCutoverOpenThreadKey(t), u, c;
		n[0] !== a || n[1] !== l ? (u = function() {
			return l == null ? o("ReQL").empty() : o("ReQL").fromTableAscending(a.tables.threads).getKeyRange(l);
		}, c = [a, l], n[0] = a, n[1] = l, n[2] = u, n[3] = c) : (u = n[2], c = n[3]);
		var d = o("ReQLSuspense").useFirst(u, c, i.id + ":68"), p, _;
		n[4] !== d || n[5] !== a || n[6] !== l || n[7] !== t ? (p = function() {
			d == null && l != null && r("promiseDone")(a.runInTransaction(function(e) {
				return r("LSVerifyThreadRowExistsStoredProcedure")(r("LSFactory")(e), {
					syncGroup: (s || (s = o("LSIntEnum"))).ofNumber(1),
					threadKey: l
				});
			}, "readwrite", void 0, void 0, i.id + ":78"), function() {
				r("MWGetChatTabOpenQPLEventTrace")(t, m);
			});
		}, _ = [
			d,
			a,
			l,
			t
		], n[4] = d, n[5] = a, n[6] = l, n[7] = t, n[8] = p, n[9] = _) : (p = n[8], _ = n[9]), o("Int64Hooks").useEffectInt64(p, _);
	}
	function m(e) {
		e.addMarkerPoint("requested_cutover_open_thread", "AppTiming");
	}
	l.ensureCutoverOpenThreadExists = u, l.useMWEnsureCutoverOpenThreadExists = d;
}), 98);
