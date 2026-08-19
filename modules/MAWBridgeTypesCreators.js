__d("MAWBridgeTypesCreators", [
	"FBLogger",
	"MAWAudioUtils",
	"MAWDbMsg",
	"MAWImageUtils",
	"MAWMsgType",
	"MAWUserJidWrapper",
	"WAJids",
	"WAMediaUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return { threadJid: e };
	}
	function s(e) {
		var t, n = e.ts;
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.REVOKED:
				n = (t = e.originalTs) != null ? t : e.ts;
				break;
			default: n = o("MAWDbMsg").getCanonicalTsFromMsg(e);
		}
		return {
			msgId: e.msgId,
			ts: n
		};
	}
	function u(e, t) {
		var n = t.map(s);
		return {
			messages: n,
			threadJid: e
		};
	}
	function c(e) {
		return {
			ravenMsgId: e.msgId,
			threadJid: e.threadJid
		};
	}
	function d(e, t) {
		return e.filter(function(e) {
			return t === e.threadJid;
		}).map(function(e) {
			return e.msgId;
		});
	}
	function m(e) {
		var t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R = e.chatJid, L = e.filteredMsgIds, E = e.hasMediaForUI, k = e.hdTypes, I = e.media, T = e.offlineAttachmentId, D = e.ravenSettings, x = e.sortOrderMs, $ = e.transportKey;
		switch (I.mediaType) {
			case "Image": return {
				duration: null,
				ephemeralMediaState: D == null ? void 0 : D.ephemeralMediaState,
				ephemeralMediaViewMode: D == null ? void 0 : D.ephemeralMediaViewMode,
				filesize: I.size,
				hasMedia: E,
				hasPreviewMedia: ((t = I.validatedImageInfo) == null ? void 0 : t.jpegThumbnail) != null,
				hdTypes: k,
				mediaId: I.mediaId,
				mediaType: I.mediaType,
				msgIds: L,
				offlineAttachmentId: T,
				plaintextHash: I.plaintextHash,
				previewHeight: (n = I.validatedImageInfo) == null ? void 0 : n.jpegThumbnailHeight,
				previewHeightLarge: (a = I.validatedImageInfo) == null ? void 0 : a.height,
				previewWidth: (i = I.validatedImageInfo) == null ? void 0 : i.jpegThumbnailWidth,
				previewWidthLarge: (l = I.validatedImageInfo) == null ? void 0 : l.width,
				sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
				threadJid: R,
				transportKey: $,
				ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts)
			};
			case "Video": return {
				duration: ((s = I.validatedVideoInfo) == null ? void 0 : s.duration) != null ? ((u = I.validatedVideoInfo) == null ? void 0 : u.duration) * 1e3 : 0,
				ephemeralMediaState: D == null ? void 0 : D.ephemeralMediaState,
				ephemeralMediaViewMode: D == null ? void 0 : D.ephemeralMediaViewMode,
				filesize: I.size,
				gifPlayback: ((c = I.validatedVideoInfo) == null ? void 0 : c.gifPlayback) === !0 || I.isVideoGif === !0,
				hasMedia: E,
				hasPreviewMedia: ((d = I.validatedVideoInfo) == null ? void 0 : d.jpegThumbnail) != null,
				mediaId: I.mediaId,
				mediaType: I.mediaType,
				msgIds: L,
				offlineAttachmentId: T,
				plaintextHash: I.plaintextHash,
				previewHeight: (m = I.validatedVideoInfo) == null ? void 0 : m.jpegThumbnailHeight,
				previewHeightLarge: (p = I.validatedVideoInfo) == null ? void 0 : p.height,
				previewWidth: (_ = I.validatedVideoInfo) == null ? void 0 : _.jpegThumbnailWidth,
				previewWidthLarge: (f = I.validatedVideoInfo) == null ? void 0 : f.width,
				sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
				threadJid: R,
				transportKey: $,
				ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts)
			};
			case "Ptt": return {
				duration: (g = I.validatedAudioInfo) != null && g.duration ? I.validatedAudioInfo.duration * 1e3 : null,
				filesize: I.size,
				hasMedia: E,
				mediaId: I.mediaId,
				mediaType: I.mediaType,
				msgIds: L,
				offlineAttachmentId: T,
				plaintextHash: I.plaintextHash,
				previewHeight: null,
				previewHeightLarge: null,
				previewWidth: null,
				previewWidthLarge: null,
				sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
				threadJid: R,
				transportKey: $,
				ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts),
				waveformData: ((h = I.validatedAudioInfo) == null ? void 0 : h.waveform) != null ? o("MAWAudioUtils").serializeWaveform(I.validatedAudioInfo.waveform) : void 0
			};
			case "Gif": return {
				accessibilitySummaryText: (y = I.accessibilitySummaryText) != null ? y : void 0,
				duration: null,
				filesize: I.size,
				hasMedia: E,
				mediaId: I.mediaId,
				mediaType: I.mediaType,
				msgIds: I.msgIds,
				offlineAttachmentId: T,
				plaintextHash: I.plaintextHash,
				previewHeight: (C = I.validatedImageInfo) == null ? void 0 : C.jpegThumbnailHeight,
				previewHeightLarge: (b = I.validatedImageInfo) == null ? void 0 : b.height,
				previewWidth: (v = I.validatedImageInfo) == null ? void 0 : v.jpegThumbnailWidth,
				previewWidthLarge: (S = I.validatedImageInfo) == null ? void 0 : S.width,
				sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
				threadJid: R,
				transportKey: $,
				ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts)
			};
			case "Sticker": {
				var P, N, M, w = o("MAWImageUtils").boundHeightWidth((P = I.validatedImageInfo) == null ? void 0 : P.jpegThumbnailHeight, (N = I.validatedImageInfo) == null ? void 0 : N.jpegThumbnailWidth, o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE), A = w.height, F = w.width;
				return {
					accessibilitySummaryText: (M = I.accessibilitySummaryText) != null ? M : void 0,
					duration: null,
					filesize: I.size,
					hasMedia: E,
					mediaId: I.mediaId,
					mediaType: I.mediaType,
					msgIds: I.msgIds,
					offlineAttachmentId: T,
					plaintextHash: I.plaintextHash,
					previewHeight: A,
					previewHeightLarge: A,
					previewWidth: F,
					previewWidthLarge: F,
					sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
					threadJid: R,
					transportKey: $,
					ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts)
				};
			}
			case "DocumentFile": {
				var O, B = {};
				for (var W of I.mediaEntries) {
					var q = W[0], U = W[1], V = o("WAMediaUtils").mediaEntryDataToRawData(I.plaintextHash, U), H = V.filename;
					H != null && (B[q] = H);
				}
				return {
					defaultFilename: (O = I.validatedDocumentFileInfo) == null ? void 0 : O.filename,
					duration: null,
					filenames: B,
					filesize: I.size,
					hasMedia: E,
					mediaId: I.mediaId,
					mediaType: I.mediaType,
					msgIds: L,
					offlineAttachmentId: T,
					plaintextHash: I.plaintextHash,
					previewHeight: null,
					previewHeightLarge: null,
					previewWidth: null,
					previewWidthLarge: null,
					sortOrderMs: o("WATimeUtils").castToMillisTime(x != null ? x : I.ts * 1e3),
					threadJid: R,
					transportKey: $,
					ts: o("WATimeUtils").castToUnixTime(x != null ? x / 1e3 : I.ts)
				};
			}
			default: throw I.mediaType, r("FBLogger")("messenger_web").mustfixThrow("[createBridgeMedia] Unsupported media type: " + I.mediaType);
		}
	}
	function p(e, t, n) {
		return {
			chatJid: e,
			deliveredWatermarkTs: n != null ? n : o("WATimeUtils").castToUnixTime(0),
			fbid: t,
			lastReadActionTs: o("WATimeUtils").castToUnixTime(0),
			lastReadWatermarkTs: o("WATimeUtils").castToUnixTime(0)
		};
	}
	function _(e) {
		var t = e.cannotReplyReason, n = e.folder, r = e.snippetParams, o = e.snippetSenderContactId, a = e.snippetType, i = e.threadJid;
		return {
			cannotReplyReason: t,
			folder: n,
			snippetContactIDs: r == null ? void 0 : r.contactIDs,
			snippetMentionJIDs: r == null ? void 0 : r.mentionJIDs,
			snippetParams: r == null ? void 0 : r.strings,
			snippetSenderContactId: o,
			snippetType: a,
			threadJid: i
		};
	}
	function f(e) {
		return {
			chatJid: e.groupJid,
			memberAddMode: e.memberAddMode,
			threadName: e.name
		};
	}
	var g = {
		snippetContactIDs: [],
		snippetMentionJIDs: [],
		snippetParams: [],
		snippetSenderContactId: null,
		snippetType: null
	};
	function h(e) {
		var t, n = e.bumpTimestampMs, r = e.description, o = e.isMessageAuthorMe, a = e.isUnbump, i = e.skipBumpTimestampValidation, l = e.skipServerThreadBump, s = e.snippetData, u = e.threadJid, c = s == null ? g : {
			snippetContactIDs: s.params.contactIDs,
			snippetMentionJIDs: (t = s.params.mentionJIDs) != null ? t : [],
			snippetParams: s.params.strings,
			snippetSenderContactId: s.senderContactId,
			snippetType: s.type
		};
		return babelHelpers.extends({}, c, {
			bumpTimestampMs: n,
			description: r,
			isMessageAuthorMe: o,
			isUnbump: a,
			skipBumpTimestampValidation: i != null ? i : !1,
			skipServerThreadBump: l != null ? l : !1,
			threadJid: u
		});
	}
	function y(e) {
		var t = e.author, n = e.chatJid, r = e.reaction, a = e.reactToMsgId, i = e.ts;
		return {
			actorId: o("WAJids").authorToUserId(t, o("WAJids").extractUserId(o("MAWUserJidWrapper").getMyUserJid())),
			chatJid: n,
			messageId: a,
			reaction: r,
			ts: i
		};
	}
	function C(e) {
		var t = o("WAJids").extractUserId(o("MAWUserJidWrapper").getMyUserJid()), n = e.author, r = e.chatJid, a = e.reactToMsgId;
		return {
			actorId: o("WAJids").authorToUserId(n, t),
			chatJid: r,
			messageId: a
		};
	}
	function b(e) {
		return {
			creationTs: e.creationTs,
			creator: e.creator,
			groupJid: e.groupJid,
			msgExpiration: e.msgExpiration,
			name: e.name,
			nameOwner: e.nameOwner,
			nameTs: e.nameTs,
			participantVersion: e.participantVersion
		};
	}
	function v(e) {
		var t = e.threadJid, n = e.inviteeJid;
		return {
			caption: e.caption,
			inviteCode: e.inviteCode,
			inviteeId: n,
			inviteExpireTs: e.inviteExpirationTs,
			inviterId: o("WAJids").extractUserId(e.inviterJid),
			threadJid: t
		};
	}
	function S(e) {
		return { threadJid: e };
	}
	function R(e, t, n) {
		return {
			senderId: o("WAJids").extractUserId(t),
			state: n,
			threadJid: e
		};
	}
	l.createBridgeUpdateE2EEMetadataParticipants = e, l.createBridgeDeleteMessages = u, l.createBridgeRavenAction = c, l.getMsgIdsFilteredByJid = d, l.createBridgeMedia = m, l.createBridgeReceivedReceipt = p, l.createBridgeUpdatedThread = _, l.createBridgeUpdatedGroupInfo = f, l.createBridgeBumpedThreadV2 = h, l.createBridgeUpsertReaction = y, l.createBridgeDeleteReaction = C, l.createBridgeGroupInfo = b, l.createBridgeGroupInvite = v, l.createBridgeDeleteGroupInvite = S, l.createBridgeReceivedChatState = R;
}), 98);
