__d("WAWebDeveloperToolsDBViewerButton.react", [
	"WAWebSpinner.react",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { padding6: {
		paddingTop: "x1yrsyyn",
		paddingInlineEnd: "x1icxu4v",
		paddingBottom: "x10b6aqq",
		paddingInlineStart: "x25sj25",
		$$css: !0
	} }, c = {
		activeColor: {
			color: "xk4n5i7",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			color: "xhslqc4",
			$$css: !0
		},
		fixedHeight: {
			height: "x1s1d1n7",
			$$css: !0
		},
		hoverColor: {
			":hover_color": "xfrlarv",
			$$css: !0
		},
		disabled: {
			cursor: "x1h6gzvc",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		light: {
			backgroundColor: "xy57btm",
			$$css: !0
		},
		dark: {
			backgroundColor: "x1q7yeco",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(17), n = e.buttonRef, a = e.children, i = e.disabled, l = e.fixedHeight, d = e.fullWidth, m = e.isActive, p = e.light, _ = e.loading, f = e.onClick, g = e.xstyle, h = i === void 0 ? !1 : i, y = l === void 0 ? !1 : l, C = d === void 0 ? !1 : d, b = m === void 0 ? !1 : m, v = p === void 0 ? !1 : p, S = _ === void 0 ? !1 : _, R = y && c.fixedHeight, L = b && c.activeColor, E = (h || S) && c.disabled, k = !h && c.hoverColor, I = C && c.fullWidth, T = v ? c.light : c.dark, D;
		t[0] !== k || t[1] !== I || t[2] !== T || t[3] !== R || t[4] !== L || t[5] !== E || t[6] !== g ? (D = [
			c.button,
			u.padding6,
			R,
			L,
			E,
			k,
			I,
			T,
			g
		], t[0] = k, t[1] = I, t[2] = T, t[3] = R, t[4] = L, t[5] = E, t[6] = g, t[7] = D) : D = t[7];
		var x;
		t[8] !== a || t[9] !== S ? (x = S ? s.jsx(o("WAWebSpinner.react").Spinner, { size: 16 }) : a, t[8] = a, t[9] = S, t[10] = x) : x = t[10];
		var $;
		return t[11] !== n || t[12] !== h || t[13] !== f || t[14] !== D || t[15] !== x ? ($ = s.jsx(r("WAWebUnstyledButton.react"), {
			disabled: h,
			ref: n,
			onClick: f,
			xstyle: D,
			children: x
		}), t[11] = n, t[12] = h, t[13] = f, t[14] = D, t[15] = x, t[16] = $) : $ = t[16], $;
	}
	l.default = d;
}), 98);
