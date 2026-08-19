__d("MAWDbDumpMetadata", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = function(t) {
		return { columns: t.reduce(function(e, t) {
			var n;
			return babelHelpers.extends({}, e, (n = {}, n[t] = { not_redacted_for_db_upload: !0 }, n));
		}, {}) };
	}, l = e([
		"ack",
		"appDataId",
		"externalId",
		"recipientDevices",
		"sendPartial",
		"ts"
	]), s = e(["key", "value"]), u = e(["version"]), c = e([
		"chunkId",
		"hashedPlaintextHash",
		"mimetype"
	]), d = e([
		"editExternalId",
		"editTs",
		"originalMsgExternalId",
		"threadJid"
	]), m = e(["userJid", "ephemeralSetting"]), p = e([
		"chat",
		"externalId",
		"reason",
		"rowId"
	]), _ = e([
		"action",
		"deviceChangeAlertsId",
		"deviceJid",
		"isArchived",
		"loggedOut",
		"model",
		"platform",
		"ts"
	]), f = e([
		"batchId",
		"isThread",
		"numMessages",
		"oldestTs",
		"threadId"
	]), g = e(["id"]), h = e([
		"groupJid",
		"creationTs",
		"memberAddMode",
		"msgExpiration",
		"nameTs",
		"participantVersion"
	]), y = e([
		"inviterJid",
		"invitedParticipantId",
		"inviteExpirationTs"
	]), C = e(["isQRScanned", "rowId"]), b = e([]), v = e([
		"fbid",
		"hashedPlaintextHash",
		"mediaId",
		"mediaType",
		"msgIds",
		"objectId",
		"size",
		"ts"
	]), S = e([
		"fbid",
		"mediaBackupId",
		"mediaId",
		"msgId",
		"objectId"
	]), R = e([
		"altIndex",
		"externalId",
		"msgId",
		"rowId",
		"sortOrderMs",
		"threadJid",
		"ack",
		"ephemeralCounterStarted",
		"ephemeralMsgDisappeared",
		"ephemeralSetting",
		"forwardingScore",
		"groupId",
		"groupIndex",
		"groupSize",
		"isExpiredXmaMsg",
		"isForwarded",
		"mediaId",
		"messageDeleteTs",
		"messageExpirationTs",
		"originalTs",
		"quoteExternalId",
		"ravenEphemeralType",
		"reportingMeta",
		"resendCount",
		"revokedExternalId",
		"serverTs",
		"specialTextSize",
		"ts",
		"type",
		"unsendMsgContentDeleteTs",
		"xmaMessageType",
		"hdType"
	]), L = e([
		"id",
		"threadJid",
		"userJid",
		"addressable",
		"deliveredWatermarkTs",
		"lastReadActionTs",
		"lastReadWatermarkTs",
		"type"
	]), E = e([
		"author",
		"deliveryReceipts",
		"externalId",
		"id",
		"readReceipts",
		"thread"
	]), k = e([
		"externalIdWithType",
		"deleteTs",
		"rowId"
	]), I = e([
		"groupJid",
		"hasSenderKey",
		"rotateSenderKey",
		"senderKeyId",
		"senderKeyTs"
	]), T = e([
		"ack",
		"externalId",
		"groupingKey",
		"reactionId",
		"reactToExternalId",
		"reactToMsgId",
		"rowId",
		"threadJid",
		"ts"
	]), D = e([
		"msgId",
		"permittedIdentitiesPerDevice",
		"recipientDevices",
		"retryCountsPerDevice"
	]), x = e([
		"staleQueueId",
		"exception",
		"dbVersion"
	]), $ = e(["scheduledTime", "taskName"]), P = e([
		"authoritativeThreadKey",
		"chatId",
		"deduplicationKey",
		"jid",
		"threadOrder",
		"archived",
		"cannotReplyReason",
		"folder",
		"isMigratedLocally",
		"lastReadMsg",
		"lastReadMsgReceiptSent",
		"lastReadMsgTs",
		"newestMsg",
		"newestMsgTs",
		"oldestMsg",
		"optimisticThreadKey",
		"snippetMsg",
		"snippetMsgTs"
	]), N = e([
		"externalId",
		"msgId",
		"rowId",
		"sortOrderMs",
		"threadJid",
		"ack",
		"ephemeralSetting",
		"mediaId",
		"reportingMeta",
		"resendCount",
		"ts",
		"type",
		"xmaMessageType"
	]), M = e([
		"externalId",
		"associatedMessageId",
		"faviconMediaId",
		"headerMediaId",
		"targetExpiringAtSec",
		"defaultPreviewMediaId",
		"isTombstoned",
		"maxSubtitleNumOfLines",
		"maxTitleNumOfLines",
		"msgId",
		"previewMediaIds",
		"targetId",
		"targetType",
		"threadJid",
		"xmaId",
		"xmaLayoutType"
	]), w = {
		appData: l,
		appMeta: s,
		browserEncryptionMetaV2: u,
		chunk: c,
		deletedMessages: p,
		deviceChangeAlerts: _,
		dyiBatch: f,
		editMsgHistory: d,
		ephemeralSettings: m,
		existingUsers: g,
		groupInfo: h,
		groupInvites: y,
		historySyncQRCodeData: C,
		historySyncQRCodeSecretKey: b,
		media: v,
		mediaBackup: S,
		messages: R,
		participants: L,
		pendingReceipts: E,
		pendingStanzas: k,
		personalSenderKeyStatuses: I,
		reactions: T,
		receipts: D,
		staleQueue: x,
		tasks: $,
		threads: P,
		unrenderedMessages: N,
		xma: M
	};
	i.makeMetadataObject = e, i.MAWDbDumpMetadata = w;
}), 66);
