__d("addMAWBridgeSearchMessagesToUniversalSearch", [
	"I64",
	"LSIntEnum",
	"LSMessageSearchType",
	"MAWCurrentUser",
	"MAWUniversalMessageSearch",
	"MWContentSearchUtils",
	"MWSearchThreadUtils",
	"ReQL",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").THREAD);
	function c(e, t, n, r, o) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, l, c) {
			var d;
			o("MAWUniversalMessageSearch").updateSecureMsgMatchCountForThread(t, l.length);
			var m = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.message_search_results).getKeyRange(u, a, t)), p = m == null, _ = (s || (s = o("I64"))).to_int32((d = m == null ? void 0 : m.matchCount) != null ? d : (s || (s = o("I64"))).zero), f = _ + l.length, g = yield o("MWSearchThreadUtils").getThreadDataByThreadKey(e, t, s.of_string(o("MAWCurrentUser").getID()), u);
			if (g != null) {
				var h = g.profilePicUrl, y = g.secondaryProfilePicUrl, C = g.threadDisplayName, b = g.threadType, v = m == null ? void 0 : m.globalIndex, S = o("MWContentSearchUtils").getGlobalIndex(l[0].sortOrderMs, m == null ? void 0 : m.globalIndex), R = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var n;
						yield e.message_search_results.upsert([
							u,
							a,
							t,
							v != null ? v : S
						], babelHelpers.extends({}, o("MWContentSearchUtils").getContextLineAndMatches(a, f, (n = l[0].msg) == null ? void 0 : n.content, u), {
							displayName: C,
							globalIndex: S,
							matchCount: (s || (s = o("I64"))).of_int32(f),
							messageTimestampMs: o("MWContentSearchUtils").getMessageTimestamp(l[0].sortOrderMs),
							profilePicUrl: h,
							query: a,
							secondaryProfilePicUrl: y,
							threadKey: t,
							threadType: b,
							type_: u
						})), p && (yield e.message_search_queries.put(babelHelpers.extends({}, c, { resultCount: (s || (s = o("I64"))).add(c.resultCount, s.one) })));
					});
					return function(n) {
						return e.apply(this, arguments);
					};
				})();
				r("promiseDone")(e.runInTransaction((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						yield R(e);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})(), "readwrite", void 0, void 0, i.id + ":113"));
			}
		}), d.apply(this, arguments);
	}
	l.default = c;
}), 98);
