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
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useEffectEvent, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(27), n = e.containerRef, a = e.interaction, i = e.interactonRef, l = e.mediaData, u = e.msg, p = e.onClose, f = e.onLoad, g = e.onRender, h = m(null), y = h[0], C = h[1], b = r("useMergeRefs")(n, i), v;
		t[0] !== a ? (v = function() {
			a == null || a.startInteraction();
		}, t[0] = a, t[1] = v) : v = t[1];
		var S = d(v), R;
		t[2] !== u || t[3] !== p ? (R = function() {
			p == null || p(), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaMissingModal.react"), { msg: u.unsafe() }));
		}, t[2] = u, t[3] = p, t[4] = R) : R = t[4];
		var L = d(R), E;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (E = [
			"size",
			"filehash",
			"preview",
			"fullPreviewData",
			"filename",
			"mediaBlob",
			"mediaStage"
		], t[5] = E) : E = t[5];
		var k = o("useWAWebModelValues").useModelValues(l, E), I;
		t[6] !== S ? (I = function() {
			S();
		}, t[6] = S, t[7] = I) : I = t[7];
		var T;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (T = [], t[8] = T) : T = t[8], c(I, T);
		var D;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (D = [], t[9] = D) : D = t[9], c(_, D);
		var x, $;
		t[10] !== u ? (x = function() {
			var e = async function() {
				if (await u.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
					isUserInitiated: !0
				}), u.mediaData != null) {
					var e = u.mediaData, t = e.filehash, n = e.mediaBlob, a = n instanceof r("WAWebMediaOpaqueData") ? n.forceToBlob() : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
					a && C(a);
				}
			};
			return e(), (function() {
				if (u.mediaObject) {
					var e;
					u.cancelDownload(), (e = u.mediaObject) == null || e.clearBlob({ reset: !0 });
				}
			});
		}, $ = [u], t[10] = u, t[11] = x, t[12] = $) : (x = t[11], $ = t[12]), c(x, $);
		var P;
		t[13] !== L || t[14] !== (k == null ? void 0 : k.mediaStage) ? (P = function() {
			((k == null ? void 0 : k.mediaStage) === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || (k == null ? void 0 : k.mediaStage) === o("WAWebMediaTypes").MediaDataStage.NEED_POKE) && L();
		}, t[13] = L, t[14] = k == null ? void 0 : k.mediaStage, t[15] = P) : P = t[15];
		var N = k == null ? void 0 : k.mediaStage, M;
		if (t[16] !== N ? (M = [N], t[16] = N, t[17] = M) : M = t[17], c(P, M), !k || !y) {
			var w;
			return t[18] === Symbol.for("react.memo_cache_sentinel") ? (w = s.jsx(r("CometHeroHoldTrigger.react"), {
				description: "NoMedia",
				hold: !0
			}), t[18] = w) : w = t[18], w;
		}
		var A;
		return t[19] !== y || t[20] !== k || t[21] !== b || t[22] !== u || t[23] !== p || t[24] !== f || t[25] !== g ? (A = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaPdfDocument",
			children: s.jsx(r("WAWebMediaPdfDocumentPreview.react"), {
				containerRef: b,
				mediaData: k,
				onLoad: f,
				msg: u,
				blob: y,
				onRender: g,
				onClose: p
			})
		}), t[19] = y, t[20] = k, t[21] = b, t[22] = u, t[23] = p, t[24] = f, t[25] = g, t[26] = A) : A = t[26], A;
	}
	function _() {
		return o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_viewer"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewOpen(), f;
	}
	function f() {
		o("WAWebTPPdfViewerQpl").pdfViewerQpl.pdfPreviewClose();
	}
	l.default = p;
}), 98);
