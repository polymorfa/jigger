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
	"QPLFlow",
	"WAPromiseDelays",
	"cr:19810",
	"err",
	"getErrorSafe",
	"isEbEnabledWithIGDEligibilityCheck",
	"justknobx",
	"qpl",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new (r("EventEmitter"))(), c = (e || (e = o("I64"))).of_int32(r("justknobx")._("2477")), d = r("justknobx")._("5346"), m = r("justknobx")._("2606"), p = r("uuidv4")();
	function _(e) {
		return new Promise(function(t, n) {
			return globalThis.setTimeout(function() {
				return n(r("err")("timeout"));
			}, e);
		});
	}
	function f() {
		window.setInterval(function() {
			!o("MAWWaitForBackendSetup").isBackendSetupSettled() || !o("MAWWaitForBackendSetup").isBackendSetupSuccessful() || o("MAWBridgeFireAndForget").fireAndForget("backend", "searchFTSReportTabAlive", {
				hasFocus: document.hasFocus(),
				tabId: p
			}, !0);
		}, 1e3);
	}
	async function g(e) {
		await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabTaskComplete", {
			error: e,
			tabId: p
		});
	}
	async function h() {
		await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabDestroy", { tabId: p });
	}
	function y(e) {
		var t = 200, n = 12e4;
		return Math.min(t * Math.pow(3, e), n);
	}
	var C = (function() {
		function t(e) {
			e === void 0 && (e = "search"), this.$1 = !1, this.$2 = !0, this.$3 = !1, this.$4 = !0, this.$5 = void 0, this.$6 = {}, this.$7 = new Set(), this.$8 = new Set(), this.$9 = new Set(), this.$10 = e, r("FBLogger")("fts_worker").info("New MAWFTSRestoreSync instance: " + e);
		}
		var a = t.prototype;
		return a.setIsStarted = function(t) {
			this.$1 = t, this.$10 === "media" && u.emit("isSyncStarted", t);
		}, a.setIsEBMaybeAvailable = function(t) {
			this.$4 = t, this.$10 === "media" && u.emit("isEBMaybeAvailable", t);
		}, a.setActiveThreadId = function(t, r) {
			r === void 0 && (r = !0), n("cr:19810") != null && r && t != null && n("cr:19810").getInstance().insertIntoHead(t), this.$5 = t, this.$10 === "media" && u.emit("activeThreadJid", t);
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
			var e = this, t = this.getActiveThreadId();
			return t != null && !this.$8.has(t) ? o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSClearThreadRestoreStatus", { threadId: t }, { isLoggingDisabled: !0 }).then(function() {
				e.$8.add(t);
			}) : Promise.resolve();
		}, a.$11 = function(t, n) {
			var e = this;
			Object.keys(this.$6).forEach(function(r) {
				e.$6[r](t, n);
			});
		}, a.$12 = function(t, r, a) {
			return t !== r && n("cr:19810") != null ? a == null || o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(a, 10)) : a !== "0";
		}, a.$13 = async function() {
			this.setIsStarted(!0), this.setShouldPauseRestore(!1), await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabForeground", { tabId: p }, { isLoggingDisabled: !0 }), window.addEventListener("focus", async function() {
				await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSReportTabForeground", { tabId: p }, { isLoggingDisabled: !0 });
			}), f();
		}, a.shouldLoop = async function(t) {
			if (this.$1 || this.$4 === !1) return !1;
			await this.$13();
			var e = await o("isEbEnabledWithIGDEligibilityCheck").isEbEnabledWithIGDEligibilityCheck(t);
			return e ? !0 : (this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), !1);
		}, a.loadMessages = async function(n, a, i, l, s, u, f) {
			var t = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSRequestRestoreTask", {
				tabId: p,
				threadJid: n
			});
			if (!t) return await o("WAPromiseDelays").delayMs(200), "CONTINUE";
			var y = this.getActiveThreadId();
			y !== n && await o("WAPromiseDelays").delayMs(d);
			var C = o("MAWAsyncEBIssueFetchAndIndexFTSQuery").issueQueryAsPromise(n, a, c, i, u);
			if (C == null) return this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), "STOP";
			var b = s();
			b.addAnnotations({
				int: { retryCount: l },
				string: { restoreUntilMs: a != null ? a : "" }
			});
			try {
				var v = function() {
					return Promise.race([C, _(m)]);
				}, S = await o("QPLFlow").QplSubspan.wrapInSubspan(b, "fetch_request", v), R = S.nextMessageTimestampMsBefore != null ? (e || (e = o("I64"))).to_int32(S.nextMessageTimestampMsBefore) : void 0, L = Number(a) === R;
				return b.addAnnotations({
					bool: { paginationStuck: L },
					int: { numMessages: S.messages.length }
				}), await o("QPLFlow").QplSubspan.wrapInSubspan(b, "process_data", function() {
					return f(S, b);
				}), b.endSuccess(), await g(), "CONTINUE";
			} catch (e) {
				var E, k = r("getErrorSafe")(e);
				return k && k.message === o("MWEncryptedBackUpEBNotEnabledError").EB_NOT_ENABLED ? (b.addPoint("eb_not_enabled"), b.endCancel(), this.setIsEBMaybeAvailable(!1), this.setIsStarted(!1), await h(), "STOP") : (k.message === "invalid-client-state" || (r("FBLogger")("fts_worker").catching(k).mustfix("Fail to fetch a new batch of messages"), b.endFail((E = k.message) != null ? E : "unknown"), await g(k)), "FAIL");
			}
		}, a.startSyncingLoop = async function() {
			var t = this;
			this.setShouldPauseRestore(!1);
			var a = await (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			if (await this.shouldLoop(a)) {
				await o("MAWFTSRestoreSyncLogger").initLoggingSessionId();
				for (var i = 0, l = null, u = async function() {
					var a, s = t.getNextThreadIdToFetch(), u = t.getActiveThreadId();
					if (l !== s && (l = s, i = 0), s == null || n("cr:19810") == null && t.$7.has(s)) return await o("WAPromiseDelays").delayMs(200), 0;
					if (t.$3) return await o("WAPromiseDelays").delayMs(200), 0;
					var c = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchFTSGetThreadRestoreStatus", { threadId: s }, { isLoggingDisabled: !0 }), d = (a = c == null ? void 0 : c.restoredUntilSortOrderMs) != null ? a : null, m = c == null || c.restoredUntilSortOrderMs === c.maxRestoredUntilSortOrderMs || c.restoredUntilSortOrderMs == null, p = t.$12(s, u, d);
					if (!p) return d === "0" && (t.$7.add(s), t.$8.has(s) && t.$9.add(s)), t.removeFromQueue(s), await o("WAPromiseDelays").delayMs(200), 0;
					var _ = await t.loadMessages(s, d, function() {
						o("MAWFTSRestoreSyncLogger").onFetchMessagePageStart(s, d == null || o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(d, 10)), m);
					}, i, function() {
						return o("QPLFlow").startQPLFlow(r("qpl")._(25300854, "2397"));
					}, "fts", async function(n) {
						var r = n.messages, a = n.nextMessageTimestampMsBefore, i = a != null ? (e || (e = o("I64"))).to_string(a) : "0", l = o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(i, 10));
						o("MAWFTSRestoreSyncLogger").onFetchMessagePageComplete(s, r.length, l), t.$11(s, r);
						var u = r.map(function(e) {
							var t = o("MAWFTSIsMessageValidForSearch").verifyMessageValidity(e);
							return t == null ? null : o("MAWBridgeSearchMsg").createBridgeSearchMsg(babelHelpers.extends({
								author: e.author,
								canonicalTs: o("MAWDbMsg").getCanonicalTsFromMsg(e),
								externalId: e.externalId,
								threadJid: s
							}, t), !1);
						}).filter(Boolean);
						await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchIndexUpdate", {
							newSortOrderMs: i,
							threadId: s,
							unvaultedBridgeSearchMessages: u
						});
					});
					e: {
						if (_ === "CONTINUE") {
							i = 0;
							break e;
						}
						if (_ === "FAIL") {
							o("MAWFTSRestoreSyncLogger").onFetchMessagePageFailed(s), await o("WAPromiseDelays").delayMs(y(i)), i++;
							break e;
						}
						if (_ === "STOP") return { v: void 0 };
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + _);
					}
				}, c; this.$2;) if (c = await u(), c !== 0 && c) return c.v;
			}
		}, t.getInstance = function() {
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
	C.instance = null, C.mediaInstance = null;
	function b() {
		return C.getInstance();
	}
	function v() {
		return C.getMediaInstance();
	}
	l.MAWGalleryEventEmitter = u, l.MAWFTSRestoreSync = C, l.getFTSRestoreSync = b, l.getMediaRestoreSync = v;
}), 98);
