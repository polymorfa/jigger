__d("WAWebPipMsgVideoTag.react", [
	"WAWebCometVideoPlayerUtils",
	"WAWebMsgGetters",
	"WAWebPipUrlVideoTagLoadable.react",
	"WAWebSNAPLLoggingConfig",
	"WAWebUserPrefsGeneral",
	"WAWebVideoUtils",
	"WAWebWamMsgUtils",
	"react",
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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onLoadedMetadata, l = o("useWAWebMsgValues").useMsgValues(a.msg.id, [o("WAWebMsgGetters").getId]), s = l[0], c = o("useWAWebModelValues").useModelValues(a.mediaData, [
			"mediaBlob",
			"streamable",
			"aspectRatio"
		]), f = p(null), g = r("useMergeRefs")(n, f), h = o("WAWebCometVideoPlayerUtils").getChannelMediaMetadataForSNAPL(a.msg), y = h.mediaId, C = h.mediaIdString, b = !o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(a.msg), v = {
			isCopyrightMuted: b,
			mediaId: y,
			mediaIdString: C,
			msg: a.msg,
			videoOrigin: o("WAWebWamMsgUtils").getWamMessageType(a.msg)
		}, S = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(v), R = r("useWAWebCometVideoPlayerStateMachine")(v), L = R.callbacks, E = R.handleReactEffectCleanup, k = R.handleReactEffectInit, I = R.videoElementRefCallback;
		m(function() {
			k();
		}, [k]), r("useWAWebOnUnmount")(function() {
			E();
		});
		var T = r("useWAWebStableCallback")(function(e) {
			if (f.current !== e) {
				var t = e == null ? void 0 : e.underlyingVideo();
				if (t != null && I(t), g(e), e) {
					var n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(), r = n.muted, a = n.volume;
					a != null && e.setVolume(a), e.setMuted(r);
				}
			}
		}), D = d(function(e) {
			var t = c.aspectRatio, n = e.videoWidth !== 0 && e.videoHeight !== 0 ? e.videoWidth / e.videoHeight : void 0;
			(!t && n != null && n !== 0 || t && n != null && n !== 0 && Math.abs(n - t) > .01) && c.set({ aspectRatio: n }), i(e);
		}, [c, i]), x = o("WAWebVideoUtils").getVideoUrl(a.msg, c), $ = _(x), P = $[0], N = $[1];
		P == null && x != null && N(x);
		var M = P != null ? P : x;
		return u.jsx(o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable, {
			msg: a.msg,
			ref: T,
			url: M,
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
			onLoadedMetadata: D,
			autoPlay: a.autoPlay,
			onCanPlay: a.onCanPlay,
			onLoadedData: a.onLoadedData,
			onWaiting: a.onWaiting,
			callbacks: L,
			loggingConfig: S.loggingConfig,
			loggingToSNAPLAdditionalData: S.loggingToSNAPLAdditionalData,
			mediaId: y,
			children: a.children
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
