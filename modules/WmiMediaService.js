__d("WmiMediaService", [
	"MpsTypes",
	"WAHashUtils",
	"WATimeUtils",
	"WmiChunkApi",
	"WmiMediaServiceDb",
	"WmiMediaServiceDownloadQueue",
	"asyncToGeneratorRuntime",
	"err",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.enqueueMediaDownload = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield o("WmiMediaServiceDownloadQueue").getDownloadQueue().put(e.map(function(e) {
					return {
						attemptCount: 0,
						e2eePlatform: e.e2eePlatform,
						queueId: o("WmiMediaServiceDownloadQueue").generateDownloadQueueId(e.plaintextHash)
					};
				}));
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.getMessageReferenceForMediaId = function(t) {
			return this.$1.runInTransaction(["mediaReferences"], "readonly", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield e.stores.mediaReferences.readIndexRange("[mediaId+updatedAtMs]", { only: [t] }, {
						limit: 1,
						order: "desc"
					});
					return n.at(0);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "WmiGetMessageReferenceForMediaId");
		}, t.getReceiverFetchInfo = function(t) {
			return this.$1.runInTransaction(["receiverFetchInfo"], "readonly", function(e) {
				return e.stores.receiverFetchInfo.get(t);
			}, "WmiMediaServiceGetReceiverFetchInfo");
		}, t.handleMessageDeletion = function(t, n) {
			return this.$2(t, n);
		}, t.handleThreadDeletion = function(t) {
			return this.$2(t);
		}, t.storeMessageReferences = function(t) {
			return this.$1.runInTransaction(["mediaReferences"], "readwrite", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield e.stores.mediaReferences.bulkUpsert("[threadId+messageId+mediaId]", t.map(function(e) {
						return {
							item: {
								mediaId: e.mediaId,
								messageId: e.messageId,
								threadId: e.threadId,
								updatedAtMs: o("MpsTypes").toTimestamp(o("WATimeUtils").unixTimeMs())
							},
							selector: [
								e.threadId,
								e.messageId,
								e.mediaId
							]
						};
					}));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "WmiMediaServiceStoreMessageReferences");
		}, t.upsertReceiverFetchInfo = function(t) {
			return this.$1.runInTransaction(["receiverFetchInfo"], "readwrite", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield e.stores.receiverFetchInfo.bulkPut([t]);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "WmiMediaServiceUpsertReceiverFetchInfo");
		}, t.$2 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var r = yield this.$1.runInTransaction(["mediaReferences"], "readwrite", (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						var r = t != null ? [e, t] : [e], o = yield n.stores.mediaReferences.readIndexRange("[threadId+messageId+mediaId]", { only: r });
						yield n.stores.mediaReferences.bulkDelete(o.map(function(e) {
							return e.pk;
						}));
						var a = new Set(o.map(function(e) {
							return e.mediaId;
						})), i = yield n.stores.mediaReferences.readIndexAnyOf("[mediaId+updatedAtMs]", Array.from(a).map(function(e) {
							return [e];
						}));
						return i.forEach(function(e) {
							return a.delete(e.mediaId);
						}), Array.from(a);
					});
					return function(e) {
						return r.apply(this, arguments);
					};
				})(), "WmiMediaServiceDeleteMediaReferenceEntries");
				r.length > 0 && (yield o("WmiChunkApi").getChunkApi().delete(Array.from(r).map(function(e) {
					return o("WAHashUtils").stringToPlaintextHash(e);
				})));
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), e;
	})(), s = null;
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (s != null) throw r("err")("Media Service already initialised");
			var n = yield o("WmiMediaServiceDb").makeMediaServiceDb(t);
			s = new e(n);
		}), c.apply(this, arguments);
	}
	function d() {
		return r("nullthrows")(s, "Media Service not initialised");
	}
	function m() {
		s = null, o("WmiChunkApi").clearChunkApi__TESTONLY();
	}
	l.MediaService = e, l.wmiMediaServiceSetup = u, l.mediaService = d, l.wmiMediaServiceClear__TESTONLY = m;
}), 98);
