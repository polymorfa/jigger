__d("MAWFTSWorker", [
	"FBLogger",
	"FtsIndexScheduler",
	"MAWFTSIndexedDb",
	"MAWFTSNotInitializedError",
	"MAWFTSVersionsInformation",
	"MAWMessageSearchManifestReader",
	"MAWMessageSearchManifestWriter",
	"MAWQplProxy",
	"MAWTransactionMode",
	"MpsForSearch",
	"MpsMessageToSearchBridge",
	"MpsTypes",
	"TaskSchedulerPriority",
	"WAExponentialBackoff",
	"WAFtsQuickSwitchOrchestrator",
	"WAJids",
	"WAStanzaUtils",
	"getErrorSafe",
	"isWAFTSContentSearchEnabled",
	"justknobx",
	"nullthrows",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("isWAFTSContentSearchEnabled")(), s = r("justknobx")._("2608"), u = {
		maxTimeout: 8e3,
		minTimeout: 1e3,
		retries: 5
	}, c = (function() {
		function t() {
			this.$1 = !1, this.$2 = !1, this.$3 = null, this.$4 = null, this.$5 = null, this.$6 = [];
		}
		t.getInstance = function() {
			var e = t.instance;
			if (e != null) return e;
			var n = new t();
			return t.instance = n, n;
		}, t.resetInstance = function() {
			t.instance = null;
		};
		var n = t.prototype;
		return n.isInitiated = function() {
			return this.$1;
		}, n.getEphemeralBacklog = function() {
			return this.$6;
		}, n.getExistingMessageIdsInIndex = async function(t) {
			var e = await o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READONLY }, function(e) {
				return function() {
					return e.ftsIndexV3.where("id").anyOf(t).toArray();
				};
			})();
			return new Set(e.map(function(e) {
				return e.id;
			}));
		}, n.index = async function(n) {
			var t = n.estimatedNumMessages, a = n.type;
			if (e && a === "EB") {
				var i = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25304096, "2398"), {
					int: { estimatedNumMessages: t },
					string: {
						type: "EB",
						useWormPersistedQueue: "true"
					}
				}), l = r("nullthrows")(this.$3), s = await l.incremental(void 0, o("TaskSchedulerPriority").BACKGROUND_PRIORITY);
				s ? i.endSuccess() : i.endFail("unknown");
			}
		}, n.indexFull = async function() {
			if (e) {
				var t = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25309398, "2399"), { string: { useWormPersistedQueue: "true" } }, { providedTimeoutInMs: s }), n = r("nullthrows")(this.$3), a = function(n, r) {
					t.addPoint("progress", { double: { progress: n } }), n === 1 && t.endSuccess();
				};
				await n.full(a), t.endSuccess();
			}
		}, n.performInit = async function() {
			if (!(!e || this.$1 || this.$2)) {
				this.$2 = !0;
				try {
					await this.$7(), this.$1 = !0;
				} catch (e) {
					var t = r("getErrorSafe")(e);
					r("FBLogger")("fts_worker_v2").catching(t).mustfix("Failed to initialize FTS worker");
				} finally {
					this.$2 = !1;
				}
			}
		}, n.search = function(t, n) {
			var e = this;
			return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, u, { signal: new AbortController().signal }), async function(a, i) {
				try {
					return await e.$8(t, n);
				} catch (e) {
					if (e instanceof o("MAWFTSNotInitializedError").MAWFTSNotInitializedError) return r("FBLogger")("maw_fts_worker_v2").warn("Tried to call search while FTS worker has't been initialized. Retriable error: %s. Fail count: %s", e == null ? void 0 : e.message, i), a(e);
					throw e;
				}
			});
		}, n.setEphemeralBacklog = function(t) {
			this.$6 = t;
		}, n.shouldTerminateAll = function() {
			return !1;
		}, n.$7 = async function() {
			var e = new (r("MAWMessageSearchManifestWriter"))(), t = new (r("MAWMessageSearchManifestReader"))();
			this.$4 = e, this.$5 = t;
			var n = !1;
			try {
				var a, i, l = await t.versions();
				n = l.current.schemaVersion !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && ((a = l.next) == null ? void 0 : a.schemaVersion) !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && ((i = l.previous) == null ? void 0 : i.schemaVersion) !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && o("MAWFTSVersionsInformation").SHOULD_DROP_OLDER_VERSION;
			} catch (e) {}
			n && await this.dropPreviousIndexingData(), await e.setLatestVersion(o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION, o("MAWFTSVersionsInformation").LATEST_TOKENIZER_VERSION), this.$3 = new (r("WAFtsQuickSwitchOrchestrator"))(t, e, o("MAWFTSVersionsInformation").VERSIONS_INFO), o("FtsIndexScheduler").subscribeToFtsQueueUpdates();
		}, n.dropPreviousIndexingData = function() {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({
				ftsIndexV3: o("MAWTransactionMode").READWRITE,
				ftsRestoreStatus: o("MAWTransactionMode").READWRITE
			}, function(e) {
				return function() {
					return e.ftsIndexV3.clear().then(function() {
						return e.ftsRestoreStatus.clear();
					});
				};
			})();
		}, n.$8 = async function(t, n) {
			if (!this.isInitiated()) throw new (o("MAWFTSNotInitializedError")).MAWFTSNotInitializedError();
			var e = r("nullthrows")(this.$3), a = await e.search(t, n);
			if (a.status !== 200) return r("FBLogger")("maw_fts_worker_v2").mustfix("WA FTS returns with bad status code"), [[], []];
			var i = a.messages.map(function(e) {
				return o("WAStanzaUtils").toStanzaId(e.id);
			});
			return this.$9(i, a);
		}, n.$9 = async function(t, n) {
			var e = t.map(o("MpsTypes").toMessageId), r = await o("MpsForSearch").MpsForSearch.getMessagesById(e), a = o("MpsForSearch").MpsForSearch.filterValid(r).filter(Boolean).sort(function(e, t) {
				return e.timestampMs - t.timestampMs;
			}), i = a.map(function(e) {
				return e.messageId;
			}), l = n.messages.filter(function(e) {
				var t = e.id;
				return !i.includes(o("MpsTypes").toMessageId(t));
			}).map(function(e) {
				return {
					chatJid: o("WAJids").unsafeCoerceToChatJid(e.chatId),
					externalId: e.id,
					sortOrderMs: e.timestamp
				};
			}), s = a.map(o("MpsMessageToSearchBridge").messageToSearchBridgeV2).filter(Boolean);
			return [s, l];
		}, t;
	})();
	c.instance = null;
	function d() {
		return c.getInstance();
	}
	function m() {
		c.resetInstance();
	}
	function p() {
		return c.getInstance().isInitiated();
	}
	l.getFTSWorker = d, l.resetFTSWorker = m, l.isFTSInitiated = p;
}), 98);
