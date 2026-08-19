__d("MAWEncryptedBackupsDYIProcessProtobufMessages", [
	"CurrentUser",
	"EncryptedBackupsDYIMessageProcessingUtils",
	"EncryptedBackupsDYISingleton",
	"EncryptedBackupsDYITypes",
	"MAWGroupPollsDualEncryptionUtils",
	"MAWHandleEchoProtobufsRestoreApi",
	"MAWJids",
	"MAWMsgType",
	"Promise",
	"WAHashUtils",
	"WAJids",
	"WALongInt",
	"WAStanzaUtils",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
	function T(e, t, n) {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = o("EncryptedBackupsDYISingleton").getSingleton(), i = a.getLogger();
			i.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"Processing ",
				" protobuf messages for thread ",
				""
			])), n.length, t);
			var l = n.map(function(t) {
				var n = a.hasMessage(e, o("WAStanzaUtils").toStanzaId(t.otid));
				return n ? (i.DEV(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Encountered a duplicate message otid ", ", skipping"])), t.otid), null) : t;
			}).filter(Boolean), s = a.getDateRangeCutoffMs(), u = s != null ? l.filter(function(e) {
				return e.toplevelProtobuf.protobufTimestampMS >= s;
			}) : l, g = o("MAWJids").toUserJid(r("CurrentUser").getAccountID()), h = !1, y = !1, C;
			try {
				for (var b = babelHelpers.asyncIterator(u), v; h = !(v = yield b.next()).done; h = !1) {
					var S = v.value;
					try {
						var R = o("MAWHandleEchoProtobufsRestoreApi").decodeDecryptedMessageProtobuf(S, g, void 0, new Set(), new Set(), new Map(), new Map(), new Map(), !0);
						if (R == null) {
							i.WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Decoded protobuf is empty"])));
							continue;
						}
						if (R != null && R.metadata != null && R.metadata.messageId != null) {
							var L = o("WAStanzaUtils").toStanzaId(R.metadata.messageId), E = yield x(e, t, R);
							if (E == null) {
								i.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error converting protobuf to DYI format. Dropping the message"])));
								continue;
							}
							a.setMessagesByThreadKey(e, L, E);
						} else {
							i.WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Error converting protobuf to DYI format. Dropping the message"])));
							continue;
						}
					} catch (e) {
						i.ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf. Dropping the message: ", ""])), e);
						continue;
					}
				}
			} catch (e) {
				y = !0, C = e;
			} finally {
				try {
					h && b.return != null && (yield b.return());
				} finally {
					if (y) throw C;
				}
			}
		}), D.apply(this, arguments);
	}
	function x(e, t, n) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r, a, i = o("EncryptedBackupsDYISingleton").getSingleton(), l = i.getLogger(), s = n.metadata, u = n.msgType, c = n.sortOrderMs;
			if (s == null || u == null) {
				l.WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf: metadata or message type is null"])));
				return;
			}
			var d = s.messageId, m = s.senderId, p = s.timestampMs;
			if (p == null || typeof p != "number" || d == null || m == null) {
				l.WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Error processing protobuf: ts or messageId or senderId is null"])));
				return;
			}
			var _ = i.getDateRangeCutoffMs();
			if (!(_ != null && p < _)) {
				var f = o("WATimeUtils").castMilliSecondsToUnixTime(p), S = o("EncryptedBackupsDYIMessageProcessingUtils").buildBaseDyiMessage(m, c), R = (r = n.decodedPayload) == null ? void 0 : r.text;
				if (n.editMsgData.length > 0) {
					var L = f;
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
						S.type = "media", S.text = R || "", S = M(e, t, n, c, S);
						break;
					case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
						l.WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Documents are not supported in DYI"])));
						return;
					case o("MAWMsgType").MSG_TYPE.XMA:
						if (S.type = "link", n.xmaData == null) {
							l.WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] XMA message doesn't have xmaData"])));
							return;
						}
						S.text = ((a = n.xmaData) == null ? void 0 : a.ctas.map(function(e) {
							return e.nativeUrl;
						}).filter(Boolean).join("\n")) || "";
						break;
					case o("MAWMsgType").MSG_TYPE.REVOKED:
						S.type = "placeholder", S.isUnsent = !0, S.text = "User unsent a message";
						break;
					case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
						S.type = "poll", S.text = yield P(n);
						break;
					case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
						l.WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Bump message is not supported in DYI"])));
						return;
					default:
						l.LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Explicitly dropping ", " message type"])), n.msgType);
						return;
				}
				return S;
			}
		}), $.apply(this, arguments);
	}
	function P(e) {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("EncryptedBackupsDYISingleton").getSingleton().getLogger(), r = e.groupPollInfo;
			if (r == null) return t.WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Group poll creation message is missing group poll info"]))), "";
			var a = new Map(), i = new Map();
			if (yield (I || (I = n("Promise"))).all(r.options.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("MAWGroupPollsDualEncryptionUtils").getHashForOptionName(e);
					a.set(t, {
						optionName: e,
						voterUserJids: []
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), e.groupPollUpdateData != null) {
				var l = !1, s = !1, u;
				try {
					for (var c = babelHelpers.asyncIterator(e.groupPollUpdateData), d; l = !(d = yield c.next()).done; l = !1) {
						var m = d.value;
						{
							var p, _, f;
							if (((p = m.pollCreationMessageKey) == null ? void 0 : p.id) == null || ((_ = m.pollCreationMessageKey) == null ? void 0 : _.remoteJid) == null) {
								t.ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Poll creation message key is incomplete. Skipping"])));
								continue;
							}
							var g = m.pollCreationMessageKey, h = g.id, y = g.remoteJid, C = o("WAJids").unsafeCoerceToUserJid(y), b = {
								pollCreationMessageKey: r.encKey,
								pollCreationSenderJid: o("WAJids").toMsgrUserJid(((f = e.metadata) == null ? void 0 : f.senderId) || ""),
								pollCreationStanzaId: o("WAStanzaUtils").toStanzaId(h),
								pollUpdateSenderJid: C,
								pollUpdateStanzaId: m.externalId
							};
							if (m.addOption != null) {
								var v = yield o("MAWGroupPollsDualEncryptionUtils").decryptGroupPollAddOption(m.addOption, b);
								if (v.success) {
									var T = v.value, D = !1, x = !1, $;
									try {
										for (var P = babelHelpers.asyncIterator(T.pollOption), N; D = !(N = yield P.next()).done; D = !1) {
											var M = N.value;
											{
												if (M.optionName == null) continue;
												var w = M.optionName, A = yield o("MAWGroupPollsDualEncryptionUtils").getHashForOptionName(w);
												a.has(A) || a.set(A, {
													optionName: w,
													voterUserJids: []
												});
											}
										}
									} catch (e) {
										x = !0, $ = e;
									} finally {
										try {
											D && P.return != null && (yield P.return());
										} finally {
											if (x) throw $;
										}
									}
								} else t.ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Decryption failure when trying to decrypt poll add option update: ", ""])), v.error);
							}
							if (m.vote != null) {
								var F = yield o("MAWGroupPollsDualEncryptionUtils").decryptGroupPollVote(m.vote, b);
								if (F.success) {
									var O = F.value;
									if (O.senderTimestampMs == null) {
										t.WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[Polls] senderTimestampMs is null. Cannot determine the latest poll vote"])));
										continue;
									}
									var B = O.selectedOptions, W = O.senderTimestampMs, q = i.get(C);
									(q == null || q.senderTimestampMs < o("WALongInt").numberOrThrowIfTooLarge(W)) && i.set(C, {
										senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(W),
										votes: B.map(o("MAWGroupPollsDualEncryptionUtils").getBase64EncodedHash)
									});
								} else t.ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Decryption failure when trying to decrypt poll vote update: ", ""])), F.error);
							}
						}
					}
				} catch (e) {
					s = !0, u = e;
				} finally {
					try {
						l && c.return != null && (yield c.return());
					} finally {
						if (s) throw u;
					}
				}
			}
			for (var U of i) {
				var V = U[0], H = U[1];
				for (var G of H.votes) {
					var z = a.get(G);
					z == null ? a.set(G, {
						optionName: "Unknown",
						voterUserJids: [V]
					}) : a.set(G, babelHelpers.extends({}, z, { voterUserJids: [].concat(z.voterUserJids, [V]) }));
				}
			}
			return "Question: " + r.name + "; Options: " + Array.from(a).map(function(e) {
				var t = e[0], n = e[1], r = n.optionName, a = n.voterUserJids;
				return r + " (" + a.length + " votes" + (a.length > 0 ? ": " + a.map(function(e) {
					return o("EncryptedBackupsDYIMessageProcessingUtils").getSenderName(o("WAJids").userIdFromJid(o("WAJids").unsafeCoerceToUserJid(e)));
				}).join(", ") : "") + ")";
			}).join("; ");
		}), N.apply(this, arguments);
	}
	function M(t, n, r, a, i) {
		var l, c, d = o("EncryptedBackupsDYISingleton").getSingleton(), m = d.getLogger();
		if (r.mediaMetadata == null) return m.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Media message is missing media data"]))), i;
		var p = r.mediaMetadata, _ = p.mediaEntryData, f = p.plaintextHash, g = (l = (c = r.metadata) == null ? void 0 : c.senderId) != null ? l : "0", h = o("WAStanzaUtils").toStanzaId(r.externalId), y = o("WAHashUtils").stringToPlaintextHash(f);
		if (i.media.add(y), d.shouldDownloadMedia() && !d.isAttachmentsSkipped() && !d.isAttachmentDownloadInProgressForPlaintextHash(y) && !d.isAttachmentDownloadCompleteForPlaintextHash(y)) {
			if (m.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Starting DYI media download for attachemnt with hash ", ""])), o("WAHashUtils").sanitisePlaintextHash(y)), d.addPlaintextHashToAttachmentDownloadsInProgress(y), _ == null) return m.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Protobuf] Media message is missing media entry data"]))), d.deletePlaintextHashFromAttachmentDownloadsInProgress(y), i;
			var C = {
				author: o("WAJids").toMsgrUserJid(g),
				chat: o("WAJids").toMsgrUserJid(n),
				externalId: h
			}, b = d.getMediaOption(), v = b === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.PreviewsOnly && r.msgType !== o("MAWMsgType").MSG_TYPE.IMAGE && r.msgType !== o("MAWMsgType").MSG_TYPE.VIDEO ? o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.FullSize : b;
			o("EncryptedBackupsDYIMessageProcessingUtils").downloadMediaWithMediaManager(y, C, a, _, v);
		}
		return i;
	}
	l.processEBProtobufMessagesForDYI = T;
}), 98);
