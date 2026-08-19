__d("EchoMessageMediaFieldUtils", [
	"$InternalEnum",
	"EchoDecodingUtils",
	"EchoEncodingUtils",
	"EchoMessage",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R = "X-Object-Id", L = "X-Attachment-Object-Ids", E = "Attachment-Type", k = "Content-Type", I = "X-Encrypted-Hash", T = "X-Attachment-Type", D = "X-Backup-Ent-Fbid", x = "X-Backup-Status", $ = "X-Content-Type", P = "X-Direct-Path", N = "Height", M = "X-Media-Key", w = "X-Media-Key-Timestamp", A = "Playable-Duration", F = "Preview-Height", O = "Preview-Content-Type", B = "Preview-Width", W = "Size", q = "Width", U = "X-Plaintext-Hash", V = "File-Name", H = "Header-Attribution-Content-Type", G = (S = n("$InternalEnum"))({
		IMAGE: "image",
		STICKER: "sticker",
		VIDEO: "video",
		GIF: "animated_image",
		PTT: "audio",
		XMA: "xma",
		DOCUMENT: "document"
	}), z = S({
		IMAGE_JPEG: "image/jpeg",
		IMAGE_PNG: "image/png",
		STICKER: "image/webp",
		GIF: "image/gif",
		AUDIO_MP4: "audio/mp4",
		AUDIO_WAV: "audio/wav",
		XMA: "xma"
	}), j = S({
		INVALID: "-1",
		IMAGE: "0",
		PTT: "1",
		AUDIO: "2",
		DOCUMENT: "3",
		VIDEO: "4",
		GIF: "5",
		STICKER: "6",
		PROFILE_PICTURE: "7",
		APP_STATE: "8",
		HISTORY_SYNC: "9",
		THUMBNAIL_IMAGE: "10",
		THUMBNAIL_VIDEO: "11",
		THUMBNAIL_GIF: "12",
		THUMBNAIL_DOCUMENT: "13",
		THUMBNAIL_LINK: "14",
		NOVI_IMAGE: "15",
		NOVI_VIDEO: "16",
		KYCID: "17",
		WAFFLE_IMAGE: "18",
		WAFFLE_VIDEO: "19",
		WAFFLE_GIF: "20",
		PAYMENT_BG_IMAGE: "21",
		XMA_IMAGE: "22",
		PAYMENT_BR_DOCUMENT: "23",
		BIZ_COVER_PHOTO: "24",
		MESSENGER_PREVIEW: "25"
	}), K = S({
		FULL: "full",
		PREVIEW: "preview"
	});
	function Q(t, n) {
		var r = t.attachmentObjectId, a = t.attachmentType, i = t.backupEntFbid, l = t.directPath, p = t.filename, _ = t.encryptedHash, f = t.height, g = t.mediaBackupStatus, h = t.mediaContentType, y = t.mediaKey, C = t.mediaKeyTimestamp, b = t.mediaPlayableDuration, v = t.plaintextHash, S = t.previewContentHeight, R = t.previewContentType, L = t.previewContentWidth, E = t.size, k = t.width, I = t.xAttachmentType, T = t.xContentType, D = t.xmaData, x = t.mediaEntryData;
		if (r == null) o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing attachment object id from required media metadata fields, msgId: ", ""])), n);
		else if (a == null) o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing attachment type from required media metadata fields, msgId: ", ""])), n);
		else if (l == null) o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing direct path field from required media metadata fields, msgId: ", ""])), n);
		else if (v == null) o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing plaintextHash field from required media metadata fields, msgId: ", ""])), n);
		else if (T == null) o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing xContentType field from required media metadata fields, msgId: ", ""])), n);
		else if (I == null) o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing xAttachmentType field from required media metadata fields, msgId: ", ""])), n);
		else return {
			attachmentObjectId: r,
			attachmentType: a,
			backupEntFbid: i,
			directPath: l,
			encryptedHash: _,
			filename: p,
			height: f,
			mediaBackupStatus: g,
			mediaContentType: h,
			mediaEntryData: x,
			mediaKey: y,
			mediaKeyTimestamp: C,
			mediaPlayableDuration: b,
			plaintextHash: v,
			previewContentHeight: S,
			previewContentType: R,
			previewContentWidth: L,
			size: E,
			width: k,
			xAttachmentType: I,
			xContentType: T,
			xmaData: D
		};
	}
	function X(e, t) {
		var n;
		(n = o("EchoEncodingUtils")).echoSetStringField(e, R, t.attachmentObjectId), n.echoSetStringField(e, E, t.attachmentType), n.echoSetStringField(e, U, t.plaintextHash), n.echoSetStringField(e, I, t.encryptedHash), n.echoSetIntField(e, W, t.size), n.echoSetStringField(e, M, t.mediaKey), n.echoSetIntField(e, w, t.mediaKeyTimestamp), n.echoSetStringField(e, P, t.directPath), t.mediaContentType != null && o("EchoEncodingUtils").echoSetStringField(e, k, t.mediaContentType), o("EchoEncodingUtils").echoSetIntField(e, q, t.width), o("EchoEncodingUtils").echoSetIntField(e, N, t.height), t.previewContentType != null && o("EchoEncodingUtils").echoSetStringField(e, O, t.previewContentType), t.headerAttributionContentType != null && o("EchoEncodingUtils").echoSetStringField(e, H, t.headerAttributionContentType), o("EchoEncodingUtils").echoSetIntField(e, B, t.previewContentWidth), o("EchoEncodingUtils").echoSetIntField(e, F, t.previewContentHeight), o("EchoEncodingUtils").echoSetIntField(e, A, t.mediaPlayableDuration), t.xAttachmentType != null && o("EchoEncodingUtils").echoSetStringField(e, T, t.xAttachmentType), o("EchoEncodingUtils").echoSetStringField(e, $, t.xContentType), o("EchoEncodingUtils").echoSetStringField(e, D, t.backupEntFbid), o("EchoEncodingUtils").echoSetStringField(e, x, t.mediaBackupStatus), o("EchoEncodingUtils").echoSetStringField(e, V, t.filename);
	}
	function Y(e, t, n) {
		var r = {}, a = !1, i = !1, l = !1;
		if (ne(e)) {
			var s = re(e, t, n);
			if (s == null) return o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] multi blob media message: primary attachment object id is null. msgType: ",
				" mediaType: ",
				""
			])), t, n), null;
			s.length !== 2 && o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Unable to get primary and secondary attachment object ids"])));
			var u = !1, c = !1, d = !1, m = s[0], f = s[1], g = {};
			if (a = ee(e, r, m), u = ee(e, g, f), i = Z(e, r, t, m, m), c = Z(e, g, t, f, m), l = J(e, r, m), d = J(e, g, f), !a || !i || !l || !u || !c || !d) return null;
			var h = o("EchoDecodingUtils").echoDecodeStringField(e, "X-Offline-Threading-ID").result, y = Q(r, h), C = Q(g, h);
			if (y != null && C != null) return [y, C];
		} else {
			if (a = ee(e, r), i = Z(e, r, t), l = J(e, r), !a || !i || !l) return null;
			var b = Q(r);
			if (b != null) return [b];
		}
		return null;
	}
	function J(e, t, n) {
		var r, a = o("EchoDecodingUtils").echoDecodeStringField(e, "X-Offline-Threading-ID").result, i = (r = e.get(o("EchoMessage").ECHO_SERIALIZATION_ORIGIN)) != null ? r : "", l = [
			{
				fieldName: "height",
				id: N
			},
			{
				fieldName: "width",
				id: q
			},
			{
				fieldName: "size",
				id: W
			},
			{
				fieldName: "previewContentHeight",
				id: F
			},
			{
				fieldName: "previewContentWidth",
				id: B
			},
			{
				fieldName: "mediaKeyTimestamp",
				id: n != null ? n + "-" + w : w
			}
		], s = [{
			attachmentTypes: [j.VIDEO, j.AUDIO],
			fieldName: "mediaPlayableDuration",
			id: A
		}];
		for (var u of s) {
			var c = u.attachmentTypes, d = u.fieldName, m = u.id, p = o("EchoDecodingUtils").echoDecodeIntField(e, m), _ = p.result, g = p.success;
			if (g && _ != null) t[d] = _;
			else if (!(t.xAttachmentType != null && !te(c, t.xAttachmentType) || t.attachmentType === G.XMA)) return o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] Missing ",
				" from media fields. xAttachmentType: ",
				", AttachmentType: ",
				". EchoOrigin: ",
				" xOfflineThreadingId: ",
				""
			])), d, t.xAttachmentType, t.attachmentType, i, a), !1;
		}
		return l.map(function(n) {
			var r = n.fieldName, a = n.id, i = o("EchoDecodingUtils").echoDecodeIntField(e, a), l = i.result, s = i.success;
			s && l != null && (t[r] = l);
		}), !0;
	}
	function Z(e, t, n, r, a) {
		var i, l = o("EchoDecodingUtils").echoDecodeStringField(e, "X-Offline-Threading-ID").result, s, u, c, d = (i = e.get(o("EchoMessage").ECHO_SERIALIZATION_ORIGIN)) != null ? i : "", m = [{
			fieldName: "filename",
			id: V
		}];
		r != null && a != null ? (t.attachmentObjectId = r, s = [
			{
				fieldName: "plaintextHash",
				id: r + "-" + U
			},
			{
				fieldName: "directPath",
				id: r + "-" + P
			},
			{
				fieldName: "xContentType",
				id: r + "-" + $
			}
		], m.push({
			fieldName: "mediaKey",
			id: r + "-" + M
		}), u = a + "-" + D, c = r + "-" + I) : (s = [
			{
				fieldName: "attachmentObjectId",
				id: R
			},
			{
				fieldName: "plaintextHash",
				id: U
			},
			{
				fieldName: "directPath",
				id: P
			},
			{
				fieldName: "xContentType",
				id: $
			}
		], m.push({
			fieldName: "mediaKey",
			id: M
		}), u = D, c = I), m.push({
			fieldName: "backupEntFbid",
			id: u
		}), m.push({
			fieldName: "mediaContentType",
			id: k
		}), m.push({
			fieldName: "encryptedHash",
			id: c
		});
		var p = a != null ? a + "-" + x : x;
		m.push({
			fieldName: "mediaBackupStatus",
			id: p
		});
		var _ = [];
		for (var f of s) {
			var y = f.fieldName, C = f.id, b = o("EchoDecodingUtils").echoDecodeStringField(e, C), v = b.result, S = b.success;
			S && v != null ? t[y] = v : _.push(y);
		}
		if (_.length > 0) {
			var L = _.join(", ");
			return n === o("EchoMessage").EchoMessageContentType.XMA ? o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] Missing ",
				" from media fields. AttachmentType: ",
				" EchoOrigin: ",
				""
			])), L, t.attachmentType, d) : o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] Missing ",
				" from media fields. AttachmentType: ",
				" EchoOrigin: ",
				" xOfflineThreadingId: ",
				""
			])), L, t.attachmentType, d, l), !1;
		}
		return m.map(function(n) {
			var r = n.fieldName, a = n.id, i = o("EchoDecodingUtils").echoDecodeStringField(e, a), l = i.result, s = i.success;
			s && l != null && (t[r] = l);
		}), !0;
	}
	function ee(e, t, n) {
		var r, a = o("EchoDecodingUtils").echoDecodeStringField(e, "X-Offline-Threading-ID").result, i = (r = e.get(o("EchoMessage").ECHO_SERIALIZATION_ORIGIN)) != null ? r : "", l = o("EchoDecodingUtils").echoDecodeStringField(e, E), s = l.result === "file" ? G.DOCUMENT : G.cast(l.result);
		s != null && (t.attachmentType = s);
		var u = o("EchoDecodingUtils").echoDecodeStringField(e, O), c = z.cast(u.result);
		c != null && (t.previewContentType = c);
		var d = o("EchoDecodingUtils").echoDecodeStringField(e, H), m = d.result;
		m != null && (t.headerAttributionContentType = m);
		var p = o("EchoDecodingUtils").echoDecodeStringField(e, n != null ? n + "-" + T : T), _ = null;
		return p.success && p.result != null && (_ = oe(p.result), _ != null && (t.xAttachmentType = _)), s != null && (c != null || s === G.DOCUMENT || s === G.PTT) ? !0 : (o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
			"[labyrinth_web] Missing enum fields from media fields: attachmentType: ",
			" mediaPreviewContentType: ",
			" mediaAttachmentType: ",
			" EchoOrigin: ",
			" xOfflineThreadingId: ",
			""
		])), s, c, p, i, a), !1);
	}
	function te(e, t) {
		return e.reduce(function(e, n) {
			return e || n === t;
		}, !1);
	}
	function ne(e) {
		return e.has(L);
	}
	function re(e, t, n) {
		var r = o("EchoDecodingUtils").echoDecodeObjectIdListField(e, L), a = r.result, i = r.success;
		if (!i || a == null || a.length !== 2) return o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
			"[labyrinth_web] multi blob media message: can not parse objects ids. ",
			" msgType: ",
			" mediaType: ",
			""
		])), a, t, n), null;
		var l = a.find(function(t) {
			var n = t + "-" + x, r = o("EchoDecodingUtils").echoDecodeStringField(e, n), a = r.result, i = r.success;
			if (i && a != null) return !0;
		});
		if (l != null) {
			var s = l === a[0] ? a[1] : a[0];
			return [l, s];
		}
		if (l = a.find(function(t) {
			var n = t + "-" + $, r = o("EchoDecodingUtils").echoDecodeStringField(e, n), a = r.result, i = r.success;
			if (i && a != null && K.cast(a) === K.FULL) return !0;
		}), l != null) {
			var u = l === a[0] ? a[1] : a[0];
			return [l, u];
		}
		return a;
	}
	function oe(e) {
		var t = j.cast(e);
		return t == null && o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Invalid media attachment type: ", ""])), e), t != null ? t : j.INVALID;
	}
	function ae(e) {
		var t = {}, n = ee(e, t);
		if (!n) return null;
		var r = o("EchoDecodingUtils").echoDecodeStringField(e, k), a = o("EchoDecodingUtils").echoDecodeIntField(e, N), i = o("EchoDecodingUtils").echoDecodeIntField(e, q), l = o("EchoDecodingUtils").echoDecodeStringField(e, E);
		return !r.success || !a.success || !i.success || !l.success || r.result == null || a.result == null || i.result == null || l.result == null ? (o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing media fields for receiver fetch"]))), null) : {
			mimetype: r.result,
			previewHeight: a.result,
			previewWidth: i.result,
			type: l.result
		};
	}
	l.ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_OBJECT_ID = R, l.ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_OBJECT_IDS = L, l.ECHO_MESSAGE_FIELD_NAME_ATTACHMENT_TYPE = E, l.AttachmentType = G, l.EchoMessageMediaPreviewType = z, l.EchoMessageActMediaAttachmentType = j, l.convertMediaMetadataDetailsToMediaMetadata = Q, l.echoMessageSetMediaMetadataFields = X, l.echoMessageDecodeMediaDataFields = Y, l.setMediaIntFields = J, l.setMediaEnumFields = ee, l.getAttachmentObjectIdsFromMultiBlobMediaMsg = re, l.decodeReceiverFetchData = ae;
}), 98);
