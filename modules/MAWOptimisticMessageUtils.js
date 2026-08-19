__d("MAWOptimisticMessageUtils", [
	"I64",
	"LSAuthorityLevel",
	"LSHotEmojiSize",
	"LSIntEnum",
	"MAWAckLevel",
	"MAWAdminMsg",
	"MAWBumpThread",
	"MAWLocalizationType",
	"MAWMsgType",
	"MessagingAttachmentType",
	"ReQL",
	"WAJids",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return o("WATimeUtils").millisTime();
	}
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.threads.index("lastActivityTimestampMs")));
			return r == null || (e || (e = o("I64"))).equal(r.threadKey, n) ? null : (e || (e = o("I64"))).add(r.lastActivityTimestampMs, e.one);
		}), d.apply(this, arguments);
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.threadKey, r = yield c(e, n);
			yield o("MAWBumpThread").threadMutation_DEPRECATED({
				description: "MAWOptimisticMessageUtils",
				lastActivityTs: r,
				lastReadTs: r,
				threadKey: n,
				txn: e
			});
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.optimisticMediaAttachment, r = t.threadKey, a = C(n.type);
			if (a != null) {
				var i = yield c(e, r);
				yield o("MAWBumpThread").threadMutation_DEPRECATED({
					description: "MAWCreateOptimisticSecureMessageWithAttachment",
					lastActivityTs: i,
					lastReadTs: i,
					threadKey: r,
					txn: e
				});
			}
		}), f.apply(this, arguments);
	}
	function g(e) {
		var t = e.ephemeralSettings, n = e.externalId, r = e.threadJid, a = e.ts;
		return {
			ack: o("MAWAckLevel").ACK.partialOptimistic,
			altIndex: void 0,
			author: o("WAJids").AUTHOR_ME,
			ephemeralSetting: t != null ? t : void 0,
			externalId: n,
			isForwarded: !1,
			specialTextSize: void 0,
			threadJid: r,
			ts: o("WATimeUtils").castMilliSecondsToUnixTime(a)
		};
	}
	function h(e) {
		var t = e.commands, n = e.content, r = e.initiatingSource, o = e.isFirstMsg, a = e.mentionedJids, i = e.optimisticMsg, l = e.quote, s = e.specialTextSize, u = e.threadSource;
		return {
			commands: t == null ? void 0 : t.slice(),
			content: n,
			initiatingSource: r,
			isFirstMsg: o,
			isForwarded: !1,
			mentionedJids: a == null ? void 0 : a.slice(),
			openMessageOtid: void 0,
			openMessageParticipantCount: void 0,
			optimisticMsg: i,
			participantCount: void 0,
			quote: l,
			source: u,
			specialTextSize: s
		};
	}
	function y(t) {
		var n = t.optimisticMediaAttachment, a = t.threadKey, i = t.timestampMsI64, l = {
			actionUrl: t.actionUrl,
			attachmentFbid: t.offlineAttachmentId,
			attachmentIndex: (e || (e = o("I64"))).zero,
			attachmentType: t.attachmentType,
			authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			filename: n == null ? void 0 : n.filename,
			gifPlayback: t.gifPlayback,
			hasMedia: !e.equal(t.attachmentType, s.ofNumber(r("MessagingAttachmentType").XMA)),
			hasXma: e.equal(t.attachmentType, s.ofNumber(r("MessagingAttachmentType").XMA)),
			isHd: t.isHd,
			isSharable: !1,
			messageId: t.messageExternalId,
			offlineAttachmentId: t.offlineAttachmentId,
			receiverFetchId: t.contentRef,
			subtitleText: t.subtitleText,
			threadKey: a,
			timestampMs: i,
			titleText: t.titleText,
			transportKey: "WhatsApp",
			xmaContentType: t.xmaContentType
		};
		if (n) {
			if (l = babelHelpers.extends({}, l, {
				filesize: (e || (e = o("I64"))).of_float(n.file.size),
				previewUrl: n.url
			}), n.type === "image" || n.type === "animated_image" || n.type === "video" || n.type === "sticker") {
				var u, c, d, m;
				l = babelHelpers.extends({}, l, {
					previewHeight: (u = n.thumbnailSpec) != null && u.height ? (e || (e = o("I64"))).of_float((c = n.thumbnailSpec) == null ? void 0 : c.height) : void 0,
					previewWidth: (d = n.thumbnailSpec) != null && d.width ? (e || (e = o("I64"))).of_float((m = n.thumbnailSpec) == null ? void 0 : m.width) : void 0
				});
			}
			n.type === "audio" && (l = babelHelpers.extends({}, l, { waveformData: n.waveformString }));
		}
		return l;
	}
	function C(e) {
		switch (e) {
			case "animated_image": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_GIF);
			case "image": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_IMAGE);
			case "video": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_VIDEO);
			case "audio": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_AUDIO);
			case "document": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_ATTACHMENT);
			case "sticker": return o("MAWAdminMsg").buildLocalizedString([], [], o("MAWLocalizationType").CURRENT_USER_SEND_STICKER);
			default: return null;
		}
	}
	function b(e) {
		switch (e) {
			case (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER): return o("MAWMsgType").MSG_TYPE.STICKER;
			case (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE): return o("MAWMsgType").MSG_TYPE.IMAGE;
			case (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE): return o("MAWMsgType").MSG_TYPE.GIF;
			case (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO): return o("MAWMsgType").MSG_TYPE.VIDEO;
			case (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO): return o("MAWMsgType").MSG_TYPE.PTT;
			default: return o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE;
		}
	}
	function v(t) {
		if (t != null) {
			if ((e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").SMALL))) return 1;
			if ((e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").MEDIUM))) return 2;
			if ((e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").LARGE))) return 3;
		}
	}
	l.getOptimisticMessageTimestamp = u, l.getOptimisticThreadBumpTimestamp = c, l.optimisticBumpThread = m, l.optimisticBumpThreadMedia = _, l.buildMAWOptimisticBaseMsg = g, l.buildMAWBaseSendMsgArgs = h, l.buildOptimisticAttachment = y, l.lsAttachmentTypeToMsgType = b, l.getSpecialTextSize = v;
}), 98);
