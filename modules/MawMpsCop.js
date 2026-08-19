__d("MawMpsCop", [
	"FBLogger",
	"MAWBridge",
	"MAWMpsGating",
	"MAWWarmInMemoryParticipantStore",
	"MpsMediaPostProcessor",
	"MpsToUIPostProcessor",
	"Promise",
	"TaskSchedulerPriority",
	"WAPriorityQueue",
	"WAPubSub",
	"WAWaitForUserUnblocked",
	"WebMpsScheduler",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"justknobx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 1, u = 10, c = r("justknobx")._("4688");
	function d() {
		return o("MAWMpsGating").isFullMpsEnabled() ? r("justknobx")._("4841") : s;
	}
	var m = (function() {
		function t() {
			this.$1 = o("WAPubSub").simplePubSub(), this.$2 = new Map();
		}
		var a = t.prototype;
		return a.subscribe = function(t) {
			return this.$1.subscribe(t);
		}, a.$3 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = this;
				if (this.$2.size === 0) return { exhausted: !0 };
				var r = [];
				return this.$2.forEach(function(o, a) {
					if (!(t != null && r.length >= t)) {
						for (var i = 1; i <= e; i++) {
							var l = o.pull();
							l != null && r.push(l);
						}
						o.size() === 0 && n.$2.delete(a);
					}
				}), yield this.$4({ payloadList: r }), { exhausted: this.$2.size === 0 };
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.$5 = function(t) {
			var e = this;
			t.payloadList.forEach(function(t) {
				var n, o = t.message.threadId, a = (n = e.$2.get(o)) != null ? n : new (r("WAPriorityQueue"))(function(e) {
					return -e.message.timestampMs;
				});
				a.push(t), e.$2.set(o, a);
			});
		}, a.$4 = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = t.ctx, i = t.payloadList;
				o("MpsMediaPostProcessor").postProcessPayloads(i);
				var l = new Map(), s = [];
				yield (e || (e = n("Promise"))).all(i.map((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						try {
							var t = yield o("MpsToUIPostProcessor").mpsToUIEventPostProcessPayload(e);
							t.forEach(function(t) {
								t.tag === "NewMsg" && t.value.unsupportedType != null && (a == null || a.messageToQpl.addPoint(e.message.messageId, "unsupported_type", { string: { unsupported: t.value.unsupportedType } }));
							}), s.push.apply(s, t);
						} catch (t) {
							l.set(e.message.messageId, r("getErrorSafe")(t));
						}
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})())), o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: s }), i.forEach(function(e) {
					var t = l.get(e.message.messageId);
					if (t) {
						var n = t;
						a == null || a.messageToQpl.addPoint(e.message.messageId, "ui-fail", { string: { errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(n) } }), r("FBLogger")("mps").catching(n).mustfix("Failed to process payload for UI for thread id = %s , message Id = %s", e.message.threadId, e.message.messageId);
					}
				});
			});
			function a(e) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.postProcessMessages = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				if (t.payloadList.length === 0) return (e || (e = n("Promise"))).resolve();
				o("WAWaitForUserUnblocked").isStillWaitingForUserUnblocked() ? this.$5({
					ctx: t.ctx,
					payloadList: t.payloadList
				}) : yield this.$4({
					ctx: t.ctx,
					payloadList: t.payloadList
				});
			});
			function r(e) {
				return t.apply(this, arguments);
			}
			return r;
		})(), a.subscribeToOfflineQueue = function(t) {
			var e = this;
			t.subscribe(function(t) {
				switch (t.type) {
					case "offline-start": {
						o("WAWaitForUserUnblocked").maybeResetWaitForUserUnblocked();
						break;
					}
					case "offline-end": {
						e.$1.publish({ type: "maw-infra-start" }), r("promiseDone")(o("MAWWarmInMemoryParticipantStore").warmInMemoryParticipantStoreFromRecentThreads()), e.$3(d()).catch(function(e) {
							r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("MPS offline-end cop fails");
						}).finally(function() {
							e.$6(function() {
								return e.$3(u, c);
							}, o("TaskSchedulerPriority").NORMAL_PRIORITY);
						}), e.$1.publish({
							success: !0,
							type: "maw-infra-end"
						}), o("WAWaitForUserUnblocked").unblockUser();
						break;
					}
					default: {
						t.type;
						break;
					}
				}
			});
		}, a.$6 = function(t, n) {
			var e = this;
			if (this.$7 == null) {
				var a = o("WebMpsScheduler").mpsScheduler().run(t, {
					name: "mps-cop-iterator",
					priority: n
				});
				this.$7 = a, a.promise.then(function(r) {
					e.$7 = null, r.exhausted === !1 && e.$6(t, n);
				}).catch(function(o) {
					r("FBLogger")("cop").catching(r("getErrorSafe")(o)).mustfix("mps-iterator fails"), e.$7 = null, e.$6(t, n);
				});
			}
		}, t;
	})(), p;
	function _() {
		return p || (p = new m(), p);
	}
	l.MpsCop = m, l.mpsCop = _;
}), 98);
