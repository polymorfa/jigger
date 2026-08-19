__d("MpsFtsPostProcessor", [
	"FtsIndexEntity",
	"MawMpsMessagePayloadUtils",
	"MpsTypes",
	"WebMps",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"isWAFTSContentSearchEnabled"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (!r("isWAFTSContentSearchEnabled")()) return new Map();
			var t = [];
			for (var n of e) {
				if (yield u(n)) {
					t.push(o("FtsIndexEntity").toIndexMessageEntity(n.directive.targetMessageId));
					continue;
				}
				if (d(n)) {
					t.push(o("FtsIndexEntity").toIndexMessageEntity(n.directive.targetMessageId));
					continue;
				}
				if (m(n)) {
					t.push(o("FtsIndexEntity").toPurgeMessageEntity(n.directive.targetMessageId));
					continue;
				}
				if (p(n)) {
					t.push(o("FtsIndexEntity").toPurgeThreadEntity(n.message.threadId));
					continue;
				}
			}
			if (t.length === 0) return new Map();
			var a = new Map();
			return yield o("FtsIndexEntity").getFtsIndexQueue().add(t).catch(function(t) {
				for (var n of e) a.set(n.message.messageId, r("getErrorSafe")(t));
			}), a;
		}), s.apply(this, arguments);
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return e.directive.actionType === o("MpsTypes").ActionType.UpsertSupplemental && o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(e.message.payload, "edit") != null && (yield o("WebMps").mps().loadMessage({
				config: {
					shouldFetchSupplementals: !1,
					shouldFetchTags: !1,
					strategy: "local-only"
				},
				debug: { purpose: "MpsFtsPostProcessor_shouldIndexSupplemental" },
				messageId: e.directive.targetMessageId,
				threadId: e.message.threadId
			}).then(function(e) {
				return e.success && e.value ? e.value.expiryTimestampMs == null : !1;
			}));
		}), c.apply(this, arguments);
	}
	function d(e) {
		return e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel && e.directive.expiryTimestampMs == null && o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(e.message.payload, "create") != null;
	}
	function m(e) {
		return e.directive.actionType === o("MpsTypes").ActionType.DeleteTopLevel;
	}
	function p(e) {
		return e.directive.actionType === o("MpsTypes").ActionType.DeleteThread;
	}
	var _ = {
		name: "MpsFtsPostProcessor",
		process: e
	};
	l.MpsFtsPostProcessor = _;
}), 98);
