__d("MAWPreprocessMsgs", [
	"LSMEBTaskCreationSource",
	"MAWBuildIncomingMsgs",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWHIMLogger",
	"MAWMediaGalleryEBTaggingUtils",
	"MAWMediaManagementTxns",
	"MAWMsgActionType",
	"MAWMsgType",
	"MAWWriteMsgTxns",
	"MAWWriteXMAMessageTxns",
	"WAGlobals",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = r("MAWHIMLogger").tags(["MAWPreprocessMsgs"]);
	function p(t) {
		var n = [], r = [];
		return t.forEach(function(t) {
			var o = t.msgData, a = t.unstoredContent;
			switch (o.type) {
				case "IncomingMsg": {
					if (a == null) {
						m.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["No unstored content for incoming message: SHOULD NEVER HAPPEN"])));
						return;
					}
					var i = a.unstoredDbEditActionMsg, l = a.unstoredDbReaction;
					if (l != null) {
						var s = {
							chatJid: o.id.chat,
							unstoredReaction: l
						};
						n.push(s);
					}
					i != null && r.push({
						chatJid: o.id.chat,
						msg: i
					});
					break;
				}
				case "IncomingCiphertextMsg":
				default: break;
			}
		}), {
			editActionMsgs: r,
			reactionMsgs: n
		};
	}
	function _(e, t, n, r) {
		return t.receiveFlow.addPoint("him_get_preprocessing_data_start"), f(e, t, n, r).then(function(e) {
			var n;
			return t.receiveFlow.addPoint("him_get_preprocessing_data_end", { string: {
				action: e.action,
				type: (n = e.type) != null ? n : ""
			} }), e;
		});
	}
	function f(e, t, n, a) {
		var i = t.msgData, l = t.receiveFlow, p = t.stanzaSource, _ = t.unstoredContent, f = i.folder, h = i.id, y = i.ts, C = {
			id: h,
			receiveFlow: l,
			stanzaSource: p,
			thread: n,
			ts: y
		}, b = o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
			action: o("MAWMsgActionType").MSG_ACTION.NO_ACTION,
			msg: null,
			type: null
		}));
		switch (i.type) {
			case "IncomingMsg": {
				if (_ == null) return b;
				var v = _.unstoredDbGroupPollCreateInfo, S = _.unstoredDbGroupPollUpdateInfo, R = _.unstoredDbMsg, L = _.unstoredDbRavenActionMsg, E = _.unstoredDbReaction, k = _.unstoredDbReceiverFetchInfo, I = _.unstoredIncomingDbGroupInvite;
				if (L != null) return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
					action: o("MAWMsgActionType").MSG_ACTION.WRITE,
					msg: L,
					type: o("MAWMsgType").MSG_TYPE.RAVEN_ACTION
				}));
				if (E != null) return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
					action: o("MAWMsgActionType").MSG_ACTION.WRITE,
					msg: E,
					type: o("MAWMsgType").MSG_TYPE.REACTION
				}));
				if (I != null) return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
					action: o("MAWMsgActionType").MSG_ACTION.WRITE,
					folder: f,
					msg: I,
					type: o("MAWMsgType").MSG_TYPE.GROUP_INVITE
				}));
				if (R == null) return b;
				if (R.type === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN) {
					var T = i.msg;
					return T.version === "v3" && T.type === "ephemeral" ? o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
						action: o("MAWMsgActionType").MSG_ACTION.WRITE,
						msg: T,
						type: R.type
					})) : (m.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Unexpected msg type when writing ephemeral setting message. Should not happen"]))), b);
				} else {
					if (R.type === o("MAWMsgType").MSG_TYPE.TEXT || R.type === o("MAWMsgType").MSG_TYPE.FUTUREPROOF || R.type === o("MAWMsgType").MSG_TYPE.ADMIN) return o("MAWWriteMsgTxns").prepareTextMsgWriteData(e, R, n).then(function(e) {
						var t = e.editMsgHistories, n = e.existingEditMsgHistory, r = e.existingMsg, a = e.isDeletedWithThread, i = e.isDeleteForMeOrRevoked, l = e.pendingDeleteForMeStanza, s = e.pendingRevokedStanza, u = g(r, R, n);
						return i || a || r != null && u !== !0 ? b : u && r != null ? babelHelpers.extends({}, C, {
							action: o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT,
							existingEditMsgHistory: n,
							existingMsg: r,
							msg: R,
							type: R.type
						}) : l != null ? babelHelpers.extends({}, C, {
							action: o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME,
							msg: R,
							pendingDeleteForMeStanza: l,
							type: R.type
						}) : s != null ? babelHelpers.extends({}, C, {
							action: o("MAWMsgActionType").MSG_ACTION.REVOKE,
							msg: R,
							pendingRevokedStanza: s,
							type: R.type
						}) : babelHelpers.extends({}, C, {
							action: o("MAWMsgActionType").MSG_ACTION.WRITE,
							editMsgHistories: t,
							msg: p === "ebrestore" ? babelHelpers.extends({}, R, { source: "eb_restore" }) : R,
							type: R.type
						});
					});
					if (R.type === o("MAWMsgType").MSG_TYPE.IMAGE || R.type === o("MAWMsgType").MSG_TYPE.VIDEO || R.type === o("MAWMsgType").MSG_TYPE.PTT || R.type === o("MAWMsgType").MSG_TYPE.GIF || R.type === o("MAWMsgType").MSG_TYPE.STICKER || R.type === o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE || R.type === o("MAWMsgType").MSG_TYPE.RAVEN) {
						var D, x;
						return R.type === o("MAWMsgType").MSG_TYPE.IMAGE && ((D = i.msg.metadata) == null ? void 0 : D.groupId) != null && (R.groupId = i.msg.metadata.groupId, R.groupIndex = i.msg.metadata.groupIndex, R.groupSize = i.msg.metadata.groupSize), R.type === o("MAWMsgType").MSG_TYPE.IMAGE && (_ == null || (x = _.unstoredDbMedia) == null || (x = x.validatedImageInfo) == null ? void 0 : x.hdType) != null && (R.hdType = _ == null ? void 0 : _.unstoredDbMedia.validatedImageInfo.hdType), m.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Preparing media for msg with StanzaID ", ""])), R.externalId), o("MAWMediaManagementTxns").prepareMediaWriteData(e, R, _ == null ? void 0 : _.unstoredDbMedia, n).then(function(e) {
							var t = e.existingMsg, n = e.isDeletedWithThread, i = e.isDeleteForMeOrRevoked, l = e.pendingDeleteForMeStanza, s = e.pendingRevokedStanza, u = e.shouldDropDocument, d = [_ == null ? void 0 : _.unstoredDbMedia, g(t, R)], f = d[0], h = d[1];
							if (f == null && m.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Media is null for StanzaID ", ""])), R.externalId), p === "ebrestore" && t != null && f != null && t.source === "media_restore" && (!o("MAWMediaGalleryEBTaggingUtils").isMediaGalleryEBTaggingRestoreEnabled() || a !== r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE)) {
								var y = !o("MAWMediaGalleryEBTaggingUtils").isMediaGalleryEBTaggingRestoreEnabled() && a === r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE ? "media_restore" : "eb_restore";
								return babelHelpers.extends({}, C, {
									action: o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT,
									existingMsg: t,
									media: f,
									msg: babelHelpers.extends({}, R, { source: y }),
									type: R.type
								});
							}
							return u === !0 || i || n || f == null || t != null && !h ? b : h && t != null ? babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT,
								existingMsg: t,
								media: f,
								msg: R,
								type: R.type
							}) : l != null ? babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME,
								msg: R,
								pendingDeleteForMeStanza: l,
								type: R.type
							}) : s != null ? babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.REVOKE,
								msg: R,
								pendingRevokedStanza: s,
								type: R.type
							}) : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								media: f,
								msg: p === "ebrestore" ? babelHelpers.extends({}, R, { source: a === r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE ? "media_restore" : "eb_restore" }) : R,
								type: R.type
							});
						});
					} else if (R.type === o("MAWMsgType").MSG_TYPE.XMA) {
						var $ = _ == null ? void 0 : _.unstoredXMA;
						return $ == null ? b : o("MAWWriteXMAMessageTxns").prepareXMAWriteData(e, R, $, n).then(function(e) {
							var t = e.xmaData.existingMsg, n = g(t, R), r = p === "ebrestore" ? babelHelpers.extends({}, e.xmaMsg, { source: "eb_restore" }) : e.xmaMsg;
							if (e.associatedMsg != null && e.associatedData != null && !e.associatedData.isDeletedWithThread && !e.associatedData.isDeleteForMeOrRevoked) {
								var a, i = e.associatedMsg, l = e.associatedData.existingMsg;
								if (n && t != null) return babelHelpers.extends({}, C, {
									action: o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT_WITH_ASSOCIATED,
									associatedMsg: i,
									existingAssociatedMsg: l,
									existingMsg: t,
									msg: r,
									type: R.type,
									xma: $
								});
								if (t != null && e.associatedData.existingMsg != null) return b;
								if ([t, (a = e.associatedData) == null ? void 0 : a.existingMsg].filter(function(e) {
									return e == null;
								}).length === 1) {
									var s, u, c, d, _, f, h, y;
									m.mustfix("[duplicate msgs] XMA and associated inconsistency: existing message not found for %s, xmaMessageType: %s, authorMe: %s, xma data: existingMsgType: %s, isDeletedWithThread: %s, isDeleteForMeOrRevoked: %s, hasPendingDeleteForMeStanza: %s, hasPendingRevokedStanza: %s, associated data: existingMsgType: %s, isDeletedWithThread: %s, isDeleteForMeOrRevoked: %s, hasPendingDeleteForMeStanza: %s, hasPendingRevokedStanza: %s", t == null ? "XMA" : "Associated", r == null ? void 0 : r.xmaMessageType, o("WAJids").isAuthorMe(r == null ? void 0 : r.author), t == null ? void 0 : t.type, (s = e.xmaData) == null ? void 0 : s.isDeletedWithThread, (u = e.xmaData) == null ? void 0 : u.isDeleteForMeOrRevoked, ((c = e.xmaData) == null ? void 0 : c.pendingDeleteForMeStanza) != null, ((d = e.xmaData) == null ? void 0 : d.pendingRevokedStanza) != null, l == null ? void 0 : l.type, (_ = e.associatedData) == null ? void 0 : _.isDeletedWithThread, (f = e.associatedData) == null ? void 0 : f.isDeleteForMeOrRevoked, ((h = e.associatedData) == null ? void 0 : h.pendingDeleteForMeStanza) != null, ((y = e.associatedData) == null ? void 0 : y.pendingRevokedStanza) != null);
								}
								return babelHelpers.extends({}, C, {
									action: o("MAWMsgActionType").MSG_ACTION.WRITE_WITH_ASSOCIATED,
									associatedMedia: e.associatedMedia,
									associatedMsg: i,
									existingAssociatedMsg: l,
									msg: r,
									type: R.type,
									xma: $
								});
							}
							if (n && t != null) return babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.UPDATE_CIPHERTEXT,
								existingMsg: t,
								msg: r,
								type: R.type,
								xma: $
							});
							var v = e.xmaData, S = v.isDeletedWithThread, L = v.isDeleteForMeOrRevoked, E = v.pendingDeleteForMeStanza, k = v.pendingRevokedStanza;
							return S || L || t != null ? b : E != null ? babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.DELETE_FOR_ME,
								msg: e.xmaMsg,
								pendingDeleteForMeStanza: E,
								type: R.type
							}) : k != null ? babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.REVOKE,
								msg: e.xmaMsg,
								pendingRevokedStanza: k,
								type: R.type
							}) : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								msg: r,
								type: R.type,
								xma: $
							});
						});
					} else {
						if (R.type === o("MAWMsgType").MSG_TYPE.REVOKED) return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, R.revokedExternalId, n.jid, h.author), o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, R.externalId, n.jid, h.author)]).then(function(e) {
							var t = e[0], n = e[1];
							return n != null ? b : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								ebTimestampMs: R.ebTimestampMs,
								msg: R,
								originalMsg: t,
								previousRevokeMsg: n,
								type: R.type
							});
						});
						if (R.type === o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION) {
							var P = o("WAJids").isAuthorMe(h.author) ? o("WAGlobals").getMyUserJid() : h.author;
							return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, h.externalId, n.jid, P)]).then(function(e) {
								var t = e[0];
								return babelHelpers.extends({}, C, {
									action: o("MAWMsgActionType").MSG_ACTION.WRITE,
									existingMsg: t,
									screenshotActionType: R.msgContent.screenshotActionType,
									type: R.type
								});
							});
						} else return R.type === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE ? o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, h.externalId, n.jid, h.author).then(function(e) {
							return e != null ? b : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								msg: R,
								type: R.type
							});
						}) : R.type === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH && k != null ? o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, h.externalId, n.jid, h.author).then(function(e) {
							return e != null ? b : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								msg: R,
								receiverFetchInfo: k,
								type: R.type
							});
						}) : R.type === o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE ? o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, h.externalId, n.jid, h.author).then(function(e) {
							return e != null || v == null ? b : babelHelpers.extends({}, C, {
								action: o("MAWMsgActionType").MSG_ACTION.WRITE,
								msg: R,
								pollInfo: v,
								type: R.type
							});
						}) : R.type === o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE ? S == null || S.decrypted === void 0 ? b : o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, C, {
							action: o("MAWMsgActionType").MSG_ACTION.WRITE,
							msg: R,
							pollInfo: S,
							type: R.type
						})) : (m.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unsupported message type on preprocessing ", ""])), R.type), b);
					}
				}
			}
			case "IncomingCiphertextMsg": {
				var N;
				if (!((N = i == null ? void 0 : i.createPlaceholder) != null && N)) return b;
				var M = o("MAWBuildIncomingMsgs").buildUnstoredCiphertextMsg(h, y);
				return o("MAWWriteMsgTxns").prepareMsgWriteData(e, M, n).then(function(e) {
					var t = e.existingMsg, n = e.isDeletedWithThread, r = e.isDeleteForMeOrRevoked;
					return r || n || t != null ? b : babelHelpers.extends({}, C, {
						action: o("MAWMsgActionType").MSG_ACTION.WRITE,
						msg: M,
						type: o("MAWMsgType").MSG_TYPE.CIPHERTEXT
					});
				});
			}
			case "UnavailableMsg":
			case "FrankingInvalidMsg": {
				var w = o("MAWBuildIncomingMsgs").buildUnstoredUnavailableMsg(h, y);
				return o("MAWWriteMsgTxns").prepareMsgWriteData(e, w, n).then(function(e) {
					var t = e.existingMsg, n = e.isDeletedWithThread, r = e.isDeleteForMeOrRevoked;
					return r || n || t != null ? b : babelHelpers.extends({}, C, {
						action: o("MAWMsgActionType").MSG_ACTION.WRITE,
						msg: w,
						type: o("MAWMsgType").MSG_TYPE.UNAVAILABLE
					});
				});
			}
		}
	}
	function g(e, t, n) {
		return e == null && n == null || t.type === o("MAWMsgType").MSG_TYPE.CIPHERTEXT ? !1 : (e == null ? void 0 : e.type) === o("MAWMsgType").MSG_TYPE.CIPHERTEXT || (n == null ? void 0 : n.msgContent.content) === "";
	}
	l.classifyIncomingMsgs = p, l.getMessageDataByType = _, l.isCiphertextUpdate = g;
}), 98);
