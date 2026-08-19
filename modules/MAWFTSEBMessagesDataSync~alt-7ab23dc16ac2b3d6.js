__d("MAWFTSEBMessagesDataSync", [
	"FBLogger",
	"I64",
	"MAWBridge",
	"MAWDbFTSManifest",
	"MAWFTSIndexedDb",
	"MAWFTSWorker",
	"MAWTransactionMode",
	"MAWVault",
	"err",
	"getErrorSafe",
	"isMAWUniversalSearchWithEBEnabled",
	"justknobx",
	"promiseDone",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c = r("justknobx"))._("2645"), m = c._("2606") + c._("2646"), p = c._("2647"), _ = [], f = new Map(), g = [];
	function h(e) {
		var t, n;
		_ = _.filter(function(t) {
			return t.tabId !== e;
		}), g = g.filter(function(t) {
			return t !== e;
		}), f.has(e) && (window.clearTimeout((t = f.get(e)) == null ? void 0 : t.aliveTimeout), (n = f.get(e)) == null || (n = n.ongoingTask) == null || n.reject(r("err")("Tab is closed")), f.delete(e));
	}
	function y(e, t) {
		var n = window.setTimeout(function() {
			h(e);
		}, p), r = f.get(e);
		if (t && v(e), r != null) {
			window.clearTimeout(r.aliveTimeout), r.aliveTimeout = n;
			return;
		}
		f.set(e, {
			aliveTimeout: n,
			ongoingTask: null
		});
	}
	var C = function(t) {
		var e = t.hasFocus, n = t.tabId;
		return y(n, e), Promise.resolve();
	}, b = function(t) {
		var e = t.tabId;
		return h(e), Promise.resolve();
	};
	function v(e) {
		g.length > 0 && g[0] === e || (g = [e].concat(g.filter(function(t) {
			return t !== e;
		})));
	}
	var S = function(t) {
		var e = t.tabId;
		return y(e, !0), Promise.resolve();
	};
	async function R(e) {
		var t = f.get(e);
		if (t != null) {
			var n = new Promise(function(e, n) {
				t.ongoingTask = {
					reject: n,
					resolve: e
				};
			});
			try {
				await Promise.race([n, new Promise(function(e, t) {
					window.setTimeout(function() {
						t(r("err")("Task timeout"));
					}, m);
				})]);
			} catch (e) {
				var o = r("getErrorSafe")(e);
				r("FBLogger")("fts_worker").catching(o).mustfix("Failed to restore FTS index for tab %s", o.message);
			} finally {
				var a = f.get(e);
				a != null && (a.ongoingTask = null), _ = _.filter(function(t) {
					return t.tabId !== e;
				});
			}
		}
	}
	var L = function(t) {
		var e = t.tabId, n = t.threadJid;
		return !o("MAWFTSWorker").isFTSInitiated() || _.length >= d || !g.slice(0, d).includes(e) || _.some(function(e) {
			return e.threadJid === n;
		}) ? Promise.resolve(!1) : (_.push({
			tabId: e,
			threadJid: n
		}), r("promiseDone")(R(e)), Promise.resolve(!0));
	}, E = function(t) {
		var e = t.error, n = t.tabId;
		if (e == null) {
			var r;
			(r = f.get(n)) == null || (r = r.ongoingTask) == null || r.resolve();
		} else {
			var o;
			(o = f.get(n)) == null || (o = o.ongoingTask) == null || o.reject(e);
		}
		return Promise.resolve();
	}, k = (s = o("MAWFTSIndexedDb")).makeMsgrFTSTransactor({ ftsRestoreStatus: (u = o("MAWTransactionMode")).READWRITE }, function(t) {
		return function(n, r) {
			return t.ftsRestoreStatus.get(n).then(function(a) {
				var i, l;
				if (!(a != null && (e || (e = o("I64"))).lt((e || (e = o("I64"))).of_string(a.restoredUntilSortOrderMs), (e || (e = o("I64"))).of_string(r)))) {
					var s = (i = (l = a == null ? void 0 : a.maxRestoredUntilSortOrderMs) != null ? l : a == null ? void 0 : a.restoredUntilSortOrderMs) != null ? i : r;
					return t.ftsRestoreStatus.put({
						maxRestoredUntilSortOrderMs: s,
						restoredUntilSortOrderMs: r,
						threadId: n
					});
				}
			});
		};
	}), I = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.ftsRestoreStatus.get(t);
		};
	}), T = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.ftsRestoreStatus.delete(t);
		};
	}), D = s.makeMsgrFTSTransactor({ ftsManifest: u.READWRITE }, function(e) {
		return function() {
			return e.ftsManifest.get(o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION).then(function(t) {
				if (t != null) {
					if (t.restoreSessionId != null) return t.restoreSessionId;
					var n = r("uuidv4")();
					return e.ftsManifest.update(o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION, { restoreSessionId: n }).then(function() {
						return n;
					});
				}
				return "";
			});
		};
	}), x = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function() {
			return e.ftsRestoreStatus.toCollection().toArray();
		};
	}), $ = async function(t) {
		var e = t.newSortOrderMs, n = t.threadId, a = t.unvaultedBridgeSearchMessages, i = o("MAWFTSWorker").getFTSWorker(), l = a.map(function(e) {
			var t, r = (t = e.msg) == null ? void 0 : t.content;
			return r == null ? null : {
				chatId: n,
				id: e.externalId,
				textFragments: [o("MAWVault").isVaulted(r) ? o("MAWVault").unvault(r) : r],
				timestamp: e.sortOrderMs
			};
		}).filter(Boolean), s;
		r("isMAWUniversalSearchWithEBEnabled")() && (s = await i.getExistingMessageIdsInIndex(a.map(function(e) {
			return e.externalId;
		}))), i.setEphemeralBacklog(l), await i.index({
			estimatedNumMessages: l.length,
			type: "EB"
		}), await k(n, e), o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
			tag: "AddMessageSearchResult",
			value: s != null ? a.filter(function(e) {
				return !s.has(e.externalId);
			}) : a
		}] });
	}, P = s.makeMsgrFTSTransactor({ mediaRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.mediaRestoreStatus.get(t);
		};
	}), N = function() {
		return D();
	}, M = async function(t) {
		var e, n = t.threadId, r = await I(n);
		return (e = r == null ? void 0 : r.restoredUntilSortOrderMs) != null ? e : null;
	}, w = async function(t) {
		var e = t.newSortOrderMs, n = t.threadId;
		await k(n, e);
	}, A = async function(t) {
		var e = t.threadId, n = await I(e);
		return n;
	}, F = async function(t) {
		var e = t.threadId;
		await T(e);
	}, O = function() {
		return x();
	}, B = async function(t) {
		var e, n = t.threadId, r = await P(n);
		return (e = r == null ? void 0 : r.restoredUntilSortOrderMs) != null ? e : null;
	};
	l.searchFTSReportTabAlive = C, l.searchFTSReportTabDestroy = b, l.searchFTSReportTabForeground = S, l.searchFTSRequestRestoreTask = L, l.searchFTSReportTabTaskComplete = E, l.searchIndexUpdate = $, l.searchGetFTSRestoreSessionId = N, l.searchGetFTSNextTimestamp = M, l.searchSetFTSNextTimestamp = w, l.searchFTSGetThreadRestoreStatus = A, l.searchFTSClearThreadRestoreStatus = F, l.searchFTSGetThreadsRestoreStatus = O, l.getMediaRestoreNextTimestamp = B;
}), 98);
