__d("MAWStartupDeferred", [
	"ACTSanitizerApiLazyLoader",
	"BackendInitLoggingUtils",
	"DeidentifiedGraphQLFetch",
	"JSResourceForInteraction",
	"MAWBackendCleaners",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWConcurrent",
	"MAWDBMigration",
	"MAWFTSDataSync",
	"MAWMediaReceiverFetchDeidentifiedRelayEnvironment",
	"MAWRemovePendingSendMsgs",
	"MAWStartupScheduler",
	"MAWTaskDefinitions",
	"MAWWarmInMemoryParticipantStore",
	"MAWXMAReceiverFetchDeidentifiedRelayEnvironment",
	"MWFBLogger",
	"Promise",
	"TaskSchedulerPriority",
	"WAGetMediaRoute",
	"WAMockServerShell",
	"WAWaitForComms",
	"WAWaitForUserUnblocked",
	"WmiMediaServiceDownloadQueueScheduler",
	"getErrorSafe",
	"gkx",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("WorkerRelayNetwork").__setRef("MAWStartupDeferred"), c = o("MWFBLogger").MWLogger().tags(["backend"]), d = r("gkx")("23903") && r("JSResourceForInteraction")("MAWDebugDefineFunctions").__setRef("MAWStartupDeferred"), m = r("gkx")("23903") && r("JSResourceForInteraction")("WADebugTools").__setRef("MAWStartupDeferred");
	function p() {
		return o("MAWConcurrent").concurrent(o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWMediaReceiverFetchDeidentifiedRelayEnvironment").MAWMediaReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName), o("DeidentifiedGraphQLFetch").prewarmDeidentifiedTokenCache(o("MAWXMAReceiverFetchDeidentifiedRelayEnvironment").MAWXMAReceiverFetchDeidentifiedRelayEnvironmentConfig.acsProjectName));
	}
	function _() {
		var t, a;
		(t = o("MAWStartupScheduler")).scheduleTask("register_tasks", (a = o("TaskSchedulerPriority")).BLOCKING_PRIORITY, function() {
			if (!o("WAMockServerShell").isMockServerMode) return o("WAWaitForComms").waitForComms().then(function() {
				o("MAWTaskDefinitions").registerTasks(o("WAWaitForUserUnblocked").waitForUserUnblocked());
			});
		}), t.scheduleTask("download_queue", a.BLOCKING_PRIORITY, function() {
			return o("WmiMediaServiceDownloadQueueScheduler").subscribeToDownloadQueueUpdates();
		}), t.scheduleTask("media_prewarm", a.BLOCKING_PRIORITY, function() {
			return o("WAGetMediaRoute").getCachedOrFreshMediaAccess().catch(function(t) {
				c.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error prewarming media routes"])));
			});
		}), t.scheduleTask("fts", a.NORMAL_PRIORITY, function() {
			return o("MAWFTSDataSync").initFTS().then(function(e) {
				o("BackendInitLoggingUtils").MAWInitPoint(e ? "backend_search_ready" : "backend_search_failed");
			});
		}), t.scheduleTask("db_migration", a.NORMAL_PRIORITY, function() {
			return o("MAWDBMigration").startMigration();
		}), t.scheduleTask("cleaners", a.NORMAL_PRIORITY, function() {
			return o("MAWBackendCleaners").setupCleaners();
		}), t.scheduleTask("relay_network", a.NORMAL_PRIORITY, function() {
			return u.load().then(function(e) {
				var t = e.createWorkerNetworkExecute;
				t(), o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled() && p().catch(function(e) {
					c.catching(r("getErrorSafe")(e)).warn("Failed to prewarm MPS receiver fetch ACS token caches");
				});
			});
		}), t.scheduleTask("act_sanitizer", a.NORMAL_PRIORITY, function() {
			return o("ACTSanitizerApiLazyLoader").loadACTSanitizerApi();
		}), t.scheduleTask("cleanup_pending", a.NORMAL_PRIORITY, function() {
			return o("MAWRemovePendingSendMsgs").removePendingSendMessages();
		}), t.scheduleTask("warm_participants", a.NORMAL_PRIORITY, function() {
			return o("MAWWarmInMemoryParticipantStore").warmInMemoryParticipantStoreFromRecentThreads();
		}), t.scheduleTask("debug_tools", a.NORMAL_PRIORITY, function() {
			if (m && m != null && d && d != null) return (s || (s = n("Promise"))).all([d.load(), m.load()]).then(function(e) {
				var t = e[0].getAllDebugFunctions, n = e[1].initDebugFunctions;
				n(t());
			});
		});
	}
	l.scheduleDeferredStartupWork = _;
}), 98);
