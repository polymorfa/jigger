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
	"Promise",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"getErrorSafe",
	"isArmadillo",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags(["MAWBridgeUIEvent"]);
	function m(t, r, a) {
		switch (a.tag) {
			case "NewMsg": return o("MAWBridgeNewMsgHandler").call(r, a.value);
			case "MsgsStartCountdown": return o("MAWBridgeMsgsStartCountdownHandler").call(r, a.value);
			case "StoryReplyStartCountdown": return o("MAWBridgeStoryReplyStartCountdownHandler").call(r, a.value);
			case "NoteReplyStartCountdown": return o("MAWBridgeNoteReplyStartCountdownHandler").call(r, a.value);
			case "MsgClearCountdown": return (c || (c = n("Promise"))).resolve(o("MAWMessageExpirationStorage").clearMessageFromExpiration(a.value));
			case "DropAllSecureThreads": return o("MAWBridgeDropAllSecureThreadsHandler").call(r);
			case "VerifyThreadExists": {
				var i = a.value;
				return o("MAWBridgeOccamadilloVerifyThreadExistsHandler").call(r, i);
			}
			case "CreateE2EEMetadataThreadV2": return o("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2").call(r, a.value);
			case "EditMsgHistoryAdded": return o("MAWBridgeEditMsgHistoryAddedHandler").call(t, r, a.value);
			case "MsgUpdated": return o("MAWBridgeMsgUpdatedHandler").call(r, a.value);
			case "NewMedia": return o("MAWBridgeNewMediaHandler").call(r, a.value);
			case "NewMediaRange": return o("MAWBridgeNewMediaRangeHandler").call(r, a.value);
			case "MediaExpired": return o("MAWBridgeMediaExpiredHandler").call(r, a.value);
			case "XMAShareExpired": return o("MAWBridgeXMAShareExpiredHandler").call(r, a.value);
			case "NewXMA": return o("MAWBridgeNewXMAHandler").call(r, a.value);
			case "XMAShareTombstoned": return o("MAWBridgeXMAShareTombstonedHandler").call(r, a.value);
			case "ParticipantRemoved": return o("MAWBridgeParticipantRemovedHandler").call(r, a.value);
			case "UpdateE2EEMetadataParticipants": return o("MAWBridgeUpdateE2EEMetadataParticipantsHandler").call(r, a.value);
			case "ReceivedReceipt": return o("MAWBridgeReceivedReceiptHandler").call(r, a.value);
			case "ThreadUpdated": return o("MAWBridgeThreadUpdatedHandler").call(r, a.value);
			case "GroupInfoUpdated": return o("MAWBridgeGroupInfoUpdatedHandler").call(r, a.value);
			case "UpdateThreadActivity": return o("MAWBridgeUpdateThreadActivityHandler").call(r, a.value);
			case "StartTrace": return o("MAWBridgeStartTraceHandler").call(r, a.value);
			case "UpdateTrace": return o("MAWBridgeUpdateTraceHandler").call(r, a.value);
			case "ThreadHiddenV2": return o("MAWBridgeThreadHiddenV2Handler").call(r, a.value);
			case "SyncContacts": return o("MAWBridgeSyncContacts").call(r, a.value);
			case "ReceivedChatState": return o("MAWBridgeReceivedChatStateHandler").call(r, a.value);
			case "ClockSkewUpdated": return (c || (c = n("Promise"))).resolve(o("WATimeUtils").setClockSkew(a.value));
			case "ABPropsUpdated": return d.warn("ABPropsUpdated has been deprecated. Please use the bridge with ABPropsUpdated"), (c || (c = n("Promise"))).resolve(o("MAWAbPropsClient").rewrite(a.value));
			case "COPDigestReceived": return o("MAWBridgeHandleCOPDigest").call(r, a.value);
			case "UpsertReaction": return o("MAWBridgeReactionUpsertHandler").call(r, a.value);
			case "DeleteReaction": return o("MAWBridgeDeleteReactionHandler").call(r, a.value);
			case "DeleteMessagesOfThread": return o("MAWBridgeDeleteMessagesOfThreadHandler").call(r, a.value);
			case "ResignAttachmentCDNUrl": return o("MAWBridgeResignAttachmentCDNUrlHandler").call(r, a.value);
			case "DeleteMessages": return o("MAWBridgeDeleteMessagesHandler").call(r, a.value);
			case "ResnapshotInvalidateThreads": return o("MAWBridgeResnapshotInvalidateHandler").call(t, r, a.value);
			case "RestoreMessageBatch": return o("EBLogger").EBLogger().tags(["labyrinth_dyi"]).WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Attempted to call the old DYI V1 flow"]))), (c || (c = n("Promise"))).resolve();
			case "OneToOneMessageRequestLoaded": return o("MAWBridgeOneToOneMessageRequestLoadedHandler").call(r, a.value);
			case "GroupInviteUpdate": return o("MAWBridgeGroupInviteUpdateHandler").call(r, a.value);
			case "UpdateDyiStatus": return o("EBLogger").EBLogger().tags(["labyrinth_dyi"]).WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Attempted to call the old DYI V1 flow"]))), (c || (c = n("Promise"))).resolve();
			case "DeleteGroupInvite": return o("MAWBridgeDeleteGroupInviteHandler").call(r, a.value);
			case "TraceRecordCheckpoint": return o("MAWBridgeTraceRecordCheckpointHandler").call(r, a.value);
			case "ParticipantsUpdated": return o("MAWBridgeParticipantsUpdatedHandler").call(r, a.value);
			case "StartTraceWithTraceId": return (c || (c = n("Promise"))).resolve();
			case "UpdateClientRestoreStatus": return o("MAWBridgeUpdateClientRestoreStatus").call(r, a.value);
			case "NewMsgs": return o("MAWBridgeNewMsgHandler").bulkCall(r, a.value.msgs);
			case "UnArchivedSelfDeviceChangeAlerts": return o("MAWBridgeUnArchivedSelfDeviceChangeAlertsHandler").call(r, a.value);
			case "EphemeralSettingsUpdatedForUI": return o("MAWBridgeEphemeralSettingsUpdatedForUIHandler").call(r, a.value);
			case "RavenActionUpdate": return o("MAWBridgeRavenActionMsgForUIHandler").call(r, a.value);
			case "GroupInviteLoaded": return o("MAWBridgeGroupInviteLoadedHandler").call(r, a.value);
			case "RemoveMessageSearchResult": return o("MAWBridgeRemoveMessageSearchResultHandler").call(r, a.value);
			case "AddMessageSearchResult": return o("MAWBridgeAddMessageSearchResultHandler").call(t, r, a.value);
			case "FulfillRestorePromise": return o("MAWBridgeFulfillRestorePromisePayloadHandler").call(a.value);
			case "UpdateContactAsConnected": return o("MAWBridgeUpdateContactAsConnectedHandler").call(r, a.value);
			case "RefreshContact": return o("MAWBridgeRefreshContactHandler").call(r, a.value);
			case "NewReceiverFetchInfo": return o("MAWBridgeNewReceiverFetchInfoHandler").call(r, a.value);
			case "RestoreNativeOp": return o("MAWBridgeCallRestoreNativeOpHandler").call(a.value);
			case "NewPoll": return o("MAWBridgeNewPollHandler").call(r, a.value);
			default: return (c || (c = n("Promise"))).resolve();
		}
	}
	function p(e, t) {
		if (!r("isArmadillo")()) {
			d.mustfix("User is neither part of armadillo QE and dual send QE but somehow loaded this handler");
			return;
		}
		if (!(t.length === 1 && t[0].tag === "TraceRecordCheckpoint")) {
			var n = {};
			n = t.reduce(function(e, t) {
				var n;
				return e[t.tag] = ((n = e[t.tag]) != null ? n : 0) + 1, e;
			}, n), d.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Handle UI Events: ", ""])), JSON.stringify(n));
		}
		r("promiseDone")(_(e, t), r("emptyFunction"), function(e) {
			d.catching(e).mustfix("[MAWBridgeUIEventHandler] Failed to handle UI events: %s", t.map(function(e) {
				return e.tag;
			}).join(", "));
		});
	}
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var a = yield e, l = o("MAWLoggerUtils").createInstanceKey(), s = t.map(function(e) {
				return e.tag;
			}), u = "";
			o("MAWBridgeUIEventQueueQPLLogger").start(l, s), o("MAWBridgeUIEventQueueQPLLogger").addAnnotations(l, { int: { queue_size: t.length } });
			var c;
			try {
				c = yield a.runInTransaction((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							try {
								yield m(a, e, i);
							} catch (e) {
								return u = i.tag, o("WAResultOrError").makeError(r("getErrorSafe")(e));
							}
						}
						return o("WAResultOrError").makeResult(!0);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})(), "readwrite", "background", {
					events: t,
					type: "maw_ui_bridge"
				}, i.id + ":283");
			} catch (e) {
				c = o("WAResultOrError").makeError(r("getErrorSafe")(e));
			}
			c.success ? o("MAWBridgeUIEventQueueQPLLogger").endSuccess(l) : (o("MAWBridgeUIEventQueueQPLLogger").endFailure(l, u), d.catching(c.error).mustfix("MAWBridgeUIEventHandler] Did not commit UI events to DB, failed at %s, all events: %s", u, s.toString()));
		}), f.apply(this, arguments);
	}
	function g(e, t, n) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			try {
				yield m(e, t, n);
			} catch (e) {
				var o = r("getErrorSafe")(e);
				throw d.catching(o).mustfix("[handleShimEvent] Failed to handle UI event: %s", n.tag), e;
			}
		}), h.apply(this, arguments);
	}
	l.handleEvents = p, l.handleShimEvent = g;
}), 98);
