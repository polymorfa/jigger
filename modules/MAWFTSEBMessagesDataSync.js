__d("MAWFTSEBMessagesDataSync", [
	"FBLogger",
	"I64",
	"MAWBridge",
	"MAWDbFTSManifest",
	"MAWFTSIndexedDb",
	"MAWFTSWorker",
	"MAWTransactionMode",
	"MAWVault",
	"Promise",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"isMAWUniversalSearchWithEBEnabled",
	"justknobx",
	"promiseDone",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = (d = r("justknobx"))._("2645"), p = d._("2606") + d._("2646"), _ = d._("2647"), f = [], g = new Map(), h = [];
	function y(e) {
		var t, n;
		f = f.filter(function(t) {
			return t.tabId !== e;
		}), h = h.filter(function(t) {
			return t !== e;
		}), g.has(e) && (window.clearTimeout((t = g.get(e)) == null ? void 0 : t.aliveTimeout), (n = g.get(e)) == null || (n = n.ongoingTask) == null || n.reject(r("err")("Tab is closed")), g.delete(e));
	}
	function C(e, t) {
		var n = window.setTimeout(function() {
			y(e);
		}, _), r = g.get(e);
		if (t && S(e), r != null) {
			window.clearTimeout(r.aliveTimeout), r.aliveTimeout = n;
			return;
		}
		g.set(e, {
			aliveTimeout: n,
			ongoingTask: null
		});
	}
	var b = function(t) {
		var e = t.hasFocus, r = t.tabId;
		return C(r, e), (c || (c = n("Promise"))).resolve();
	}, v = function(t) {
		var e = t.tabId;
		return y(e), (c || (c = n("Promise"))).resolve();
	};
	function S(e) {
		h.length > 0 && h[0] === e || (h = [e].concat(h.filter(function(t) {
			return t !== e;
		})));
	}
	var R = function(t) {
		var e = t.tabId;
		return C(e, !0), (c || (c = n("Promise"))).resolve();
	};
	function L(e) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = g.get(e);
			if (t != null) {
				var o = new (c || (c = (n("Promise"))))(function(e, n) {
					t.ongoingTask = {
						reject: n,
						resolve: e
					};
				});
				try {
					yield (c || (c = n("Promise"))).race([o, new c(function(e, t) {
						window.setTimeout(function() {
							t(r("err")("Task timeout"));
						}, p);
					})]);
				} catch (e) {
					var a = r("getErrorSafe")(e);
					r("FBLogger")("fts_worker").catching(a).mustfix("Failed to restore FTS index for tab %s", a.message);
				} finally {
					var i = g.get(e);
					i != null && (i.ongoingTask = null), f = f.filter(function(t) {
						return t.tabId !== e;
					});
				}
			}
		}), E.apply(this, arguments);
	}
	var k = function(t) {
		var e = t.tabId, a = t.threadJid;
		return !o("MAWFTSWorker").isFTSInitiated() || f.length >= m || !h.slice(0, m).includes(e) || f.some(function(e) {
			return e.threadJid === a;
		}) ? (c || (c = n("Promise"))).resolve(!1) : (f.push({
			tabId: e,
			threadJid: a
		}), r("promiseDone")(L(e)), (c || (c = n("Promise"))).resolve(!0));
	}, I = function(t) {
		var e = t.error, r = t.tabId;
		if (e == null) {
			var o;
			(o = g.get(r)) == null || (o = o.ongoingTask) == null || o.resolve();
		} else {
			var a;
			(a = g.get(r)) == null || (a = a.ongoingTask) == null || a.reject(e);
		}
		return (c || (c = n("Promise"))).resolve();
	}, T = (s = o("MAWFTSIndexedDb")).makeMsgrFTSTransactor({ ftsRestoreStatus: (u = o("MAWTransactionMode")).READWRITE }, function(t) {
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
	}), D = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.ftsRestoreStatus.get(t);
		};
	}), x = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.ftsRestoreStatus.delete(t);
		};
	}), $ = s.makeMsgrFTSTransactor({ ftsManifest: u.READWRITE }, function(e) {
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
	}), P = s.makeMsgrFTSTransactor({ ftsRestoreStatus: u.READWRITE }, function(e) {
		return function() {
			return e.ftsRestoreStatus.toCollection().toArray();
		};
	}), N = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.newSortOrderMs, n = e.threadId, a = e.unvaultedBridgeSearchMessages, i = o("MAWFTSWorker").getFTSWorker(), l = a.map(function(e) {
				var t, r = (t = e.msg) == null ? void 0 : t.content;
				return r == null ? null : {
					chatId: n,
					id: e.externalId,
					textFragments: [o("MAWVault").isVaulted(r) ? o("MAWVault").unvault(r) : r],
					timestamp: e.sortOrderMs
				};
			}).filter(Boolean), s;
			r("isMAWUniversalSearchWithEBEnabled")() && (s = yield i.getExistingMessageIdsInIndex(a.map(function(e) {
				return e.externalId;
			}))), i.setEphemeralBacklog(l), yield i.index({
				estimatedNumMessages: l.length,
				type: "EB"
			}), yield T(n, t), o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
				tag: "AddMessageSearchResult",
				value: s != null ? a.filter(function(e) {
					return !s.has(e.externalId);
				}) : a
			}] });
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), M = s.makeMsgrFTSTransactor({ mediaRestoreStatus: u.READWRITE }, function(e) {
		return function(t) {
			return e.mediaRestoreStatus.get(t);
		};
	}), w = function() {
		return $();
	}, A = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.threadId, r = yield D(n);
			return (t = r == null ? void 0 : r.restoredUntilSortOrderMs) != null ? t : null;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), F = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.newSortOrderMs, n = e.threadId;
			yield T(n, t);
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), O = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.threadId, n = yield D(t);
			return n;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), B = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.threadId;
			yield x(t);
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), W = function() {
		return P();
	}, q = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.threadId, r = yield M(n);
			return (t = r == null ? void 0 : r.restoredUntilSortOrderMs) != null ? t : null;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.searchFTSReportTabAlive = b, l.searchFTSReportTabDestroy = v, l.searchFTSReportTabForeground = R, l.searchFTSRequestRestoreTask = k, l.searchFTSReportTabTaskComplete = I, l.searchIndexUpdate = N, l.searchGetFTSRestoreSessionId = w, l.searchGetFTSNextTimestamp = A, l.searchSetFTSNextTimestamp = F, l.searchFTSGetThreadRestoreStatus = O, l.searchFTSClearThreadRestoreStatus = B, l.searchFTSGetThreadsRestoreStatus = W, l.getMediaRestoreNextTimestamp = q;
}), 98);
