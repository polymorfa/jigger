__d("WAWebProcessMultipleMsgsAction", [
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAddAndReorderMsgsActionsUtils",
	"WAWebBotGenTypingIndicatorMsg",
	"WAWebBotTypes",
	"WAWebChatCollection",
	"WAWebChatGetExistingBridge",
	"WAWebChatModel",
	"WAWebFindChatAction",
	"WAWebFrontendMsgGetters",
	"WAWebGetMsgUpdatesActionsUtils",
	"WAWebGhostEphemeralChatSkip",
	"WAWebLidStatusMigrationUtils",
	"WAWebMediaAutoDownloadQueue",
	"WAWebMediaGatingUtils",
	"WAWebMediaLinkPreviewUtils",
	"WAWebMediaTypes",
	"WAWebMessageAssociationUIUtils",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebNewsletterCollection",
	"WAWebRecentStickerCollection",
	"WAWebRecentStickerCollectionMd",
	"WAWebStatusCollection",
	"WAWebStickerModel",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebThreadModelResolver",
	"WAWebThreadWriteThroughAction",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"compactMap",
	"cr:11804"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p;
	async function _(t, a, i, l, m) {
		var p, _, h = await r("WAWebGetMsgUpdatesActionsUtils")(t, a, i, m), y = h.filteredRecs, C = h.reorderRecs, b = h.updates, v = await Promise.all(b), S = v.filter(function(e) {
			return (e == null ? void 0 : e.associationType) != null;
		});
		if (o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(S), y.length === 0 && C.length === 0) {
			if (t && i.pendingMsgsDone === !0) {
				var R, L = (R = o("WAWebChatCollection").ChatCollection.get(t)) != null ? R : r("WAWebNewsletterCollection").get(t);
				L && (L.pendingMsgs = !1);
			}
			return r("compactMap")(a, function(e) {
				return o("WAWebMsgCollection").MsgCollection.get(e.id);
			});
		}
		if (!t) return g(y).then(function() {
			return a.reduce(function(e, t) {
				var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
				return n != null && o("WAWebFrontendMsgGetters").getChat(n) != null && e.push(n), e;
			}, []);
		});
		var E = self.performance.now(), k, I = a[0];
		if (o("WAWebMsgGetters").getIsStatus(I)) {
			var T, D = (T = o("WAWebMsgGetters").getSender(I)) != null ? T : I.from;
			if (r("WAWebWid").isStatus(t) && (D = I.id.fromMe ? o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow()) : I.author), D == null) {
				var x, $, P;
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"statusId null chat=",
					" sender=",
					" from=",
					" fromMe=",
					" author=",
					""
				])), t.toLogString(), (x = o("WAWebMsgGetters").getSender(I)) == null ? void 0 : x.toLogString(), ($ = I.from) == null ? void 0 : $.toLogString(), I.id.fromMe, (P = I.author) == null ? void 0 : P.toLogString());
			}
			k = o("WAWebStatusCollection").StatusCollection.find(D);
		} else {
			if (await f(t, a)) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ", ""])), t.toLogString()), r("compactMap")(a, function(e) {
				return o("WAWebMsgCollection").MsgCollection.get(e.id);
			});
			k = await o("WAWebFindChatAction").findExistingChat(t, l);
		}
		var N = await k, M = self.performance.now(), w = await g(y), A = self.performance.now(), F = i.add === "after" || i.add === "last", O = !i.isHistory, B, W, q = !1, U = N.id.isBot(), V = ((p = N.contact.businessProfile) == null ? void 0 : p.isBizBot3p) === !0;
		if ((U || V) && i.isHistory === !1) {
			var H = N.msgs.last();
			(H == null ? void 0 : H.subtype) === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE && (H == null || H.delete({ skipUpdatingSortTime: !0 }));
		}
		w.forEach(function(e) {
			e.subtype === "biz_bot_1p_disclosure" ? N.set({ bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P }) : e.subtype === "biz_bot_3p_disclosure" && N.set({ bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P });
		}), i.add === "unread" ? (B = m, N.msgChunks.push(B), W = i.firstUnreadKey) : i.add === "last" && i.resume === !0 ? (B = m, q = !0) : B = typeof m == "function" ? m() : m;
		var G = typeof B == "function" ? B() : B, z = N;
		if ((G == null ? void 0 : G.threadId) != null && N instanceof o("WAWebChatModel").Chat && (z = o("WAWebThreadModelResolver").resolveThreadOrChat(N, G.threadId)), r("WAWebAddAndReorderMsgsActionsUtils")({
			anchorMsgKey: i.anchorMsgKey,
			chatMsgsCollection: G != null ? G : N.msgs,
			firstUnreadKey: W,
			insertAfter: F,
			msgHistory: a,
			newMsgs: w,
			reorderMsgs: C,
			resetMostRecentMsgs: q,
			threadOrChat: z
		}), A - E >= 500 && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"[processMM]: ",
			" msgs findChat=",
			"ms msgPrepWork=",
			"ms"
		])), a.length, Math.round(M - E), Math.round(A - M)), N instanceof o("WAWebChatModel").Chat && (G == null || G.threadId == null) && o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(N, w), i.pendingMsgsDone === !0 && (N.pendingMsgs = !1), O && r("WAWebWid").isBroadcast(t) && !r("WAWebWid").isStatus(t) && w.forEach(function(e) {
			e && e.recvFresh && !o("WAWebMsgGetters").getIsNotification(e) && o("WAWebMsgModelUtils").broadcastFanout(e);
		}), !((_ = i.isHistory) != null && _)) {
			var j = r("compactMap")(w, function(e) {
				var t, n, r, a = o("WAWebMsgGetters").getIsSentByMe(e) && e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
				if (a && e.isAvatar !== !0) {
					var i = e.mediaData, l = e.mediaObject, s = e.id.toString(), u = l == null ? void 0 : l.entries.entries[0];
					return {
						sticker: new (o("WAWebStickerModel")).StickerModel({
							id: i.filehash,
							directPath: i.directPath,
							filehash: i.filehash,
							encFilehash: (t = u == null ? void 0 : u.getEncfilehash()) != null ? t : i.encFilehash,
							mediaKey: (n = u == null ? void 0 : u.getMediaKey()) != null ? n : i.mediaKey,
							mediaKeyTimestamp: i.mediaKeyTimestamp != null ? i.mediaKeyTimestamp : o("WATimeUtils").unixTime(),
							width: i.fullWidth,
							height: i.fullHeight,
							size: i.size,
							mimetype: i.mimetype,
							isAvatar: e.isAvatar,
							type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
							index: 0
						}),
						timestamp: (r = e.stickerSentTs) != null ? r : 0,
						msgId: s
					};
				}
			});
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["processed ", " recent sticker messages"])), j.length), j.forEach(function(e) {
				return o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.addNewSticker(e.sticker, e.msgId, e.timestamp);
			});
		}
		var K = 0, Q = r("compactMap")(w, function(e) {
			var t = e.isNewMsg && o("WAWebMsgGetters").getIsSentByMe(e) && e.type === o("WAWebMsgType").MSG_TYPE.STICKER, n = e.mediaData;
			if (t) {
				var r = e.mediaKey;
				if (r == null) {
					K++;
					return;
				}
				return {
					id: n.filehash,
					directPath: n.directPath,
					filehash: n.filehash,
					encFilehash: n.encFilehash,
					mediaKey: r,
					mediaKeyTimestamp: n.mediaKeyTimestamp != null ? n.mediaKeyTimestamp : o("WATimeUtils").unixTime(),
					width: n.fullWidth,
					height: n.fullHeight,
					size: n.size,
					mimetype: n.mimetype,
					type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
					index: 0
				};
			}
		});
		K > 0 && o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[sticker] Unexpected null media key"]))).sendLogs("sticker-unexpected-null-media-key"), o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(Q);
		var X = w.filter(function(e) {
			return !o("WAWebMsgGetters").getIsStatus(e);
		});
		if (r("compactMap")(X, function(e) {
			return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
		}).forEach(function(e) {
			o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA);
		}), !o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()) {
			var Y = w.filter(function(e) {
				return !o("WAWebMsgGetters").getIsSentByMe(e) && !o("WAWebMsgGetters").getIsStatus(e) && !o("WAWebMsgGetters").getIsNewsletterMsg(e);
			});
			r("compactMap")(Y, function(e) {
				return o("WAWebFrontendMsgGetters").getAsImage(e);
			}).forEach(function(e) {
				var t, n;
				if (!(((t = e.mediaObject) == null ? void 0 : t.contentInfo.fullPreviewData) != null || !((n = e.scanLengths) != null && n.length) || !e.scansSidecar || !e.encFilehash || !e.mediaKey)) {
					var r = o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans();
					r > 0 && o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.PJPEG_THUMBNAIL);
				}
			});
		}
		if (r("compactMap")(w, function(e) {
			return o("WAWebFrontendMsgGetters").getAsDoc(e);
		}).forEach(function(e) {
			o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL);
		}), window.setTimeout(function() {
			if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
				var e = r("compactMap")(w, function(e) {
					return o("WAWebFrontendMsgGetters").getAsDoc(e);
				}), t = e.some(function(e) {
					return o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e.mimetype);
				});
				t && (n("cr:11804") == null || n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
					source: "appStart",
					force: !0
				}));
			}
		}, 0), r("compactMap")(w, function(e) {
			return o("WAWebFrontendMsgGetters").getAsUrl(e);
		}).forEach(function(e) {
			o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t) || o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL, null);
		}), o("WAWebABProps").getABPropConfigValue("download_status_thumb_mms_enabled")) {
			var J = o("WAWebUserPrefsGeneral").getLastStatusUsage(), Z = 1e3 * 60 * 60 * 24;
			if (J == null || Date.now() - J < 14 * Z) {
				var ee = w.filter(function(e) {
					return o("WAWebMsgGetters").getIsStatus(e);
				});
				r("compactMap")(ee, function(e) {
					return o("WAWebFrontendMsgGetters").getAsImage(e) || o("WAWebFrontendMsgGetters").getAsVideo(e);
				}).forEach(function(e) {
					o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL);
				});
			}
		}
		return r("compactMap")(a, function(e) {
			return o("WAWebMsgCollection").MsgCollection.get(e.id);
		});
	}
	async function f(e, t) {
		if (!e.isUser() || t.length === 0 || !t.every(function(e) {
			return o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(e);
		})) return !1;
		var n = await o("WAWebChatGetExistingBridge").getExisting(e);
		return n == null;
	}
	async function g(e) {
		var t = o("WAWebMsgCollection").MsgCollection.add(e, { merge: !0 }), n = 0, r = t.reduce(function(e, t) {
			return t == null && n++, t != null && t.subtype !== "is_hosted_group" && e.push(t), e;
		}, []);
		if (n > 0) {
			var a = e.filter(function(e, n) {
				return t[n] == null;
			}).slice(0, 3).map(function(e) {
				return e.id;
			});
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"Get ",
				" empty messages with ids => ",
				""
			])), n, a).sendLogs("msgPrepWork-empty-message");
		}
		var i = null, l = null;
		return await Promise.all(r.map(function(e) {
			return e.waitForPrep().catch(function(t) {
				i = t, l = e;
			});
		})), i != null && l != null && o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"[msgPrepWork] id=",
			" type=",
			" subtype=",
			" hasMedia=",
			""
		])), l.id.toString(), l.type, l.subtype, l.mediaData != null).catching(i).sendLogs("bad-msg-prep"), r;
	}
	l._processMultipleMessages = _;
}), 98);
