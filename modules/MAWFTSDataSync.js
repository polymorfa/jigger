__d("MAWFTSDataSync", [
	"FBLogger",
	"FtsIndexEntity",
	"MAWBridgeParticipants",
	"MAWBridgeSearchMsg",
	"MAWBridgeTypesCreators",
	"MAWDataSyncQueue",
	"MAWDbGroupInfoTxns",
	"MAWDexieTable",
	"MAWFTSWorker",
	"MAWInMemoryGroupInfoStore",
	"MAWIndexedDb",
	"MAWMiniSearchSingleton",
	"MAWTransactionMode",
	"MAWUserJidWrapper",
	"WAWaitForUserUnblocked",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"getErrorSafe",
	"isSearchEnabled",
	"isWAFTSContentSearchEnabled",
	"justknobx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("justknobx")._("1146"), u = new Set([
		"groupInfo",
		"messages",
		"participants"
	]), c = new Map();
	function d(e, t) {
		return e + ":" + t;
	}
	function m(e, t) {
		t.forEach(function(t) {
			var n = d(e, t), o = c.get(n);
			o && (r("MAWMiniSearchSingleton").getInstance().remove(o), c.delete(n));
		});
	}
	function p(e) {
		var t = c.get(e.id);
		t != null && (r("MAWMiniSearchSingleton").getInstance().remove(t), c.delete(e.id)), c.set(e.id, e), r("MAWMiniSearchSingleton").getInstance().add(e);
	}
	function _(e) {
		if (e != null) {
			var t = e.name;
			if (t != null) {
				var n = {
					content: t,
					id: d("groupInfo", e.groupJid),
					raw: e,
					type: "DbGroupInfo"
				};
				p(n);
			}
		}
	}
	var f = function(t) {
		return t.threads.get({ jid: o("MAWUserJidWrapper").getMyUserJid() }).then(function(e) {
			e != null && t.participants.get({
				threadJid: e.jid,
				userJid: o("MAWUserJidWrapper").getMyUserJid()
			}).then(function(e) {
				e != null;
			}).catch(function(e) {
				var t = r("getErrorSafe")(e);
				r("FBLogger")("messenger_web").catching(t).mustfix("Failed to fetch participant details for e2ee self thread");
			});
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			r("FBLogger")("messenger_web").catching(t).mustfix("Failed to fetch self e2ee thread from DB");
		});
	};
	function g(e, t) {
		if (t === void 0 && (t = !1), e != null && !(e.userJid === o("MAWUserJidWrapper").getMyUserJid() && !t)) {
			var n = {
				content: "",
				id: d("participants", e.id),
				raw: e,
				type: "DbParticipant"
			};
			p(n);
		}
	}
	var h = o("MAWIndexedDb").makeMsgrTransactor({ messages: (e = o("MAWTransactionMode")).READONLY }, "FTSGetExternalId", function(e) {
		return function(t) {
			var n = b("messages", t);
			return e.messages.bulkGet(n);
		};
	});
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.reduce(function(e, t) {
				var n = t.externalId, r = t.item, a = r.value.tableName;
				if (a !== "messages") return e;
				var i = r.value.key;
				if (i == null || typeof i != "number" || n == null) return e;
				e: {
					if (r.type === "add" || r.type === "put") {
						var l = o("FtsIndexEntity").toIndexMessageEntity(n);
						e[0].push(l);
						break e;
					}
					if (r.type === "delete") {
						e[1].push(o("FtsIndexEntity").toFtsIndexId(n));
						break e;
					}
					if (r.type === "deleteRange") break e;
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r.type);
				}
				return e;
			}, [[], []]), n = t[0], r = t[1];
			if (n.length > 0 && (yield o("FtsIndexEntity").getFtsIndexQueue().add(n)), r.length > 0) {
				var a = yield o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { filter: function(t) {
					return r.includes(t.id);
				} }).then(function(e) {
					return e.map(function(e) {
						return e.queueId;
					});
				});
				yield o("FtsIndexEntity").getFtsIndexQueue().delete(a);
			}
		}), C.apply(this, arguments);
	}
	var b = function(t, n) {
		return n.filter(function(e) {
			return e.value.tableName === t;
		}).map(function(e) {
			return e.value.key;
		});
	}, v = o("MAWIndexedDb").makeMsgrTransactor({
		messages: e.READONLY,
		participants: e.READONLY,
		threads: e.READONLY
	}, "FTS", function(e) {
		return function(t) {
			var n = b("groupInfo", t), r = b("participants", t);
			if (n.length > 0) {
				var a = o("MAWDbGroupInfoTxns").getGroupInfos(n);
				m("groupInfo", n), a.forEach(_);
			}
			return o("MAWDexieTable").dexieAll([r.length > 0 && e.participants.bulkGet(r).then(function(e) {
				m("participants", r), e.forEach(function(e) {
					g(e);
				});
			})].filter(Boolean));
		};
	}), S = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (r("isWAFTSContentSearchEnabled")()) {
				var t = e.filter(function(e) {
					return e.value.tableName === "messages";
				});
				if (t.length !== 0) {
					if (s) {
						r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							yield o("MAWFTSWorker").getFTSWorker().index({
								estimatedNumMessages: t.length,
								type: "LOCAL"
							});
						})());
						return;
					}
					var a = yield h(t), i = t.map(function(e, t) {
						var n;
						return {
							externalId: (n = a[t]) == null ? void 0 : n.externalId,
							item: e
						};
					});
					yield y(i), yield o("MAWFTSWorker").getFTSWorker().index({
						estimatedNumMessages: a.length,
						type: "LOCAL"
					});
				}
			}
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), R = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.filter(function(e) {
				var t = e.value;
				return u.has(t.tableName);
			});
			t.length > 0 && (yield v(t));
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), L = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.filter(function(e) {
				var t = e.value;
				return u.has(t.tableName);
			});
			t.length > 0 && (yield S(t));
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), E = o("MAWIndexedDb").makeMsgrTransactor({
		messages: e.READONLY,
		participants: e.READONLY,
		threads: e.READONLY
	}, "FTS", function(e) {
		return function() {
			o("MAWInMemoryGroupInfoStore").getCommittedInMemoryGroupInfoStore().getAll().reverse().forEach(_);
			var t = [e.participants.toCollection().each(function(e) {
				e != null && g(e);
			}), f(e)].filter(Boolean);
			return o("MAWDexieTable").dexieAll(t).then(r("emptyFunction"));
		};
	});
	function k() {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = o("MAWFTSWorker").getFTSWorker();
			yield e.performInit();
		}), I.apply(this, arguments);
	}
	function T() {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!r("isSearchEnabled")()) return !1;
			var e = r("isWAFTSContentSearchEnabled")();
			try {
				if (e) {
					yield o("WAWaitForUserUnblocked").waitForUserUnblocked();
					var t = o("MAWFTSWorker").getFTSWorker();
					yield k(), yield t.indexFull(), s && (yield t.index({
						estimatedNumMessages: 0,
						type: "LOCAL"
					}), o("MAWDataSyncQueue").registerDataSyncCallback(L));
				}
				return o("MAWDataSyncQueue").registerDataSyncCallback(R), s || o("MAWDataSyncQueue").registerDataSyncCallback(L), yield E(), !0;
			} catch (e) {
				var n = r("getErrorSafe")(e);
				return r("FBLogger")("messenger_web").catching(n).mustfix("Error paging results from MAWDB for FTS, searching messages will not work this session"), !1;
			}
		}), D.apply(this, arguments);
	}
	function x(e) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.query, n = e.searchMode;
			if (n !== o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH) return [];
			var a = r("isWAFTSContentSearchEnabled")();
			if (!a) return [];
			var i = o("MAWFTSWorker").getFTSWorker(), l = yield i.search(t), s = l[0], u = l[1], c = [];
			return s.map(function(e) {
				return babelHelpers.extends({
					matchedTerms: c,
					recordType: "msg"
				}, e);
			}).concat(u.map(function(e) {
				return babelHelpers.extends({}, e, {
					matchedTerms: c,
					recordType: "msg"
				});
			}));
		}), $.apply(this, arguments);
	}
	function P(e) {
		var t = e.query, n = e.searchMode;
		if (n === o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH) return [];
		var a = r("MAWMiniSearchSingleton").getInstance().search(t), i = a.map(function(e) {
			var t = e.id, n = e.terms, r = c.get(t);
			if (r != null) switch (r.type) {
				case "DbGroupInfo": return babelHelpers.extends({
					matchedTerms: n,
					recordType: "groupInfo"
				}, o("MAWBridgeTypesCreators").createBridgeGroupInfo(r.raw));
				case "DbParticipant": return babelHelpers.extends({
					matchedTerms: n,
					recordType: "participant"
				}, o("MAWBridgeParticipants").createBridgeParticipant(r.raw));
				default: return;
			}
		}).filter(Boolean);
		return i;
	}
	function N(e) {
		return M.apply(this, arguments);
	}
	function M() {
		return M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (!r("isSearchEnabled")()) return [];
			var t = P(e), n = yield x(e), o = t.concat(n);
			return o;
		}), M.apply(this, arguments);
	}
	l.initFTS = T, l.search = N;
}), 98);
