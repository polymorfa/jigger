__d("MAWBridgeXMAShareTombstonedHandler", [
	"FBLogger",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		var i = String(a.xmaId);
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeXMAShareTombstonedHandler", function(t, l) {
			return t.attachments.get(l, a.msgId, i).then(function(s) {
				if (s == null) return (e || (e = n("Promise"))).resolve();
				var u = [
					s.defaultCtaId,
					s.attachmentCta1Id,
					s.attachmentCta2Id,
					s.attachmentCta3Id
				].filter(Boolean), c = u.map(function(e) {
					return t.attachment_ctas.delete(e);
				});
				return (e || (e = n("Promise"))).all(c).then(function() {
					return o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachments).getKeyRange(l, a.msgId, i)).then((function() {
						var o = n("asyncToGeneratorRuntime").asyncToGenerator(function* (o) {
							if (o != null) {
								var a = babelHelpers.extends({}, o, {
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
								yield t.attachments.put(a);
							} else r("FBLogger")("messenger_web_sharing").blameToPreviousFrame().mustfix("Trying to tombstone a secure xma attachment but no existing attachment");
							return (e || (e = n("Promise"))).resolve();
						});
						return function(e) {
							return o.apply(this, arguments);
						};
					})());
				});
			});
		});
	}
	l.call = s;
}), 98);
