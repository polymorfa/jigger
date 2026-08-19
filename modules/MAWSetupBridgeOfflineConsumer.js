__d("MAWSetupBridgeOfflineConsumer", [
	"InteractionTracingMetrics",
	"MAWBridgeInitOfflineQueueSyncCompleteHandler",
	"MAWBridgeInitOfflineQueueSyncStartHandler",
	"MAWMIC",
	"MAWOfflineQueueState",
	"MAWOfflineQueueStatus",
	"MAWPostOfflineQueueCompleteActions",
	"MAWSharedProtocolQueueConst",
	"MWChatInteraction",
	"MWFBLogger",
	"asyncToGeneratorRuntime",
	"interaction-tracing",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags(["ServerRPC", "OfflineConsumer"]), m = "has_pending_or_inprogress_oq_threads";
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return yield e, o("MAWPostOfflineQueueCompleteActions").runPostOfflineQueueCompleteActions(), o("MAWBridgeInitOfflineQueueSyncCompleteHandler").call();
		}), _.apply(this, arguments);
	}
	function f(e) {
		o("MAWMIC").addIntAnnotation("offlineQueueSize", e);
		var t = o("MWChatInteraction").get(o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);
		t != null && r("InteractionTracingMetrics").addAnnotationInt(t, "offlineQueueSize", e);
	}
	function g(e, t) {
		var n = o("MWChatInteraction").get(o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);
		n != null && r("InteractionTracingMetrics").addSubspan(n, "offline_queue", "LONGTASK", e, t, {});
	}
	function h() {
		r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(e) {
			e.addMarkerPoint("offline_queue_start", "AppTiming"), e.addAnnotationBoolean(m, !0);
		});
	}
	function y() {
		r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(e) {
			e.addMarkerPoint("offline_queue_end", "AppTiming"), e.addAnnotationBoolean(m, !1);
		});
	}
	var C = function(t) {
		if (t.tag === "InitOfflineQueueSyncProgress") {
			var e = t.value;
			return o("MAWOfflineQueueState").initOfflineQueueSyncProgress(e), !0;
		}
		if (t.tag === "InitOfflineQueueConsumerSyncProgress") {
			var n = t.value, r = n.chatJidStatus, a = n.processed;
			return o("MAWOfflineQueueState").initOfflineQueueConsumerSyncProgress(a, r), !0;
		}
		if (t.tag === "InitOfflineQueueSyncStart") {
			o("MAWBridgeInitOfflineQueueSyncStartHandler").call();
			var i = t.value;
			return o("MAWOfflineQueueState").initOfflineQueueSyncStart(i), !0;
		}
		if (t.tag === "InitOfflineQueueSyncComplete") {
			o("MAWBridgeInitOfflineQueueSyncCompleteHandler").call();
			var l = t.value;
			return o("MAWOfflineQueueState").initOfflineQueueSyncComplete(l), !0;
		}
		return !1;
	};
	function b(t) {
		return function(n) {
			var a = n.chatJidStatus, i = n.status, l = n.timestamp, m = n.totalExpectedCount, _ = n.totalProcessedCount;
			switch (i) {
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing:
					h(), d.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Stats start: ", ""])), m), f(m), C({
						tag: "InitOfflineQueueSyncStart",
						value: m
					}), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing), o("MAWMIC").addPoint("process_offline_queue_start", l), o("MAWOfflineQueueStatus").resetOfflineQueueState();
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing:
					d.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"Stats: expected: ",
						", processed: ",
						""
					])), m, _), C({
						tag: "InitOfflineQueueConsumerSyncProgress",
						value: {
							chatJidStatus: a,
							processed: _
						}
					}), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing);
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete:
					d.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Stats end: expected: ",
						", processed: ",
						""
					])), m, _), n.startTime != null && g(n.startTime, l), y(), C({
						tag: "InitOfflineQueueSyncComplete",
						value: a
					}), r("promiseDone")(p(t)), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete), o("MAWMIC").addPoint("process_offline_queue_end", l), o("MAWOfflineQueueStatus").markOfflineQueueComplete();
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed:
					d.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Stats failed: expected: ",
						", processed: ",
						""
					])), m, _), o("MAWMIC").addPoint("process_offline_queue_failed", l), C({
						tag: "InitOfflineQueueSyncComplete",
						value: void 0
					}), r("promiseDone")(p(t)), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed), o("MAWOfflineQueueStatus").markOfflineQueueComplete();
					return;
			}
		};
	}
	l.processOfflineQueue = C, l.setupBridgeOfflineSnapshotHandler = b;
}), 98);
