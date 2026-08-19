__d("MAWSetupBridge", [
	"DTSG",
	"EBDBMetricsConsistencyOperationEnum",
	"EBMainThreadEBDBApiDeferred",
	"LSDatabaseSingleton",
	"LSGetLatestThreadIds.nop",
	"LSInitSyncCompleteSubscription",
	"LSPlatformGraphQLLightspeedRequest",
	"MAWAbPropsClient",
	"MAWBridgeGetMinosEpochDataForUser",
	"MAWBridgeReceivedChatStateHandler",
	"MAWBridgeRunMediaStorageShadowTestHandler",
	"MAWBridgeUIEventHandlerDeferred",
	"MAWBridgeUpdateClientMediaStatusHandler",
	"MAWBridgeWriteMediaStorageHandler",
	"MAWCommonSetupBridge",
	"MAWEBLSInWorkerSwitch",
	"MAWFetchContacts",
	"MAWFetchParticipants",
	"MAWGetEphemeralSettings",
	"MAWSetupBridgeOfflineConsumer",
	"MAWSetupBridgeOfflineSnapshot",
	"MAWStateManagerSyncToMainThread",
	"MAWUnrecoverableDbErrors",
	"MWWorkerOwnedDbKeychain",
	"Run",
	"Visibility",
	"WAExceededStorageQuota",
	"WmiStartupFailureStore",
	"cr:3411",
	"promiseDone",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("requireDeferred")("ArmadilloCutoverClientFalcoEvent").__setRef("MAWSetupBridge"), u = r("requireDeferred")("MAWBridgeUpdateDYIStatusV2").__setRef("MAWSetupBridge"), c = (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(o("LSInitSyncCompleteSubscription").use).then(function() {
		return (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
	}), d = function(t) {
		s.loadImmediately(function(e) {
			var n = e.log;
			return n(function() {
				return {
					armadillo_thread_id: t.armadilloThreadId,
					domain: t.domain,
					event: t.event,
					event_details: t.eventDetails,
					open_thread_id: t.openThreadId,
					success: t.success,
					trace_id: t.traceId
				};
			});
		});
	};
	function m(t) {
		var a = t.logout, l = t.reregisterDevice, s = t.rotateCryptoAuthToken, m = t.worker;
		function p() {
			m.postMessage({ type: "force-flush-data" });
		}
		return o("Run").onUnload(p), o("Run").onBeforeUnload(p, !1), r("Visibility").addListener(r("Visibility").HIDDEN, function() {
			m.postMessage({ type: "force-flush-logs-only" });
		}), o("MAWCommonSetupBridge").initBridge({
			customizeEventHandlers: {
				abPropsUpdated: function(t) {
					o("MAWAbPropsClient").rewrite(t.abProps);
				},
				earKeyChange: function(t) {
					o("MWWorkerOwnedDbKeychain").handleEARKeyChange(t);
				},
				executeGraphQLLightSpeedRequest: function(t) {
					var e = t.args;
					return r("LSPlatformGraphQLLightspeedRequest").apply(void 0, e);
				},
				getDTSGToken: function() {
					return Promise.resolve(o("DTSG").getToken());
				},
				getLSDBEphemeralSetting: function(t) {
					return o("MAWGetEphemeralSettings").getEphemeralSetting(t.chatJid);
				},
				getLSDBLatestThreadIds: async function(n) {
					var t = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
					return t.runInTransaction(function(e) {
						return r("LSGetLatestThreadIds.nop")(e, 0, "", n.numThreads, n.miActMappingFilteredThreads);
					}, "readonly", void 0, void 0, i.id + ":121");
				},
				getLSDBParticipants: function(t) {
					return o("MAWFetchParticipants").fetchParticipantsFromLSDB(t.chatJids);
				},
				getLSDBUsersIsMsplit: function(t) {
					return o("MAWFetchContacts").fetchContactsIsMsplit(t.users);
				},
				getLSDBUsersRelationships: function(t) {
					return o("MAWFetchContacts").fetchContactsRelationships(t.users);
				},
				getMediaStorageResult: function(t) {
					return o("MAWBridgeRunMediaStorageShadowTestHandler").fetchMediaStorageResults(t);
				},
				getMinosEpochDataForUser: function() {
					return o("MAWBridgeGetMinosEpochDataForUser").getMinosEpochDataForUser();
				},
				ignitionStartupFailed: function() {
					o("WmiStartupFailureStore").publishStartupFailure();
				},
				isDbMigrating: function(t) {},
				logCutoverEvent: d,
				logout: a,
				offlineConsumerProgress: function() {
					return o("MAWSetupBridgeOfflineConsumer").setupBridgeOfflineSnapshotHandler(c).apply(void 0, arguments);
				},
				offlineSnapshot: r("MAWSetupBridgeOfflineSnapshot")(),
				receivedChatState: async function(t) {
					var e = await c;
					await e.runInTransaction(function(e) {
						return o("MAWBridgeReceivedChatStateHandler").call(e, t);
					}, "readwrite", void 0, void 0, i.id + ":155");
				},
				reregisterDevice: l,
				resignCdnUrl: function() {
					return Promise.resolve();
				},
				rotateCryptoAuthToken: s,
				storageQuota: function(t) {
					var e = t.exceededStorageQuota;
					o("WAExceededStorageQuota").setExceededStorageQuota(e);
				},
				trackEbConsistency: function(t) {
					o("EBMainThreadEBDBApiDeferred").trackConsistency(o("EBDBMetricsConsistencyOperationEnum").EBConsistencyOperation.Upload, t.workerDeviceId);
				},
				uiUpdate: function(t) {
					var e = t.events;
					n("cr:3411") == null || n("cr:3411").recordBridgeUIEvent(e), o("MAWBridgeUIEventHandlerDeferred").handleEvents(c, e);
				},
				unrecoverableDbError: function(t) {
					var e = t.error;
					o("MAWUnrecoverableDbErrors").setError(e);
				},
				updateDYIStatus: function(t) {
					var e = t.qplEvent, n = t.qplInstanceKeyE2E, o = t.status;
					r("promiseDone")(u.load().then(function(t) {
						return t.call({
							qplEvent: e,
							qplInstanceKeyE2E: n,
							status: o
						});
					}));
				},
				updateEBLSInWokerStateInMainThread: function(t) {
					r("MAWEBLSInWorkerSwitch").set(t.ebEnabled);
				},
				updateMediaStatus: async function(t) {
					var e = await c;
					return o("MAWBridgeUpdateClientMediaStatusHandler").call(e, t);
				},
				updateStateManagerStateInMainThread: function(t) {
					o("MAWStateManagerSyncToMainThread").updateStateManagerInMainThreadFromBridgeCall(t.stateManagerKey, t.value);
				},
				uploadOpenMessages: function() {
					return Promise.reject("this bridge should not be used for msgr");
				},
				writeToMediaStorage: function(t) {
					return o("MAWBridgeWriteMediaStorageHandler").writeToMediaStorage(t);
				}
			},
			worker: m
		});
	}
	l.setupBridge = m;
}), 98);
