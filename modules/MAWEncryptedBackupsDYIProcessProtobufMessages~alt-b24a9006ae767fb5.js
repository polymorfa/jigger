__d("MAWEncryptedBackupsDYIProcessProtobufMessages", [
	"CurrentUser",
	"EncryptedBackupsDYIMessageProcessingUtils",
	"EncryptedBackupsDYISingleton",
	"EncryptedBackupsDYITypes",
	"MAWGroupPollsDualEncryptionUtils",
	"MAWHandleEchoProtobufsRestoreApi",
	"MAWJids",
	"MAWMsgType",
	"WAHashUtils",
	"WAJids",
	"WALongInt",
	"WAStanzaUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
	async function I(t, n, a) {
		var i = o("EncryptedBackupsDYISingleton").getSingleton(), l = i.getLogger();
		l.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Processing ",
			" protobuf messages for thread ",
			""
		])), a.length, n);
		var p = a.map(function(e) {
			var n = i.hasMessage(t, o("WAStanzaUtils").toStanzaId(e.otid));
			return n ? (l.DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Encountered a duplicate message otid ", ", skipping"])), e.otid), null) : e;
		}).filter(Boolean), _ = i.getDateRangeCutoffMs(), f = _ != null ? p.filter(function(e) {
			return e.toplevelProtobuf.protobufTimestampMS >= _;
		}) : p, g = o("MAWJids").toUserJid(r("CurrentUser").getAccountID()), h = !1, y = !1, C;
		try {
			for (var b = babelHelpers.asyncIterator(f), v; h = !(v = await b.next()).done; h = !1) {
				var S = v.value;
				try {
					var R = o("MAWHandleEchoProtobufsRestoreApi").decodeDecryptedMessageProtobuf(S, g, void 0, new Set(), new Set(), new Map(), new Map(), new Map(), !0);
					if (R == null) {
						l.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Decoded protobuf is empty"])));
						continue;
					}
					if (R != null && R.metadata != null && R.metadata.messageId != null) {
						var L = o("WAStanzaUtils").toStanzaId(R.metadata.messageId), E = await T(t, n, R);
						if (E == null) {
							l.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error converting protobuf to DYI format. Dropping the message"])));
							continue;
						}
						i.setMessagesByThreadKey(t, L, E);
					} else {
						l.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error converting protobuf to DYI format. Dropping the message"])));
						continue;
					}
				} catch (e) {
					l.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf. Dropping the message: ", ""])), e);
					continue;
				}
			}
		} catch (e) {
			y = !0, C = e;
		} finally {
			try {
				h && b.return != null && await b.return();
			} finally {
				if (y) throw C;
			}
		}
	}
	async function T(e, t, n) {
		var r, a, i = o("EncryptedBackupsDYISingleton").getSingleton(), l = i.getLogger(), s = n.metadata, u = n.msgType, c = n.sortOrderMs;
		if (s == null || u == null) {
			l.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf: metadata or message type is null"])));
			return;
		}
		var d = s.messageId, m = s.senderId, C = s.timestampMs;
		if (C == null || typeof C != "number" || d == null || m == null) {
			l.WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf: ts or messageId or senderId is null"])));
			return;
		}
		var b = i.getDateRangeCutoffMs();
		if (!(b != null && C < b)) {
			var v = o("WATimeUtils").castMilliSecondsToUnixTime(C), S = o("EncryptedBackupsDYIMessageProcessingUtils").buildBaseDyiMessage(m, c), R = (r = n.decodedPayload) == null ? void 0 : r.text;
			if (n.editMsgData.length > 0) {
				var L = v;
				n.editMsgData.forEach(function(e) {
					var t;
					if (e.ts > L && ((t = e.editMsgContent.message) == null ? void 0 : t.text) != null) {
						var n;
						L = e.ts, R = (n = e.editMsgContent.message) == null ? void 0 : n.text;
					}
				});
			}
			switch (n.reactionData.length > 0 && (S.reactions = n.reactionData.map(function(e) {
				var t, n, r = e.reaction, o = e.senderId;
				return {
					actor: (t = i.getContactNameForContactId(o)) != null ? t : "unknown",
					reaction: (n = r.text) != null ? n : "unknown"
				};
			})), n.msgType) {
				case o("MAWMsgType").MSG_TYPE.TEXT:
					S.type = "text", S.text = R || "";
					break;
				case o("MAWMsgType").MSG_TYPE.VIDEO:
				case o("MAWMsgType").MSG_TYPE.GIF:
				case o("MAWMsgType").MSG_TYPE.IMAGE:
				case o("MAWMsgType").MSG_TYPE.STICKER:
				case o("MAWMsgType").MSG_TYPE.PTT:
					S.type = "media", S.text = R || "", S = x(e, t, n, c, S);
					break;
				case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
					l.WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Documents are not supported in DYI"])));
					return;
				case o("MAWMsgType").MSG_TYPE.XMA:
					if (S.type = "link", n.xmaData == null) {
						l.WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] XMA message doesn't have xmaData"])));
						return;
					}
					S.text = ((a = n.xmaData) == null ? void 0 : a.ctas.map(function(e) {
						return e.nativeUrl;
					}).filter(Boolean).join(`
`)) || "";
					break;
				case o("MAWMsgType").MSG_TYPE.REVOKED:
					S.type = "placeholder", S.isUnsent = !0, S.text = "User unsent a message";
					break;
				case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
					S.type = "poll", S.text = await D(n);
					break;
				case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
					l.WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Bump message is not supported in DYI"])));
					return;
				default:
					l.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Explicitly dropping ", " message type"])), n.msgType);
					return;
			}
			return S;
		}
	}
	async function D(e) {
		var t = o("EncryptedBackupsDYISingleton").getSingleton().getLogger(), n = e.groupPollInfo;
		if (n == null) return t.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Group poll creation message is missing group poll info"]))), "";
		var r = new Map(), a = new Map();
		if (await Promise.all(n.options.map(async function(e) {
			var t = await o("MAWGroupPollsDualEncryptionUtils").getHashForOptionName(e);
			r.set(t, {
				optionName: e,
				voterUserJids: []
			});
		})), e.groupPollUpdateData != null) {
			var i = !1, l = !1, s;
			try {
				for (var u = babelHelpers.asyncIterator(e.groupPollUpdateData), c; i = !(c = await u.next()).done; i = !1) {
					var d = c.value;
					{
						var m, p, _;
						if (((m = d.pollCreationMessageKey) == null ? void 0 : m.id) == null || ((p = d.pollCreationMessageKey) == null ? void 0 : p.remoteJid) == null) {
							t.ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Poll creation message key is incomplete. Skipping"])));
							continue;
						}
						var f = d.pollCreationMessageKey, g = f.id, h = f.remoteJid, y = o("WAJids").unsafeCoerceToUserJid(h), L = {
							pollCreationMessageKey: n.encKey,
							pollCreationSenderJid: o("WAJids").toMsgrUserJid(((_ = e.metadata) == null ? void 0 : _.senderId) || ""),
							pollCreationStanzaId: o("WAStanzaUtils").toStanzaId(g),
							pollUpdateSenderJid: y,
							pollUpdateStanzaId: d.externalId
						};
						if (d.addOption != null) {
							var E = await o("MAWGroupPollsDualEncryptionUtils").decryptGroupPollAddOption(d.addOption, L);
							if (E.success) {
								var k = E.value, I = !1, T = !1, D;
								try {
									for (var x = babelHelpers.asyncIterator(k.pollOption), $; I = !($ = await x.next()).done; I = !1) {
										var P = $.value;
										{
											if (P.optionName == null) continue;
											var N = P.optionName, M = await o("MAWGroupPollsDualEncryptionUtils").getHashForOptionName(N);
											r.has(M) || r.set(M, {
												optionName: N,
												voterUserJids: []
											});
										}
									}
								} catch (e) {
									T = !0, D = e;
								} finally {
									try {
										I && x.return != null && await x.return();
									} finally {
										if (T) throw D;
									}
								}
							} else t.ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Decryption failure when trying to decrypt poll add option update: ", ""])), E.error);
						}
						if (d.vote != null) {
							var w = await o("MAWGroupPollsDualEncryptionUtils").decryptGroupPollVote(d.vote, L);
							if (w.success) {
								var A = w.value;
								if (A.senderTimestampMs == null) {
									t.WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[Polls] senderTimestampMs is null. Cannot determine the latest poll vote"])));
									continue;
								}
								var F = A.selectedOptions, O = A.senderTimestampMs, B = a.get(y);
								(B == null || B.senderTimestampMs < o("WALongInt").numberOrThrowIfTooLarge(O)) && a.set(y, {
									senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(O),
									votes: F.map(o("MAWGroupPollsDualEncryptionUtils").getBase64EncodedHash)
								});
							} else t.ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Decryption failure when trying to decrypt poll vote update: ", ""])), w.error);
						}
					}
				}
			} catch (e) {
				l = !0, s = e;
			} finally {
				try {
					i && u.return != null && await u.return();
				} finally {
					if (l) throw s;
				}
			}
		}
		for (var W of a) {
			var q = W[0], U = W[1];
			for (var V of U.votes) {
				var H = r.get(V);
				H == null ? r.set(V, {
					optionName: "Unknown",
					voterUserJids: [q]
				}) : r.set(V, babelHelpers.extends({}, H, { voterUserJids: [].concat(H.voterUserJids, [q]) }));
			}
		}
		return "Question: " + n.name + "; Options: " + Array.from(r).map(function(e) {
			var t = e[0], n = e[1], r = n.optionName, a = n.voterUserJids;
			return r + " (" + a.length + " votes" + (a.length > 0 ? ": " + a.map(function(e) {
				return o("EncryptedBackupsDYIMessageProcessingUtils").getSenderName(o("WAJids").userIdFromJid(o("WAJids").unsafeCoerceToUserJid(e)));
			}).join(", ") : "") + ")";
		}).join("; ");
	}
	function x(e, t, n, r, a) {
		var i, l, s = o("EncryptedBackupsDYISingleton").getSingleton(), u = s.getLogger();
		if (n.mediaMetadata == null) return u.WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Media message is missing media data"]))), a;
		var c = n.mediaMetadata, d = c.mediaEntryData, m = c.plaintextHash, p = (i = (l = n.metadata) == null ? void 0 : l.senderId) != null ? i : "0", _ = o("WAStanzaUtils").toStanzaId(n.externalId), f = o("WAHashUtils").stringToPlaintextHash(m);
		if (a.media.add(f), s.shouldDownloadMedia() && !s.isAttachmentsSkipped() && !s.isAttachmentDownloadInProgressForPlaintextHash(f) && !s.isAttachmentDownloadCompleteForPlaintextHash(f)) {
			if (u.LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Starting DYI media download for attachemnt with hash ", ""])), o("WAHashUtils").sanitisePlaintextHash(f)), s.addPlaintextHashToAttachmentDownloadsInProgress(f), d == null) return u.ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Media message is missing media entry data"]))), s.deletePlaintextHashFromAttachmentDownloadsInProgress(f), a;
			var g = {
				author: o("WAJids").toMsgrUserJid(p),
				chat: o("WAJids").toMsgrUserJid(t),
				externalId: _
			}, h = s.getMediaOption(), y = h === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.PreviewsOnly && n.msgType !== o("MAWMsgType").MSG_TYPE.IMAGE && n.msgType !== o("MAWMsgType").MSG_TYPE.VIDEO ? o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.FullSize : h;
			o("EncryptedBackupsDYIMessageProcessingUtils").downloadMediaWithMediaManager(f, g, r, d, y);
		}
		return a;
	}
	l.processEBProtobufMessagesForDYI = I;
}), 98);
