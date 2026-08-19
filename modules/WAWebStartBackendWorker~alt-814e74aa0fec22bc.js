__d("WAWebStartBackendWorker", [
	"QPLFlow",
	"WALogger",
	"WATransferableResult",
	"WAWap",
	"WAWebABPropsCache",
	"WAWebApiHydrateWidsUtil",
	"WAWebAppTracker",
	"WAWebBackendApi",
	"WAWebBackendEventBus",
	"WAWebBackendWorkerBridge",
	"WAWebBackendWorkerClient",
	"WAWebBackendWorkerInitState",
	"WAWebBackendWorkerV2Resource",
	"WAWebCommsHandleStanza",
	"WAWebCommsWorkerProxy",
	"WAWebCrashlog",
	"WAWebGetMessageCache",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebIdentityChangeApiWorkerCompatible",
	"WAWebLogger",
	"WAWebMainThreadQplHandler",
	"WAWebMainThreadUploadManagerHandler",
	"WAWebMediaHosts",
	"WAWebMediaHostsRawStateManager",
	"WAWebMessageInsertDebugPlaceholderWorkerCompatible",
	"WAWebMmsDownloadUploadCrashLogger",
	"WAWebMsgKey",
	"WAWebNetworkStatusStateManager",
	"WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebSyncdOrphanWorkerCompatible",
	"WAWebUA",
	"WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMultiDeviceMainThread",
	"WAWebUserPrefsScreenLockMainThread",
	"WAWebUserPrefsTabMutex",
	"WAWebWorkerSafeBackendApi",
	"WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
	"WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
	"WebWorkerV4Resource",
	"err",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"gkx",
	"qpl",
	"supportsModuleWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = ["serializedError"];
	function g(e) {
		throw new TypeError("\"" + e + "\" is read-only");
	}
	var h = "WAWebBackendWorker-" + o("WAWebUserPrefsTabMutex").THIS_TAB, y = "worker-killswitch-stolen", C = r("qpl")._(891427260, "2714"), b = new Map(), v = {
		initScriptRouteBuilder: r("WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder"),
		hasteResponseRouteBuilder: r("WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder")
	};
	function S(e) {
		var t = null, n = {
			onmessage: t,
			postMessage: function(n, r) {
				e.postMessage(n, r);
			},
			close: function() {
				e.terminate();
			}
		};
		return e.addEventListener("message", function(e) {
			n.onmessage != null && n.onmessage(e);
		}), n;
	}
	function R() {
		var t, n = o("WAWebBackendWorkerBridge").createBridge([
			{
				namespace: "abPropsExposure",
				handlers: { recordExposure: function(t) {
					var e = t.configCode;
					o("WAWebABPropsCache").saveExposure(e);
				} }
			},
			{
				namespace: "qpl",
				handlers: { dispatch: function(t) {
					return o("WAWebMainThreadQplHandler").handleQplBridgeMessage(t);
				} }
			},
			{
				namespace: "backendEventBus",
				handlers: {
					triggerAppStateSyncCompleted: function(t) {
						var e = t.collectionDetails;
						o("WAWebBackendEventBus").BackendEventBus.triggerAppStateSyncCompleted(e);
					},
					triggerLogout: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
					},
					triggerRefreshQR: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
					},
					triggerInitialChatHistorySynced: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerInitialChatHistorySynced();
					},
					triggerRecentChatHistorySynced: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced();
					},
					triggerFullChatHistorySynced: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerFullChatHistorySynced();
					},
					triggerCriticalSyncDone: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerCriticalSyncDone();
					},
					triggerStorageInitializationError: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerStorageInitializationError();
					},
					triggerSocketStreamDisconnected: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerSocketStreamDisconnected();
					},
					triggerOpenSocketStream: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerOpenSocketStream();
					},
					triggerReconnectSocket: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
					},
					triggerSetSocketState: function(t) {
						var e = t.state;
						o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(e);
					},
					triggerMainStreamModeReady: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady();
					},
					triggerOfflineProcessReady: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerOfflineProcessReady();
					},
					triggerOfflineDeliveryEnd: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd();
					},
					triggerOfflineDeliveryStateReset: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryStateReset();
					},
					triggerAbPropsUpdate: function(t) {
						o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate(t);
					},
					triggerAbPropsLoaded: function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsLoaded();
					},
					triggerPrimaryFeaturesSynced: function(t) {
						var e = t.changedFeatures;
						o("WAWebBackendEventBus").BackendEventBus.triggerPrimaryFeaturesSynced(new Set(e));
					}
				}
			},
			{
				namespace: "mainthread_callbacks",
				handlers: {
					handleSingleMsg: function(t) {
						return o("WAWebApiHydrateWidsUtil").hydrateWids(t), o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(babelHelpers.extends({}, t, { newMsg: babelHelpers.extends({}, t.newMsg, { id: r("WAWebMsgKey").from(t.newMsg.id) }) }));
					},
					checkOrphanMutations: function(t) {
						var e = t.chatIds, n = t.msgIds, r = t.threadIds;
						return o("WAWebSyncdOrphanWorkerCompatible").checkOrphanMutations(n, e, r);
					},
					maybeInsertDebugPlaceholder: function(t) {
						return o("WAWebApiHydrateWidsUtil").hydrateWids(t), o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder(t);
					},
					updateMmSignalSharingExpirationWindow: function(t) {
						var e = t.contextInfo, n = t.msg;
						return o("WAWebApiHydrateWidsUtil").hydrateWids(n), o("WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible").updateMmSignalSharingExpirationWindow(n, e);
					}
				}
			},
			{
				namespace: "mainthread_jobmanager",
				handlers: {
					fireAndForget: function(t) {
						o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(t);
					},
					waitUntilPersisted: function(t) {
						return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(t);
					},
					waitUntilCompleted: function(t) {
						return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(t);
					},
					loadAndRunJobFromId: function(t) {
						var e = t.jobId;
						return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().loadAndRunJobFromId(e);
					},
					deletePersistedJob: async function(t) {
						var e = t.jobId;
						await o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.deletePersistedJob(e);
					},
					maybeCreateJob: function(t) {
						return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(t);
					}
				}
			},
			{
				namespace: "mainthread_crashlog",
				handlers: { sendLogs: function(t) {
					var e = t.options, n = t.reason;
					return o("WAWebCrashlog").sendLogs(n, e);
				} }
			},
			{
				namespace: "mainthread_fblogger",
				handlers: { logFBError: function(t) {
					var e = t.serializedError, n = babelHelpers.objectWithoutPropertiesLoose(t, f), a = r("err")(e.message);
					a.stack = e.stack, a.name = e.name, o("WAWebLogger").logToFBLoggerLocal(babelHelpers.extends({}, n, { error: a }));
				} }
			},
			{
				namespace: "mainthread_messagecache",
				handlers: {
					addMessages: function(t) {
						var e = t.flushImmediately, n = t.messages;
						return o("WAWebApiHydrateWidsUtil").hydrateWids(n), o("WAWebGetMessageCache").getMessageCache().addMessages(n, e);
					},
					addAdditionalInfo: function(t) {
						var e = t.dangerouslyFlushImmediately, n = t.info;
						o("WAWebGetMessageCache").getMessageCache().addAdditionalInfo(n, e);
					},
					createSnapshot: function() {
						o("WAWebGetMessageCache").getMessageCache().createSnapshot();
					},
					checkpointQueueWait: function() {
						return o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait();
					},
					checkpointQueueSize: function() {
						return o("WAWebGetMessageCache").getMessageCache().checkpointQueueSize();
					},
					size: function() {
						return o("WAWebGetMessageCache").getMessageCache().size();
					}
				}
			},
			{
				namespace: "mainthread_msgreporter",
				handlers: {
					startMarker: function(t) {
						var e = t.markerId, n = t.stage, r = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(n);
						r && b.set(e, r);
					},
					endMarker: function(t) {
						var e = t.markerId, n = b.get(e);
						n && (n(), b.delete(e));
					},
					activate: function(t) {
						var e = t.count;
						o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.activate(e);
					}
				}
			},
			{
				namespace: "mainthread_identitychange",
				handlers: {
					handleNewIdentity: function(t) {
						var e = t.deviceWid, n = t.offline;
						return o("WAWebApiHydrateWidsUtil").hydrateWids({ deviceWid: e }), o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(e, n);
					},
					clearDeviceRecordForIdentityChange: function(t) {
						return o("WAWebApiHydrateWidsUtil").hydrateWids(t), o("WAWebIdentityChangeApiWorkerCompatible").clearDeviceRecordForIdentityChange(t);
					}
				}
			},
			{
				namespace: "mainthread_userPrefsMultiDevice",
				handlers: {
					getNoiseInfo: function() {
						return o("WAWebUserPrefsMultiDeviceMainThread").userPrefsMultiDeviceMainThread.getNoiseInfo();
					},
					getNoiseInfoIv: function() {
						return o("WAWebUserPrefsMultiDeviceMainThread").userPrefsMultiDeviceMainThread.getNoiseInfoIv();
					},
					setNoiseInfo: function(t) {
						var e = t.info;
						return o("WAWebUserPrefsMultiDeviceMainThread").userPrefsMultiDeviceMainThread.setNoiseInfo(e);
					},
					setNoiseInfoIv: function(t) {
						var e = t.iv;
						return o("WAWebUserPrefsMultiDeviceMainThread").userPrefsMultiDeviceMainThread.setNoiseInfoIv(e);
					}
				}
			},
			{
				namespace: "mainthread_userPrefsScreenLock",
				handlers: {
					getScreenLockEnabled: function() {
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.getScreenLockEnabled();
					},
					getScreenLockIterations: function() {
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.getScreenLockIterations();
					},
					getScreenLockIvString: function() {
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.getScreenLockIvString();
					},
					getScreenLockSalt: function() {
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.getScreenLockSalt();
					},
					setScreenLockIterations: function(t) {
						var e = t.iterations;
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.setScreenLockIterations(e);
					},
					setScreenLockIvString: function(t) {
						var e = t.iv;
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.setScreenLockIvString(e);
					},
					setScreenLockSalt: function(t) {
						var e = t.salt;
						return o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread.setScreenLockSalt(e);
					}
				}
			},
			{
				namespace: "mainthread_mediaHostsSync",
				handlers: { refresh: function() {
					o("WAWebMediaHosts").mediaHosts.forceRefresh(new AbortController().signal).catch(function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to refresh media hosts: ", ""])), r("getErrorSafe")(t)).sendLogs("media-hosts-refresh-failed");
					});
				} }
			},
			{
				namespace: "mainthread_appTracker",
				handlers: {
					start: function(t) {
						var e = t.type, n = o("WAWebAppTracker").AppTrackerType.cast(e);
						if (n == null) {
							o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Invalid app tracker type: ", ""])), e).sendLogs("invalid-app-tracker-type");
							return;
						}
						o("WAWebAppTracker").AppTracker.start(n);
					},
					stop: function(t) {
						var e = t.type, n = o("WAWebAppTracker").AppTrackerType.cast(e);
						if (n == null) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Invalid app tracker type: ", ""])), e).sendLogs("invalid-app-tracker-type");
							return;
						}
						o("WAWebAppTracker").AppTracker.stop(n);
					}
				}
			},
			{
				namespace: "mainthread_crashLogger",
				handlers: { mark: function(t) {
					var e = t.mediaId, n = t.metadata, r = t.progressType, a = o("WAWebMmsDownloadUploadCrashLogger").ProgressType.cast(r);
					if (a == null) {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Invalid progress type: ", ""])), r).sendLogs("invalid-progress-type");
						return;
					}
					o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger.mark(e, a, n);
				} }
			},
			{
				namespace: "mainthread_uploadmanager",
				handlers: {
					handleEncryptionStart: (t = o("WAWebMainThreadUploadManagerHandler")).handleEncryptionStart,
					handleEncryptionSuccess: t.handleEncryptionSuccess,
					handleStreamUploadStart: t.handleStreamUploadStart,
					handleArrayBufferCreated: t.handleArrayBufferCreated,
					handleCheckExistingSuccess: t.handleCheckExistingSuccess,
					handleCheckExistingError: t.handleCheckExistingError,
					handleUploadHostFound: t.handleUploadHostFound,
					handleUploadAttemptSuccess: t.handleUploadAttemptSuccess,
					handleUploadAttemptError: t.handleUploadAttemptError,
					handleUploadProgress: t.handleUploadProgress,
					handleUploadSuccess: t.handleUploadSuccess,
					handleUploadError: t.handleUploadError
				}
			},
			{
				namespace: "userPrefsFromWorker",
				handlers: {
					syncSet: function(t) {
						var e = t.key, n = t.value;
						o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(e, n);
					},
					syncRemove: function(t) {
						var e = t.key;
						o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncRemove(e);
					},
					syncClear: function() {
						o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncClear();
					},
					syncBulkSet: function(t) {
						var e = t.entries;
						for (var n of e) {
							var r = n.key, a = n.value;
							o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(r, a);
						}
					}
				}
			},
			{
				namespace: "mainthread_comms",
				handlers: {
					onSocketStateChange: function(t) {
						var e = t.isConnected, n = t.socketId;
						o("WAWebCommsWorkerProxy").updateCommsProxySocketState(e, n);
					},
					handleStanza: async function(t) {
						var e = t.size, n = t.socketId, a = t.stanza, i = await o("WAWap").decodeStanza(a, function(e) {
							return Promise.resolve(e);
						}), l = await r("WAWebCommsHandleStanza")(i, n, e);
						if (l instanceof o("WAWap").WapNode) {
							var s = o("WAWap").encodeStanza(l);
							return o("WATransferableResult").withTransferables(s, [s.buffer]);
						}
						return l;
					}
				}
			}
		]);
		return n.setNamespaceHandler("event", function(e, t, n) {
			if (new Set(["updateChatLimitSharing", "chatCollectionAdd"]).has(e)) o("WAWebApiHydrateWidsUtil").hydrateWids(t);
			else if (e === "processAndGetUnreadMentionsInfo") for (var a of t.filteredMsgs) o("WAWebApiHydrateWidsUtil").hydrateWids(a), a.id = r("WAWebMsgKey").from(a.id);
			n ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t)) : o("WAWebBackendApi").frontendFireAndForget(e, t);
		}), n.setNamespaceHandler("workerSafeEvent", function(e, t, n) {
			e === "syncContactListJob" && o("WAWebApiHydrateWidsUtil").hydrateWids(t), n ? n(o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t)) : o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(e, t);
		}), n;
	}
	var L = null, E = null, k = 3, I = 10;
	async function T(e) {
		var t, n, a = (t = e == null ? void 0 : e.retryStart) != null ? t : 0, i = (n = e == null ? void 0 : e.qpl) != null ? n : o("QPLFlow").startQPLFlow(C, {
			annotations: {
				bool: {
					wa_web_media_wasm_worker_split: r("gkx")("24042"),
					supportModule: r("supportsModuleWorker")(!1)
				},
				int: { retryStart: a }
			},
			timeoutInMs: 6e4
		});
		try {
			i.addPoint("create_worker_start");
			var l = o("WAWebUA").UA.isFirefox && parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <= 115, s = o("WebWorkerV4Resource").createDedicatedV4WebWorker(r("WAWebBackendWorkerV2Resource"), v, h, l), u = s.initReady, c = s.worker;
			i.addPoint("worker_connect_start"), await Promise.all([u, D(c)]), i.addPoint("worker_connect_end");
			var f;
			o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() ? f = await o("WAWebBackendWorkerClient").getBackendWorkerBridge() : f = R();
			var g = S(c);
			o("WAWebBackendWorkerBridge").attachBridgeToPortal(f, g, [
				"historySync",
				"deviceSync",
				"crypto",
				"media",
				"prekeyProcessing",
				"abProps",
				"backendEventBusSync",
				"userPrefs",
				"workerInit",
				"mediaHostsSync",
				"networkStatusSync",
				"comms"
			]), o("WAWebBackendWorkerClient").getBackendWorkerBridge().then(function(e) {
				L == null || L(), e.fireAndForget("mediaHostsSync", "snapshot", { data: o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.get() }), L = o("WAWebMediaHostsRawStateManager").mediaHostsRawStateManager.onSet(function(t) {
					e.fireAndForget("mediaHostsSync", "snapshot", { data: t });
				});
			}).catch(function(e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to set up media hosts sync: ", ""])), r("getErrorSafe")(e)).sendLogs("media-hosts-sync-failed");
			}), o("WAWebBackendWorkerClient").getBackendWorkerBridge().then(function(e) {
				E == null || E(), e.fireAndForget("networkStatusSync", "updateNetworkStatus", { online: o("WAWebNetworkStatusStateManager").networkStatusStateManager.get() }), E = o("WAWebNetworkStatusStateManager").networkStatusStateManager.onSet(function(t) {
					e.fireAndForget("networkStatusSync", "updateNetworkStatus", { online: t });
				});
			}).catch(function(e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to set up network status sync: ", ""])), r("getErrorSafe")(e)).sendLogs("network-status-sync-failed");
			}), o("WAWebBackendWorkerClient").setBackendWorkerBridge(f), i.addPoint("init_data_start"), await o("WAWebBackendWorkerInitState").sendInitState(f), i.addPoint("init_data_end"), i.addPoint("create_worker_end"), i.endSuccess(), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorker is initialised"]))), globalThis.navigator.locks != null && globalThis.navigator.locks.request(h + "-kill-switch-lock", function() {
				a < I && T({ retryStart: a + 1 });
			});
		} catch (t) {
			var b;
			globalThis.navigator.locks != null && await globalThis.navigator.locks.request(h + "-kill-switch-lock", { steal: !0 }, function() {
				return Promise.resolve();
			});
			var x = r("getErrorSafe")(t);
			if (o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorkerClient init fails"]))).catching(x).sendLogs("main-thread-backend-worker-init-fails"), x.message.includes(y)) {
				i.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t));
				return;
			}
			var $ = (b = e == null ? void 0 : e.retryInit) != null ? b : 0;
			$ < k && globalThis.navigator.locks != null ? (i.addPoint("retry_" + $), T({
				qpl: i,
				retryInit: $ + 1
			})) : i.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t));
		}
	}
	function D(e) {
		return new Promise(function(t, n) {
			var r = function(a) {
				var o = a.data, i = o.message, l = o.type;
				l === "worker_setup" && (e.removeEventListener("message", r), i === "worker_started" ? t() : i === "worker_failed" && n());
			};
			e.addEventListener("message", r);
		});
	}
	l.startBackendWorker = T;
}), 98);
