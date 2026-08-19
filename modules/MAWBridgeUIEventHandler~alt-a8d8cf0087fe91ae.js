__d("MAWBridgeUIEventHandler", [
	"EBLogger",
	"MAWAbPropsClient",
	"MAWBridgeAddMessageSearchResultHandler",
	"MAWBridgeCallRestoreNativeOpHandler",
	"MAWBridgeDeleteGroupInviteHandler",
	"MAWBridgeDeleteMessagesHandler",
	"MAWBridgeDeleteMessagesOfThreadHandler",
	"MAWBridgeDeleteReactionHandler",
	"MAWBridgeDropAllSecureThreadsHandler",
	"MAWBridgeEditMsgHistoryAddedHandler",
	"MAWBridgeEphemeralSettingsUpdatedForUIHandler",
	"MAWBridgeFulfillRestorePromisePayloadHandler",
	"MAWBridgeGroupInfoUpdatedHandler",
	"MAWBridgeGroupInviteLoadedHandler",
	"MAWBridgeGroupInviteUpdateHandler",
	"MAWBridgeHandleCOPDigest",
	"MAWBridgeMediaExpiredHandler",
	"MAWBridgeMsgUpdatedHandler",
	"MAWBridgeMsgsStartCountdownHandler",
	"MAWBridgeNewMediaHandler",
	"MAWBridgeNewMediaRangeHandler",
	"MAWBridgeNewMsgHandler",
	"MAWBridgeNewPollHandler",
	"MAWBridgeNewReceiverFetchInfoHandler",
	"MAWBridgeNewXMAHandler",
	"MAWBridgeNoteReplyStartCountdownHandler",
	"MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
	"MAWBridgeOccamadilloVerifyThreadExistsHandler",
	"MAWBridgeOneToOneMessageRequestLoadedHandler",
	"MAWBridgeParticipantRemovedHandler",
	"MAWBridgeParticipantsUpdatedHandler",
	"MAWBridgeRavenActionMsgForUIHandler",
	"MAWBridgeReactionUpsertHandler",
	"MAWBridgeReceivedChatStateHandler",
	"MAWBridgeReceivedReceiptHandler",
	"MAWBridgeRefreshContactHandler",
	"MAWBridgeRemoveMessageSearchResultHandler",
	"MAWBridgeResignAttachmentCDNUrlHandler",
	"MAWBridgeResnapshotInvalidateHandler",
	"MAWBridgeStartTraceHandler",
	"MAWBridgeStoryReplyStartCountdownHandler",
	"MAWBridgeSyncContacts",
	"MAWBridgeThreadHiddenV2Handler",
	"MAWBridgeThreadUpdatedHandler",
	"MAWBridgeTraceRecordCheckpointHandler",
	"MAWBridgeUIEventQueueQPLLogger",
	"MAWBridgeUnArchivedSelfDeviceChangeAlertsHandler",
	"MAWBridgeUpdateClientRestoreStatus",
	"MAWBridgeUpdateContactAsConnectedHandler",
	"MAWBridgeUpdateE2EEMetadataParticipantsHandler",
	"MAWBridgeUpdateThreadActivityHandler",
	"MAWBridgeUpdateTraceHandler",
	"MAWBridgeXMAShareExpiredHandler",
	"MAWBridgeXMAShareTombstonedHandler",
	"MAWLoggerUtils",
	"MAWMessageExpirationStorage",
	"MWFBLogger",
	"WAResultOrError",
	"WATimeUtils",
	"emptyFunction",
	"getErrorSafe",
	"isArmadillo",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MWFBLogger").MWLogger().tags(["MAWBridgeUIEvent"]);
	function d(t, n, r) {
		switch (r.tag) {
			case "NewMsg": return o("MAWBridgeNewMsgHandler").call(n, r.value);
			case "MsgsStartCountdown": return o("MAWBridgeMsgsStartCountdownHandler").call(n, r.value);
			case "StoryReplyStartCountdown": return o("MAWBridgeStoryReplyStartCountdownHandler").call(n, r.value);
			case "NoteReplyStartCountdown": return o("MAWBridgeNoteReplyStartCountdownHandler").call(n, r.value);
			case "MsgClearCountdown": return Promise.resolve(o("MAWMessageExpirationStorage").clearMessageFromExpiration(r.value));
			case "DropAllSecureThreads": return o("MAWBridgeDropAllSecureThreadsHandler").call(n);
			case "VerifyThreadExists": {
				var a = r.value;
				return o("MAWBridgeOccamadilloVerifyThreadExistsHandler").call(n, a);
			}
			case "CreateE2EEMetadataThreadV2": return o("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2").call(n, r.value);
			case "EditMsgHistoryAdded": return o("MAWBridgeEditMsgHistoryAddedHandler").call(t, n, r.value);
			case "MsgUpdated": return o("MAWBridgeMsgUpdatedHandler").call(n, r.value);
			case "NewMedia": return o("MAWBridgeNewMediaHandler").call(n, r.value);
			case "NewMediaRange": return o("MAWBridgeNewMediaRangeHandler").call(n, r.value);
			case "MediaExpired": return o("MAWBridgeMediaExpiredHandler").call(n, r.value);
			case "XMAShareExpired": return o("MAWBridgeXMAShareExpiredHandler").call(n, r.value);
			case "NewXMA": return o("MAWBridgeNewXMAHandler").call(n, r.value);
			case "XMAShareTombstoned": return o("MAWBridgeXMAShareTombstonedHandler").call(n, r.value);
			case "ParticipantRemoved": return o("MAWBridgeParticipantRemovedHandler").call(n, r.value);
			case "UpdateE2EEMetadataParticipants": return o("MAWBridgeUpdateE2EEMetadataParticipantsHandler").call(n, r.value);
			case "ReceivedReceipt": return o("MAWBridgeReceivedReceiptHandler").call(n, r.value);
			case "ThreadUpdated": return o("MAWBridgeThreadUpdatedHandler").call(n, r.value);
			case "GroupInfoUpdated": return o("MAWBridgeGroupInfoUpdatedHandler").call(n, r.value);
			case "UpdateThreadActivity": return o("MAWBridgeUpdateThreadActivityHandler").call(n, r.value);
			case "StartTrace": return o("MAWBridgeStartTraceHandler").call(n, r.value);
			case "UpdateTrace": return o("MAWBridgeUpdateTraceHandler").call(n, r.value);
			case "ThreadHiddenV2": return o("MAWBridgeThreadHiddenV2Handler").call(n, r.value);
			case "SyncContacts": return o("MAWBridgeSyncContacts").call(n, r.value);
			case "ReceivedChatState": return o("MAWBridgeReceivedChatStateHandler").call(n, r.value);
			case "ClockSkewUpdated": return Promise.resolve(o("WATimeUtils").setClockSkew(r.value));
			case "ABPropsUpdated": return c.warn("ABPropsUpdated has been deprecated. Please use the bridge with ABPropsUpdated"), Promise.resolve(o("MAWAbPropsClient").rewrite(r.value));
			case "COPDigestReceived": return o("MAWBridgeHandleCOPDigest").call(n, r.value);
			case "UpsertReaction": return o("MAWBridgeReactionUpsertHandler").call(n, r.value);
			case "DeleteReaction": return o("MAWBridgeDeleteReactionHandler").call(n, r.value);
			case "DeleteMessagesOfThread": return o("MAWBridgeDeleteMessagesOfThreadHandler").call(n, r.value);
			case "ResignAttachmentCDNUrl": return o("MAWBridgeResignAttachmentCDNUrlHandler").call(n, r.value);
			case "DeleteMessages": return o("MAWBridgeDeleteMessagesHandler").call(n, r.value);
			case "ResnapshotInvalidateThreads": return o("MAWBridgeResnapshotInvalidateHandler").call(t, n, r.value);
			case "RestoreMessageBatch": return o("EBLogger").EBLogger().tags(["labyrinth_dyi"]).WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Attempted to call the old DYI V1 flow"]))), Promise.resolve();
			case "OneToOneMessageRequestLoaded": return o("MAWBridgeOneToOneMessageRequestLoadedHandler").call(n, r.value);
			case "GroupInviteUpdate": return o("MAWBridgeGroupInviteUpdateHandler").call(n, r.value);
			case "UpdateDyiStatus": return o("EBLogger").EBLogger().tags(["labyrinth_dyi"]).WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Attempted to call the old DYI V1 flow"]))), Promise.resolve();
			case "DeleteGroupInvite": return o("MAWBridgeDeleteGroupInviteHandler").call(n, r.value);
			case "TraceRecordCheckpoint": return o("MAWBridgeTraceRecordCheckpointHandler").call(n, r.value);
			case "ParticipantsUpdated": return o("MAWBridgeParticipantsUpdatedHandler").call(n, r.value);
			case "StartTraceWithTraceId": return Promise.resolve();
			case "UpdateClientRestoreStatus": return o("MAWBridgeUpdateClientRestoreStatus").call(n, r.value);
			case "NewMsgs": return o("MAWBridgeNewMsgHandler").bulkCall(n, r.value.msgs);
			case "UnArchivedSelfDeviceChangeAlerts": return o("MAWBridgeUnArchivedSelfDeviceChangeAlertsHandler").call(n, r.value);
			case "EphemeralSettingsUpdatedForUI": return o("MAWBridgeEphemeralSettingsUpdatedForUIHandler").call(n, r.value);
			case "RavenActionUpdate": return o("MAWBridgeRavenActionMsgForUIHandler").call(n, r.value);
			case "GroupInviteLoaded": return o("MAWBridgeGroupInviteLoadedHandler").call(n, r.value);
			case "RemoveMessageSearchResult": return o("MAWBridgeRemoveMessageSearchResultHandler").call(n, r.value);
			case "AddMessageSearchResult": return o("MAWBridgeAddMessageSearchResultHandler").call(t, n, r.value);
			case "FulfillRestorePromise": return o("MAWBridgeFulfillRestorePromisePayloadHandler").call(r.value);
			case "UpdateContactAsConnected": return o("MAWBridgeUpdateContactAsConnectedHandler").call(n, r.value);
			case "RefreshContact": return o("MAWBridgeRefreshContactHandler").call(n, r.value);
			case "NewReceiverFetchInfo": return o("MAWBridgeNewReceiverFetchInfoHandler").call(n, r.value);
			case "RestoreNativeOp": return o("MAWBridgeCallRestoreNativeOpHandler").call(r.value);
			case "NewPoll": return o("MAWBridgeNewPollHandler").call(n, r.value);
			default: return Promise.resolve();
		}
	}
	function m(e, t) {
		if (!r("isArmadillo")()) {
			c.mustfix("User is neither part of armadillo QE and dual send QE but somehow loaded this handler");
			return;
		}
		if (!(t.length === 1 && t[0].tag === "TraceRecordCheckpoint")) {
			var n = {};
			n = t.reduce(function(e, t) {
				var n;
				return e[t.tag] = ((n = e[t.tag]) != null ? n : 0) + 1, e;
			}, n), c.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Handle UI Events: ", ""])), JSON.stringify(n));
		}
		r("promiseDone")(p(e, t), r("emptyFunction"), function(e) {
			c.catching(e).mustfix("[MAWBridgeUIEventHandler] Failed to handle UI events: %s", t.map(function(e) {
				return e.tag;
			}).join(", "));
		});
	}
	async function p(e, t) {
		var n = await e, a = o("MAWLoggerUtils").createInstanceKey(), l = t.map(function(e) {
			return e.tag;
		}), s = "";
		o("MAWBridgeUIEventQueueQPLLogger").start(a, l), o("MAWBridgeUIEventQueueQPLLogger").addAnnotations(a, { int: { queue_size: t.length } });
		var u;
		try {
			u = await n.runInTransaction(async function(e) {
				for (var a = 0; a < t.length; a++) {
					var i = t[a];
					try {
						await d(n, e, i);
					} catch (e) {
						return s = i.tag, o("WAResultOrError").makeError(r("getErrorSafe")(e));
					}
				}
				return o("WAResultOrError").makeResult(!0);
			}, "readwrite", "background", {
				events: t,
				type: "maw_ui_bridge"
			}, i.id + ":283");
		} catch (e) {
			u = o("WAResultOrError").makeError(r("getErrorSafe")(e));
		}
		u.success ? o("MAWBridgeUIEventQueueQPLLogger").endSuccess(a) : (o("MAWBridgeUIEventQueueQPLLogger").endFailure(a, s), c.catching(u.error).mustfix("MAWBridgeUIEventHandler] Did not commit UI events to DB, failed at %s, all events: %s", s, l.toString()));
	}
	async function _(e, t, n) {
		try {
			await d(e, t, n);
		} catch (e) {
			var o = r("getErrorSafe")(e);
			throw c.catching(o).mustfix("[handleShimEvent] Failed to handle UI event: %s", n.tag), e;
		}
	}
	l.handleEvents = m, l.handleShimEvent = _;
}), 98);
