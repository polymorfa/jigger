__d("WAWebMediaDocumentUtils", [
	"fbt",
	"WALogger",
	"WAWebCmd",
	"WAWebDocStateControls.react",
	"WAWebEnvironment",
	"WAWebFileSaver",
	"WAWebFilenameManager",
	"WAWebFrontendMsgGetters",
	"WAWebHarmfulFileSenderRelationshipResolver",
	"WAWebHarmfulFileWarningGate",
	"WAWebHarmfulFileWarningModal.react",
	"WAWebHtmlViewerGatingUtils",
	"WAWebMediaMissingModal.react",
	"WAWebMediaStore",
	"WAWebMediaTypes",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebNoop",
	"WAWebShowMediaNotReadableModal",
	"WAWebStateUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumWebcRmrReasonCode",
	"cr:11804",
	"cr:7565",
	"getErrorSafe",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $ = x || (x = o("react")), P = x, N = P.useCallback, M = P.useEffect, w = P.useState, A = 100 * 1024 * 1024, F = 100;
	function O(e) {
		var t = o("WAWebFilenameManager").getDefaultName(e);
		o("WAWebToastManager").ToastManager.open($.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) }));
	}
	function B(e) {
		var t = o("WAWebFilenameManager").getDefaultName(e);
		o("WAWebToastManager").ToastManager.open($.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) }));
	}
	function W(e) {
		e && (e.stopPropagation(), e.preventDefault());
	}
	function q(t) {
		var n = w(!1), a = n[0], i = n[1], l = o("useWAWebModelValues").useOptionalModelValues(t.mediaData, ["mediaStage", "filehash"]), s = N(function() {
			l == null || l.filehash == null || l.mediaStage !== o("WAWebMediaTypes").MediaDataStage.INIT || o("WAWebMediaStore").LruMediaStore.has(l.filehash).then(function(e) {
				return i(e);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useIsFileInCacheState] Failed to get file from cache"]))).catching(r("getErrorSafe")(t));
			});
		}, [l, i]);
		return o("useWAWebListener").useListener(t.mediaData, "change:filehash change:mediaStage", function() {
			var e;
			((e = t.mediaData) == null ? void 0 : e.mediaStage) === o("WAWebMediaTypes").MediaDataStage.INIT && i(null), s();
		}), M(function() {
			s();
		}, [s]), a;
	}
	function U(e) {
		var t = w(null), r = t[0], a = t[1], i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, ["filehash"]), l = N(async function() {
			if (n("cr:7565") == null) {
				a(null);
				return;
			}
			if (i == null) {
				a(null);
				return;
			}
			if (i.filehash == null) {
				a(null);
				return;
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[useIsFileSavedOnFileSystem] checking fs ",
				" hash=",
				""
			])), e.id.toString(), i.filehash);
			try {
				var t = await n("cr:7565").isMediaFileSaved(e);
				a(t);
			} catch (t) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"[useIsFileSavedOnFileSystem] fs check error ",
					": ",
					""
				])), e.id.toString(), t), a(null);
			}
		}, [i, e]);
		return o("useWAWebListener").useListener(e.mediaData, "change:filehash", function() {
			l();
		}), o("useWAWebListener").useListener(e.mediaData, "mediaFileSavedOnFileSystem", function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[useIsFileSavedOnFileSystem] file saved event ", ""])), e.id.toString()), a(!0);
		}), o("useWAWebListener").useListener(e.mediaData, "mediaFileSavingFailed", function() {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[useIsFileSavedOnFileSystem] file saving failed event ", ""])), e.id.toString()), a(!1);
		}), M(function() {
			l();
		}, [l, e.id]), r;
	}
	function V(e, t) {
		t === void 0 && (t = {});
		var a = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement"), i = q(e), l = U(e), u = o("useWAWebMsgValues").useMsgValues(e.id, [
			o("WAWebMsgGetters").getIsVcardOverMmsDocument,
			o("WAWebMsgGetters").getIsFailed,
			o("WAWebMsgGetters").getIsSentByMe
		]), c = u[0], d = u[1], m = u[2], x = o("useWAWebModelValues").useModelValues(e.mediaData, [
			"mediaStage",
			"filename",
			"size",
			"filehash",
			"loadedSize",
			"mimetype"
		]), P = o("WAWebFilenameManager").getDefaultName(e), N = o("WAWebFrontendMsgGetters").getChat(e), M = function(n) {
			W(n), o("WAWebModalManager").ModalManager.open($.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }));
		}, w = function(n) {
			W(n), e.cancelDownload();
		}, V = function(n) {
			W(n), e.cancelUpload();
		}, H = function(n) {
			W(n), e.resumeUpload();
		}, G = function(n) {
			W(n), e.resumeRemoteUpload();
		}, z = async function(s) {
			if (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"[downloadMediaAsync] start ",
				" stage=",
				" size=",
				""
			])), e.id.toString(), x.mediaStage, x.size || "unknown"), W(s), n("cr:7565") != null && l === !0) o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] file in fs ", ""])), e.id.toString());
			else {
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
					"[downloadMediaAsync] downloading ",
					" expensive=",
					""
				])), e.id.toString(), x.size <= A);
				try {
					o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(x.mimetype) && (n("cr:11804") == null || n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
						source: "pdfPreviewClick",
						force: !0
					})), await e.downloadMedia({
						downloadEvenIfExpensive: x.size <= A,
						rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
						isUserInitiated: !0
					}), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Media download completed for msg ", ""])), e.id.toString());
				} catch (t) {
					o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
						"[downloadMediaAsync] Failed to download media for msg ",
						": ",
						""
					])), e.id.toString(), t);
				}
			}
			if (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"[downloadMediaAsync] Processing mediaStage ",
				" for msg ",
				""
			])), x.mediaStage, e.id.toString()), o("WAWebHarmfulFileWarningGate").shouldOpenHarmfulFileWarningModal(e)) {
				var a = o("WAWebHarmfulFileSenderRelationshipResolver").resolveHarmfulFileSenderRelationship(e), u = await new Promise(function(e) {
					o("WAWebModalManager").ModalManager.open($.jsx(r("WAWebHarmfulFileWarningModal.react"), {
						learnMoreUrl: o("WAWebHarmfulFileWarningGate").getHarmfulFileLearnMoreUrl(),
						onCancel: function() {
							o("WAWebModalManager").closeModalManager(), e(!1);
						},
						onOpen: function() {
							o("WAWebModalManager").closeModalManager(), e(!0);
						},
						senderRelationship: a
					}));
				});
				if (!u) return;
				o("WAWebHarmfulFileWarningGate").markUserAcceptedHarmfulFileWarning(e);
			}
			if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(x.mimetype)) {
				o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] opening WebTP PDF viewer ", ""])), e.id.toString()), o("WAWebCmd").Cmd.mediaViewerModal({
					msg: o("WAWebStateUtils").unproxy(e.unsafe()),
					getZoomNode: t.getZoomNode,
					shouldShowAllMedia: !1
				});
				return;
			}
			switch (x.mediaStage) {
				case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
				case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
					if (c !== !0) {
						var d = o("WAWebStateUtils").unproxy(e.unsafe());
						if (t.forceDownload === !0) {
							o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Force download for msg ", ""])), e.id.toString()), O(d), await o("WAWebFileSaver").FileSaver.downloadAsync(d);
							break;
						}
						var m = n("cr:7565") != null && (l === !0 || i === !0);
						o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
							"[downloadMediaAsync] file check ",
							" canOpen=",
							""
						])), e.id.toString(), m), n("cr:7565") && m === !0 ? (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Opening existing file for msg ", ""])), e.id.toString()), B(d), await n("cr:7565").openMediaFile(d)) : n("cr:7565") && m === !1 ? (o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] saving to Windows fs ", ""])), e.id.toString()), O(d), await n("cr:7565").saveMediaFile(d)) : o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(x.mimetype, N.id) ? o("WAWebCmd").Cmd.mediaViewerModal({
							msg: o("WAWebStateUtils").unproxy(e.unsafe()),
							getZoomNode: t.getZoomNode,
							shouldShowAllMedia: !1
						}) : (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Using FileSaver to download for msg ", ""])), e.id.toString()), O(d), await o("WAWebFileSaver").FileSaver.downloadAsync(d));
					}
					break;
				case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
				case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
					o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Media missing, showing modal for msg ", ""])), e.id.toString()), M();
					break;
				case o("WAWebMediaTypes").MediaDataStage.INIT:
					if (c !== !0 && n("cr:7565") != null && l === !0) {
						var D = o("WAWebStateUtils").unproxy(e.unsafe());
						o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Opening existing file for msg ", ""])), e.id.toString()), B(D), await n("cr:7565").openMediaFile(D);
					} else o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] INIT state, awaiting download ", ""])), e.id.toString());
					break;
				default:
			}
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[downloadMediaAsync] Completed processing for msg ", ""])), e.id.toString());
		}, j = function(n) {
			z(n).catch(function(t) {
				o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[downloadMedia] Failed to download media for msg ", ""])), e.id.toString()).catching(r("getErrorSafe")(t));
			});
		}, K = null, Q = { onClick: r("WAWebNoop") }, X = l === !0 || x.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || x.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT && (a ? i !== !1 : i === !0), Y = function() {
			return t.forceDownload === !0 ? s._(
				/*BTDS*/
				"",
				[s._param("name", P)]
			) : X && r("WAWebEnvironment").isWindows ? s._(
				/*BTDS*/
				"",
				[s._param("name", P)]
			) : o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(x.mimetype) || o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(x.mimetype, N.id) ? s._(
				/*BTDS*/
				"",
				[s._param("name", P)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("name", P)]
			);
		};
		switch (x.mediaStage) {
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
			case o("WAWebMediaTypes").MediaDataStage.INIT:
				Q.onClick = j, Q.title = Y(), K = !X && !r("WAWebEnvironment").isWindows && !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(x.mimetype) && !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(x.mimetype, N.id) ? $.jsx(o("WAWebDocStateControls.react").Download, { onClick: j }) : null;
				break;
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
				K = a ? $.jsx(o("WAWebDocStateControls.react").Pending, {
					canCancel: !1,
					outgoingMsg: m,
					value: F
				}) : $.jsx(o("WAWebDocStateControls.react").Pending, { outgoingMsg: m });
				break;
			case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
				var J = x.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING ? w : V;
				K = $.jsx(o("WAWebDocStateControls.react").Pending, {
					canCancel: !0,
					onClick: J,
					outgoingMsg: m,
					value: x.loadedSize != null && x.size != null && x.size > 0 ? Math.ceil(x.loadedSize / x.size * 100) : void 0
				}), Q.onClick = J;
				break;
			}
			case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
				K = $.jsx(o("WAWebDocStateControls.react").Upload, {}), Q.onClick = H;
				break;
			case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
				K = $.jsx(o("WAWebDocStateControls.react").Upload, {}), Q.onClick = G;
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN: break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
				Q.onClick = r("WAWebShowMediaNotReadableModal");
				break;
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
				Q.onClick = M;
				break;
			case o("WAWebMediaTypes").MediaDataStage.SENDING:
				K = d ? null : $.jsx(o("WAWebDocStateControls.react").Pending, { outgoingMsg: m });
				break;
			default: K = $.jsx(o("WAWebDocStateControls.react").Pending, { outgoingMsg: m });
		}
		return [Q, K];
	}
	l.displayDownloadingToast = O, l.displayFileOpeningToast = B, l.useIsFileInCacheState = q, l.useIsFileSavedOnFileSystem = U, l.useMediaAction = V;
}), 226);
