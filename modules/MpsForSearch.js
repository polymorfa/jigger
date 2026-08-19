__d("MpsForSearch", [
	"MawMpsMessagePayloadUtils",
	"Promise",
	"WebReverbDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"debugFlags",
		"expiryTimestampMs",
		"isLocalOnlyMessage",
		"isTransportErrorPlaceholder",
		"pk"
	], s;
	function u(t, n) {
		var r, a = t.debugFlags, i = t.expiryTimestampMs, l = t.isLocalOnlyMessage, s = t.isTransportErrorPlaceholder, u = t.pk, d = babelHelpers.objectWithoutPropertiesLoose(t, e);
		if (i != null) return { valid: !1 };
		var m = (r = c(n)) != null ? r : o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(d.payload, "create");
		return m == null ? { valid: !1 } : {
			message: babelHelpers.extends({}, d, { content: m }),
			valid: !0
		};
	}
	function c(e) {
		var t = [];
		for (var n of e) {
			var r = o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(n.payload, "edit");
			r != null && t.push([r, n.timestampMs]);
		}
		return t.sort(function(e, t) {
			var n = e[0], r = e[1], o = t[0], a = t[1];
			return a - r;
		}), t.length === 0 ? null : t[0][0];
	}
	function d(e) {
		var t = o("WebReverbDB").getWebReverbDB();
		return t.runInTransaction(["message", "supplemental"], "readonly", function(t) {
			return (s || (s = n("Promise"))).all(e.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield t.stores.message.getByIndex("messageId", [e]);
					if (n == null) return { valid: !1 };
					var r = yield t.stores.supplemental.readIndexRange("[threadId+topLevelMessageId+supplementalKey]", { only: [n.threadId, n.messageId] });
					return u(n, r);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()));
		}, "MpsForSearch_getMessagesById");
	}
	function m(e, t) {
		var r = o("WebReverbDB").getWebReverbDB();
		return r.runInTransaction(["message", "supplemental"], "readonly", (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
				var o = yield r.stores.message.readIndexRange("messageId", { greaterThan: e == null ? [] : [e] }, { limit: t });
				return (s || (s = n("Promise"))).all(o.map((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield r.stores.supplemental.readIndexRange("[threadId+topLevelMessageId+supplementalKey]", { only: [e.threadId, e.messageId] });
						return u(e, t);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()));
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})(), "MpsForSearch_getAllMessages");
	}
	function p() {
		var e = o("WebReverbDB").getWebReverbDB();
		return e.runInTransaction(["message"], "readonly", function(e) {
			return e.stores.message.count();
		}, "fts_getMessagesFromExternalIds");
	}
	function _(e) {
		var t = [];
		for (var n of e) n.valid && t.push(n.message);
		return t;
	}
	var f = {
		filterValid: _,
		getAllMessages: m,
		getMessageCount: p,
		getMessagesById: d
	};
	l.MpsForSearch = f;
}), 98);
