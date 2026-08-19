__d("MAWMessageIntegrityChecker", ["FBLogger", "MAWMessagesCompare"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return e.externalId === t.externalId ? 0 : e.sortOrderMs > t.sortOrderMs ? 1 : -1;
	}
	function s(e, t) {
		var n = t.reduce(function(e, t) {
			return t.externalId != null && e.set(t.externalId, t.sortOrderMs), e;
		}, new Map());
		return e.map(function(e) {
			var t;
			return babelHelpers.extends({}, e, { sortOrderMs: (t = e.externalId != null ? n.get(e.externalId) : null) != null ? t : e.sortOrderMs });
		}).sort(o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc"));
	}
	function u(e, t, n) {
		var r = new Set(e.map(function(e) {
			return e.externalId;
		}).filter(Boolean));
		return t.toSorted(o("MAWMessagesCompare").makeCompareMessageMetadataForDescOrderFn(r)).slice(0, n);
	}
	function c(t, n, o, a, i) {
		for (var l = new Set(t.map(function(e) {
			return e.externalId;
		})), c = new Set(n.map(function(e) {
			return e.externalId;
		})), m = d(l, c), p = d(c, l), _ = s(t, n), f = u(_, n, o), g = 0, h = 0, y = 0, C = 0, b = [], v = null; g < _.length && h < f.length;) {
			var S = _[g], R = f[h];
			if (v != null && e(R, v) === 0) {
				h += 1, v = R, r("FBLogger")("messenger_web_missing_messages").mustfix("Detected duplicate messages in reference. Target source: %s, reference source: %s", a, i);
				continue;
			}
			var L = e(S, R);
			L === 0 ? (g += 1, h += 1, v = R, b.push([S, { result: "consistent" }])) : L < 0 ? (h += 1, v = R, y += 1, b.push([R, { result: "missing_in_target" }])) : (g += 1, C += 1, b.push([S, { result: "missing_in_reference" }]));
		}
		for (; g < _.length;) {
			var E = _[g];
			g += 1, f.length < o ? (C += 1, b.push([E, { result: "missing_in_reference" }])) : b.push([E, { result: "skipped_in_target" }]);
		}
		for (; h < f.length;) {
			var k = f[h];
			h += 1, _.length < o ? (y += 1, b.push([k, { result: "missing_in_target" }])) : b.push([k, { result: "skipped_in_reference" }]);
		}
		return y === 0 && C === 0 ? {
			detailedResults: b,
			result: "consistent",
			setDifferenceInReference: p,
			setDifferenceInTarget: m
		} : y > 0 && C === 0 ? {
			detailedResults: b,
			numOfMissingMessages: y,
			result: "missing_in_target",
			setDifferenceInReference: p,
			setDifferenceInTarget: m
		} : y === 0 && C > 0 ? {
			detailedResults: b,
			numOfMissingMessages: C,
			result: "missing_in_reference",
			setDifferenceInReference: p,
			setDifferenceInTarget: m
		} : {
			detailedResults: b,
			numOfMissingMessages: C + y,
			result: "missing_in_both",
			setDifferenceInReference: p,
			setDifferenceInTarget: m
		};
	}
	function d(e, t) {
		var n = 0;
		for (var r of e) t.has(r) || (n += 1);
		return n;
	}
	l.checkIntegrityforMessageList = c;
}), 98);
