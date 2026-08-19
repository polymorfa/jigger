__d("WAWebBaseVideo.react", [
	"WAWebABProps",
	"WAWebNoop",
	"WAWebVideoPlayerSurface.react",
	"WAWebVideoPlayerX.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBaseVideoCommon"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"autoPlay",
		"children",
		"className",
		"ref"
	], s = [
		"onBufferUpdateComet",
		"onErrorComet",
		"onLoadedMetadataComet",
		"onTimeUpdateComet",
		"onVolumeChangeComet",
		"videoCallbacks"
	], u = [
		"autoPlay",
		"children",
		"className",
		"ref"
	], c, d = c || (c = o("react")), m = c.useImperativeHandle;
	function p(t) {
		var n = o("react-compiler-runtime").c(42), a, i, l, u, c;
		n[0] !== t ? (a = t.autoPlay, i = t.children, l = t.className, c = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = u, n[5] = c) : (a = n[1], i = n[2], l = n[3], u = n[4], c = n[5]);
		var p, _;
		if (n[6] !== u) {
			var f = u, g = f.onBufferUpdateComet, h = f.onErrorComet, y = f.onLoadedMetadataComet, C = f.onTimeUpdateComet, b = f.onVolumeChangeComet, v = f.videoCallbacks, S = babelHelpers.objectWithoutPropertiesLoose(f, s);
			_ = v, p = S, n[6] = u, n[7] = p, n[8] = _;
		} else p = n[7], _ = n[8];
		var R;
		n[9] !== a || n[10] !== p || n[11] !== u.src ? (R = {
			autoPlay: a,
			props: p,
			src: u.src
		}, n[9] = a, n[10] = p, n[11] = u.src, n[12] = R) : R = n[12];
		var L = r("useWAWebBaseVideoCommon")(R), E = L.getAudioDisabled, k = L.getBuffered, I = L.getCurrentTime, T = L.getDuration, D = L.getMuted, x = L.getPaused, $ = L.getPlaybackRate, P = L.getVolume, N = L.pause, M = L.pauseAndReset, w = L.play, A = L.setCurrentTime, F = L.setDuration, O = L.setMuted, B = L.setPlaybackRate, W = L.setRefVideo, q = L.setVolume, U = L.underlyingVideo, V = L.wrappedProps, H, G;
		if (n[13] !== E || n[14] !== k || n[15] !== I || n[16] !== T || n[17] !== D || n[18] !== x || n[19] !== $ || n[20] !== P || n[21] !== N || n[22] !== M || n[23] !== w || n[24] !== A || n[25] !== F || n[26] !== O || n[27] !== B || n[28] !== q || n[29] !== U) {
			var z;
			H = function() {
				var e;
				return {
					play: w,
					pause: N,
					getAudioDisabled: E,
					getPaused: x,
					getCurrentTime: I,
					setCurrentTime: A,
					getDuration: T,
					setDuration: F,
					getVolume: P,
					setVolume: q,
					getMuted: D,
					setMuted: O,
					getPlaybackRate: $,
					setPlaybackRate: B,
					getBuffered: k,
					underlyingVideo: U,
					pauseAndReset: M,
					end: e = r("WAWebNoop"),
					canPlay: e,
					onError: e,
					onWaiting: e
				};
			}, G = [
				w,
				N,
				E,
				x,
				I,
				A,
				T,
				F,
				P,
				q,
				D,
				O,
				$,
				B,
				k,
				U,
				M,
				z = r("WAWebNoop"),
				z,
				z,
				z
			], n[13] = E, n[14] = k, n[15] = I, n[16] = T, n[17] = D, n[18] = x, n[19] = $, n[20] = P, n[21] = N, n[22] = M, n[23] = w, n[24] = A, n[25] = F, n[26] = O, n[27] = B, n[28] = q, n[29] = U, n[30] = H, n[31] = G;
		} else H = n[30], G = n[31];
		m(c, H, G);
		var j = u.src != null ? a : void 0, K;
		n[32] !== l ? (K = l != null ? l : "x1lliihq xh8yej3 x5yr21d", n[32] = l, n[33] = K) : K = n[33];
		var Q;
		return n[34] !== i || n[35] !== p || n[36] !== W || n[37] !== j || n[38] !== K || n[39] !== _ || n[40] !== V ? (Q = d.jsx("video", babelHelpers.extends({}, _, {
			ref: W,
			autoPlay: j,
			className: K
		}, p, V, { children: i })), n[34] = i, n[35] = p, n[36] = W, n[37] = j, n[38] = K, n[39] = _, n[40] = V, n[41] = Q) : Q = n[41], Q;
	}
	var _ = {
		end: r("WAWebNoop"),
		canPlay: r("WAWebNoop"),
		onError: r("WAWebNoop"),
		onWaiting: r("WAWebNoop")
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(28), n, a, i, l;
		if (t[0] !== e) {
			var s = e.autoPlay, c = e.children, m = e.className, p = e.ref, f = babelHelpers.objectWithoutPropertiesLoose(e, u);
			n = s, a = m, l = p, i = f, t[0] = e, t[1] = n, t[2] = a, t[3] = i, t[4] = l;
		} else n = t[1], a = t[2], i = t[3], l = t[4];
		var g;
		t[5] !== a ? (g = a != null ? a : "x1lliihq xh8yej3 x5yr21d", t[5] = a, t[6] = g) : g = t[6];
		var h = n != null ? n : !1, y;
		t[7] !== i.onBufferUpdateComet || t[8] !== i.onCanPlay || t[9] !== i.onEnded || t[10] !== i.onErrorComet || t[11] !== i.onLoadedData || t[12] !== i.onLoadedMetadataComet || t[13] !== i.onPause || t[14] !== i.onPlaying || t[15] !== i.onTimeUpdateComet || t[16] !== i.onVolumeChangeComet || t[17] !== i.onWaiting || t[18] !== l ? (y = d.jsx(r("WAWebVideoPlayerSurface.react"), {
			ref: l,
			refOverrides: _,
			onBufferUpdate: i.onBufferUpdateComet,
			onCanPlay: i.onCanPlay,
			onEnded: i.onEnded,
			onError: i.onErrorComet,
			onLoadedData: i.onLoadedData,
			onLoadedMetadata: i.onLoadedMetadataComet,
			onPause: i.onPause,
			onPlaying: i.onPlaying,
			onTimeUpdate: i.onTimeUpdateComet,
			onVolumeChange: i.onVolumeChangeComet,
			onWaiting: i.onWaiting
		}), t[7] = i.onBufferUpdateComet, t[8] = i.onCanPlay, t[9] = i.onEnded, t[10] = i.onErrorComet, t[11] = i.onLoadedData, t[12] = i.onLoadedMetadataComet, t[13] = i.onPause, t[14] = i.onPlaying, t[15] = i.onTimeUpdateComet, t[16] = i.onVolumeChangeComet, t[17] = i.onWaiting, t[18] = l, t[19] = y) : y = t[19];
		var C;
		t[20] !== i.poster || t[21] !== i.src || t[22] !== h || t[23] !== y ? (C = d.jsx(r("WAWebVideoPlayerX.react"), {
			src: i.src,
			poster: i.poster,
			autoplayEnabled: h,
			children: y
		}), t[20] = i.poster, t[21] = i.src, t[22] = h, t[23] = y, t[24] = C) : C = t[24];
		var b;
		return t[25] !== g || t[26] !== C ? (b = d.jsx("div", {
			className: g,
			children: C
		}), t[25] = g, t[26] = C, t[27] = b) : b = t[27], b;
	}
	var g = o("WAWebABProps").getABPropConfigValue("wa_web_base_video_comet_video_player_enabled") ? f : p, h = g;
	l.default = h;
}), 98);
