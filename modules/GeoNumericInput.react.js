__d("GeoNumericInput.react", [
	"GeoBaseFormInputLayout.react",
	"GeoPrivateBaseNumericInput.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"inputRef",
		"isValid",
		"linkAddon",
		"describedBy",
		"description",
		"disabledMessage",
		"errorMessage",
		"hasError",
		"hasInfoMessage",
		"hasWarning",
		"isDisabled",
		"isLabelHidden",
		"isOptional",
		"isReadOnly",
		"label",
		"message",
		"tooltip",
		"warningMessage",
		"xstyle"
	], s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef;
	function p(t) {
		var n = o("react-compiler-runtime").c(49), a, i, l, s, c, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
		n[0] !== t ? (f = t.inputRef, b = t.isValid, h = t.linkAddon, a = t.describedBy, i = t.description, l = t.disabledMessage, s = t.errorMessage, c = t.hasError, p = t.hasInfoMessage, _ = t.hasWarning, v = t.isDisabled, S = t.isLabelHidden, R = t.isOptional, L = t.isReadOnly, g = t.label, y = t.message, E = t.tooltip, k = t.warningMessage, I = t.xstyle, C = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = p, n[7] = _, n[8] = f, n[9] = g, n[10] = h, n[11] = y, n[12] = C, n[13] = b, n[14] = v, n[15] = S, n[16] = R, n[17] = L, n[18] = E, n[19] = k, n[20] = I) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], p = n[6], _ = n[7], f = n[8], g = n[9], h = n[10], y = n[11], C = n[12], b = n[13], v = n[14], S = n[15], R = n[16], L = n[17], E = n[18], k = n[19], I = n[20]);
		var T = b === void 0 ? !1 : b, D = v === void 0 ? !1 : v, x = S === void 0 ? !1 : S, $ = R === void 0 ? !1 : R, P = L === void 0 ? !1 : L, N = m(null), M, w;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			return { focus: function() {
				var e;
				(e = N.current) == null || e.focus();
			} };
		}, w = [], n[21] = M, n[22] = w) : (M = n[21], w = n[22]), d(f, M, w);
		var A = D || P, F;
		n[23] !== s || n[24] !== c || n[25] !== p || n[26] !== _ || n[27] !== D || n[28] !== P || n[29] !== T || n[30] !== y || n[31] !== C || n[32] !== k ? (F = function(t) {
			var e = t.describedBy, n = t.errorMessageID, o = t.inputID, a = t.labelledBy;
			return u.jsx(r("GeoPrivateBaseNumericInput.react"), babelHelpers.extends({}, C, {
				describedBy: e,
				errorMessageId: n,
				hasError: c === !0 || !!s,
				hasInfoMessage: p === !0 || !!y,
				hasWarning: _ === !0 || !!k,
				htmlForTargetId: o,
				inputRef: N,
				isDisabled: D,
				isReadOnly: P,
				isValid: T,
				labelledBy: a
			}));
		}, n[23] = s, n[24] = c, n[25] = p, n[26] = _, n[27] = D, n[28] = P, n[29] = T, n[30] = y, n[31] = C, n[32] = k, n[33] = F) : F = n[33];
		var O;
		return n[34] !== a || n[35] !== i || n[36] !== l || n[37] !== s || n[38] !== x || n[39] !== $ || n[40] !== g || n[41] !== h || n[42] !== y || n[43] !== A || n[44] !== F || n[45] !== E || n[46] !== k || n[47] !== I ? (O = u.jsx(r("GeoBaseFormInputLayout.react"), {
			addon: h,
			describedBy: a,
			description: i,
			disabledMessage: l,
			errorMessage: s,
			isDisabled: A,
			isLabelHidden: x,
			isOptional: $,
			label: g,
			message: y,
			tooltip: E,
			warningMessage: k,
			xstyle: I,
			children: F
		}), n[34] = a, n[35] = i, n[36] = l, n[37] = s, n[38] = x, n[39] = $, n[40] = g, n[41] = h, n[42] = y, n[43] = A, n[44] = F, n[45] = E, n[46] = k, n[47] = I, n[48] = O) : O = n[48], O;
	}
	var _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoNumericInput", p);
	l.default = _;
}), 98);
