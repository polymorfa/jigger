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
	"Promise",
	"Run",
	"Visibility",
	"WAExceededStorageQuota",
	"WmiStartupFailureStore",
	"asyncToGeneratorRuntime",
	"cr:3411",
	"promiseDone",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("ArmadilloCutoverClientFalcoEvent").__setRef("MAWSetupBridge"), c = r("requireDeferred")("MAWBridgeUpdateDYIStatusV2").__setRef("MAWSetupBridge"), d = (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(o("LSInitSyncCompleteSubscription").use).then(function() {
		return (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
	}), m = function(t) {
		u.loadImmediately(function(e) {
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
	function p(t) {
		var a = t.logout, l = t.reregisterDevice, u = t.rotateCryptoAuthToken, p = t.worker;
		function _() {
			p.postMessage({ type: "force-flush-data" });
		}
		return o("Run").onUnload(_), o("Run").onBeforeUnload(_, !1), r("Visibility").addListener(r("Visibility").HIDDEN, function() {
			p.postMessage({ type: "force-flush-logs-only" });
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
					return (e || (e = n("Promise"))).resolve(o("DTSG").getToken());
				},
				getLSDBEphemeralSetting: function(t) {
					return o("MAWGetEphemeralSettings").getEphemeralSetting(t.chatJid);
				},
				getLSDBLatestThreadIds: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
						return t.runInTransaction(function(t) {
							return r("LSGetLatestThreadIds.nop")(t, 0, "", e.numThreads, e.miActMappingFilteredThreads);
						}, "readonly", void 0, void 0, i.id + ":121");
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})(),
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
				logCutoverEvent: m,
				logout: a,
				offlineConsumerProgress: function() {
					return o("MAWSetupBridgeOfflineConsumer").setupBridgeOfflineSnapshotHandler(d).apply(void 0, arguments);
				},
				offlineSnapshot: r("MAWSetupBridgeOfflineSnapshot")(),
				receivedChatState: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield d;
						yield t.runInTransaction(function(t) {
							return o("MAWBridgeReceivedChatStateHandler").call(t, e);
						}, "readwrite", void 0, void 0, i.id + ":155");
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})(),
				reregisterDevice: l,
				resignCdnUrl: function() {
					return (e || (e = n("Promise"))).resolve();
				},
				rotateCryptoAuthToken: u,
				storageQuota: function(t) {
					var e = t.exceededStorageQuota;
					o("WAExceededStorageQuota").setExceededStorageQuota(e);
				},
				trackEbConsistency: function(t) {
					o("EBMainThreadEBDBApiDeferred").trackConsistency(o("EBDBMetricsConsistencyOperationEnum").EBConsistencyOperation.Upload, t.workerDeviceId);
				},
				uiUpdate: function(t) {
					var e = t.events;
					n("cr:3411") == null || n("cr:3411").recordBridgeUIEvent(e), o("MAWBridgeUIEventHandlerDeferred").handleEvents(d, e);
				},
				unrecoverableDbError: function(t) {
					var e = t.error;
					o("MAWUnrecoverableDbErrors").setError(e);
				},
				updateDYIStatus: function(t) {
					var e = t.qplEvent, n = t.qplInstanceKeyE2E, o = t.status;
					r("promiseDone")(c.load().then(function(t) {
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
				updateMediaStatus: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = yield d;
						return o("MAWBridgeUpdateClientMediaStatusHandler").call(t, e);
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})(),
				updateStateManagerStateInMainThread: function(t) {
					o("MAWStateManagerSyncToMainThread").updateStateManagerInMainThreadFromBridgeCall(t.stateManagerKey, t.value);
				},
				uploadOpenMessages: function() {
					return (e || (e = n("Promise"))).reject("this bridge should not be used for msgr");
				},
				writeToMediaStorage: function(t) {
					return o("MAWBridgeWriteMediaStorageHandler").writeToMediaStorage(t);
				}
			},
			worker: p
		});
	}
	l.setupBridge = p;
}), 98);
