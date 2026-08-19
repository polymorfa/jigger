__d("WAWebPttMessageWaveform.react", [
	"WAWebChatThemeModeContext",
	"WAWebPttComposerWaveform.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(20), n = e.currentTime, a = e.disabled, i = e.duration, l = e.onSeek, u = e.onSeekEnd, c = e.outgoing, p = e.played, g = e.skipThumb, h = e.waveform, y = d(r("WAWebChatThemeModeContext")), C = y.isThemed, b = m(null), v;
		t[0] !== n ? (v = function() {
			return n != null ? n : 0;
		}, t[0] = n, t[1] = v) : v = t[1];
		var S = v, R;
		t[2] !== h ? (R = function() {
			return Array.from(h).map(_);
		}, t[2] = h, t[3] = R) : R = t[3];
		var L = R, E;
		t[4] !== i ? (E = function() {
			return i;
		}, t[4] = i, t[5] = E) : E = t[5];
		var k = E, I;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 xxk0z11" }, t[6] = I) : I = t[6];
		var T;
		t[7] !== c || t[8] !== p ? (T = f(c, p), t[7] = c, t[8] = p, t[9] = T) : T = t[9];
		var D = C ? b : void 0, x;
		return t[10] !== a || t[11] !== k || t[12] !== S || t[13] !== L || t[14] !== l || t[15] !== u || t[16] !== g || t[17] !== T || t[18] !== D ? (x = s.jsx("div", babelHelpers.extends({ ref: b }, I, { children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
			location: T,
			sampleRate: 6,
			getSamples: L,
			getCurrentTime: S,
			getDuration: k,
			live: !1,
			mode: o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW,
			onSeek: l,
			onSeekEnd: u,
			disabled: a,
			skipThumb: g,
			colorSourceRef: D
		}) })), t[10] = a, t[11] = k, t[12] = S, t[13] = L, t[14] = l, t[15] = u, t[16] = g, t[17] = T, t[18] = D, t[19] = x) : x = t[19], x;
	}
	function _(e) {
		return e / 100;
	}
	function f(e, t) {
		switch (e) {
			case !0: return t ? o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_PLAYED_MESSAGE : o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_UNPLAYED_MESSAGE;
			case !1: return t ? o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_PLAYED_MESSAGE : o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_UNPLAYED_MESSAGE;
		}
	}
	l.default = p;
}), 98);
