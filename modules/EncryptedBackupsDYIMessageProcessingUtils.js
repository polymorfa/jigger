__d("EncryptedBackupsDYIMessageProcessingUtils", [
	"EncryptedBackupsDYIMediaDownloadHandlers",
	"EncryptedBackupsDYISingleton",
	"FBLogger",
	"MAWBridge",
	"MAWFrontendMediaUtils",
	"MebWAMediaDownloader",
	"Promise",
	"WAHashUtils",
	"WAJids",
	"WALongInt",
	"WAMediaUtils",
	"WAProgressiveJpegGetScanLengths",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h;
	function y(e, t) {
		return {
			isUnsent: !1,
			media: new Set(),
			reactions: [],
			senderName: C(e),
			text: "",
			timestamp: t != null ? t : 0,
			type: ""
		};
	}
	function C(e) {
		var t = o("EncryptedBackupsDYISingleton").getSingleton(), n = "Unknown User";
		if (e != null) {
			var r = t.getContactNameForContactId(e);
			r != null && (n = r);
		}
		return n;
	}
	function b(e, t, n, r, o) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i) {
			var l = o("EncryptedBackupsDYISingleton").getSingleton();
			if (!l.isAttachmentsSkipped()) {
				var s = l.getLogger(), u = s.TAGS([o("WAHashUtils").sanitisePlaintextHash(e)]);
				r("FBLogger")("wmi_eb").tags(["labyrinth_dyi"]).debug("Sending the media download bridge call for plaintext hash: %s", o("WAHashUtils").sanitisePlaintextHash(e));
				var c = yield o("MAWBridge").getBridge().sendAndReceive("backend", "dyiDownloadMediaV2", {
					mediaEntry: a,
					mediaOption: i,
					plaintextHash: e,
					protocolMsgId: t,
					sortOrderMs: n
				});
				if (r("FBLogger")("wmi_eb").tags(["labyrinth_dyi"]).debug("Received the media download result from the bridge for plaintext hash: %s, success: %s, error: %s", o("WAHashUtils").sanitisePlaintextHash(e), c.success ? "true" : "false", c.error), c.success) {
					var d = c.value, m = d.unvalidatedMimeType, h = d.validatedResult, y = h.skipValidation ? m : h.mimeType, C = yield o("EncryptedBackupsDYIMediaDownloadHandlers").DYIMediaDownloadHandler(e, y, h.validatedPlaintext, t);
					if (!C.success) {
						u.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
							"Failed to save media: ",
							", ",
							""
						])), C.error, C.payload), s.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
							"Failed to save media: ",
							", ",
							""
						])), C.error, C.payload), l.deletePlaintextHashFromAttachmentDownloadsInProgress(e);
						return;
					}
				} else {
					u.WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
						"Failed to download media: ",
						", ",
						""
					])), c.error, c.payload), s.ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
						"Failed to download media: ",
						", ",
						""
					])), c.error, c.payload), l.deletePlaintextHashFromAttachmentDownloadsInProgress(e);
					return;
				}
			}
		}), v.apply(this, arguments);
	}
	function S(t, r, a, i, l, p, _, f, g, y, C) {
		var b = o("EncryptedBackupsDYISingleton").getSingleton(), v = b.getLogger(), S = v.TAGS([o("WAHashUtils").sanitisePlaintextHash(g)]), R = {
			author: o("WAJids").toMsgrUserJid(_),
			chat: o("WAJids").toMsgrUserJid(l),
			externalId: f
		}, L = {
			hash: g,
			isUrlRenewed: !1,
			mediaEntry: i,
			protocolMsgId: R,
			sortOrderMs: y
		}, E = {
			onDownloadError: function() {
				return S.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media"]))), v.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to download media"]))), b.deletePlaintextHashFromAttachmentDownloadsInProgress(L.hash), (h || (h = n("Promise"))).resolve();
			},
			onDownloadSuccess: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					S.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Successfully downloaded media"])));
					var t = e.mimeType, n = e.plaintext;
					yield o("EncryptedBackupsDYIMediaDownloadHandlers").DYIMediaDownloadHandler(L.hash, t, n, R);
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			onUrlExpired: function() {
				return S.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Media CDN URL has expired and should be renewed"]))), (h || (h = n("Promise"))).resolve();
			}
		}, k = new (o("MebWAMediaDownloader")).MebWAMediaDownloader(L, E, t), I = i.serverMediaType, T = i.objectId;
		if (I != null && T != null && typeof y == "number") {
			var D = {
				backupEntFbid: r,
				deliveryObjectId: T,
				hash: g,
				mediaType: I,
				messageId: f,
				productType: a,
				sortOrder: y,
				threadId: l,
				threadKey: p
			}, x = {
				onResignCdnUrlFailure: function(t) {
					return S.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to resign CDN URL: ", ""])), t.message), v.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to resign CDN URL: ", ""])), t.message), b.deletePlaintextHashFromAttachmentDownloadsInProgress(L.hash), (h || (h = n("Promise"))).resolve();
				},
				onResignCdnUrlSuccess: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {});
					function t() {
						return e.apply(this, arguments);
					}
					return t;
				})()
			}, $ = C(D, x);
			k.setNextHandler($), $.setNextHandler(new (o("MebWAMediaDownloader")).MebWAMediaDownloader(L, E, t));
		}
		k.handle();
	}
	function R(e, t, n) {
		var r, a, i, l, s, u, c, d, m, p, _, f = (r = e.integral) == null || (r = r.transport) == null || (r = r.ancillary) == null ? void 0 : r.mimetype;
		if (f == null) return o("WAResultOrError").makeError("mime-type-missing");
		var g = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(f, t).serverMediaType;
		if (g == null) return o("WAResultOrError").makeError("server-media-type-missing");
		var h = (a = e.integral) == null || (a = a.transport) == null || (a = a.integral) == null ? void 0 : a.directPath;
		if (h == null) return o("WAResultOrError").makeError("direct-path-missing");
		var y = (i = e.integral) == null || (i = i.transport) == null || (i = i.integral) == null ? void 0 : i.fileSha256;
		if (y == null) return o("WAResultOrError").makeError("plaintext-hash-missing");
		var C = o("WALongInt").maybeNumber((l = e.integral) == null || (l = l.transport) == null || (l = l.integral) == null ? void 0 : l.mediaKeyTimestamp);
		if (C == null) return o("WAResultOrError").makeError("media-key-timestamp-missing");
		var b;
		if (((s = e.ancillary) == null ? void 0 : s.scanLengths) != null && ((u = e.ancillary) == null ? void 0 : u.scansSidecar) != null) {
			var v = e.ancillary, S = v.scanLengths, R = v.scansSidecar;
			b = {
				scanLengths: S.map(o("WAProgressiveJpegGetScanLengths").asProgressiveJpegScanLength),
				sidecar: R
			};
		}
		var L;
		if (((c = e.integral) == null || (c = c.transport) == null || (c = c.ancillary) == null || (c = c.thumbnail) == null ? void 0 : c.downloadableThumbnail) != null) {
			var E = e.integral.transport.ancillary.thumbnail.downloadableThumbnail, k = E.directPath, I = E.fileEncSha256, T = E.fileSha256, D = E.mediaKey, x = E.mediaKeyTimestamp, $ = E.objectId;
			L = {
				directPath: k,
				fileEncSha256: I,
				fileSha256: T,
				mediaKey: D,
				mediaKeyTimestamp: o("WALongInt").maybeNumber(x),
				objectId: $
			};
		}
		var P = {
			directPath: h,
			downloadableThumbnail: L,
			fileEncSha256: (d = e.integral) == null || (d = d.transport) == null || (d = d.integral) == null ? void 0 : d.fileEncSha256,
			filename: n,
			fileSha256: y,
			mediaKey: (m = e.integral) == null || (m = m.transport) == null || (m = m.integral) == null ? void 0 : m.mediaKey,
			mediaKeyTimestamp: o("WATimeUtils").castToUnixTime(C),
			objectId: (p = e.integral) == null || (p = p.transport) == null || (p = p.ancillary) == null ? void 0 : p.objectId,
			progressiveJpegDetails: b,
			serverMediaType: g,
			size: o("WALongInt").maybeNumber((_ = e.integral) == null || (_ = _.transport) == null || (_ = _.ancillary) == null ? void 0 : _.fileLength)
		};
		return o("WAResultOrError").makeResult(o("WAMediaUtils").rawDataToMediaEntry(P));
	}
	l.buildBaseDyiMessage = y, l.getSenderName = C, l.downloadMediaWithMediaManager = b, l.startMediaDownloadChain = S, l.decodeMediaEntryFromAttachmentPayload = R;
}), 98);
