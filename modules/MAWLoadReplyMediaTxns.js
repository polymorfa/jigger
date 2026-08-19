__d("MAWLoadReplyMediaTxns", [
	"MAWBridgeReceiverFetchInfo",
	"MAWDbMedia",
	"MAWDbMsg",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWMediaUtils",
	"MAWMsgType",
	"MAWUserJidWrapper",
	"MAWXMAUtils",
	"MWPBumpEntityKey",
	"WAAssertUnreachable",
	"WAJids",
	"WALogger",
	"WAMsgType",
	"WAResultOrError",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _;
	function f(e, t, n) {
		if (r("gkx")("2419") && n != null) {
			var a = o("MAWMediaUtils").genHMACPlaintextHash(n);
			return e.media.where("hashedPlaintextHash").equals(a).first();
		} else return e.media.get(t);
	}
	var g = new Set([
		(_ = o("MAWDbMedia")).MEDIA_TYPE.IMAGE,
		_.MEDIA_TYPE.GIF,
		_.MEDIA_TYPE.PTT,
		_.MEDIA_TYPE.STICKER,
		_.MEDIA_TYPE.VIDEO,
		_.MEDIA_TYPE.DOCUMENT_FILE
	]);
	function h(e) {
		var t;
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE:
			case o("MAWDbMedia").MEDIA_TYPE.GIF:
			case o("MAWDbMedia").MEDIA_TYPE.STICKER:
				t = e.validatedImageInfo;
				break;
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO:
				t = e.validatedVideoInfo;
				break;
		}
		var n = t || {}, r = n.height, a = n.jpegThumbnailHeight, i = n.jpegThumbnailWidth, l = n.width;
		return {
			replyMediaPreviewHeight: a != null ? a : r,
			replyMediaPreviewWidth: i != null ? i : l
		};
	}
	function y(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return !0;
			case o("MAWMsgType").MSG_TYPE.XMA: return !0;
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("WAMsgType").NOTE_REPLY:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RAVEN: return !1;
			default: return r("WAAssertUnreachable")(e.type);
		}
	}
	function C(t, n, r) {
		if (n == null) return o("MAWDexieTable").dexieResolve();
		var a = f(t, n, r).then(function(e) {
			if (e == null) return o("WAResultOrError").makeError("reply_media_not_found");
			if (!g.has(e.mediaType)) return o("WAResultOrError").makeError("reply_media_type_unknown");
			var t = h(e), r = t.replyMediaPreviewHeight, a = t.replyMediaPreviewWidth;
			return n != null && e.plaintextHash == null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.reply_attachment_media_missing_plaintext_hash", "load_reply_media_txns_for_reply_type_'unknown'}"), o("WAResultOrError").makeResult({
				replyMediaId: n,
				replyMediaPreviewHeight: r,
				replyMediaPreviewWidth: a,
				replyPlaintextHash: e.plaintextHash
			});
		});
		return a.then(function(t) {
			if (t.success !== !0) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to fetch reply media with id ",
					": ",
					""
				])), n, t.error);
				return;
			}
			return t.value;
		});
	}
	function b(e, t) {
		var n = t.defaultPreviewMediaId;
		if (n == null) return o("MAWDexieTable").dexieResolve({ replyXMAId: t.xmaId });
		var r = f(e, n).then(function(e) {
			if (e == null) return o("WAResultOrError").makeError("reply_xma_media_not_found - " + t.targetType);
			if (!g.has(e.mediaType)) return o("WAResultOrError").makeError("reply_xma_media_type_unknown");
			var n = h(e), r = n.replyMediaPreviewHeight, a = n.replyMediaPreviewWidth;
			return o("WAResultOrError").makeResult({
				replyMediaPreviewHeight: r,
				replyMediaPreviewWidth: a,
				replyPlaintextHash: e.plaintextHash,
				replyXMAId: t.xmaId
			});
		});
		return r.then(function(e) {
			if (e.success !== !0) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to fetch reply media XMA with id ",
					": ",
					""
				])), t.xmaId, e.error);
				return;
			}
			return e.value;
		});
	}
	function v(e, t, n) {
		var r, a, i;
		n === void 0 && (n = !1);
		var l = ((r = t.quote) == null ? void 0 : r.content) || {}, s = l.author, u = l.externalId, c = l.mediaId, d = l.msgId, m = l.plaintextHash, p = l.type;
		if (((a = t.quote) == null ? void 0 : a.content) == null || !y((i = t.quote) == null ? void 0 : i.content)) return o("MAWDexieTable").dexieResolve();
		var _ = t.threadJid, f = s === o("MAWUserJidWrapper").getMyUserJid(), g = f ? o("WAJids").AUTHOR_ME : s;
		return p === o("MAWMsgType").MSG_TYPE.XMA ? S(e, o("MAWJidUtils").maybeToProtocolMsgId(g, _, u)) : p === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH ? E(e, d) : C(e, c, n ? null : m);
	}
	function S(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : o("MAWDbXMATxns").maybeGetXMAFromProtocolMsgId(e, t).then(function(t) {
			if (!(t == null || o("MAWXMAUtils").isXMAExpired(t.isTombstoned, t.targetExpiringAtSec))) return b(e, t);
		});
	}
	function R(e, t) {
		var n = t.author, r = t.externalId, a = t.mediaId, i = t.plaintextHash, l = t.threadJid, s = t.type, u = s === o("MAWMsgType").MSG_TYPE.XMA, c = s === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH;
		return !o("MAWDbMsg").isMediaMsg(t) && !u && !c ? o("MAWDexieTable").dexieResolve() : u ? S(e, o("MAWJidUtils").maybeToProtocolMsgId(n, l, r)) : c ? L(e, t.receiverFetchId) : C(e, a, i);
	}
	function L(e, t, n) {
		return t == null ? (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Missing receiverFetchId for getReplyMediaForReceiverFetchWithReceiverFetchId"]))), o("MAWDexieTable").dexieResolve()) : e.receiverFetchInfo.get({ receiverFetchId: t }).then(function(e) {
			if (e == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Missing receiverFetchInfo for getReplyMediaForReceiverFetchWithReceiverFetchId"])));
				return;
			}
			try {
				var t = o("MAWDbMedia").convertNumberToMediaId(parseInt(e.receiverFetchId, 10));
				return n != null && o("MAWIndexedDb").afterTransaction({
					tag: "NewReceiverFetchInfo",
					value: o("MAWBridgeReceiverFetchInfo").createBridgeReceiverFetchInfoPayloadFromDbInfo(n.threadJid, n.msgId, n.sortOrderMs, n.ts, e)
				}), {
					replyMediaId: t,
					replyMediaPreviewHeight: e.previewHeight,
					replyMediaPreviewWidth: e.previewWidth
				};
			} catch (e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unable to convert receiver fetch id to media id: ", ""])), e);
				return;
			}
		});
	}
	function E(e, t) {
		return t == null ? (o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Missing msgId for getReplyMediaForReceiverFetch"]))), o("MAWDexieTable").dexieResolve()) : e.messages.get({ msgId: t }).then(function(t) {
			if (t == null || t.type !== o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH || t.receiverFetchId == null) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Invalid msg for getReplyMediaForReceiverFetch with type: ", ""])), t == null ? void 0 : t.type);
				return;
			}
			return L(e, t.receiverFetchId, t);
		});
	}
	l.isMediaReplyContent = y, l.getReplyMediaForMsgQuote = v, l.getReplyMediaForMsg = R;
}), 98);
