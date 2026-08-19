__d("WAWebTPPoweredBy.react", [
	"fbt",
	"WAWebTooltip.react",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = { tooltip: {
		boxSizing: "x9f619",
		maxWidth: "xsfubfy",
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		boxShadow: "x1ay2l74",
		$$css: !0
	} }, f = 7e3;
	function g(e) {
		var t = o("react-compiler-runtime").c(26), n = e.isWindowsHybrid, a = e.persistent, i = e.position, l = n === void 0 ? !1 : n, c = a === void 0 ? !1 : a, g = i === void 0 ? "end" : i, h = p(!0), y = h[0], C = h[1], b = m(null), v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = {
			interacting: !1,
			timerFired: !1
		}, t[0] = v) : v = t[0];
		var S = m(v), R;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = {
			target: b,
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			includeArrow: !0,
			initHandling: "controllable",
			tooltipXStyle: _.tooltip,
			enableEnterTransition: !1,
			enableExitTransition: !1,
			element: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentInverse",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}, t[1] = R) : R = t[1];
		var L = o("WAWebTooltip.react").useTooltip(R), E = L.hideTooltip, k = L.showTooltip, I = L.tooltip, T, D;
		t[2] !== c ? (T = function() {
			if (!c) {
				var e = window.setTimeout(function() {
					S.current.timerFired = !0, S.current.interacting || C(!1);
				}, f);
				return (function() {
					window.clearTimeout(e);
				});
			}
		}, D = [c], t[2] = c, t[3] = T, t[4] = D) : (T = t[3], D = t[4]), d(T, D);
		var x;
		t[5] !== k ? (x = function() {
			S.current.interacting = !0, k();
		}, t[5] = k, t[6] = x) : x = t[6];
		var $ = x, P;
		t[7] !== E || t[8] !== c ? (P = function() {
			S.current.interacting = !1, E(), !c && S.current.timerFired && C(!1);
		}, t[7] = E, t[8] = c, t[9] = P) : P = t[9];
		var N = P;
		if (!y) return null;
		var M;
		t[10] !== l ? (M = {
			0: {},
			1: { className: "x1n2onr6 x1d9eok4" }
		}[!!l << 0], t[10] = l, t[11] = M) : M = t[11];
		var w = g === "center" ? b : void 0, A;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x78zum5 x6s0dn4 xboafo0 xhslqc4 xl2ypbo x1ypdohk x1trrmfo x11g6tue x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak" }, t[12] = A) : A = t[12];
		var F;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx("span", {
			className: "x1hl2dhg xt0b8zv",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[13] = F) : F = t[13];
		var O;
		t[14] !== g ? (O = g !== "center" && u.jsx("span", {
			ref: b,
			className: "x1i1rx1s xjm9jq1"
		}), t[14] = g, t[15] = O) : O = t[15];
		var B;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx(r("WDSIconIcInfo.react"), {
			height: 12,
			width: 12
		}), t[16] = B) : B = t[16];
		var W;
		t[17] !== N || t[18] !== $ || t[19] !== w || t[20] !== O ? (W = u.jsxs("button", babelHelpers.extends({ ref: w }, A, {
			"data-testid": "webtp-powered-by",
			onMouseEnter: $,
			onMouseLeave: N,
			onFocus: $,
			onBlur: N,
			type: "button",
			children: [
				F,
				O,
				B
			]
		})), t[17] = N, t[18] = $, t[19] = w, t[20] = O, t[21] = W) : W = t[21];
		var q;
		return t[22] !== M || t[23] !== W || t[24] !== I ? (q = u.jsxs("div", babelHelpers.extends({}, M, { children: [W, I] })), t[22] = M, t[23] = W, t[24] = I, t[25] = q) : q = t[25], q;
	}
	l.default = g;
}), 226);
