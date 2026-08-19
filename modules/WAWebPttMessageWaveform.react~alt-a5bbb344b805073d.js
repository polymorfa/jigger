__d("WAWebPttMessageWaveform.react", [
	"WAWebChatThemeModeContext",
	"WAWebPttComposerWaveform.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useRef;
	function p(e) {
		var t = e.currentTime, n = e.disabled, a = e.duration, i = e.onSeek, l = e.onSeekEnd, u = e.outgoing, p = e.played, f = e.skipThumb, g = e.waveform, h = d(r("WAWebChatThemeModeContext")), y = h.isThemed, C = m(null), b = c(function() {
			return t != null ? t : 0;
		}, [t]), v = c(function() {
			return Array.from(g).map(function(e) {
				return e / 100;
			});
		}, [g]), S = c(function() {
			return a;
		}, [a]);
		return s.jsx("div", {
			ref: C,
			className: "x78zum5 xxk0z11",
			children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
				location: _(u, p),
				sampleRate: 6,
				getSamples: v,
				getCurrentTime: b,
				getDuration: S,
				live: !1,
				mode: o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW,
				onSeek: i,
				onSeekEnd: l,
				disabled: n,
				skipThumb: f,
				colorSourceRef: y ? C : void 0
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e, t) {
		switch (e) {
			case !0: return t ? o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_PLAYED_MESSAGE : o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_UNPLAYED_MESSAGE;
			case !1: return t ? o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_PLAYED_MESSAGE : o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_UNPLAYED_MESSAGE;
		}
	}
	l.default = p;
}), 98);
