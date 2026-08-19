__d("useMAWMaybeAutoTriggerDownload", [
	"MAWDownloadMediaInWorkerDeferred",
	"MAWMediaDownloadStatus",
	"MAWRetryReceiverFetchSticker",
	"gkx",
	"hero-tracing-placeholder",
	"isReceiverFetchSticker",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect, d = s.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(14), n = e.attachment, a = e.downloadStatusV2, i = e.downloadType, l = e.mediaRenderQpl, s = e.shouldDisableAutoTriggerDownload, m = e.triggerUIView, p = s === void 0 ? !1 : s, _;
		t[0] !== n ? (_ = r("isReceiverFetchSticker")(n), t[0] = n, t[1] = _) : _ = t[1];
		var f = _, g = !f && r("MAWMediaDownloadStatus").DOWNLOADING, h;
		t[2] !== g ? (h = [
			r("MAWMediaDownloadStatus").MISSING_FILE,
			r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE,
			r("MAWMediaDownloadStatus").AUTOMATICALLY_RETRYABLE_TIMEOUT_FAILURE,
			g
		].filter(Boolean), t[2] = g, t[3] = h) : h = t[3];
		var y = h, C = y.includes(a == null ? void 0 : a.mainMediaStatus), b = !p && C, v = d(!1), S = r("useAsyncReStore")(), R = u(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), L, E;
		t[4] !== n || t[5] !== S || t[6] !== i || t[7] !== R || t[8] !== f || t[9] !== l || t[10] !== b || t[11] !== m ? (L = function() {
			if (b && v.current === !1) {
				var e;
				v.current = !0;
				var t = r("gkx")("12935") ? (e = R.current) == null ? void 0 : e.interactionUUID : null;
				f ? o("MAWRetryReceiverFetchSticker").retryReceiverFetchSticker(S, n, l) : o("MAWDownloadMediaInWorkerDeferred").maybeDownloadMediaInWorker({
					attachment: n,
					dbPromise: S,
					downloadType: i,
					interactionId: t,
					mediaRenderQpl: l,
					triggerUIView: m
				});
			}
		}, E = [
			n,
			l,
			b,
			m,
			f,
			S,
			i,
			R
		], t[4] = n, t[5] = S, t[6] = i, t[7] = R, t[8] = f, t[9] = l, t[10] = b, t[11] = m, t[12] = L, t[13] = E) : (L = t[12], E = t[13]), c(L, E);
	}
	l.default = m;
}), 98);
