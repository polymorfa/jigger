__d("GeoSwitch.react", [
	"GeoALSurface",
	"GeoBaseSpacingLayout.react",
	"GeoBaseText.react",
	"GeoFlexbox.react",
	"GeoPrivateBaseFormInputTooltip.react",
	"GeoPrivateBaseSwitch.react",
	"GeoPrivateDisabledMessageWrapper.react",
	"GeoPrivateMakeComponent",
	"GeoTextUtils",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useUniqueID"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"changeAction",
		"description",
		"disabledMessage",
		"isDisabled",
		"isLabelHidden",
		"label",
		"labelledBy",
		"labelPosition",
		"logging",
		"switchRef",
		"tooltip",
		"value",
		"xstyle"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useOptimistic;
	function p(t) {
		var a = o("react-compiler-runtime").c(49), i, l, s, c, d, p, g, h, y, C, b, v, S, R;
		a[0] !== t ? (i = t.changeAction, l = t.description, s = t.disabledMessage, y = t.isDisabled, C = t.isLabelHidden, c = t.label, d = t.labelledBy, b = t.labelPosition, p = t.logging, h = t.switchRef, v = t.tooltip, S = t.value, R = t.xstyle, g = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = s, a[4] = c, a[5] = d, a[6] = p, a[7] = g, a[8] = h, a[9] = y, a[10] = C, a[11] = b, a[12] = v, a[13] = S, a[14] = R) : (i = a[1], l = a[2], s = a[3], c = a[4], d = a[5], p = a[6], g = a[7], h = a[8], y = a[9], C = a[10], b = a[11], v = a[12], S = a[13], R = a[14]);
		var L = y === void 0 ? !1 : y, E = C === void 0 ? !1 : C, k = b === void 0 ? "prefix" : b, I = r("useUniqueID")(), T = r("useUniqueID")(), D = m(S), x = D[0], $ = D[1], P;
		a[15] !== i ? (P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				i != null && ($(e), yield i(e, t));
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), a[15] = i, a[16] = P) : P = a[16];
		var N = P, M;
		a[17] !== l || a[18] !== T || a[19] !== I || a[20] !== L || a[21] !== E || a[22] !== c || a[23] !== v ? (M = E ? null : u.jsx(_, {
			description: l,
			descriptionID: T,
			htmlFor: I,
			isDisabled: L,
			label: c,
			tooltip: v
		}), a[17] = l, a[18] = T, a[19] = I, a[20] = L, a[21] = E, a[22] = c, a[23] = v, a[24] = M) : M = a[24];
		var w = M, A;
		a[25] !== R ? (A = [f.root, R], a[25] = R, a[26] = A) : A = a[26];
		var F = k === "prefix" ? w : null, O;
		a[27] !== N || a[28] !== T || a[29] !== I || a[30] !== L || a[31] !== c || a[32] !== d || a[33] !== x || a[34] !== g || a[35] !== h ? (O = u.jsx(r("GeoPrivateBaseSwitch.react"), babelHelpers.extends({}, g, {
			"aria-label": c,
			changeAction: N,
			describedBy: T,
			htmlForTargetId: I,
			isDisabled: L,
			labelledBy: d,
			loggingName: "GeoSwitch",
			switchRef: h,
			value: x
		})), a[27] = N, a[28] = T, a[29] = I, a[30] = L, a[31] = c, a[32] = d, a[33] = x, a[34] = g, a[35] = h, a[36] = O) : O = a[36];
		var B = k === "suffix" ? w : null, W;
		a[37] !== A || a[38] !== F || a[39] !== O || a[40] !== B ? (W = u.jsxs(r("GeoBaseSpacingLayout.react"), {
			xstyle: A,
			children: [
				F,
				O,
				B
			]
		}), a[37] = A, a[38] = F, a[39] = O, a[40] = B, a[41] = W) : W = a[41];
		var q;
		a[42] !== s || a[43] !== L || a[44] !== W ? (q = u.jsx(r("GeoPrivateDisabledMessageWrapper.react"), {
			disabledMessage: s,
			isDisabled: L,
			children: W
		}), a[42] = s, a[43] = L, a[44] = W, a[45] = q) : q = a[45];
		var U;
		return a[46] !== p || a[47] !== q ? (U = u.jsx(r("GeoALSurface"), {
			logging: p,
			name: "GeoSwitch",
			children: q
		}), a[46] = p, a[47] = q, a[48] = U) : U = a[48], U;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(21), n = e.description, a = e.descriptionID, i = e.htmlFor, l = e.isDisabled, s = e.label, c = e.tooltip, d;
		t[0] !== l ? (d = {
			0: {},
			1: { className: "x1ypdohk" }
		}[!l << 0], t[0] = l, t[1] = d) : d = t[1];
		var m;
		t[2] !== l || t[3] !== s ? (m = u.jsx(r("GeoBaseText.react"), {
			color: "value",
			isDisabled: l,
			size: "value",
			children: s
		}), t[2] = l, t[3] = s, t[4] = m) : m = t[4];
		var p;
		t[5] !== i || t[6] !== d || t[7] !== m ? (p = u.jsx("label", babelHelpers.extends({}, d, {
			htmlFor: i,
			children: m
		})), t[5] = i, t[6] = d, t[7] = m, t[8] = p) : p = t[8];
		var _;
		t[9] !== c ? (_ = u.jsx(r("GeoPrivateBaseFormInputTooltip.react"), { tooltip: c }), t[9] = c, t[10] = _) : _ = t[10];
		var f;
		t[11] !== p || t[12] !== _ ? (f = u.jsxs(r("GeoFlexbox.react"), { children: [p, _] }), t[11] = p, t[12] = _, t[13] = f) : f = t[13];
		var g;
		t[14] !== n || t[15] !== a || t[16] !== l ? (g = n != null && u.jsx(r("GeoBaseText.react"), babelHelpers.extends({}, o("GeoTextUtils").getPairingTextProps({ size: "value" }), {
			id: a,
			isDisabled: l,
			children: n
		})), t[14] = n, t[15] = a, t[16] = l, t[17] = g) : g = t[17];
		var h;
		return t[18] !== f || t[19] !== g ? (h = u.jsxs("div", { children: [f, g] }), t[18] = f, t[19] = g, t[20] = h) : h = t[20], h;
	}
	var f = { root: {
		flexGrow: "x1c4vz4f",
		$$css: !0
	} }, g = o("GeoPrivateMakeComponent").makeGeoComponent("GeoSwitch", p);
	l.default = g;
}), 98);
