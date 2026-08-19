__d("MAWMessageIntegrityFetchMessagesData", [
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"MAWEBDeanonFetch",
	"MAWMessagesCompare",
	"MAWMpsMessageIntegrityFetch",
	"MpsTypes",
	"Promise",
	"WAResultOrError",
	"WAStanzaUtils",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n, r) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r, a) {
			var i = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "identifyXMAWithAssociatedTextByExternalId", { externalIds: a.map(function(e) {
				return o("WAStanzaUtils").toStanzaId(e.offlineThreadingId);
			}) }), l = a.map(p), u = yield (s || (s = n("Promise"))).all([
				_(a),
				d(e, r, t),
				o("MAWMpsMessageIntegrityFetch").mpsMessageIntegrityFetch(e, "before", r, t)
			]), c = u[0], m = u[1], f = u[2], g = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "identifyCollapsedMessagesByExternalId", { externalIds: m.map(function(e) {
				return o("WAStanzaUtils").toStanzaId(e.externalId);
			}) });
			function h(e) {
				return !i.includes(o("WAStanzaUtils").toStanzaId(e.externalId));
			}
			function y(e) {
				return !g.includes(o("WAStanzaUtils").toStanzaId(e.externalId));
			}
			function C(e) {
				return h(e) && y(e);
			}
			var b = c.filter(C), v = m.filter(C), S = f == null ? null : f.filter(C), R = l.filter(C), L = a.length - R.length, E = t - L;
			if (v.length === 0) return o("WAResultOrError").makeError("EB result not available");
			var k = o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc"), I = [].concat(v).sort(k).slice(0, E), T = b.sort(k).slice(0, E), D = S != null ? [].concat(S).sort(k).slice(0, E) : null, x = t, $ = [].concat(m).sort(k).slice(0, x), P = [].concat(c).sort(k).slice(0, x), N = f != null ? [].concat(f).sort(k).slice(0, x) : null;
			return o("WAResultOrError").makeResult({
				S518614_messagesBacktest: {
					ebMessages: $,
					mpsMessages: N,
					uiMessages: P
				},
				S518614_pageSizeBacktest: x,
				messages: {
					ebMessages: I,
					mpsMessages: D,
					uiMessages: T
				},
				pageSize: E
			});
		}), c.apply(this, arguments);
	}
	function d(e, t, n) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			var a, i, l = f(t), u = l.msgId, c = l.timestampMs, d = yield u == null ? (s || (s = n("Promise"))).resolve(null) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: u }), m = (a = d == null ? void 0 : d.externalId) != null ? a : (i = t.lastItemFromPreviousPage) == null ? void 0 : i.offlineThreadingId, p = yield o("MAWEBDeanonFetch").fetchMessagesMetadataFromEBDeanon({
				chatJid: e,
				count: r * 2,
				direction: "before",
				includeReferenceTimestamp: !0,
				referenceExternalId: m,
				referenceTimestampMs: c
			});
			if (p.success === !1) return [];
			var _ = p.value.sort(o("MAWMessagesCompare").getSortComparisonFunctionForDirection("desc")), g = _.findIndex(function(e) {
				return e.externalId === m;
			});
			return _.slice(g + 1);
		}), m.apply(this, arguments);
	}
	function p(t) {
		return {
			externalId: t.offlineThreadingId,
			msgType: (e || (e = o("I64"))).to_string(t.displayedContentTypes),
			sortOrderMs: e.to_float(t.primarySortKey)
		};
	}
	function _(e) {
		var t = function(t) {
			var e = o("MAWDbMsg").toMsgId(t.messageId);
			return e == null ? (s || (s = n("Promise"))).resolve(p(t)) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: e }).then(function(e) {
				var n;
				return babelHelpers.extends({}, t, { offlineThreadingId: (n = e == null ? void 0 : e.externalId) != null ? n : t.offlineThreadingId });
			}).then(p);
		};
		return (s || (s = n("Promise"))).all(e.map(t));
	}
	function f(t) {
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
	l.fetchMessagesDataForComparison = u, l.getRangeDetailsFromMessageIntegrityFromReference = f;
}), 98);
