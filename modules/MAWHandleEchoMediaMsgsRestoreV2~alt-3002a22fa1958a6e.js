__d("MAWHandleEchoMediaMsgsRestoreV2", [
	"EBLSResignCdnUrlDeferred",
	"EBLogger",
	"EchoMessage",
	"EchoMessageMediaFieldUtils",
	"LSMEBTaskCreationSource",
	"MAWBridge",
	"MAWBridgeTypesCreators",
	"MAWCastToMsgrServerMediaType",
	"MAWConfig",
	"MAWDbChunkTxns",
	"MAWDbMediaTxns",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWEncodeMediaTransportProtocol",
	"MAWFrontendMediaUtils",
	"MAWGetMsgForProtocolMsgIdTxn",
	"MAWHandleMediaDownloadApi",
	"MAWIndexedDb",
	"MAWJids",
	"MAWMediaDownloadStatus",
	"MAWMediaDownloadStatusForUI",
	"MAWMediaManagementTxns",
	"MAWMediaRetryInfo",
	"MAWMediaUtils",
	"MAWSupportedDocumentTypes",
	"MAWTransactionMode",
	"WAAPI",
	"WAArmadilloXMA.pb",
	"WABase64",
	"WAGetAgeBucketForMediaKeyTimestamp",
	"WAGetStorageQplAnnotations",
	"WAHashUtils",
	"WAIsMediaExpiredError",
	"WAJids",
	"WAMediaUtils",
	"WAStartMediaDownloadQplFlow",
	"WATimeUtils",
	"getErrorSafe",
	"gkx",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W = o("EBLogger").EBLogger().tags(["restore"]);
	function q(e) {
		var t = G(e);
		return t.then(function(t) {
			var n = new Map();
			return e.forEach(function(e) {
				var r = t.get(e), o = r == null ? void 0 : r.blobData;
				n.set(e, o);
			}), Promise.resolve(n);
		});
	}
	function U(e) {
		return e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_JPEG ? "image/jpeg" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_PNG ? "image/png" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.STICKER ? "image/webp" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.GIF ? "image/gif" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_MP4 ? "audio/mp4" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_WAV ? "audio/wav" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.XMA ? "xma" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	async function V(t, n, a) {
		if (t.length === 0) return Promise.resolve();
		var i = [], l = [], v = new Map(), S = new Map();
		t.map(function(t) {
			var n, a = t.mediaData, h = t.messageTimestamp, y = j(a.plaintextHash), C = a.attachmentObjectId, b = a.attachmentType, R = a.backupEntFbid, L = a.directPath, E = a.filename, k = a.height, I = a.mediaContentType, T = a.mediaKeyTimestamp, D = a.mediaPlayableDuration, x = a.previewContentHeight, $ = a.previewContentType, P = a.previewContentWidth, N = a.size, M = a.width, w = o("WAHashUtils").stringToPlaintextHash(y), A = o("MAWMediaUtils").genHMACPlaintextHash(w);
			l.push(A);
			var F = I != null ? o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(I, t.isXMA) : $ != null ? o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(U($)) : null;
			if (F == null) return W.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - media content type null, msg id: ", ""])), t.externalId), W.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - media content type null"]))), Promise.resolve();
			if (b === o("EchoMessageMediaFieldUtils").AttachmentType.DOCUMENT && !o("MAWSupportedDocumentTypes").isAllowedType(E)) return W.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - document extension is disallowed, msg id: ", ""])), t.externalId), Promise.resolve();
			var O = t.mediaData.encryptedHash;
			if (O == null) return W.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash cannot be null, msg id: ", ""])), t.externalId), W.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash cannot be null"]))), Promise.resolve();
			var B = t.mediaData.mediaKey;
			if (B == null) return W.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Media key cannot be null, msg id: ", ""])), t.externalId), W.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Media key cannot be null"]))), Promise.resolve();
			var q = F.mediaType, V = F.serverMediaType, H = o("WAMediaUtils").stringToDeliveryObjectId(C), G = R != null ? o("WAMediaUtils").stringToBackupEntFbid(R) : void 0, z = t.threadJId, Y = K({
				filename: E,
				height: k,
				mediaPlayableDuration: D,
				mediaType: q,
				previewContentHeight: x,
				previewContentWidth: P,
				width: M
			});
			S.set(H, {
				filename: E,
				height: k,
				mediaPlayableDuration: D,
				mediaType: q,
				messageTimestamp: h,
				plaintextHash: w,
				previewContentHeight: x,
				previewContentWidth: P,
				serverMediaType: V,
				threadJId: z,
				width: M
			});
			var J = null;
			if (t.previewMediaData != null) try {
				J = X(t.previewMediaData), J != null && J.objectId == null && W.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["downloadableThumbnail was created without metadata, source: echo"])));
			} catch (e) {
				var Z = r("getErrorSafe")(e);
				W.catching(Z).DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Unable to construct downloadableThumbnail from previewMediaData, msg id: ", ""])), t.externalId), W.catching(Z).MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Unable to construct downloadableThumbnail from previewMediaData"])));
			}
			if (O != null) {
				var ee = Q(y, O, B, L, T, V, E, G, H, J, N);
				i.push({
					entry: ee,
					fbId: G,
					hashedPlaintextHash: A,
					isXMAShare: t.isXMA,
					mediaInfo: Y,
					mediaType: q,
					msgId: t.msgId,
					objectId: H,
					plaintextHash: w,
					size: N != null ? N : 0
				});
			}
			var te = (n = v.get(A)) != null ? n : [];
			te.push(t), v.set(A, te);
		});
		var R = a !== r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE, L = await H(i, n, R), E = await q(l), k = [];
		E.forEach(function(e, t) {
			var l = v.get(t);
			l == null || l.forEach(function(l) {
				if (l != null) {
					if (e != null) {
						W.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["media for message: ", " is already downloaded on the device"])), l.externalId);
						var s = L.find(function(e) {
							return e.plaintextHash === l.mediaData.plaintextHash;
						});
						if (s == null) {
							W.DEBUG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Cannot find the media entry for message with mediaKey ", ""])), l.mediaData.mediaKey);
							return;
						}
						return z(s.msgIds).then(function(e) {
							var t = e.filter(function(e) {
								return o("MAWDbMsg").isMediaMsg(e);
							});
							if (t.length > 0) {
								var r = o("MAWMediaUtils").createHdTypesForBridgeMedia(t), a = o("MAWBridgeTypesCreators").createBridgeMedia({
									chatJid: l.threadJId,
									filteredMsgIds: o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(t, n),
									hasMediaForUI: !0,
									hdTypes: r,
									media: s,
									transportKey: "EncryptedBackups"
								}), i = o("MAWMediaUtils").annotateBridgeMediaForDisplay(a, t);
								o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
									tag: "NewMedia",
									value: i
								}] });
							}
						});
					}
					var u = S.get(o("WAMediaUtils").stringToDeliveryObjectId(l.mediaData.attachmentObjectId));
					if (!(l == null || u == null)) {
						var c = u.filename, d = u.height, m = u.mediaPlayableDuration, p = u.mediaType, _ = u.messageTimestamp, f = u.plaintextHash, g = u.previewContentHeight, v = u.previewContentWidth, R = u.serverMediaType, E = u.threadJId, I = u.width, T = o("WAJids").extractUserId(o("MAWJids").toUserJid(l.threadJId)), D = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(R, l.isXMA);
						if (D != null) {
							var x = {
								attachmentObjectId: o("WAMediaUtils").stringToDeliveryObjectId(l.mediaData.attachmentObjectId),
								mediaType: D,
								messageId: l.externalId,
								messageTimeStamp: l.messageTimestamp,
								msgId: l.msgId,
								plaintextHash: f,
								productType: o("MAWConfig").getConfig().productTypeForEBAttachments,
								threadId: T,
								threadJid: E
							}, $ = i.find(function(e) {
								return e.hashedPlaintextHash === t;
							}), P = $ == null ? void 0 : $.entry;
							if (P == null) {
								W.DEBUG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
									"Cannot find the media entry for message, plaintextHash: ",
									", msg id: ",
									""
								])), o("WAHashUtils").sanitisePlaintextHash(o("WAHashUtils").stringToPlaintextHash(l.mediaData.plaintextHash)), l.externalId), W.MUSTFIX(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Cannot find the media entry for message"])));
								return;
							}
							if (a === r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE) return;
							var N = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
								downloadEntry: "handleEchoMediaMsgsRestore",
								msgType: null,
								protocolMsgId: {
									author: l.author,
									chat: l.threadJId,
									externalId: l.externalId
								},
								triggerUIView: null
							});
							k.push(Y({
								author: l.author,
								directPath: l.mediaData.directPath,
								echoMsg: l.echoMsg,
								externalId: l.externalId,
								filename: c,
								hashedPlaintextHash: t,
								height: d,
								isXMA: l.isXMA,
								mediaPlayableDuration: m,
								mediaType: p,
								messageTimestamp: _,
								plaintextHash: f,
								previewContentHeight: g,
								previewContentWidth: v,
								threadJId: E,
								width: I
							}, void 0, x, void 0, o("WAMediaUtils").decodeMediaEntryData(P), N));
						}
					}
				}
			});
		}), await Promise.all(k);
	}
	var H = (O = o("MAWIndexedDb")).makeMsgrTransactor({
		media: (B = o("MAWTransactionMode")).READWRITE,
		mediaBackup: B.READWRITE,
		messages: B.READWRITE
	}, "restoreLinkMedias", function(e) {
		return (function(t, n, r) {
			return o("MAWMediaManagementTxns").bulkLinkMedia(e, t, n, "EncryptedBackups", r);
		});
	}), G = O.makeMsgrTransactor({ chunk: B.READONLY }, "getChunksByHash", function(e) {
		return function(t) {
			return o("MAWDbChunkTxns").maybeBulkGetChunksFromHash(e, t);
		};
	}), z = O.makeMsgrTransactor({ messages: B.READONLY }, "getMessagesForMsgIds", function(e) {
		return function(t) {
			return e.messages.where("msgId").anyOf(t).toArray();
		};
	});
	function j(e) {
		if (e.endsWith("=")) for (var t = "", n = 0; n < e.length; n++) {
			var r = e.charAt(n);
			if (r === "=") return t;
			t += r;
		}
		return e;
	}
	function K(e) {
		var t = e.height, n = e.mediaType, r = e.width, a = e.previewContentHeight, i = e.previewContentWidth, l = e.mediaPlayableDuration, s = e.filename;
		return {
			validatedAudioInfo: n === "Ptt" && l != null ? {
				duration: ee(l),
				mimetype: o("MAWEncodeMediaTransportProtocol").AUDIO_WAV_MIME_TYPE,
				played: !1
			} : null,
			validatedDocumentFileInfo: n === "DocumentFile" ? {
				filename: s,
				mimetype: o("MAWEncodeMediaTransportProtocol").FILE_MIME_TYPE
			} : null,
			validatedImageInfo: n === "Image" ? {
				height: t,
				jpegThumbnailHeight: a,
				jpegThumbnailWidth: i,
				width: r
			} : n === "Gif" || n === "Sticker" ? {
				height: t,
				jpegThumbnailHeight: t,
				jpegThumbnailWidth: r,
				width: r
			} : null,
			validatedVideoInfo: n === "Video" ? {
				duration: l,
				height: t,
				jpegThumbnailHeight: a,
				jpegThumbnailWidth: i,
				mimetype: o("MAWEncodeMediaTransportProtocol").VIDEO_MIME_TYPE,
				width: r
			} : null
		};
	}
	function Q(e, t, n, r, a, i, l, s, u, c, d) {
		var m = o("WABase64").decodeB64UrlSafe(e, !0), p = o("WABase64").decodeB64UrlSafe(t, !0), _ = o("WABase64").decodeB64UrlSafe(n, !0);
		return o("WAMediaUtils").rawDataToMediaEntry({
			directPath: r,
			downloadableThumbnail: c != null ? c : void 0,
			fbid: s != null ? s : void 0,
			fileEncSha256: p,
			filename: l,
			fileSha256: m,
			mediaKey: _,
			mediaKeyTimestamp: a != null ? o("WATimeUtils").castToUnixTime(a) : void 0,
			objectId: u != null ? u : void 0,
			serverMediaType: i,
			size: d != null ? d : void 0
		});
	}
	function X(e) {
		var t = e.attachmentObjectId, n = e.directPath, r = e.encryptedHash, a = e.mediaKey, i = e.mediaKeyTimestamp, l = e.plaintextHash;
		if (r == null) {
			W.MUSTFIX(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash is null - unable to download thumbnail"])));
			return;
		} else {
			var s = i != null ? o("WATimeUtils").castToUnixTime(i) : void 0, u = a != null ? o("WAMediaUtils").castToMediaKey(o("WABase64").decodeB64UrlSafe(a, !0)) : void 0, c = o("WABase64").decodeB64UrlSafe(l, !0), d = o("WABase64").decodeB64UrlSafe(r, !0);
			return {
				directPath: n,
				fileEncSha256: d,
				fileSha256: c,
				mediaKey: u,
				mediaKeyTimestamp: s,
				objectId: t
			};
		}
	}
	var Y = async function(t, n, a, i, l, s) {
		var e, u, c, d, m, p;
		W.DEBUG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["start media download from whatsapp infra. traceId: ", ""])), n);
		var _ = t.author, f = t.externalId, g = t.filename, h = t.hashedPlaintextHash, y = t.height, C = t.mediaPlayableDuration, b = t.mediaType, v = t.messageTimestamp, x = t.plaintextHash, $ = t.previewContentHeight, P = t.previewContentWidth, N = t.threadJId, M = t.width, w = {
			author: _,
			chat: N,
			externalId: f
		}, A = s != null ? s : o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: "handleEchoMediaMsgsRestore",
			msgType: null,
			protocolMsgId: w,
			triggerUIView: null
		});
		o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
			details: "handle_echo_media_msgs_restore",
			hash: x,
			status: r("MAWMediaDownloadStatus").DOWNLOADING,
			type: "main"
		});
		var F = ((e = (u = o("MAWMediaRetryInfo").getRetriedMediaInfo(f)) == null ? void 0 : u.isXMA) != null ? e : !1) || ((c = t == null ? void 0 : t.isXMA) != null ? c : !1), O = ((d = o("MAWMediaRetryInfo").getRetriedMediaInfo(f)) == null || (d = d.echoMsg) == null ? void 0 : d.serializationOrigin) || (t == null || (m = t.echoMsg) == null ? void 0 : m.serializationOrigin) || o("EchoMessage").EchoSerializationOriginType.UNKNOWN, B = r("gkx")("23960");
		if (A.addPoint("download_media_start", {
			bool: {
				isEBDownloadEnforced: a == null && B,
				isRetryFromMI: a == null,
				isXMA: F,
				pathMismatch: i !== l.directPath
			},
			int: { mediaEntrySize: l.size },
			string: {
				oldDirectPath: (p = t == null ? void 0 : t.oldDirectPath) != null ? p : "",
				origin: O,
				restorationCdnUrl: i != null ? i : ""
			}
		}), o("WAGetStorageQplAnnotations").getStorageQplAnnotations().then(function(e) {
			A.addAnnotations(e);
		}), a != null && B) return W.DEBUG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["downloading media from MI directly. externalId ", "."])), w.externalId), ne({
			decodedMediaEntry: l,
			isEBDownloadEnforced: B,
			mediaDownloadRequest: t,
			protocolMsgId: w,
			retryPayload: a
		});
		var q = o("WAMediaUtils").validateDecodedMediaEntryForDownload(l);
		if (!q.success) {
			W.DEBUG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
				"media entry validation failed. externalId ",
				". traceId: ",
				". error: ",
				"."
			])), w.externalId, n, q.error), W.MUSTFIX(E || (E = babelHelpers.taggedTemplateLiteralLoose(["media entry validation failed. error: ", "."])), q.error), A.endFail("download_media_fail", { string: { failReason: q.error } });
			return;
		}
		var U = await r("WAAPI").cachedDownloadFullMediaOnly({
			downloadMediaMetric: A,
			hash: x,
			mediaEntry: q.value
		});
		if (U.success) {
			A.addPoint("download_media_end");
			var V = U.value, H = V.mimeType, G = V.plaintext;
			await o("MAWHandleMediaDownloadApi").handleMediaDownload(x, H, G, w), o("MAWMediaRetryInfo").clearRetriedMediaInfo(f);
			var z = K({
				filename: g,
				height: y,
				mediaPlayableDuration: C,
				mediaType: b,
				previewContentHeight: $,
				previewContentWidth: P,
				width: M
			});
			await Z(h, z), W.DEBUG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
				"media download complete. externalId ",
				". traceId: ",
				""
			])), w.externalId, n), A.endSuccess(), o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
				details: "handle_echo_media_msgs_restore_success",
				hash: x,
				status: r("MAWMediaDownloadStatus").SUCCESS,
				type: "main"
			});
		} else {
			var j = U.error;
			if (o("WAIsMediaExpiredError").isMediaExpiredError(j) && a) A.addPoint("eb_resign_requested"), A.endSuccess(), W.WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose([
				"Retry download media as signature has expired and should be renewed. externalId ",
				". traceId: ",
				""
			])), w.externalId, n), await ne({
				decodedMediaEntry: l,
				isEBDownloadEnforced: !1,
				mediaDownloadRequest: t,
				protocolMsgId: w,
				retryPayload: a
			});
			else {
				W.DEBUG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
					"media download failed with error: ",
					" ",
					" when downloading. Message timestamp: ",
					". traceId: ",
					""
				])), f, j, v, n), W.MUSTFIX(D || (D = babelHelpers.taggedTemplateLiteralLoose(["media download failed with error: ", ""])), j);
				var Q = { string: {
					directPath: l.directPath,
					error: "media_download_failure",
					restorationCdnUrl: i != null ? i : ""
				} };
				A.endFail(j, Q), o("MAWMediaRetryInfo").clearRetriedMediaInfo(f), o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
					details: j,
					hash: x,
					status: o("MAWMediaDownloadStatusForUI").getStatusFromWAAPIDownloadMediaError(j),
					type: "main"
				});
			}
		}
	}, J = O.makeMsgrTransactor({
		media: B.READONLY,
		mediaBackup: B.READONLY,
		messages: B.READONLY
	}, "invokeRestoreAccessCheckSprocToDownloadAttachment", function(e) {
		return (function(t, n, r) {
			return o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(e, n.plaintextHash).then(function(a) {
				if (a) {
					W.DEBUG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["start resign cdn url through sproc"])));
					var i = re(a, n.attachmentObjectId);
					return o("MAWDbMsgTxns").getMsgsByMsgIds(e, i).then(function(e) {
						var i, l = e.find(function(e) {
							return e.externalId === t;
						});
						r.addPoint("resign_cdn_url_bridge_call", {
							bool: { isForwarded: (i = l == null ? void 0 : l.isForwarded) != null ? i : !1 },
							int: {
								duplicateMsgsCount: e.length,
								msgXMAType: l == null ? void 0 : l.xmaMessageType,
								totalMediaEntries: a.mediaEntries.size
							},
							int_array: { duplicateXMATypes: e.map(function(e) {
								var t;
								return (t = e.xmaMessageType) != null ? t : 0;
							}) },
							string: { msgType: l == null ? void 0 : l.type },
							string_array: {
								duplicateMsgs: e.map(function(e) {
									return e.externalId;
								}),
								duplicateMsgTypes: e.map(function(e) {
									return e.type;
								})
							}
						}), o("MAWIndexedDb").afterTransaction({
							tag: "ResignAttachmentCDNUrl",
							value: {
								deliveryObjectId: n.attachmentObjectId,
								mediaType: n.mediaType,
								messageId: t,
								msgId: n.msgId,
								plaintextHash: n.plaintextHash,
								productType: o("MAWConfig").getConfig().productTypeForEBAttachments,
								sortOrder: n.messageTimeStamp,
								threadId: n.threadId,
								threadJid: n.threadJid,
								traceId: r.getQPLAttrs().instanceKey
							}
						});
					});
				} else W.DEBUG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
					"media entry is missing from index db. It is required to retry download by resigning cdn url: externalId: ",
					". traceId: ",
					""
				])), t, r.getQPLAttrs().instanceKey), W.MUSTFIX(P || (P = babelHelpers.taggedTemplateLiteralLoose(["media entry is missing from index db. It is required to retry download by resigning cdn url: externalId: ", "."])), t), r.endFail("missing-media");
			});
		});
	}), Z = O.makeMsgrTransactor({
		media: B.READWRITE,
		messages: B.READWRITE
	}, "updateMediaWithDownloadedChunkBlob", function(e) {
		return (function(t, n) {
			return o("MAWMediaManagementTxns").updateMediaEntryWithValidatedMediaInfo(e, t, n);
		});
	});
	function ee(e) {
		var t = Math.floor(e / 1e3);
		return t > 0 ? t : e;
	}
	function te(e) {
		return e == null ? !1 : e === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY || e === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_MENTION;
	}
	async function ne(e) {
		var t, n = e.decodedMediaEntry, a = e.isEBDownloadEnforced, i = e.mediaDownloadRequest, l = e.protocolMsgId, s = e.retryPayload, u = await o("MAWGetMsgForProtocolMsgIdTxn").getMsgForProtocolMsgIdTxn(l);
		if (u.success === !0 && te(u.value.xmaMessageType)) return W.DEBUG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
			"Skipping media restore for expirable XMA. externalId ",
			". xmamessageType: ",
			""
		])), l.externalId, u.value.xmaMessageType), Promise.resolve();
		var c = l.externalId;
		o("MAWMediaRetryInfo").setRetriedMediaInfo(l.externalId, i);
		var d = ((t = n.mediaKeyTimestamp) != null ? t : 0) > 1725105600, m = {
			bool: {
				is_after_S441705_fix: d,
				isEBDownloadEnforced: a
			},
			int: { mediaKeyTimestamp: n.mediaKeyTimestamp },
			string: {
				externalId: c,
				mediaKeyAge: o("WAGetAgeBucketForMediaKeyTimestamp").getAgeBucketForMediaKeyTimestamp(n.mediaKeyTimestamp),
				mediaType: s.mediaType,
				objectId: s.attachmentObjectId,
				restoreEntry: "EB",
				restoreMethod: "gql"
			}
		}, p = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
			downloadEntry: "handleEchoMediaMsgsRestore",
			msgType: null,
			protocolMsgId: l,
			triggerUIView: null
		});
		p.addAnnotations(m), W.DEBUG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
			"start restore media from backup. hash: ",
			". msgId: ",
			". traceId: ",
			""
		])), o("WAHashUtils").sanitisePlaintextHash(s.plaintextHash), c, p.getQPLAttrs().instanceKey);
		var _ = n.mediaKey;
		if (_ == null) {
			W.WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
				"media key is missing from media entry. hash: ",
				". msgId: ",
				". traceId: ",
				""
			])), o("WAHashUtils").sanitisePlaintextHash(s.plaintextHash), c, p.getQPLAttrs().instanceKey), p.endFail("missing-media-key");
			return;
		}
		r("vulture")("QFBybXy8M_zEUC4u4Cu-Lu_px4E="), W.DEBUG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
			"resign cdn url start [gql]. hash: ",
			". msgId: ",
			". traceId: ",
			""
		])), o("WAHashUtils").sanitisePlaintextHash(s.plaintextHash), c, p.getQPLAttrs().instanceKey), o("EBLSResignCdnUrlDeferred").eblsResignCdnUrlWithGraphQL({
			chatJid: l.chat,
			deliveryObjectId: s.attachmentObjectId,
			externalId: c,
			mediaKey: _,
			mediaType: s.mediaType,
			sortOrderMs: s.messageTimeStamp
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			W.catching(t).MUSTFIX(F || (F = babelHelpers.taggedTemplateLiteralLoose(["resign cdn url gql error"]))), p.endFail("runtime-error", { string: { restoreError: t.toString() } });
		});
	}
	function re(e, t) {
		var n, r = [];
		return (n = e.mediaEntries) == null || n.forEach(function(e, n) {
			var a = o("WAMediaUtils").decodeMediaEntryData(e);
			a.objectId === t && r.push(n);
		}), r;
	}
	l.downloadMediaAndWriteToMediaStore = V, l.getBase64WithoutPadding = j, l.getMediaInfo = K, l.constructMediaEntry = Q, l.constructRawDownloadableThumbnail = X, l.handleDownloadMedia = Y, l.invokeRestoreAccessCheckSprocToDownloadAttachment = J;
}), 98);
