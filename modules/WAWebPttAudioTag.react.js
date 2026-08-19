__d("WAWebPttAudioTag.react", [
	"WAWebAddOnBubbleType",
	"WAWebAddOnBubblesContainer.react",
	"WAWebDebounce",
	"WAWebDomVideoDisposeMediaPlayer",
	"WAWebGetDisplayType",
	"WAWebMsgGetters",
	"WAWebPttAudioChannels",
	"WAWebSocketConstants",
	"WAWebSocketModel",
	"WAWebUA",
	"WAWebUserPrefsGeneral",
	"nullthrows",
	"react",
	"useWAWebInterval",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = r("WAWebDebounce")(function(e, t) {
		o("WAWebUserPrefsGeneral").setMediaVolumeSettings(e, t);
	}, 500);
	function p(e) {
		var t = e.autoPlay, n = e.children, a = e.className, i = e.controls, l = e.msg, u = e.onClick, p = e.onError, _ = e.playbackRate, f = e.preload, g = e.refAudio, h = e.testId, y = e.url, C = d(0), b = d(null), v = d(null), S = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebMsgGetters").getIsSentByMe]), R = S[0], L = function() {
			var e = b.current;
			v.current == null || v.current(), v.current = e == null ? null : o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(e);
		}, E = function(t) {
			$(), p == null || p(t.target.src);
		}, k = function() {
			$();
		}, I = function() {
			if (o("WAWebSocketModel").Socket.state === o("WAWebSocketConstants").SOCKET_STATE.CONNECTED) {
				if (C.current++, C.current > 40) {
					E({ target: {
						src: y,
						error: { code: window.MediaError.MEDIA_ERR_NETWORK }
					} });
					return;
				}
				var e = r("nullthrows")(b.current), t = e.buffered;
				t.length && t.end(0) > 0 && k();
			}
		}, T = r("useWAWebInterval")(I, 250), D = T[0], x = T[1];
		function $() {
			x(), C.current = 0;
		}
		var P = function() {
			C.current = 0, D();
		}, N = function() {
			var e = b.current;
			e && (e.defaultPlaybackRate !== _ || e.playbackRate !== _) && (e.defaultPlaybackRate = e.playbackRate = _ != null ? _ : 1);
		};
		c(function() {
			L(), N(), g == null || g(b);
		}, void 0), o("useWAWebListener").useListener(b.current, "error", E, { capture: !0 }), o("useWAWebListener").useListener(b.current, "playing", k), c(function() {
			var e = function() {
				var e = b.current;
				if (e) {
					var t = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(), n = t.muted, r = t.volume;
					r != null && (e.volume = r), e.muted = n;
				}
			};
			e(), L(), g == null || g(b);
			var n = b.current;
			return (o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari) && t && P(), function() {
				v.current == null || v.current(), m.flush(), o("WAWebUA").UA.isBlink && n && r("WAWebDomVideoDisposeMediaPlayer")(n);
			};
		}, []);
		var M = function() {
			var e = b.current;
			e && m(e.volume, e.muted);
		};
		o("useWAWebListener").useListener((o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari) && !t ? b.current : null, "play", P);
		var w = o("WAWebGetDisplayType").getDisplayType(l);
		return s.jsxs("div", {
			className: a,
			"data-testid": h,
			children: [s.jsx("audio", {
				ref: b,
				className: "xh8yej3",
				src: y,
				onClick: u,
				controls: i,
				preload: f,
				onVolumeChange: M,
				autoPlay: t,
				children: n
			}), s.jsx(r("WAWebAddOnBubblesContainer.react"), {
				isOutgoingMsg: R,
				displayType: w,
				bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER,
				parentIds: [l.id.toString()]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
