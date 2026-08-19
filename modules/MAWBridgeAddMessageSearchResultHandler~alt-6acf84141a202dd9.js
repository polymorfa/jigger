__d("MAWBridgeAddMessageSearchResultHandler", [
	"I64",
	"LSIntEnum",
	"LSMessageSearchType",
	"MAWCurrentUser",
	"MAWFTSRawStringMatcher",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MWInboxSecureContentSearch",
	"ReQL",
	"addMAWBridgeSearchMessagesToUniversalSearch",
	"emptyFunction",
	"isMAWUniversalSearchWithEBEnabled",
	"promiseDone",
	"waitForMiActMappingForUniversalSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE), c = e.ofNumber(r("LSMessageSearchType").THREAD);
	function d(e, t, n) {
		return n.length === 0 ? Promise.resolve() : Promise.all([p(e, t, n), _(e, t, n)]).then(r("emptyFunction"));
	}
	async function m(e, t) {
		var n = await o("MAWFTSRawStringMatcher").load();
		return t.filter(function(t) {
			var r, o = (r = t.msg) == null ? void 0 : r.content;
			return o == null ? !1 : n(e, o);
		});
	}
	async function p(e, t, n) {
		var a = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.message_search_queries).getKeyRange(u));
		if (a.length !== 0) return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n[0].chatJid, "MAWBridgeAddMessageSearchResultHandler", function(t, i) {
			return (async function() {
				var r = a.filter(function(e) {
					return (s || (s = o("I64"))).equal(e.threadKeyV2, i);
				})[0];
				if (r != null) {
					var l = r.query;
					if (!(l == null || l.length < 2)) {
						var u = (s || (s = o("I64"))).to_int32(r.resultCount), c = await m(l, n);
						c.length !== 0 && await o("MWInboxSecureContentSearch").addBridgeSearchMsgsToSearchResult(e, t, r.query, c, u + c.length, s.of_string(o("MAWCurrentUser").getID()));
					}
				}
			})().then(r("emptyFunction"));
		});
	}
	async function _(e, t, n) {
		if (r("isMAWUniversalSearchWithEBEnabled")()) {
			var a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.message_search_queries).getKeyRange(c).filter(function(e) {
				return (s || (s = o("I64"))).equal(e.threadKeyV2, s.one);
			}));
			if (a != null) {
				var i = a.query;
				if (!(i == null || i.length < 2)) {
					var l = await m(i, n);
					l.length !== 0 && r("promiseDone")(r("waitForMiActMappingForUniversalSearch")(e, n[0].chatJid), function(t) {
						if (t != null) return r("addMAWBridgeSearchMessagesToUniversalSearch")(e, t.serverThreadKey, i, l, a);
					});
				}
			}
		}
	}
	l.call = d;
}), 98);
