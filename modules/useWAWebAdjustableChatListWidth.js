__d("useWAWebAdjustableChatListWidth", [
	"WAWebAdaptiveLayoutConfig",
	"WAWebChatlistResizeHandle.react",
	"WAWebEnvironment",
	"WAWebLocalStorage",
	"react",
	"react-compiler-runtime",
	"useWAWebAdaptiveLayoutMode",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = "chatlist_custom_width", d = {
		flex: "0 0 calc(100% - " + o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH + "px)",
		width: "100%",
		maxWidth: "100%"
	}, m = {
		flex: "0 0 0",
		width: "0%",
		maxWidth: "0%",
		display: "none"
	};
	function p(e, t) {
		var n = t && e >= o("WAWebAdaptiveLayoutConfig").WIDE_BREAKPOINT_PX, r = o("WAWebAdaptiveLayoutConfig").MIN_CONVERSATION_WIDTH + (n ? o("WAWebAdaptiveLayoutConfig").MIN_RIGHT_DRAWER_WIDTH : 0), a = e - r, i = e / 2;
		return Math.max(o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH, Math.min(i, a));
	}
	function _(e, t, n) {
		if (e == null) return null;
		if (!e.endsWith("%")) return e;
		var r = parseFloat(e);
		if (!Number.isFinite(r) || t <= 0) return e;
		var a = r / 100 * t, i = Math.min(n, Math.max(o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH, a));
		return Math.abs(i - a) < .5 ? e : Math.round(i) + "px";
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isEnabled, a = e.maxWidth, i = e.onResizeEnd, l = e.onResizeReset;
		if (!n) return null;
		var u;
		return t[0] !== a || t[1] !== i || t[2] !== l ? (u = s.jsx(r("WAWebChatlistResizeHandle.react"), {
			onResizeReset: l,
			onResizeEnd: i,
			minWidth: o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH,
			maxWidth: a
		}), t[0] = a, t[1] = i, t[2] = l, t[3] = u) : u = t[3], u;
	}
	function g(e, t) {
		var n = o("react-compiler-runtime").c(22), a = r("WAWebEnvironment").isWindows, i = a, l = r("useWAWebAdaptiveLayoutMode")(), g = r("useWAWebWindowSize")(), h = g.width, y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			var e = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(c);
			return e == null || !i ? null : e;
		}, n[0] = y) : y = n[0];
		var C = u(y), b = C[0], v = C[1], S, R;
		n[1] !== b || n[2] !== e || n[3] !== h ? (S = p(h, e), R = _(b, h, S), n[1] = b, n[2] = e, n[3] = h, n[4] = S, n[5] = R) : (S = n[4], R = n[5]);
		var L = R, E;
		n[6] !== L ? (E = L == null ? {} : {
			flex: "0 0 " + L,
			width: "" + L,
			maxWidth: "" + L
		}, n[6] = L, n[7] = E) : E = n[7];
		var k = E, I;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (I = {}, n[8] = I) : I = n[8];
		var T = I, D = L != null ? "calc(100% - max(" + (o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH + o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH) + "px, " + L + " + " + o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH + "px))" : "calc(100% - clamp(" + o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH + "px, 1200%/35, " + o("WAWebAdaptiveLayoutConfig").HYBRID_CHATLIST_MAX_WIDTH_PX + "px) - " + o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH + "px)", x = "0 0 " + D, $ = "" + D, P = "" + D, N;
		n[9] !== x || n[10] !== $ || n[11] !== P ? (N = {
			flex: x,
			width: $,
			maxWidth: P,
			position: "absolute",
			insetInlineEnd: 0,
			height: "100%"
		}, n[9] = x, n[10] = $, n[11] = P, n[12] = N) : N = n[12];
		var M = N, w = t != null ? m : d, A = i && l === "narrow" ? w : k, F = i && l === "mid" && e ? M : T, O;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (O = function(t) {
			var e = window.innerWidth, n = t / e * 100, o = n.toFixed(2) + "%";
			v(o), r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(c, o);
		}, n[13] = O) : O = n[13];
		var B = O, W;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			v(null), r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(c);
		}, n[14] = W) : W = n[14];
		var q = W, U;
		n[15] !== S ? (U = s.jsx(f, {
			onResizeReset: q,
			isEnabled: i,
			maxWidth: S,
			onResizeEnd: B
		}), n[15] = S, n[16] = U) : U = n[16];
		var V;
		return n[17] !== A || n[18] !== l || n[19] !== F || n[20] !== U ? (V = {
			leftDrawerStyle: A,
			rightDrawerStyle: F,
			mode: l,
			resizeHandle: U
		}, n[17] = A, n[18] = l, n[19] = F, n[20] = U, n[21] = V) : V = n[21], V;
	}
	l.CHATLIST_CUSTOM_WIDTH_LS_KEY = c, l.useAdjustableChatListWidth = g;
}), 98);
