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
	"interaction-tracing",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags(["ServerRPC", "OfflineConsumer"]), m = "has_pending_or_inprogress_oq_threads";
	async function p(e) {
		return await e, o("MAWPostOfflineQueueCompleteActions").runPostOfflineQueueCompleteActions(), o("MAWBridgeInitOfflineQueueSyncCompleteHandler").call();
	}
	function _(e) {
		o("MAWMIC").addIntAnnotation("offlineQueueSize", e);
		var t = o("MWChatInteraction").get(o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);
		t != null && r("InteractionTracingMetrics").addAnnotationInt(t, "offlineQueueSize", e);
	}
	function f(e, t) {
		var n = o("MWChatInteraction").get(o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);
		n != null && r("InteractionTracingMetrics").addSubspan(n, "offline_queue", "LONGTASK", e, t, {});
	}
	function g() {
		r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(e) {
			e.addMarkerPoint("offline_queue_start", "AppTiming"), e.addAnnotationBoolean(m, !0);
		});
	}
	function h() {
		r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(e) {
			e.addMarkerPoint("offline_queue_end", "AppTiming"), e.addAnnotationBoolean(m, !1);
		});
	}
	var y = function(t) {
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
	function C(t) {
		return function(n) {
			var a = n.chatJidStatus, i = n.status, l = n.timestamp, m = n.totalExpectedCount, C = n.totalProcessedCount;
			switch (i) {
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing:
					g(), d.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Stats start: ", ""])), m), _(m), y({
						tag: "InitOfflineQueueSyncStart",
						value: m
					}), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing), o("MAWMIC").addPoint("process_offline_queue_start", l), o("MAWOfflineQueueStatus").resetOfflineQueueState();
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing:
					d.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"Stats: expected: ",
						", processed: ",
						""
					])), m, C), y({
						tag: "InitOfflineQueueConsumerSyncProgress",
						value: {
							chatJidStatus: a,
							processed: C
						}
					}), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Processing);
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete:
					d.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Stats end: expected: ",
						", processed: ",
						""
					])), m, C), n.startTime != null && f(n.startTime, l), h(), y({
						tag: "InitOfflineQueueSyncComplete",
						value: a
					}), r("promiseDone")(p(t)), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete), o("MAWMIC").addPoint("process_offline_queue_end", l), o("MAWOfflineQueueStatus").markOfflineQueueComplete();
					return;
				case o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed:
					d.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Stats failed: expected: ",
						", processed: ",
						""
					])), m, C), o("MAWMIC").addPoint("process_offline_queue_failed", l), y({
						tag: "InitOfflineQueueSyncComplete",
						value: void 0
					}), r("promiseDone")(p(t)), o("MAWOfflineQueueStatus").markThreadWithOfflineQueueStatus(a, o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed), o("MAWOfflineQueueStatus").markOfflineQueueComplete();
					return;
			}
		};
	}
	l.processOfflineQueue = y, l.setupBridgeOfflineSnapshotHandler = C;
}), 98);
