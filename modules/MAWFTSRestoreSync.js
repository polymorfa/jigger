__d("MAWFTSRestoreSync", [
	"EventEmitter",
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"MAWAsyncEBIssueFetchAndIndexFTSQuery",
	"MAWBridgeFireAndForget",
	"MAWBridgeSearchMsg",
	"MAWBridgeSendAndReceive",
	"MAWDbMsg",
	"MAWFTSIsMessageValidForSearch",
	"MAWFTSRestoreCap",
	"MAWFTSRestoreSyncLogger",
	"MAWWaitForBackendSetup",
	"MWEncryptedBackUpEBNotEnabledError",
	"Promise",
	"QPLFlow",
	"WAPromiseDelays",
	"asyncToGeneratorRuntime",
	"cr:19810",
	"err",
	"getErrorSafe",
	"isEbEnabledWithIGDEligibilityCheck",
	"justknobx",
	"qpl",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = new (r("EventEmitter"))(), d = (u || (u = o("I64"))).of_int32(r("justknobx")._("2477")), m = r("justknobx")._("5346"), p = r("justknobx")._("2606"), _ = r("uuidv4")();
	function f(t) {
		return new (e || (e = (n("Promise"))))(function(e, n) {
			return globalThis.setTimeout(function() {
				return n(r("err")("timeout"));
			}, t);
		});
	}
	function g() {
		window.setInterval(function() {
			!o("MAWWaitForBackendSetup").isBackendSetupSettled() || !o("MAWWaitForBackendSetup").isBackendSetupSuccessful() || o("MAWBridgeFireAndForget").fireAndForget("backend", "searchFTSReportTabAlive", {
				hasFocus: document.hasFocus(),
				tabId: _
			}, !0);
		}, 1e3);
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabTaskComplete", {
				error: e,
				tabId: _
			});
		}), y.apply(this, arguments);
	}
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabDestroy", { tabId: _ });
		}), b.apply(this, arguments);
	}
	function v(e) {
		var t = 200, n = 12e4;
		return Math.min(t * Math.pow(3, e), n);
	}
	var S = (function() {
		function t(e) {
			e === void 0 && (e = "search"), this.$1 = !1, this.$2 = !0, this.$3 = !1, this.$4 = !0, this.$5 = void 0, this.$6 = {}, this.$7 = new Set(), this.$8 = new Set(), this.$9 = new Set(), this.$10 = e, r("FBLogger")("fts_worker").info("New MAWFTSRestoreSync instance: " + e);
		}
		var a = t.prototype;
		return a.setIsStarted = function(t) {
			this.$1 = t, this.$10 === "media" && c.emit("isSyncStarted", t);
		}, a.setIsEBMaybeAvailable = function(t) {
			this.$4 = t, this.$10 === "media" && c.emit("isEBMaybeAvailable", t);
		}, a.setActiveThreadId = function(t, r) {
			r === void 0 && (r = !0), n("cr:19810") != null && r && t != null && n("cr:19810").getInstance().insertIntoHead(t), this.$5 = t, this.$10 === "media" && c.emit("activeThreadJid", t);
		}, a.setShouldPauseRestore = function(t) {
			this.$3 = t;
		}, a.removeFromQueue = function(t) {
			n("cr:19810") != null && t != null && n("cr:19810").getInstance().removeThread(t);
		}, a.getActiveThreadId = function() {
			return this.$5;
		}, a.getNextThreadIdToFetch = function() {
			if (n("cr:19810") != null) {
				var e;
				return (e = n("cr:19810").getInstance().getThreadsHead()) != null ? e : this.getActiveThreadId();
			}
			return this.getActiveThreadId();
		}, a.getDoneThreads = function() {
			return this.$7;
		}, a.getDoneThreadsAfterReset = function() {
			return this.$9;
		}, a.getResetThreads = function() {
			return this.$8;
		}, a.isStarted = function() {
			return this.$1;
		}, a.isEBMaybeAvailable = function() {
			return this.$4;
		}, a.resetEBAvailability = function() {
			this.setIsEBMaybeAvailable(!0);
		}, a.resetRestoreStatus = function() {
			var t = this, r = this.getActiveThreadId();
			return r != null && !this.$8.has(r) ? o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSClearThreadRestoreStatus", { threadId: r }, { isLoggingDisabled: !0 }).then(function() {
				t.$8.add(r);
			}) : (e || (e = n("Promise"))).resolve();
		}, a.$11 = function(t, n) {
			var e = this;
			Object.keys(this.$6).forEach(function(r) {
				e.$6[r](t, n);
			});
		}, a.$12 = function(t, r, a) {
			return t !== r && n("cr:19810") != null ? a == null || o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(a, 10)) : a !== "0";
		}, a.$13 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				this.setIsStarted(!0), this.setShouldPauseRestore(!1), yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabForeground", { tabId: _ }, { isLoggingDisabled: !0 }), window.addEventListener("focus", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabForeground", { tabId: _ }, { isLoggingDisabled: !0 });
				})), g();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.shouldLoop = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (this.$1 || this.$4 === !1) return !1;
				yield this.$13();
				var t = yield o("isEbEnabledWithIGDEligibilityCheck").isEbEnabledWithIGDEligibilityCheck(e);
				return t ? !0 : (this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), !1);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.loadMessages = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, s, c, g) {
				var y = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSRequestRestoreTask", {
					tabId: _,
					threadJid: t
				});
				if (!y) return yield o("WAPromiseDelays").delayMs(200), "CONTINUE";
				var b = this.getActiveThreadId();
				b !== t && (yield o("WAPromiseDelays").delayMs(m));
				var v = o("MAWAsyncEBIssueFetchAndIndexFTSQuery").issueQueryAsPromise(t, a, d, i, c);
				if (v == null) return this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), "STOP";
				var S = s();
				S.addAnnotations({
					int: { retryCount: l },
					string: { restoreUntilMs: a != null ? a : "" }
				});
				try {
					var R = function() {
						return (e || (e = n("Promise"))).race([v, f(p)]);
					}, L = yield o("QPLFlow").QplSubspan.wrapInSubspan(S, "fetch_request", R), E = L.nextMessageTimestampMsBefore != null ? (u || (u = o("I64"))).to_int32(L.nextMessageTimestampMsBefore) : void 0, k = Number(a) === E;
					return S.addAnnotations({
						bool: { paginationStuck: k },
						int: { numMessages: L.messages.length }
					}), yield o("QPLFlow").QplSubspan.wrapInSubspan(S, "process_data", function() {
						return g(L, S);
					}), S.endSuccess(), yield h(), "CONTINUE";
				} catch (e) {
					var I, T = r("getErrorSafe")(e);
					return T && T.message === o("MWEncryptedBackUpEBNotEnabledError").EB_NOT_ENABLED ? (S.addPoint("eb_not_enabled"), S.endCancel(), this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), yield C(), "STOP") : (T.message === "invalid-client-state" || (r("FBLogger")("fts_worker").catching(T).mustfix("Fail to fetch a new batch of messages"), S.endFail((I = T.message) != null ? I : "unknown"), yield h(T)), "FAIL");
				}
			});
			function a(e, n, r, o, a, i, l) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.startSyncingLoop = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this;
				this.setShouldPauseRestore(!1);
				var t = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
				if (yield this.shouldLoop(t)) {
					yield o("MAWFTSRestoreSyncLogger").initLoggingSessionId();
					for (var a = 0, i = null, l = function* () {
						var t, l = e.getNextThreadIdToFetch(), s = e.getActiveThreadId();
						if (i !== l && (i = l, a = 0), l == null || n("cr:19810") == null && e.$7.has(l)) return yield o("WAPromiseDelays").delayMs(200), 0;
						if (e.$3) return yield o("WAPromiseDelays").delayMs(200), 0;
						var c = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSGetThreadRestoreStatus", { threadId: l }, { isLoggingDisabled: !0 }), d = (t = c == null ? void 0 : c.restoredUntilSortOrderMs) != null ? t : null, m = c == null || c.restoredUntilSortOrderMs === c.maxRestoredUntilSortOrderMs || c.restoredUntilSortOrderMs == null, p = e.$12(l, s, d);
						if (!p) return d === "0" && (e.$7.add(l), e.$8.has(l) && e.$9.add(l)), e.removeFromQueue(l), yield o("WAPromiseDelays").delayMs(200), 0;
						var _ = yield e.loadMessages(l, d, function() {
							o("MAWFTSRestoreSyncLogger").onFetchMessagePageStart(l, d == null || o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(d, 10)), m);
						}, a, function() {
							return o("QPLFlow").startQPLFlow(r("qpl")._(25300854, "2397"));
						}, "fts", (function() {
							var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
								var n = t.messages, r = t.nextMessageTimestampMsBefore, a = r != null ? (u || (u = o("I64"))).to_string(r) : "0", i = o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(a, 10));
								o("MAWFTSRestoreSyncLogger").onFetchMessagePageComplete(l, n.length, i), e.$11(l, n);
								var s = n.map(function(e) {
									var t = o("MAWFTSIsMessageValidForSearch").verifyMessageValidity(e);
									return t == null ? null : o("MAWBridgeSearchMsg").createBridgeSearchMsg(babelHelpers.extends({
										author: e.author,
										canonicalTs: o("MAWDbMsg").getCanonicalTsFromMsg(e),
										externalId: e.externalId,
										threadJid: l
									}, t), !1);
								}).filter(Boolean);
								yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchIndexUpdate", {
									newSortOrderMs: a,
									threadId: l,
									unvaultedBridgeSearchMessages: s
								});
							});
							return function(e) {
								return t.apply(this, arguments);
							};
						})());
						e: {
							if (_ === "CONTINUE") {
								a = 0;
								break e;
							}
							if (_ === "FAIL") {
								o("MAWFTSRestoreSyncLogger").onFetchMessagePageFailed(l), yield o("WAPromiseDelays").delayMs(v(a)), a++;
								break e;
							}
							if (_ === "STOP") return { v: void 0 };
							throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + _);
						}
					}, c; this.$2;) if (c = yield* l(), c !== 0 && c) return c.v;
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.getInstance = function() {
			var e = t.instance;
			if (e != null) return e;
			var n = new t();
			return t.instance = n, n;
		}, t.getMediaInstance = function() {
			var e = t.mediaInstance;
			if (e != null) return e;
			var n = new t("media");
			return t.mediaInstance = n, n;
		}, t.resetInstance = function() {
			t.instance = null;
		}, a.setKeepWhileLoop_FOR_TESTING_ONLY = function(t) {
			this.$2 = t;
		}, t;
	})();
	S.instance = null, S.mediaInstance = null;
	function R() {
		return S.getInstance();
	}
	function L() {
		return S.getMediaInstance();
	}
	l.MAWGalleryEventEmitter = c, l.MAWFTSRestoreSync = S, l.getFTSRestoreSync = R, l.getMediaRestoreSync = L;
}), 98);
