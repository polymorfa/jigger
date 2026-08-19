__d("MAWSetupBridgeOfflineSnapshot", [
	"InteractionTracingMetrics",
	"MAWMIC",
	"MAWSetupBridgeOfflineConsumer",
	"MWChatInteraction",
	"MWFBLogger",
	"WAOfflineUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags(["ServerRPC", "Offline"]);
	function m(e) {
		o("MAWMIC").addIntAnnotation("offlineQueueSize", e);
		var t = o("MWChatInteraction").get(o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);
		t != null && r("InteractionTracingMetrics").addAnnotationInt(t, "offlineQueueSize", e);
	}
	var p = function() {
		return (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t.downloaded, r = t.expected, a = t.status, i = t.timestamp;
				switch (a) {
					case o("WAOfflineUtils").WAClientInfraOfflineProgress.Initializing:
						d.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"Stats start: ",
							", messages: ",
							""
						])), r.count, r.message), m(r.count), o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
							tag: "InitOfflineQueueSyncStart",
							value: r.count
						}), o("MAWMIC").addPoint("download_offline_queue_start", i);
						return;
					case o("WAOfflineUtils").WAClientInfraOfflineProgress.Processing:
						d.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
							"Progress: ",
							" / ",
							", messages: ",
							" / ",
							""
						])), n.count, r.count, n.message, r.message), o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
							tag: "InitOfflineQueueSyncProgress",
							value: n.count
						});
						return;
					case o("WAOfflineUtils").WAClientInfraOfflineProgress.Complete:
						d.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
							"Stats end: ",
							" / ",
							", messages: ",
							" / ",
							""
						])), n.count, r.count, n.message, r.message), o("MAWMIC").addIntAnnotation("offlineQueueDownloadedCount", n.count), o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
							tag: "InitOfflineQueueSyncProgress",
							value: r.count
						}), o("MAWMIC").addPoint("download_offline_queue_end", i);
						return;
					case o("WAOfflineUtils").WAClientInfraOfflineProgress.Failed:
						d.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WA infra offline connection lost"]))), o("MAWMIC").addPoint("download_offline_queue_failed", i);
						return;
				}
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})();
	}, _ = p;
	l.default = _;
}), 98);
