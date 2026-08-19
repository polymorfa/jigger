__d("MAWBulkHandleIncomingMsgApi", [
	"LSMEBTaskCreationSource",
	"MAWBulkEditMsgsTxns",
	"MAWBulkWriteReactionsTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWHIMLogger",
	"MAWHandleIncomingMsgApi",
	"MAWIndexedDb",
	"MAWLinkReactionsToMsgsTxns",
	"MAWMsgActionType",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWOfflineThreadTxns",
	"MAWPreprocessMsgs",
	"MAWSharedOfflineResumeUINotifier",
	"MAWThreadFetchAndEmitTxns",
	"MAWTransactionMode",
	"MAWUseProtocolMsgIdForMsgId",
	"MawMpsThreadMsgInfo",
	"WAMsgMap",
	"WAOdsEnums",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f;
	async function g(t, n) {
		var a, i = await o("MawMpsThreadMsgInfo").bulkGetThreadMsgInfo(t.map(function(e) {
			var t = e.msgData;
			return t.id.chat;
		}));
		return o("MAWIndexedDb").makeMsgrTransactor({
			chunk: (a = o("MAWTransactionMode")).READONLY,
			deletedMessages: a.READWRITE,
			deviceChangeAlerts: a.READWRITE,
			editMsgHistory: a.READWRITE,
			ephemeralSettings: a.READWRITE,
			ftsBackloggedMessages: a.READWRITE,
			ftsPurgeBacklog: a.READWRITE,
			groupInfo: a.READWRITE,
			groupInvites: a.READWRITE,
			media: a.READWRITE,
			mediaBackup: a.READWRITE,
			messages: a.READWRITE,
			participants: a.READWRITE,
			pendingReceipts: a.READWRITE,
			pendingStanzas: a.READWRITE,
			poll: a.READWRITE,
			reactions: a.READWRITE,
			receiverFetchInfo: a.READWRITE,
			threads: a.READWRITE,
			unrenderedMessages: a.READWRITE,
			xma: a.READWRITE
		}, "bulkHandleIncomingMsgs", function(a) {
			return function() {
				var l = new (o("WAMsgMap")).MsgMap();
				o("MAWODSProxy").odsBumpEntityKey({
					amount: t.length,
					entity: o("WAOdsEnums").Entity.TOTAL_INCOMING_MESSAGE,
					key: "msgs"
				}), o("MAWDexieTable").setDexiePSDItem("offlineQueueSize", t.length);
				var d = new Set(t.map(function(e) {
					var t = e.msgData;
					return t.id.chat;
				})), m = o("MAWPreprocessMsgs").classifyIncomingMsgs(t), p = m.editActionMsgs, _ = m.reactionMsgs, f = function(n, a) {
					var t = l.get(n);
					a.success ? t == null ? r("MAWHIMLogger").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ERROR!!! At this point we must have fields in the map, ", ""])), String(a)) : t.success ? l.set(n, o("WAResultOrError").makeResult(babelHelpers.extends({}, t.value, a.value))) : r("MAWHIMLogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Previous message processing action failed so subsequent one can't succeed"]))) : l.set(n, a);
				}, g = function(t, n) {
					l.set(t, o("WAResultOrError").makeResult({
						protocolMsgId: t,
						unknownGroup: n === "missing"
					}));
				}, C = function(i) {
					var e = i.threadCreationResult, l = i.threads;
					return o("MAWDexieTable").dexieAll(t.map(function(t) {
						var i, s = l.get(t.msgData.id.chat), d = (i = e.get(t.msgData.id.chat)) != null ? i : "missing";
						if (s == null) {
							r("MAWHIMLogger").MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Cannot create thread for message. Reason: ", "."])), d), r("MAWHIMLogger").DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
								"Cannot create thread for message. Reason: ",
								". StanzaID ",
								""
							])), d, t.msgData.id.externalId);
							return;
						}
						return g(t.msgData.id, d), o("MAWPreprocessMsgs").getMessageDataByType(a, t, s, n);
					}).filter(Boolean)).catch(function(e) {
						throw e.message = "[getAllMessagesProcessingData] " + e.message, e;
					});
				}, S = n !== r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE, R = function(t) {
					var e = b(t), n = o("MAWDexieTable").dexieResolve();
					return e.forEach(function(e) {
						n = n.then(function() {
							return o("MAWHandleIncomingMsgApi").handleIncomingMsg(a, e, S);
						}).then(function(t) {
							f(e.id, t), y(e.id, e.ts);
						});
					}), n.catch(function(e) {
						throw e.message = "[writeIncomingMsgs] " + e.message, e;
					}), n;
				}, L = function() {
					return p.length === 0 ? o("MAWDexieTable").dexieResolve() : o("MAWBulkEditMsgsTxns").prepareDataForMessageEdit(a, p).then(function(e) {
						return o("MAWBulkEditMsgsTxns").bulkEditMsgs(a, p, e);
					});
				};
				return h(a, d, i).then(function(e) {
					return o("MAWDexieTable").dexieAll([C(e), o("MAWBulkWriteReactionsTxns").prepareReactionsData(a, _)]).then(function(e) {
						var t = e[0], n = e[1];
						return o("MAWBulkWriteReactionsTxns").bulkWriteReactions(a, n).then(function() {
							return R(t);
						}).then(function() {
							return L();
						}).then(function() {
							return o("MAWThreadFetchAndEmitTxns").emitThreadContents(a, d);
						}).then(function() {
							return v(a, l);
						}).then(function() {
							return { msgResults: l };
						});
					});
				});
			};
		})();
	}
	function h(e, t, n) {
		var r = Array.from(t);
		return o("MAWDbThreadTxns").getThreads(e, r).then(function(t) {
			return o("MAWOfflineThreadTxns").createAllThreadsForOfflineMsgs(e, r, t, n);
		});
	}
	function y(e, t) {
		var n, r = e.chat.toString();
		o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.updateChatState((n = {}, n[r] = t, n)), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.addMAWEntity(1);
	}
	var C = r("MAWHIMLogger").tags(["MergeActions"]);
	function b(e) {
		C.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Handling ", " messages"])), e.length);
		var t = new (o("WAMsgMap")).MsgMap();
		for (var n of e) {
			C.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"Handling message with StanzaID ",
				", action ",
				" and type ",
				""
			])), n.id.externalId, n.action, n.type), n.receiveFlow.addPoint("him_merge_actions");
			var r = t.get(n.id);
			if (r == null) {
				t.set(n.id, n);
				continue;
			}
			if (r.action === n.action && r.type === n.type) {
				n.receiveFlow.addAnnotations({ bool: { merge_actions_duplicate: !0 } });
				continue;
			}
			switch (n.action) {
				case o("MAWMsgActionType").MSG_ACTION.NO_ACTION: continue;
				case o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT:
				case o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED: {
					if (r.action === o("MAWMsgActionType").MSG_ACTION.REVOKE || r.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME) {
						C.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Should never have 'update ciphertext' and 'delete' in same OQ batch"])));
						continue;
					}
					t.set(n.id, n);
					continue;
				}
				case o("MAWMsgActionType").MSG_ACTION.WRITE:
				case o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED: {
					if (r.action === o("MAWMsgActionType").MSG_ACTION.REVOKE || r.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME) {
						C.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Should never have 'write' and 'delete' in same OQ batch"])));
						continue;
					}
					switch (n.type) {
						case o("MAWMsgType").MSG_TYPE.UNAVAILABLE: break;
						case o("MAWMsgType").MSG_TYPE.CIPHERTEXT: {
							r.type === o("MAWMsgType").MSG_TYPE.UNAVAILABLE && t.set(n.id, n);
							break;
						}
						default: r.type !== o("MAWMsgType").MSG_TYPE.CIPHERTEXT && C.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose([
							"Unexpected overwrite on WRITE action. Current type: ",
							", next type: ",
							""
						])), r.type, n.type), t.set(n.id, n);
					}
					break;
				}
				case o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME:
				case o("MAWMsgActionType").MSG_ACTION.REVOKE: {
					r.action !== o("MAWMsgActionType").MSG_ACTION.REVOKE && t.set(n.id, n);
					break;
				}
			}
		}
		var a = [];
		for (var i of e) {
			var l, s, u = t.get(i.id);
			i.receiveFlow.addAnnotations({ string: {
				final_action: (l = u == null ? void 0 : u.action) != null ? l : "undefined",
				final_msg_type: (s = u == null ? void 0 : u.type) != null ? s : "undefined",
				has_replaced_action: (i !== u).toString(),
				initial_action: i.action,
				initial_msg_type: i.type
			} }), !(u == null || u.action === o("MAWMsgActionType").MSG_ACTION.NO_ACTION) && (a.push(u), t.delete(i.id));
		}
		return a;
	}
	function v(e, t) {
		if (o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId()) return o("MAWDexieTable").dexieResolve();
		var n = new Set();
		return t.values().forEach(function(e) {
			if (e.success) {
				var t = e.value, r = t.protocolMsgId, o = t.reactToExternalId;
				o != null ? n.add(o) : r != null && n.add(r.externalId);
			}
		}), o("MAWLinkReactionsToMsgsTxns").getReactionLinkUpdatesForExternalIds(e, Array.from(n)).then(function(t) {
			return o("MAWLinkReactionsToMsgsTxns").updateReactionLinks(e, t);
		});
	}
	l.bulkHandleIncomingMsgs = g;
}), 98);
