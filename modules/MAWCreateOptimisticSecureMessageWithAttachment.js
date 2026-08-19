__d("MAWCreateOptimisticSecureMessageWithAttachment", [
	"I64",
	"MAWCreateOptimisticSecureMessage",
	"MAWOptimisticMessageUtils",
	"MAWSendFileMsgTypes",
	"QPLUserFlow",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r, o, a, i, l, s, c, d, m, p, _) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l, s, u, d, m, p, _, f, g, h) {
			m(_);
			var y = o("MAWOptimisticMessageUtils").getOptimisticMessageTimestamp(), C = (e || (e = o("I64"))).of_float(y), b = yield o("MAWCreateOptimisticSecureMessage").buildOptimisticLsMessage(t, n, a, i, "", l, void 0, d, void 0, _, C, c(u.type, h)), v = f == null ? void 0 : f.get(o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(s));
			v != null && (b = babelHelpers.extends({}, b, {
				groupId: v.groupId,
				groupIndex: (e || (e = o("I64"))).of_float(v.groupIndex),
				groupSize: e.of_float(v.groupSize)
			})), yield n.messages.add(b);
			var S = o("MAWOptimisticMessageUtils").buildOptimisticAttachment({
				attachmentType: p,
				gifPlayback: h,
				isHd: g,
				messageExternalId: _,
				offlineAttachmentId: s,
				optimisticMediaAttachment: u,
				senderId: a,
				threadKey: l,
				timestampMsI64: C
			});
			return yield n.attachments.add(S), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "after_create_optimistic_message", { instanceKey: d }), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "optimistic_bump_thread_start", { instanceKey: d }), yield o("MAWOptimisticMessageUtils").optimisticBumpThreadMedia(n, {
				optimisticMediaAttachment: u,
				senderId: a,
				threadKey: l
			}), r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "optimistic_bump_thread_end", { instanceKey: d }), {
				messageExternalId: _,
				offlineAttachmentId: o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(s),
				offlineMsgTimestamp: y
			};
		}), u.apply(this, arguments);
	}
	function c(e, t) {
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
