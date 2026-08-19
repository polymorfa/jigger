__d("WAWebBizTwoColumnLayout.react", [
	"WAWebFlexBox.react",
	"WAWebResizeObserver.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = 24, d = 20, m = 380, p = m * 2 + d + c * 2, _ = {
		largeScreenPrimary: {
			flexGrow: "xgyuaek",
			$$css: !0
		},
		largeScreenRoot: {
			justifyContent: "xl56j7k",
			$$css: !0
		},
		largeScreenSecondary: {
			flexGrow: "x1iyjqo2",
			position: "x7wzq59",
			top: "x242muq",
			$$css: !0
		},
		primary: {
			minWidth: "x1snuils",
			rowGap: "x1f0uite",
			$$css: !0
		},
		root: {
			alignContent: "xc26acl",
			columnGap: "x1mn2tih",
			display: "x78zum5",
			height: "x5yr21d",
			maxWidth: "x4t6xuk",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		secondary: {
			height: "xg7h5cd",
			minWidth: "x1snuils",
			rowGap: "x1f0uite",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(21), n = e.flipResizeOrder, a = e.primaryContent, i = e.secondaryContent, l = e.testid, c = n === void 0 ? !1 : n, d = u(!1), m = d[0], f = d[1], g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			f(t.width <= p);
		}, t[0] = g) : g = t[0];
		var h = g, y = c && m && i != null, C = !m && _.largeScreenPrimary, b;
		t[1] !== C ? (b = [_.primary, C], t[1] = C, t[2] = b) : b = t[2];
		var v;
		t[3] !== a || t[4] !== b ? (v = s.jsx(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: b,
			align: "stretch",
			children: a
		}), t[3] = a, t[4] = b, t[5] = v) : v = t[5];
		var S = v, R;
		t[6] !== m || t[7] !== i ? (R = i != null && s.jsx(o("WAWebFlexBox.react").FlexColumn, {
			xstyle: [_.secondary, !m && _.largeScreenSecondary],
			children: i
		}), t[6] = m, t[7] = i, t[8] = R) : R = t[8];
		var L = R, E;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (E = "xc26acl x78zum5 x5yr21d xl56j7k xh8yej3", t[9] = E) : E = t[9];
		var k = m ? "vertical" : "horizontal", I = !m && _.largeScreenRoot, T;
		t[10] !== I ? (T = [_.root, I], t[10] = I, t[11] = T) : T = t[11];
		var D;
		t[12] !== S || t[13] !== L || t[14] !== y ? (D = y ? s.jsxs(s.Fragment, { children: [L, S] }) : s.jsxs(s.Fragment, { children: [S, L] }), t[12] = S, t[13] = L, t[14] = y, t[15] = D) : D = t[15];
		var x;
		return t[16] !== T || t[17] !== D || t[18] !== k || t[19] !== l ? (x = s.jsx(r("WAWebResizeObserver.react"), {
			className: E,
			onResize: h,
			children: s.jsx(o("WAWebFlexBox.react").FlexItem, {
				direction: k,
				flex: !0,
				testid: l,
				xstyle: T,
				children: D
			})
		}), t[16] = T, t[17] = D, t[18] = k, t[19] = l, t[20] = x) : x = t[20], x;
	}
	l.default = f;
}), 98);
