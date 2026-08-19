__d("MawMpsThreadMsgInfo", [
	"FBLogger",
	"MpsToBridgeMessageId",
	"MpsTypes",
	"WATimeUtils",
	"WebMps",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER), s = o("MpsTypes").toTimestamp(0);
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = new Map(), a = Array.from(new Set(t));
			if (a.length === 0) return n;
			var i = a.map(function(t) {
				return {
					direction: "desc",
					from: [e, void 0],
					numMessages: 1,
					threadId: o("MpsTypes").toThreadId(t)
				};
			}), l = a.map(function(e) {
				return {
					direction: "asc",
					from: [s, void 0],
					numMessages: 1,
					threadId: o("MpsTypes").toThreadId(e)
				};
			});
			try {
				var u = yield o("WebMps").mps().batchLoadMessages({
					config: {
						shouldFetchSupplementals: !1,
						shouldFetchTags: !1,
						shouldIgnoreLocalOnly: !1,
						strategy: "local-only",
						tagsFilter: "all"
					},
					debug: { purpose: "MawMpsThreadMsgInfo.bulkGetThreadMsgInfo" },
					ranges: [].concat(i, l)
				});
				if (u.success === !1) return n;
				a.forEach(function(e, t) {
					var r, i, l = (r = u.value[t]) == null ? void 0 : r.messages[0], s = (i = u.value[a.length + t]) == null ? void 0 : i.messages[0];
					l == null && s == null || n.set(e, {
						newestMsgId: l != null ? o("MpsToBridgeMessageId").mpsToBridgeMsgId(l.toplevelProtobuf.threadId, l.toplevelProtobuf.messageId) : null,
						newestMsgTs: l != null ? o("WATimeUtils").castToMillisTime(l.toplevelProtobuf.timestampMs) : null,
						oldestMsgId: s != null ? o("MpsToBridgeMessageId").mpsToBridgeMsgId(s.toplevelProtobuf.threadId, s.toplevelProtobuf.messageId) : null
					});
				});
			} catch (e) {
				return r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("bulkGetThreadMsgInfo: MPS read failed; returning empty result"), new Map();
			}
			return n;
		}), c.apply(this, arguments);
	}
	l.bulkGetThreadMsgInfo = u;
}), 98);
