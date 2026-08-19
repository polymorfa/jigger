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
	"react-compiler-runtime",
	"useMAWMediaDownloadStatus",
	"useMWV2MediaViewerSecurePlayableUrl_CausesSuspense",
	"useReStore",
	"useShouldShowPlaybackErrorFallback",
	"useShouldShowUnsupportedCodecFallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = u || (u = o("react"));
	function p(e, t, n) {
		var a, i, l = o("react-compiler-runtime").c(22), u = (a = r("useShouldShowPlaybackErrorFallback")(e, null)) != null ? a : !1, p = (i = r("useShouldShowUnsupportedCodecFallback")(e, null)) != null ? i : !1, _ = o("MessengerWebUXLoggerImpl").useInteractionLogger(), f = r("useMWV2MediaViewerSecurePlayableUrl_CausesSuspense")();
		if (u) {
			var g;
			return l[0] === Symbol.for("react.memo_cache_sentinel") ? (g = {
				downloadButton: null,
				mediaStatusText: s._(
					/*BTDS*/
					""
				),
				retryButton: null
			}, l[0] = g) : g = l[0], g;
		}
		if (p) {
			var h = (c || (c = o("I64"))).equal(e.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)), y = c.equal(e.attachmentType, d.ofNumber(r("MessagingAttachmentType").AUDIO));
			if (h) {
				var C;
				l[1] !== e || l[2] !== f ? (C = f(e, "MAWVideoAudioPlaybackErrorHandlerUtils"), l[1] = e, l[2] = f, l[3] = C) : C = l[3];
				var b = C;
				if (!b) {
					var v;
					return l[4] === Symbol.for("react.memo_cache_sentinel") ? (v = {
						downloadButton: null,
						mediaStatusText: s._(
							/*BTDS*/
							""
						),
						retryButton: null
					}, l[4] = v) : v = l[4], v;
				}
				var S;
				l[5] === Symbol.for("react.memo_cache_sentinel") ? (S = m.jsx(r("BaseMiddot.react"), {}), l[5] = S) : S = l[5];
				var R;
				l[6] !== _ ? (R = function() {
					_ == null || _({ eventName: "click_unsupported_video_download_from_mustache" });
				}, l[6] = _, l[7] = R) : R = l[7];
				var L;
				l[8] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), l[8] = L) : L = l[8];
				var E;
				l[9] !== b || l[10] !== R ? (E = m.jsxs(m.Fragment, { children: [S, m.jsx(r("MWXLink.react"), {
					download: !0,
					href: b,
					onClick: R,
					children: L
				})] }), l[9] = b, l[10] = R, l[11] = E) : E = l[11];
				var k = E, I;
				l[12] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), l[12] = I) : I = l[12];
				var T;
				return l[13] !== k ? (T = {
					downloadButton: k,
					mediaStatusText: I,
					retryButton: null
				}, l[13] = k, l[14] = T) : T = l[14], T;
			}
			if (y) {
				var D;
				return l[15] === Symbol.for("react.memo_cache_sentinel") ? (D = {
					downloadButton: null,
					mediaStatusText: s._(
						/*BTDS*/
						""
					),
					retryButton: null
				}, l[15] = D) : D = l[15], D;
			}
		}
		var x;
		l[16] !== t || l[17] !== n ? (x = t ? m.jsxs(m.Fragment, { children: [m.jsx(r("BaseMiddot.react"), {}), m.jsx(r("MWXLink.react"), {
			onClick: n,
			children: s._(
				/*BTDS*/
				""
			)
		})] }) : null, l[16] = t, l[17] = n, l[18] = x) : x = l[18];
		var $ = x, P;
		l[19] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), l[19] = P) : P = l[19];
		var N;
		return l[20] !== $ ? (N = {
			downloadButton: null,
			mediaStatusText: P,
			retryButton: $
		}, l[20] = $, l[21] = N) : N = l[21], N;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(7), a = (e || (e = r("useReStore")))(), l;
		n[0] !== a.tables.attachments || n[1] !== t.messageId || n[2] !== t.threadKey ? (l = function() {
			return o("ReQL").fromTableAscending(a.tables.attachments).getKeyRange(t.threadKey, t.messageId);
		}, n[0] = a.tables.attachments, n[1] = t.messageId, n[2] = t.threadKey, n[3] = l) : l = n[3];
		var s;
		n[4] !== a || n[5] !== t ? (s = [a, t], n[4] = a, n[5] = t, n[6] = s) : s = n[6];
		var u = o("ReQLSuspense").useFirst(l, s, i.id + ":163"), m = r("useMAWMediaDownloadStatus")(u), p = m.validationResult;
		if (u == null) return !1;
		var _ = (c || (c = o("I64"))).equal(u.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (c || (c = o("I64"))).equal(u.attachmentType, (d || (d = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO));
		if (!_) return !1;
		var f = p != null ? p : {}, g = f.validatedMimeType;
		return g === "invalid-mp4";
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
