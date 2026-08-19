__d("MAWBridgeXMAShareTombstonedHandler", [
	"FBLogger",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = String(t.xmaId);
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeXMAShareTombstonedHandler", function(e, a) {
			return e.attachments.get(a, t.msgId, n).then(function(i) {
				if (i == null) return Promise.resolve();
				var l = [
					i.defaultCtaId,
					i.attachmentCta1Id,
					i.attachmentCta2Id,
					i.attachmentCta3Id
				].filter(Boolean), s = l.map(function(t) {
					return e.attachment_ctas.delete(t);
				});
				return Promise.all(s).then(function() {
					return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(a, t.msgId, n)).then(async function(t) {
						if (t != null) {
							var n = babelHelpers.extends({}, t, {
								attachmentCta1Id: void 0,
								attachmentCta2Id: void 0,
								attachmentCta3Id: void 0,
								cta1Title: void 0,
								cta1Type: void 0,
								cta2Title: void 0,
								cta2Type: void 0,
								cta3Title: void 0,
								cta3Type: void 0,
								defaultCtaId: void 0,
								defaultCtaTitle: void 0,
								maxSubtitleNumOfLines: void 0,
								maxTitleNumOfLines: void 0,
								previewHeight: void 0,
								previewHeightLarge: void 0,
								previewWidth: void 0,
								previewWidthLarge: void 0,
								subtitleText: void 0,
								titleText: void 0
							});
							await e.attachments.put(n);
						} else r("FBLogger")("messenger_web_sharing").blameToPreviousFrame().mustfix("Trying to tombstone a secure xma attachment but no existing attachment");
						return Promise.resolve();
					});
				});
			});
		});
	}
	l.call = e;
}), 98);
