__d("MAWLoadMediaApi", [
	"FBLogger",
	"LSThreadMediaGalleryGroup",
	"MAWBridgeMsg",
	"MAWDbChunkTxns",
	"MAWDbMediaTxns",
	"MAWDbMsg",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWMediaAfterTxns",
	"MAWTransactionMode",
	"WAHashUtils",
	"WALogger",
	"WATimeUtils",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = r("justknobx")._("1132"), m = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (c = o("MAWTransactionMode")).READONLY,
		media: c.READONLY,
		messages: c.READONLY,
		threads: c.READONLY
	}, "loadMoreMedia", function(t) {
		return (function(n) {
			var a = n.earliestLoadedMediaMessageId, i = n.earliestLoadedMediaTs, l = n.mediaGalleryGroup, c = n.pageSize, m = n.threadJid, _ = 0, f = !1, g = 0, h = !1, y = c != null ? c : d;
			return t.threads.get({ jid: m }).then(function(n) {
				if (n == null) throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to load media for thread. ThreadJid ", " does not exist"])), m);
				var r = t.messages.where(["threadJid", "sortOrderMs"]).between([n.jid, o("MAWDbMsg").MIN_MSG_SORT_ORDER], [n.jid, i], !0, !0);
				return r.filter(function(e) {
					return p(e, l);
				}).until(C).reverse().toArray();
			}).then(function(e) {
				var n, i, c = e.findIndex(function(e) {
					return e.msgId === a;
				}), d = f ? c + 1 : 0, p = e.slice(d, d + y + 1), _ = h, g = p[p.length - 1], C = Number.MAX_SAFE_INTEGER, b = (n = g == null ? void 0 : g.sortOrderMs) != null ? n : C;
				return o("MAWIndexedDb").afterTransaction({
					tag: "NewMediaRange",
					value: {
						earliestLoadedMediaTs: b,
						hasMoreBefore: _,
						lastLoadedMessageId: (i = g == null ? void 0 : g.msgId) != null ? i : a,
						mediaGalleryGroup: l,
						threadJid: m
					}
				}, !0), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[loadMoreMedia] foundMessages: ", ""])), p.map(function(e) {
					return "" + e.msgId;
				})), o("MAWDbMediaTxns").getMsgMediaPairFromMsgs(t, p).then(function(e) {
					return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[loadMoreMedia] msgMediaPairs: ", ""])), e.map(function(e) {
						var t = e[0], n = e[1];
						return "[" + t.msgId + ", " + o("WAHashUtils").sanitisePlaintextHash(n.plaintextHash) + "]";
					})), o("MAWDexieTable").dexieAll(e.map(function(e) {
						var n = e[0], a = e[1];
						return o("MAWDbChunkTxns").hasMediaChunk(t, a.hashedPlaintextHash).then(function(e) {
							return e || r("FBLogger")("messenger_web_media").warn("loadMoreMedia cannot find chunk for mediaId: %s", a.mediaId), o("MAWMediaAfterTxns").handleNewMediaAfterTxn(n, a, e, t, !0, void 0, !0);
						});
					})).then(function() {
						p.forEach(function(e) {
							o("MAWIndexedDb").afterTransaction({
								tag: "NewMsg",
								value: o("MAWBridgeMsg").createBridgeMsg(e)
							}, !0);
						});
					});
				});
			});
			function C(e) {
				return _++, e.msgId === a ? f = !0 : (f || i === Number.MAX_SAFE_INTEGER) && g++, g > y || _ > y && !f && e.sortOrderMs !== i ? (h = !0, !0) : !1;
			}
		});
	});
	function p(e, t) {
		var n = o("WATimeUtils").unixTime(), a = !1;
		switch (t) {
			case r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS:
				a = o("MAWDbMsg").isPhotoOrVideoMediaMsg(e);
				break;
			case r("LSThreadMediaGalleryGroup").FILES_ONLY:
				a = o("MAWDbMsg").isDocumentFileMediaMsg(e);
				break;
			case r("LSThreadMediaGalleryGroup").LINKS:
				a = o("MAWDbMsg").isXMAMsg(e);
				break;
		}
		var i = e.messageExpirationTs == null || e.messageExpirationTs > n;
		return a && i;
	}
	l.loadMoreMedia = m, l.filterForMediaMessages = p;
}), 98);
