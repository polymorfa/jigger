__d("WAWebMediaPdfDocument.react", [
	"CometHeroHoldTrigger.react",
	"WAWebErrorBoundary.react",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaMissingModal.react",
	"WAWebMediaOpaqueData",
	"WAWebMediaPdfDocumentPreview.react",
	"WAWebMediaTypes",
	"WAWebModalManager",
	"WAWebTPPdfViewerQpl",
	"WAWebWamEnumWebcRmrReasonCode",
	"react",
	"useMergeRefs",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useEffectEvent, m = u.useState;
	function p(e) {
		var t = e.containerRef, n = e.interaction, a = e.interactonRef, i = e.mediaData, l = e.msg, u = e.onClose, p = e.onLoad, _ = e.onRender, f = m(null), g = f[0], h = f[1], y = r("useMergeRefs")(t, a), C = d(function() {
			n == null || n.startInteraction();
		}), b = d(function() {
			u == null || u(), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaMissingModal.react"), { msg: l.unsafe() }));
		}), v = o("useWAWebModelValues").useModelValues(i, [
			"size",
			"filehash",
			"preview",
			"fullPreviewData",
			"filename",
			"mediaBlob",
			"mediaStage"
		]);
		return c(function() {
			C();
		}, []), c(function() {
			return o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(), function() {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
			};
		}, []), c(function() {
			async function e() {
				if (await l.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
					isUserInitiated: !0
				}), l.mediaData != null) {
					var e = l.mediaData, t = e.filehash, n = e.mediaBlob, a = n instanceof r("WAWebMediaOpaqueData") ? n.forceToBlob() : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
					a && h(a);
				}
			}
			return e(), function() {
				if (l.mediaObject) {
					var e;
					l.cancelDownload(), (e = l.mediaObject) == null || e.clearBlob({ reset: !0 });
				}
			};
		}, [l]), c(function() {
			((v == null ? void 0 : v.mediaStage) === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || (v == null ? void 0 : v.mediaStage) === o("WAWebMediaTypes").MediaDataStage.NEED_POKE) && b();
		}, [v == null ? void 0 : v.mediaStage]), !v || !g ? s.jsx(r("CometHeroHoldTrigger.react"), {
			description: "NoMedia",
			hold: !0
		}) : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaPdfDocument",
			children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
				containerRef: y,
				mediaData: v,
				onLoad: p,
				msg: l,
				blob: g,
				onRender: _,
				onClose: u
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
