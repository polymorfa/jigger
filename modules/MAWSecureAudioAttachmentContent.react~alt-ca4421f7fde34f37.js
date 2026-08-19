__d("MAWSecureAudioAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWAudioPlayer.react",
	"MWPAudioPlayerUtils",
	"MWV2AudioAttachmentErrorPlaceholder.react",
	"mwpMessageIsReply",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.dbAttachment, i = e.getPlayableUrl, l = e.mediaRenderQpl, c = e.message, d = e.outgoing, m = e.shouldDisableAutoTriggerDownload;
		u(function() {
			l == null || l.addPoint("render-audio-attachment");
		}, [l]);
		var p = o("MWPAudioPlayerUtils").useCalculatePlayerWidth(), _ = o("MWPAudioPlayerUtils").useCalculatePlayerHeight(o("MWPAudioPlayerUtils").UseCase.PLAYER), f = function(o, i) {
			return s.jsx(r("MWV2AudioAttachmentErrorPlaceholder.react"), {
				attachment: a,
				connectBottom: t,
				connectTop: n,
				isRetryableError: o,
				mediaRenderQpl: l,
				message: c,
				onRetry: i,
				outgoing: d
			});
		}, g = function(o) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: o("MAWSecureAudioAttachmentContentV2.Suspense", !0),
				name: "MAWSecureAudioAttachmentContentV2.Suspense",
				children: s.jsx(r("MWAudioPlayer.react"), {
					attachment: a,
					connectBottom: t,
					connectTop: n,
					getPlayableUrl: i,
					isReply: r("mwpMessageIsReply")(c),
					isSecure: !0,
					mediaRenderQpl: l,
					message: c,
					outgoing: d,
					renderUnsupportedAttachment: function() {
						return f(!1);
					}
				})
			});
		};
		return s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: t,
			connectTop: n,
			dbAttachment: a,
			descriptionForLogging: "MAWSecureAudioAttachmentContentV2",
			errorComponentRenderer: f,
			mediaRenderQpl: l,
			outgoing: d,
			placeholderHeight: _,
			placeholderWidth: p,
			shouldDisableAutoTriggerDownload: m,
			successfulComponentRenderer: g
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
