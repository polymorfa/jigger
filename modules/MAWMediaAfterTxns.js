__d("MAWMediaAfterTxns", [
	"MAWBridgeTypesCreators",
	"MAWDbMedia",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWMediaType",
	"MAWMediaUtils",
	"MAWRavenUtils",
	"MpsMediaEntryCache",
	"MpsTypes",
	"WAHashUtils",
	"WAMediaUtils",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l, u) {
		return a.messages.where("msgId").anyOf(t.msgIds).toArray().then(function(c) {
			var d = e.threadJid, m = o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(c, d), p = o("MAWMediaUtils").createHdTypesForBridgeMedia(c), _ = e.ravenEphemeralType != null && e.ravenEphemeralMediaState != null ? o("MAWBridgeTypesCreators").createBridgeMedia({
				chatJid: d,
				filteredMsgIds: m,
				hasMediaForUI: n,
				hdTypes: p,
				media: t,
				ravenSettings: o("MAWRavenUtils").deriveRavenSettings(e.ravenEphemeralType, e.ravenEphemeralMediaState),
				sortOrderMs: e.sortOrderMs,
				transportKey: l
			}) : o("MAWBridgeTypesCreators").createBridgeMedia({
				chatJid: d,
				filteredMsgIds: m,
				hasMediaForUI: n,
				hdTypes: p,
				media: t,
				sortOrderMs: e.sortOrderMs,
				transportKey: l
			});
			if (u === !0) {
				var f, g, h, y = r("nullthrows")(t.mediaEntries.get(e.msgId)), C = o("WAMediaUtils").decodeMediaEntryData(y), b = (f = (g = t.validatedImageInfo) == null ? void 0 : g.thumbnailPlaintextHash) != null ? f : (h = t.validatedVideoInfo) == null ? void 0 : h.thumbnailPlaintextHash;
				if (b == null) {
					var v = C.downloadableThumbnail;
					(v == null ? void 0 : v.fileSha256) != null && (b = o("WAHashUtils").toPlaintextHash(v.fileSha256));
				}
				o("MpsMediaEntryCache").storeEntry({
					decodedMediaEntry: C,
					mediaEntry: y,
					mediaKeyTimestamp: t.ts,
					message: {
						messageId: o("MpsTypes").toMessageId(e.externalId),
						threadId: o("MpsTypes").toThreadId(e.threadJid)
					},
					plaintextHash: t.plaintextHash,
					serverMediaType: r("nullthrows")(o("MAWMediaType").getMediaType(t.mediaType)),
					thumbnailHash: b
				});
			}
			return s(a, babelHelpers.extends({}, _, { skipShouldUpdateHasMore: i }), void 0, u);
		});
	}
	function s(e, t, n, r) {
		return u(t) ? o("MAWMediaUtils").getBridgeMediaAnnotatedForDisplay(e, t, n).then(function(e) {
			o("MAWIndexedDb").afterTransaction({
				tag: "NewMedia",
				value: e
			}, r);
		}) : (o("MAWIndexedDb").afterTransaction({
			tag: "NewMedia",
			value: t
		}, r), o("MAWDexieTable").dexieResolve());
	}
	function u(e) {
		if (e.ephemeralMediaState != null || e.ephemeralMediaViewMode != null) return !1;
		switch (e.mediaType) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE:
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO:
			case o("MAWDbMedia").MEDIA_TYPE.GIF:
			case o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE: return !0;
			default: return !1;
		}
	}
	l.handleNewMediaAfterTxn = e, l.handleNewMediaAfterTxnWithBridgeMedia = s;
}), 98);
