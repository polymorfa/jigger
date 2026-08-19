__d("MAWGetOrCreateThreadTxns", [
	"MAWAdminMsgTxns",
	"MAWBridgeThread",
	"MAWBridgeTypesCreators",
	"MAWDbThread",
	"MAWDexieTable",
	"MAWFolderTypes",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWQplProxy",
	"MAWThreadMappingQPL",
	"MAWWriteBulkWriteIncomingAdminMsgTxns",
	"WATimeUtils",
	"WmiMetadataThreadsWriter",
	"getErrorSafe",
	"nullthrows",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		if (e != null && t != null) {
			var n = o("WATimeUtils").fromMillisTime(e), r = o("WATimeUtils").fromMillisTime(t);
			return o("WATimeUtils").castToMillisTime(Math.max(n, r));
		}
		return e != null ? e : t;
	}
	function s(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
		return n.then(function(e) {
			return o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWGetOrCreateThreadTxns.getThread");
		});
	}
	function u(e, t) {
		if (o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively()) {
			var n = o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore();
			return o("MAWDexieTable").dexieResolve(t.map(function(e) {
				return n.get(e);
			}));
		}
		return e.threads.where("jid").anyOf(t).toArray().then(function(e) {
			var n = new Map();
			for (var r of e) n.set(r.jid, r);
			return t.map(function(e) {
				return o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n.get(e), "MAWGetOrCreateThreadTxns.bulkGetExistingThread");
			});
		});
	}
	function c(e, t, n, a) {
		var i = t.instanceKey, l = t.jid;
		return o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056836502, "2778"), "get_or_create_thread_start", { instanceKey: i }), n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "thread_mapping_get_or_create_thread_start", { instanceKey: n }), s(e, l).then(function(i) {
			return i == null ? (n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "create-1-1-thread-start", { instanceKey: n }), p(e, t, n).then(function(e) {
				return {
					created: !0,
					thread: e
				};
			})) : g(e, t, i, a).then(function(e) {
				return {
					created: !1,
					thread: e
				};
			});
		}).then(function(e) {
			return o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(1056836502, "2778"), "get_or_create_thread_end", { instanceKey: i }), n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "thread_mapping_get_or_create_thread_end", { instanceKey: n }), e;
		});
	}
	function d(e, t, n) {
		var r = n === void 0 ? {} : n, a = r.logState, i = r.threadMsgInfo, l = o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() ? o("MAWInMemoryThreadStore").initializeInMemoryThreadsIfMissing(t.map(m), i) : o("MAWDexieTable").dexieResolve();
		return l.then(function() {
			return u(e, t.map(function(e) {
				var t = e.jid;
				return t;
			})).then(function(n) {
				a == null || a("threadMapping2FetchedThreads");
				var r = {}, l = [], s = [];
				for (var u of n.entries()) {
					var c = u[0], d = u[1];
					d == null ? l.push(t[c]) : s.push({
						params: t[c],
						thread: d
					});
				}
				return o("MAWDexieTable").dexieAll([l.length ? _(e, l) : o("MAWDexieTable").dexieResolve([]), s.length ? h(e, s, i) : o("MAWDexieTable").dexieResolve([])]).then(function(e) {
					var n = e[0], o = e[1];
					a == null || a("threadMapping3ThreadsUpdated");
					for (var i of n) {
						var l = i.adminMsgParams, s = i.thread;
						r[s.jid] = {
							adminMsgParams: l,
							created: !0,
							thread: s
						};
					}
					for (var u of o) r[u.jid] = {
						adminMsgParams: null,
						created: !1,
						thread: u
					};
					return t.map(function(e) {
						var t = e.jid;
						return r[t];
					});
				});
			});
		});
	}
	function m(e) {
		var t, n = e.authoritativeThreadKey, r = e.clientThreadKey, a = e.createTs, i = e.deduplicationKey, l = e.folder, s = e.jid, u = e.lastActivityTimestamp, c = o("WATimeUtils").millisTime(), d = (t = u != null ? u : a) != null ? t : c, m = {
			authoritativeThreadKey: n != null ? n : void 0,
			deduplicationKey: i,
			folder: l != null ? l : o("MAWFolderTypes").FOLDER_ID.INBOX,
			jid: s,
			lastReadMsg: null,
			lastReadMsgReceiptSent: null,
			newestMsgTs: d,
			oldestMsg: null,
			optimisticThreadKey: r != null ? r : void 0,
			threadOrder: o("MAWDbThread").craftThreadOrder(d, s)
		};
		return m;
	}
	function p(e, t, n) {
		var a = t.authoritativeThreadKey, i = t.description, l = t.instanceKey, s = t.skipVerifyThread, u = m(t), c = o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() ? o("MAWInMemoryThreadStore").initializeInMemoryThreadsIfMissing([u]) : o("MAWDexieTable").dexieResolve();
		return c.then(function() {
			return o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(u.jid)) : e.threads.add(u).then(function(e) {
				return babelHelpers.extends({}, u, { chatId: e });
			});
		}).then(function(t) {
			var u = r("nullthrows")(t, "createThread: thread missing after creation");
			return s !== !0 && (l != null && o("MAWThreadMappingQPL").addPoint("create_thread_verify_thread_exists", l), o("MAWIndexedDb").afterTransaction({
				tag: "VerifyThreadExists",
				value: o("MAWBridgeThread").createBridgeThread(u, u.optimisticThreadKey, a, i, l)
			})), n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "write-e2ee-admin-msg-in-new-thread", { instanceKey: n }), o("MAWAdminMsgTxns").writeE2EEThreadDescriptionMsg(e, u, n);
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			throw l != null && o("MAWThreadMappingQPL").endFailureInWorker("create_thread_failed", l, { string: { createThreadFailureReason: t.message } }), t.message = "Error creating thread: " + t.message, t;
		});
	}
	function _(e, t) {
		var n = t.map(m), a = o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() ? o("MAWInMemoryThreadStore").initializeInMemoryThreadsIfMissing(n) : o("MAWDexieTable").dexieResolve();
		return a.then(function() {
			return o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(n.map(function(e) {
				return r("nullthrows")(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(e.jid), "bulkCreateThread: thread missing after creation");
			})) : e.threads.bulkAdd(n, { allKeys: !0 }).then(function(e) {
				return e.map(function(e, t) {
					return babelHelpers.extends({}, n[t], { chatId: e });
				});
			});
		}).then(function(n) {
			var r = n.map(function(e, n) {
				return {
					data: e,
					params: t[n]
				};
			});
			for (var a of r) a.params.skipVerifyThread !== !0 && (a.params.instanceKey != null && o("MAWThreadMappingQPL").addPoint("bulk_create_thread_verify_thread_exists", a.params.instanceKey), o("MAWIndexedDb").afterTransaction({
				tag: "VerifyThreadExists",
				value: o("MAWBridgeThread").createBridgeThread(a.data, a.data.optimisticThreadKey, a.params.authoritativeThreadKey, a.params.description, a.params.instanceKey)
			}));
			return o("MAWWriteBulkWriteIncomingAdminMsgTxns").writeE2EEAdminMsgsForIncomingCreatedThreadsWithoutAfterTxns(e, r.map(function(e) {
				return e.data;
			}));
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			throw t.message = "Error bulk creating threads: " + t.message, t;
		});
	}
	function f(t, n, r) {
		var a = n.authoritativeThreadKey, i = n.clientThreadKey, l = n.deduplicationKey, s = n.folder, u = n.lastActivityTimestamp, c = e(r, u), d = c != null && (t.newestMsgTs == null || c > t.newestMsgTs) ? o("MAWDbThread").craftThreadOrder(c, t.jid) : t.threadOrder, m = {
			authoritativeThreadKey: a != null ? a : t.authoritativeThreadKey,
			cannotReplyReason: s != null || i != null ? null : t.cannotReplyReason,
			deduplicationKey: s != null || i != null ? l : t.deduplicationKey,
			folder: s != null ? s : t.folder,
			newestMsgTs: c,
			optimisticThreadKey: i != null ? i : t.optimisticThreadKey,
			threadOrder: d
		};
		return babelHelpers.extends({}, t, m);
	}
	function g(e, t, n, a) {
		var i, l, s = t.authoritativeThreadKey, u = t.description, c = t.instanceKey, d = t.skipVerifyThread, m = o("MAWDexieTable").dexieResolve((i = a == null || (l = a.get(n.jid)) == null ? void 0 : l.newestMsgTs) != null ? i : null);
		return m.then(function(a) {
			var i = f(n, t, a);
			return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(i, {
				authoritativeThreadKey: i.authoritativeThreadKey,
				cannotReplyReason: i.cannotReplyReason,
				deduplicationKey: i.deduplicationKey,
				folder: i.folder,
				newestMsgTs: i.newestMsgTs,
				optimisticThreadKey: i.optimisticThreadKey,
				threadOrder: i.threadOrder
			}, "MAWGetOrCreateThreadTxns.updateThread"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(i)), (o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.update(n.chatId, i)).then(function() {
				var e;
				return d !== !0 && (c != null && o("MAWThreadMappingQPL").addPoint("update_thread_verify_thread_exists", c), o("MAWIndexedDb").afterTransaction({
					tag: "VerifyThreadExists",
					value: o("MAWBridgeThread").createBridgeThread(i, i.optimisticThreadKey, s, u, c)
				})), o("MAWIndexedDb").afterTransaction({
					tag: "ThreadUpdated",
					value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread({
						folder: (e = i == null ? void 0 : i.folder) != null ? e : o("MAWFolderTypes").FOLDER_ID.INBOX,
						threadJid: i.jid
					})
				}), i;
			}).catch(function(e) {
				var t = r("getErrorSafe")(e);
				throw t.message = "Error updating thread: " + t.message, t;
			});
		});
	}
	function h(e, t, n) {
		return o("MAWDexieTable").dexieAll(t.map(function(e) {
			var t, r, a = e.params, i = e.thread, l = o("MAWDexieTable").dexieResolve((t = n == null || (r = n.get(i.jid)) == null ? void 0 : r.newestMsgTs) != null ? t : null);
			return l.then(function(e) {
				var t = f(i, a, e);
				return {
					params: a,
					thread: t
				};
			});
		})).then(function(t) {
			if (o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment()) {
				var n = t.map(function(e) {
					var t = e.thread;
					return t;
				});
				o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(n, function(e) {
					return {
						authoritativeThreadKey: e.authoritativeThreadKey,
						cannotReplyReason: e.cannotReplyReason,
						deduplicationKey: e.deduplicationKey,
						folder: e.folder,
						newestMsgTs: e.newestMsgTs,
						optimisticThreadKey: e.optimisticThreadKey,
						threadOrder: e.threadOrder
					};
				}, "MAWGetOrCreateThreadTxns.bulkUpdateThread"), o("WmiMetadataThreadsWriter").bulkStoreThreadPartialsOnDisk(n);
			}
			var r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkUpdate(t.map(function(e) {
				var t = e.thread;
				return {
					changes: t,
					key: t.chatId
				};
			}));
			return r.then(function() {
				for (var e of t) {
					var n = e.params, r = n.authoritativeThreadKey, a = n.description, i = n.instanceKey, l = n.skipVerifyThread, s = e.thread;
					l !== !0 && (i != null && o("MAWThreadMappingQPL").addPoint("bulk_update_thread_verify_thread_exists", i), o("MAWIndexedDb").afterTransaction({
						tag: "VerifyThreadExists",
						value: o("MAWBridgeThread").createBridgeThread(s, s.optimisticThreadKey, r, a, i)
					}));
				}
				return t.map(function(e) {
					var t = e.thread;
					return t;
				});
			});
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			throw t.message = "Error bulk updating threads: " + t.message, t;
		});
	}
	l.getExistingThread = s, l.getOrCreateThread = c, l.bulkGetOrCreateThread = d;
}), 98);
