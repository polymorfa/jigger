__d("GeoTextInput.react", [
	"GeoALSurface",
	"GeoBaseFormInputLayout.react",
	"GeoPrivateBaseTextInput.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"containerRef",
		"inputRef",
		"isReadOnly",
		"linkAddon",
		"logging",
		"tooltip",
		"data-message-testid",
		"description",
		"disabledMessage",
		"errorMessage",
		"isDisabled",
		"isLabelHidden",
		"isOptional",
		"label",
		"message",
		"status",
		"warningMessage",
		"xstyle"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(46), a, i, l, s, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
		n[0] !== t ? (a = t.containerRef, c = t.inputRef, h = t.isReadOnly, m = t.linkAddon, p = t.logging, S = t.tooltip, f = t["data-message-testid"], i = t.description, l = t.disabledMessage, s = t.errorMessage, y = t.isDisabled, C = t.isLabelHidden, b = t.isOptional, d = t.label, _ = t.message, g = t.status, R = t.warningMessage, L = t.xstyle, v = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g, n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S, n[18] = R, n[19] = L) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10], g = n[11], h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17], R = n[18], L = n[19]);
		var E = h === void 0 ? !1 : h, k = y === void 0 ? !1 : y, I = C === void 0 ? !1 : C, T = b === void 0 ? !1 : b, D;
		n[20] !== a || n[21] !== c || n[22] !== k || n[23] !== E || n[24] !== g || n[25] !== v ? (D = function(t) {
			var e = t.describedBy, n = t.errorMessageID, o = t.inputID, i = t.labelledBy;
			return u.jsx(r("GeoPrivateBaseTextInput.react"), babelHelpers.extends({}, v, {
				containerRef: c,
				describedBy: e,
				errorMessageID: n,
				htmlForTargetID: o,
				inputContainerRef: a,
				isDisabled: k,
				isReadOnly: E,
				labelledBy: i,
				status: g
			}));
		}, n[20] = a, n[21] = c, n[22] = k, n[23] = E, n[24] = g, n[25] = v, n[26] = D) : D = n[26];
		var x;
		n[27] !== i || n[28] !== l || n[29] !== s || n[30] !== k || n[31] !== I || n[32] !== T || n[33] !== d || n[34] !== m || n[35] !== _ || n[36] !== f || n[37] !== g || n[38] !== D || n[39] !== S || n[40] !== R || n[41] !== L ? (x = u.jsx(r("GeoBaseFormInputLayout.react"), {
			addon: m,
			"data-message-testid": f,
			description: i,
			disabledMessage: l,
			errorMessage: s,
			isDisabled: k,
			isLabelHidden: I,
			isOptional: T,
			label: d,
			message: _,
			status: g,
			tooltip: S,
			warningMessage: R,
			xstyle: L,
			children: D
		}), n[27] = i, n[28] = l, n[29] = s, n[30] = k, n[31] = I, n[32] = T, n[33] = d, n[34] = m, n[35] = _, n[36] = f, n[37] = g, n[38] = D, n[39] = S, n[40] = R, n[41] = L, n[42] = x) : x = n[42];
		var $;
		return n[43] !== p || n[44] !== x ? ($ = u.jsx(r("GeoALSurface"), {
			logging: p,
			name: "GeoTextInput",
			children: x
		}), n[43] = p, n[44] = x, n[45] = $) : $ = n[45], $;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTextInput", c);
	l.default = d;
}), 98);
