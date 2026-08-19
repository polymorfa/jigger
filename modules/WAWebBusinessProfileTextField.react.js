__d("WAWebBusinessProfileTextField.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		editButton: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(56), n = e.EndIcon, a = e.editable, i = e.error, l = e.errorText, d = e.fieldName, m = e.icon, p = e.label, _ = e.locked, f = e.onBlur, g = e.onChange, h = e.onClick, y = e.onEditClick, C = e.onEndIconClick, b = e.onLockedClick, v = e.readOnly, S = e.ref, R = e.testid, L = e.trailing, E = e.value, k = e.xstyle, I = a === void 0 ? !0 : a, T;
		t[0] !== d || t[1] !== g ? (T = function(t) {
			g != null && d != null && g(d, t);
		}, t[0] = d, t[1] = g, t[2] = T) : T = t[2];
		var D = T, x;
		t[3] !== d || t[4] !== f || t[5] !== E ? (x = function() {
			f != null && d != null && f(d, E);
		}, t[3] = d, t[4] = f, t[5] = E, t[6] = x) : x = t[6];
		var $ = x, P;
		t[7] !== _ || t[8] !== h || t[9] !== b ? (P = function() {
			if (_ === !0) {
				b != null && b();
				return;
			}
			h != null && h();
		}, t[7] = _, t[8] = h, t[9] = b, t[10] = P) : P = t[10];
		var N = P;
		if (I) {
			var M;
			t[11] !== k ? (M = [c.fieldContainer, k], t[11] = k, t[12] = M) : M = t[12];
			var w;
			t[13] !== m ? (w = u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: c.iconContainer,
				children: m
			}), t[13] = m, t[14] = w) : w = t[14];
			var A;
			t[15] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x98rzlu" }, t[15] = A) : A = t[15];
			var F = f != null ? $ : void 0, O = _ === !0 ? !0 : v, B;
			t[16] !== n || t[17] !== i || t[18] !== l || t[19] !== D || t[20] !== N || t[21] !== p || t[22] !== C || t[23] !== F || t[24] !== O || t[25] !== R || t[26] !== E ? (B = u.jsx("div", babelHelpers.extends({}, A, { children: u.jsx(r("WDSTextField.react"), {
				EndIcon: n,
				label: p,
				value: E,
				onValueChange: D,
				onFocus: N,
				onBlur: F,
				onEndIconClick: C,
				error: i,
				errorText: l,
				readOnly: O,
				testid: R
			}) })), t[16] = n, t[17] = i, t[18] = l, t[19] = D, t[20] = N, t[21] = p, t[22] = C, t[23] = F, t[24] = O, t[25] = R, t[26] = E, t[27] = B) : B = t[27];
			var W;
			return t[28] !== p || t[29] !== S || t[30] !== B || t[31] !== M || t[32] !== w ? (W = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				ref: S,
				role: "group",
				"aria-label": p,
				xstyle: M,
				children: [w, B]
			}), t[28] = p, t[29] = S, t[30] = B, t[31] = M, t[32] = w, t[33] = W) : W = t[33], W;
		}
		var q = p !== "", U = q ? p : E, V;
		t[34] !== k ? (V = [c.fieldContainer, k], t[34] = k, t[35] = V) : V = t[35];
		var H;
		t[36] !== m ? (H = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: c.iconContainer,
			children: m
		}), t[36] = m, t[37] = H) : H = t[37];
		var G;
		t[38] !== q || t[39] !== p ? (G = q && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: p
		}), t[38] = q, t[39] = p, t[40] = G) : G = t[40];
		var z;
		t[41] !== L || t[42] !== E ? (z = L != null ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: E
			}), L]
		}) : u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: E
		}), t[41] = L, t[42] = E, t[43] = z) : z = t[43];
		var j;
		t[44] !== G || t[45] !== z ? (j = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			grow: 1,
			children: [G, z]
		}), t[44] = G, t[45] = z, t[46] = j) : j = t[46];
		var K;
		t[47] !== y ? (K = y != null && u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			label: s._(
				/*BTDS*/
				""
			),
			xstyle: c.editButton,
			onPress: y
		}), t[47] = y, t[48] = K) : K = t[48];
		var Q;
		return t[49] !== S || t[50] !== j || t[51] !== K || t[52] !== U || t[53] !== V || t[54] !== H ? (Q = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			ref: S,
			role: "group",
			"aria-label": U,
			xstyle: V,
			children: [
				H,
				j,
				K
			]
		}), t[49] = S, t[50] = j, t[51] = K, t[52] = U, t[53] = V, t[54] = H, t[55] = Q) : Q = t[55], Q;
	}
	l.default = d;
}), 226);
