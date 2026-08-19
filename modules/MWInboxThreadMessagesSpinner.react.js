__d("MWInboxThreadMessagesSpinner.react", [
	"fbt",
	"CometTriggerAccessibilityAlertContext",
	"CometVisualCompletionAttributes",
	"MWXSpinner.react",
	"react",
	"react-compiler-runtime",
	"useDebouncedState",
	"useIsMountedRef",
	"useVisibilityObserver"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useContext, m = c.useEffect, p = c.useEffectEvent, _ = c.useMemo;
	function f(e) {
		var t = o("react-compiler-runtime").c(7), n = d(r("CometTriggerAccessibilityAlertContext")), a;
		t[0] !== n ? (a = function() {
			n(s._(
				/*BTDS*/
				""
			));
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = p(a), l;
		t[2] !== i || t[3] !== e ? (l = function() {
			e && i();
		}, t[2] = i, t[3] = e, t[4] = l) : l = t[4];
		var u;
		t[5] !== e ? (u = [e], t[5] = e, t[6] = u) : u = t[6], m(l, u);
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(15), n = e.delayMs, a = e.vcIgnore, i = r("useIsMountedRef")(), l = !n, s;
		t[0] !== n || t[1] !== l ? (s = {
			debounceMS: n,
			doNotDebounce: l
		}, t[0] = n, t[1] = l, t[2] = s) : s = t[2];
		var c = r("useDebouncedState")(h, s), d = c[0], m = c[1], p;
		t[3] !== i || t[4] !== m ? (p = {
			onHidden: function() {
				i.current && m(!1);
			},
			onVisible: function() {
				i.current && m(!0);
			}
		}, t[3] = i, t[4] = m, t[5] = p) : p = t[5];
		var _ = p, g = r("useVisibilityObserver")(_);
		f(d);
		var y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = "x6s0dn4 x78zum5 x1t1x2f9 x1iyjqo2 x2lah0s xxk0z11 xl56j7k xsag5q8 xz9dl7a x1eb86dx", t[6] = y) : y = t[6];
		var C;
		t[7] !== a ? (C = a === !0 ? r("CometVisualCompletionAttributes").IGNORE : {}, t[7] = a, t[8] = C) : C = t[8];
		var b;
		t[9] !== d ? (b = u.jsx("div", {
			role: "none",
			children: d ? u.jsx(r("MWXSpinner.react"), {
				color: "dark",
				size: 24
			}) : u.jsx("div", { className: "x1eb86dx xxk0z11 xh8yej3" })
		}), t[9] = d, t[10] = b) : b = t[10];
		var v;
		return t[11] !== C || t[12] !== b || t[13] !== g ? (v = u.jsx("div", babelHelpers.extends({
			className: y,
			ref: g,
			role: "none"
		}, C, { children: b })), t[11] = C, t[12] = b, t[13] = g, t[14] = v) : v = t[14], v;
	}
	function h() {
		return !0;
	}
	l.default = g;
}), 226);
