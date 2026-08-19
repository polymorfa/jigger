__d("WAWebStatusAudioBubble.react", [
	"WAPttComposerScaleWaveform",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebMsgGetters",
	"WAWebNoop",
	"WAWebPttComposerWaveform.react",
	"WAWebPttGetDurationFromMediaOrProtobuf",
	"WAWebPttStatusIconStyleable.react",
	"WAWebStatusEventHandlersMap",
	"react",
	"useWAWebAnimationFrames",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useState, p = 15, _ = 72, f = 27, g = 280, h = {
		background: {
			fill: "x1kihv7h",
			strokeWidth: "xvlca1e",
			stroke: "xbpp7hn",
			filter: "x1olsc1v",
			$$css: !0
		},
		primary: {
			stroke: "xeutv01",
			$$css: !0
		}
	}, y = "x18re5ia-B", C = .15, b = .25, v = function(t) {
		var e = o("WAWebMsgGetters").getStatusCanvasColor(t);
		return e == null ? null : {
			fill: e,
			stroke: e
		};
	};
	function S(e) {
		var t = e.duration, n = e.playbackController, r = m(n.currentTime), a = r[0], i = r[1];
		return c(function() {
			var e = function(t) {
				i(t);
			};
			return n.addListeners({ onTimeUpdate: e }), function() {
				n.removeListener(o("WAWebStatusEventHandlersMap").MediaEvents.OnTimeUpdate, e);
			};
		}, []), s.jsx("div", {
			className: "xseo6mj x1hm9lzh x1i47q4g x1f6kntn xo1l8bm x10h3iyq x1gnnpzl x78zum5 x6s0dn4 xf4yft xqcmdr3 x1q3qbx4 x4hg4is",
			children: o("WAWebClock").Clock.durationStr(t - a)
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.duration, n = e.playbackController, a = e.waveformData, i = o("WAWebPttComposerWaveform.react").WaveformLocation.STATUS_MESSAGE, l = o("WAWebPttComposerWaveform.react").getWaveformBarDimensions(i), u = l.barSpacing, c = l.barWidth, p = Math.round(g / (c + u)), _ = m(n.isPlaying), f = _[0], h = _[1], y = function() {
			h(n.isPlaying);
		};
		r("useWAWebAnimationFrames")(y, { active: !0 });
		var v = d(function() {
			var e = a != null ? a : new Uint8Array(64), n = t / C, o = n * (p * b) + p, i = r("WAPttComposerScaleWaveform")(Array.from(e).map(function(e) {
				return e / 100;
			}), o);
			return i;
		}, [
			t,
			p,
			a
		]), S = d(function() {
			return s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
				getSamples: function() {
					return v;
				},
				getCurrentTime: function() {
					return n.currentTime;
				},
				getDuration: function() {
					return t + 1;
				},
				sampleRate: p,
				mode: o("WAWebPttComposerWaveform.react").WaveformMode.VOICE_STATUS,
				onSeekEnd: r("WAWebNoop"),
				location: i,
				live: f,
				heightJitterFactor: .2,
				jitterValuesCount: 20
			});
		}, [
			n,
			i,
			p,
			t,
			v,
			f
		]);
		return s.jsx("div", {
			className: "xcxhlts x1hm9lzh x1dz1jew xy75621 x78zum5 xqcmdr3 x1q3qbx4 x4hg4is",
			children: S
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.isPreview, n = e.mediaData, r = e.msg, a = e.playbackController, i = o("useWAWebModelValues").useModelValues(n, ["waveform", "duration"]), l = Number.isNaN(a.duration) ? o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(i) : a.duration / 1e3, u = v(r), c = t ? null : s.jsx(R, {
			duration: l,
			playbackController: a,
			waveformData: i.waveform
		}), d = t ? null : s.jsx(S, {
			duration: l,
			playbackController: a
		});
		return s.jsxs("div", {
			className: "x1czfd9k xwc1p85 x1nh4oco xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x17t9dm2",
			children: [
				s.jsxs("div", {
					className: "xni59qk xy75621 x187xtus xcxhlts xx6jrq6 x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6",
					children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: r.senderObj.id,
						size: _
					}), s.jsx("span", {
						className: "x11uqc5h x10l6tqk x18vhi92 x1coevs8",
						style: u,
						children: s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, {
							width: f,
							height: f,
							innerStyles: {
								background: h.background,
								primary: h.primary
							}
						})
					})]
				}),
				c,
				d
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 98);
