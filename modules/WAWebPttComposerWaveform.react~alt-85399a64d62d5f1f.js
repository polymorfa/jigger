__d("WAWebPttComposerWaveform.react", [
	"fbt",
	"$InternalEnum",
	"WAMemoizeCache",
	"WAMemoizeOne",
	"WAPttComposerScaleWaveform",
	"WAPttWaveformGenerateHeightJitterValues",
	"WAWebChatThemeModeContext",
	"WAWebClock",
	"WAWebPttComposerRangeInput.react",
	"WAWebThemeContext",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebAnimationFrames",
	"useWAWebDebouncedCallback",
	"useWAWebDevicePixelRatio",
	"useWAWebMeasure"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useLayoutEffect, f = c.useMemo, g = c.useRef, h = c.useState, y = n("$InternalEnum").Mirrored([
		"DRAFT_PREVIEW",
		"INCOMING_UNPLAYED_MESSAGE",
		"INCOMING_PLAYED_MESSAGE",
		"OUTGOING_UNPLAYED_MESSAGE",
		"OUTGOING_PLAYED_MESSAGE",
		"STATUS_MESSAGE"
	]), C = n("$InternalEnum").Mirrored([
		"RECORDER",
		"PREVIEW",
		"VOICE_STATUS"
	]);
	function b(e) {
		var t = r("useWAWebMeasure")(), n = t[0], o = t[1], a = o.height, i = o.width, l = i === 0 || a === 0 ? null : u.jsx(v, babelHelpers.extends({}, e, {
			width: i,
			height: a
		}));
		return u.jsx("div", {
			ref: n,
			className: "x1n2onr6 x1iyjqo2",
			children: u.jsx("div", {
				className: "x10l6tqk x13vifvy x1o0tod",
				children: l
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = g(), n = e.disabled, a = e.getCurrentTime, i = e.getDuration, l = e.getSamples, c = e.height, _ = e.heightJitterFactor, y = e.jitterValuesCount, b = e.live, v = e.location, R = e.mode, L = e.onSeek, E = e.onSeekEnd, k = e.sampleRate, I = e.skipThumb, x = e.tabIndex, $ = e.width, P = r("useWAWebDevicePixelRatio")(), N = m(o("WAWebThemeContext").ThemeContext), M = N.theme, w = e.colorSourceRef, A = T(w, v, M), F = _ != null ? _ / 2 : 0, O = f(function() {
			return S(v, F);
		}, [v, F]), B = O.calculateInset, W = O.draw, q = f(function() {
			return o("WAPttWaveformGenerateHeightJitterValues").generateJitterDistributionArrays(F, y, y);
		}, [F, y]), U = h(null), V = U[0], H = U[1], G = h({
			value: a(),
			max: i()
		}), z = G[0], j = G[1], K = r("useWAWebDebouncedCallback")(function() {
			j({
				value: a(),
				max: i()
			});
		}, 500), Q = d(function() {
			K(), K.flush();
		}, [K]);
		p(function() {
			R === C.PREVIEW && Q();
		}, [R, Q]);
		var X = r("useLazyRef")(function() {
			var e = r("WAMemoizeOne")(function(e) {
				var t = e.desiredSize, n = e.inputSize, o = e.samples;
				return r("WAPttComposerScaleWaveform")(o, t);
			});
			return function(t, n) {
				return e({
					samples: t,
					inputSize: t.length,
					desiredSize: n
				});
			};
		}), Y = d(function() {
			K(), W({
				canvas: r("nullthrows")(t.current),
				samples: l(),
				width: $,
				height: c,
				currentTime: V != null ? V : a(),
				duration: i(),
				sampleRate: k,
				colors: A(),
				mode: R,
				pixelRatio: P,
				scaleSamples: X.current,
				skipThumb: I != null ? I : !1,
				jitterValues: q
			});
		}, [
			W,
			l,
			$,
			c,
			a,
			V,
			i,
			k,
			A,
			R,
			K,
			P,
			X,
			I,
			q
		]);
		r("useWAWebAnimationFrames")(Y, { active: b }), D(Y, b);
		var J = d(function(e) {
			L == null || L(e), H(e), Y();
		}, [
			H,
			L,
			Y
		]), Z = d(function(e) {
			H(null), L == null || L(e), E(e), Y(), Q();
		}, [
			H,
			L,
			E,
			Y,
			Q
		]), ee = u.jsx("canvas", {
			ref: t,
			width: P * $,
			height: P * c,
			style: {
				width: $ + "px",
				height: c + "px"
			}
		});
		if (R === C.RECORDER) return ee;
		var te = z.max, ne = z.value, re = o("WAWebClock").Clock.durationStr(ne) + "/" + o("WAWebClock").Clock.durationStr(te);
		return u.jsx(r("WAWebPttComposerRangeInput.react"), {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			value: ne,
			valueText: re,
			min: 0,
			max: te,
			smallSkip: 1,
			largeSkip: 10,
			onChange: J,
			onCommit: Z,
			disabled: n,
			tabIndex: x,
			inset: B($),
			children: ee
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		t === void 0 && (t = 0);
		var n = $(e), r = n.barSpacing, o = n.barWidth, a = r / 2, i = o + r, l = o, s = 7, u = 14, c = 6, d = 0;
		function m(e) {
			var n = e.canvas, r = e.colors, c = e.currentTime, m = e.duration, h = e.height, y = e.jitterValues, b = e.mode, v = e.pixelRatio, S = e.sampleRate, L = e.scaleSamples, E = e.width, k, I, T, D, x = m === 0 ? 0 : c / m;
			if (b === C.RECORDER) {
				k = e.samples;
				var $ = E - m * S * i;
				I = $ > 0 ? 0 : Math.floor(-$ / i), T = $ + I * i, D = E;
			} else if (b === C.VOICE_STATUS) {
				var P = c / m, N = P * e.samples.length, M = N + S;
				k = e.samples.slice(N, M), I = 0, T = 0, D = E;
			} else {
				k = L(e.samples, f(E));
				var w = g(E), A = w[0], F = w[1];
				T = A - o / 2 - a, I = 0;
				var O = A - o / 2, B = E - F + o / 2;
				D = O + x * (B - O);
			}
			var W = n.getContext("2d");
			W.lineCap = "round", W.setTransform(v, 0, 0, v, 0, 0), W.clearRect(0, 0, E, h);
			for (var q = I; q < k.length; q++) {
				var U = T + (q - I) * i + a, V = U + o, H = void 0;
				if (b === C.PREVIEW) H = 1;
				else if (b === C.RECORDER) {
					var G = U, z = E - V;
					H = R(G < z ? Math.min(1, G / s) : Math.min(1, z / u));
				} else if (H = 1, t != null) {
					var j = Math.floor(d / y.length), K = y[(q + j) % y.length], Q = K[d % K.length], X = Math.abs(K[0]);
					q % 2 === 0 && (Q *= -1), H = H - X - Q;
				}
				var Y = Math.max(0, H * (l + k[q] * (h - l)));
				_({
					colors: r,
					context: W,
					fillX: D,
					height: Y,
					width: o,
					x: U,
					y: (h - Y) / 2
				});
			}
			if (b === C.PREVIEW && !e.skipThumb) {
				var J = g(E), Z = J[0], ee = J[1], te = Z, ne = E - ee, re = te + x * (ne - te);
				p(W, re, h / 2, r.thumb);
			}
			d += 1;
		}
		function p(e, t, n, r) {
			e.beginPath(), e.arc(t, n, c, 0, 2 * Math.PI, !1), e.fillStyle = r, e.fill();
		}
		function _(e) {
			var t = e.colors, n = e.context, r = e.fillX, o = e.height, a = e.width, i = e.x, l = e.y;
			if (!(a === 0 || o === 0)) {
				var s = Math.min(a / 2, o / 2), u = r >= i + a ? t.barColorPlayed : t.barColorUnplayed;
				o <= a ? (n.fillStyle = u, n.beginPath(), n.arc(i + a / 2, l + o / 2, s, 0, 2 * Math.PI), n.fill()) : (n.strokeStyle = u, n.lineWidth = s * 2, n.beginPath(), n.moveTo(i + a / 2, l + s), n.lineTo(i + a / 2, l + o - s), n.stroke()), r > i && r < i + a && (n.globalCompositeOperation = "source-atop", n.fillStyle = t.barColorPlayed, n.rect(i, l, r - i, o), n.fill(), n.globalCompositeOperation = "source-over");
			}
		}
		function f(e) {
			var t = e - 2 * c;
			return Math.floor(t / i);
		}
		function g(e) {
			var t = i * (f(e) - 1), n = (e - t) / 2;
			return [n, n];
		}
		return {
			draw: m,
			calculateInset: g
		};
	}
	function R(e) {
		return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
	}
	var L = o("WAMemoizeCache").memoizeWithArgs(function(e, t) {
		return {
			barColorUnplayed: E("barColorUnplayed", t),
			barColorPlayed: E("barColorPlayed", t),
			thumb: E("thumb", t)
		};
	}, function(e, t) {
		return e + " " + t;
	});
	function E(e, t) {
		return getComputedStyle(r("nullthrows")(document.body)).getPropertyValue(r("nullthrows")(x.get(t))[e]).trim();
	}
	function k(e, t) {
		var n = r("nullthrows")(x.get(t)), o = getComputedStyle(e);
		return {
			barColorUnplayed: I(o.getPropertyValue(n.barColorUnplayed).trim(), e),
			barColorPlayed: I(o.getPropertyValue(n.barColorPlayed).trim(), e),
			thumb: I(o.getPropertyValue(n.thumb).trim(), e)
		};
	}
	function I(e, t) {
		if (!e || !e.includes("var(")) return e;
		var n = document.createElement("span");
		n.style.display = "none", n.style.setProperty("--_resolve", e), n.style.setProperty("color", "var(--_resolve)"), t.appendChild(n);
		var r = getComputedStyle(n).color;
		return n.remove(), r;
	}
	function T(e, t, n) {
		var o = m(r("WAWebChatThemeModeContext")), a = o.isThemed, i = o.isVibrant, l = g(null);
		return _(function() {
			var r = (a || i) && (e == null ? void 0 : e.current) != null ? e.current : null;
			l.current = r != null ? k(r, t) : L(n, t);
		}, [
			a,
			i,
			e,
			t,
			n
		]), d(function() {
			return (a || i) && l.current != null ? l.current : L(n, t);
		}, [
			a,
			i,
			n,
			t
		]);
	}
	function D(e, t) {
		_(function() {
			t || e();
		}, [t, e]);
	}
	var x = new Map([
		[y.DRAFT_PREVIEW, {
			barColorUnplayed: "--ptt-waveform-preview-unplayed",
			barColorPlayed: "--ptt-waveform-preview-played",
			thumb: "--ptt-draft-thumb"
		}],
		[y.INCOMING_UNPLAYED_MESSAGE, {
			barColorUnplayed: "--ptt-waveform-incoming-unplayed",
			barColorPlayed: "--ptt-waveform-incoming-played",
			thumb: "--ptt-thumb-incoming-unplayed"
		}],
		[y.INCOMING_PLAYED_MESSAGE, {
			barColorUnplayed: "--ptt-waveform-incoming-unplayed",
			barColorPlayed: "--ptt-waveform-incoming-played",
			thumb: "--ptt-thumb-incoming-played"
		}],
		[y.OUTGOING_UNPLAYED_MESSAGE, {
			barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
			barColorPlayed: "--ptt-waveform-outgoing-played",
			thumb: "--ptt-thumb-outgoing-unplayed"
		}],
		[y.OUTGOING_PLAYED_MESSAGE, {
			barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
			barColorPlayed: "--ptt-waveform-outgoing-played",
			thumb: "--ptt-thumb-outgoing-played"
		}],
		[y.STATUS_MESSAGE, {
			barColorUnplayed: "--status-primary",
			barColorPlayed: "--status-primary",
			thumb: "--status-primary"
		}]
	]);
	function $(e) {
		return e === y.STATUS_MESSAGE ? {
			barWidth: 3.75,
			barSpacing: 4.5
		} : {
			barWidth: 2.5,
			barSpacing: 1.8
		};
	}
	l.WaveformLocation = y, l.WaveformMode = C, l.Waveform = b, l.getWaveformBarDimensions = $;
}), 226);
