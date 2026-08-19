__d("WAWebPipMsgVideoTag.react", [
	"WAWebCometVideoPlayerUtils",
	"WAWebMsgGetters",
	"WAWebPipUrlVideoTagLoadable.react",
	"WAWebSNAPLLoggingConfig",
	"WAWebUserPrefsGeneral",
	"WAWebVideoUtils",
	"WAWebWamMsgUtils",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebCanPlaybackAudio",
	"useWAWebCometVideoPlayerStateMachine",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebOnUnmount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(t) {
		var n = o("react-compiler-runtime").c(43), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onLoadedMetadata, c;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (c = [o("WAWebMsgGetters").getId], n[3] = c) : c = n[3], o("useWAWebMsgValues").useMsgValues(a.msg.id, c);
		var d;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (d = [
			"mediaBlob",
			"streamable",
			"aspectRatio"
		], n[4] = d) : d = n[4];
		var f = o("useWAWebModelValues").useModelValues(a.mediaData, d), g = p(null), h = r("useMergeRefs")(i, g), y = o("WAWebCometVideoPlayerUtils").getChannelMediaMetadataForSNAPL(a.msg), C = y.mediaId, b = y.mediaIdString, v = !o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(a.msg), S = {
			isCopyrightMuted: v,
			mediaId: C,
			mediaIdString: b,
			msg: a.msg,
			videoOrigin: o("WAWebWamMsgUtils").getWamMessageType(a.msg)
		}, R = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(S), L = r("useWAWebCometVideoPlayerStateMachine")(S), E = L.callbacks, k = L.handleReactEffectCleanup, I = L.handleReactEffectInit, T = L.videoElementRefCallback, D, x;
		n[5] !== I ? (D = function() {
			I();
		}, x = [I], n[5] = I, n[6] = D, n[7] = x) : (D = n[6], x = n[7]), m(D, x);
		var $;
		n[8] !== k ? ($ = function() {
			k();
		}, n[8] = k, n[9] = $) : $ = n[9], r("useWAWebOnUnmount")($);
		var P;
		n[10] !== h || n[11] !== T ? (P = function(t) {
			if (g.current !== t) {
				var e = t == null ? void 0 : t.underlyingVideo();
				if (e != null && T(e), h(t), t) {
					var n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(), r = n.muted, a = n.volume;
					a != null && t.setVolume(a), t.setMuted(r);
				}
			}
		}, n[10] = h, n[11] = T, n[12] = P) : P = n[12];
		var N = r("useWAWebStableCallback")(P), M;
		n[13] !== f || n[14] !== s ? (M = function(t) {
			var e = f.aspectRatio, n = t.videoWidth !== 0 && t.videoHeight !== 0 ? t.videoWidth / t.videoHeight : void 0;
			(!e && n != null && n !== 0 || e && n != null && n !== 0 && Math.abs(n - e) > .01) && f.set({ aspectRatio: n }), s(t);
		}, n[13] = f, n[14] = s, n[15] = M) : M = n[15];
		var w = M, A;
		n[16] !== f || n[17] !== a.msg ? (A = o("WAWebVideoUtils").getVideoUrl(a.msg, f), n[16] = f, n[17] = a.msg, n[18] = A) : A = n[18];
		var F = A, O = _(F), B = O[0], W = O[1];
		B == null && F != null && W(F);
		var q = B != null ? B : F, U;
		return n[19] !== E || n[20] !== w || n[21] !== C || n[22] !== a.autoPlay || n[23] !== a.children || n[24] !== a.className || n[25] !== a.msg || n[26] !== a.onBufferUpdate || n[27] !== a.onCanPlay || n[28] !== a.onEnded || n[29] !== a.onError || n[30] !== a.onLoadedData || n[31] !== a.onPause || n[32] !== a.onPlaying || n[33] !== a.onTimeUpdate || n[34] !== a.onVolumeChange || n[35] !== a.onWaiting || n[36] !== a.poster || n[37] !== a.startTime || n[38] !== N || n[39] !== R.loggingConfig || n[40] !== R.loggingToSNAPLAdditionalData || n[41] !== q ? (U = u.jsx(o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable, {
			msg: a.msg,
			ref: N,
			url: q,
			startTime: a.startTime,
			poster: a.poster,
			className: a.className,
			onVolumeChange: a.onVolumeChange,
			onEnded: a.onEnded,
			onError: a.onError,
			onPause: a.onPause,
			onPlaying: a.onPlaying,
			onBufferUpdate: a.onBufferUpdate,
			onTimeUpdate: a.onTimeUpdate,
			onLoadedMetadata: w,
			autoPlay: a.autoPlay,
			onCanPlay: a.onCanPlay,
			onLoadedData: a.onLoadedData,
			onWaiting: a.onWaiting,
			callbacks: E,
			loggingConfig: R.loggingConfig,
			loggingToSNAPLAdditionalData: R.loggingToSNAPLAdditionalData,
			mediaId: C,
			children: a.children
		}), n[19] = E, n[20] = w, n[21] = C, n[22] = a.autoPlay, n[23] = a.children, n[24] = a.className, n[25] = a.msg, n[26] = a.onBufferUpdate, n[27] = a.onCanPlay, n[28] = a.onEnded, n[29] = a.onError, n[30] = a.onLoadedData, n[31] = a.onPause, n[32] = a.onPlaying, n[33] = a.onTimeUpdate, n[34] = a.onVolumeChange, n[35] = a.onWaiting, n[36] = a.poster, n[37] = a.startTime, n[38] = N, n[39] = R.loggingConfig, n[40] = R.loggingToSNAPLAdditionalData, n[41] = q, n[42] = U) : U = n[42], U;
	}
	l.default = f;
}), 98);
