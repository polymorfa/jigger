__d("MAWLoadMessagesRequest", [
	"FBLogger",
	"MAWMessagesCompare",
	"MAWMessagesDirection",
	"MessagesRangesV2ExternalIds"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		var a, i;
		if (e.length === 0) return [];
		var l = o("MAWMessagesCompare").getSortComparisonFunctionForDirection(o("MAWMessagesDirection").translateMawDirectionToMwpDirection(n)), u = [].concat(e).sort(l);
		if (t.lowerBoundExternalId != null && ((a = t.lowerBoundExternalId) == null ? void 0 : a.toString()) !== o("MessagesRangesV2ExternalIds").MIN_EXTERNAL_ID && ((i = t.lowerBoundExternalId) == null ? void 0 : i.toString()) !== o("MessagesRangesV2ExternalIds").MAX_EXTERNAL_ID) {
			var c = u.findIndex(function(e) {
				return e.externalId === t.lowerBoundExternalId;
			});
			c !== -1 ? u = u.slice(c) : r("FBLogger")("messenger_web").mustfix("Get messages for range: no external id in source msgs list");
		}
		return u = s(u, t), u.slice(0, t.numMsgs);
	}
	function s(e, t) {
		return t.includeLowerBoundMsg || e.length === 0 ? e : e[0].externalId === t.lowerBoundExternalId || e[0].sortOrderMs === t.lowerBoundSortOrderMs ? e.slice(1) : e;
	}
	l.getMsgsForRange = e;
}), 98);
