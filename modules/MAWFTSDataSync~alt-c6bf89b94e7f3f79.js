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
			var n = C("messages", t);
			return e.messages.bulkGet(n);
		};
	});
	async function y(e) {
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
		if (n.length > 0 && await o("FtsIndexEntity").getFtsIndexQueue().add(n), r.length > 0) {
			var a = await o("FtsIndexEntity").getFtsIndexQueue().readFromIndexRange("[kind+addedAtMs]", { only: ["INDEX_MESSAGE"] }, { filter: function(t) {
				return r.includes(t.id);
			} }).then(function(e) {
				return e.map(function(e) {
					return e.queueId;
				});
			});
			await o("FtsIndexEntity").getFtsIndexQueue().delete(a);
		}
	}
	var C = function(t, n) {
		return n.filter(function(e) {
			return e.value.tableName === t;
		}).map(function(e) {
			return e.value.key;
		});
	}, b = o("MAWIndexedDb").makeMsgrTransactor({
		messages: e.READONLY,
		participants: e.READONLY,
		threads: e.READONLY
	}, "FTS", function(e) {
		return function(t) {
			var n = C("groupInfo", t), r = C("participants", t);
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
	}), v = async function(t) {
		if (r("isWAFTSContentSearchEnabled")()) {
			var e = t.filter(function(e) {
				return e.value.tableName === "messages";
			});
			if (e.length !== 0) {
				if (s) {
					r("promiseDone")((async function() {
						await o("MAWFTSWorker").getFTSWorker().index({
							estimatedNumMessages: e.length,
							type: "LOCAL"
						});
					})());
					return;
				}
				var n = await h(e), a = e.map(function(e, t) {
					var r;
					return {
						externalId: (r = n[t]) == null ? void 0 : r.externalId,
						item: e
					};
				});
				await y(a), await o("MAWFTSWorker").getFTSWorker().index({
					estimatedNumMessages: n.length,
					type: "LOCAL"
				});
			}
		}
	}, S = async function(t) {
		var e = t.filter(function(e) {
			var t = e.value;
			return u.has(t.tableName);
		});
		e.length > 0 && await b(e);
	}, R = async function(t) {
		var e = t.filter(function(e) {
			var t = e.value;
			return u.has(t.tableName);
		});
		e.length > 0 && await v(e);
	}, L = o("MAWIndexedDb").makeMsgrTransactor({
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
	async function E() {
		var e = o("MAWFTSWorker").getFTSWorker();
		await e.performInit();
	}
	async function k() {
		if (!r("isSearchEnabled")()) return !1;
		var e = r("isWAFTSContentSearchEnabled")();
		try {
			if (e) {
				await o("WAWaitForUserUnblocked").waitForUserUnblocked();
				var t = o("MAWFTSWorker").getFTSWorker();
				await E(), await t.indexFull(), s && (await t.index({
					estimatedNumMessages: 0,
					type: "LOCAL"
				}), o("MAWDataSyncQueue").registerDataSyncCallback(R));
			}
			return o("MAWDataSyncQueue").registerDataSyncCallback(S), s || o("MAWDataSyncQueue").registerDataSyncCallback(R), await L(), !0;
		} catch (e) {
			var n = r("getErrorSafe")(e);
			return r("FBLogger")("messenger_web").catching(n).mustfix("Error paging results from MAWDB for FTS, searching messages will not work this session"), !1;
		}
	}
	async function I(e) {
		var t = e.query, n = e.searchMode;
		if (n !== o("MAWBridgeSearchMsg").MESSAGE_CONTENT_SEARCH) return [];
		var a = r("isWAFTSContentSearchEnabled")();
		if (!a) return [];
		var i = o("MAWFTSWorker").getFTSWorker(), l = await i.search(t), s = l[0], u = l[1], c = [];
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
	}
	function T(e) {
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
	async function D(e) {
		if (!r("isSearchEnabled")()) return [];
		var t = T(e), n = await I(e), o = t.concat(n);
		return o;
	}
	l.initFTS = k, l.search = D;
}), 98);
