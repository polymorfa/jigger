__d("WAOneQueue", [
	"BlockingPriorityTickStrategy",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"WACastStanzas",
	"WAComms",
	"WADanglingQueue",
	"WAGlobals",
	"WAOfflineUtils",
	"WAPubSub",
	"WAPullMode",
	"WAResolvable",
	"WAShiftTimer",
	"WATagsLogger",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y = 6e4, C = o("WATagsLogger").TAGS(["OneQueue"]), b = (function() {
		function t(t) {
			var n = this, a = t.cryptoManager, i = t.flushables, l = t.mode;
			this.$1 = o("WAPubSub").simplePubSub(), this.$2 = [], this.$3 = [], this.$7 = {}, this.$8 = [], this.$9 = 0, this.$12 = [], this.$13 = new (o("WAResolvable")).Resolvable();
			var s = o("TaskScheduler").taskScheduler("wa", {
				concurrency: 1,
				failOnTimeout: !0,
				promotionTimeoutMs: 200,
				timeoutMs: 15e3
			}, r("gkx")("15947") ? o("BlockingPriorityTickStrategy").makeBlockingPriorityTickStrategy() : o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			s.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener({ defaultSamplingRate: 8e3 })), this.$14 = s, this.$4 = l, this.$11 = a, this.$12 = i, this.$6 = new (o("WAPullMode")).PullMode(), this.$5 = new (o("WAShiftTimer")).ShiftTimer(function() {
				n.$14.run(function() {
					return n.$15();
				}, { name: "flush_by_timer" }).promise.catch(function(t) {
					C.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while processing flush_by_timer: ", ""])), t);
				});
			});
		}
		var n = t.prototype;
		return n.$16 = function(t) {
			var e = t.fn, n = t.name, r = t.priority;
			return C.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"Enqueuing ",
				" offline: ",
				""
			])), n, this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE), this.$14.run(function() {
				return e();
			}, {
				name: n,
				priority: r
			}).promise;
		}, n.subscribe = function(t) {
			return this.$1.subscribe(t);
		}, n.getMode = function() {
			return this.$4;
		}, n.handleStanza = function(t, n) {
			var e = this, r = this.$10;
			return this.$16({
				fn: function() {
					return e.$17(t, n, r);
				},
				name: n.tag + "_process_stanza",
				priority: n.tag === "receipt" && n.offline == null ? o("TaskSchedulerPriority").NORMAL_PRIORITY : o("TaskSchedulerPriority").BLOCKING_PRIORITY
			}).then(function() {
				return "NO_ACK";
			});
		}, n.handleOfflineStartStanza = function(t) {
			t.count !== 0 && (this.$13.resolveWasCalled() && (this.$13 = new (o("WAResolvable")).Resolvable()), this.$4 = o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME, this.$1.publish({
				type: "offline-start",
				offlineStats: t
			}), this.$9 = t.count, this.$5.onOrAfter(y), this.$6.offlineStart());
		}, n.handleOfflineEndStanza = function() {
			var e = this;
			return this.$16({
				fn: function() {
					var t;
					return e.$5.cancel(), e.$6.clear(), e.$10 !== ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId) ? (C.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Offline queue end received while the connection gets dropped"]))), e.$15("endOfOQ")) : (C.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Offline queue end"]))), e.$15("endOfOQ").then(function() {
						e.$4 = o("WAOfflineUtils").ServerRPCMode.ONLINE, o("WADanglingQueue").danglingQueueClear(), e.$13.resolve(), e.$1.publish({ type: "offline-end" });
					}));
				},
				name: "offline_end",
				priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
			}).then(function() {
				var t = e.$8;
				e.$8 = [], t.forEach(function(e) {
					return e();
				});
			});
		}, n.waitForWAInfraOfflineSyncEnd = function() {
			return this.$13.promise;
		}, n.newConnection = function() {
			var e;
			this.$10 = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
		}, n.connectionDropped = async function() {
			var e = this;
			C.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Drop offline queue as per loosing connection"]))), this.$10 = null, this.$6.clear(), await this.$16({
				name: "flush_on_connection_drop",
				fn: function() {
					return e.$15();
				},
				priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
			}), this.$1.publish({ type: "connection-lost" });
		}, n.$18 = function(t, n) {
			t != null && (this.$1.publish({
				type: "offline-entity",
				serverTs: n,
				offline: t
			}), this.$6.stanzaReceived(t), this.$5.cancel(), this.$5.onOrAfter(y));
		}, n.$17 = function(t, n, r) {
			var e, o = this, a = n.offline, i = n.serverTs, l = n.tag;
			return this.$18(a, i), C.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Processing stanza with tag ", ""])), l), this.$7[l] = ((e = this.$7[l]) != null ? e : 0) + 1, Promise.resolve(t(this.$11)).then(function(e) {
				return C.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Processing stanza with tag ", " is done"])), l), v(e) ? o.$2.push({
					response: e,
					socketId: r
				}) : o.$2.push({
					response: e,
					socketId: r
				}), e;
			}).then(function() {
				return a != null && o.$6.stanzaProcessed(), o.$19();
			});
		}, n.$19 = function() {
			return this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME ? this.$6.shouldFlash() ? this.$15() : Promise.resolve() : this.$15();
		}, n.$15 = function(t) {
			var e = this;
			C.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Flushing protocol queue"])));
			var n = 0;
			return Object.entries(this.$7).forEach(function(e) {
				var t = e[0], r = e[1];
				n += r;
			}), this.$7 = {}, this.$12.reduce(function(n, r) {
				return n.then(function() {
					return r.flush({ cryptoManager: e.$11 }, C, e.$4, t);
				});
			}, Promise.resolve()).then(function() {
				return C.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Acking"]))), e.$20();
			}).finally(function() {
				e.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME && e.$1.publish({
					type: "offline-processed",
					count: n
				});
			});
		}, n.isPendingAcksEmpty = function() {
			return this.$2.length === 0 && this.$3.length === 0;
		}, n.$20 = async function() {
			var e = [].concat(this.$3, this.$2);
			C.LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Cast stanzas ", ""])), e.length), this.$2 = [], this.$3 = [];
			try {
				await o("WACastStanzas").castStanzasByCategories(e, {
					send: !0,
					store: o("WAGlobals").getConfig().waDanglingQueue() && this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME
				});
			} catch (e) {
				var t = r("getErrorSafe")(e);
				throw C.ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Error while casting ack: ", ""])), t.toString()), t;
			}
			return Promise.resolve();
		}, n.enqueue = function(t, n) {
			var e = this, r = n.afterInit, a = r === void 0 ? !1 : r, i = n.flush, l = n.operationType, s = function() {
				return e.$16({
					name: l,
					fn: (function(e) {
						function t() {
							return e.apply(this, arguments);
						}
						return t.toString = function() {
							return e.toString();
						}, t;
					})(async function() {
						var n = await t({ cryptoManager: e.$11 });
						return i && await e.$15(), n;
					}),
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
				});
			};
			if (a && this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE) {
				var u = new (o("WAResolvable")).Resolvable();
				return this.$8.push(function() {
					s().then(function(e) {
						return u.resolve(e);
					}).catch(function(e) {
						return u.reject(e);
					});
				}), u.promise;
			}
			return s();
		}, t;
	})();
	function v(e) {
		return !(e === "NO_ACK" || e === "CLOSE_SOCKET");
	}
	l.logger = C, l.WAOneQueue = b;
}), 98);
