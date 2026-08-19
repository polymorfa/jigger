__d("MAWFetchDeanonMetadataUsingCache", [
	"I64",
	"MAWDeanonDataCheck",
	"MAWFetchEBDeanonMessagesMetadata",
	"MAWMessagesCompare",
	"MAWMessagesDirection",
	"MAWSubscribeToLSTruncateMetadataThreads",
	"WAJids",
	"WAResultOrError",
	"WATagsLogger",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("WATagsLogger").TAGS(["MAWFetchDeanonMetadataUsingCache"]), d = new Map(), m = r("justknobx")._("3763"), p = new Map(), _ = null;
	async function f(t) {
		var n = t.chatJid, r = t.db, a = t.direction, i = t.isFirstPage, l = t.logger, s = t.pageSize, u = t.range, d = t.sortFn;
		h(r);
		var m = g(n, a, l, u);
		if (m != null && (l == null || l.addQPLAnnotations({
			bool: { is_first_page: i },
			int: { deanon_cached_data_size: m == null ? void 0 : m.length }
		}), o("MAWDeanonDataCheck").hasEnoughDeanonData(m, s, i))) return c.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Using cached Deanon messages metadata for comparison to local data"]))), l == null || l.addQPLAnnotations({ bool: { is_deanon_cached_data_used: !0 } }), o("WAResultOrError").makeResult(m);
		var p = await o("MAWFetchEBDeanonMessagesMetadata").fetchEBDeanonMessagesMetadata({
			chatJid: n,
			direction: a,
			includeReferenceTimestamp: !i,
			logger: l,
			range: u,
			sortFn: d
		});
		return p.success === !0 && (l == null || l.addQPLAnnotations({ bool: { is_deanon_data_fetched: !0 } }), C(n, a, l, p.value, u)), p;
	}
	function g(e, t, n, r) {
		var a;
		n == null || n.markQPLPoint("deanon_cache_fetch_start"), v(e, t);
		var i = (a = d.get(o("WAJids").threadIdForChatJid(e))) == null ? void 0 : a.get(t);
		if (i == null) return null;
		var l = o("MAWMessagesDirection").getI64RangeTimestampForDirection(t, r), s = (u || (u = o("I64"))).ge(l, i.minTimestampMs) && (u || (u = o("I64"))).le(l, i.maxTimestampMs);
		if (!s) return null;
		var c = o("MAWMessagesDirection").switchOnMWPMessagesDirection(t, {
			asc: i.msgsMetadata.findIndex(function(e) {
				return (u || (u = o("I64"))).ge(u.of_float(e.sortOrderMs), l);
			}),
			desc: i.msgsMetadata.findIndex(function(e) {
				return (u || (u = o("I64"))).le(u.of_float(e.sortOrderMs), l);
			})
		}), m = i.msgsMetadata.slice(c);
		return n == null || n.markQPLPoint("deanon_cache_fetch_end"), m;
	}
	function h(e) {
		_ == null && (_ = o("MAWSubscribeToLSTruncateMetadataThreads").subscribeToLSTruncateMetadataThreads(e, function(e, t) {
			var n = (u || (u = o("I64"))).to_string(e);
			d.delete(n), p.delete(n);
		}));
	}
	function y(e, t, n, r) {
		var a, i = o("WAJids").threadIdForChatJid(e), l = (a = d.get(i)) != null ? a : new Map();
		l.set(t, {
			maxTimestampMs: r.max,
			minTimestampMs: r.min,
			msgsMetadata: n
		}), d.set(i, l);
	}
	function C(e, t, n, r, a) {
		if (r.length !== 0) {
			n == null || n.markQPLPoint("deanon_cache_replace_start");
			var i = (u || (u = o("I64"))).of_float(r[r.length - 1].sortOrderMs), l = o("MAWMessagesDirection").switchOnMWPMessagesDirection(t, {
				asc: {
					max: i,
					min: a.maxTimestampMs
				},
				desc: {
					max: a.minTimestampMs,
					min: i
				}
			});
			y(e, t, r, l), n == null || n.markQPLPoint("deanon_cache_replace_end");
		}
	}
	function b(e, t) {
		if (t.length !== 0) {
			for (var n = [].concat(t).sort(o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc")), r = 0, a = n.length - 1; r < a && n[r].sortOrderMs === n[r + 1].sortOrderMs;) r++;
			if (r !== a) {
				var i = (u || (u = o("I64"))).of_float(n[a].sortOrderMs);
				p.set(u.to_string(e), {
					insertTime: Date.now(),
					minTimestampMs: i,
					msgsMetadata: n.slice(r)
				});
			}
		}
	}
	function v(e, t) {
		var n = S(e, t);
		n != null && (c.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Using init-sync deanon data for ", ""])), e), y(e, t, n.msgsMetadata, {
			max: (u || (u = o("I64"))).max_int,
			min: n.minTimestampMs
		}), p.delete(o("WAJids").threadIdForChatJid(e)));
	}
	function S(e, t) {
		if (t === "desc") {
			var n = Date.now(), r = p.get(o("WAJids").threadIdForChatJid(e));
			if (!(r != null && n - r.insertTime > m)) return r;
		}
	}
	l.MAWFetchDeanonMetadataUsingCache = f, l.fetchDeanonDataFromCache = g, l.initDeanonCacheDescForThread = b;
}), 98);
