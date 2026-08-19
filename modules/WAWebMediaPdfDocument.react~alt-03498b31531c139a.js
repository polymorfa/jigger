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
	"asyncToGeneratorRuntime",
	"react",
	"useMergeRefs",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useEffectEvent, m = u.useState;
	function p(e) {
		var t = e.containerRef, a = e.interaction, i = e.interactonRef, l = e.mediaData, u = e.msg, p = e.onClose, _ = e.onLoad, f = e.onRender, g = m(null), h = g[0], y = g[1], C = r("useMergeRefs")(t, i), b = d(function() {
			a == null || a.startInteraction();
		}), v = d(function() {
			p == null || p(), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaMissingModal.react"), { msg: u.unsafe() }));
		}), S = o("useWAWebModelValues").useModelValues(l, [
			"size",
			"filehash",
			"preview",
			"fullPreviewData",
			"filename",
			"mediaBlob",
			"mediaStage"
		]);
		return c(function() {
			b();
		}, []), c(function() {
			return o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(), function() {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
			};
		}, []), c(function() {
			function e() {
				return t.apply(this, arguments);
			}
			function t() {
				return t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (yield u.downloadMedia({
						downloadEvenIfExpensive: !0,
						rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
						isUserInitiated: !0
					}), u.mediaData != null) {
						var e = u.mediaData, t = e.filehash, n = e.mediaBlob, a = n instanceof r("WAWebMediaOpaqueData") ? n.forceToBlob() : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
						a && y(a);
					}
				}), t.apply(this, arguments);
			}
			return e(), function() {
				if (u.mediaObject) {
					var e;
					u.cancelDownload(), (e = u.mediaObject) == null || e.clearBlob({ reset: !0 });
				}
			};
		}, [u]), c(function() {
			((S == null ? void 0 : S.mediaStage) === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || (S == null ? void 0 : S.mediaStage) === o("WAWebMediaTypes").MediaDataStage.NEED_POKE) && v();
		}, [S == null ? void 0 : S.mediaStage]), !S || !h ? s.jsx(r("CometHeroHoldTrigger.react"), {
			description: "NoMedia",
			hold: !0
		}) : s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaPdfDocument",
			children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
				containerRef: C,
				mediaData: S,
				onLoad: _,
				msg: u,
				blob: h,
				onRender: f,
				onClose: p
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
