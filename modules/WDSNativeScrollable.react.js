__d("WDSNativeScrollable.react", [
	"WAFlowsCaretUtils",
	"WAFlowsUseForwardRef",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"throttle",
	"useThrottled"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.createContext, m = c.useCallback, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = 50, h = 5 * g, y = {
		container: {
			overscrollBehaviorY: "x1e4zzel",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			scrollBehavior: "xkcv6ua",
			"::-webkit-scrollbar_width": "xz3e5vo",
			"::-webkit-scrollbar-track_background": "xuqbp5a",
			"::-webkit-scrollbar-thumb_background": "x1l4wb2j",
			"::-webkit-scrollbar-thumb_borderStartStartRadius": "xmhn7ti",
			"::-webkit-scrollbar-thumb_borderStartEndRadius": "x1vpxxol",
			"::-webkit-scrollbar-thumb_borderEndEndRadius": "xinqzp8",
			"::-webkit-scrollbar-thumb_borderEndStartRadius": "x1hn26v",
			"::-webkit-scrollbar-thumb:hover_background": "xh8looj",
			$$css: !0
		},
		containerScrollDisabled: {
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, C = 400;
	function b(t) {
		var a = t.ref, i = t["aria-hidden"], l = i === void 0 ? !1 : i, s = t.children, c = t.id, d = t.isScrollDisabled, b = d === void 0 ? !1 : d, S = t.nativeDraggingControl, R = t.nativeDraggingOnOverscroll, L = t.onDisableNativeDragging, E = t.onEnableNativeDragging, k = t.onScroll, I = t.onScrollBottom, T = t.onScrollEnd, D = t.onScrollStart, x = t.xstyle, $ = f({
			isScrolling: !1,
			timeoutId: null,
			isForceCaretBlocked: !1
		}), P = r("WAFlowsUseForwardRef")(a), N = P[0], M = P[1], w = m(function() {
			return a == null ? void 0 : a.current;
		}, [a]), A = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				$.current.isForceCaretBlocked = !0;
				var e = w();
				yield o("WAFlowsCaretUtils").showCaretOnActiveElement(e), $.current.isForceCaretBlocked = !1, $.current.isScrolling === !0 && ($.current.isScrolling = !1, T == null || T(e == null ? void 0 : e.scrollTop));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), F = r("useThrottled")(function() {
			var e = w();
			if ((e == null ? void 0 : e.scrollTop) !== 0) {
				window.clearTimeout($.current.timeoutId), $.current.isScrolling !== !0 && ($.current.isScrolling = !0, k == null || k(e == null ? void 0 : e.scrollTop)), o("WAFlowsCaretUtils").hideCaretOnActiveElement();
				var t = window.setTimeout(A, h);
				if ($.current.timeoutId = t, I !== null) {
					var n = w();
					n && (n == null ? void 0 : n.offsetHeight) + (n == null ? void 0 : n.scrollTop) >= (n == null ? void 0 : n.scrollHeight) / 2 && (I == null || I());
				}
			}
		}, g), O = _(function() {
			return { isScrolling: $.current.isScrolling };
		}, []);
		return p(function() {
			if (S) {
				var e = N.current, t = { passive: !0 }, n = function() {
					var t, n = (t = e == null ? void 0 : e.scrollTop) != null ? t : 0;
					(n > 0 || !R) && (L == null || L()), D == null || D(n);
				}, o = function(n) {
					var t;
					n.stopPropagation(), n.preventDefault();
					var r = (t = e == null ? void 0 : e.scrollTop) != null ? t : 0;
					r <= 0 && R ? E == null || E() : L == null || L();
				}, a = r("throttle")(n, C), i = function(n) {
					var t, r = (t = e == null ? void 0 : e.scrollTop) != null ? t : 0;
					r <= 0 && R && (E == null || E());
				};
				return e == null || e.addEventListener("scroll", a, t), e == null || e.addEventListener("scrollend", i, t), e == null || e.addEventListener("touchstart", o, t), e == null || e.addEventListener("touchend", i, t), function() {
					e == null || e.removeEventListener("scroll", a), e == null || e.removeEventListener("scrollend", i), e == null || e.removeEventListener("touchstart", o), e == null || e.removeEventListener("touchend", i);
				};
			}
		}, [
			N,
			S,
			R,
			L,
			E,
			D
		]), u.jsx(v.Provider, {
			value: O,
			children: u.jsx("div", babelHelpers.extends({ id: c }, (e || (e = r("stylex"))).props(y.container, b && y.containerScrollDisabled, x), {
				ref: M,
				onScroll: function() {
					return !$.current.isForceCaretBlocked && F();
				},
				"data-scrollable": !0,
				"aria-hidden": l,
				children: s
			}))
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = d({ isScrolling: !1 });
	l.WDSNativeScrollable = b;
}), 98);
