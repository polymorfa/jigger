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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(30), n = e.isPreview, r = e.mediaData, a = e.msg, i = e.playbackController, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = ["waveform", "duration"], t[0] = l) : l = t[0];
		var u = o("useWAWebModelValues").useModelValues(r, l), c;
		t[1] !== u || t[2] !== i.duration ? (c = Number.isNaN(i.duration) ? o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(u) : i.duration / 1e3, t[1] = u, t[2] = i.duration, t[3] = c) : c = t[3];
		var d = c, m;
		t[4] !== a ? (m = v(a), t[4] = a, t[5] = m) : m = t[5];
		var p = m, g;
		t[6] !== d || t[7] !== n || t[8] !== u || t[9] !== i ? (g = n ? null : s.jsx(R, {
			duration: d,
			playbackController: i,
			waveformData: u.waveform
		}), t[6] = d, t[7] = n, t[8] = u, t[9] = i, t[10] = g) : g = t[10];
		var y = g, C;
		t[11] !== d || t[12] !== n || t[13] !== i ? (C = n ? null : s.jsx(S, {
			duration: d,
			playbackController: i
		}), t[11] = d, t[12] = n, t[13] = i, t[14] = C) : C = t[14];
		var b = C, L, E;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x1czfd9k xwc1p85 x1nh4oco xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x17t9dm2" }, E = { className: "xni59qk xy75621 x187xtus xcxhlts xx6jrq6 x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6" }, t[15] = L, t[16] = E) : (L = t[15], E = t[16]);
		var k;
		t[17] !== a.senderObj.id ? (k = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.senderObj.id,
			size: _
		}), t[17] = a.senderObj.id, t[18] = k) : k = t[18];
		var I;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (I = "x11uqc5h x10l6tqk x18vhi92 x1coevs8", t[19] = I) : I = t[19];
		var T;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (T = s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, {
			width: f,
			height: f,
			innerStyles: {
				background: h.background,
				primary: h.primary
			}
		}), t[20] = T) : T = t[20];
		var D;
		t[21] !== p ? (D = s.jsx("span", {
			className: I,
			style: p,
			children: T
		}), t[21] = p, t[22] = D) : D = t[22];
		var x;
		t[23] !== D || t[24] !== k ? (x = s.jsxs("div", babelHelpers.extends({}, E, { children: [k, D] })), t[23] = D, t[24] = k, t[25] = x) : x = t[25];
		var $;
		return t[26] !== x || t[27] !== b || t[28] !== y ? ($ = s.jsxs("div", babelHelpers.extends({}, L, { children: [
			x,
			y,
			b
		] })), t[26] = x, t[27] = b, t[28] = y, t[29] = $) : $ = t[29], $;
	}
	l.default = L;
}), 98);
