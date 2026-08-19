__d("WAWebHandleWorkerCompatibleRecentSyncChunk", [
	"WABinary",
	"WAGzip",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebABPropsCache",
	"WAWebApiHistorySyncNotification",
	"WAWebBackendEventBus",
	"WAWebBackendWorkerClient",
	"WAWebDBCreateLidPnMappings",
	"WAWebDownloadManager",
	"WAWebGetHistorySyncMetrics",
	"WAWebGetHistorySyncProgress",
	"WAWebHandleHistorySyncMsg",
	"WAWebHistorySyncLogUtils",
	"WAWebHistorySyncNotificationUtils",
	"WAWebHistorySyncProgress",
	"WAWebHistorySyncWorkerCompatibleNotificationUtils",
	"WAWebHttpErrors",
	"WAWebMdSyncDownloadFailureReason",
	"WAWebMetricsAttributionActions",
	"WAWebMmsClient",
	"WAWebMsgKey",
	"WAWebPreprocessHistorySyncProto",
	"WAWebProtobufsHistorySync.pb",
	"WAWebReleaseToEventLoop",
	"WAWebSendHistSyncServerErrorReceiptJob",
	"WAWebSendReceiptJobCommon",
	"WAWebSetUsernameJob",
	"WAWebStartMediaDownloadQpl",
	"WAWebUpdateLidMetadataApi",
	"WAWebUserPrefsHistorySync",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsTypes",
	"WAWebUsernameGatingUtils",
	"WAWebWidFactory",
	"decodeProtobuf",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
	async function R(t, n) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[recent sync] handleHistorySyncChunk started ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync"), n.addPoint("download_start"), o("WAWebMetricsAttributionActions").startHistorySyncAttributionTracking(t.syncType);
		var a = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(t), i = t.downloadedHistorySyncPayload, l = await o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(t, !0), v = l.historySyncDataAppliedMetric, S = l.historySyncDownloadedMetric, R = l.historySyncStartDownloadingMetric, E = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({ entryPoint: "HandleWorkerCompatibleRecentSyncChunk" }), k = null;
		if (i != null) o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[recent sync] use pre-downloaded payload ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync"), k = i;
		else {
			o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING, t.chunkOrder), o("WAWebHistorySyncNotificationUtils").commitHistoryStartDownloadingMetric(R, t.historySyncStepStartedTs, o("WATimeUtils").unixTimeMs());
			try {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] start downloading chunk, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t)).tags("history-sync"), k = await o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
					signal: new AbortController().signal,
					downloadQpl: E
				}, t.downloadOptions)), E.endSuccess();
			} catch (e) {
				if (E.endFailWithError("download_failed", String(e)), o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] history sync download failed"]))), o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(t.syncType), e instanceof o("WAWebHttpErrors").HttpNetworkError) {
					o("WAWebApiHistorySyncNotification").removeLocalFailureFromInFlightChunk(t.msgKey);
					return;
				}
				var I = r("WAWebMsgKey").fromString(t.msgKey);
				o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
					chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
					failureReason: o("WAWebMdSyncDownloadFailureReason").getMdSyncDownloadFailureReason(e),
					historySyncDownloadMetric: S,
					isSuccess: !1,
					startTs: t.historySyncStepStartedTs
				}), r("WAWebSendHistSyncServerErrorReceiptJob")(I.remote, I.id, t.downloadOptions.mediaKey), await o("WAWebApiHistorySyncNotification").markChunkForReuploadPending(t.msgKey);
				return;
			}
			o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED, t.chunkOrder), t.downloadOptions.mediaKey = "", o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] chunk downloaded, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t));
		}
		n.addPoint("download_end");
		var T = o("WAWebABProps").getABPropConfigValue("web_history_sync_worker_enabled") === !0;
		if (n.addPoint("history_sync_process_start", { bool: { isInWorker: T } }), T) {
			await L({
				blob: k,
				chunkInfo: t,
				historySyncDataAppliedMetric: v,
				progress: a,
				qpl: n
			}), n.addPoint("history_sync_process_end");
			return;
		}
		var D = new (o("WABinary")).Binary(k), x = await o("WAGzip").inflate(D.readByteArrayView()), $ = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsHistorySync.pb").HistorySyncSpec, x), P = [];
		$.phoneNumberToLidMappings.forEach(function(e) {
			var t = e.lidJid, n = e.pnJid;
			t != null && n != null && P.push({
				lid: o("WAWebWidFactory").createUserLidOrThrow(t),
				pn: o("WAWebWidFactory").createUserWidOrThrow(n)
			});
		}), await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
			mappings: P,
			flushImmediately: !0,
			identityChangeHandlingEnabled: !1,
			learningSource: "recent-sync-chunk"
		}), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] learned ", " mappings"])), P.length), o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED, t.chunkOrder), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] chunk decoded, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t, void 0, $.conversations.length)), t.chunkOrder != null && o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(), $.conversations = $.conversations.reduce(function(e, t) {
			var n = null;
			try {
				n = o("WAWebWidFactory").createWid(t.id);
			} catch (e) {
				o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"[handleWorkerCompatibleRecentSyncChunk] createWid failed \"",
					"\" ",
					""
				])), t.id, e).tags("history-sync");
			}
			return n ? e.concat(t) : e;
		}, []);
		var N = [], M = [], w = [];
		try {
			o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[recent sync] processing msgs"]))), await o("WAWebReleaseToEventLoop").releaseToEventLoop();
			var A = await o("WAWebPreprocessHistorySyncProto").preprocessHistorySyncProto($, P), F = A.associatedMsgs, O = A.chatRows, B = A.chatsWithRecentOrFullSyncMsgs, W = A.lastMsgs, q = A.missingParentsCache, U = A.recentOrFullSyncMsgs, V = A.threadMsgs, H = A.totalChunkMsgCount, G = A.unifiedAddons;
			o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.MESSAGE_PREPROCESSED, t.chunkOrder), U.length !== 0 ? await o("WAWebHandleHistorySyncMsg").handleProgressiveHistorySyncMsgs({
				associatedMsgs: F,
				chatsWithRecentOrFullSyncMsgs: Array.from(B),
				chunkOrder: t.chunkOrder,
				lastMsgs: W,
				missingParentsCache: q,
				recentOrFullSyncMsgs: U,
				syncType: t.syncType,
				threadMsgs: V,
				unifiedAddons: G
			}) : o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[recent sync] no msgs to handle"]))), o("WAWebUserPrefsHistorySync").setHistorySyncTotalProcessedMessageCount(H), await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(t.syncType, t.chunkOrder, a), o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(), await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder);
			for (var z = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(), j = new Set(), K = [], Q = 0; Q < $.conversations.length; Q++) {
				var X = $.conversations[Q], Y = o("WAWebWidFactory").createWid(X.id), J = O[Q], Z = (J == null ? void 0 : J.id) != null ? o("WAWebWidFactory").createWid(J.id) : Y;
				j.add(Z.toString());
				var ee = (z == null ? void 0 : z[X.id]) != null;
				if (ee) {
					var te = X.endOfHistoryTransferType;
					te != null && K.push(o("WAWebHistorySyncWorkerCompatibleNotificationUtils").updateEndOfHistorySync(Z, te));
				}
			}
			await Promise.all(K), o("WAWebBackendEventBus").BackendEventBus.triggerHistorySyncChunkProcessed(j), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
				historySyncDataAppliedMetric: v,
				startTs: t.historySyncStepStartedTs,
				isSuccess: !0
			}), o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(t.syncType, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.APPLIED, t.chunkOrder), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] storing recent chunk complete, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t, H, B.length));
		} catch (e) {
			throw o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[handleWorkerCompatibleRecentSyncChunk] failed ", ""])), e), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
				historySyncDataAppliedMetric: v,
				startTs: t.historySyncStepStartedTs,
				isSuccess: !1,
				forceFlushWamBuffer: !0,
				failureReason: String(e)
			}), e;
		}
		var ne = r("WAWebMsgKey").fromString(t.msgKey), re = new Map();
		re.set(ne.remote, [ne.id]), t.syncType !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3 && o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
			to: ne.remote,
			type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.HISTORY_SYNC_COMPLETION,
			groupedReceipt: re
		}), await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
			mappings: M,
			flushImmediately: !0,
			identityChangeHandlingEnabled: !1,
			learningSource: "recent-sync-chunk"
		}), await o("WAWebUpdateLidMetadataApi").updateLidMetadata({ updates: N }), o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && await o("WAWebSetUsernameJob").setUsernamesJob(w), await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder), t.downloadOptions.encFilehash != null && r("WAWebMmsClient").deleteMdHistorySyncBlob({
			directPath: t.downloadOptions.directPath,
			encFilehash: t.downloadOptions.encFilehash,
			signal: new AbortController().signal,
			encHandle: t.encHandle,
			companionUserSecret: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebCompanionMetaNonce")
		}).catch(function(e) {
			o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["MMS client delete error"])));
		}), a === 100 && (o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] Recent history sync complete"]))).tags("history-sync"), o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(t.syncType), await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({ recentCompleted: !0 }), o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced()), n.addPoint("history_sync_process_end");
	}
	async function L(e) {
		var t = e.blob, n = e.chunkInfo, a = e.historySyncDataAppliedMetric, i = e.progress, l = e.qpl;
		l.addPoint("get_bridge_start", { bool: {
			isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
			isBridgeReady: o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()
		} });
		var s = await o("WAWebBackendWorkerClient").getBackendWorkerBridge();
		l.addPoint("get_bridge_end"), l.addPoint("process_in_worker_start", { int: { dataSize: t.byteLength } });
		var u = await s.sendAndReceive("historySync", "processV2", {
			data: t,
			chunkInfo: n
		}, !1, void 0, void 0, [t]);
		if (l.addPoint("process_in_worker_end"), l.addPoint("post_processing_start"), !u.success) throw o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
			historySyncDataAppliedMetric: a,
			startTs: n.historySyncStepStartedTs,
			isSuccess: !1,
			forceFlushWamBuffer: !0,
			failureReason: u.error
		}), l.endFail(u.error), r("err")(u.error);
		await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(n.msgKey, n.syncType, n.chunkOrder), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
			historySyncDataAppliedMetric: a,
			startTs: n.historySyncStepStartedTs,
			isSuccess: !0
		});
		var c = r("WAWebMsgKey").fromString(n.msgKey), d = new Map();
		d.set(c.remote, [c.id]), n.syncType !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3 && o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
			to: c.remote,
			type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.HISTORY_SYNC_COMPLETION,
			groupedReceipt: d
		}), n.downloadOptions.encFilehash != null && r("WAWebMmsClient").deleteMdHistorySyncBlob({
			directPath: n.downloadOptions.directPath,
			encFilehash: n.downloadOptions.encFilehash,
			signal: new AbortController().signal,
			encHandle: n.encHandle,
			companionUserSecret: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebCompanionMetaNonce")
		}).catch(function(e) {
			o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["MMS client delete error"])));
		}), i === 100 && (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[history sync][recent sync] Recent history sync complete"]))).tags("history-sync"), o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(n.syncType), await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({ recentCompleted: !0 }), o("WAWebBackendEventBus").BackendEventBus.triggerRecentChatHistorySynced()), l.addPoint("post_processing_end");
	}
	l.handleWorkerCompatibleRecentSyncChunk = R, l.doRecentHistorySyncinWorkerV2 = L;
}), 98);
