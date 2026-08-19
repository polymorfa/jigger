__d("MWPAudioPlayerUtils", [
	"fbt",
	"$InternalEnum",
	"MWAudioInteractionQpl",
	"MWLSThreadDisplayContext",
	"MWMediaRenderQplUtils",
	"MWPAudioPlaybackContext.react",
	"MWResponsiveLayoutContext.react",
	"cancelAnimationFrame",
	"getErrorNameFromMediaErrorCode",
	"gkx",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"requestAnimationFrameAcrossTransitions",
	"useMatchViewport",
	"useStable"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useCallback, p = c.useContext, _ = c.useEffect, f = c.useRef, g = c.useState, h = n("$InternalEnum").Mirrored(["PLAYER", "RECORDER"]), y = d(h.PLAYER), C = r("gkx")("24145");
	function b() {
		var e = p(y);
		return C && e === h.PLAYER;
	}
	function v(e, t) {
		if (t == null) return 0;
		var n = t.getBoundingClientRect(), r = n.left, o = n.width, a = e.clientX - r, i = o > 0 && a > 0 ? a / o : 0;
		return S(i, 0, 1);
	}
	function S(e, t, n) {
		return Math.min(Math.max(t, e), n);
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(6), n = e.currentTime, r = e.duration, a = e.tabIndex, i = a === void 0 ? 0 : a, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var c = Math.floor(n != null ? n : 0), d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = { position: "absolute" }, t[1] = d) : d = t[1];
		var m = i != null ? i : 0, p;
		return t[2] !== r || t[3] !== c || t[4] !== m ? (p = u.jsx("div", {
			"aria-label": l,
			"aria-valuemax": r,
			"aria-valuemin": 0,
			"aria-valuenow": c,
			role: "slider",
			style: d,
			tabIndex: m
		}), t[2] = r, t[3] = c, t[4] = m, t[5] = p) : p = t[5], p;
	}
	function L() {
		var e = o("react-compiler-runtime").c(2), t = b();
		if (t) {
			var n;
			return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
				marginLeft: 12,
				marginRight: 12
			}, e[0] = n) : n = e[0], n;
		}
		var r;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = {
			marginLeft: 6,
			marginRight: 6
		}, e[1] = r) : r = e[1], r;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = function(n) {
			var t = e.current;
			if (t != null) return n.stopPropagation(), t.updateHighlight(0);
		}, t[0] = e, t[1] = n) : n = t[1], n;
	}
	function k(e, t, n, a, i, l) {
		var s = o("react-compiler-runtime").c(13), u = i === void 0 ? !1 : i, c = f(), d;
		s[0] !== t || s[1] !== e || s[2] !== l || s[3] !== u || s[4] !== a ? (d = function() {
			var n = function(t) {
				var e = c.current;
				if (e != null) return e.updateHighlight(t);
			};
			if (l) {
				n(u ? 100 : 0);
				return;
			}
			if (a) {
				var o = { contents: void 0 }, i, s = function(l) {
					var a;
					if (t.current != null) a = t.current.currentTime / t.current.duration;
					else {
						var u = o.contents, c = 0;
						u != null ? c = l - u : o.contents = l, a = c / (e * 1e3);
					}
					var d = Math.min(a * 100, 100);
					if (n(d), d < 100) {
						i = r("requestAnimationFrameAcrossTransitions")(s);
						return;
					}
				};
				return i = r("requestAnimationFrameAcrossTransitions")(s), (function() {
					i != null && r("cancelAnimationFrame")(i);
				});
			}
			if (t.current != null) {
				var d = t.current.currentTime / t.current.duration;
				n(d * 100);
			}
		}, s[0] = t, s[1] = e, s[2] = l, s[3] = u, s[4] = a, s[5] = d) : d = s[5];
		var m;
		return s[6] !== t || s[7] !== n || s[8] !== e || s[9] !== l || s[10] !== u || s[11] !== a ? (m = [
			e,
			a,
			l,
			c,
			t,
			u,
			n
		], s[6] = t, s[7] = n, s[8] = e, s[9] = l, s[10] = u, s[11] = a, s[12] = m) : m = s[12], _(d, m), c;
	}
	var I = n("$InternalEnum").Mirrored([
		"ENDED",
		"LOADING",
		"NONE",
		"PAUSED",
		"PLAYING"
	]);
	function T(e, t, n, r, a, i, l, s, u, c, d) {
		var m = b(), p = o("MWPAudioPlaybackContext.react").useMWPAudioPlaybackElement(e, t, n, r, m);
		return D(p, m, a, i, l, s, u, c, d);
	}
	function D(e, t, n, a, i, l, s, u, c) {
		var d = o("react-compiler-runtime").c(28), m;
		d[0] !== n ? (m = function() {
			return n;
		}, d[0] = n, d[1] = m) : m = d[1];
		var p = r("useStable")(m), h = f(e), y = g(I.NONE), C = y[0], b = y[1], v;
		d[2] !== (e == null ? void 0 : e.currentTime) ? (v = function() {
			var t;
			return (t = e == null ? void 0 : e.currentTime) != null ? t : 0;
		}, d[2] = e == null ? void 0 : e.currentTime, d[3] = v) : v = d[3];
		var S = g(v), R = S[0], L = S[1], E, T;
		d[4] !== e || d[5] !== l ? (E = function() {
			if (e == null) {
				b(I.NONE), l == null || l.addAnnotations({ string: { audio_initial_state: "none" } });
				return;
			}
			e.ended ? (b(I.ENDED), l == null || l.addAnnotations({ string: { audio_initial_state: "ended" } })) : b(function() {
				return e.paused ? (l == null || l.addAnnotations({ string: { audio_initial_state: "paused" } }), I.PAUSED) : (l == null || l.addAnnotations({ string: { audio_initial_state: "playing" } }), I.PLAYING);
			}), L(e.currentTime), h.current = e;
		}, T = [e, l], d[4] = e, d[5] = l, d[6] = E, d[7] = T) : (E = d[6], T = d[7]), _(E, T);
		var D;
		d[8] !== l || d[9] !== t ? (D = function() {
			var e = h.current;
			if (l == null || l.addPoint("render-audio-player-controller", {
				bool: { has_audio: e != null },
				int: { audio_ready_state: e == null ? void 0 : e.readyState },
				string: { audio_duration_bucket: e != null ? o("MWMediaRenderQplUtils").convertDurationToStringBucket(e.duration) : null }
			}), e != null) {
				var n = function() {
					var t = e.error, n = r("getErrorNameFromMediaErrorCode")(t == null ? void 0 : t.code);
					l == null || l.endFailAfterDelay("load-audio-error", { string: {
						audio_error_message: t == null ? void 0 : t.message,
						audio_error_name: n
					} });
				}, a = function() {
					l == null || l.endSuccessAfterDelay();
				}, i = function() {
					b(I.PAUSED), l == null || l.addPoint("audio-paused", { int: { audio_ready_state: e.readyState } });
				}, s = function() {
					b(I.PLAYING), l == null || l.addPoint("audio-played", { int: { audio_ready_state: e.readyState } });
				}, u = function() {
					b(I.LOADING), l == null || l.addPoint("load-start", { int: { audio_ready_state: e.readyState } });
				}, c = function() {
					h.current != null && L(h.current.currentTime);
				}, d = function() {
					h.current != null && (h.current.currentTime = 0, L(0)), b(I.ENDED);
				}, m = function() {
					l == null || l.addPoint("audio-duration-change", { int: { audio_ready_state: e.readyState } });
				}, p = function() {
					l == null || l.addPoint("loaded-metadata", { int: { audio_ready_state: e.readyState } });
				}, _ = function() {
					l == null || l.addPoint("loaded-data", { int: { audio_ready_state: e.readyState } });
				}, f = function() {
					h.current = e, i(), l == null || l.addPoint("can-play", { int: { audio_ready_state: e.readyState } }), a();
				}, g = function() {
					l == null || l.addPoint("can-play-through", { int: { audio_ready_state: e.readyState } });
				}, y = function() {
					l == null || l.addPoint("audio-aborted", { int: { audio_ready_state: e.readyState } });
				}, C = function() {
					l == null || l.addPoint("audio-stalled", { int: { audio_ready_state: e.readyState } });
				}, v = function() {
					l == null || l.addPoint("audio-suspended", { int: { audio_ready_state: e.readyState } });
				}, S = function() {
					l == null || l.addPoint("audio-emptied", { int: { audio_ready_state: e.readyState } });
				};
				return e != null && e.readyState >= 2 && a(), e.addEventListener("loadstart", u), e.addEventListener("timeupdate", c), e.addEventListener("playing", s), e.addEventListener("pause", i), e.addEventListener("ended", d), e.addEventListener("error", n), e.addEventListener("durationchange", m), e.addEventListener("loadedmetadata", p), e.addEventListener("loadeddata", _), e.addEventListener("canplay", f), e.addEventListener("canplaythrough", g), e.addEventListener("stalled", C), e.addEventListener("suspend", v), e.addEventListener("abort", y), e.addEventListener("emptied", S), (function() {
					e.removeEventListener("loadstart", u), e.removeEventListener("timeupdate", c), e.removeEventListener("playing", s), e.removeEventListener("pause", i), e.removeEventListener("ended", d), e.removeEventListener("error", n), e.removeEventListener("durationchange", m), e.removeEventListener("loadedmetadata", p), e.removeEventListener("loadeddata", _), e.removeEventListener("canplay", f), e.removeEventListener("canplaythrough", g), e.removeEventListener("stalled", C), e.removeEventListener("suspend", v), e.removeEventListener("abort", y), e.removeEventListener("emptied", S), !t && e.pause();
				});
			}
		}, d[8] = l, d[9] = t, d[10] = D) : D = d[10];
		var x;
		d[11] !== e || d[12] !== l || d[13] !== t ? (x = [
			e,
			l,
			t
		], d[11] = e, d[12] = l, d[13] = t, d[14] = x) : x = d[14], _(D, x);
		var $;
		d[15] !== c || d[16] !== u || d[17] !== l || d[18] !== p || d[19] !== C || d[20] !== s ? ($ = function() {
			var e = h.current;
			if (e != null) {
				var t = {
					attachmentId: c,
					hasWaveform: s != null,
					isSecure: u
				};
				switch (C) {
					case I.NONE:
					case I.LOADING: return;
					case I.ENDED:
					case I.PAUSED: {
						var n = o("MWAudioInteractionQpl").startAudioInteraction("play", t);
						r("promiseDone")(e.play(), function() {
							b(I.PLAYING), o("MWAudioInteractionQpl").endAudioInteractionSuccess(n);
						}, function(e) {
							p(), o("MWAudioInteractionQpl").endAudioInteractionFailure(e.name, n), l == null || l.addAnnotations({ string: { "play-error": e.name } });
						}), l == null || l.addPoint("audio-play-clicked", { int: { audio_ready_state: e.readyState } });
						return;
					}
					case I.PLAYING: {
						var a = o("MWAudioInteractionQpl").startAudioInteraction("pause", t);
						e.pause(), b(I.PAUSED), o("MWAudioInteractionQpl").endAudioInteractionSuccess(a), l == null || l.addPoint("audio-pause-clicked", { int: { audio_ready_state: e.readyState } });
						return;
					}
				}
			}
		}, d[15] = c, d[16] = u, d[17] = l, d[18] = p, d[19] = C, d[20] = s, d[21] = $) : $ = d[21];
		var P = $, N;
		d[22] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			var e = h.current;
			e != null && (e.currentTime = t, L(t));
		}, d[22] = N) : N = d[22];
		var M = N, w = k(i, h, R, C === I.PLAYING, a, C === I.ENDED), A;
		return d[23] !== R || d[24] !== P || d[25] !== C || d[26] !== w ? (A = [
			C,
			R,
			h,
			P,
			w,
			M
		], d[23] = R, d[24] = P, d[25] = C, d[26] = w, d[27] = A) : A = d[27], A;
	}
	function x() {
		var e = o("react-compiler-runtime").c(17), t = o("MWPAudioPlaybackContext.react").useMWPAudioOutOfChatPlayback(), n = t[0], a = t[1], i = t[2], l;
		e[0] !== n ? (l = function() {
			return n == null ? I.NONE : n.ended ? I.ENDED : n.paused ? I.PAUSED : I.PLAYING;
		}, e[0] = n, e[1] = l) : l = e[1];
		var s = g(l), u = s[0], c = s[1], d;
		e[2] !== n ? (d = function() {
			return n != null ? n.duration - n.currentTime : 0;
		}, e[2] = n, e[3] = d) : d = e[3];
		var m = g(d), p = m[0], f = m[1], h, y;
		e[4] !== n ? (h = function() {
			if (n != null) {
				var e = function() {
					return f(n.duration - n.currentTime);
				}, t = function() {
					return c(I.LOADING);
				}, o = function() {
					return c(I.ENDED);
				};
				return n.addEventListener("timeupdate", e), n.addEventListener("loadstart", t), n.addEventListener("ended", o), r("promiseDone")(n.play(), function() {
					return c(I.PLAYING);
				}), (function() {
					n.removeEventListener("timeupdate", e), n.removeEventListener("loadstart", t), n.removeEventListener("ended", o);
				});
			}
		}, y = [n], e[4] = n, e[5] = h, e[6] = y) : (h = e[5], y = e[6]), _(h, y);
		var b;
		e[7] !== n || e[8] !== u ? (b = function() {
			if (n != null) switch (u) {
				case I.NONE:
				case I.LOADING: return;
				case I.ENDED:
				case I.PAUSED: {
					r("promiseDone")(n.play(), function() {
						return c(I.PLAYING);
					});
					return;
				}
				case I.PLAYING: {
					n.pause(), c(I.PAUSED);
					return;
				}
			}
		}, e[7] = n, e[8] = u, e[9] = b) : b = e[9];
		var v = b, S = u === I.PLAYING, R = n != null && i != null && C, L;
		return e[10] !== a || e[11] !== v || e[12] !== S || e[13] !== R || e[14] !== i || e[15] !== p ? (L = [
			i,
			S,
			R,
			p,
			v,
			a
		], e[10] = a, e[11] = v, e[12] = S, e[13] = R, e[14] = i, e[15] = p, e[16] = L) : L = e[16], L;
	}
	function $(e, t) {
		var n = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), a = p(r("MWResponsiveLayoutContext.react")), i = a.cardsVisible, l = r("useMatchViewport")("max", "width", 750), s = r("useMatchViewport")("max", "width", 1060), u = !1;
		return (l && i === 2 || s && i === 3) && (u = !0), (e != null ? e : n === "Inbox") ? u ? 180 : 218 : n === "ChatTab" && t === !0 ? 148 : 180;
	}
	function P(e) {
		var t = b();
		return t && e === h.PLAYER ? 70 : 36;
	}
	l.UseCase = h, l.UseCaseContext = y, l.useShowNewUX = b, l.getMousePos = v, l.ScreenReaderLabel = R, l.usePlaybackButtonContainerStyle = L, l.useResetHighlightProgress = E, l.useProgressLiveUpdate = k, l.State = I, l.useControlCenter = T, l.useOutOfChatControlCenter = x, l.useCalculatePlayerWidth = $, l.useCalculatePlayerHeight = P;
}), 226);
