__d("GeoTextArea.react", [
	"GeoBaseFormInputLayout.react",
	"GeoPrivateBaseTextArea.react",
	"GeoPrivateMakeComponent",
	"TintableIconSource",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"iconSrc",
		"isFullHeight",
		"isReadOnly",
		"linkAddon",
		"textareaRef",
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
		"warningMessage"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(50), a, i, l, s, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
		n[0] !== t ? (s = t.iconSrc, g = t.isFullHeight, h = t.isReadOnly, m = t.linkAddon, v = t.textareaRef, S = t.tooltip, _ = t["data-message-testid"], a = t.description, i = t.disabledMessage, l = t.errorMessage, y = t.isDisabled, C = t.isLabelHidden, c = t.isOptional, d = t.label, p = t.message, f = t.status, R = t.warningMessage, b = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g, n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S, n[18] = R) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10], g = n[11], h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17], R = n[18]);
		var L = g === void 0 ? !1 : g, E = h === void 0 ? !1 : h, k = y === void 0 ? !1 : y, I = C === void 0 ? !1 : C, T;
		n[19] !== s ? (T = s != null ? new (r("TintableIconSource"))("FB", s, 16) : null, n[19] = s, n[20] = T) : T = n[20];
		var D = T, x;
		n[21] !== L ? (x = L ? {
			isResizable: !1,
			rows: void 0
		} : {}, n[21] = L, n[22] = x) : x = n[22];
		var $;
		n[23] !== L || n[24] !== x || n[25] !== b ? ($ = babelHelpers.extends({}, b, { isFullHeight: L }, x), n[23] = L, n[24] = x, n[25] = b, n[26] = $) : $ = n[26];
		var P = $, N = k || E, M;
		n[27] !== l || n[28] !== D || n[29] !== k || n[30] !== E || n[31] !== P || n[32] !== v || n[33] !== R ? (M = function(t) {
			var e = t.describedBy, n = t.errorMessageID, o = t.inputID, a = t.labelledBy;
			return u.jsx(r("GeoPrivateBaseTextArea.react"), babelHelpers.extends({}, P, {
				describedBy: e,
				errorMessageID: n,
				hasError: !!l,
				hasWarning: !!R,
				htmlForTargetID: o,
				icon: D,
				inputRef: v,
				isDisabled: k,
				isReadOnly: E,
				labelledBy: a
			}));
		}, n[27] = l, n[28] = D, n[29] = k, n[30] = E, n[31] = P, n[32] = v, n[33] = R, n[34] = M) : M = n[34];
		var w;
		return n[35] !== a || n[36] !== i || n[37] !== l || n[38] !== I || n[39] !== c || n[40] !== d || n[41] !== m || n[42] !== p || n[43] !== _ || n[44] !== f || n[45] !== N || n[46] !== M || n[47] !== S || n[48] !== R ? (w = u.jsx(r("GeoBaseFormInputLayout.react"), {
			addon: m,
			"data-message-testid": _,
			description: a,
			disabledMessage: i,
			errorMessage: l,
			isDisabled: N,
			isLabelHidden: I,
			isOptional: c,
			label: d,
			message: p,
			status: f,
			tooltip: S,
			warningMessage: R,
			children: M
		}), n[35] = a, n[36] = i, n[37] = l, n[38] = I, n[39] = c, n[40] = d, n[41] = m, n[42] = p, n[43] = _, n[44] = f, n[45] = N, n[46] = M, n[47] = S, n[48] = R, n[49] = w) : w = n[49], w;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTextArea", c);
	l.default = d;
}), 98);
