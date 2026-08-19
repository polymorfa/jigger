__d("MAWHandleEchoProtobufsRestoreApi", [
	"EBLogger",
	"EchoMessageMediaFieldUtils",
	"EncryptedBackupsDYIMessageProcessingUtils",
	"LSMEBTaskCreationSource",
	"MAWJids",
	"MAWMediaUtils",
	"MAWMsg",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWUnstoredContentToUnstoredDbContentUtils",
	"MessageBackupSupplementalKeyGenerator",
	"WAAckLevel",
	"WAArmadilloApplication.pb",
	"WAArmadilloBackupMessage.pb",
	"WABase64",
	"WAConsumerApplication.pb",
	"WAHashUtils",
	"WAJids",
	"WAMediaTransport.pb",
	"WAMsgApplication.pb",
	"WAMsgType",
	"WAOdsEnums",
	"WAParseMediaTransportProtocol",
	"WAParseMessageApplication",
	"WAStanzaUtils",
	"WATimeUtils",
	"decodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D = o("EBLogger").EBLogger().tags(["ProtobufRestore"]);
	function x(t) {
		var n = t.isMediaGalleryRestore, a = t.taskSource, i;
		return n != null && n ? (o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.EB_RESTORE,
			key: "is_media_gallery_restore_param"
		}), D.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["isMediaGalleryRestore is deprecated. Consider using taskSource insted"]))), i = r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE) : i = a != null ? a : r("LSMEBTaskCreationSource").UNKNOWN, babelHelpers.extends({}, t, {
			isMediaGalleryRestore: void 0,
			taskSource: i
		});
	}
	function $(e, t, n) {
		var r = {
			author: n,
			chat: t,
			externalId: e
		};
		return r;
	}
	function P(e, t, n, r, a, i, l, p, _, f, g, h, y, C, b, v) {
		if (e === o("MAWMsgType").MSG_TYPE.TEXT) if (l == null) {
			D.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Text content cannot be null for msg type text - unable to restore msg"])));
			return;
		} else {
			var S = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				msgContent: {
					content: l,
					mentionedJids: p != null ? p.map(o("WAJids").validateUserJid).filter(Boolean) : void 0
				},
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.TEXT
			};
			return S;
		}
		else if (e === o("MAWMsgType").MSG_TYPE.VIDEO) {
			var R = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.VIDEO
			};
			return R;
		} else if (e === o("MAWMsgType").MSG_TYPE.GIF) {
			var L = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.GIF
			};
			return L;
		} else if (e === o("MAWMsgType").MSG_TYPE.IMAGE) {
			var E = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.IMAGE
			};
			return E;
		} else if (e === o("MAWMsgType").MSG_TYPE.STICKER) {
			var k = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.STICKER
			};
			return k;
		} else if (e === o("MAWMsgType").MSG_TYPE.PTT) {
			var I = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.PTT
			};
			return I;
		} else if (e === o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE) {
			var T = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				mediaId: void 0,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE
			};
			return T;
		} else if (e === o("MAWMsgType").MSG_TYPE.XMA) {
			var x = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.XMA
			};
			return x;
		} else if (e === o("MAWMsgType").MSG_TYPE.REVOKED) {
			if (_ == null) {
				D.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["No revoked msg external id found for revoked msg"])));
				return;
			}
			var $ = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				ebTimestampMs: null,
				id: r,
				msgContent: void 0,
				revokedExternalId: _,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.REVOKED,
				unsendMsgContentDeleteTs: t
			};
			return $;
		} else if (e === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE) {
			var P = {
				ack: o("WAAckLevel").ACK.SENT,
				id: r,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE
			};
			return P;
		} else if (e === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH) {
			var N = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				forwardingScore: i,
				id: r,
				isForwarded: a,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH
			};
			return N;
		} else if (e === o("MAWMsgType").MSG_TYPE.RAVEN) {
			if (f == null) {
				D.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No raven msg ephemeral type found for raven msg"])));
				return;
			}
			if (g == null) {
				D.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["No raven msg media type found for raven msg"])));
				return;
			}
			var M = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				id: r,
				mediaId: h,
				ravenEphemeralMediaState: o("MAWMsg").MAWRavenMsgEphemeralMediaState.UNSEEN,
				ravenEphemeralType: f,
				ravenMediaType: g,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.RAVEN
			};
			return M;
		} else if (e === o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE) {
			if (y == null || C == null || b == null || v == null) {
				D.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] One of the mandatory fields is missing for the group poll creation msg"])));
				return;
			}
			var w = {
				ack: n === o("WAJids").AUTHOR_ME ? o("WAAckLevel").ACK.SENT : o("WAAckLevel").ACK.RECEIVED,
				id: r,
				ts: t,
				type: o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE
			};
			return w;
		}
	}
	function N(e, t, n, r, a) {
		var i, l, s, u, c, d, m, C, b = e.metadata, v = e.msgType;
		if (b == null) {
			D.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Missing required metadata, unable to create db msg from protobuf"])));
			return;
		}
		if (v == null) {
			D.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Missing required msg type, unable to create db msg from protobuf"])));
			return;
		}
		var S = b.messageId, R = b.senderId, L = (i = e.decodedPayload) == null ? void 0 : i.text, E = (l = e.decodedPayload) == null ? void 0 : l.mentionedJid;
		if (S == null) {
			D.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Missing required message id, unable to create db msg from protobuf"])));
			return;
		}
		if (R == null) {
			D.MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Missing required author, unable to create db msg from protobuf"])));
			return;
		}
		var k = o("WATimeUtils").castMilliSecondsToUnixTime(e.sortOrderMs), I = o("MAWJids").toUserJid(R), T = o("WAStanzaUtils").toStanzaId(S), x = I === n ? o("WAJids").AUTHOR_ME : I, N = $(T, t, I);
		if (e.editMsgData.length > 0) {
			var M = k;
			e.editMsgData.forEach(function(e) {
				var t;
				if (e.ts > M && ((t = e.editMsgContent.message) == null ? void 0 : t.text) != null) {
					var n, r;
					M = e.ts, L = (n = e.editMsgContent.message) == null ? void 0 : n.text, E = (r = e.editMsgContent.message) == null ? void 0 : r.mentionedJid;
				}
			});
		}
		var w = P(v, k, x, N, e.isForwarded, e.forwardingScore, L, E, e.revokedMsgExternalId, e.ravenMsgEphemeralType, e.ravenMsgMediaType, (s = e.ravenUnstoredMedia) == null ? void 0 : s.plaintextHash, (u = e.groupPollInfo) == null ? void 0 : u.encKey, (c = e.groupPollInfo) == null ? void 0 : c.name, (d = e.groupPollInfo) == null ? void 0 : d.options, (m = e.groupPollInfo) == null ? void 0 : m.selectableOptionsCount);
		if (w == null) {
			D.MUSTFIX(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"Missing required fields, unable to create db msg from protobuf for thread jid ",
				" and otid ",
				""
			])), t, T);
			return;
		}
		var A;
		if (e.xmaData != null && ((C = e.xmaData) == null ? void 0 : C.targetType) != null) {
			var F, O = {
				author: I,
				externalId: T,
				targetType: (F = e.xmaData) == null ? void 0 : F.targetType,
				threadJid: t
			};
			A = {
				unstoredAssociatedMedia: void 0,
				unstoredAssociatedMsg: void 0,
				unstoredFavicon: void 0,
				unstoredHeaderMedia: void 0,
				unstoredPreviews: void 0,
				xma: O
			};
		}
		var B = {
			unstoredGroupPollCreateInfo: e.groupPollInfo,
			unstoredMedia: void 0,
			unstoredMsg: w,
			unstoredQuotedMedia: void 0,
			unstoredReceiverFetchInfo: e.receiverFetchInfo,
			unstoredXMA: A
		};
		w.type === o("MAWMsgType").MSG_TYPE.RAVEN && e.ravenUnstoredMedia != null && (B.unstoredMedia = e.ravenUnstoredMedia);
		var W = o("MAWUnstoredContentToUnstoredDbContentUtils").unstoredContentToUnstoredDbContent(B);
		if (W.unstoredDbMsg != null) {
			var q = W.unstoredDbMsg;
			q.sortOrderMs = e.sortOrderMs, q.serverTs = o("WATimeUtils").castToUnixTime(e.sortOrderMs / 1e3), e.noteReply != null && (q.quote = {
				content: e.noteReply,
				remoteJid: void 0
			});
			var U = r.get(S);
			q.author != null && n === q.author && q.author !== o("WAJids").AUTHOR_SYSTEM && (q.author = o("WAJids").AUTHOR_ME), U != null && (q.quoteExternalId = o("WAStanzaUtils").toStanzaId(U)), v === o("MAWMsgType").MSG_TYPE.TEXT && (q.editCount = e.editMsgData.length);
			var V = {
				author: q.author,
				stanzaId: T,
				unstoredDbContent: W
			};
			return W.unstoredDbMedia != null && a != null && a.set(T, W.unstoredDbMedia), V;
		}
		D.MUSTFIX(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Failed to create db msg from protobuf"])));
	}
	function M(e) {
		switch (e) {
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_JPEG;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.GIF;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.STICKER: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.STICKER;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.VIDEO: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_MP4;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.AUDIO: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_WAV;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.XMA_IMAGE: return o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_JPEG;
			default: return null;
		}
	}
	function w(e) {
		switch (e) {
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE: return o("EchoMessageMediaFieldUtils").AttachmentType.IMAGE;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF: return o("EchoMessageMediaFieldUtils").AttachmentType.GIF;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.STICKER: return o("EchoMessageMediaFieldUtils").AttachmentType.STICKER;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.VIDEO: return o("EchoMessageMediaFieldUtils").AttachmentType.VIDEO;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.AUDIO: return o("EchoMessageMediaFieldUtils").AttachmentType.PTT;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.XMA_IMAGE: return o("EchoMessageMediaFieldUtils").AttachmentType.XMA;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.DOCUMENT: return o("EchoMessageMediaFieldUtils").AttachmentType.DOCUMENT;
			default: return null;
		}
	}
	function A(e) {
		var t;
		switch (e) {
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE:
				t = "image/jpeg";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.AUDIO:
				t = "audio/wav";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.VIDEO:
				t = "video/mp4";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF:
				t = "image/gif";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.STICKER:
				t = "image/webp";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.XMA_IMAGE:
				t = "image/jpeg";
				break;
			case o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.DOCUMENT:
				t = "application/octet-stream";
				break;
			default: D.MUSTFIX(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Unsupported media type, cannot get mimetype for attachment"])));
		}
		return t;
	}
	function F(e, t, n) {
		var r, a, i, l, s, u, c, d, m, p, _ = t, f = e.ancillary, g = e.integral, h = g == null || (r = g.transport) == null || (r = r.integral) == null ? void 0 : r.fileSha256, y = g == null || (a = g.transport) == null || (a = a.integral) == null ? void 0 : a.fileEncSha256, C = g == null || (i = g.transport) == null || (i = i.integral) == null ? void 0 : i.mediaKey, S = (g == null || (l = g.transport) == null || (l = l.integral) == null ? void 0 : l.mediaKeyTimestamp) != null && typeof (g == null || (s = g.transport) == null ? void 0 : s.integral.mediaKeyTimestamp) == "number" ? g == null || (u = g.transport) == null ? void 0 : u.integral.mediaKeyTimestamp : void 0;
		o("MAWMediaUtils").isTransportLegacyGif(e) && (_ = o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF);
		var R = g == null || (c = g.transport) == null || (c = c.ancillary) == null || (c = c.thumbnail) == null ? void 0 : c.thumbnailHeight, L = g == null || (d = g.transport) == null || (d = d.ancillary) == null || (d = d.thumbnail) == null ? void 0 : d.thumbnailWidth, E = M(_), k = w(_);
		if (k === null) {
			D.MUSTFIX(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Invalid attachment type, cannot restore attachment"])));
			return;
		}
		var I = o("EncryptedBackupsDYIMessageProcessingUtils").decodeMediaEntryFromAttachmentPayload(e, k === o("EchoMessageMediaFieldUtils").AttachmentType.XMA, n);
		I.success || D.WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Cannot generate media entry data, ", ""])), I.error);
		var T = {
			attachmentObjectId: g == null || (m = g.transport) == null || (m = m.ancillary) == null ? void 0 : m.objectId,
			attachmentType: k,
			directPath: g == null || (p = g.transport) == null || (p = p.integral) == null ? void 0 : p.directPath,
			encryptedHash: y != null ? o("WAHashUtils").toPlaintextHash(y) : void 0,
			filename: n,
			height: f == null ? void 0 : f.height,
			mediaEntryData: I.value,
			mediaKey: C != null ? o("WABase64").encodeB64UrlSafe(C) : void 0,
			mediaKeyTimestamp: S,
			mediaPlayableDuration: f == null ? void 0 : f.seconds,
			plaintextHash: h != null ? o("WAHashUtils").toPlaintextHash(h) : void 0,
			width: f == null ? void 0 : f.width,
			xAttachmentType: _,
			xContentType: "full"
		}, x = A(_);
		return x != null && (T.mediaContentType = x), E != null && (T.previewContentType = E, T.previewContentHeight = R, T.previewContentWidth = L), o("EchoMessageMediaFieldUtils").convertMediaMetadataDetailsToMediaMetadata(T, "protobuf");
	}
	function O(e, t, n) {
		var r, a = F(e, t, n);
		if (a == null) return {
			mediaMetadata: void 0,
			previewMetadata: null
		};
		var i = e.integral, l = null, s = i == null || (r = i.transport) == null || (r = r.ancillary) == null || (r = r.thumbnail) == null ? void 0 : r.downloadableThumbnail;
		if (s != null) {
			var u = s.fileSha256, c = s.fileEncSha256, d = s.mediaKey, m = typeof s.mediaKeyTimestamp == "number" ? s.mediaKeyTimestamp : void 0;
			return l = {
				attachmentObjectId: s.objectId,
				attachmentType: o("EchoMessageMediaFieldUtils").AttachmentType.IMAGE,
				directPath: s.directPath,
				encryptedHash: c != null ? o("WAHashUtils").toPlaintextHash(c) : void 0,
				filename: void 0,
				height: void 0,
				mediaKey: d != null ? o("WABase64").encodeB64UrlSafe(d) : void 0,
				mediaKeyTimestamp: m,
				mediaPlayableDuration: void 0,
				plaintextHash: u != null ? o("WAHashUtils").toPlaintextHash(u) : void 0,
				width: void 0,
				xAttachmentType: o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.MESSENGER_PREVIEW,
				xContentType: "preview"
			}, {
				mediaMetadata: a,
				previewMetadata: o("EchoMessageMediaFieldUtils").convertMediaMetadataDetailsToMediaMetadata(l, "protobuf")
			};
		}
		return {
			mediaMetadata: a,
			previewMetadata: null
		};
	}
	function B(e, t, n, r, a, i) {
		i === void 0 && (i = null), t != null && e != null && (n.push({
			mediaMetadata: t,
			mediaRestoreType: r,
			previewMetadata: i
		}), a.set(o("WAStanzaUtils").toStanzaId(e), n));
	}
	function W(e) {
		switch (e) {
			case 0: return o("MAWMsg").MAWRavenMsgEphemeralType.VIEW_ONCE;
			case 1: return o("MAWMsg").MAWRavenMsgEphemeralType.ALLOW_REPLAY;
			case 2: return o("MAWMsg").MAWRavenMsgEphemeralType.KEEP_IN_CHAT;
			default: return;
		}
	}
	function q(e, t, n, r, a, i, l, s, u, c, d) {
		var m, p, _, f, g, h, y, C, b, v, I = V(e, i, l, s), T = I == null || (m = I.obj.payload) == null ? void 0 : m.content, x = {
			editMsgData: [],
			externalId: r,
			forwardingScore: (p = I == null || (_ = I.metadata) == null ? void 0 : _.forwardingScore) != null ? p : 0,
			isForwarded: (f = I == null || (g = I.metadata) == null ? void 0 : g.isForwarded) != null ? f : !1,
			metadata: e.metadata,
			reactionData: [],
			sortOrderMs: t,
			unknownFieldCount: e.$$unknownFieldCount
		}, $, P = [];
		if (T != null) {
			if (T.messageText != null) return x.msgType = o("MAWMsgType").MSG_TYPE.TEXT, x.decodedPayload = T.messageText, x;
			if (T.extendedContentMessage != null) {
				var N, M, w;
				if (x.msgType = o("MAWMsgType").MSG_TYPE.XMA, x.xmaData = T.extendedContentMessage, ((N = T.extendedContentMessage) == null ? void 0 : N.headerImage) != null) {
					var A, q = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMediaTransport.pb").ImageTransportSpec, (A = T.extendedContentMessage) == null ? void 0 : A.headerImage.payload), H = F(q, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE);
					B(r, H, P, "xma_header", u);
				}
				if (((M = T.extendedContentMessage) == null ? void 0 : M.favicon) != null) {
					var G, z = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMediaTransport.pb").ImageTransportSpec, (G = T.extendedContentMessage) == null ? void 0 : G.favicon.payload), j = F(z, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE);
					B(r, j, P, "xma_favicon", u);
				}
				if (((w = T.extendedContentMessage) == null ? void 0 : w.previews) != null) {
					var K;
					(K = T.extendedContentMessage) == null || K.previews.forEach(function(e) {
						var t = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMediaTransport.pb").ImageTransportSpec, e.payload), n = F(t, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE);
						x.mediaMetadata = n, B(r, n, P, "xma_preview", u);
					});
				}
				return x;
			} else if (T.audioMessage != null) {
				var Q, X = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").AudioTransportSpec, (Q = T.audioMessage) == null || (Q = Q.audio) == null ? void 0 : Q.payload);
				return $ = F(X, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.AUDIO), x.msgType = o("MAWMsgType").MSG_TYPE.PTT, x.mediaMetadata = $, B(r, $, P, "attachment", u), x;
			} else if (T.videoMessage != null) {
				var Y, J = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").VideoTransportSpec, (Y = T.videoMessage) == null || (Y = Y.video) == null ? void 0 : Y.payload), Z = O(J, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.VIDEO), ee = Z.mediaMetadata, te = Z.previewMetadata;
				return $ = ee, $ != null && $.xAttachmentType === o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF ? x.msgType = o("MAWMsgType").MSG_TYPE.GIF : x.msgType = o("MAWMsgType").MSG_TYPE.VIDEO, x.mediaMetadata = $, B(r, $, P, "attachment", u, te), x;
			} else if (T.imageMessage != null) {
				var ne, re = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").ImageTransportSpec, (ne = T.imageMessage) == null || (ne = ne.image) == null ? void 0 : ne.payload), oe = O(re, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.IMAGE), ae = oe.mediaMetadata, ie = oe.previewMetadata;
				return $ = ae, x.msgType = o("MAWMsgType").MSG_TYPE.IMAGE, x.mediaMetadata = $, B(r, $, P, "attachment", u, ie), x;
			} else if (T.stickerMessage != null) {
				var le, se, ue = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").StickerTransportSpec, (le = T.stickerMessage) == null || (le = le.sticker) == null ? void 0 : le.payload);
				if (((se = ue.integral) == null ? void 0 : se.receiverFetchId) != null) {
					var ce = o("WAParseMediaTransportProtocol").parseStickerReceiverFetchInfo(ue);
					return ce == null ? (D.MUSTFIX(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[MAWHandleEchoProtobufsRestoreApi] consumerMessage has no sticker receiver fetch info"]))), x) : (x.msgType = o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH, x.receiverFetchInfo = ce, x);
				}
				return $ = F(ue, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.STICKER), x.msgType = o("MAWMsgType").MSG_TYPE.STICKER, x.mediaMetadata = $, B(r, $, P, "attachment", u), x;
			} else if (T.documentMessage != null) {
				var de, me, pe = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").DocumentTransportSpec, (de = T.documentMessage) == null || (de = de.document) == null ? void 0 : de.payload);
				return $ = F(pe, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.DOCUMENT, (me = T.documentMessage) == null ? void 0 : me.fileName), x.msgType = o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE, x.mediaMetadata = $, B(r, $, P, "attachment", u), x;
			}
		} else if ((I == null || (h = I.obj.payload) == null || (h = h.applicationData) == null ? void 0 : h.revoke) != null) {
			var _e, fe = I == null || (_e = I.obj.payload) == null || (_e = _e.applicationData) == null || (_e = _e.revoke) == null || (_e = _e.key) == null ? void 0 : _e.id;
			if (fe == null) D.MUSTFIX(R || (R = babelHelpers.taggedTemplateLiteralLoose(["Unable to retrieve revoked message external id"])));
			else return x.revokedMsgExternalId = o("WAStanzaUtils").toStanzaId(fe), x.msgType = o("MAWMsgType").MSG_TYPE.REVOKED, x;
		}
		if ((I == null || (y = I.obj.payload) == null || (y = y.content) == null ? void 0 : y.bumpExistingMessage) != null) {
			var ge, he, ye, Ce = I == null || (ge = I.obj.payload) == null || (ge = ge.content) == null ? void 0 : ge.bumpExistingMessage, be = (he = Ce.key) == null ? void 0 : he.id;
			be != null && (l.has(be) || i.add(be), s.set(r, be));
			var ve = (ye = Ce.key) == null ? void 0 : ye.participant;
			if (ve == null) {
				var Se;
				ve = (Se = Ce.key) == null ? void 0 : Se.remoteJid;
			}
			if (ve == null) D.MUSTFIX(L || (L = babelHelpers.taggedTemplateLiteralLoose(["No author found for original message that was bumped - unable to restore"])));
			else {
				var Re = o("WAJids").unsafeCoerceToUserJid(ve), Le = Re === n ? o("WAJids").AUTHOR_ME : Re;
				return c.set(o("WAStanzaUtils").toStanzaId(r), Le), x.msgType = o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE, x;
			}
		}
		if ((I == null || (C = I.obj) == null || (C = C.payload) == null || (C = C.content) == null ? void 0 : C.noteReplyMessage) != null) {
			var Ee, ke, Ie = I == null || (Ee = I.obj) == null || (Ee = Ee.payload) == null || (Ee = Ee.content) == null ? void 0 : Ee.noteReplyMessage, Te = Ie.noteTimestampMs, De = Ie.noteText, xe = (ke = e.metadata) == null ? void 0 : ke.senderId;
			if (Te != null && typeof Te == "number" && xe != null && a != null) {
				var $e = o("MAWJids").toUserJid(xe), Pe = o("MAWJids").toUserJid(a), Ne = Pe === $e ? n : Pe, Me = {
					author: Ne === n ? o("WAJids").AUTHOR_ME : Ne,
					externalId: o("WAStanzaUtils").toStanzaId(r),
					ts: o("WATimeUtils").castMilliSecondsToUnixTime(Te),
					type: o("WAMsgType").NOTE_REPLY
				};
				if ((De == null ? void 0 : De.text) != null) {
					var we = {
						content: De == null ? void 0 : De.text,
						mentionedJids: De == null ? void 0 : De.mentionedJid.map(function(e) {
							return o("MAWJids").toUserJid(e);
						})
					};
					Me.msgContent = we;
				}
				x.noteReply = Me;
			}
			if (Ie.textContent != null) return x.msgType = o("MAWMsgType").MSG_TYPE.TEXT, x.decodedPayload = Ie.textContent, x;
			if (Ie.stickerContent != null) {
				var Ae = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").StickerTransportSpec, Ie.stickerContent.payload);
				return $ = F(Ae, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.STICKER), x.msgType = o("MAWMsgType").MSG_TYPE.STICKER, x.mediaMetadata = $, B(r, $, P, "attachment", u), x;
			} else if (Ie.videoContent != null) {
				var Fe = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").VideoTransportSpec, Ie.videoContent.payload);
				return $ = F(Fe, o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.VIDEO), $ != null && $.xAttachmentType === o("EchoMessageMediaFieldUtils").EchoMessageActMediaAttachmentType.GIF ? x.msgType = o("MAWMsgType").MSG_TYPE.GIF : x.msgType = o("MAWMsgType").MSG_TYPE.VIDEO, x.mediaMetadata = $, B(r, $, P, "attachment", u), x;
			}
		}
		if ((I == null || (b = I.obj) == null || (b = b.payload) == null || (b = b.content) == null ? void 0 : b.ravenMessageMsgr) != null) {
			var Oe, Be, We;
			if (x.ravenMsgEphemeralType = W(I == null || (Oe = I.obj) == null || (Oe = Oe.payload) == null || (Oe = Oe.content) == null || (Oe = Oe.ravenMessageMsgr) == null ? void 0 : Oe.ephemeralType), (I == null || (Be = I.obj) == null || (Be = Be.payload) == null || (Be = Be.content) == null || (Be = Be.ravenMessageMsgr) == null ? void 0 : Be.imageMessage) != null) {
				if (d == null || !d) {
					var qe;
					x.ravenUnstoredMedia = o("WAParseMediaTransportProtocol").decodeImageTransport(I == null || (qe = I.obj) == null || (qe = qe.payload) == null || (qe = qe.content) == null || (qe = qe.ravenMessageMsgr) == null || (qe = qe.imageMessage) == null ? void 0 : qe.payload, o("WATimeUtils").castMilliSecondsToUnixTime(x.sortOrderMs), "image");
				}
				x.ravenMsgMediaType = o("MAWMsg").MAWRavenMsgMediaType.IMAGE;
			} else if ((I == null || (We = I.obj) == null || (We = We.payload) == null || (We = We.content) == null || (We = We.ravenMessageMsgr) == null ? void 0 : We.videoMessage) != null) {
				if (d == null || !d) {
					var Ue, Ve = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMediaTransport.pb").VideoTransportSpec, I == null || (Ue = I.obj) == null || (Ue = Ue.payload) == null || (Ue = Ue.content) == null || (Ue = Ue.ravenMessageMsgr) == null || (Ue = Ue.videoMessage) == null ? void 0 : Ue.payload), He = o("WAParseMediaTransportProtocol").parseVideoMsg(Ve, o("WATimeUtils").castMilliSecondsToUnixTime(x.sortOrderMs), !1);
					He != null ? x.ravenUnstoredMedia = He : D.MUSTFIX(E || (E = babelHelpers.taggedTemplateLiteralLoose(["Decoded raven video unstored message is null - unable to restore"])));
				}
				x.ravenMsgMediaType = o("MAWMsg").MAWRavenMsgMediaType.VIDEO;
			}
			return x.msgType = o("MAWMsgType").MSG_TYPE.RAVEN, x;
		} else if ((I == null || (v = I.obj) == null || (v = v.payload) == null || (v = v.content) == null ? void 0 : v.pollCreationMessage) != null) {
			x.msgType = o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE;
			var Ge = I.obj.payload.content.pollCreationMessage, ze = Ge.encKey, je = Ge.name, Ke = Ge.options, Qe = Ge.selectableOptionsCount;
			return ze != null && je != null && Ke != null && (x.groupPollInfo = {
				encKey: ze,
				name: je,
				options: Ke.map(function(e) {
					var t = e.optionName;
					return t;
				}).filter(Boolean),
				selectableOptionsCount: Qe || 0
			}), x;
		}
		return I != null && U(x, I.obj), D.MUSTFIX(k || (k = babelHelpers.taggedTemplateLiteralLoose(["Unable to retrieve decoded protobuf from backup message - unsupported message type"]))), x;
	}
	function U(e, t) {
		var n, r, o, a, i, l, s, u, c, d, m, p, _, f;
		(t == null || (n = t.payload) == null || (n = n.content) == null ? void 0 : n.locationMessage) != null && (e.futureProofMessageType = "locationMessage"), (t == null || (r = t.payload) == null || (r = r.content) == null ? void 0 : r.liveLocationMessage) != null && (e.futureProofMessageType = "liveLocationMessage"), (t == null || (o = t.payload) == null || (o = o.content) == null ? void 0 : o.pollUpdateMessage) != null && (e.futureProofMessageType = "pollUpdateMessage"), (t == null || (a = t.payload) == null || (a = a.content) == null ? void 0 : a.viewOnceMessage) != null && (e.futureProofMessageType = "viewOnceMessage"), (t == null || (i = t.payload) == null || (i = i.content) == null ? void 0 : i.contactMessage) != null && (e.futureProofMessageType = "contactMessage"), (t == null || (l = t.payload) == null || (l = l.content) == null ? void 0 : l.extendedTextMessage) != null && (e.futureProofMessageType = "extendedTextMessage"), (t == null || (s = t.payload) == null || (s = s.content) == null ? void 0 : s.groupInviteMessage) != null && (e.futureProofMessageType = "groupInviteMessage"), (t == null || (u = t.payload) == null || (u = u.content) == null ? void 0 : u.commonSticker) != null && (e.futureProofMessageType = "commonSticker"), (t == null || (c = t.payload) == null || (c = c.content) == null ? void 0 : c.screenshotAction) != null && (e.futureProofMessageType = "screenshotAction"), (t == null || (d = t.payload) == null || (d = d.content) == null ? void 0 : d.extendedMessageContentWithSear) != null && (e.futureProofMessageType = "extendedMessageContentWithSear"), (t == null || (m = t.payload) == null || (m = m.content) == null ? void 0 : m.imageGalleryMessage) != null && (e.futureProofMessageType = "imageGalleryMessage"), (t == null || (p = t.payload) == null || (p = p.content) == null ? void 0 : p.paymentsTransactionMessage) != null && (e.futureProofMessageType = "paymentsTransactionMessage"), (t == null || (_ = t.payload) == null || (_ = _.applicationData) == null ? void 0 : _.metadataSync) != null && (e.futureProofMessageType = "metadataSync"), (t == null || (f = t.payload) == null || (f = f.applicationData) == null ? void 0 : f.aiBotResponse) != null && (e.futureProofMessageType = "aiBotResponse");
	}
	function V(e, t, n, r) {
		var a, i = (a = e.metadata) == null ? void 0 : a.messageId, l = o("decodeProtobuf").decodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, e.encryptedTransportMessage), s = o("WAParseMessageApplication").parseMessageApplication(l);
		if (s.type === "error") {
			D.MUSTFIX(I || (I = babelHelpers.taggedTemplateLiteralLoose(["Message contains unparseable message application - unable to restore message"])));
			return;
		}
		var u = l.metadata, c = u == null ? void 0 : u.quotedMessage, d = c == null ? void 0 : c.stanzaId;
		if (i != null && d != null && (n.has(d) || t.add(d), r.set(i, d)), s.subprotocolType === "armadillo") {
			var m = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAArmadilloApplication.pb").ArmadilloSpec, s.payload);
			return {
				metadata: u,
				obj: m
			};
		} else if (s.subprotocolType === "consumerMessage") return {
			metadata: u,
			obj: o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAConsumerApplication.pb").ConsumerApplicationSpec, s.payload)
		};
	}
	function H(e, t, n, r, o, a, i, l, s) {
		return e.map(function(e) {
			return G(e, t, n, r, o, a, i, l, s);
		});
	}
	function G(e, t, n, r, a, i, l, s, u) {
		i === void 0 && (i = new Map());
		var c = o("decodeProtobuf").decodeProtobuf(o("WAArmadilloBackupMessage.pb").BackupMessageSpec, e.toplevelProtobuf.decryptedProtobuf), d = q(c, e.toplevelProtobuf.protobufTimestampMS, t, e.otid, n, r, a, i, l, s, u), m = e.supplementalProtobufs;
		for (var p of m) {
			var _ = p[0], f = p[1], g = o("MessageBackupSupplementalKeyGenerator").parseIdentifierString(_);
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_EB_DECODE_MESSAGE_PROTOBUF_SUPPLEMENTAL,
				key: g.type
			});
			var h = o("decodeProtobuf").decodeProtobuf(o("WAArmadilloBackupMessage.pb").BackupMessageSpec, f.decryptedProtobuf);
			if (h.encryptedTransportMessage != null) switch (g.type) {
				case "raven_action_message": {
					var y = V(h, r, a, i), C = g.senderJid, b = C === t ? o("WAJids").AUTHOR_ME : C;
					if (y != null) {
						var v, S, R, L = y.obj, E = (v = L.payload) == null || (v = v.content) == null || (v = v.ravenActionNotifMessage) == null ? void 0 : v.actionTimestamp, k = (S = L.payload) == null || (S = S.content) == null || (S = S.ravenActionNotifMessage) == null ? void 0 : S.actionType;
						if (E != null && k != null && typeof E == "number" && ((R = L.payload) == null || (R = R.content) == null || (R = R.ravenActionNotifMessage) == null || (R = R.key) == null ? void 0 : R.id) != null) {
							var I, x, $, P, N = o("WAStanzaUtils").toStanzaId((I = L.payload) == null || (I = I.content) == null || (I = I.ravenActionNotifMessage) == null || (I = I.key) == null ? void 0 : I.id);
							if (((x = h.metadata) == null ? void 0 : x.timestampMs) != null && typeof (($ = h.metadata) == null ? void 0 : $.timestampMs) == "number" && ((P = h.metadata) == null ? void 0 : P.messageId) != null) {
								var M, w, A = (M = h.metadata) == null ? void 0 : M.messageId, F = o("WATimeUtils").castMilliSecondsToUnixTime((w = h.metadata) == null ? void 0 : w.timestampMs), O = o("WAStanzaUtils").toStanzaId(A), B = k === 0 ? o("MAWMsg").MAWRavenActionNotifType.PLAYED : k === 1 ? o("MAWMsg").MAWRavenActionNotifType.SCREENSHOTTED : o("MAWMsg").MAWRavenActionNotifType.FORCE_DISABLED, W = {
									ack: o("WAAckLevel").ACK.RECEIVED,
									actionTimestamp: o("WATimeUtils").castMilliSecondsToUnixTime(E),
									actionType: B,
									author: b,
									externalId: O,
									ravenActionToMsgExternalId: N,
									ts: F,
									type: o("MAWMsgType").MSG_TYPE.RAVEN_ACTION
								};
								d.ravenActionUnstoredMsg = W;
							}
						}
					}
					break;
				}
				case "reaction": {
					var U, H, G = (U = h.metadata) == null ? void 0 : U.messageId, z = (H = V(h, r, a, i)) == null || (H = H.obj.payload) == null || (H = H.content) == null ? void 0 : H.reactionMessage, j = o("WAJids").extractUserId(g.senderJid);
					z != null && j != null && d.reactionData.push({
						reaction: z,
						reactionExternalId: G,
						senderId: j,
						ts: o("WATimeUtils").castMilliSecondsToUnixTime(f.protobufTimestampMS)
					});
					break;
				}
				case "edit": {
					var K, Q, X = (K = V(h, r, a, i)) == null || (K = K.obj.payload) == null || (K = K.content) == null ? void 0 : K.editMessage, Y = (Q = h.metadata) == null ? void 0 : Q.senderId;
					if (X != null) {
						var J, Z = (J = X.key) == null ? void 0 : J.id, ee = X.timestampMs;
						if (Z != null && ee != null && Y != null && typeof ee == "number") {
							var te = o("MAWJids").toUserJid(Y), ne = te === t ? o("WAJids").AUTHOR_ME : te;
							d.editMsgData.push({
								author: ne,
								editMsgContent: X,
								externalId: o("WAStanzaUtils").toStanzaId(d.externalId),
								originalMsgExternalId: o("WAStanzaUtils").toStanzaId(Z),
								ts: o("WATimeUtils").castMilliSecondsToUnixTime(ee)
							});
						}
					}
					break;
				}
				case "poll_update": {
					var re, oe = V(h, r, a, i);
					if (oe == null) continue;
					var ae = (re = oe.obj.payload) == null || (re = re.content) == null ? void 0 : re.pollUpdateMessage;
					if (ae != null) {
						var ie = { externalId: o("WAStanzaUtils").toStanzaId(g.rawIdentifierString) };
						ae.addOption != null && (ie.addOption = ae.addOption), ae.vote != null && (ie.vote = ae.vote), ae.pollCreationMessageKey != null && (ie.pollCreationMessageKey = ae.pollCreationMessageKey), d.groupPollUpdateData != null ? d.groupPollUpdateData.push(ie) : d.groupPollUpdateData = [ie];
					}
					break;
				}
				case "unknown": {
					var le = _.split(":"), se = le[0];
					D.MUSTFIX(T || (T = babelHelpers.taggedTemplateLiteralLoose([
						"Unknown supplemental identifier. Identifier prefix: ",
						". Parts: ",
						""
					])), se || "null", le.length);
					break;
				}
				default: g.type;
			}
		}
		return a.add(e.otid), d;
	}
	l.removeDeprecatedProtobufRestoreArgs = x, l.createUnstoredDbContentFromProtobufObject = N, l.decodeProtobufArray = H, l.decodeDecryptedMessageProtobuf = G;
}), 98);
