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
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f;
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n, a = yield o("MawMpsThreadMsgInfo").bulkGetThreadMsgInfo(e.map(function(e) {
				var t = e.msgData;
				return t.id.chat;
			}));
			return o("MAWIndexedDb").makeMsgrTransactor({
				chunk: (n = o("MAWTransactionMode")).READONLY,
				deletedMessages: n.READWRITE,
				deviceChangeAlerts: n.READWRITE,
				editMsgHistory: n.READWRITE,
				ephemeralSettings: n.READWRITE,
				ftsBackloggedMessages: n.READWRITE,
				ftsPurgeBacklog: n.READWRITE,
				groupInfo: n.READWRITE,
				groupInvites: n.READWRITE,
				media: n.READWRITE,
				mediaBackup: n.READWRITE,
				messages: n.READWRITE,
				participants: n.READWRITE,
				pendingReceipts: n.READWRITE,
				pendingStanzas: n.READWRITE,
				poll: n.READWRITE,
				reactions: n.READWRITE,
				receiverFetchInfo: n.READWRITE,
				threads: n.READWRITE,
				unrenderedMessages: n.READWRITE,
				xma: n.READWRITE
			}, "bulkHandleIncomingMsgs", function(n) {
				return function() {
					var i = new (o("WAMsgMap")).MsgMap();
					o("MAWODSProxy").odsBumpEntityKey({
						amount: e.length,
						entity: o("WAOdsEnums").Entity.TOTAL_INCOMING_MESSAGE,
						key: "msgs"
					}), o("MAWDexieTable").setDexiePSDItem("offlineQueueSize", e.length);
					var l = new Set(e.map(function(e) {
						var t = e.msgData;
						return t.id.chat;
					})), s = o("MAWPreprocessMsgs").classifyIncomingMsgs(e), u = s.editActionMsgs, c = s.reactionMsgs, d = function(t, n) {
						var e = i.get(t);
						n.success ? e == null ? r("MAWHIMLogger").MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["ERROR!!! At this point we must have fields in the map, ", ""])), String(n)) : e.success ? i.set(t, o("WAResultOrError").makeResult(babelHelpers.extends({}, e.value, n.value))) : r("MAWHIMLogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Previous message processing action failed so subsequent one can't succeed"]))) : i.set(t, n);
					}, g = function(t, n) {
						i.set(t, o("WAResultOrError").makeResult({
							protocolMsgId: t,
							unknownGroup: n === "missing"
						}));
					}, h = function(i) {
						var a = i.threadCreationResult, l = i.threads;
						return o("MAWDexieTable").dexieAll(e.map(function(e) {
							var i, s = l.get(e.msgData.id.chat), u = (i = a.get(e.msgData.id.chat)) != null ? i : "missing";
							if (s == null) {
								r("MAWHIMLogger").MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Cannot create thread for message. Reason: ", "."])), u), r("MAWHIMLogger").DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
									"Cannot create thread for message. Reason: ",
									". StanzaID ",
									""
								])), u, e.msgData.id.externalId);
								return;
							}
							return g(e.msgData.id, u), o("MAWPreprocessMsgs").getMessageDataByType(n, e, s, t);
						}).filter(Boolean)).catch(function(e) {
							throw e.message = "[getAllMessagesProcessingData] " + e.message, e;
						});
					}, b = t !== r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE, R = function(t) {
						var e = v(t), r = o("MAWDexieTable").dexieResolve();
						return e.forEach(function(e) {
							r = r.then(function() {
								return o("MAWHandleIncomingMsgApi").handleIncomingMsg(n, e, b);
							}).then(function(t) {
								d(e.id, t), C(e.id, e.ts);
							});
						}), r.catch(function(e) {
							throw e.message = "[writeIncomingMsgs] " + e.message, e;
						}), r;
					}, L = function() {
						return u.length === 0 ? o("MAWDexieTable").dexieResolve() : o("MAWBulkEditMsgsTxns").prepareDataForMessageEdit(n, u).then(function(e) {
							return o("MAWBulkEditMsgsTxns").bulkEditMsgs(n, u, e);
						});
					};
					return y(n, l, a).then(function(e) {
						return o("MAWDexieTable").dexieAll([h(e), o("MAWBulkWriteReactionsTxns").prepareReactionsData(n, c)]).then(function(e) {
							var t = e[0], r = e[1];
							return o("MAWBulkWriteReactionsTxns").bulkWriteReactions(n, r).then(function() {
								return R(t);
							}).then(function() {
								return L();
							}).then(function() {
								return o("MAWThreadFetchAndEmitTxns").emitThreadContents(n, l);
							}).then(function() {
								return S(n, i);
							}).then(function() {
								return { msgResults: i };
							});
						});
					});
				};
			})();
		}), h.apply(this, arguments);
	}
	function y(e, t, n) {
		var r = Array.from(t);
		return o("MAWDbThreadTxns").getThreads(e, r).then(function(t) {
			return o("MAWOfflineThreadTxns").createAllThreadsForOfflineMsgs(e, r, t, n);
		});
	}
	function C(e, t) {
		var n, r = e.chat.toString();
		o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.updateChatState((n = {}, n[r] = t, n)), o("MAWSharedOfflineResumeUINotifier").offlineResumeUINotifier.addMAWEntity(1);
	}
	var b = r("MAWHIMLogger").tags(["MergeActions"]);
	function v(t) {
		b.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Handling ", " messages"])), t.length);
		var n = new (o("WAMsgMap")).MsgMap();
		for (var r of t) {
			b.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"Handling message with StanzaID ",
				", action ",
				" and type ",
				""
			])), r.id.externalId, r.action, r.type), r.receiveFlow.addPoint("him_merge_actions");
			var a = n.get(r.id);
			if (a == null) {
				n.set(r.id, r);
				continue;
			}
			if (a.action === r.action && a.type === r.type) {
				r.receiveFlow.addAnnotations({ bool: { merge_actions_duplicate: !0 } });
				continue;
			}
			switch (r.action) {
				case o("MAWMsgActionType").MSG_ACTION.NO_ACTION: continue;
				case o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT:
				case o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED: {
					if (a.action === o("MAWMsgActionType").MSG_ACTION.REVOKE || a.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME) {
						b.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Should never have 'update ciphertext' and 'delete' in same OQ batch"])));
						continue;
					}
					n.set(r.id, r);
					continue;
				}
				case o("MAWMsgActionType").MSG_ACTION.WRITE:
				case o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED: {
					if (a.action === o("MAWMsgActionType").MSG_ACTION.REVOKE || a.action === o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME) {
						b.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Should never have 'write' and 'delete' in same OQ batch"])));
						continue;
					}
					switch (r.type) {
						case o("MAWMsgType").MSG_TYPE.UNAVAILABLE: break;
						case o("MAWMsgType").MSG_TYPE.CIPHERTEXT: {
							a.type === o("MAWMsgType").MSG_TYPE.UNAVAILABLE && n.set(r.id, r);
							break;
						}
						default: a.type !== o("MAWMsgType").MSG_TYPE.CIPHERTEXT && b.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose([
							"Unexpected overwrite on WRITE action. Current type: ",
							", next type: ",
							""
						])), a.type, r.type), n.set(r.id, r);
					}
					break;
				}
				case o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME:
				case o("MAWMsgActionType").MSG_ACTION.REVOKE: {
					a.action !== o("MAWMsgActionType").MSG_ACTION.REVOKE && n.set(r.id, r);
					break;
				}
			}
		}
		var i = [];
		for (var l of t) {
			var m, p, _ = n.get(l.id);
			l.receiveFlow.addAnnotations({ string: {
				final_action: (m = _ == null ? void 0 : _.action) != null ? m : "undefined",
				final_msg_type: (p = _ == null ? void 0 : _.type) != null ? p : "undefined",
				has_replaced_action: (l !== _).toString(),
				initial_action: l.action,
				initial_msg_type: l.type
			} }), !(_ == null || _.action === o("MAWMsgActionType").MSG_ACTION.NO_ACTION) && (i.push(_), n.delete(l.id));
		}
		return i;
	}
	function S(e, t) {
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
