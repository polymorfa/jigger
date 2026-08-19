__d("EBMessageMetadataCache", [
	"Base64Utils",
	"EBLogger",
	"EBMessageMetadataQuery",
	"MpsTypes",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("EBLogger").EBLogger().tags(["EBMessageMetadataCache"]), u = new Map();
	function c(e) {
		var t = e.chatJid, n = e.direction, r = e.numberOfMessages, a = e.referenceMessage, i = e.referenceTimestamp, l = u.get(t);
		if (l == null) return o("WAResultOrError").makeError("invalid");
		var s = l.hasMore, c = l.messages;
		if (c.length < r && s === !0) return o("WAResultOrError").makeError("invalid");
		if (c.length === 0) return o("WAResultOrError").makeResult([]);
		var m = i == null ? -1 : d(c, n, i, a), p = c[c.length - 1].sortOrderMs;
		switch (n) {
			case "desc": return i == null || i > p ? o("WAResultOrError").makeResult(c.slice(c.length - r)) : m < r - 1 && s === !0 ? o("WAResultOrError").makeError("invalid") : o("WAResultOrError").makeResult(c.slice(Math.max(m - r + 1, 0), m + 1));
			case "asc": return m === -1 || m + r > c.length ? o("WAResultOrError").makeError("invalid") : o("WAResultOrError").makeResult(c.slice(m, m + r));
		}
	}
	function d(e, t, n, r) {
		if (n == null) return -1;
		if (r != null) {
			var o = e.findIndex(function(e) {
				var t = e.offlineThreadingId, o = e.sortOrderMs;
				return o === n && t === r;
			});
			return o === -1 ? -1 : t === "asc" ? o + 1 : o - 1;
		}
		return e.findIndex(function(e) {
			var t = e.sortOrderMs;
			return t === n;
		});
	}
	function m(e) {
		for (var t of e) f(t);
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.chatJid, n = e.direction, r = e.numberOfMessages, a = e.referenceTimestamp, i = yield o("EBMessageMetadataQuery").messageMetadataQuery({
				chatJid: t,
				direction: n === "asc" ? "after" : n === "desc" ? "before" : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
				})(),
				numberOfMessages: r,
				referenceTimestamp: a
			});
			if (i.success === !1) return o("WAResultOrError").makeError(i.error);
			var l = h(i.value);
			return u.set(t, {
				hasMore: i.value.length === r,
				messages: l
			}), o("WAResultOrError").makeResult(l);
		}), _.apply(this, arguments);
	}
	function f(e, t) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			s.info("Refreshing cache for thread %s", t);
			var a = r("justknobx")._("4743");
			try {
				var i = yield o("EBMessageMetadataQuery").messageMetadataQuery({
					chatJid: t,
					direction: "before",
					numberOfMessages: a
				});
				if (i.success === !0) {
					var l = i.value;
					l.length > 0 && u.set(t, {
						hasMore: l.length === a,
						messages: h(l)
					});
				}
			} catch (t) {
				s.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to get EBMetadata whilst refreshing cache for thread"])));
			}
		}), g.apply(this, arguments);
	}
	function h(e) {
		var t = e.map(function(e) {
			var t = e.adminMessage, n = e.isAdminMessage, a = e.offlineThreadingId, i = e.senderId, l = e.sortOrderMs;
			if (a == null || l == null) throw r("err")("offlineThreadingId or sortOrderMs is null");
			var s = {
				offlineThreadingId: a,
				sortOrderMs: o("MpsTypes").toTimestamp(Number(l))
			};
			return i != null && (s.senderId = i), t != null && (s.adminMessage = o("Base64Utils").toArrayBuffer(t)), n != null && (s.isAdminMessage = n), s;
		});
		return t.sort(function(e, t) {
			return e.sortOrderMs === t.sortOrderMs ? e.offlineThreadingId > t.offlineThreadingId ? 1 : -1 : e.sortOrderMs - t.sortOrderMs;
		});
	}
	function y(e) {
		var t = e.chatJid, n = u.get(t);
		if (n == null) return { status: "absent" };
		var r = n.hasMore, o = n.messages, a = o.length > 0 ? o[0].sortOrderMs : null, i = o.length > 0 ? o[o.length - 1].sortOrderMs : null;
		return {
			count: o.length,
			earliestSortOrderMs: a,
			hasMore: r,
			latestSortOrderMs: i,
			status: "present"
		};
	}
	function C() {
		u.clear();
	}
	l.getEBMetadataFromCache = c, l.preloadEBMetadataCache = m, l.fetchEBMetadata = p, l.refreshCacheForThread = f, l.getCacheDetailsForThreadForLogging = y, l.TESTING_ONLY_clearEBMetadataCache = C;
}), 98);
