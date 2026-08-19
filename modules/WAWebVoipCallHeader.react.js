__d("WAWebVoipCallHeader.react", [
	"WAWebCallTimer.react",
	"WAWebVoipCallStateUtils",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback",
	"useWAWebVoipCallHeaderVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = 100, p = {
		timer: {
			color: "x17t9dm2",
			fontVariantNumeric: "xss6m8b",
			lineHeight: "xd4r4e8",
			maxWidth: "x193iq5w",
			opacity: "x1iy03kw",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			textShadow: "x15y3ue",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		timerCompact: {
			fontSize: "x1pg5gke",
			lineHeight: "x1d3mw78",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(23), n = e.callState, a = e.getActivityContainer, i = e.isCompactLayout, l = e.isMenuOpen, u = e.name, _ = l === void 0 ? !1 : l, f = d(!1), g = f[0], h = f[1], y = r("useWAWebIsKeyboardUser")(), C = y.isKeyboardUser, b = o("useWAWebVoipCallHeaderVisibility").useWAWebVoipCallHeaderVisibility(_ || C && g), v = b[0], S = b[1], R = r("useWAWebStableCallback")(S), L = r("useWAWebThrottledCallback")(R, m), E, k;
		if (t[0] !== a || t[1] !== L || t[2] !== R ? (E = function() {
			var e = a == null ? void 0 : a();
			if (e != null) {
				var t = function() {
					R();
				}, n = function(n) {
					h(n.target !== e), R();
				}, r = function(n) {
					var t = n.relatedTarget;
					(!(t instanceof Node) || !e.contains(t)) && (h(!1), R());
				};
				return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("pointerdown", t), e.addEventListener("pointermove", L), (function() {
					e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("pointerdown", t), e.removeEventListener("pointermove", L);
				});
			}
		}, k = [
			a,
			L,
			R
		], t[0] = a, t[1] = L, t[2] = R, t[3] = E, t[4] = k) : (E = t[3], k = t[4]), c(E, k), !o("WAWebVoipCallStateUtils").isCallActive(n)) return null;
		var I = !v, T;
		t[5] !== v ? (T = {
			0: { className: "x6s0dn4 x1u3vkv0 x9f619 x78zum5 xdt5ytf xjp8j0k xtijo5x x1o0tod x1hc1fzr x1j1r7yx x16025s9 xw8kemb x1y869pa x47corl x10l6tqk x13vifvy xx6bhzk x12w9bfk x19991ni x9lcvmn x1jeq31z" },
			1: { className: "x6s0dn4 x1u3vkv0 x9f619 x78zum5 xdt5ytf xjp8j0k xtijo5x x1o0tod x1j1r7yx x16025s9 xw8kemb x1y869pa x47corl x10l6tqk x13vifvy xx6bhzk x12w9bfk x19991ni x9lcvmn x1jeq31z xg01cxk" }
		}[!v << 0], t[5] = v, t[6] = T) : T = t[6];
		var D;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x6s0dn4 x78zum5 xdt5ytf x1b73lln x46w9ns x98l61r xxc7z9f xeuugli xh8yej3" }, t[7] = D) : D = t[7];
		var x;
		t[8] !== i || t[9] !== u ? (x = u != null && s.jsx("div", {
			"data-testid": "voip-call-header-name",
			className: "x193iq5w xeuugli x6ikm8r x10wlt62 x2b8uid xlyipyv x15y3ue xuxw1ft",
			children: s.jsx(r("WDSText.react"), {
				colorName: "persistentAlwaysWhite",
				maxLines: 1,
				selectable: !1,
				type: i ? "Body2Emphasized" : "Body1Emphasized",
				children: u
			})
		}), t[8] = i, t[9] = u, t[10] = x) : x = t[10];
		var $ = i && p.timerCompact, P;
		t[11] !== $ ? (P = [p.timer, $], t[11] = $, t[12] = P) : P = t[12];
		var N;
		t[13] !== n || t[14] !== P ? (N = s.jsx(r("WAWebCallTimer.react"), {
			callState: n,
			xstyle: P
		}), t[13] = n, t[14] = P, t[15] = N) : N = t[15];
		var M;
		t[16] !== N || t[17] !== x ? (M = s.jsxs("div", babelHelpers.extends({}, D, { children: [x, N] })), t[16] = N, t[17] = x, t[18] = M) : M = t[18];
		var w;
		return t[19] !== M || t[20] !== I || t[21] !== T ? (w = s.jsx("div", babelHelpers.extends({
			"aria-hidden": I,
			"data-testid": "voip-call-header"
		}, T, { children: M })), t[19] = M, t[20] = I, t[21] = T, t[22] = w) : w = t[22], w;
	}
	l.default = _;
}), 98);
