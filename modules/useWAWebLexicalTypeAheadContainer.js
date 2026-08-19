__d("useWAWebLexicalTypeAheadContainer", [
	"Lexical",
	"LexicalComposerContext",
	"WAWebPREGatingUtils",
	"WAWebPopover.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebDebouncedCallback",
	"useWAWebLexicalFocusState",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useDeferredValue, c = s.useEffect, d = s.useMemo, m = s.useState, p = 10, _ = 12;
	function f(e) {
		var t = document.getSelection();
		if (!t || !t.isCollapsed) return null;
		var n = t.anchorNode, r = t.anchorOffset;
		if (n == null || r == null) return null;
		var o = e, a = document.createRange();
		try {
			a.setStart(n, o), a.setEnd(n, r);
		} catch (e) {
			return null;
		}
		return a.getBoundingClientRect();
	}
	function g(e, t) {
		return e.bottom === t.bottom && e.height === t.height && e.left === t.left && e.right === t.right && e.top === t.top && e.width === t.width && e.x === t.x && e.y === t.y;
	}
	function h(e, t) {
		var n = o("react-compiler-runtime").c(22), a = o("LexicalComposerContext").useLexicalComposerContext(), i = a[0], l = m(null), s = l[0], d = l[1], p = u(s), _ = r("useWAWebDebouncedCallback")(d, 50), h;
		n[0] !== _ ? (h = o("WAWebPREGatingUtils").isPREResizeEnabled() ? _ : d, n[0] = _, n[1] = h) : h = n[1];
		var y = h, C;
		n[2] !== p || n[3] !== s ? (C = o("WAWebPREGatingUtils").isPREResizeEnabled() ? p : s, n[2] = p, n[3] = s, n[4] = C) : C = n[4];
		var b = C, v;
		n[5] !== i || n[6] !== t || n[7] !== e || n[8] !== b || n[9] !== y ? (v = function() {
			i.getEditorState().read(function() {
				var n = o("Lexical").$getSelection();
				if (!o("Lexical").$isRangeSelection(n) || !n.isCollapsed()) {
					y(null);
					return;
				}
				var r = f(e);
				if (r) {
					if (b != null && (g(r, b) || t) && o("WAWebPREGatingUtils").isPREResizeEnabled()) return;
					y(r);
					return;
				}
				y(null);
			});
		}, n[5] = i, n[6] = t, n[7] = e, n[8] = b, n[9] = y, n[10] = v) : v = n[10];
		var S = r("useWAWebStableCallback")(v), R = r("useWAWebDebouncedCallback")(S, 100), L;
		n[11] !== i || n[12] !== S ? (L = function() {
			var e = i.registerUpdateListener(S);
			return (function() {
				e();
			});
		}, n[11] = i, n[12] = S, n[13] = L) : L = n[13];
		var E;
		n[14] !== i || n[15] !== t || n[16] !== S ? (E = [
			i,
			S,
			t
		], n[14] = i, n[15] = t, n[16] = S, n[17] = E) : E = n[17], c(L, E);
		var k, I;
		return n[18] !== S || n[19] !== R ? (k = function() {
			return window.addEventListener("resize", o("WAWebPREGatingUtils").isPREResizeEnabled() ? R : S, o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0), document.addEventListener("scroll", S, {
				capture: !0,
				passive: !0
			}), (function() {
				window.removeEventListener("resize", o("WAWebPREGatingUtils").isPREResizeEnabled() ? R : S, o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0), document.removeEventListener("scroll", S, !0);
			});
		}, I = [S, R], n[18] = S, n[19] = R, n[20] = k, n[21] = I) : (k = n[20], I = n[21]), c(k, I), b;
	}
	function y(e, t, n, a) {
		var i = o("LexicalComposerContext").useLexicalComposerContext(), l = i[0], s = t === 0, u = h(e, s), m = d(function() {
			return document.createElement("div");
		}, []), f = r("useWAWebStableCallback")(function() {
			var e, i = !u || s;
			if (m.className = {
				0: "xc9l9hb x10l6tqk x1lliihq",
				1: "xc9l9hb x10l6tqk x1s85apg"
			}[!!i << 0], !(!u || i)) {
				var c = l.getRootElement(), d = document.scrollingElement;
				if (!(c == null || d == null)) {
					var f = (e = a == null ? void 0 : a.current) != null ? e : null, g = f != null ? f.getBoundingClientRect() : u, h = g.left, y = g.top, C = f != null ? _ : 0;
					m.style.top = window.pageYOffset + y - n - p + "px";
					var b = window.pageXOffset + h + C;
					b -= Math.max(0, b + t - d.scrollWidth), m.style.left = b + "px", m.style.width = t + "px", m.style.height = n + "px", m.isConnected || r("nullthrows")(document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID)).append(m);
				}
			}
		});
		c(function() {
			f();
		}, [
			l,
			u,
			f,
			n,
			t,
			a
		]), c(function() {
			return function() {
				m.isConnected && m.remove();
			};
		}, [m]);
		var g = r("useWAWebStableCallback")(function() {
			m.className = "xc9l9hb x10l6tqk x1s85apg";
		}), y = r("useWAWebStableCallback")(function() {
			m.className = "xc9l9hb x10l6tqk x1lliihq";
		});
		return o("useWAWebLexicalFocusState").useLexicalFocusStateListener(l, function(e, t) {
			e ? y() : t && t.relatedTarget instanceof HTMLElement && m.contains(t.relatedTarget) || g();
		}), {
			containerEle: m,
			hideContainer: g
		};
	}
	l.useLexicalTypeAheadContainer = y;
}), 98);
