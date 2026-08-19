__d("MAWMessagesRangesUtils", [
	"I64",
	"MAWFindMsgsWithMinAndMaxTimestamp",
	"MAWMessagesDirection"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r, a) {
		var i, l, s = o("MAWFindMsgsWithMinAndMaxTimestamp").findMsgsWithMinAndMaxTimestamp(r.msgs), c = s[0], d = s[1], m = babelHelpers.extends({}, t, o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
			asc: {
				hasMoreAfter: r.hasMoreAfter,
				isLoadingAfter: !1,
				maxMessageId: (i = d == null ? void 0 : d.msgId) != null ? i : t.maxMessageId,
				maxTimestampMs: (e || (e = o("I64"))).max(t.maxTimestampMs, (d == null ? void 0 : d.sortOrderMs) != null ? (e || (e = o("I64"))).of_float(d == null ? void 0 : d.sortOrderMs) : t.maxTimestampMs)
			},
			desc: {
				hasMoreBefore: r.hasMoreBefore,
				isLoadingBefore: !1,
				minMessageId: (l = c == null ? void 0 : c.msgId) != null ? l : t.minMessageId,
				minTimestampMs: e.min(t.minTimestampMs, (c == null ? void 0 : c.sortOrderMs) != null ? (e || (e = o("I64"))).of_float(c == null ? void 0 : c.sortOrderMs) : t.minTimestampMs)
			}
		})), p = u(a, c, d, n);
		return [m, p];
	}
	function u(e, t, n, r) {
		var a, i;
		return babelHelpers.extends({}, o("MAWMessagesDirection").switchOnMWPMessagesDirection(e, {
			asc: {
				maxExternalId: (a = n == null ? void 0 : n.externalId) != null ? a : r.maxExternalId,
				minExternalId: r.minExternalId
			},
			desc: {
				maxExternalId: r.maxExternalId,
				minExternalId: (i = t == null ? void 0 : t.externalId) != null ? i : r.minExternalId
			}
		}));
	}
	l.mergeMoreMessagesResponseIntoRange = s;
}), 98);
