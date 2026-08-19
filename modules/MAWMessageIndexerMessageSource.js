__d("MAWMessageIndexerMessageSource", [
	"FBLogger",
	"FtsIndexEntity",
	"MAWFTSIndexedDb",
	"MAWFTSWorker",
	"MAWTransactionMode",
	"MAWVault",
	"MpsForSearch",
	"MpsTypes",
	"WAStanzaUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["offset"], s = (function() {
		function e() {
			this.mapMessage = function(e) {
				return e.valid ? {
					chatId: e.message.threadId,
					id: e.message.messageId,
					textFragments: [o("MAWVault").unvault(e.message.content)],
					timestamp: e.message.timestampMs
				} : null;
			};
		}
		var t = e.prototype;
		return t.getMessagesFromExternalIds = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e.map(o("MpsTypes").toMessageId), n = yield o("MpsForSearch").MpsForSearch.getMessagesById(t);
				return n.map(this.mapMessage);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.getAllMessages = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("MpsForSearch").MpsForSearch.getAllMessages((e == null ? void 0 : e.fromMessageId) != null ? o("MpsTypes").toMessageId(e == null ? void 0 : e.fromMessageId) : void 0, e == null ? void 0 : e.limit);
				return t.map(this.mapMessage).filter(Boolean);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.getMessagesAfterId = function(t, n) {
			var e;
			return this.getAllMessages(babelHelpers.extends({}, n, { fromMessageId: (e = n == null ? void 0 : n.fromMessageId) != null ? e : t }));
		}, t.getSize = function() {
			return o("MpsForSearch").MpsForSearch.getMessageCount();
		}, e;
	})(), u = new s(), c = (function() {
		function e() {}
		var t = e.prototype;
		return t.getBacklogged = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield d(e), n = yield this.getEphemeralBacklog(), r = [], a = [];
				for (var i of t) {
					var l = i.message, s = i.queueId;
					l != null ? r.push(l) : a.push(s);
				}
				a.length > 0 && (yield o("FtsIndexEntity").getFtsIndexQueue().delete(a));
				var u = r.concat(n);
				return u.length === 0 ? null : u;
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.getEphemeralBacklog = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = o("MAWFTSWorker").getFTSWorker().getEphemeralBacklog(), t = yield f(e.map(function(e) {
					return e.id;
				})), n = e.filter(function(e) {
					return !t.includes(e.id);
				});
				return o("MAWFTSWorker").getFTSWorker().setEphemeralBacklog(n), n;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.hasBacklogged = function() {
			return _();
		}, t.removeFromBacklog = function(t) {
			var e = o("MAWFTSWorker").getFTSWorker().getEphemeralBacklog();
			return o("MAWFTSWorker").getFTSWorker().setEphemeralBacklog(e.filter(function(e) {
				return !t.includes(e.id);
			})), m(t.map(o("FtsIndexEntity").toFtsIndexId));
		}, t.getAllAfterId = function(t, n) {
			var e = g(n);
			return t === "" ? this.getAll(e) : u.getMessagesAfterId(t, e);
		}, t.getAll = function(t) {
			var e = g(t);
			return u.getAllMessages(e);
		}, t.size = function() {
			return u.getSize();
		}, e;
	})();
	function d(e) {
		return o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, {
			limit: e == null ? void 0 : e.limit,
			order: "asc"
		}).then((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e.map(function(e) {
					return e.queueId;
				}), n = e.map(function(e) {
					return o("WAStanzaUtils").toStanzaId(e.id);
				}), r = yield u.getMessagesFromExternalIds(n);
				return r.map(function(e, n) {
					return {
						message: e,
						queueId: t[n]
					};
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
	}
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { filter: function(n) {
				return e.includes(n.id);
			} }).then(function(e) {
				return e.map(function(e) {
					return e.queueId;
				});
			});
			return o("FtsIndexEntity").getFtsIndexQueue().delete(t);
		}), p.apply(this, arguments);
	}
	function _() {
		return o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { limit: 1 }).then(function(e) {
			return e.length > 0;
		});
	}
	function f(e) {
		return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READONLY }, function(t) {
			return function() {
				return t.ftsIndexV3.where("id").anyOf(e).toArray().then(function(e) {
					return e.map(function(e) {
						return e.id;
					});
				});
			};
		})();
	}
	function g(t) {
		if (t == null) return t;
		if (t.limit != null && t.offset != null && t.offset > 0) {
			t.fromMessageId == null && r("FBLogger")("message_search").mustfix("offset and limit cannot be used together");
			var n = t.offset, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
			return o;
		}
		return t;
	}
	l.MAWMessageIndexerMessageSource = c;
}), 98);
