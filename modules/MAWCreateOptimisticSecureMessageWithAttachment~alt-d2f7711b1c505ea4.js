__d("MAWCreateOptimisticSecureMessageWithAttachment", [
	"I64",
	"MAWCreateOptimisticSecureMessage",
	"MAWOptimisticMessageUtils",
	"MAWSendFileMsgTypes",
	"QPLUserFlow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n, a, i, l, s, c, d, m, p, _, f, g, h) {
		m(_);
		var y = o("MAWOptimisticMessageUtils").getOptimisticMessageTimestamp(), C = (e || (e = o("I64"))).of_float(y), b = await o("MAWCreateOptimisticSecureMessage").buildOptimisticLsMessage(t, n, a, i, "", l, void 0, d, void 0, _, C, u(c.type, h)), v = f == null ? void 0 : f.get(o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(s));
		v != null && (b = babelHelpers.extends({}, b, {
			groupId: v.groupId,
			groupIndex: (e || (e = o("I64"))).of_float(v.groupIndex),
			groupSize: e.of_float(v.groupSize)
		})), await n.messages.add(b);
		var S = o("MAWOptimisticMessageUtils").buildOptimisticAttachment({
			attachmentType: p,
			gifPlayback: h,
			isHd: g,
			messageExternalId: _,
			offlineAttachmentId: s,
			optimisticMediaAttachment: c,
			senderId: a,
			threadKey: l,
			timestampMsI64: C
		});
		return await n.attachments.add(S), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "after_create_optimistic_message", { instanceKey: d }), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "optimistic_bump_thread_start", { instanceKey: d }), await o("MAWOptimisticMessageUtils").optimisticBumpThreadMedia(n, {
			optimisticMediaAttachment: c,
			senderId: a,
			threadKey: l
		}), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "optimistic_bump_thread_end", { instanceKey: d }), {
			messageExternalId: _,
			offlineAttachmentId: o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(s),
			offlineMsgTimestamp: y
		};
	}
	function u(e, t) {
		switch (e) {
			case "animated_image": return 16384;
			case "image": return 2;
			case "video": return t === !0 ? 16384 : 2;
			case "audio": return 4;
			case "document": return 64;
			case "sticker": return 4096;
			default: return 1;
		}
	}
	l.createOptimisticMessageWithAttachment = s;
}), 98);
