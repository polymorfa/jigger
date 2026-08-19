__d("MAWBridgeHandlers", [
	"EBLS",
	"EBMandrakeSyncContactMMK",
	"EBMessageMetadataCache",
	"EBSMDBAPI",
	"EBSyncMailboxKeysForContacts",
	"EBWorkerEBSMStateUtils",
	"EBWorkerGetEBState",
	"EBWorkerOptOut",
	"EncryptedBackupsDYIMediaDownload",
	"FBLogger",
	"IGDHandleContinueMediaDownload",
	"MAWAcceptGroupInvite",
	"MAWAddGroupParticipants",
	"MAWBulkCancelDownloadMediaForUI",
	"MAWBulkLoadMessagesForThread",
	"MAWBulkMaybeCreateOrUpdateThreadScheduler",
	"MAWBulkMaybeUpsertThreadAndParticipants",
	"MAWCancelDownloadMediaForUI",
	"MAWChangeSecurityAlertSettingApi",
	"MAWChangeSecurityAlertSettingForSelfApi",
	"MAWClearSignalAndTempStores",
	"MAWCompleteUndoThreadCutoverApi",
	"MAWComputeCachePayloadFromScratch",
	"MAWCreateGroupStep",
	"MAWCreateOrUpdateThreadApi",
	"MAWDeleteMediaChunks_FOR_TESTING_ONLY",
	"MAWDeleteThread",
	"MAWDeleteThreadApi",
	"MAWDemoteGroupParticipants",
	"MAWDownloadMediaForUI",
	"MAWEBClientStateLogging",
	"MAWEBInitRestoreLogging",
	"MAWEBLSInWorkerSwitch",
	"MAWEBUploadTrackingUtils",
	"MAWEncryptedBackupsStateManager",
	"MAWEphemeralSettingsCache",
	"MAWFTSDataSync",
	"MAWFTSEBMessagesDataSync",
	"MAWForwardEBLSEbEnabledStateChangesToMainThread",
	"MAWGetBlobDataUrlByMediaIdApi",
	"MAWGetDeviceChangeAlertsByOptionsApi",
	"MAWGetEphemeralSettingsApi",
	"MAWGetGroupSuperAdminApi",
	"MAWGetLatestChatJids",
	"MAWGetLatestThreadIdsApi",
	"MAWGetMaybeNextNonAdminMsgSortOrderMsApi",
	"MAWGetMediaDownloadStatusApi",
	"MAWGetMediaValidationResultApi",
	"MAWGetProtocolMsgIdByMsgId",
	"MAWGetReceiverFetchInfoApi",
	"MAWGetRedactedRegistrationInfoForBugnub",
	"MAWGetReportedQplEvents",
	"MAWGetSecureThreadTotalCount",
	"MAWGetSecurityAlertSettingApi",
	"MAWGetSecurityAlertSettingForSelfAndContactApi",
	"MAWGetSpams",
	"MAWGetThreadConsistencyInfo",
	"MAWGetThreadLastMessageTsApi",
	"MAWGetThreadsInfoApi",
	"MAWGetThumbnailBlobDataUrlByMediaIdApi",
	"MAWGetWAIDevices",
	"MAWGetWATimeApi",
	"MAWGetWorkerHeartbeatApi",
	"MAWGroupSetMemberAddMode",
	"MAWHandleMediaRestoreCdnUrlResult",
	"MAWIdentifyCollapsedMessagesByExternalId",
	"MAWIdentifyXMAWithAssociatedTextByExternalId",
	"MAWInsertAdminMessageInCutoverThreadsApi",
	"MAWLeaveGroups",
	"MAWLoadMediaApi",
	"MAWLoadMsgsApi",
	"MAWLoadThreadsTxns",
	"MAWLowLevelMediaDownloadQplBridgeHandler",
	"MAWMarkThreadAsReadScheduler",
	"MAWMarkThreadAsUnreadApi",
	"MAWMessageIntegrityDebugInfoFromWorker",
	"MAWODSProxy",
	"MAWOptimisticUploadMedia",
	"MAWPromoteGroupParticipants",
	"MAWRemoveGroupParticipants",
	"MAWSendChatStateFromComposerApi",
	"MAWSendUpdateFromUIPersistedDataServiceApi",
	"MAWSetEphemeralSettingsFromFrontendApi",
	"MAWSetEphemeralSettingsOfPeerFromMIApi",
	"MAWSetGroupSubject",
	"MAWStateManagerSyncToMainThread",
	"MAWUpdateDeviceChangeAlertsApi",
	"MAWUpdateGroupInfoNameApi",
	"MAWUpdateLSThreadFromGroupInfoApi",
	"MAWUpdateMediaDownloadStatusByObjectIdApi",
	"MAWUpdateReceiverFetchInfoApi",
	"MAWWriteAdminMessageForDualThreadCutoverApi",
	"MAWWriteAdminMessageForEphemeralSettingsChange",
	"MAWWriteAdminMessageForLimitSharingApi",
	"MAWWriteAdminMessageForPinMessageApi",
	"MAWWriteAdminMessageForThreadHotlikeCustomizationApi",
	"MAWWriteAdminMessageForThreadNicknameCustomizationApi",
	"MAWWriteAdminMessageForThreadPhotoCustomizationApi",
	"MAWWriteAdminMessageForThreadThemeCustomizationApi",
	"MAWWriteAdminMessageForUKOSAApi",
	"MAWWriteAdminMessageForUnpinMessageApi",
	"MawEchoToProtobufConverter",
	"MawMessageSendService",
	"TaskSchedulerPriority",
	"WAGetCurrentUserDeviceInfoApi",
	"WAGetIdentityKeys",
	"WAGetRemotePublicIdentity",
	"WAGetThreadDevicesInfoApi",
	"WALogger",
	"WAOdsEnums",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = {
		acceptGroupInvite: function(t) {
			return o("MAWAcceptGroupInvite").acceptGroupInviteImpl(t);
		},
		addDeviceWithKeysInWorker: function() {
			return Promise.resolve();
		},
		addDeviceWithPinInWorker: function(t) {},
		addEbUploadTrackingWorkerQPL: function(t) {
			return o("MAWEBUploadTrackingUtils").handleBridgeEbUploadTrackingQPL(t.qplType, t.qplInstanceKey, t.pointName, t.annotations);
		},
		addGroupParticipants: function(t) {
			return o("MAWAddGroupParticipants").addGroupParticipantsImpl(t);
		},
		addMediaDownloadQpl: function(t) {
			return o("MAWLowLevelMediaDownloadQplBridgeHandler").handleBridgeMediaDownloadQPL(t.qplType, t.qplInstanceKey, t.pointName, t.annotations);
		},
		backupWriteCompletionHook: function() {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[messenger_e2ee_web] Handler not implemented and should not be used outside of Instamadillo"]))), Promise.resolve();
		},
		bulkCancelDownloadMediaForUI: function(t) {
			return o("MAWBulkCancelDownloadMediaForUI").bulkCancelDownloadMediaForUI(t.hashes);
		},
		bulkDownloadMediaForUI: function(t) {
			return o("MAWDownloadMediaForUI").bulkDownloadMediaForUI(t);
		},
		bulkLoadMessagesForThread: function(t) {
			return o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_DEPRECATED_BRIDGE_USAGE,
				key: "bulkLoadMessagesForThread"
			}), o("MAWBulkLoadMessagesForThread").bulkLoadMessagesForThread(t);
		},
		bulkMaybeCreateOrUpdateThread: function(t, n) {
			return o("MAWBulkMaybeCreateOrUpdateThreadScheduler").bulkMaybeCreateOrUpdateThreadScheduler().run(function() {
				return o("MAWBulkMaybeUpsertThreadAndParticipants").bulkMaybeCreateOrUpdateThread(t, n);
			}, {
				name: "maw_maybe_create_or_update_thread",
				priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
			}).promise;
		},
		cancelDownloadMediaForUI: function(t) {
			return o("MAWCancelDownloadMediaForUI").cancelDownloadMediaForUI(t.hash);
		},
		changeSecurityAlertSetting: function(t) {
			return o("MAWChangeSecurityAlertSettingApi").changeSecurityAlertSetting(t.isEnableAlert);
		},
		changeSecurityAlertSettingForSelf: function(t) {
			return o("MAWChangeSecurityAlertSettingForSelfApi").changeSecurityAlertSettingForSelf(t.isEnableSelfAlert);
		},
		checkIfGroupParticipant: function(t) {
			return o("MAWLoadThreadsTxns").checkIfGroupParticipant(t);
		},
		clearSignalAndTempStores: function(t) {
			return o("MAWClearSignalAndTempStores").clearSignalAndTempStores();
		},
		clearWorkerEBSMReStore: function(t) {
			return o("EBLS").clearEBSMStorage();
		},
		clearWorkerEBStateDBOnLogout: function(t) {
			return o("EBSMDBAPI").clearEBIDBNonPersistedRows({ hasUserGivenAutoRestoreConsent: t.hasUserGivenAutoRestoreConsent });
		},
		completeUndoThreadCutover: function(t) {
			return o("MAWCompleteUndoThreadCutoverApi").completeUndoThreadCutover(t);
		},
		computeCachePayloadFromScratch: function(t) {
			return o("MAWComputeCachePayloadFromScratch").computeCachePayloadFromScratch(t);
		},
		continueMediaDownload: function(t) {
			return o("IGDHandleContinueMediaDownload").handleContinueMediaDownload(t);
		},
		convertEchoMessagesToEBProtobufs: function(t) {
			return o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_DEPRECATED_BRIDGE_USAGE,
				key: "convertEchoMessagesToEBProtobufs"
			}), o("MawEchoToProtobufConverter").convertEchoMessagesToEBProtobufs(t.encodedEchoMessages, t.chatJid);
		},
		convertEchoMessagesToMsgStanzas: function(t) {
			return o("MAWODSProxy").odsBumpEntityKey({
				amount: 1,
				entity: o("WAOdsEnums").Entity.MAW_DEPRECATED_BRIDGE_USAGE,
				key: "convertEchoMessagesToMsgStanzas"
			}), [];
		},
		createGroup: function(t) {
			return o("MAWCreateGroupStep").createGroupStep(t.key, t.subject, t.users, t.extras, t.instanceKey);
		},
		createOrUpdateThread: function(t) {
			return o("MAWCreateOrUpdateThreadApi").createOrUpdateThread(t);
		},
		deleteMediaChunks_FOR_TESTING_ONLY: function(t) {
			return o("MAWDeleteMediaChunks_FOR_TESTING_ONLY").deleteMediaChunks_FOR_TESTING_ONLY(t.plaintextHashes);
		},
		deleteMsgsForMe: function(t) {
			return o("MawMessageSendService").sendDeleteMsgForMe(t);
		},
		deleteThread: function(t) {
			return o("MAWDeleteThreadApi").deleteThread(t.chatJid);
		},
		demoteGroupParticipants: function(t) {
			return o("MAWDemoteGroupParticipants").demoteGroupParticipantsImpl(t);
		},
		downloadMediaForUI: function(t) {
			return o("MAWDownloadMediaForUI").downloadMediaForUI(t);
		},
		dyiDownloadMediaV2: function(t) {
			return o("EncryptedBackupsDYIMediaDownload").downloadDYIMedia({
				mediaEntry: t.mediaEntry,
				mediaOption: t.mediaOption,
				plaintextHash: t.plaintextHash,
				protocolMsgId: t.protocolMsgId,
				sortOrderMs: t.sortOrderMs
			});
		},
		dyiGetThreadList: function() {
			return o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][labyrinth_dyi] Attempted to call the old DYI V1 flow"]))), Promise.resolve();
		},
		ebOptOutInWorker: function(t) {
			return o("EBWorkerOptOut").ebOptOutInWorker();
		},
		forwardMsg: (m = o("MawMessageSendService")).sendForwardedMsg,
		getAllThreadsAsJson: function() {
			return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][labyrinth_dyi] Attempted to call the old DYI V1 flow"]))), Promise.resolve({});
		},
		getBlobDataUrlByHashedPlaintextHash: function(t) {
			return o("MAWGetBlobDataUrlByMediaIdApi").getBlobDataUrlByHashedPlaintextHash(t.plaintextHash, t.description, t.qplInstanceKey, t.interactionId);
		},
		getBlobDataUrlByMediaId: function(t) {
			return o("MAWGetBlobDataUrlByMediaIdApi").getBlobDataUrlByMediaId(t.mediaId, t.description, t.qplInstanceKey);
		},
		getBlobDataUrlByPlaintextHash: function(t) {
			return o("MAWGetBlobDataUrlByMediaIdApi").getBlobDataUrlByPlaintextHash(t.plaintextHash, t.description, t.qplInstanceKey, t.interactionId);
		},
		getCurrentUserDeviceId: function() {
			return o("WAGetCurrentUserDeviceInfoApi").getCurrentUserDeviceId();
		},
		getCurrentUserDeviceInfo: function() {
			return o("WAGetCurrentUserDeviceInfoApi").getCurrentUserDeviceInfo();
		},
		getDeviceChangeAlertsByOptions: function(t) {
			return o("MAWGetDeviceChangeAlertsByOptionsApi").getDeviceChangeAlertsByOptions(t.options);
		},
		getEBMetadataCacheDetailsForThread: function(t) {
			return o("EBMessageMetadataCache").getCacheDetailsForThreadForLogging(t);
		},
		getEBSMWorkerState: function() {
			return o("EBWorkerEBSMStateUtils").getEBSMWorkerState();
		},
		getEphemeralSettings: function(t) {
			return o("MAWGetEphemeralSettingsApi").getEphemeralSettings_DEPRECATED_DO_NOT_USE(t.threadId);
		},
		getGroupSuperAdmin: function(t) {
			return o("MAWGetGroupSuperAdminApi").getGroupSuperAdmin(t.chatJid);
		},
		getIdentityKeys: function(t) {
			return o("WAGetIdentityKeys").getIdentityKeysInWorker();
		},
		getLatestChatJids: function(t) {
			return o("MAWGetLatestChatJids").getLatestChatJids(t.count);
		},
		getLatestThreadIds: function(t) {
			return o("MAWGetLatestThreadIdsApi").getLatestThreadIds(t.numThreads);
		},
		getMaybeNextNonAdminMsgSortOrderMs: function(t) {
			return o("MAWGetMaybeNextNonAdminMsgSortOrderMsApi").getMaybeNextNonAdminMsgSortOrderMs(t.chatJid, t.mayBeAdminMsgId);
		},
		getMediaDownloadStatusByMediaId: function(t) {
			return o("MAWGetMediaDownloadStatusApi").getMediaDownloadStatusByMediaId(t.mediaId, t.qplInstanceKey);
		},
		getMediaDownloadStatusByPlaintextHash: function(t) {
			return o("MAWGetMediaDownloadStatusApi").getMediaDownloadStatusByPlaintextHash(t.plaintextHash, t.qplInstanceKey);
		},
		getMediaRestoreNextTimestamp: function(t) {
			return o("MAWFTSEBMessagesDataSync").getMediaRestoreNextTimestamp(t);
		},
		getMediaValidationResultByMediaId: function(t) {
			return o("MAWGetMediaValidationResultApi").getMediaValidationResultByMediaId(t.mediaId, t.qplInstanceKey);
		},
		getMediaValidationResultByPlainTextHash: function(t) {
			return o("MAWGetMediaValidationResultApi").getMediaValidationResultByPlainTextHash(t.plaintextHash, t.qplInstanceKey);
		},
		getProtocolMsgIdByMsgId: function(t) {
			return o("MAWGetProtocolMsgIdByMsgId").getProtocolMsgIdByMsgId(t.msgId);
		},
		getReceiverFetchInfo: function(t) {
			return o("MAWGetReceiverFetchInfoApi").getReceiverFetchInfo(t);
		},
		getRedactedRegistrationInfoForBugnub: function(t) {
			return o("MAWGetRedactedRegistrationInfoForBugnub").getRedactedRegistrationInfoForBugnub();
		},
		getRemotePublicIdentityKey: async function(t) {
			var e = await o("WAGetRemotePublicIdentity").getRemotePublicIdentity(t.deviceId, t.userId);
			return e == null ? null : { remotePublicIdentityKey: e };
		},
		getReportedQplEvents: function(t) {
			return o("MAWGetReportedQplEvents").getReportedQplEvents();
		},
		getSecureThreadTotalCount: function(t) {
			return o("MAWGetSecureThreadTotalCount").getSecureThreadTotalCount();
		},
		getSecurityAlertSetting: function(t) {
			return o("MAWGetSecurityAlertSettingApi").getSecurityAlertSetting();
		},
		getSecurityAlertSettingForSelfAndContact: function(t) {
			return o("MAWGetSecurityAlertSettingForSelfAndContactApi").getSecurityAlertSettingForSelfAndContact();
		},
		getSpams: function() {
			return o("MAWGetSpams").getSpamsImpl();
		},
		getThreadConsistencyInfo: function(t) {
			return o("MAWGetThreadConsistencyInfo").getThreadConsistencyInfo(t);
		},
		getThreadDevicesInfo: function(t) {
			return o("WAGetThreadDevicesInfoApi").getThreadDevicesInfo(t);
		},
		getThreadIdByDeduplicationKey: function(t) {
			return o("MAWGetThreadsInfoApi").getThreadIdByDeduplicationKey(t.deduplicationKey);
		},
		getThreadLastMessageTs: function(t) {
			return o("MAWGetThreadLastMessageTsApi").getThreadLastMessageTs(t.threadKey);
		},
		getThumbnailBlobDataUrlByHashedPlaintextHash: function(t) {
			return o("MAWGetThumbnailBlobDataUrlByMediaIdApi").getThumbnailBlobDataUrlByHashedPlaintextHash(t.plaintextHash, t.description, t.qplInstanceKey, t.interactionId);
		},
		getThumbnailBlobDataUrlByMediaId: function(t) {
			return o("MAWGetThumbnailBlobDataUrlByMediaIdApi").getThumbnailBlobDataUrlByMediaId(t.mediaId, t.description, t.qplInstanceKey);
		},
		getWAIDevices: function(t) {
			return o("MAWGetWAIDevices").getWAIDevices(t);
		},
		getWATime: function() {
			return o("MAWGetWATimeApi").getWATime();
		},
		getWorkerBasedMessageIntegrityDebugInfo: function(t) {
			return o("MAWMessageIntegrityDebugInfoFromWorker").getWorkerBasedMessageIntegrityDebugInfo(t);
		},
		getWorkerEBState: function() {
			return o("EBWorkerGetEBState").getEBWorkerState();
		},
		getWorkerHeartbeat: function() {
			return o("MAWGetWorkerHeartbeatApi").getWorkerHeartbeat();
		},
		handleInstamadilloDYIRangeQueryRestore: function() {
			return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[maw_core_lla] Handler not implemented and should not be used outside Instamadillo"]))), Promise.resolve();
		},
		identifyCollapsedMessagesByExternalId: function(t) {
			return o("MAWIdentifyCollapsedMessagesByExternalId").identifyCollapsedMessagesByExternalId(t);
		},
		identifyXMAWithAssociatedTextByExternalId: function(t) {
			return o("MAWIdentifyXMAWithAssociatedTextByExternalId").identifyXMAWithAssociatedTextByExternalId(t);
		},
		insertAdminMessageInCutoverThreads: function(t) {
			return o("MAWInsertAdminMessageInCutoverThreadsApi").insertAdminMessageInCutoverThreads(t);
		},
		leaveGroup: function(t) {
			return o("MAWLeaveGroups").leaveGroupImpl(t.groupJid);
		},
		loadMoreMedia: function(t) {
			return o("MAWLoadMediaApi").loadMoreMedia(t);
		},
		loadMsgsByExternalId: function(t) {
			return o("MAWLoadMsgsApi").loadMsgsByExternalId(t.externalId, t.config);
		},
		logEBClientStateForDebugging: function(t) {
			return o("MAWEBClientStateLogging").logEBClientStateForDebugging();
		},
		logInitRestoreMethodForDebugging: function(t) {
			return o("MAWEBInitRestoreLogging").logInitRestoreMethodForDebugging(t);
		},
		markBackupAsCompleted: function() {
			return Promise.resolve();
		},
		markThreadAsRead: function(t) {
			return o("MAWMarkThreadAsReadScheduler").scheduleMarkThreadAsRead(t);
		},
		markThreadAsUnread: function(t) {
			return o("MAWMarkThreadAsUnreadApi").markThreadAsUnread(t.chatJid);
		},
		mediaRestoreCdnUrlResult: function(t) {
			return o("MAWHandleMediaRestoreCdnUrlResult").handleMediaRestoreCdnUrlResult(t);
		},
		optimisticUploadMedia: function(t) {
			return o("MAWOptimisticUploadMedia").optimisticUploadMedia(t);
		},
		promoteGroupParticipants: function(t) {
			return o("MAWPromoteGroupParticipants").promoteGroupParticipantsImpl(t);
		},
		removeGroupParticipants: function(t) {
			return o("MAWRemoveGroupParticipants").removeGroupParticipantsImpl(t);
		},
		resendEBLSInWorkerEbEnabledState: function(t) {
			return o("MAWForwardEBLSEbEnabledStateChangesToMainThread").sendEBLSEbEnabledStateToMainThread();
		},
		resendWorkerStateManagerValuesToMainThread: function(t) {
			return o("MAWStateManagerSyncToMainThread").resendCurrentValuesToMainThread();
		},
		search: function(t) {
			return o("MAWFTSDataSync").search(t);
		},
		searchFTSClearThreadRestoreStatus: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSClearThreadRestoreStatus(t);
		},
		searchFTSGetThreadRestoreStatus: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSGetThreadRestoreStatus(t);
		},
		searchFTSGetThreadsRestoreStatus: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSGetThreadsRestoreStatus(t);
		},
		searchFTSReportTabAlive: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSReportTabAlive(t);
		},
		searchFTSReportTabDestroy: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSReportTabDestroy(t);
		},
		searchFTSReportTabForeground: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSReportTabForeground(t);
		},
		searchFTSReportTabTaskComplete: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSReportTabTaskComplete(t);
		},
		searchFTSRequestRestoreTask: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchFTSRequestRestoreTask(t);
		},
		searchGetFTSNextTimestamp: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchGetFTSNextTimestamp(t);
		},
		searchGetFTSRestoreSessionId: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchGetFTSRestoreSessionId(t);
		},
		searchIndexUpdate: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchIndexUpdate(t);
		},
		searchSetFTSNextTimestamp: function(t) {
			return o("MAWFTSEBMessagesDataSync").searchSetFTSNextTimestamp(t);
		},
		sendBumpMsg: m.sendBumpMsg,
		sendChatStateFromComposer: function(t) {
			return o("MAWSendChatStateFromComposerApi").sendChatStateFromComposer(t);
		},
		sendEditMsg: m.sendEditMsg,
		sendGroupInviteMsg: m.sendGroupInviteMsg,
		sendMediaMsgV2: m.sendMediaMsg,
		sendMsg: m.sendTextMsg,
		sendNoteReplyMsg: m.sendNoteReplyMsg,
		sendPoll: function(t) {
			return r("FBLogger")("wmi").mustfix("sendPoll is deprecated"), Promise.resolve(o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "polls-not-supported"
			}));
		},
		sendPollUpdate: function(t) {
			return r("FBLogger")("wmi").mustfix("sendPollUpdate is deprecated"), Promise.resolve(o("WAResultOrError").makeError({
				isRetriable: !1,
				type: "polls-not-supported"
			}));
		},
		sendReactionMsg: m.sendReactionMsg,
		sendRevokeMsg: m.sendRevokeMsg,
		sendThreadDeletionAppData: function(t) {
			return o("MAWDeleteThread").deleteThreadImpl(t.chatJid);
		},
		sendUpdateFromUIPersistedDataService: function(t) {
			return o("MAWSendUpdateFromUIPersistedDataServiceApi").sendUpdateFromUIPersistedDataService(t);
		},
		sendXMAShareMsg: m.sendXMAShareMsg,
		setEncryptedBackupsState: function(t) {
			o("MAWEncryptedBackupsStateManager").setEncryptedBackupsState(t.newState);
		},
		setEphemeralSettingCache: function(t) {
			o("MAWEphemeralSettingsCache").setEphemeralSettingCache(t.jid, t.settings);
		},
		setEphemeralSettingsFromFrontend: function(t) {
			return o("MAWSetEphemeralSettingsFromFrontendApi").setEphemeralSettingsFromFrontend(t);
		},
		setEphemeralSettingsFromMI: function(t) {
			return o("MAWSetEphemeralSettingsOfPeerFromMIApi").setEphemeralSettingsFromMI(t);
		},
		setGroupMemberAddMode: function(t) {
			return o("MAWGroupSetMemberAddMode").setMemberAddModeImpl(t);
		},
		setGroupSubject: function(t) {
			return o("MAWSetGroupSubject").setGroupSubjectImpl(t);
		},
		startInstamadilloDYI: function() {
			return o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[maw_core_lla] Handler not implemented and should not be used outside Instamadillo"]))), Promise.resolve();
		},
		syncContactMMKsInWorker: function(t) {
			return o("EBMandrakeSyncContactMMK").syncContactMMKs([].concat(t.userFbIds));
		},
		syncMailboxKeysForContactsInWorker: function(t) {
			return o("EBSyncMailboxKeysForContacts").syncMailboxKeysForContacts([].concat(t.userFbIds));
		},
		updateBackupEntFbidForMedia: function() {
			return Promise.resolve();
		},
		updateDeviceChangeAlerts: function(t) {
			return o("MAWUpdateDeviceChangeAlertsApi").updateDeviceChangeAlerts(t.alert);
		},
		updateGroupInfoName: function(t) {
			return o("MAWUpdateGroupInfoNameApi").updateGroupInfoName(t);
		},
		updateLSThreadFromGroupInfo: function(t) {
			return o("MAWUpdateLSThreadFromGroupInfoApi").updateLSThreadFromGroupInfo(t.groupJid);
		},
		updateMediaDownloadStatusByObjectId: function(t) {
			return o("MAWUpdateMediaDownloadStatusByObjectIdApi").updateMediaDownloadStatusByObjectId(t.objectId, t.downloadStatus, t.details);
		},
		updateReceiverFetchInfo: function(t) {
			return o("MAWUpdateReceiverFetchInfoApi").updateReceiverFetchInfo(t);
		},
		waitForEBLSEbEnabled: function(t) {
			return r("MAWEBLSInWorkerSwitch").waitForEBEnabled();
		},
		writeAdminMessageForDualThreadCutover: function(t) {
			return o("MAWWriteAdminMessageForDualThreadCutoverApi").writeAdminMessageForDualThreadCutover(t);
		},
		writeAdminMessageForEphemeralSettingsChange: function(t) {
			return o("MAWWriteAdminMessageForEphemeralSettingsChange").writeAdminMessageForEphemeralSettingsChange(t);
		},
		writeAdminMessageForLimitSharing: function(t) {
			return o("MAWWriteAdminMessageForLimitSharingApi").writeAdminMessageForLimitSharing(t);
		},
		writeAdminMessageForPinMessage: function(t) {
			return o("MAWWriteAdminMessageForPinMessageApi").writeAdminMessageForPinMessage(t);
		},
		writeAdminMessageForThreadHotlikeCustomization: function(t) {
			return o("MAWWriteAdminMessageForThreadHotlikeCustomizationApi").writeAdminMessageForThreadHotlikeCustomization(t);
		},
		writeAdminMessageForThreadNicknameCustomization: function(t) {
			return o("MAWWriteAdminMessageForThreadNicknameCustomizationApi").writeAdminMessageForThreadNicknameCustomization(t);
		},
		writeAdminMessageForThreadPhotoCustomization: function(t) {
			return o("MAWWriteAdminMessageForThreadPhotoCustomizationApi").writeAdminMessageForThreadPhotoCustomization(t);
		},
		writeAdminMessageForThreadThemeCustomization: function(t) {
			return o("MAWWriteAdminMessageForThreadThemeCustomizationApi").writeAdminMessageForThreadThemeCustomization(t);
		},
		writeAdminMessageForUKOSA: function(t) {
			return o("MAWWriteAdminMessageForUKOSAApi").writeAdminMessageForUKOSA(t);
		},
		writeAdminMessageForUnpinMessage: function(t) {
			return o("MAWWriteAdminMessageForUnpinMessageApi").writeAdminMessageForUnpinMessage(t);
		}
	};
	l.bridgeHandlers = p;
}), 98);
