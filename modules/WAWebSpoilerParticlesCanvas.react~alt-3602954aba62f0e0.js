__d("WAWebSpoilerParticlesCanvas.react", [
	"WAWebA11yUtils",
	"WAWebNoop",
	"WAWebResizeObserver",
	"WAWebSpoilerParticlesAnimation",
	"WAWebSpoilerParticlesCanvasUtils",
	"react",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = "--WDS-content-default", _ = "#000000";
	function f(e) {
		var t = e.dismissCoords, n = e.revealed, o = n === void 0 ? !1 : n, a = d(null), i = r("useWAWebOnScreen")(a, r("WAWebNoop")), l = k();
		g({
			canvasRef: a,
			revealed: o,
			isVisible: i,
			prefersReducedMotion: l,
			dismissCoords: t
		});
		var u = o && (t == null || l);
		return s.jsx("canvas", babelHelpers.extends({
			ref: a,
			"aria-hidden": !0,
			"data-testid": "spoiler_particles_canvas"
		}, {
			0: { className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn x1hc1fzr" },
			1: { className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn xg01cxk" }
		}[!!u << 0]));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.canvasRef, n = e.dismissCoords, r = e.isVisible, a = e.prefersReducedMotion, i = e.revealed, l = d(null), s = d(null), u = d(n), p = d(null);
		p.current == null && (p.current = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
			dismissing: n != null,
			isVisible: r,
			prefersReducedMotion: a,
			revealed: i
		}));
		var _ = d(i), f = m(null), g = f[0], R = f[1];
		c(function() {
			u.current = n;
		}, [n]), c(function() {
			var e = t.current, n = function() {
				return h(t, R);
			};
			return n(), y(e == null ? void 0 : e.parentElement, n);
		}, [t]), c(function() {
			var e = t.current;
			if (!(e == null || !(e instanceof HTMLCanvasElement) || g == null)) {
				var n = function(n) {
					var t, r = s.current, o = r != null && r.canvas === e ? r.translation : {
						x: 0,
						y: 0
					}, a = C({
						canvas: e,
						dismissCoords: u.current,
						layout: n,
						previousCanvasTranslation: o,
						revealed: _.current,
						shouldPlay: p.current === !0,
						textSpan: g
					});
					a != null && ((t = l.current) == null || t.animation.pause(), l.current = a, s.current = {
						canvas: e,
						translation: a.canvasTranslation
					});
				}, r = o("WAWebSpoilerParticlesCanvasUtils").getTextLayout(g);
				n(r);
				var a = v(g, r, n), i = null, c = function() {
					i == null && (i = window.requestAnimationFrame(function() {
						i = null, a();
					}));
				}, d = S(g, c);
				return function() {
					var e;
					d(), i != null && window.cancelAnimationFrame(i), (e = l.current) == null || e.animation.pause(), l.current = null;
				};
			}
		}, [t, g]), c(function() {
			var e = l.current;
			e == null || n == null || b(e, n);
		}, [n]), c(function() {
			var e = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
				dismissing: n != null,
				isVisible: r,
				prefersReducedMotion: a,
				revealed: i
			});
			p.current = e, _.current = i;
			var t = l.current;
			t != null && (e ? t.animation.play() : t.animation.pause());
		}, [
			i,
			r,
			a,
			n
		]);
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
		var e = m(o("WAWebA11yUtils").getPrefersReducedMotion), t = e[0], n = e[1];
		return c(function() {
			var e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = function() {
				return n(e.matches);
			};
			if ("addEventListener" in e) return e.addEventListener("change", t), function() {
				return e.removeEventListener("change", t);
			};
		}, []), t;
	}
	l.default = f;
}), 98);
