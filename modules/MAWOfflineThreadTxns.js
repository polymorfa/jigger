__d("MAWOfflineThreadTxns", [
	"I64",
	"MAWBridgeThread",
	"MAWDbGroupInfoTxns",
	"MAWDbParticipantTxns",
	"MAWDbThread",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLoadOneToOneMessageRequestCapabilitiesTxn",
	"MAWThreadMappingQPL",
	"MAWUserJidWrapper",
	"MAWWriteBulkWriteIncomingAdminMsgTxns",
	"MWFBLogger",
	"WAArrayZip",
	"WAJids",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Set();
	function c(e, t, n, r) {
		return m(e, t, n, function(e) {
			return o("MAWInMemoryThreadStore").initializeInMemoryThreadsIfMissing(e, r);
		}, function(t) {
			return o("MAWWriteBulkWriteIncomingAdminMsgTxns").writeE2EEAdminMsgsForIncomingCreatedThreadsWithAfterTxns(e, t);
		}, null);
	}
	function d(e, t, n, r) {
		return m(e, t, n, function(e) {
			return o("MAWInMemoryThreadStore").initializeInMemoryThreadsIfMissingFromMpsThreadMsgInfo(e, r);
		}, function() {
			return o("MAWDexieTable").dexieResolve();
		}, r);
	}
	function m(t, n, r, a, i, l) {
		var s = [], c = new Set(n), d = new Map(), m = new Map();
		return r.forEach(function(e) {
			m.set(e.jid, "exists"), d.set(e.jid, e), c.delete(e.jid), s.push(e);
		}), c.forEach(function(t) {
			u.has(t) && o("MWFBLogger").MWLogger().tags(["occamadillo", "incoming_processing"]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Duplicated thread creation for ", ""])), t);
		}), h(c).then(function(e) {
			var n = [];
			e.oneToOneThreadsCreationData.forEach(function(e) {
				u.add(e.thread.jid), o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && n.push(e.thread);
			}), e.groupThreadsCreationData.forEach(function(e, t) {
				u.add(t), e.groupInfo == null && m.set(t, "missing"), o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && n.push(e.thread);
			});
			var r = o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() ? a(n) : o("MAWDexieTable").dexieResolve();
			return r.then(function() {
				return (o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : t.threads.bulkAdd(y(e, l), { allKeys: !0 })).then(function() {
					return o("MAWDbThreadTxns").getThreads(t, Array.from(c.values())).then(function(e) {
						e.forEach(function(e) {
							return d.set(e.jid, e);
						}), s.push.apply(s, e), f(s);
						var n = b(e);
						return o("MAWDexieTable").dexieAll([p(t, n), i(e)]);
					}).then(function() {
						return {
							threadCreationResult: m,
							threads: d
						};
					});
				});
			});
		});
	}
	function p(e, t) {
		return o("MAWDexieTable").dexieAll([_(e, t), o("MAWLoadOneToOneMessageRequestCapabilitiesTxn").loadOneToOneMessageRequestCapabilities(Array.from(t.values()).map(function(e) {
			return e.jid;
		}))]);
	}
	function _(e, t) {
		var n = [], a = o("MAWUserJidWrapper").getMyUserJid();
		return t.forEach(function(e, t) {
			n.push({
				chatJid: t,
				type: "participant",
				userJid: t
			}), a !== t && n.push({
				chatJid: t,
				type: "participant",
				userJid: a
			});
		}), o("MAWDbParticipantTxns").bulkAddParticipantsInThreads(e, n).then(r("emptyFunction"));
	}
	function f(e) {
		e.forEach(function(e) {
			var t = o("MAWThreadMappingQPL").getInstanceKeyForJidInWorker(e.jid);
			o("MAWThreadMappingQPL").startInWorker({
				instanceKey: t,
				jid: e.jid,
				threadKey: e.optimisticThreadKey == null ? void 0 : (s || (s = o("I64"))).of_string(e.optimisticThreadKey),
				trigger: "createAllThreadsForOfflineMsgs"
			}), o("MAWThreadMappingQPL").addPoint("verify_optimistic_maw_thread", t), o("MAWIndexedDb").afterTransaction({
				tag: "VerifyThreadExists",
				value: o("MAWBridgeThread").createBridgeThread(e, e.optimisticThreadKey, e.authoritativeThreadKey, "createAllThreadsForOfflineMsgs", t)
			});
		});
	}
	function g(e, t) {
		return {
			folder: null,
			jid: e,
			lastReadMsg: null,
			lastReadMsgReceiptSent: null,
			lastReadMsgTs: null,
			newestMsgTs: t != null ? o("WATimeUtils").castUnixTimeToMillisTime(t) : null,
			oldestMsg: null,
			optimisticThreadKey: void 0,
			threadOrder: o("MAWDbThread").craftThreadOrder(o("WATimeUtils").millisTime(), e)
		};
	}
	function h(e) {
		var t = [], n = [];
		e.forEach(function(e) {
			o("WAJids").switchOnMsgrChatJidType(e, {
				group: function(n) {
					return t.push(n);
				},
				user: function(t) {
					return n.push(t);
				}
			});
		});
		var r = o("MAWDbGroupInfoTxns").getGroupInfos(t), a = new Map(o("WAArrayZip").zip(t, r)), i = new Map(t.map(function(e) {
			var t = a.get(e);
			return [e, {
				groupInfo: t,
				thread: g(e, t == null ? void 0 : t.creationTs)
			}];
		})), l = new Map(n.map(function(e) {
			return [e, { thread: g(e, null) }];
		}));
		return o("MAWDexieTable").dexieResolve({
			groupThreadsCreationData: i,
			oneToOneThreadsCreationData: l
		});
	}
	function y(e, t) {
		var n = e.groupThreadsCreationData, r = e.oneToOneThreadsCreationData;
		return Array.from(n.values()).map(function(e) {
			var t = e.thread;
			return t;
		}).concat(Array.from(r.values()).map(function(e) {
			var t = e.thread;
			return t;
		})).map(function(e) {
			return C(e, t);
		});
	}
	function C(e, t) {
		var n, r, a, i, l = t == null ? void 0 : t.get(e.jid);
		if (l == null) return e;
		var s = (n = l.newestMsgTs) != null ? n : e.newestMsgTs;
		return babelHelpers.extends({}, e, {
			newestMsgTs: s,
			oldestMsg: (r = l.oldestMsgId) != null ? r : e.oldestMsg,
			snippetMsg: (a = l.newestMsgId) != null ? a : e.snippetMsg,
			snippetMsgTs: (i = l.newestMsgTs) != null ? i : e.snippetMsgTs,
			threadOrder: s != null ? o("MAWDbThread").craftThreadOrder(s, e.jid) : e.threadOrder
		});
	}
	function b(e) {
		var t = new Map();
		return e.forEach(function(e) {
			o("WAJids").switchOnMsgrChatJidType(e.jid, {
				group: r("emptyFunction"),
				user: function(r) {
					return t.set(r, e);
				}
			});
		}), t;
	}
	l.createAllThreadsForOfflineMsgs = c, l.createAllThreadsForOfflineMsgsForMps = d;
}), 98);
