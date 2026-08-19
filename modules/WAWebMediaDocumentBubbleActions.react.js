__d("WAWebMediaDocumentBubbleActions.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAWebCmd",
	"WAWebEnvironment",
	"WAWebFileSaver",
	"WAWebMediaDocumentUtils",
	"WAWebMediaTypes",
	"WAWebMessageBubbleActions.react",
	"WAWebNoop",
	"WAWebStateUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"cr:12467",
	"cr:7565",
	"getErrorSafe",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P = $ || ($ = o("react"));
	function N(t) {
		var a = t.msg, i = o("WAWebMediaDocumentUtils").useIsFileInCacheState(a.unsafe()), l = o("WAWebMediaDocumentUtils").useIsFileSavedOnFileSystem(a.unsafe()), $ = o("useWAWebModelValues").useModelValues(a.mediaData, [
			"mediaStage",
			"filehash",
			"filename",
			"mimetype"
		]), N = function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] handleViewButtonClick triggered for msg: ",
				", filename: ",
				""
			])), a.id.toString(), $.filename || "null"), o("WAWebCmd").Cmd.mediaViewerModal({
				msg: o("WAWebStateUtils").unproxy(a).unsafe(),
				shouldShowAllMedia: !1
			});
		}, M = function() {
			if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] handleOpenButtonClick triggered for msg: ",
				", filename: ",
				""
			])), a.id.toString(), $.filename || "null"), n("cr:7565") == null) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleOpenButtonClick, msg: ", ""])), a.id.toString());
				return;
			}
			var e = o("WAWebStateUtils").unproxy(a).unsafe();
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Displaying file opening toast and initiating file open for msg: ", ""])), a.id.toString()), o("WAWebMediaDocumentUtils").displayFileOpeningToast(e), n("cr:7565").openMediaFile(e).then(function() {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Successfully opened media file for msg: ", ""])), a.id.toString());
			}).catch(function(e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Failed to open media file for msg ", ""])), a.id.toString()).catching(r("getErrorSafe")(e));
			});
		}, w = function() {
			o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] handleSaveAsButtonClick triggered for msg: ",
				", filename: ",
				""
			])), a.id.toString(), $.filename || "null");
			try {
				var e = o("WAWebStateUtils").unproxy(a).unsafe();
				if ((n("cr:12467") == null ? void 0 : n("cr:12467").trySaveAs(e)) === !0) return;
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Initiating FileSaver download for msg: ", ""])), a.id.toString()), o("WAWebFileSaver").FileSaver.initDownload(e), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Successfully initiated save as for msg: ", ""])), a.id.toString());
			} catch (e) {
				o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Failed to initiate save as for msg ", ""])), a.id.toString()).catching(r("getErrorSafe")(e));
			}
		}, A = function() {
			if (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] handleDownloadButtonClick triggered for msg: ",
				", filename: ",
				""
			])), a.id.toString(), $.filename || "null"), n("cr:7565") == null) {
				o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleDownloadButtonClick, msg: ", ""])), a.id.toString());
				return;
			}
			var e = o("WAWebStateUtils").unproxy(a).unsafe();
			o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Initiating file save for msg: ", ""])), a.id.toString()), n("cr:7565").saveMediaFile(e, !0).then(function() {
				o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Successfully downloaded/saved media file for msg: ", ""])), a.id.toString()), o("WAWebMediaDocumentUtils").displayDownloadingToast(e);
			}).catch(function(e) {
				var t = r("getErrorSafe")(e);
				if (t.name === o("WAAbortError").ABORT_ERROR) {
					o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Download cancelled by user for msg: ", ""])), a.id.toString());
					return;
				}
				o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Failed to download/save media file for msg ", ""])), a.id.toString()).catching(t), o("WAWebToastManager").ToastManager.open(P.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
		}, F = function() {
			return r("WAWebEnvironment").isWindows ? o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType($.mimetype) ? $.mediaStage === o("WAWebMediaTypes").MediaDataStage.SENDING || $.mediaStage === o("WAWebMediaTypes").MediaDataStage.UPLOADING ? (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] Returning Uploading action for PDF msg: ",
				" (stage: ",
				")"
			])), a.id.toString(), $.mediaStage), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: r("WAWebNoop"),
				disabled: !0
			}]) : (o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Returning View/Save As actions for PDF msg: ", " (WebTP viewer enabled)"])), a.id.toString()), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: N
			}, {
				label: s._(
					/*BTDS*/
					""
				),
				onClick: w
			}]) : l === !0 || $.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || $.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT && i === !0 ? (o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMediaDocumentBubbleActions] Returning Open/Save As actions for msg: ", " (file resolved or cached)"])), a.id.toString()), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: M
			}, {
				label: s._(
					/*BTDS*/
					""
				),
				onClick: w
			}]) : $.mediaStage === o("WAWebMediaTypes").MediaDataStage.DECRYPTING || $.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING ? (o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] Returning Downloading action for msg: ",
				" (stage: ",
				")"
			])), a.id.toString(), $.mediaStage), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: r("WAWebNoop"),
				disabled: !0
			}]) : $.mediaStage === o("WAWebMediaTypes").MediaDataStage.SENDING || $.mediaStage === o("WAWebMediaTypes").MediaDataStage.UPLOADING ? (o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] Returning Uploading action for msg: ",
				" (stage: ",
				")"
			])), a.id.toString(), $.mediaStage), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: r("WAWebNoop"),
				disabled: !0
			}]) : (o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebMediaDocumentBubbleActions] Returning Download action for msg: ",
				" (default case, stage: ",
				")"
			])), a.id.toString(), $.mediaStage), [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: A
			}]) : [];
		};
		if (!r("WAWebEnvironment").isWindows || n("cr:7565") == null) return null;
		var O = F();
		return o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
			"[WAWebMediaDocumentBubbleActions] Rendering BubbleActions component for msg: ",
			" with ",
			" action(s)"
		])), a.id.toString(), O.length), P.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: O,
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.MEDIA_DOCUMENT
		});
	}
	N.displayName = N.name + " [from " + i.id + "]", l.default = N;
}), 226);
