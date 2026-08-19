__d("MAWSharedOfflineResumeUINotifier", [
	"MAWBridge",
	"MAWQplProxy",
	"MAWSharedProtocolQueueConst",
	"MWFBLogger",
	"WAOfflineUtils",
	"WAThrottle",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 333.3333333333333, m = o("MWFBLogger").MWLogger().tags(["ProtocolQueue", "MAWConsumer"]), p = (function() {
		function t() {
			var e = this;
			this.$1 = {}, this.$2 = {}, this.$3 = 0, this.$4 = "wa", this.$5 = !1, this.$6 = 0, this.$7 = 0, this.$8 = 0, this.$9 = 0, this.$10 = null, this.$16 = o("WAThrottle").throttle(function() {
				e.$5 || e.$15(o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing);
			}, d), this.$12 = o("WAThrottle").throttle(function() {
				e.$4 === "wa" && e.$5 === !1 && e.$11(o("WAOfflineUtils").WAClientInfraOfflineProgress.Processing);
			}, d);
		}
		var n = t.prototype;
		return n.subscribeToWAEvents = function(t) {
			var e = this;
			t.subscribe(function(t) {
				switch (t.type) {
					case "offline-start": {
						e.$10 = o("MAWQplProxy").performanceAbsoluteNow(), e.$6 = t.offlineStats.count, e.$8 = t.offlineStats.message, e.$11(o("WAOfflineUtils").WAClientInfraOfflineProgress.Initializing, e.$10), e.$5 = !1, e.$4 = "wa";
						break;
					}
					case "offline-processed": break;
					case "offline-entity": {
						e.$7++, e.$12();
						break;
					}
					case "offline-end": {
						e.$11(o("WAOfflineUtils").WAClientInfraOfflineProgress.Complete), e.$4 = "maw";
						break;
					}
					case "connection-lost": {
						e.$11(o("WAOfflineUtils").WAClientInfraOfflineProgress.Failed);
						break;
					}
					default:
				}
			});
		}, n.subscribeToMawEvents = function(t) {
			var e = this;
			t.subscribe(function(t) {
				switch (t.type) {
					case "maw-infra-start": {
						e.$10 == null && (e.$10 = o("MAWQplProxy").performanceAbsoluteNow()), e.$13();
						break;
					}
					case "maw-infra-end": {
						t.success ? e.notifyUICurrentProcessingSucceeded() : e.$14(), e.$10 = null;
						break;
					}
				}
			});
		}, n.subscribeToMessageEvents = function(t) {
			var e = this;
			t.subscribe(function(t) {
				switch (t.type) {
					case "new-message": {
						if (t.commonMessageBase.offline == null) return;
						e.addWAMessage();
						break;
					}
				}
			});
		}, n.addWAMessage = function() {
			this.$9++, this.$12();
		}, n.$13 = function() {
			this.$3 = 0, this.$5 = !1, this.$15(o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing);
		}, n.setThreadMetadata = function(n) {
			var t = n.reduce(function(e, t) {
				return e[t.from] = t.t, e;
			}, {}), r = n.reduce(function(e, t) {
				var n = t.from;
				return e[n] = {
					chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing,
					snippetStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing
				}, e;
			}, {});
			m.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"Set thread metadata: ",
				", ",
				""
			])), JSON.stringify(t), JSON.stringify(r)), this.$1 = t, this.$2 = r;
		}, n.notifyUIChatReady = function(t) {
			this.$2[t] = {
				chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
				snippetStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
			}, this.$15(o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing);
		}, n.updateChatState = function(t) {
			var e = this;
			Object.entries(t).forEach(function(t) {
				var n = t[0], r = t[1];
				if (e.$1[n] != null) {
					var a = e.$1[n];
					r >= a && (e.$2[n] = {
						chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
						snippetStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
					});
				}
			}), this.$16();
		}, n.addMAWEntity = function(t) {
			this.$3 += t, this.$16();
		}, n.notifyUICurrentProcessingSucceeded = function() {
			var e = this;
			Object.keys(this.$2).forEach(function(t) {
				e.$2[t] = {
					chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
					snippetStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
				};
			}), this.$5 = !0, this.$15(o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete), this.$1 = {}, this.$2 = {};
		}, n.$14 = function() {
			var e = this;
			Object.keys(this.$2).forEach(function(t) {
				e.$2[t] = {
					chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
					snippetStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
				};
			}), this.$15(o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed), this.$1 = {}, this.$2 = {};
		}, n.maybeNotifyUI = function() {
			this.$16();
		}, n.$11 = function(t, n) {
			o("MAWBridge").getBridge().fireAndForget("event", "offlineSnapshot", {
				downloaded: {
					count: this.$7,
					message: this.$9
				},
				expected: {
					count: this.$6,
					message: this.$8
				},
				status: t,
				timestamp: n != null ? n : o("MAWQplProxy").performanceAbsoluteNow()
			});
		}, n.$15 = function(t) {
			var e = o("MAWQplProxy").performanceAbsoluteNow(), n = {
				chatJidStatus: this.$2,
				startTime: this.$10 != null ? this.$10 : null,
				status: t,
				timestamp: e,
				totalExpectedCount: this.$6,
				totalProcessedCount: this.$3
			};
			m.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MAW UI: ", ""])), JSON.stringify(n)), t === o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete ? r("promiseDone")(o("MAWBridge").getBridge().sendAndReceive("event", "offlineConsumerProgress", n), function() {
				m.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([" -> \"Offline Complete\" bridge event sent"])));
			}, function(e) {
				m.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose([" -> Unable to send \"Offline Complete\" event ", ""])), e);
			}) : o("MAWBridge").getBridge().fireAndForget("event", "offlineConsumerProgress", n);
		}, t;
	})(), _ = new p();
	l.offlineResumeUINotifier = _;
}), 98);
