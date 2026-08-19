__d("WAWebSpoilerParticlesCanvas.react", [
	"WAWebA11yUtils",
	"WAWebNoop",
	"WAWebResizeObserver",
	"WAWebSpoilerParticlesAnimation",
	"WAWebSpoilerParticlesCanvasUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = "--WDS-content-default", _ = "#000000";
	function f(e) {
		var t = o("react-compiler-runtime").c(9), n = e.dismissCoords, a = e.revealed, i = a === void 0 ? !1 : a, l = d(null), u = r("useWAWebOnScreen")(l, r("WAWebNoop")), c = k(), m;
		t[0] !== n || t[1] !== u || t[2] !== c || t[3] !== i ? (m = {
			canvasRef: l,
			revealed: i,
			isVisible: u,
			prefersReducedMotion: c,
			dismissCoords: n
		}, t[0] = n, t[1] = u, t[2] = c, t[3] = i, t[4] = m) : m = t[4], g(m);
		var p = i && (n == null || c), _;
		t[5] !== p ? (_ = {
			0: { className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn x1hc1fzr" },
			1: { className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn xg01cxk" }
		}[!!p << 0], t[5] = p, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== _ ? (f = s.jsx("canvas", babelHelpers.extends({
			ref: l,
			"aria-hidden": !0,
			"data-testid": "spoiler_particles_canvas"
		}, _)), t[7] = _, t[8] = f) : f = t[8], f;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(24), n = e.canvasRef, r = e.dismissCoords, a = e.isVisible, i = e.prefersReducedMotion, l = e.revealed, s = d(null), u = d(null), p = d(r), _ = d(null);
		if (_.current == null) {
			var f = r != null, g;
			t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== f ? (g = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
				dismissing: f,
				isVisible: a,
				prefersReducedMotion: i,
				revealed: l
			}), t[0] = a, t[1] = i, t[2] = l, t[3] = f, t[4] = g) : g = t[4], _.current = g;
		}
		var R = d(l), L = m(null), E = L[0], k = L[1], I, T;
		t[5] !== r ? (I = function() {
			p.current = r;
		}, T = [r], t[5] = r, t[6] = I, t[7] = T) : (I = t[6], T = t[7]), c(I, T);
		var D, x;
		t[8] !== n ? (D = function() {
			var e = n.current, t = function() {
				return h(n, k);
			};
			return t(), y(e == null ? void 0 : e.parentElement, t);
		}, x = [n], t[8] = n, t[9] = D, t[10] = x) : (D = t[9], x = t[10]), c(D, x);
		var $, P;
		t[11] !== n || t[12] !== E ? ($ = function() {
			var e = n.current;
			if (!(e == null || !(e instanceof HTMLCanvasElement) || E == null)) {
				var t = function(n) {
					var t, r = u.current, o = r != null && r.canvas === e ? r.translation : {
						x: 0,
						y: 0
					}, a = C({
						canvas: e,
						dismissCoords: p.current,
						layout: n,
						previousCanvasTranslation: o,
						revealed: R.current,
						shouldPlay: _.current === !0,
						textSpan: E
					});
					a != null && ((t = s.current) == null || t.animation.pause(), s.current = a, u.current = {
						canvas: e,
						translation: a.canvasTranslation
					});
				}, r = o("WAWebSpoilerParticlesCanvasUtils").getTextLayout(E);
				t(r);
				var a = v(E, r, t), i = null, l = function() {
					i == null && (i = window.requestAnimationFrame(function() {
						i = null, a();
					}));
				}, c = S(E, l);
				return (function() {
					var e;
					c(), i != null && window.cancelAnimationFrame(i), (e = s.current) == null || e.animation.pause(), s.current = null;
				});
			}
		}, P = [n, E], t[11] = n, t[12] = E, t[13] = $, t[14] = P) : ($ = t[13], P = t[14]), c($, P);
		var N, M;
		t[15] !== r ? (N = function() {
			var e = s.current;
			e == null || r == null || b(e, r);
		}, M = [r], t[15] = r, t[16] = N, t[17] = M) : (N = t[16], M = t[17]), c(N, M);
		var w, A;
		t[18] !== r || t[19] !== a || t[20] !== i || t[21] !== l ? (A = function() {
			var e = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
				dismissing: r != null,
				isVisible: a,
				prefersReducedMotion: i,
				revealed: l
			});
			_.current = e, R.current = l;
			var t = s.current;
			t != null && (e ? t.animation.play() : t.animation.pause());
		}, w = [
			l,
			a,
			i,
			r
		], t[18] = r, t[19] = a, t[20] = i, t[21] = l, t[22] = w, t[23] = A) : (w = t[22], A = t[23]), c(A, w);
	}
	function h(e, t) {
		var n, r = (n = e.current) == null ? void 0 : n.previousElementSibling, o = r instanceof HTMLElement ? r : null;
		t(function(e) {
			return e === o ? e : o;
		});
	}
	function y(e, t) {
		if (e instanceof HTMLElement) {
			var n = new MutationObserver(t);
			return n.observe(e, { childList: !0 }), function() {
				return n.disconnect();
			};
		}
	}
	function C(e) {
		var t = e.canvas, n = e.dismissCoords, a = e.layout, i = e.previousCanvasTranslation, l = e.revealed, s = e.shouldPlay, u = e.textSpan;
		if (l) return null;
		var c = a.lineRects, d = o("WAWebSpoilerParticlesCanvasUtils").getMeasuredLineRects(t, u, c), m = o("WAWebSpoilerParticlesCanvasUtils").getUnionRect(d), f = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticleFields(m, d), g = new (r("WAWebSpoilerParticlesAnimation"))(t, f), h = window.getComputedStyle(t), y = h.getPropertyValue(p).trim() || _;
		g.setParticleColor(y);
		var C = t.getBoundingClientRect(), v = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticlesCanvasTranslation(m, C, i, h.direction === "rtl");
		g.init(m), R(t, v);
		var S = {
			animation: g,
			canvas: t,
			canvasTranslation: v
		};
		return n != null && b(S, n), s && g.play(), S;
	}
	function b(e, t) {
		var n = e.animation, r = e.canvas, o = r.getBoundingClientRect();
		n.dismiss(t.clientX - o.left, t.clientY - o.top);
	}
	function v(e, t, n) {
		var r = t;
		return function() {
			var t = o("WAWebSpoilerParticlesCanvasUtils").getTextLayout(e);
			t.signature !== r.signature && (r = t, n(t));
		};
	}
	function S(e, t) {
		var n = [];
		for (var r of o("WAWebSpoilerParticlesCanvasUtils").getResizeTargets(e)) n.push(E(r, t));
		var a = new MutationObserver(t);
		return a.observe(e, {
			characterData: !0,
			childList: !0,
			subtree: !0
		}), function() {
			n.forEach(function(e) {
				return e();
			}), a.disconnect();
		};
	}
	function R(e, t) {
		e.style.transform = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticlesCanvasTransform(t);
	}
	var L = new WeakMap();
	function E(e, t) {
		var n = L.get(e);
		if (n != null) return n.callbacks.add(t), function() {
			n.callbacks.delete(t), n.callbacks.size === 0 && (n.unobserve(), L.delete(e));
		};
		var r = new Set([t]), a = o("WAWebResizeObserver").observe(e, function() {
			r.forEach(function(e) {
				return e();
			});
		});
		return L.set(e, {
			callbacks: r,
			unobserve: a
		}), function() {
			r.delete(t), r.size === 0 && (a(), L.delete(e));
		};
	}
	function k() {
		var e = o("react-compiler-runtime").c(2), t = m(o("WAWebA11yUtils").getPrefersReducedMotion), n = t[0], r = t[1], a, i;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			var e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = function() {
				return r(e.matches);
			};
			if ("addEventListener" in e) return e.addEventListener("change", t), (function() {
				return e.removeEventListener("change", t);
			});
		}, i = [], e[0] = a, e[1] = i) : (a = e[0], i = e[1]), c(a, i), n;
	}
	l.default = f;
}), 98);
