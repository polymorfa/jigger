__d("useWAWebFlow", [
	"$InternalEnum",
	"WAWebUimUie.react",
	"WAWebVelocityTransitionGroup",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebStableCallback",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useReducer, f = c.useRef, g = { container: {
		height: "x5yr21d",
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		position: "x10l6tqk",
		top: "x13vifvy",
		width: "xh8yej3",
		$$css: !0
	} };
	function h() {
		function t(t) {
			var n = o("react-compiler-runtime").c(22), a, i;
			n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
			var l = a, s = l.children, c = l.displayName, d = l.flow, m = c === void 0 ? "FlowDrawer" : c, p = d.activeKey, _ = d.pop, f = d.transition;
			if (s == null) return null;
			var h;
			n[3] !== a ? (h = function() {
				a.requestFocus && a.requestFocus();
			}, n[3] = a, n[4] = h) : h = n[4];
			var y = h, C;
			n[5] !== _ || n[6] !== a ? (C = function(t) {
				a.requestDismiss ? a.requestDismiss(t) : _();
			}, n[5] = _, n[6] = a, n[7] = C) : C = n[7];
			var b = C, v = m + "-" + p, S;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x5yr21d xh8yej3" }, n[8] = S) : S = n[8];
			var R = m + "-" + p, L;
			n[9] !== s || n[10] !== b || n[11] !== y || n[12] !== R ? (L = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: R,
				escapable: !0,
				requestFocus: y,
				requestDismiss: b,
				children: s
			}), n[9] = s, n[10] = b, n[11] = y, n[12] = R, n[13] = L) : L = n[13];
			var E;
			n[14] !== p || n[15] !== L ? (E = u.jsx("div", babelHelpers.extends({}, S, { children: L }), p), n[14] = p, n[15] = L, n[16] = E) : E = n[16];
			var k;
			return n[17] !== i || n[18] !== v || n[19] !== E || n[20] !== f ? (k = u.jsx(r("WAWebVelocityTransitionGroup"), {
				ref: i,
				transitionName: f,
				xstyle: g.container,
				displayName: v,
				children: E
			}), n[17] = i, n[18] = v, n[19] = E, n[20] = f, n[21] = k) : k = n[21], k;
		}
		return t;
	}
	var y = n("$InternalEnum").Mirrored([
		"DrawerLeft",
		"DrawerRight",
		"Modal",
		"None"
	]);
	function C(e) {
		var t = e.initialStack, n = e.initialStep, r = e.initialTransition, o = [];
		return t != null && t.length > 0 ? o = [].concat(t) : n != null && (o = [n]), {
			stack: o,
			previousStep: o.length > 1 ? o[o.length - 2] : null,
			transition: r,
			activeKey: o.length > 0 ? o.length : 1,
			ended: !1,
			isPushed: !0
		};
	}
	function b(e, t) {
		var n, r, o;
		switch (t.type) {
			case "transition": return babelHelpers.extends({}, e, { transition: (n = (r = t.payload) == null ? void 0 : r.transition) != null ? n : e.transition });
			case "push": return ((o = t.payload) == null ? void 0 : o.step) == null ? e : babelHelpers.extends({}, e, {
				previousStep: e.stack[e.stack.length - 1],
				stack: e.stack.concat(t.payload.step),
				activeKey: e.activeKey + 1,
				ended: !1,
				isPushed: !0
			});
			case "pop": {
				var a, i, l = (a = (i = t.payload) == null ? void 0 : i.count) != null ? a : 1, s = e.stack.slice(0, -l);
				return s.length >= 1 ? babelHelpers.extends({}, e, {
					previousStep: e.stack[e.stack.length - 1],
					stack: s,
					activeKey: e.activeKey - l,
					isPushed: !1
				}) : e.ended ? e : babelHelpers.extends({}, e, { ended: !0 });
			}
			default: return e;
		}
	}
	function v(e, t) {
		var n = r("useWAWebUIM")(), o = t || {}, a = o.transitions, i = a === void 0 ? y.None : a, l = o.onEnd, s = o.initialStack, u = S(i), c = u.popTransition, g = u.pushTransition, v = _(b, {
			initialStep: e,
			initialTransition: g,
			initialStack: s
		}, C), R = v[0], L = v[1], E = f(null), k = d(function(e) {
			L({
				type: "transition",
				payload: { transition: e }
			});
		}, []), I = d(function(e, t) {
			t === void 0 && (t = g), k(t);
			var n = E.current;
			E.current = function() {
				n == null || n(), L({
					type: "push",
					payload: { step: e }
				});
			};
		}, [g, k]), T = d(function(e, t) {
			e === void 0 && (e = c), t === void 0 && (t = 1), k(e), E.current = function() {
				return L({
					type: "pop",
					payload: { count: t }
				});
			};
		}, [c, k]);
		m(function() {
			E.current != null && (E.current(), E.current = null);
		}, void 0);
		var D = r("useWAWebStableCallback")(function(e) {
			l ? l(e) : r("nullthrows")(n).requestDismiss(e);
		}), x = r("useWAWebStableCallback")(function() {
			return R.stack.length;
		});
		m(function() {
			R.ended && D();
		}, [D, R.ended]);
		var $ = p(function() {
			return h();
		}, []), P = {
			push: I,
			pop: T,
			end: D,
			stackSize: x,
			step: R.stack[R.stack.length - 1],
			previousStep: R.previousStep,
			transition: R.transition,
			activeKey: R.activeKey,
			isPushed: R.isPushed
		};
		return [$, P];
	}
	function S(e) {
		switch (e) {
			case y.DrawerLeft: return {
				pushTransition: "flow-transition-drawer-pop",
				popTransition: "flow-transition-drawer-push"
			};
			case y.DrawerRight: return {
				pushTransition: "flow-transition-drawer-push",
				popTransition: "flow-transition-drawer-pop"
			};
			case y.Modal: return {
				pushTransition: "flow-transition-modal-push",
				popTransition: "flow-transition-modal-pop"
			};
			case y.None: return {
				pushTransition: "none",
				popTransition: "none"
			};
		}
	}
	l.FlowTransitions = y, l.useFlow = v;
}), 98);
