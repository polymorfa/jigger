__d("MAWMediaManagementTxns", [
	"EBLogger",
	"MAWBridgeTypesCreators",
	"MAWDbChunkTxns",
	"MAWDbMediaTxns",
	"MAWDbMsgTxns",
	"MAWDexieCastToPromise",
	"MAWDexieTable",
	"MAWMediaAfterTxns",
	"MAWMediaBackupTxns",
	"MAWMediaUtils",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWSupportedDocumentTypes",
	"MAWWriteMsgTxns",
	"MWFBLogger",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaUtils",
	"WAOdsEnums",
	"WASortedLists",
	"WATimeUtils",
	"emptyFunction",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = o("MWFBLogger").MWMediaLogger().tags(["MAWMediaManagementTxns"]), h = r("gkx")("23924");
	function y(e, t, n, r) {
		var a, i = n == null || t.type === o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE && (h || !o("MAWSupportedDocumentTypes").isAllowedType((a = n.validatedDocumentFileInfo) == null ? void 0 : a.filename));
		return o("MAWWriteMsgTxns").prepareMsgWriteData(e, t, r).then(function(e) {
			return babelHelpers.extends({}, e, { shouldDropDocument: i });
		});
	}
	function C(e, t, n, r, a) {
		a === void 0 && (a = !1);
		var i = {
			validatedAudioInfo: t.validatedAudioInfo,
			validatedDocumentFileInfo: t.validatedDocumentFileInfo,
			validatedImageInfo: t.validatedImageInfo,
			validatedVideoInfo: t.validatedVideoInfo
		}, l = o("WAMediaUtils").decodeMediaEntryData(t.mediaEntry), s = l.objectId != null ? o("WAMediaUtils").stringToDeliveryObjectId(l.objectId) : null;
		return R(e, n, r, t.plaintextHash, t.mediaType, t.size, t.mediaEntry, i, s, void 0, a, void 0, t.accessibilitySummaryText);
	}
	function b(e, t, n, r, a, i, l) {
		a === void 0 && (a = !1), l === void 0 && (l = !0);
		var s = o("MAWMediaUtils").genHMACPlaintextHash(t.plaintextHash), u = o("WAMediaUtils").decodeMediaEntryData(t.mediaEntry), c = u.objectId != null ? o("WAMediaUtils").stringToDeliveryObjectId(u.objectId) : null;
		return o("MAWDexieTable").dexieAll([L(e, n, r, c, void 0, a), o("MAWDbChunkTxns").hasMediaChunk(e, s)]).then(function(t) {
			var r = t[0], o = t[1];
			return E(e, n, r, a, i, l, o);
		});
	}
	function v(e, t, n, r, a, i, l, s) {
		a === void 0 && (a = !1), i === void 0 && (i = !1), s === void 0 && (s = !0);
		var u = {
			validatedAudioInfo: t.validatedAudioInfo,
			validatedDocumentFileInfo: t.validatedDocumentFileInfo,
			validatedImageInfo: t.validatedImageInfo,
			validatedVideoInfo: t.validatedVideoInfo
		}, c = o("MAWMediaUtils").genHMACPlaintextHash(t.plaintextHash), d = o("WAMediaUtils").decodeMediaEntryData(t.mediaEntry), m = d.objectId != null ? o("WAMediaUtils").stringToDeliveryObjectId(d.objectId) : null;
		return o("MAWDexieTable").dexieAll([S(e, n, t.plaintextHash, t.mediaType, t.size, t.mediaEntry, u, m, void 0, a, t.accessibilitySummaryText), o("MAWDbChunkTxns").hasMediaChunk(e, c)]).then(function(t) {
			var r = t[0], o = t[1];
			return E(e, n, r, a, l, s, o);
		});
	}
	function S(e, t, n, r, o, a, i, l, s, u, c) {
		return u === void 0 && (u = !1), R(e, t.msgId, t.type, n, r, o, a, i, l, s, u, void 0, c).then(function(n) {
			return L(e, t, n, l, void 0, u);
		});
	}
	function R(t, n, r, a, i, l, d, m, p, _, f, h, y) {
		return f === void 0 && (f = !1), h === void 0 && (h = 0), y === void 0 && (y = null), o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(t, a).then(function(C) {
			var b = new Map(C == null ? void 0 : C.mediaEntries), v = x(d, p, _);
			if (v != null && b.set(n, v), C) {
				var S;
				h > 0 && g.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Media found after retry for plaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(a)), C.msgIds || g.mustfix("Media missing msgIds: media type=%s", C.mediaType), C.mediaType || g.mustfix("Media missing mediaType: type=%s ; msg type=%s", i, r);
				var L = babelHelpers.extends({}, C, m, {
					accessibilitySummaryText: y != null ? y : void 0,
					mediaEntries: b,
					mediaType: (S = C.mediaType) != null ? S : i,
					msgIds: o("WASortedLists").addToSet(C.msgIds || o("WASortedLists").emptySet(), n)
				});
				return t.media.put(L).then(function() {
					return L;
				});
			} else {
				var E = o("MAWMediaUtils").genHMACPlaintextHash(a), k = babelHelpers.extends({
					accessibilitySummaryText: y != null ? y : void 0,
					fbid: _ != null ? _ : void 0,
					hashedPlaintextHash: E,
					mediaEntries: b,
					mediaType: i,
					msgIds: o("WASortedLists").singleElement(n),
					objectId: p != null ? p : void 0,
					plaintextHash: a,
					size: l,
					ts: o("WATimeUtils").unixTime()
				}, m);
				return t.media.add(k).then(function(e) {
					return babelHelpers.extends({}, k, { mediaId: e });
				}).catch(function(e) {
					var C = o("WAErrorMessage").maybeGetMessageFromError(e);
					if (h > 0) throw g.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"Media failed to link after retry: plaintextHash: ",
						", hashedPlaintextHash: ",
						". Error: ",
						""
					])), o("WAHashUtils").sanitisePlaintextHash(a), E, C), g.catching(e).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Media failed to link after retry."]))), e;
					return g.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Media failed to link. Possible duplicate? Will attempt a retry. For plaintextHash: ",
						", hashedPlaintextHash: ",
						". Error: ",
						""
					])), o("WAHashUtils").sanitisePlaintextHash(a), E, C), o("MAWODSProxy").odsBumpEntityKey({
						amount: 1,
						entity: o("WAOdsEnums").Entity.MAW_MEDIA_DB_DUPLICATE_MEDIA,
						key: "retry"
					}), R(t, n, r, a, i, l, d, m, p, _, f, h + 1, y);
				});
			}
		});
	}
	function L(e, t, n, r, a, i) {
		i === void 0 && (i = !1);
		var l = i ? o("MAWDexieTable").dexieResolve() : o("MAWDbMsgTxns").updateMediaId(e, t, n.mediaId, n.plaintextHash);
		return l.then(function() {
			return o("MAWMediaBackupTxns").linkMediaBackup(e, n.mediaId, t.msgId, r, a).then(function() {
				return n;
			});
		});
	}
	function E(e, t, n, r, a, i, l) {
		return r === void 0 && (r = !1), i === void 0 && (i = !0), o("EBLogger").EBLogger().tags(["restore", "handleUnstoredDbMedia"]).DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Inserted media with plaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(n.plaintextHash)), t.type !== o("MAWMsgType").MSG_TYPE.REVOKED && !r && i ? o("MAWMediaAfterTxns").handleNewMediaAfterTxn(t, n, l, e, void 0, a).then(function() {
			return n;
		}) : o("MAWDexieTable").dexieResolve(n);
	}
	var k = function(t, n, r, a, i, l, s, u, c, d, m) {
		return c === void 0 && (c = !1), o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(t, n).then(function(e) {
			if (e == null) throw g.mustfixThrow("Do not have the media message in db when attachHashToMediaMsg");
			return S(t, e, r, l, s, m, u, a, i, c, d);
		});
	}, I = function(t, n, a) {
		return o("MAWDbMediaTxns").maybeGetMediaFromHashedPlaintextHash(t, n).then(function(e) {
			if (e != null) {
				var n = babelHelpers.extends({}, e);
				return a.validatedAudioInfo != null && (n.validatedAudioInfo = babelHelpers.extends({}, e.validatedAudioInfo, a.validatedAudioInfo)), a.validatedVideoInfo != null && (n.validatedVideoInfo = babelHelpers.extends({}, e.validatedVideoInfo, a.validatedVideoInfo)), a.validatedImageInfo != null && (n.validatedImageInfo = babelHelpers.extends({}, e.validatedImageInfo, a.validatedImageInfo)), a.validatedDocumentFileInfo != null && (n.validatedDocumentFileInfo = babelHelpers.extends({}, e.validatedDocumentFileInfo, a.validatedDocumentFileInfo)), t.media.update(n.mediaId, n).then(r("emptyFunction"));
			} else g.WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] media entry is missing, can't update media info"])));
		});
	}, T = function(t, n, r, a) {
		return o("MAWDbMediaTxns").maybeGetMediaFromHashedPlaintextHash(t, n).then(function(e) {
			if (e != null) {
				var n = a ? e.mediaEntries.set(r, a) : e.mediaEntries, i = babelHelpers.extends({}, e, { mediaEntries: n });
				return t.media.update(i.mediaId, i);
			} else return g.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][updateMediaWithEncodedMediaEntryData] media entry is missing, can't upate media with encoded data"]))), o("MAWDexieTable").dexieResolve();
		});
	};
	function D(e, t, n, r, a, i, l, s, u, c, d, m) {
		return c === void 0 && (c = !1), o("MAWDexieTable").dexieAll([k(e, t, r, a, i, l, u.size, s, c, d, m), o("MAWDbChunkTxns").getOrCreateMediaChunkWithPlaintextHash(e, r, n, u.type)]).then(function(e) {
			var t = e[0];
			return t;
		});
	}
	function x(e, t, n) {
		var r, a = e;
		return a != null && t != null && (r = o("WAMediaUtils").decodeMediaEntryData(a), a = o("WAMediaUtils").encodeMediaEntryWithUpdatedObjectId(r, t)), a != null && n != null && (r = o("WAMediaUtils").decodeMediaEntryData(a), a = o("WAMediaUtils").encodeMediaEntryWithUpdatedFbid(r, n)), a;
	}
	function $(e, t, n) {
		var r = new Map();
		return e.mediaEntries.forEach(function(e, a) {
			var i = o("WAMediaUtils").decodeMediaEntryData(e), l = i.objectId === t ? o("WAMediaUtils").encodeMediaEntryWithUpdatedFbid(i, n) : e;
			r.set(a, l);
		}), r;
	}
	function P(e, t, n, r, a) {
		a === void 0 && (a = !0);
		var i = new Map();
		return t.forEach(function(e) {
			var t, n = (t = i.get(e.hashedPlaintextHash)) != null ? t : [];
			n.push(e), i.set(e.hashedPlaintextHash, n);
		}), o("MAWDbMediaTxns").maybeBulkGetMediaFromHashedPlaintextHash(e, [].concat(Array.from(i.keys()))).then(function(l) {
			var s = new Map(l.map(function(e) {
				return [e.hashedPlaintextHash, e];
			})), u = new Map();
			t.forEach(function(e) {
				var t = s.get(e.hashedPlaintextHash);
				if (e != null) {
					var n = x(e == null ? void 0 : e.entry, e == null ? void 0 : e.objectId, e == null ? void 0 : e.fbId);
					if (t) {
						var r = n ? t.mediaEntries.set(e.msgId, n) : t.mediaEntries, a = babelHelpers.extends({}, t, {
							mediaEntries: r,
							msgIds: o("WASortedLists").addToSet(t.msgIds, e.msgId)
						});
						s.set(e.hashedPlaintextHash, a);
					} else B(u, e, n);
				}
			});
			var c = new Map(), d = new Map(), m = Array.from(u.values()).filter(function(e) {
				return N(e, c, d);
			});
			return o("MAWDexieTable").dexieAll([e.media.bulkAdd(m), e.media.bulkPut(Array.from(s.values()))]).then(function() {
				return M(e, [].concat(Array.from(i.keys())), i, n, r, a);
			});
		});
	}
	function N(e, t, n) {
		if (e.objectId != null) {
			var r = t.get(e.objectId);
			if (r != null && r !== e.hashedPlaintextHash) return g.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] Same objectId assigned for different mediaIds. objectId: ",
				" shared by  hashedPlaintextHashes: ",
				" ",
				""
			])), e.objectId, r, e.hashedPlaintextHash), !1;
		}
		if (e.fbid != null) {
			var o = n.get(e.fbid);
			if (o != null && o !== e.hashedPlaintextHash) return g.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web] Same FBId assigned for different mediaIds. fbId: ",
				" - shared by hashedPlaintextHashes: ",
				" ",
				""
			])), e.fbid, o, e.hashedPlaintextHash), !1;
		}
		return e.objectId != null && t.set(e.objectId, e.hashedPlaintextHash), e.fbid != null && n.set(e.fbid, e.hashedPlaintextHash), !0;
	}
	function M(e, t, n, r, a, i) {
		return o("MAWDbMediaTxns").maybeBulkGetMediaFromHashedPlaintextHash(e, t).then(function(t) {
			return o("MAWDexieTable").dexieAll([F(e, t, n)]).then(function() {
				return i && w(t, n, r, e, a), t;
			});
		});
	}
	function w(e, t, n, a, i) {
		e.forEach(function(e) {
			var l = t.get(e.hashedPlaintextHash);
			l != null && !A(l) && r("promiseDone")(o("MAWDexieCastToPromise").dexieCastToPromise_I_KNOW_WHAT_I_AM_DOING(a.messages.where("msgId").anyOf(e.msgIds).toArray().then(function(t) {
				var r = o("MAWMediaUtils").createHdTypesForBridgeMedia(t), l = o("MAWBridgeTypesCreators").createBridgeMedia({
					chatJid: n,
					filteredMsgIds: o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(t, n),
					hasMediaForUI: !1,
					hdTypes: r,
					media: e,
					transportKey: i
				});
				return o("MAWMediaAfterTxns").handleNewMediaAfterTxnWithBridgeMedia(a, l);
			})));
		});
	}
	function A(e) {
		return e.reduce(function(e, t) {
			return e || t.isXMAShare;
		}, !1);
	}
	function F(e, t, n) {
		var r = t.reduce(function(e, t) {
			var r;
			return (r = n.get(t.hashedPlaintextHash)) == null || r.filter(function(e) {
				return e != null && !e.isXMAShare;
			}).forEach(function(n) {
				return e.set(n.msgId, t.mediaId);
			}), e;
		}, new Map());
		return o("MAWDbMsgTxns").bulkUpdateMediaId(e, r);
	}
	function O(e, t) {
		var n, r, a = e ? new Map([[t.msgId, e]]) : new Map();
		return babelHelpers.extends({
			fbid: (n = t.fbId) != null ? n : void 0,
			hashedPlaintextHash: t.hashedPlaintextHash,
			mediaEntries: a,
			mediaType: t.mediaType,
			msgIds: o("WASortedLists").singleElement(t.msgId),
			objectId: (r = t.objectId) != null ? r : void 0,
			plaintextHash: t.plaintextHash,
			size: t.size,
			ts: o("WATimeUtils").unixTime()
		}, t.mediaInfo);
	}
	function B(e, t, n) {
		var r = e.get(t.hashedPlaintextHash);
		r == null ? e.set(t.hashedPlaintextHash, O(n, t)) : (n != null && r.mediaEntries.set(t.msgId, n), r.msgIds.push(t.msgId));
	}
	l.prepareMediaWriteData = y, l.handleUnstoredDbMediaCreation = C, l.handleUnstoredDbMediaLinking = b, l.handleUnstoredDbMedia = v, l.linkMedia = S, l.createOrUpdateMediaRow = R, l.attachHashToMediaMsg = k, l.updateMediaEntryWithValidatedMediaInfo = I, l.updateMediaWithEncodedMediaEntryData = T, l.attachHashAndSaveMedia = D, l.updateBackupFbidInMediaEntries = $, l.bulkLinkMedia = P, l.linkMessageAndMediaBackupForMediaList = M;
}), 98);
