__d("MAWMessageIntegrityFetchMessagesData", [
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"MAWEBDeanonFetch",
	"MAWMessagesCompare",
	"MAWMpsMessageIntegrityFetch",
	"MpsTypes",
	"WAResultOrError",
	"WAStanzaUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(e, t, n, r) {
		var a = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "identifyXMAWithAssociatedTextByExternalId", { externalIds: r.map(function(e) {
			return o("WAStanzaUtils").toStanzaId(e.offlineThreadingId);
		}) }), i = r.map(c), l = await Promise.all([
			d(r),
			u(e, n, t),
			o("MAWMpsMessageIntegrityFetch").mpsMessageIntegrityFetch(e, "before", n, t)
		]), s = l[0], m = l[1], p = l[2], _ = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "identifyCollapsedMessagesByExternalId", { externalIds: m.map(function(e) {
			return o("WAStanzaUtils").toStanzaId(e.externalId);
		}) });
		function f(e) {
			return !a.includes(o("WAStanzaUtils").toStanzaId(e.externalId));
		}
		function g(e) {
			return !_.includes(o("WAStanzaUtils").toStanzaId(e.externalId));
		}
		function h(e) {
			return f(e) && g(e);
		}
		var y = s.filter(h), C = m.filter(h), b = p == null ? null : p.filter(h), v = i.filter(h), S = r.length - v.length, R = t - S;
		if (C.length === 0) return o("WAResultOrError").makeError("EB result not available");
		var L = o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc"), E = [].concat(C).sort(L).slice(0, R), k = y.sort(L).slice(0, R), I = b != null ? [].concat(b).sort(L).slice(0, R) : null, T = t, D = [].concat(m).sort(L).slice(0, T), x = [].concat(s).sort(L).slice(0, T), $ = p != null ? [].concat(p).sort(L).slice(0, T) : null;
		return o("WAResultOrError").makeResult({
			S518614_messagesBacktest: {
				ebMessages: D,
				mpsMessages: $,
				uiMessages: x
			},
			S518614_pageSizeBacktest: T,
			messages: {
				ebMessages: E,
				mpsMessages: I,
				uiMessages: k
			},
			pageSize: R
		});
	}
	async function u(e, t, n) {
		var r, a, i = m(t), l = i.msgId, s = i.timestampMs, u = await (l == null ? Promise.resolve(null) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: l })), c = (r = u == null ? void 0 : u.externalId) != null ? r : (a = t.lastItemFromPreviousPage) == null ? void 0 : a.offlineThreadingId, d = await o("MAWEBDeanonFetch").fetchMessagesMetadataFromEBDeanon({
			chatJid: e,
			count: n * 2,
			direction: "before",
			includeReferenceTimestamp: !0,
			referenceExternalId: c,
			referenceTimestampMs: s
		});
		if (d.success === !1) return [];
		var p = d.value.sort(o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc")), _ = p.findIndex(function(e) {
			return e.externalId === c;
		});
		return p.slice(_ + 1);
	}
	function c(t) {
		return {
			externalId: t.offlineThreadingId,
			msgType: (e || (e = o("I64"))).to_string(t.displayedContentTypes),
			sortOrderMs: e.to_float(t.primarySortKey)
		};
	}
	function d(e) {
		var t = function(t) {
			var e = o("MAWDbMsg").toMsgId(t.messageId);
			return e == null ? Promise.resolve(c(t)) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: e }).then(function(e) {
				var n;
				return babelHelpers.extends({}, t, { offlineThreadingId: (n = e == null ? void 0 : e.externalId) != null ? n : t.offlineThreadingId });
			}).then(c);
		};
		return Promise.all(e.map(t));
	}
	function m(t) {
		return t.type === "lastItemFromPreviousPage" ? {
			messageId: o("MpsTypes").toMessageId(t.lastItemFromPreviousPage.offlineThreadingId),
			msgId: o("MAWDbMsg").toMsgId(t.lastItemFromPreviousPage.messageId),
			timestampMs: o("WATimeUtils").castToMillisTime((e || (e = o("I64"))).to_float(t.lastItemFromPreviousPage.primarySortKey))
		} : (t.type, {
			messageId: null,
			msgId: null,
			timestampMs: o("WATimeUtils").millisTime()
		});
	}
	l.fetchMessagesDataForComparison = s, l.getRangeDetailsFromMessageIntegrityFromReference = m;
}), 98);
