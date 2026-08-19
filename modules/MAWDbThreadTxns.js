__d("MAWDbThreadTxns", [
	"MAWAuthoritativeThreadsCache",
	"MAWBridgeTypesCreators",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWFolderTypes",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MaybeCreateOrUpdateThreadResultCache",
	"WAArrayZip",
	"WALogger",
	"WAResultOrError",
	"WATimeUtils",
	"WmiMetadataThreadsWriter",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		var n, r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve((n = o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll().find(function(e) {
			return e.deduplicationKey === t;
		})) != null ? n : null) : e.threads.get({ deduplicationKey: t });
		return r.then(function(e) {
			var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWDbThreadTxns.getThreadByDeduplicationKey");
			return t == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(t);
		});
	}
	function d(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
		return n.then(function(e) {
			var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWDbThreadTxns.getThread");
			return t == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(t);
		});
	}
	function m(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(t)) : e.threads.where("jid").anyOf(t).toArray();
		return n.then(function(e) {
			return o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(e, "MAWDbThreadTxns.getThreads").filter(Boolean);
		});
	}
	function p(e, t) {
		var n, r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve((n = o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll().find(function(e) {
			return e.jid.startsWith(t + "@");
		})) != null ? n : null) : e.threads.where("jid").startsWith(t + "@").first();
		return r.then(function(e) {
			var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "MAWDbThreadTxns.getThreadPrimaryId");
			return t == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(t);
		});
	}
	function _(e) {
		o("MaybeCreateOrUpdateThreadResultCache").deleteCachedThreadResult(e), o("MAWAuthoritativeThreadsCache").AuthoritativeThreadsCache.delete(e);
	}
	function f(e, t) {
		o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().delete(t);
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.where("jid").equals(t).delete();
		return n.then(function() {
			return _(t);
		});
	}
	function g(e, t) {
		return e.participants.where("userJid").equals(t).toArray().then(function(t) {
			var n = t.map(function(e) {
				return e.threadJid;
			});
			return m(e, n);
		});
	}
	function h(e, t) {
		return e.participants.where("userJid").anyOf(t).toArray().then(function(t) {
			var n = new Map(), r = new Set();
			return t.forEach(function(e) {
				var t, o = e.userJid, a = (t = n.get(o)) != null ? t : [];
				a.push(e.threadJid), n.set(o, a), r.add(e.threadJid);
			}), m(e, Array.from(r)).then(function(e) {
				var t = e.reduce(function(e, t) {
					return e.set(t.jid, t), e;
				}, new Map());
				return new Map(Array.from(n.entries()).map(function(e) {
					var n = e[0], r = e[1];
					return [n, r.map(function(e) {
						return t.get(e);
					}).filter(Boolean)];
				}));
			});
		});
	}
	function y(e, t, n) {
		return (t == null ? void 0 : t.lastReadMsgReceiptSent) == null ? o("MAWDexieTable").dexieResolve(!1) : o("MAWDbMsgTxns").getSortOrderFromMsgId(e, t.lastReadMsgReceiptSent).then(function(e) {
			return n.sortOrderMs == null || e == null ? !1 : n.sortOrderMs <= e;
		});
	}
	function C(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t.threadJid)) : e.threads.get({ jid: t.threadJid });
		return n.then(function(n) {
			var r = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWDbThreadTxns.needsRetroactiveReadReceiptInThread");
			return y(e, r, t);
		});
	}
	function b(e, t) {
		var n = t.map(function(e) {
			return e.threadJid;
		}), r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(n)) : e.threads.where("jid").anyOf(t.map(function(e) {
			return e.threadJid;
		})).toArray();
		return r.then(function(n) {
			var r = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(n, "MAWDbThreadTxns.bulkNeedsRetroactiveReadReceiptInThread");
			return o("MAWDexieTable").dexieAll(o("WAArrayZip").zip(t, r).map(function(t) {
				var n = t[0], r = t[1];
				return y(e, r, n);
			}));
		});
	}
	function v(e, t, n) {
		var r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(t)) : e.threads.where("jid").anyOf(t).toArray();
		return r.then(function(t) {
			var r = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(t, "MAWDbThreadTxns.archiveThreads"), a = r.filter(Boolean).map(function(e) {
				return babelHelpers.extends({}, e, {
					archived: !0,
					cannotReplyReason: n ? "viewer_not_subscribed" : e.cannotReplyReason,
					folder: o("MAWFolderTypes").FOLDER_ID.ARCHIVED
				});
			});
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(a, function(e) {
				return {
					archived: !0,
					cannotReplyReason: e.cannotReplyReason,
					folder: o("MAWFolderTypes").FOLDER_ID.ARCHIVED
				};
			}, "MAWDbThreadTxns.archiveThreads");
			var i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(a);
			return i.then(function() {
				a.forEach(function(e) {
					n && o("WALogger").LOG(["[Occamadillo] Leaving a group thread\n          " + e.jid.toString() + ", showing a VIEWER_NOT_SUBSCRIBED composer blocker"]), o("MAWIndexedDb").afterTransaction({
						tag: "ThreadUpdated",
						value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread({
							cannotReplyReason: e.cannotReplyReason,
							folder: o("MAWFolderTypes").FOLDER_ID.ARCHIVED,
							threadJid: e.jid
						})
					});
				});
			});
		});
	}
	function S(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(t)) : e.threads.where("jid").anyOf(t).toArray();
		return n.then(function(t) {
			var n = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(t, "MAWDbThreadTxns.subscribeToThreads"), r = n.filter(Boolean).map(function(e) {
				return babelHelpers.extends({}, e, { cannotReplyReason: null });
			});
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(r, function(e) {
				return { cannotReplyReason: null };
			}, "MAWDbThreadTxns.subscribeToThreads");
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(r);
			return a.then(function() {
				r.forEach(function(e) {
					var t = {
						cannotReplyReason: null,
						threadJid: e.jid
					};
					o("MAWIndexedDb").afterTransaction({
						tag: "ThreadUpdated",
						value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread(t)
					});
				});
			});
		});
	}
	function R(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(t)) : e.threads.where("jid").anyOf(t).toArray();
		return n.then(function(t) {
			var n = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(t, "MAWDbThreadTxns.unarchiveThreads"), r = n.filter(Boolean).map(function(e) {
				return babelHelpers.extends({}, e, {
					archived: !1,
					cannotReplyReason: e.cannotReplyReason === "viewer_not_subscribed" ? e.cannotReplyReason : null,
					folder: o("MAWFolderTypes").FOLDER_ID.INBOX
				});
			});
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(r, function(e) {
				return {
					archived: !1,
					cannotReplyReason: e.cannotReplyReason,
					folder: o("MAWFolderTypes").FOLDER_ID.INBOX
				};
			}, "MAWDbThreadTxns.unarchiveThreads");
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(r);
			return a.then(function() {
				r.forEach(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "ThreadUpdated",
						value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread({
							cannotReplyReason: e.cannotReplyReason,
							folder: o("MAWFolderTypes").FOLDER_ID.INBOX,
							threadJid: e.jid
						})
					});
				});
			});
		});
	}
	function L(e, t) {
		var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(t)) : e.threads.where("jid").anyOf(t).toArray();
		return n.then(function(t) {
			var n = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(t, "MAWDbThreadTxns.unsubscribeFromThreads"), r = n.filter(Boolean).map(function(e) {
				return babelHelpers.extends({}, e, { cannotReplyReason: "viewer_not_subscribed" });
			});
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(r, function(e) {
				return { cannotReplyReason: "viewer_not_subscribed" };
			}, "MAWDbThreadTxns.unsubscribeFromThreads");
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(r);
			return a.then(function() {
				r.forEach(function(e) {
					var t = {
						cannotReplyReason: "viewer_not_subscribed",
						threadJid: e.jid
					};
					o("WALogger").LOG(["[Occamadillo] User is unsubscribed from thread\n          " + e.jid.toString() + ", showing a VIEWER_NOT_SUBSCRIBED composer blocker"]), o("MAWIndexedDb").afterTransaction({
						tag: "ThreadUpdated",
						value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread(t)
					});
				});
			});
		});
	}
	function E(t, n) {
		return d(t, n).then(function(n) {
			if (!n.success) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsMigratedLocally failed to get the thread"])));
				return;
			}
			var a = n.value;
			if (a.isMigratedLocally === !0) {
				o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsMigratedLocally failed because thread is already migrated"])));
				return;
			}
			var i = babelHelpers.extends({}, a, { isMigratedLocally: !0 });
			return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(i, { isMigratedLocally: !0 }, "MAWDbThreadTxns.markCutoverThreadAsMigratedLocally"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(i)), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : t.threads.put(i).then(r("emptyFunction"));
		});
	}
	function k(e, t) {
		if (t.isMigratedLocally === !1) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["markCutoverThreadAsNotMigratedLocally failed because thread is already unmigrated"]))), o("MAWDexieTable").dexieResolve(t);
		var n = babelHelpers.extends({}, t, { isMigratedLocally: !1 });
		return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(n, { isMigratedLocally: !1 }, "MAWDbThreadTxns.markCutoverThreadAsNotMigratedLocally"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(n)), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(n) : e.threads.put(n).then(function() {
			return n;
		});
	}
	function I(e, t) {
		return o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(t).then(r("emptyFunction"));
	}
	function T(e, t, n, r, a) {
		var i = babelHelpers.extends({}, t, {
			newestMsgTs: (a == null ? void 0 : a.ts) == null ? t.newestMsgTs : o("WATimeUtils").castUnixTimeToMillisTime(a.ts),
			oldestMsg: r == null ? void 0 : r.msgId
		});
		return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(i, {
			newestMsgTs: i.newestMsgTs,
			oldestMsg: i.oldestMsg
		}, "MAWDbThreadTxns.updateThreadMsgsForUndefinedOldestOrNewestMsgs"), I(e, i);
	}
	l.getThreadByDeduplicationKey = c, l.getThread = d, l.getThreads = m, l.getThreadPrimaryId = p, l.deleteThread = f, l.getAllThreadsForUser = g, l.getAllThreadsForUsers = h, l.needsRetroactiveReadReceiptInThread = C, l.bulkNeedsRetroactiveReadReceiptInThread = b, l.archiveThreads = v, l.subscribeToThreads = S, l.unarchiveThreads = R, l.unsubscribeFromThreads = L, l.markCutoverThreadAsMigratedLocally = E, l.markCutoverThreadAsNotMigratedLocally = k, l.updateThread = I, l.updateThreadMsgsForUndefinedOldestOrNewestMsgs = T;
}), 98);
