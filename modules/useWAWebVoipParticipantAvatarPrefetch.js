__d("useWAWebVoipParticipantAvatarPrefetch", [
	"Promise",
	"WALogger",
	"WAWebImgPlaceholderConst",
	"WAWebProfilePicThumbCollection",
	"WAWebVoipCallStateUtils",
	"WAWebVoipWaCallEnums",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"useWAWebDebouncedCallback",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = d.useEffect, p = d.useMemo, _ = d.useRef, f = 12, g = 2, h = 2e3, y = [];
	function C(e) {
		var t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e);
		return t != null && !t.stale && !t.eurlStale ? t : null;
	}
	function b(e, t) {
		return new (u || (u = (n("Promise"))))(function(n) {
			if (t.aborted) {
				n(!1);
				return;
			}
			var r = new Image(), a = !1, i = function() {
				r.onload = null, r.onerror = null, t.removeEventListener("abort", s);
			}, l = function(t) {
				a || (a = !0, i(), n(t));
			}, s = function() {
				i(), r.src = o("WAWebImgPlaceholderConst").ONE_BY_ONE_TRANS_GIF, l(!1);
			};
			r.onload = function() {
				return l(!0);
			}, r.onerror = function() {
				return l(!1);
			}, t.addEventListener("abort", s, { once: !0 }), r.src = e;
		});
	}
	function v(e, t, n) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = e.toString(), i = t.failedWids, l = t.prefetchedWids;
			if (!(n.aborted || l.has(a) || i.has(a))) {
				var u = C(e);
				if (u != null) {
					var c = u.img;
					if (c != null && c !== "") {
						var d = yield b(c, n);
						d && !n.aborted ? l.add(a) : n.aborted || (u.markStale({ eurl: !0 }), i.add(a));
					}
					return;
				}
				try {
					var m = yield o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e);
					if (n.aborted) return;
					var p = m.img;
					if (p == null || p === "") return;
					var _ = yield b(p, n);
					_ && !n.aborted ? l.add(a) : n.aborted || (m.markStale({ eurl: !0 }), i.add(a));
				} catch (e) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: participant avatar prefetch failed"]))).catching(r("getErrorSafe")(e));
				}
			}
		}), S.apply(this, arguments);
	}
	function R(e, t, n) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			var o = 0, a = function() {
				if (r.aborted) return (u || (u = n("Promise"))).resolve();
				var i = e[o];
				return o++, i == null ? (u || (u = n("Promise"))).resolve() : v(i, t, r).then(a);
			};
			yield (u || (u = n("Promise"))).all(Array.from({ length: Math.min(g, e.length) }, a));
		}), L.apply(this, arguments);
	}
	function E(e, t, n, a, i, l) {
		var s = o("react-compiler-runtime").c(18), u = r("useWAWebUiIdle")(), c, d;
		s[0] === Symbol.for("react.memo_cache_sentinel") ? (c = new Set(), d = new Set(), s[0] = c, s[1] = d) : (c = s[0], d = s[1]);
		var p;
		s[2] !== e ? (p = {
			callId: e,
			failedWids: c,
			prefetchedWids: d
		}, s[2] = e, s[3] = p) : p = s[3];
		var g = p, C = _(null), b;
		e: {
			if (e == null || !n || a || !o("WAWebVoipCallStateUtils").isCallConnected(t) || !r("justknobx")._("682")) {
				b = y;
				break e;
			}
			var v;
			if (s[4] !== i || s[5] !== l) {
				var S = [], L = [];
				for (var E of l) i.get(E.toString()) === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ? S.push(E) : L.push(E);
				v = [].concat(S, L).slice(0, f), s[4] = i, s[5] = l, s[6] = v;
			} else v = s[6];
			b = v;
		}
		var T = b, D;
		s[7] !== T ? (D = T.map(I).join("|"), s[7] = T, s[8] = D) : D = s[8];
		var x = D, $;
		s[9] !== T || s[10] !== g || s[11] !== u ? ($ = function() {
			var e;
			(e = C.current) == null || e.abort();
			var t = new AbortController();
			C.current = t, u(function() {
				t.signal.aborted || R(T, g, t.signal).catch(k);
			});
		}, s[9] = T, s[10] = g, s[11] = u, s[12] = $) : $ = s[12];
		var P = r("useWAWebDebouncedCallback")($, h), N = g.callId, M, w;
		s[13] !== N || s[14] !== P || s[15] !== x ? (M = function() {
			if (N == null || x === "") {
				var e;
				P.cancel(), (e = C.current) == null || e.abort(), C.current = null;
				return;
			}
			return P(), (function() {
				var e;
				P.cancel(), (e = C.current) == null || e.abort(), C.current = null;
			});
		}, w = [
			N,
			P,
			x
		], s[13] = N, s[14] = P, s[15] = x, s[16] = M, s[17] = w) : (M = s[16], w = s[17]), m(M, w);
	}
	function k(t) {
		o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: participant avatar prefetch batch failed"]))).catching(r("getErrorSafe")(t));
	}
	function I(e) {
		return e.toString();
	}
	l.default = E;
}), 98);
