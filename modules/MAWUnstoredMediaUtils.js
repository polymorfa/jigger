__d("MAWUnstoredMediaUtils", ["MAWUnstoredMsgUtils", "WASortedLists"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e == null ? null : {
			accessibilitySummaryText: e.accessibilitySummaryText,
			mediaEntry: e.mediaEntry,
			mediaType: e.mediaType,
			msgIds: o("WASortedLists").emptySet(),
			plaintextHash: e.plaintextHash,
			size: e.size,
			ts: e.ts,
			validatedAudioInfo: e.validatedAudioInfo,
			validatedDocumentFileInfo: e.validatedDocumentFileInfo,
			validatedImageInfo: e.validatedImageInfo,
			validatedVideoInfo: e.validatedVideoInfo
		};
	}
	function s(t) {
		var n, r, a, i, l = t.unstoredXMA;
		if (l != null) {
			var s = l.unstoredAssociatedMedia, u = l.unstoredAssociatedMsg, c = l.unstoredFavicon, d = l.unstoredHeaderMedia, m = l.unstoredPreviews, p = l.xma;
			return {
				unstoredAssociatedMedia: (n = e(s)) != null ? n : void 0,
				unstoredAssociatedMsg: (r = o("MAWUnstoredMsgUtils").getUnstoredAssociatedMsg(u)) != null ? r : void 0,
				unstoredDbXMA: {
					author: p.author,
					contentRef: p.contentRef,
					ctas: p.ctas,
					defaultCTA: p.defaultCTA,
					externalId: p.externalId,
					headerTitle: p.headerTitle,
					isTombstoned: p.isTombstoned,
					maxSubtitleNumOfLines: p.maxSubtitleNumOfLines,
					maxTitleNumOfLines: p.maxTitleNumOfLines,
					overlayDescription: p.overlayDescription,
					overlayIconGlyph: p.overlayIconGlyph,
					overlayTitle: p.overlayTitle,
					subtitleText: p.subtitleText,
					targetExpiringAtSec: p.targetExpiringAtSec,
					targetId: p.targetId,
					targetType: p.targetType,
					targetUsername: p.targetUsername,
					threadJid: p.threadJid,
					titleText: p.titleText,
					xmaDataclass: p.xmaDataclass,
					xmaLayoutType: p.xmaLayoutType
				},
				unstoredFavicon: (a = e(c)) != null ? a : void 0,
				unstoredHeaderMedia: (i = e(d)) != null ? i : void 0,
				unstoredPreviews: m ? m.map(function(t) {
					return e(t);
				}).filter(Boolean) : void 0
			};
		}
	}
	l.getUnstoredMedia = e, l.getUnstoredXMA = s;
}), 98);
