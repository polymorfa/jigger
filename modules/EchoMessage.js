__d("EchoMessage", [
	"$InternalEnum",
	"EchoCommonUtils",
	"EchoDecodingUtils",
	"EchoEncodingUtils",
	"EchoMessageMediaFieldUtils",
	"EchoMessageMediaGroupFieldUtil",
	"EchoMessageQuoteFieldUtils",
	"EchoMessageReceiptStatusFieldUtils",
	"EchoMessageXMAFieldUtils",
	"FBLogger",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = "Message-ID", g = "Thread-ID", h = "Sort-Order", y = "Display-Timestamp", C = "Authoritative-Timestamp", b = "From", v = "Text", S = "Text-Size", R = "Send-Error", L = "Is-Tombstoned", E = "Expire-Timestamp", k = "Delete-Timestamp", I = "Ephemeral-Duration", T = "Message-Content-Type", D = "X-Message-Content-Type", x = "Message-Content-Subtype", $ = "Is-Forwarded", P = "X-Offline-Threading-ID", N = "X-Thread-ID", M = "X-Message-Placeholder-Type", w = "Reactions", A = "Reaction-Authoritative-Timestamps", F = "X-Reaction-Offline-Threading-IDs", O = "Echo-Serialization-Origin", B = "Revoke-Sent-Timestamp", W = "Revoke-Unsent-Timestamp", q = "Edit-Count", U = "Edit-Contents-", V = "Edit-Timestamps-", H = "Group-ID", G = "Group-Index", z = "Group-Size", j = "Receiver-Fetch-Id", K = "Message-Ephemerality-Type", Q = 1, X = (_ = n("$InternalEnum"))({
		NONE: "none",
		SMALL: "small",
		MEDIUM: "medium",
		LARGE: "large"
	}), Y = _({
		NONE: "none",
		UNSEND: "unsend"
	}), J = _({
		DECRYPTION_FAILURE: "decryption_failure",
		UNSUPPORTED_NEEDS_UPDATE: "unsupported_needs_update",
		TEXT: "text",
		ADMIN_MESSAGE: "admin_message",
		MEDIA: "media",
		XMA: "xma",
		NULL_STATE: "null_state",
		PLACEHOLDER: "placeholder"
	}), Z = _({
		UNKNOWN: "unknown",
		TEXT: "text",
		IMAGE: "image",
		VIDEO: "video",
		AUDIO: "audio",
		STICKER: "sticker",
		GIF: "gif",
		URL: "url",
		EPHEMERAL_SETTINGS: "ephemeral_settings",
		LOCATION: "location",
		DOCUMENT: "document",
		UNSEND: "unsend",
		SCREENSHOT_ACTION: "screenshot_action",
		REACTION: "reaction",
		XMA: "xma",
		VISUAL_MESSAGE_VIDEO: "visual_message_video",
		VISUAL_MESSAGE_IMAGE: "visual_message_image",
		VISUAL_MESSAGE_ACTION: "visual_message_action",
		SCREEN_RECORDING_ACTION: "screen_recording_action",
		MESSAGE_DELETE_FOR_ME: "message_delete_for_me",
		ENCRYPTED_BACKUP_NEW_DEVICE_ENROLLMENT: "encrypted_backup_new_device_enrollment",
		SENDER_KEY: "sender_key",
		DELETE_THREAD: "delete_thread",
		READ_THREAD: "read_thread",
		UNREAD_THREAD: "unread_thread",
		REACTION_UNSEND: "reaction_unsend",
		GROUP_INVITES: "group_invites",
		EPHEMERAL_SYNC_RESPONSE: "ephemeral_sync_response",
		BUMP: "bump"
	}), ee = _({
		NO_PLACEHOLDER: "0",
		DECRYPTION_FAILURE: "-1",
		CLIENT_NOT_SUPPORTED_NEED_UPDATE: "-2",
		UNAVIALABLE_DEVICE: "-3"
	}), te = _({
		UNKNOWN: "Unknown",
		WEB: "Web",
		MOBILE: "Mobile"
	});
	function ne(e) {
		var t = new Map();
		return ce(t, e), "mediaData" in e && e.mediaData && o("EchoMessageMediaFieldUtils").echoMessageSetMediaMetadataFields(t, e.mediaData), o("EchoEncodingUtils").echoEncodeFields(t);
	}
	function re(e, t) {
		var n, r = [], a = 0, i = new Set();
		return t.forEach(function(n, a, l) {
			var s = a.startsWith(U), u = a.startsWith(V);
			if (s || u) {
				var c = a.slice(s ? U.length : V.length);
				if (!i.has(c)) {
					var d, m;
					i.add(c);
					var p = (d = o("EchoDecodingUtils").echoDecodeStringField(t, "" + U + c).result) != null ? d : "", _ = ((m = o("EchoDecodingUtils").echoDecodeIntField(t, "" + V + c).result) != null ? m : 0) / 1e3;
					r.push({
						messageId: c,
						originalMessageId: e,
						text: p,
						timestamp: _
					});
				}
			}
		}), a = (n = o("EchoDecodingUtils").echoDecodeIntField(t, q).result) != null ? n : 0, {
			editCount: a,
			editHistory: r
		};
	}
	function oe(t) {
		var n = o("EchoDecodingUtils").echoDecodeFields(t);
		if (n.size === 0) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] fieldsMap is empty for the echo message"]))), null;
		var a = o("EchoDecodingUtils").echoDecodeStringField(n, f), i = o("EchoDecodingUtils").echoDecodeStringField(n, g), l = o("EchoDecodingUtils").echoDecodeIntField(n, h), _ = o("EchoDecodingUtils").echoDecodeIntField(n, y), q = o("EchoDecodingUtils").echoDecodeStringField(n, T), U = o("EchoDecodingUtils").echoDecodeStringField(n, D), V = o("EchoDecodingUtils").echoDecodeStringField(n, x);
		if (a.success && i.success && l.success) {
			var H = a.result;
			if (H == null) throw r("FBLogger")("messenger_web").mustfixThrow("The decoded messageId cannot be null");
			var G = i.result;
			if (G == null) throw r("FBLogger")("messenger_web").mustfixThrow("The decoded threadId cannot be null");
			var z = q == null ? void 0 : q.result;
			if (z == null) throw r("FBLogger")("messenger_web").mustfixThrow("The decoded contentTypeString cannot be null");
			var X = re(H, n), ee = X.editCount, te = X.editHistory, ne = {
				contentSubtype: le(V.result),
				contentType: ie(z),
				displayTimestampMs: _.success ? _.result : l.result,
				editCount: ee,
				editHistory: te,
				messageId: H,
				sortOrderMs: l.result,
				threadId: G
			}, oe = Z.cast(U.result);
			oe != null && (ne.xContentType = oe);
			var ce = o("EchoDecodingUtils").echoDecodeAddressField(n, b);
			ce.success && ce.result != null && (ne.from = ce.result);
			var de = o("EchoDecodingUtils").echoDecodeNullableBooleanField(n, L);
			de.success && de.result != null && (ne.isTombstoned = de.result);
			var me = o("EchoDecodingUtils").echoDecodeStringField(n, v);
			me.success && me.result != null && (ne.text = me.result);
			var pe = o("EchoDecodingUtils").echoDecodeStringField(n, S);
			if (pe.success && pe.result != null) {
				var _e = ae(pe.result);
				ne.textSize = _e;
			}
			var fe = o("EchoDecodingUtils").echoDecodeStringField(n, M);
			if (fe.success && fe.result != null) {
				var ge = se(fe.result);
				ne.xMessagePlaceholderType = ge;
			}
			var he = o("EchoDecodingUtils").echoDecodeStringField(n, R);
			he.success && he.result != null && (ne.sendError = he.result);
			var ye = o("EchoDecodingUtils").echoDecodeNullableIntField(n, E);
			ye.success && ye.result != null && (ne.expireTimestampMs = ye.result);
			var Ce = o("EchoDecodingUtils").echoDecodeNullableIntField(n, k);
			Ce.success && Ce.result != null && (ne.deleteTimestampMs = Ce.result);
			var be = o("EchoDecodingUtils").echoDecodeNullableIntField(n, I);
			be.success && be.result != null && (ne.ephemeralDurationInSec = be.result);
			var ve = o("EchoDecodingUtils").echoDecodeStringField(n, K);
			ve.success && ve.result != null && ve.result === "view_once" && (ne.viewOnce = !0);
			var Se = o("EchoDecodingUtils").echoDecodeNullableIntField(n, C);
			Se.success && Se.result != null && (ne.authoritativeTimestampMs = Se.result);
			var Re = o("EchoMessageReceiptStatusFieldUtils").echoMessageDecodeReceiptStatusDataFields(n);
			Re.length > 0 && (ne.receiptStatusList = Re);
			var Le = o("EchoDecodingUtils").echoDecodeNullableBooleanField(n, $);
			Le.success && Le.result != null && (ne.isForwarded = Le.result), o("EchoMessageMediaGroupFieldUtil").decodeMessageMediaGroupFields(n, ne);
			var Ee = o("EchoDecodingUtils").echoDecodeStringField(n, P);
			Ee.success && Ee.result != null && (ne.xOfflineThreadingId = Ee.result);
			var ke = o("EchoDecodingUtils").echoDecodeStringField(n, N);
			ke.success && ke.result != null && (ne.xThreadId = ke.result);
			var Ie = o("EchoDecodingUtils").echoDecodeStringField(n, O);
			Ie.success && Ie.result != null && (ne.serializationOrigin = ue(Ie.result));
			var Te = o("EchoDecodingUtils").echoDecodeNullableIntField(n, o("EchoCommonUtils").ECHO_COMMON_FIELD_DOCUMENT_VERSION);
			ne.version = Te.success && Te.result != null ? Te.result : Q;
			var De = o("EchoDecodingUtils").echoDecodeAddressListField(n, w);
			De.success && De.result != null && (ne.reactions = De.result);
			var xe = o("EchoDecodingUtils").echoDecodeAddressListField(n, A);
			xe.success && xe.result != null && (ne.reactionAuthoritativeTimestampMs = xe.result);
			var $e = o("EchoDecodingUtils").echoDecodeAddressListField(n, F);
			$e.success && $e.result != null && (ne.reactionXOfflineThreadingIds = $e.result);
			var Pe = o("EchoMessageQuoteFieldUtils").echoMessageDecodeQuoteFields(n);
			Pe != null && (ne.quoteData = Pe);
			var Ne = (ne == null ? void 0 : ne.contentType) === J.XMA && n.has(o("EchoMessageMediaFieldUtils").ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_TYPE) && (n.has(o("EchoMessageMediaFieldUtils").ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_OBJECT_ID) || n.has(o("EchoMessageMediaFieldUtils").ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_OBJECT_IDS)), Me = n.has(j);
			if (n.has(j)) {
				var we = o("EchoMessageMediaFieldUtils").decodeReceiverFetchData(n), Ae = o("EchoDecodingUtils").echoDecodeStringField(n, j), Fe = Ae.result, Oe = Ae.success;
				we == null || !Oe || Fe == null ? o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Failed to decode media data for Receiver Fetch, Message origin: ", ""])), ne.serializationOrigin) : (ne.receiverFetchData = we, ne.receiverFetchId = Fe);
			}
			if (((ne == null ? void 0 : ne.contentType) === J.MEDIA || Ne) && !Me) {
				var Be = o("EchoMessageMediaFieldUtils").echoMessageDecodeMediaDataFields(n, ne == null ? void 0 : ne.contentType, ne == null ? void 0 : ne.xContentType), We = "[labyrinth_web] mandatory media data is missing from media message, msgId: " + ne.messageId + ".";
				Be != null ? (Be.length !== 1 && Be.length !== 2 && ((ne == null ? void 0 : ne.contentType) === J.MEDIA && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" Message origin: ",
					""
				])), We, ne.serializationOrigin), (ne == null ? void 0 : ne.contentType) === J.XMA && o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" Message origin: ",
					""
				])), We, ne.serializationOrigin)), ne.mediaData = Be[0], Be.length === 2 && (ne.previewMediaData = Be[1])) : ((ne == null ? void 0 : ne.contentType) === J.MEDIA && o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" Message origin: ",
					""
				])), We, ne.serializationOrigin), (ne == null ? void 0 : ne.contentType) === J.XMA && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" Message origin: ",
					""
				])), We, ne.serializationOrigin));
			}
			if (ne.contentType === J.PLACEHOLDER && ne.contentSubtype === Y.UNSEND) {
				var qe = o("EchoDecodingUtils").echoDecodeNullableIntField(n, B);
				qe.success && qe.result != null && (ne.revokeSentTimestampMs = qe.result);
				var Ue = o("EchoDecodingUtils").echoDecodeNullableIntField(n, W);
				Ue.success && Ue.result != null && (ne.revokeUnsentTimestampMS = Ue.result);
			}
			if (ne.contentType === J.XMA) {
				var Ve = o("EchoMessageXMAFieldUtils").decodeXMAFields(n);
				if (Ve != null) ne.xmaData = Ve;
				else return o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] mandatory xma data is missing from xma message, msgId: ", ""])), ne.messageId), null;
			}
			return ne;
		} else return null;
	}
	function ae(e) {
		var t;
		return (t = X.cast(e)) != null ? t : X.NONE;
	}
	function ie(e) {
		var t;
		return (t = J.cast(e)) != null ? t : J.TEXT;
	}
	function le(e) {
		var t;
		return (t = Y.cast(e)) != null ? t : Y.NONE;
	}
	function se(e) {
		var t;
		return (t = ee.cast(e)) != null ? t : ee.NO_PLACEHOLDER;
	}
	function ue(e) {
		var t;
		return (t = te.cast(e)) != null ? t : te.UNKNOWN;
	}
	function ce(e, t) {
		var n, r;
		(r = o("EchoEncodingUtils")).echoSetStringField(e, f, t.messageId), r.echoSetStringField(e, g, t.threadId), r.echoSetIntField(e, h, t.sortOrderMs), r.echoSetIntField(e, y, t.displayTimestampMs), r.echoSetIntField(e, C, t.authoritativeTimestampMs), r.echoSetAddressField(e, b, t.from), r.echoSetStringField(e, v, t.text), t.textSize != null && o("EchoEncodingUtils").echoSetStringField(e, S, t.textSize), t.xMessagePlaceholderType != null && o("EchoEncodingUtils").echoSetStringField(e, M, t.xMessagePlaceholderType), o("EchoEncodingUtils").echoSetStringField(e, R, t.sendError), o("EchoEncodingUtils").echoSetBooleanField(e, L, t.isTombstoned), o("EchoEncodingUtils").echoSetIntField(e, E, t.expireTimestampMs), o("EchoEncodingUtils").echoSetIntField(e, k, t.deleteTimestampMs), o("EchoEncodingUtils").echoSetIntField(e, I, t.ephemeralDurationInSec), t.contentType != null && o("EchoEncodingUtils").echoSetStringField(e, T, t.contentType), t.xContentType != null && o("EchoEncodingUtils").echoSetStringField(e, D, t.xContentType), o("EchoMessageReceiptStatusFieldUtils").echoMessageSetReceiptStatusDataFields(e, t.receiptStatusList), o("EchoEncodingUtils").echoSetBooleanField(e, $, t.isForwarded), o("EchoEncodingUtils").echoSetStringField(e, P, t.xOfflineThreadingId), o("EchoEncodingUtils").echoSetStringField(e, N, t.xThreadId), o("EchoEncodingUtils").echoSetIntField(e, o("EchoCommonUtils").ECHO_COMMON_FIELD_DOCUMENT_VERSION, t.version), t.contentSubtype != null && o("EchoEncodingUtils").echoSetStringField(e, x, t.contentSubtype), o("EchoEncodingUtils").echoSetAddressListField(e, w, t.reactions), o("EchoEncodingUtils").echoSetAddressListField(e, A, t.reactionAuthoritativeTimestampMs), o("EchoEncodingUtils").echoSetAddressListField(e, F, t.reactionXOfflineThreadingIds), o("EchoMessageQuoteFieldUtils").echoMessageSetQuoteFields(e, t), t.serializationOrigin != null && o("EchoEncodingUtils").echoSetStringField(e, O, t.serializationOrigin), t.revokeSentTimestampMs != null && o("EchoEncodingUtils").echoSetIntField(e, B, t.revokeSentTimestampMs), t.revokeUnsentTimestampMS != null && o("EchoEncodingUtils").echoSetIntField(e, W, t.revokeUnsentTimestampMS), o("EchoMessageMediaGroupFieldUtil").echoMessageSetMediaGroupFields(e, t);
		var a = t.xmaData;
		a != null && o("EchoMessageXMAFieldUtils").echoMessageSetXMAFields(e, a), ((n = t.editHistory) == null ? void 0 : n.length) > 0 && (o("EchoEncodingUtils").echoSetIntField(e, q, t.editCount), t.editHistory.forEach(function(t) {
			var n = t.messageId;
			n != null && (o("EchoEncodingUtils").echoSetStringField(e, U + n, t.text), o("EchoEncodingUtils").echoSetIntField(e, V + n, t.timestamp * 1e3));
		})), t.receiverFetchId != null && o("EchoEncodingUtils").echoSetStringField(e, j, t.receiverFetchId);
	}
	l.ECHO_SERIALIZATION_ORIGIN = O, l.ECHO_MESSAGE_FIELD_NAME_EDIT_COUNT = q, l.ECHO_MESSAGE_FIELD_NAME_EDIT_CONTENT_PREFIX = U, l.ECHO_MESSAGE_FIELD_NAME_EDIT_TS_PREFIX = V, l.ECHO_MESSAGE_FIELD_GROUP_ID = H, l.ECHO_MESSAGE_FIELD_GROUP_INDEX = G, l.ECHO_MESSAGE_FIELD_GROUP_SIZE = z, l.ECHO_MESSAGE_FIELD_RECEIVER_FETCH_ID = j, l.ECHO_MESSAGE_FIELD_NAME_EPHEMERALITY_TYPE = K, l.ECHO_MESSAGE_MIGRATION_DOCUMENT_VERSION = Q, l.MessageTextSize = X, l.EchoMessageContentSubtype = Y, l.EchoMessageContentType = J, l.EchoXMessageContentType = Z, l.EchoMessagePlaceholderType = ee, l.EchoSerializationOriginType = te, l.encodeEchoMessage = ne, l.decodeEchoMessage = oe;
}), 98);
