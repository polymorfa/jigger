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
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useEffectEvent, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(27), a = e.containerRef, i = e.interaction, l = e.interactonRef, u = e.mediaData, p = e.msg, f = e.onClose, g = e.onLoad, h = e.onRender, y = m(null), C = y[0], b = y[1], v = r("useMergeRefs")(a, l), S;
		t[0] !== i ? (S = function() {
			i == null || i.startInteraction();
		}, t[0] = i, t[1] = S) : S = t[1];
		var R = d(S), L;
		t[2] !== p || t[3] !== f ? (L = function() {
			f == null || f(), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaMissingModal.react"), { msg: p.unsafe() }));
		}, t[2] = p, t[3] = f, t[4] = L) : L = t[4];
		var E = d(L), k;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (k = [
			"size",
			"filehash",
			"preview",
			"fullPreviewData",
			"filename",
			"mediaBlob",
			"mediaStage"
		], t[5] = k) : k = t[5];
		var I = o("useWAWebModelValues").useModelValues(u, k), T;
		t[6] !== R ? (T = function() {
			R();
		}, t[6] = R, t[7] = T) : T = t[7];
		var D;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (D = [], t[8] = D) : D = t[8], c(T, D);
		var x;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (x = [], t[9] = x) : x = t[9], c(_, x);
		var $, P;
		t[10] !== p ? ($ = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (yield p.downloadMedia({
						downloadEvenIfExpensive: !0,
						rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
						isUserInitiated: !0
					}), p.mediaData != null) {
						var e = p.mediaData, t = e.filehash, n = e.mediaBlob, a = n instanceof r("WAWebMediaOpaqueData") ? n.forceToBlob() : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
						a && b(a);
					}
				});
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			})();
			return e(), (function() {
				if (p.mediaObject) {
					var e;
					p.cancelDownload(), (e = p.mediaObject) == null || e.clearBlob({ reset: !0 });
				}
			});
		}, P = [p], t[10] = p, t[11] = $, t[12] = P) : ($ = t[11], P = t[12]), c($, P);
		var N;
		t[13] !== E || t[14] !== (I == null ? void 0 : I.mediaStage) ? (N = function() {
			((I == null ? void 0 : I.mediaStage) === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || (I == null ? void 0 : I.mediaStage) === o("WAWebMediaTypes").MediaDataStage.NEED_POKE) && E();
		}, t[13] = E, t[14] = I == null ? void 0 : I.mediaStage, t[15] = N) : N = t[15];
		var M = I == null ? void 0 : I.mediaStage, w;
		if (t[16] !== M ? (w = [M], t[16] = M, t[17] = w) : w = t[17], c(N, w), !I || !C) {
			var A;
			return t[18] === Symbol.for("react.memo_cache_sentinel") ? (A = s.jsx(r("CometHeroHoldTrigger.react"), {
				description: "NoMedia",
				hold: !0
			}), t[18] = A) : A = t[18], A;
		}
		var F;
		return t[19] !== C || t[20] !== I || t[21] !== v || t[22] !== p || t[23] !== f || t[24] !== g || t[25] !== h ? (F = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaPdfDocument",
			children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
				containerRef: v,
				mediaData: I,
				onLoad: g,
				msg: p,
				blob: C,
				onRender: h,
				onClose: f
			})
		}), t[19] = C, t[20] = I, t[21] = v, t[22] = p, t[23] = f, t[24] = g, t[25] = h, t[26] = F) : F = t[26], F;
	}
	function _() {
		return o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(), f;
	}
	function f() {
		o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
	}
	l.default = p;
}), 98);
