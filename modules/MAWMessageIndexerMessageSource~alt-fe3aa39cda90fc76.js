__d("MAWMessageIndexerMessageSource", [
	"FBLogger",
	"FtsIndexEntity",
	"MAWFTSIndexedDb",
	"MAWFTSWorker",
	"MAWTransactionMode",
	"MAWVault",
	"MpsForSearch",
	"MpsTypes",
	"WAStanzaUtils"
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
		return t.getMessagesFromExternalIds = async function(t) {
			var e = t.map(o("MpsTypes").toMessageId), n = await o("MpsForSearch").MpsForSearch.getMessagesById(e);
			return n.map(this.mapMessage);
		}, t.getAllMessages = async function(t) {
			var e = await o("MpsForSearch").MpsForSearch.getAllMessages((t == null ? void 0 : t.fromMessageId) != null ? o("MpsTypes").toMessageId(t == null ? void 0 : t.fromMessageId) : void 0, t == null ? void 0 : t.limit);
			return e.map(this.mapMessage).filter(Boolean);
		}, t.getMessagesAfterId = function(t, n) {
			var e;
			return this.getAllMessages(babelHelpers.extends({}, n, { fromMessageId: (e = n == null ? void 0 : n.fromMessageId) != null ? e : t }));
		}, t.getSize = function() {
			return o("MpsForSearch").MpsForSearch.getMessageCount();
		}, e;
	})(), u = new s(), c = (function() {
		function e() {}
		var t = e.prototype;
		return t.getBacklogged = async function(t) {
			var e = await d(t), n = await this.getEphemeralBacklog(), r = [], a = [];
			for (var i of e) {
				var l = i.message, s = i.queueId;
				l != null ? r.push(l) : a.push(s);
			}
			a.length > 0 && await o("FtsIndexEntity").getFtsIndexQueue().delete(a);
			var u = r.concat(n);
			return u.length === 0 ? null : u;
		}, t.getEphemeralBacklog = async function() {
			var e = o("MAWFTSWorker").getFTSWorker().getEphemeralBacklog(), t = await _(e.map(function(e) {
				return e.id;
			})), n = e.filter(function(e) {
				return !t.includes(e.id);
			});
			return o("MAWFTSWorker").getFTSWorker().setEphemeralBacklog(n), n;
		}, t.hasBacklogged = function() {
			return p();
		}, t.removeFromBacklog = function(t) {
			var e = o("MAWFTSWorker").getFTSWorker().getEphemeralBacklog();
			return o("MAWFTSWorker").getFTSWorker().setEphemeralBacklog(e.filter(function(e) {
				return !t.includes(e.id);
			})), m(t.map(o("FtsIndexEntity").toFtsIndexId));
		}, t.getAllAfterId = function(t, n) {
			var e = f(n);
			return t === "" ? this.getAll(e) : u.getMessagesAfterId(t, e);
		}, t.getAll = function(t) {
			var e = f(t);
			return u.getAllMessages(e);
		}, t.size = function() {
			return u.getSize();
		}, e;
	})();
	function d(e) {
		return o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, {
			limit: e == null ? void 0 : e.limit,
			order: "asc"
		}).then(async function(e) {
			var t = e.map(function(e) {
				return e.queueId;
			}), n = e.map(function(e) {
				return o("WAStanzaUtils").toStanzaId(e.id);
			}), r = await u.getMessagesFromExternalIds(n);
			return r.map(function(e, n) {
				return {
					message: e,
					queueId: t[n]
				};
			});
		});
	}
	async function m(e) {
		var t = await o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { filter: function(n) {
			return e.includes(n.id);
		} }).then(function(e) {
			return e.map(function(e) {
				return e.queueId;
			});
		});
		return o("FtsIndexEntity").getFtsIndexQueue().delete(t);
	}
	function p() {
		return o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { limit: 1 }).then(function(e) {
			return e.length > 0;
		});
	}
	function _(e) {
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
	function f(t) {
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
