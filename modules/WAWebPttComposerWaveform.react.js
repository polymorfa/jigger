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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = r("useWAWebMeasure")(), a = n[0], i = n[1], l = i.height, s = i.width, c;
		t[0] !== l || t[1] !== e || t[2] !== s ? (c = s === 0 || l === 0 ? null : u.jsx(v, babelHelpers.extends({}, e, {
			width: s,
			height: l
		})), t[0] = l, t[1] = e, t[2] = s, t[3] = c) : c = t[3];
		var d = c, m, p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1n2onr6 x1iyjqo2" }, p = { className: "x10l6tqk x13vifvy x1o0tod" }, t[4] = m, t[5] = p) : (m = t[4], p = t[5]);
		var _;
		t[6] !== d ? (_ = u.jsx("div", babelHelpers.extends({}, p, { children: d })), t[6] = d, t[7] = _) : _ = t[7];
		var f;
		return t[8] !== a || t[9] !== _ ? (f = u.jsx("div", babelHelpers.extends({ ref: a }, m, { children: _ })), t[8] = a, t[9] = _, t[10] = f) : f = t[10], f;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(69), n = g(), a = e.disabled, i = e.getCurrentTime, l = e.getDuration, c = e.getSamples, d = e.height, _ = e.heightJitterFactor, f = e.jitterValuesCount, y = e.live, b = e.location, v = e.mode, R = e.onSeek, E = e.onSeekEnd, k = e.sampleRate, I = e.skipThumb, T = e.tabIndex, D = e.width, P = r("useWAWebDevicePixelRatio")(), N = m(o("WAWebThemeContext").ThemeContext), M = N.theme, w = e.colorSourceRef, A = x(w, b, M), F = _ != null ? _ / 2 : 0, O;
		t[0] !== F || t[1] !== b ? (O = L(b, F), t[0] = F, t[1] = b, t[2] = O) : O = t[2];
		var B = O, W = B.calculateInset, q = B.draw, U;
		t[3] !== F || t[4] !== f ? (U = o("WAPttWaveformGenerateHeightJitterValues").generateJitterDistributionArrays(F, f, f), t[3] = F, t[4] = f, t[5] = U) : U = t[5];
		var V = U, H = h(null), G = H[0], z = H[1], j;
		t[6] !== i ? (j = i(), t[6] = i, t[7] = j) : j = t[7];
		var K;
		t[8] !== l ? (K = l(), t[8] = l, t[9] = K) : K = t[9];
		var Q;
		t[10] !== j || t[11] !== K ? (Q = {
			value: j,
			max: K
		}, t[10] = j, t[11] = K, t[12] = Q) : Q = t[12];
		var X = h(Q), Y = X[0], J = X[1], Z;
		t[13] !== i || t[14] !== l ? (Z = function() {
			J({
				value: i(),
				max: l()
			});
		}, t[13] = i, t[14] = l, t[15] = Z) : Z = t[15];
		var ee = r("useWAWebDebouncedCallback")(Z, 500), te;
		t[16] !== ee ? (te = function() {
			ee(), ee.flush();
		}, t[16] = ee, t[17] = te) : te = t[17];
		var ne = te, re, oe;
		t[18] !== v || t[19] !== ne ? (re = function() {
			v === C.PREVIEW && ne();
		}, oe = [v, ne], t[18] = v, t[19] = ne, t[20] = re, t[21] = oe) : (re = t[20], oe = t[21]), p(re, oe);
		var ae = r("useLazyRef")(S), ie;
		t[22] !== q || t[23] !== A || t[24] !== i || t[25] !== l || t[26] !== c || t[27] !== d || t[28] !== V || t[29] !== v || t[30] !== P || t[31] !== k || t[32] !== ae || t[33] !== G || t[34] !== I || t[35] !== ee || t[36] !== D ? (ie = function() {
			ee(), q({
				canvas: r("nullthrows")(n.current),
				samples: c(),
				width: D,
				height: d,
				currentTime: G != null ? G : i(),
				duration: l(),
				sampleRate: k,
				colors: A(),
				mode: v,
				pixelRatio: P,
				scaleSamples: ae.current,
				skipThumb: I != null ? I : !1,
				jitterValues: V
			});
		}, t[22] = q, t[23] = A, t[24] = i, t[25] = l, t[26] = c, t[27] = d, t[28] = V, t[29] = v, t[30] = P, t[31] = k, t[32] = ae, t[33] = G, t[34] = I, t[35] = ee, t[36] = D, t[37] = ie) : ie = t[37];
		var le = ie, se;
		t[38] !== y ? (se = { active: y }, t[38] = y, t[39] = se) : se = t[39], r("useWAWebAnimationFrames")(le, se), $(le, y);
		var ue;
		t[40] !== le || t[41] !== R ? (ue = function(t) {
			R == null || R(t), z(t), le();
		}, t[40] = le, t[41] = R, t[42] = ue) : ue = t[42];
		var ce = ue, de;
		t[43] !== le || t[44] !== R || t[45] !== E || t[46] !== ne ? (de = function(t) {
			z(null), R == null || R(t), E(t), le(), ne();
		}, t[43] = le, t[44] = R, t[45] = E, t[46] = ne, t[47] = de) : de = t[47];
		var me = de, pe = P * D, _e = P * d, fe = D + "px", ge = d + "px", he;
		t[48] !== fe || t[49] !== ge ? (he = {
			width: fe,
			height: ge
		}, t[48] = fe, t[49] = ge, t[50] = he) : he = t[50];
		var ye;
		t[51] !== pe || t[52] !== _e || t[53] !== he ? (ye = u.jsx("canvas", {
			ref: n,
			width: pe,
			height: _e,
			style: he
		}), t[51] = pe, t[52] = _e, t[53] = he, t[54] = ye) : ye = t[54];
		var Ce = ye;
		if (v === C.RECORDER) return Ce;
		var be = Y.max, ve = Y.value, Se = o("WAWebClock").Clock.durationStr(ve) + "/" + o("WAWebClock").Clock.durationStr(be), Re;
		t[55] === Symbol.for("react.memo_cache_sentinel") ? (Re = s._(
			/*BTDS*/
			""
		), t[55] = Re) : Re = t[55];
		var Le;
		t[56] !== W || t[57] !== D ? (Le = W(D), t[56] = W, t[57] = D, t[58] = Le) : Le = t[58];
		var Ee;
		return t[59] !== Ce || t[60] !== a || t[61] !== ce || t[62] !== me || t[63] !== be || t[64] !== ve || t[65] !== Se || t[66] !== Le || t[67] !== T ? (Ee = u.jsx(r("WAWebPttComposerRangeInput.react"), {
			ariaLabel: Re,
			value: ve,
			valueText: Se,
			min: 0,
			max: be,
			smallSkip: 1,
			largeSkip: 10,
			onChange: ce,
			onCommit: me,
			disabled: a,
			tabIndex: T,
			inset: Le,
			children: Ce
		}), t[59] = Ce, t[60] = a, t[61] = ce, t[62] = me, t[63] = be, t[64] = ve, t[65] = Se, t[66] = Le, t[67] = T, t[68] = Ee) : Ee = t[68], Ee;
	}
	function S() {
		var e = r("WAMemoizeOne")(R);
		return function(t, n) {
			return e({
				samples: t,
				inputSize: t.length,
				desiredSize: n
			});
		};
	}
	function R(e) {
		var t = e.desiredSize, n = e.samples;
		return r("WAPttComposerScaleWaveform")(n, t);
	}
	function L(e, t) {
		t === void 0 && (t = 0);
		var n = N(e), r = n.barSpacing, o = n.barWidth, a = r / 2, i = o + r, l = o, s = 7, u = 14, c = 6, d = 0;
		function m(e) {
			var n = e.canvas, r = e.colors, c = e.currentTime, m = e.duration, h = e.height, y = e.jitterValues, b = e.mode, v = e.pixelRatio, S = e.sampleRate, R = e.scaleSamples, L = e.width, k, I, T, D, x = m === 0 ? 0 : c / m;
			if (b === C.RECORDER) {
				k = e.samples;
				var $ = L - m * S * i;
				I = $ > 0 ? 0 : Math.floor(-$ / i), T = $ + I * i, D = L;
			} else if (b === C.VOICE_STATUS) {
				var P = c / m, N = P * e.samples.length, M = N + S;
				k = e.samples.slice(N, M), I = 0, T = 0, D = L;
			} else {
				k = R(e.samples, f(L));
				var w = g(L), A = w[0], F = w[1];
				T = A - o / 2 - a, I = 0;
				var O = A - o / 2, B = L - F + o / 2;
				D = O + x * (B - O);
			}
			var W = n.getContext("2d");
			W.lineCap = "round", W.setTransform(v, 0, 0, v, 0, 0), W.clearRect(0, 0, L, h);
			for (var q = I; q < k.length; q++) {
				var U = T + (q - I) * i + a, V = U + o, H = void 0;
				if (b === C.PREVIEW) H = 1;
				else if (b === C.RECORDER) {
					var G = U, z = L - V;
					H = E(G < z ? Math.min(1, G / s) : Math.min(1, z / u));
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
				var J = g(L), Z = J[0], ee = J[1], te = Z, ne = L - ee, re = te + x * (ne - te);
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
	function E(e) {
		return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
	}
	var k = o("WAMemoizeCache").memoizeWithArgs(function(e, t) {
		return {
			barColorUnplayed: I("barColorUnplayed", t),
			barColorPlayed: I("barColorPlayed", t),
			thumb: I("thumb", t)
		};
	}, function(e, t) {
		return e + " " + t;
	});
	function I(e, t) {
		return getComputedStyle(r("nullthrows")(document.body)).getPropertyValue(r("nullthrows")(P.get(t))[e]).trim();
	}
	function T(e, t) {
		var n = r("nullthrows")(P.get(t)), o = getComputedStyle(e);
		return {
			barColorUnplayed: D(o.getPropertyValue(n.barColorUnplayed).trim(), e),
			barColorPlayed: D(o.getPropertyValue(n.barColorPlayed).trim(), e),
			thumb: D(o.getPropertyValue(n.thumb).trim(), e)
		};
	}
	function D(e, t) {
		if (!e || !e.includes("var(")) return e;
		var n = document.createElement("span");
		n.style.display = "none", n.style.setProperty("--_resolve", e), n.style.setProperty("color", "var(--_resolve)"), t.appendChild(n);
		var r = getComputedStyle(n).color;
		return n.remove(), r;
	}
	function x(e, t, n) {
		var a = o("react-compiler-runtime").c(12), i = m(r("WAWebChatThemeModeContext")), l = i.isThemed, s = i.isVibrant, u = g(null), c, d;
		a[0] !== e || a[1] !== l || a[2] !== s || a[3] !== t || a[4] !== n ? (c = function() {
			var r = (l || s) && (e == null ? void 0 : e.current) != null ? e.current : null;
			u.current = r != null ? T(r, t) : k(n, t);
		}, d = [
			l,
			s,
			e,
			t,
			n
		], a[0] = e, a[1] = l, a[2] = s, a[3] = t, a[4] = n, a[5] = c, a[6] = d) : (c = a[5], d = a[6]), _(c, d);
		var p;
		return a[7] !== l || a[8] !== s || a[9] !== t || a[10] !== n ? (p = function() {
			return (l || s) && u.current != null ? u.current : k(n, t);
		}, a[7] = l, a[8] = s, a[9] = t, a[10] = n, a[11] = p) : p = a[11], p;
	}
	function $(e, t) {
		var n = o("react-compiler-runtime").c(4), r, a;
		n[0] !== e || n[1] !== t ? (r = function() {
			t || e();
		}, a = [t, e], n[0] = e, n[1] = t, n[2] = r, n[3] = a) : (r = n[2], a = n[3]), _(r, a);
	}
	var P = new Map([
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
	function N(e) {
		return e === y.STATUS_MESSAGE ? {
			barWidth: 3.75,
			barSpacing: 4.5
		} : {
			barWidth: 2.5,
			barSpacing: 1.8
		};
	}
	l.WaveformLocation = y, l.WaveformMode = C, l.Waveform = b, l.getWaveformBarDimensions = N;
}), 226);
