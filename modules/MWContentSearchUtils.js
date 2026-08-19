__d("MWContentSearchUtils", [
	"fbt",
	"I64",
	"LSIntEnum",
	"LSMessageSearchType",
	"MAWVault",
	"escapeRegExp",
	"gkx"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = r("gkx")("1798");
	function d(e) {
		return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	}
	function m(e, t) {
		var n = d(e).split(" "), o = d(t), a = [], i = [];
		return n.forEach(function(e) {
			var t = new RegExp(r("escapeRegExp")(e), "gi"), n = o.matchAll(t), l = Array.from(n), s = l.map(function(e) {
				return e.index;
			}), u = s.map(function(t) {
				return e.length;
			});
			i.push.apply(i, s), a.push.apply(a, u);
		}), {
			matchLengths: a.join(","),
			matchOffsets: i.join(",")
		};
	}
	function p(t, n, a, i) {
		if (a != null && (n === 1 || (e || (e = o("I64"))).equal(i, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageSearchType").MESSAGE)))) {
			var l = o("MAWVault").isVaulted(a) ? o("MAWVault").unvault(a) : a, c = m(t, l);
			return babelHelpers.extends({ contextLine: l }, c);
		} else return {
			contextLine: s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			).toString(),
			matchLengths: void 0,
			matchOffsets: void 0
		};
	}
	function _(e, t) {
		return e === 1 && t != null ? t : void 0;
	}
	function f(e, t) {
		return e === 1 && t != null ? t : void 0;
	}
	function g(t) {
		return t != null ? (e || (e = o("I64"))).of_float(t) : void 0;
	}
	function h(t, n) {
		var r = (e || (e = o("I64"))).of_float(-t);
		return n == null ? r : e.min(r, n);
	}
	function y(t, n) {
		return !c || t.messageTimestampMs == null || n.messageTimestampMs == null ? (e || (e = o("I64"))).gt(t.globalIndex, n.globalIndex) ? 1 : (e || (e = o("I64"))).lt(t.globalIndex, n.globalIndex) ? -1 : 0 : (e || (e = o("I64"))).lt(t.messageTimestampMs, n.messageTimestampMs) ? 1 : (e || (e = o("I64"))).gt(t.messageTimestampMs, n.messageTimestampMs) ? -1 : 0;
	}
	l.getContextLineAndMatches = p, l.getMessageOtid = _, l.getMessageId = f, l.getMessageTimestamp = g, l.getGlobalIndex = h, l.searchResultsCompareFn = y;
}), 226);
