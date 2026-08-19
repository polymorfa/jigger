__d("useWAWebBaseVideoCommon", [
	"Promise",
	"WAAbortError",
	"WALogger",
	"WAWebDomPlayVideo",
	"WAWebPttAudioChannels",
	"WAWebUA",
	"WAWebVideoPlaybackSpeed",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"useWAWebMediaStreamPlaybackMetric",
	"useWAWebOnUnmount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = ["onPlaying"], m, p, _ = p || (p = o("react")), f = _.useEffect, g = _.useRef;
	function h(t) {
		var a, i = t.autoPlay, l = t.callbacks, p = t.props, _ = t.src, h = t.srcObject, y = g(0), C = g(null), b = g(null), v = o("useWAWebMediaStreamPlaybackMetric").useMediaStreamPlaybackMetric(_, C, p), S = v.wrappedProps, R = S.onPlaying, L = babelHelpers.objectWithoutPropertiesLoose(S, d), E = (a = r("useWAWebStableCallback"))(function(e) {
			var t = C.current;
			t && (t.paused || t.videoHeight > 0 && t.videoWidth > 0 && (R == null || R(), l == null || l.onPlayingExtra == null || l.onPlayingExtra(C)));
		}), k = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = C.current;
				if (!t) return (m || (m = n("Promise"))).reject(r("err")("cannot play unmounted video"));
				if (!t.paused) return (m || (m = n("Promise"))).resolve();
				t.removeEventListener("playing", E);
				try {
					yield r("WAWebDomPlayVideo")(t), t.addEventListener("playing", E), E();
				} catch (n) {
					var a, i, l, u;
					if (t.addEventListener("playing", E), n.name === o("WAAbortError").ABORT_ERROR) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"video.play() promise rejected w/ AbortError: ",
							", error code: ",
							""
						])), n.message, n.code);
						return;
					}
					var c = (a = (i = C.current) == null || (i = i.error) == null ? void 0 : i.message) != null ? a : "", d = (l = (u = C.current) == null || (u = u.error) == null ? void 0 : u.code) != null ? l : "";
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"video.play() promise rejected: ",
						" The error code is ",
						"."
					])), c, d), L.onError == null || L.onError(n);
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), I = a(function() {
			k();
		}), T = a(function() {
			var e = C.current;
			if ((e == null ? void 0 : e.paused) !== !0) {
				var t;
				e == null || e.pause(), l == null || l.onPauseExtra == null || l.onPauseExtra((t = e == null ? void 0 : e.currentTime) != null ? t : 0);
			}
		}), D = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.volume) != null ? e : 0;
		}), x = a(function(e) {
			C.current && (C.current.volume = e);
		}), $ = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.muted) != null ? e : !1;
		}), P = a(function() {
			return !1;
		}), N = a(function(e) {
			C.current && (C.current.muted = e);
		}), M = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.paused) != null ? e : !0;
		}), w = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.currentTime) != null ? e : 0;
		}), A = a(function(e) {
			C.current && (C.current.currentTime = e);
		}), F = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.duration) != null ? e : 0;
		}), O = a(function(e) {
			C.current && (C.current.duration = e);
		}), B = a(function() {
			var e = C.current;
			e && (e.currentTime = 0, T());
		}), W = a(function() {
			var e, t;
			return (e = (t = C.current) == null ? void 0 : t.playbackRate) != null ? e : o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE;
		}), q = a(function(e) {
			C.current && (C.current.playbackRate = e);
		}), U = a(function() {
			var e, t = (e = C.current) == null ? void 0 : e.buffered, n = [];
			if (t) for (var r = 0; r < t.length; r++) n.push([t.start(r), t.end(r)]);
			return n;
		}), V = a(function() {
			return C.current;
		}), H = function(t) {
			var e = C.current;
			if (e && (e.removeEventListener("playing", H), !e.videoHeight || !e.videoWidth)) {
				T(), I();
				var n = 6;
				y.current < n && y.current++;
				var r;
				y.current > 1 && y.current < n && (r = "the height and width of the video is not zero, count (larger than 1): " + y.current), y.current >= n && (r = "the height and width of the video is not zero, count larger than " + y.current), r != null && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed! ", ""])), r).sendLogs("base-video-non-zero-height-and-width");
			}
		}, G = a(function(e, t) {
			if (i === !0) {
				e.removeEventListener("playing", H), e.addEventListener("playing", H);
				var n = e.srcObject;
				(n != null || t && e.paused) && I();
			}
		}), z = a(function(e) {
			var t;
			e !== C.current && ((t = C.current) == null || t.removeEventListener("playing", E), b.current == null || b.current(), C.current = e, e != null && (b.current = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(e), "srcObject" in e && h ? e.srcObject = h : e.src || o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["srcObject is not supported in video tag while src is not set."]))), e.addEventListener("playing", E), i === !0 && G(e, o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari)));
		});
		return f(function() {
			var e = C.current;
			e != null && i === !0 && G(e, !0);
		}, [i]), r("useWAWebOnUnmount")(function() {
			b.current == null || b.current();
		}), {
			videoRef: C,
			autoPlayErrorCountRef: y,
			unregisterFromAudioChannelRef: b,
			wrappedProps: L,
			handlePlaying: E,
			play: I,
			pause: T,
			getAudioDisabled: P,
			getVolume: D,
			setVolume: x,
			getMuted: $,
			setMuted: N,
			getPaused: M,
			getCurrentTime: w,
			setCurrentTime: A,
			getDuration: F,
			setDuration: O,
			pauseAndReset: B,
			getPlaybackRate: W,
			setPlaybackRate: q,
			getBuffered: U,
			underlyingVideo: V,
			setRefVideo: z
		};
	}
	l.default = h;
}), 98);
