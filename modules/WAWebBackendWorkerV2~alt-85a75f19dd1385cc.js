__d("WAWebBackendWorkerV2", [
	"WAComms",
	"WAJids",
	"WALogger",
	"WAResolvable",
	"WAResultOrError",
	"WATransferableResult",
	"WAWebBackendApi",
	"WAWebBackendEventBusWorker",
	"WAWebBackendEventBusWorkerCompatible",
	"WAWebBackendWorkerABPropsCache",
	"WAWebBackendWorkerBridge",
	"WAWebCallsOnlyGating",
	"WAWebCheckOrphanMutationsWorker",
	"WAWebCommsBackendWorkerHandlers",
	"WAWebCrashlogWorker",
	"WAWebDbEncryptionKey",
	"WAWebDeprecatedSendIqWorker",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebDeserializeBridgedError",
	"WAWebFBLoggerWorker",
	"WAWebGetMessageCache",
	"WAWebGlobals",
	"WAWebHandleSingleMsgWorker",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebIdentityChangeApiWorker",
	"WAWebIdentityChangeApiWorkerCompatible",
	"WAWebLogger",
	"WAWebMaybeInsertDebugPlaceholderWorker",
	"WAWebMessageInsertDebugPlaceholderWorkerCompatible",
	"WAWebMessageProcessorCacheWorker",
	"WAWebMobilePlatforms",
	"WAWebModelStorageInitialize",
	"WAWebMsgProcessReporterWorker",
	"WAWebNoop",
	"WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
	"WAWebPersistedJobManagerWorkerBridge",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebRunInTransaction",
	"WAWebSchemaVersions",
	"WAWebSyncdOrphanWorkerCompatible",
	"WAWebUpdateMmSignalSharingExpirationWindowWorker",
	"WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMultiDeviceWorker",
	"WAWebUserPrefsMultiDeviceWorkerCompatible",
	"WAWebUserPrefsScreenLockWorker",
	"WAWebUserPrefsScreenLockWorkerCompatible",
	"WAWebWorkerQplProxy",
	"err",
	"getErrorSafe",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e) {
		throw new TypeError("\"" + e + "\" is read-only");
	}
	var p = (d = r("requireDeferred"))("WACryptoAesCbc").__setRef("WAWebBackendWorkerV2"), _ = d("WACryptoHmac").__setRef("WAWebBackendWorkerV2"), f = d("WACryptoSha256").__setRef("WAWebBackendWorkerV2"), g = d("WAWebBackendWorkerEncryptAndUploadDep").__setRef("WAWebBackendWorkerV2"), h = d("WAWebBackendWorkerMediaHostsWorkerDep").__setRef("WAWebBackendWorkerV2"), y = d("WAWebCryptoDecryptMediaWorker").__setRef("WAWebBackendWorkerV2"), C = d("WAWebDeviceSyncBackendWorker").__setRef("WAWebBackendWorkerV2"), b = d("WAWebHistorySyncBackendWorkerV2").__setRef("WAWebBackendWorkerV2"), v = d("WAWebHistorySyncProgress").__setRef("WAWebBackendWorkerV2"), S = d("WAWebNetworkStatusWorker").__setRef("WAWebBackendWorkerV2"), R = d("WAWebPrekeyProcessingBackendWorker").__setRef("WAWebBackendWorkerV2");
	function L() {
		var e = null, t = {
			onmessage: e,
			postMessage: function(t, n) {
				globalThis.postMessage(t, n);
			},
			close: function() {
				self.close();
			}
		};
		return self.addEventListener("message", function(e) {
			t.onmessage != null && t.onmessage(e);
		}), t;
	}
	var E = new (o("WAResolvable")).Resolvable(), k = new (o("WAResolvable")).Resolvable(), I = new (o("WAResolvable")).Resolvable(), T = Promise.all([
		E.promise,
		k.promise,
		I.promise
	]).then(function() {}), D = !1;
	function x() {
		try {
			var t = function() {
				return Promise.resolve();
			}, n = r("WAWebNoop");
			o("WAWebLogger").initializeWAWebLogger(function(e, n) {
				return t(e, n);
			}, function(e) {
				return n(e);
			}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorker(inside) starts"])));
			var a = o("WAWebBackendWorkerBridge").createBridge([
				{
					namespace: "historySync",
					handlers: { processV2: async function(t) {
						var e = t.chunkInfo, n = t.data;
						if (!D) {
							D = !0;
							var r = await v.load();
							r.initHistorySyncProgressListeners();
						}
						var o = await b.load();
						return o.processHistorySync(e, n, { isReady: T });
					} }
				},
				{
					namespace: "deviceSync",
					handlers: { decodeSignedKeyIndexBytesBatch: function(t) {
						var e = t.items;
						return C.load().then(function(t) {
							return t.decodeSignedKeyIndexBytesBatch(e);
						});
					} }
				},
				{
					namespace: "crypto",
					handlers: {
						aesCbcDecrypt: async function(t) {
							var e = t.ciphertext, n = t.encKey, r = t.iv, a = await p.load(), i = await a.aesCbcDecrypt(n, r, e);
							return o("WATransferableResult").withTransferables(i, [i]);
						},
						hmacSha256: function(t) {
							var e = t.data, n = t.macKey, r = t.truncateLength;
							return _.load().then(function(t) {
								return t.hmacSha256(n, e, r);
							});
						},
						sha256Base64: function(t) {
							var e = t.data;
							return f.load().then(function(t) {
								return t.sha256Base64(e);
							});
						}
					}
				},
				{
					namespace: "prekeyProcessing",
					handlers: { createOutgoingSessionBatch: function(t) {
						var e = t.regInfo, n = t.sessions, r = t.useScheduler;
						return R.load().then(function(t) {
							return t.createOutgoingSessionBatch({
								regInfo: e,
								sessions: n,
								useScheduler: r
							});
						});
					} }
				},
				{
					namespace: "abProps",
					handlers: { update: function(t) {
						var e = t.configs, n = t.urlSearch;
						o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(e, n);
					} }
				},
				{
					namespace: "userPrefs",
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
					namespace: "networkStatusSync",
					handlers: { updateNetworkStatus: function(t) {
						var e = t.online;
						S.load().then(function(t) {
							return t.networkStatusWorker.acceptUpdate(e);
						});
					} }
				}
			]);
			o("WAComms").setCommsFactory(function(e, t, n) {
				return new (o("WAComms")).Comms(e, t, n, function(e, t) {
					a.fireAndForget("mainthread_comms", "onSocketStateChange", {
						isConnected: e,
						socketId: t
					});
				});
			}), a.setHandlers("comms", o("WAWebCommsBackendWorkerHandlers").createCommsWorkerHandlers(a)), o("WAWebBackendWorkerBridge").attachBridgeToPortal(a, L(), [
				"abPropsExposure",
				"qpl",
				"event",
				"workerSafeEvent",
				"backendEventBus",
				"mainthread_callbacks",
				"mainthread_crashlog",
				"mainthread_fblogger",
				"mainthread_jobmanager",
				"mainthread_mediaHostsSync",
				"mainthread_messagecache",
				"mainthread_msgreporter",
				"mainthread_identitychange",
				"userPrefsFromWorker",
				"mainthread_appTracker",
				"mainthread_crashLogger",
				"mainthread_uploadmanager",
				"mainthread_userPrefsMultiDevice",
				"mainthread_userPrefsScreenLock",
				"mainthread_comms"
			]), o("WAWebBackendApi").setApi(a), t = o("WAWebCrashlogWorker").createSendLogsWorker(a), n = o("WAWebFBLoggerWorker").createLogToFBLoggerWorker(a), a.setHandlers("media", {
				decryptMedia: async function(t) {
					var e = t.ciphertextHmac, n = t.encKey, r = t.expectedPlaintextHash, a = t.iv, i = t.macKey, l = await y.load(), s = await l({
						ciphertextHmac: e,
						encKey: n,
						expectedPlaintextHash: r,
						iv: a,
						macKey: i
					});
					return o("WATransferableResult").withTransferables(s, [s]);
				},
				encryptAndUpload: async function(t) {
					var e = await g.load(), n = e.getEncryptAndUpload(a), i = n.encryptAndUpload;
					try {
						return o("WAResultOrError").makeResult(await i(t));
					} catch (e) {
						return o("WAResultOrError").makeError(o("WAWebDeserializeBridgedError").serializeBridgedError(e instanceof Error ? e : r("err")(String(e))));
					}
				},
				abortUpload: async function(t) {
					var e = t.uploadId, n = await g.load(), r = n.getEncryptAndUpload(a), o = r.abortUpload;
					o(e);
				}
			}), a.setHandlers("mediaHostsSync", { snapshot: async function(t) {
				var e = t.data, n = await h.load();
				return n.getMediaHostsWorker(a).acceptSnapshot(e);
			} }), o("WAWebHandleSingleMsgWorkerCompatible").setInstance(o("WAWebHandleSingleMsgWorker").createHandleSingleMsgWorker(a)), o("WAWebSyncdOrphanWorkerCompatible").setInstance(o("WAWebCheckOrphanMutationsWorker").createCheckOrphanMutationsWorker(a)), o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(o("WAWebMaybeInsertDebugPlaceholderWorker").createMaybeInsertDebugPlaceholderWorker(a)), o("WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible").setInstance(o("WAWebUpdateMmSignalSharingExpirationWindowWorker").createUpdateMmSignalSharingExpirationWindowWorker(a)), o("WAWebPersistedJobManagerWorkerCompatible").setInstance(o("WAWebPersistedJobManagerWorkerBridge").createPersistedJobManagerWorkerBridge(a)), o("WAWebGetMessageCache").setMessageCache(o("WAWebMessageProcessorCacheWorker").createMessageCacheWorkerBridge(a)), o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(o("WAWebMsgProcessReporterWorker").createMsgProcessReporterWorkerBridge(a)), o("WAWebIdentityChangeApiWorkerCompatible").setInstance(o("WAWebIdentityChangeApiWorker").createIdentityChangeApiWorkerBridge(a)), o("WAWebUserPrefsMultiDeviceWorkerCompatible").setInstance(o("WAWebUserPrefsMultiDeviceWorker").createUserPrefsMultiDeviceWorkerBridge(a)), o("WAWebUserPrefsScreenLockWorkerCompatible").setInstance(o("WAWebUserPrefsScreenLockWorker").createUserPrefsScreenLockWorkerBridge(a)), o("WAWebDeprecatedSendIqWorkerCompatible").setInstance(o("WAWebDeprecatedSendIqWorker").deprecatedSendIqWorker);
			var i = new (r("WAWebBackendEventBusWorker"))(a);
			a.setNamespaceHandler("backendEventBusSync", i.getBackendEventBusSyncHandler()), o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(i), a.setHandlers("workerInit", {
				setup: async function(t) {
					var e = t.dbInit, n = t.eventBusSyncState, a = t.globals;
					try {
						var l, u;
						i.setState(n);
						var c = o("WAJids").interpretAndValidateJid(a.deviceJid);
						if (c.jidType !== "phoneDevice") throw r("err")("globals: deviceJid is not a phoneDevice jid");
						var d = c.deviceJid, m = o("WAJids").extractUserJid(d);
						o("WAWebGlobals").setGlobals({
							jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
							myJids: {
								deviceJid: d,
								userJid: m
							},
							lidDeviceJid: (l = a.lidDeviceJid) != null ? l : "",
							displayName: (u = a.displayName) != null ? u : "",
							runInTransaction: o("WAWebRunInTransaction").runInTransaction,
							newClockSkewCalculation: function() {
								return !1;
							}
						}), o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(a.allowHistorySyncPutAllowDuplicate), o("WAWebGlobals").setEnableImprovedBulkMerge(a.enableImprovedBulkMerge), o("WAWebCallsOnlyGating").initCallsOnlyModeFromWorkerInit(a.callsOnly), o("WAWebSchemaVersions").setSchemaVersions(e.versionsToSet), await o("WAWebModelStorageInitialize").initializeWithoutGKs(), await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
						var p = await o("WAWebUserPrefsGeneral").getLastMobilePlatform();
						p != null && await o("WAWebMobilePlatforms").setMobilePlatform(p, !1), await o("WAWebDbEncryptionKey").DbEncKeyStore.init(e.salt), I.resolve();
					} catch (e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorker init fails"]))).catching(r("getErrorSafe")(e)).sendLogs("backend-worker-init-fails"), I.reject(e);
					}
				},
				setAbProps: function(t) {
					var e = t.abProps;
					try {
						o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(e.configs, e.urlSearch), E.resolve();
					} catch (e) {
						E.reject(e);
					}
				},
				setDbFinalKey: async function(t) {
					var e = t.dbFinalKey;
					try {
						await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit(), await o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(e.salt), k.resolve();
					} catch (e) {
						k.reject(e);
					}
				}
			}), o("WAWebWorkerQplProxy").initWorkerQplProxy(a), o("WAWebBackendWorkerABPropsCache").initializeWorkerABProps(a), o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(function(e) {
				switch (e.action) {
					case "set":
						a.fireAndForget("userPrefsFromWorker", "syncSet", {
							key: e.key,
							value: e.value
						});
						break;
					case "remove":
						a.fireAndForget("userPrefsFromWorker", "syncRemove", { key: e.key });
						break;
					case "clear":
						a.fireAndForget("userPrefsFromWorker", "syncClear", void 0);
						break;
					case "bulkSet":
						a.fireAndForget("userPrefsFromWorker", "syncBulkSet", { entries: e.entries });
						break;
				}
			}), globalThis.postMessage({
				type: "worker_setup",
				message: "worker_started"
			}), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorker(inside) ends"])));
		} catch (e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebBackendWorker start fails"]))).catching(r("getErrorSafe")(e)).sendLogs("backend-worker-start-fails"), globalThis.postMessage({
				type: "worker_setup",
				message: "worker_failed"
			});
		}
	}
	l.default = x;
}), 98);
