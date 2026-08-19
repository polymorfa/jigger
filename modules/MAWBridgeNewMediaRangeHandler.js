__d("MAWBridgeNewMediaRangeHandler", [
	"I64",
	"LSFactory",
	"LSIntEnum",
	"LSUpsertAttachmentRangeStoredProcedure",
	"MAWMediaGalleryEBTaggingUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"cr:20238",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, a.threadJid, "MAWBridgeNewMediaRangeHandler", function(t, i) {
			var l = (e || (e = o("I64"))).of_float(a.earliestLoadedMediaTs), u = a.mediaGalleryGroup, c = n("cr:20238") != null ? n("cr:20238").getMediaRestoreEBRange(u).getRange(i) : null, d = !!(c != null && c.hasMoreBefore) && o("MAWMediaGalleryEBTaggingUtils").isMediaGalleryGroupSupportedForTaggedRestore(u), m = a.hasMoreBefore || d;
			return r("LSUpsertAttachmentRangeStoredProcedure")(r("LSFactory")(t), {
				hasMoreBefore: m,
				mediaGroup: (s || (s = o("LSIntEnum"))).ofNumber(u),
				newLastLoadedMessageId: a.lastLoadedMessageId,
				newMinTs: l,
				threadKey: i
			});
		});
	}
	function c(e, t) {
		return u(e, t).then(r("emptyFunction"));
	}
	l.call = c;
}), 98);
