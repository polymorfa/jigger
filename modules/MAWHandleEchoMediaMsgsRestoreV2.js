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
	"Promise",
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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q = o("EBLogger").EBLogger().tags(["restore"]);
	function U(e) {
		var t = j(e);
		return t.then(function(t) {
			var r = new Map();
			return e.forEach(function(e) {
				var n = t.get(e), o = n == null ? void 0 : n.blobData;
				r.set(e, o);
			}), (W || (W = n("Promise"))).resolve(r);
		});
	}
	function V(e) {
		return e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_JPEG ? "image/jpeg" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.IMAGE_PNG ? "image/png" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.STICKER ? "image/webp" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.GIF ? "image/gif" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_MP4 ? "audio/mp4" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.AUDIO_WAV ? "audio/wav" : e === o("EchoMessageMediaFieldUtils").EchoMessageMediaPreviewType.XMA ? "xma" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function H(e, t, n) {
		return G.apply(this, arguments);
	}
	function G() {
		return G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
			if (e.length === 0) return (W || (W = n("Promise"))).resolve();
			var i = [], l = [], s = new Map(), u = new Map();
			e.map(function(e) {
				var t, a = e.mediaData, c = e.messageTimestamp, d = Q(a.plaintextHash), m = a.attachmentObjectId, p = a.attachmentType, _ = a.backupEntFbid, f = a.directPath, g = a.filename, h = a.height, y = a.mediaContentType, D = a.mediaKeyTimestamp, x = a.mediaPlayableDuration, $ = a.previewContentHeight, P = a.previewContentType, N = a.previewContentWidth, M = a.size, w = a.width, A = o("WAHashUtils").stringToPlaintextHash(d), F = o("MAWMediaUtils").genHMACPlaintextHash(A);
				l.push(F);
				var O = y != null ? o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(y, e.isXMA) : P != null ? o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(V(P)) : null;
				if (O == null) return q.DEBUG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - media content type null, msg id: ", ""])), e.externalId), q.MUSTFIX(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - media content type null"]))), (W || (W = n("Promise"))).resolve();
				if (p === o("EchoMessageMediaFieldUtils").AttachmentType.DOCUMENT && !o("MAWSupportedDocumentTypes").isAllowedType(g)) return q.DEBUG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Cannot download media - document extension is disallowed, msg id: ", ""])), e.externalId), (W || (W = n("Promise"))).resolve();
				var B = e.mediaData.encryptedHash;
				if (B == null) return q.DEBUG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash cannot be null, msg id: ", ""])), e.externalId), q.MUSTFIX(R || (R = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash cannot be null"]))), (W || (W = n("Promise"))).resolve();
				var U = e.mediaData.mediaKey;
				if (U == null) return q.DEBUG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["Media key cannot be null, msg id: ", ""])), e.externalId), q.MUSTFIX(E || (E = babelHelpers.taggedTemplateLiteralLoose(["Media key cannot be null"]))), (W || (W = n("Promise"))).resolve();
				var H = O.mediaType, G = O.serverMediaType, z = o("WAMediaUtils").stringToDeliveryObjectId(m), j = _ != null ? o("WAMediaUtils").stringToBackupEntFbid(_) : void 0, K = e.threadJId, Z = X({
					filename: g,
					height: h,
					mediaPlayableDuration: x,
					mediaType: H,
					previewContentHeight: $,
					previewContentWidth: N,
					width: w
				});
				u.set(z, {
					filename: g,
					height: h,
					mediaPlayableDuration: x,
					mediaType: H,
					messageTimestamp: c,
					plaintextHash: A,
					previewContentHeight: $,
					previewContentWidth: N,
					serverMediaType: G,
					threadJId: K,
					width: w
				});
				var ee = null;
				if (e.previewMediaData != null) try {
					ee = J(e.previewMediaData), ee != null && ee.objectId == null && q.MUSTFIX(k || (k = babelHelpers.taggedTemplateLiteralLoose(["downloadableThumbnail was created without metadata, source: echo"])));
				} catch (t) {
					var te = r("getErrorSafe")(t);
					q.catching(te).DEBUG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["Unable to construct downloadableThumbnail from previewMediaData, msg id: ", ""])), e.externalId), q.catching(te).MUSTFIX(T || (T = babelHelpers.taggedTemplateLiteralLoose(["Unable to construct downloadableThumbnail from previewMediaData"])));
				}
				if (B != null) {
					var ne = Y(d, B, U, f, D, G, g, j, z, ee, M);
					i.push({
						entry: ne,
						fbId: j,
						hashedPlaintextHash: F,
						isXMAShare: e.isXMA,
						mediaInfo: Z,
						mediaType: H,
						msgId: e.msgId,
						objectId: z,
						plaintextHash: A,
						size: M != null ? M : 0
					});
				}
				var re = (t = s.get(F)) != null ? t : [];
				re.push(e), s.set(F, re);
			});
			var c = a !== r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE, d = yield z(i, t, c), m = yield U(l), p = [];
			m.forEach(function(e, n) {
				var l = s.get(n);
				l == null || l.forEach(function(l) {
					if (l != null) {
						if (e != null) {
							q.DEBUG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["media for message: ", " is already downloaded on the device"])), l.externalId);
							var s = d.find(function(e) {
								return e.plaintextHash === l.mediaData.plaintextHash;
							});
							if (s == null) {
								q.DEBUG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["Cannot find the media entry for message with mediaKey ", ""])), l.mediaData.mediaKey);
								return;
							}
							return K(s.msgIds).then(function(e) {
								var n = e.filter(function(e) {
									return o("MAWDbMsg").isMediaMsg(e);
								});
								if (n.length > 0) {
									var r = o("MAWMediaUtils").createHdTypesForBridgeMedia(n), a = o("MAWBridgeTypesCreators").createBridgeMedia({
										chatJid: l.threadJId,
										filteredMsgIds: o("MAWBridgeTypesCreators").getMsgIdsFilteredByJid(n, t),
										hasMediaForUI: !0,
										hdTypes: r,
										media: s,
										transportKey: "EncryptedBackups"
									}), i = o("MAWMediaUtils").annotateBridgeMediaForDisplay(a, n);
									o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
										tag: "NewMedia",
										value: i
									}] });
								}
							});
						}
						var c = u.get(o("WAMediaUtils").stringToDeliveryObjectId(l.mediaData.attachmentObjectId));
						if (!(l == null || c == null)) {
							var m = c.filename, _ = c.height, f = c.mediaPlayableDuration, g = c.mediaType, h = c.messageTimestamp, y = c.plaintextHash, C = c.previewContentHeight, b = c.previewContentWidth, v = c.serverMediaType, S = c.threadJId, R = c.width, L = o("WAJids").extractUserId(o("MAWJids").toUserJid(l.threadJId)), E = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(v, l.isXMA);
							if (E != null) {
								var k = {
									attachmentObjectId: o("WAMediaUtils").stringToDeliveryObjectId(l.mediaData.attachmentObjectId),
									mediaType: E,
									messageId: l.externalId,
									messageTimeStamp: l.messageTimestamp,
									msgId: l.msgId,
									plaintextHash: y,
									productType: o("MAWConfig").getConfig().productTypeForEBAttachments,
									threadId: L,
									threadJid: S
								}, I = i.find(function(e) {
									return e.hashedPlaintextHash === n;
								}), T = I == null ? void 0 : I.entry;
								if (T == null) {
									q.DEBUG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
										"Cannot find the media entry for message, plaintextHash: ",
										", msg id: ",
										""
									])), o("WAHashUtils").sanitisePlaintextHash(o("WAHashUtils").stringToPlaintextHash(l.mediaData.plaintextHash)), l.externalId), q.MUSTFIX(P || (P = babelHelpers.taggedTemplateLiteralLoose(["Cannot find the media entry for message"])));
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
								p.push(Z({
									author: l.author,
									directPath: l.mediaData.directPath,
									echoMsg: l.echoMsg,
									externalId: l.externalId,
									filename: m,
									hashedPlaintextHash: n,
									height: _,
									isXMA: l.isXMA,
									mediaPlayableDuration: f,
									mediaType: g,
									messageTimestamp: h,
									plaintextHash: y,
									previewContentHeight: C,
									previewContentWidth: b,
									threadJId: S,
									width: R
								}, void 0, k, void 0, o("WAMediaUtils").decodeMediaEntryData(T), N));
							}
						}
					}
				});
			}), yield (W || (W = n("Promise"))).all(p);
		}), G.apply(this, arguments);
	}
	var z = (O = o("MAWIndexedDb")).makeMsgrTransactor({
		media: (B = o("MAWTransactionMode")).READWRITE,
		mediaBackup: B.READWRITE,
		messages: B.READWRITE
	}, "restoreLinkMedias", function(e) {
		return (function(t, n, r) {
			return o("MAWMediaManagementTxns").bulkLinkMedia(e, t, n, "EncryptedBackups", r);
		});
	}), j = O.makeMsgrTransactor({ chunk: B.READONLY }, "getChunksByHash", function(e) {
		return function(t) {
			return o("MAWDbChunkTxns").maybeBulkGetChunksFromHash(e, t);
		};
	}), K = O.makeMsgrTransactor({ messages: B.READONLY }, "getMessagesForMsgIds", function(e) {
		return function(t) {
			return e.messages.where("msgId").anyOf(t).toArray();
		};
	});
	function Q(e) {
		if (e.endsWith("=")) for (var t = "", n = 0; n < e.length; n++) {
			var r = e.charAt(n);
			if (r === "=") return t;
			t += r;
		}
		return e;
	}
	function X(e) {
		var t = e.height, n = e.mediaType, r = e.width, a = e.previewContentHeight, i = e.previewContentWidth, l = e.mediaPlayableDuration, s = e.filename;
		return {
			validatedAudioInfo: n === "Ptt" && l != null ? {
				duration: ne(l),
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
	function Y(e, t, n, r, a, i, l, s, u, c, d) {
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
	function J(t) {
		var n = t.attachmentObjectId, r = t.directPath, a = t.encryptedHash, i = t.mediaKey, l = t.mediaKeyTimestamp, s = t.plaintextHash;
		if (a == null) {
			q.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Encrypted hash is null - unable to download thumbnail"])));
			return;
		} else {
			var u = l != null ? o("WATimeUtils").castToUnixTime(l) : void 0, c = i != null ? o("WAMediaUtils").castToMediaKey(o("WABase64").decodeB64UrlSafe(i, !0)) : void 0, d = o("WABase64").decodeB64UrlSafe(s, !0), m = o("WABase64").decodeB64UrlSafe(a, !0);
			return {
				directPath: r,
				fileEncSha256: m,
				fileSha256: d,
				mediaKey: c,
				mediaKeyTimestamp: u,
				objectId: n
			};
		}
	}
	var Z = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i, l) {
			var g, h, y, C, b, v;
			q.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start media download from whatsapp infra. traceId: ", ""])), t);
			var S = e.author, R = e.externalId, L = e.filename, E = e.hashedPlaintextHash, k = e.height, I = e.mediaPlayableDuration, T = e.mediaType, D = e.messageTimestamp, x = e.plaintextHash, $ = e.previewContentHeight, P = e.previewContentWidth, N = e.threadJId, M = e.width, w = {
				author: S,
				chat: N,
				externalId: R
			}, A = l != null ? l : o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
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
			var F = ((g = (h = o("MAWMediaRetryInfo").getRetriedMediaInfo(R)) == null ? void 0 : h.isXMA) != null ? g : !1) || ((y = e == null ? void 0 : e.isXMA) != null ? y : !1), O = ((C = o("MAWMediaRetryInfo").getRetriedMediaInfo(R)) == null || (C = C.echoMsg) == null ? void 0 : C.serializationOrigin) || (e == null || (b = e.echoMsg) == null ? void 0 : b.serializationOrigin) || o("EchoMessage").EchoSerializationOriginType.UNKNOWN, B = r("gkx")("23960");
			if (A.addPoint("download_media_start", {
				bool: {
					isEBDownloadEnforced: n == null && B,
					isRetryFromMI: n == null,
					isXMA: F,
					pathMismatch: a !== i.directPath
				},
				int: { mediaEntrySize: i.size },
				string: {
					oldDirectPath: (v = e == null ? void 0 : e.oldDirectPath) != null ? v : "",
					origin: O,
					restorationCdnUrl: a != null ? a : ""
				}
			}), o("WAGetStorageQplAnnotations").getStorageQplAnnotations().then(function(e) {
				A.addAnnotations(e);
			}), n != null && B) return q.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["downloading media from MI directly. externalId ", "."])), w.externalId), oe({
				decodedMediaEntry: i,
				isEBDownloadEnforced: B,
				mediaDownloadRequest: e,
				protocolMsgId: w,
				retryPayload: n
			});
			var W = o("WAMediaUtils").validateDecodedMediaEntryForDownload(i);
			if (!W.success) {
				q.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"media entry validation failed. externalId ",
					". traceId: ",
					". error: ",
					"."
				])), w.externalId, t, W.error), q.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["media entry validation failed. error: ", "."])), W.error), A.endFail("download_media_fail", { string: { failReason: W.error } });
				return;
			}
			var U = yield r("WAAPI").cachedDownloadFullMediaOnly({
				downloadMediaMetric: A,
				hash: x,
				mediaEntry: W.value
			});
			if (U.success) {
				A.addPoint("download_media_end");
				var V = U.value, H = V.mimeType, G = V.plaintext;
				yield o("MAWHandleMediaDownloadApi").handleMediaDownload(x, H, G, w), o("MAWMediaRetryInfo").clearRetriedMediaInfo(R);
				var z = X({
					filename: L,
					height: k,
					mediaPlayableDuration: I,
					mediaType: T,
					previewContentHeight: $,
					previewContentWidth: P,
					width: M
				});
				yield te(E, z), q.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"media download complete. externalId ",
					". traceId: ",
					""
				])), w.externalId, t), A.endSuccess(), o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
					details: "handle_echo_media_msgs_restore_success",
					hash: x,
					status: r("MAWMediaDownloadStatus").SUCCESS,
					type: "main"
				});
			} else {
				var j = U.error;
				if (o("WAIsMediaExpiredError").isMediaExpiredError(j) && n) A.addPoint("eb_resign_requested"), A.endSuccess(), q.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"Retry download media as signature has expired and should be renewed. externalId ",
					". traceId: ",
					""
				])), w.externalId, t), yield oe({
					decodedMediaEntry: i,
					isEBDownloadEnforced: !1,
					mediaDownloadRequest: e,
					protocolMsgId: w,
					retryPayload: n
				});
				else {
					q.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"media download failed with error: ",
						" ",
						" when downloading. Message timestamp: ",
						". traceId: ",
						""
					])), R, j, D, t), q.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose(["media download failed with error: ", ""])), j);
					var K = { string: {
						directPath: i.directPath,
						error: "media_download_failure",
						restorationCdnUrl: a != null ? a : ""
					} };
					A.endFail(j, K), o("MAWMediaRetryInfo").clearRetriedMediaInfo(R), o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
						details: j,
						hash: x,
						status: o("MAWMediaDownloadStatusForUI").getStatusFromWAAPIDownloadMediaError(j),
						type: "main"
					});
				}
			}
		});
		return function(n, r, o, a, i, l) {
			return e.apply(this, arguments);
		};
	})(), ee = O.makeMsgrTransactor({
		media: B.READONLY,
		mediaBackup: B.READONLY,
		messages: B.READONLY
	}, "invokeRestoreAccessCheckSprocToDownloadAttachment", function(e) {
		return (function(t, n, r) {
			return o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(e, n.plaintextHash).then(function(a) {
				if (a) {
					q.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["start resign cdn url through sproc"])));
					var i = ie(a, n.attachmentObjectId);
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
				} else q.DEBUG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
					"media entry is missing from index db. It is required to retry download by resigning cdn url: externalId: ",
					". traceId: ",
					""
				])), t, r.getQPLAttrs().instanceKey), q.MUSTFIX(y || (y = babelHelpers.taggedTemplateLiteralLoose(["media entry is missing from index db. It is required to retry download by resigning cdn url: externalId: ", "."])), t), r.endFail("missing-media");
			});
		});
	}), te = O.makeMsgrTransactor({
		media: B.READWRITE,
		messages: B.READWRITE
	}, "updateMediaWithDownloadedChunkBlob", function(e) {
		return (function(t, n) {
			return o("MAWMediaManagementTxns").updateMediaEntryWithValidatedMediaInfo(e, t, n);
		});
	});
	function ne(e) {
		var t = Math.floor(e / 1e3);
		return t > 0 ? t : e;
	}
	function re(e) {
		return e == null ? !1 : e === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY || e === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_MENTION;
	}
	function oe(e) {
		return ae.apply(this, arguments);
	}
	function ae() {
		return ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, a = e.decodedMediaEntry, i = e.isEBDownloadEnforced, l = e.mediaDownloadRequest, s = e.protocolMsgId, u = e.retryPayload, c = yield o("MAWGetMsgForProtocolMsgIdTxn").getMsgForProtocolMsgIdTxn(s);
			if (c.success === !0 && re(c.value.xmaMessageType)) return q.DEBUG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
				"Skipping media restore for expirable XMA. externalId ",
				". xmamessageType: ",
				""
			])), s.externalId, c.value.xmaMessageType), (W || (W = n("Promise"))).resolve();
			var d = s.externalId;
			o("MAWMediaRetryInfo").setRetriedMediaInfo(s.externalId, l);
			var m = ((t = a.mediaKeyTimestamp) != null ? t : 0) > 1725105600, p = {
				bool: {
					is_after_S441705_fix: m,
					isEBDownloadEnforced: i
				},
				int: { mediaKeyTimestamp: a.mediaKeyTimestamp },
				string: {
					externalId: d,
					mediaKeyAge: o("WAGetAgeBucketForMediaKeyTimestamp").getAgeBucketForMediaKeyTimestamp(a.mediaKeyTimestamp),
					mediaType: u.mediaType,
					objectId: u.attachmentObjectId,
					restoreEntry: "EB",
					restoreMethod: "gql"
				}
			}, _ = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
				downloadEntry: "handleEchoMediaMsgsRestore",
				msgType: null,
				protocolMsgId: s,
				triggerUIView: null
			});
			_.addAnnotations(p), q.DEBUG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
				"start restore media from backup. hash: ",
				". msgId: ",
				". traceId: ",
				""
			])), o("WAHashUtils").sanitisePlaintextHash(u.plaintextHash), d, _.getQPLAttrs().instanceKey);
			var f = a.mediaKey;
			if (f == null) {
				q.WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
					"media key is missing from media entry. hash: ",
					". msgId: ",
					". traceId: ",
					""
				])), o("WAHashUtils").sanitisePlaintextHash(u.plaintextHash), d, _.getQPLAttrs().instanceKey), _.endFail("missing-media-key");
				return;
			}
			r("vulture")("QFBybXy8M_zEUC4u4Cu-Lu_px4E="), q.DEBUG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
				"resign cdn url start [gql]. hash: ",
				". msgId: ",
				". traceId: ",
				""
			])), o("WAHashUtils").sanitisePlaintextHash(u.plaintextHash), d, _.getQPLAttrs().instanceKey), o("EBLSResignCdnUrlDeferred").eblsResignCdnUrlWithGraphQL({
				chatJid: s.chat,
				deliveryObjectId: u.attachmentObjectId,
				externalId: d,
				mediaKey: f,
				mediaType: u.mediaType,
				sortOrderMs: u.messageTimeStamp
			}).catch(function(e) {
				var t = r("getErrorSafe")(e);
				q.catching(t).MUSTFIX(F || (F = babelHelpers.taggedTemplateLiteralLoose(["resign cdn url gql error"]))), _.endFail("runtime-error", { string: { restoreError: t.toString() } });
			});
		}), ae.apply(this, arguments);
	}
	function ie(e, t) {
		var n, r = [];
		return (n = e.mediaEntries) == null || n.forEach(function(e, n) {
			var a = o("WAMediaUtils").decodeMediaEntryData(e);
			a.objectId === t && r.push(n);
		}), r;
	}
	l.downloadMediaAndWriteToMediaStore = H, l.getBase64WithoutPadding = Q, l.getMediaInfo = X, l.constructMediaEntry = Y, l.constructRawDownloadableThumbnail = J, l.handleDownloadMedia = Z, l.invokeRestoreAccessCheckSprocToDownloadAttachment = ee;
}), 98);
