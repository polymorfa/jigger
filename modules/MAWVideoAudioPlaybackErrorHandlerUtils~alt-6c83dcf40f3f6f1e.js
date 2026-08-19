__d("MAWVideoAudioPlaybackErrorHandlerUtils", [
	"fbt",
	"BaseMiddot.react",
	"I64",
	"LSIntEnum",
	"MWXLink.react",
	"MessagingAttachmentType",
	"MessengerWebUXLoggerImpl",
	"ReQL",
	"ReQLSuspense",
	"UserAgent",
	"react",
	"useMAWMediaDownloadStatus",
	"useMWV2MediaViewerSecurePlayableUrl_CausesSuspense",
	"useReStore",
	"useShouldShowPlaybackErrorFallback",
	"useShouldShowUnsupportedCodecFallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = u || (u = o("react"));
	function p(e, t, n) {
		var a, i, l = (a = r("useShouldShowPlaybackErrorFallback")(e, null)) != null ? a : !1, u = (i = r("useShouldShowUnsupportedCodecFallback")(e, null)) != null ? i : !1, p = o("MessengerWebUXLoggerImpl").useInteractionLogger(), _ = r("useMWV2MediaViewerSecurePlayableUrl_CausesSuspense")();
		if (l) return {
			downloadButton: null,
			mediaStatusText: s._(
				/*BTDS*/
				""
			),
			retryButton: null
		};
		if (u) {
			var f = (c || (c = o("I64"))).equal(e.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)), g = c.equal(e.attachmentType, d.ofNumber(r("MessagingAttachmentType").AUDIO));
			if (f) {
				var h = _(e, "MAWVideoAudioPlaybackErrorHandlerUtils");
				if (!h) return {
					downloadButton: null,
					mediaStatusText: s._(
						/*BTDS*/
						""
					),
					retryButton: null
				};
				var y = m.jsxs(m.Fragment, { children: [m.jsx(r("BaseMiddot.react"), {}), m.jsx(r("MWXLink.react"), {
					download: !0,
					href: h,
					onClick: function() {
						p == null || p({ eventName: "click_unsupported_video_download_from_mustache" });
					},
					children: s._(
						/*BTDS*/
						""
					)
				})] });
				return {
					downloadButton: y,
					mediaStatusText: s._(
						/*BTDS*/
						""
					),
					retryButton: null
				};
			}
			if (g) return {
				downloadButton: null,
				mediaStatusText: s._(
					/*BTDS*/
					""
				),
				retryButton: null
			};
		}
		var C = t ? m.jsxs(m.Fragment, { children: [m.jsx(r("BaseMiddot.react"), {}), m.jsx(r("MWXLink.react"), {
			onClick: n,
			children: s._(
				/*BTDS*/
				""
			)
		})] }) : null;
		return {
			downloadButton: null,
			mediaStatusText: s._(
				/*BTDS*/
				""
			),
			retryButton: C
		};
	}
	function _(t) {
		var n = (e || (e = r("useReStore")))(), a = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(n.tables.attachments).getKeyRange(t.threadKey, t.messageId);
		}, [n, t], i.id + ":163"), l = r("useMAWMediaDownloadStatus")(a), s = l.validationResult;
		if (a == null) return !1;
		var u = (c || (c = o("I64"))).equal(a.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (c || (c = o("I64"))).equal(a.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO));
		if (!u) return !1;
		var m = s != null ? s : {}, p = m.validatedMimeType;
		return p === "invalid-mp4";
	}
	var f = Object.freeze({
		Chrome: ["H263", "Vvc"],
		Edge: ["H263", "Vvc"],
		Firefox: [
			"H263",
			"Vvc",
			"Hevc"
		],
		Safari: [
			"H263",
			"Vvc",
			"Av1"
		]
	});
	function g(e) {
		return e == null ? !0 : r("UserAgent").isBrowser("Chrome") ? f.Chrome.includes(e) === !1 : r("UserAgent").isBrowser("Firefox") ? f.Firefox.includes(e) === !1 : r("UserAgent").isBrowser("Edge") ? f.Edge.includes(e) === !1 : r("UserAgent").isBrowser("Safari") ? f.Safari.includes(e) === !1 : !0;
	}
	function h(e, t) {
		var n = e.attachmentType, a = (c || (c = o("I64"))).equal(n, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (c || (c = o("I64"))).equal(n, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO));
		if (!a) return !1;
		var i = t != null ? t : {}, l = i.validatedMimeType, s = i.videoStreamType;
		return g(s) === !1 || l === "unsupported-video";
	}
	function y(e, t) {
		var n = e.attachmentType, a = (c || (c = o("I64"))).equal(n, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (c || (c = o("I64"))).equal(n, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO));
		if (!a) return !1;
		var i = t != null ? t : {}, l = i.validatedMimeType;
		return l === "invalid-mp4";
	}
	l.useGetMetadataForMediaNotRendered = p, l.useIsInvalidVideoMessage = _, l.isUnsupportedVideo = h, l.isInvalidVideo = y;
}), 226);
