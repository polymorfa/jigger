__d("MAWSecureAudioAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWAudioPlayer.react",
	"MWPAudioPlayerUtils",
	"MWV2AudioAttachmentErrorPlaceholder.react",
	"mwpMessageIsReply",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(30), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPlayableUrl, c = e.mediaRenderQpl, d = e.message, m = e.outgoing, p = e.shouldDisableAutoTriggerDownload, _, f;
		t[0] !== c ? (_ = function() {
			c == null || c.addPoint("render-audio-attachment");
		}, f = [c], t[0] = c, t[1] = _, t[2] = f) : (_ = t[1], f = t[2]), u(_, f);
		var g = o("MWPAudioPlayerUtils").useCalculatePlayerWidth(), h = o("MWPAudioPlayerUtils").useCalculatePlayerHeight(o("MWPAudioPlayerUtils").UseCase.PLAYER), y;
		t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== c || t[7] !== d || t[8] !== m ? (y = function(t, o) {
			return s.jsx(r("MWV2AudioAttachmentErrorPlaceholder.react"), {
				attachment: i,
				connectBottom: n,
				connectTop: a,
				isRetryableError: t,
				mediaRenderQpl: c,
				message: d,
				onRetry: o,
				outgoing: m
			});
		}, t[3] = n, t[4] = a, t[5] = i, t[6] = c, t[7] = d, t[8] = m, t[9] = y) : y = t[9];
		var C = y, b;
		t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== C || t[14] !== l || t[15] !== c || t[16] !== d || t[17] !== m ? (b = function(t) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureAudioAttachmentContentV2.Suspense", !0),
				name: "MAWSecureAudioAttachmentContentV2.Suspense",
				children: s.jsx(r("MWAudioPlayer.react"), {
					attachment: i,
					connectBottom: n,
					connectTop: a,
					getPlayableUrl: l,
					isReply: r("mwpMessageIsReply")(d),
					isSecure: !0,
					mediaRenderQpl: c,
					message: d,
					outgoing: m,
					renderUnsupportedAttachment: function() {
						return C(!1);
					}
				})
			});
		}, t[10] = n, t[11] = a, t[12] = i, t[13] = C, t[14] = l, t[15] = c, t[16] = d, t[17] = m, t[18] = b) : b = t[18];
		var v = b, S;
		return t[19] !== n || t[20] !== a || t[21] !== i || t[22] !== C || t[23] !== c || t[24] !== m || t[25] !== h || t[26] !== g || t[27] !== p || t[28] !== v ? (S = s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			descriptionForLogging: "MAWSecureAudioAttachmentContentV2",
			errorComponentRenderer: C,
			mediaRenderQpl: c,
			outgoing: m,
			placeholderHeight: h,
			placeholderWidth: g,
			shouldDisableAutoTriggerDownload: p,
			successfulComponentRenderer: v
		}), t[19] = n, t[20] = a, t[21] = i, t[22] = C, t[23] = c, t[24] = m, t[25] = h, t[26] = g, t[27] = p, t[28] = v, t[29] = S) : S = t[29], S;
	}
	l.default = c;
}), 98);
