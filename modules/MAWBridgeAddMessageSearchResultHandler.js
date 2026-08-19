__d("MAWBridgeAddMessageSearchResultHandler", [
	"I64",
	"LSIntEnum",
	"LSMessageSearchType",
	"MAWCurrentUser",
	"MAWFTSRawStringMatcher",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MWInboxSecureContentSearch",
	"Promise",
	"ReQL",
	"addMAWBridgeSearchMessagesToUniversalSearch",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"isMAWUniversalSearchWithEBEnabled",
	"promiseDone",
	"waitForMiActMappingForUniversalSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE), d = u.ofNumber(r("LSMessageSearchType").THREAD);
	function m(t, o, a) {
		return a.length === 0 ? (e || (e = n("Promise"))).resolve() : (e || (e = n("Promise"))).all([f(t, o, a), h(t, o, a)]).then(r("emptyFunction"));
	}
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWFTSRawStringMatcher").load();
			return t.filter(function(t) {
				var r, o = (r = t.msg) == null ? void 0 : r.content;
				return o == null ? !1 : n(e, o);
			});
		}), _.apply(this, arguments);
	}
	function f(e, t, n) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
			var i = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.message_search_queries).getKeyRange(c));
			if (i.length !== 0) return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a[0].chatJid, "MAWBridgeAddMessageSearchResultHandler", function(t, l) {
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var n = i.filter(function(e) {
						return (s || (s = o("I64"))).equal(e.threadKeyV2, l);
					})[0];
					if (n != null) {
						var r = n.query;
						if (!(r == null || r.length < 2)) {
							var u = (s || (s = o("I64"))).to_int32(n.resultCount), c = yield p(r, a);
							c.length !== 0 && (yield o("MWInboxSecureContentSearch").addBridgeSearchMsgsToSearchResult(e, t, n.query, c, u + c.length, s.of_string(o("MAWCurrentUser").getID())));
						}
					}
				})().then(r("emptyFunction"));
			});
		}), g.apply(this, arguments);
	}
	function h(e, t, n) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (r("isMAWUniversalSearchWithEBEnabled")()) {
				var a = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.message_search_queries).getKeyRange(d).filter(function(e) {
					return (s || (s = o("I64"))).equal(e.threadKeyV2, s.one);
				}));
				if (a != null) {
					var i = a.query;
					if (!(i == null || i.length < 2)) {
						var l = yield p(i, n);
						l.length !== 0 && r("promiseDone")(r("waitForMiActMappingForUniversalSearch")(e, n[0].chatJid), function(t) {
							if (t != null) return r("addMAWBridgeSearchMessagesToUniversalSearch")(e, t.serverThreadKey, i, l, a);
						});
					}
				}
			}
		}), y.apply(this, arguments);
	}
	l.call = m;
}), 98);
