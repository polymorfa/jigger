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
	"asyncToGeneratorRuntime",
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
		var a = t.prototype;
		return a.isInitiated = function() {
			return this.$1;
		}, a.getEphemeralBacklog = function() {
			return this.$6;
		}, a.getExistingMessageIdsInIndex = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READONLY }, function(t) {
					return function() {
						return t.ftsIndexV3.where("id").anyOf(e).toArray();
					};
				})();
				return new Set(t.map(function(e) {
					return e.id;
				}));
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.index = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t.estimatedNumMessages, a = t.type;
				if (e && a === "EB") {
					var i = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25304096, "2398"), {
						int: { estimatedNumMessages: n },
						string: {
							type: "EB",
							useWormPersistedQueue: "true"
						}
					}), l = r("nullthrows")(this.$3), s = yield l.incremental(void 0, o("TaskSchedulerPriority").BACKGROUND_PRIORITY);
					s ? i.endSuccess() : i.endFail("unknown");
				}
			});
			function a(e) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.indexFull = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (e) {
					var t = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25309398, "2399"), { string: { useWormPersistedQueue: "true" } }, { providedTimeoutInMs: s }), n = r("nullthrows")(this.$3), a = function(n, r) {
						t.addPoint("progress", { double: { progress: n } }), n === 1 && t.endSuccess();
					};
					yield n.full(a), t.endSuccess();
				}
			});
			function a() {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.performInit = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!(!e || this.$1 || this.$2)) {
					this.$2 = !0;
					try {
						yield this.$7(), this.$1 = !0;
					} catch (e) {
						var t = r("getErrorSafe")(e);
						r("FBLogger")("fts_worker_v2").catching(t).mustfix("Failed to initialize FTS worker");
					} finally {
						this.$2 = !1;
					}
				}
			});
			function o() {
				return t.apply(this, arguments);
			}
			return o;
		})(), a.search = function(t, a) {
			var e = this;
			return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, u, { signal: new AbortController().signal }), (function() {
				var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, i) {
					try {
						return yield e.$8(t, a);
					} catch (e) {
						if (e instanceof o("MAWFTSNotInitializedError").MAWFTSNotInitializedError) return r("FBLogger")("maw_fts_worker_v2").warn("Tried to call search while FTS worker has't been initialized. Retriable error: %s. Fail count: %s", e == null ? void 0 : e.message, i), n(e);
						throw e;
					}
				});
				return function(e, t) {
					return i.apply(this, arguments);
				};
			})());
		}, a.setEphemeralBacklog = function(t) {
			this.$6 = t;
		}, a.shouldTerminateAll = function() {
			return !1;
		}, a.$7 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = new (r("MAWMessageSearchManifestWriter"))(), t = new (r("MAWMessageSearchManifestReader"))();
				this.$4 = e, this.$5 = t;
				var n = !1;
				try {
					var a, i, l = yield t.versions();
					n = l.current.schemaVersion !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && ((a = l.next) == null ? void 0 : a.schemaVersion) !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && ((i = l.previous) == null ? void 0 : i.schemaVersion) !== o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION && o("MAWFTSVersionsInformation").SHOULD_DROP_OLDER_VERSION;
				} catch (e) {}
				n && (yield this.dropPreviousIndexingData()), yield e.setLatestVersion(o("MAWFTSVersionsInformation").LATEST_INDEXER_VERSION, o("MAWFTSVersionsInformation").LATEST_TOKENIZER_VERSION), this.$3 = new (r("WAFtsQuickSwitchOrchestrator"))(t, e, o("MAWFTSVersionsInformation").VERSIONS_INFO), o("FtsIndexScheduler").subscribeToFtsQueueUpdates();
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.dropPreviousIndexingData = function() {
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
		}, a.$8 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				if (!this.isInitiated()) throw new (o("MAWFTSNotInitializedError")).MAWFTSNotInitializedError();
				var n = r("nullthrows")(this.$3), a = yield n.search(e, t);
				if (a.status !== 200) return r("FBLogger")("maw_fts_worker_v2").mustfix("WA FTS returns with bad status code"), [[], []];
				var i = a.messages.map(function(e) {
					return o("WAStanzaUtils").toStanzaId(e.id);
				});
				return this.$9(i, a);
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$9 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e.map(o("MpsTypes").toMessageId), r = yield o("MpsForSearch").MpsForSearch.getMessagesById(n), a = o("MpsForSearch").MpsForSearch.filterValid(r).filter(Boolean).sort(function(e, t) {
					return e.timestampMs - t.timestampMs;
				}), i = a.map(function(e) {
					return e.messageId;
				}), l = t.messages.filter(function(e) {
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
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t;
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
