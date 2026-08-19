__d("GeoSelector.react", [
	"GeoBaseFormInputLayout.react",
	"GeoPrivateBaseSelectorLayout.react",
	"GeoPrivateBaseSelectorListbox.react",
	"GeoPrivateMakeComponent",
	"GeoPrivateSelectorFocusManager",
	"GeoPrivateSelectorItemUtils",
	"GeoPrivateSelectorMediaUtils",
	"GeoPrivateTruncationContext",
	"GeoSelectionContext",
	"mapMap",
	"react",
	"react-compiler-runtime",
	"useGeoEmptyStringViolation",
	"useUniqueID"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"containerRef",
		"data-button-testid",
		"data-menu-testid",
		"data-testid",
		"defaultOpen",
		"describedBy",
		"description",
		"disabledMessage",
		"displayValue",
		"errorMessage",
		"isDisabled",
		"isEdited",
		"isLabelHidden",
		"isOptional",
		"isReadOnly",
		"isValid",
		"label",
		"labelID",
		"layerAlign",
		"layerXStyle",
		"media",
		"message",
		"onChange",
		"onClose",
		"onOpen",
		"status",
		"tooltip",
		"tooltipText",
		"value",
		"variant",
		"warningMessage",
		"xstyle"
	], s, u = s || (s = o("react")), c = s.useMemo;
	function d(t) {
		var n = o("react-compiler-runtime").c(96), a, i, l, s, c, d, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B;
		if (n[0] !== t) {
			var W = t.children, q = t.containerRef, U = t["data-button-testid"], V = t["data-menu-testid"], H = t["data-testid"], G = t.defaultOpen, z = t.describedBy, j = t.description, K = t.disabledMessage, Q = t.displayValue, X = t.errorMessage, Y = t.isDisabled, J = t.isEdited, Z = t.isLabelHidden, ee = t.isOptional, te = t.isReadOnly, ne = t.isValid, re = t.label, oe = t.labelID, ae = t.layerAlign, ie = t.layerXStyle, le = t.media, se = t.message, ue = t.onChange, ce = t.onClose, de = t.onOpen, me = t.status, pe = t.tooltip, _e = t.tooltipText, fe = t.value, ge = t.variant, he = t.warningMessage, ye = t.xstyle, Ce = babelHelpers.objectWithoutPropertiesLoose(t, e);
			i = W, l = q, a = U, L = V, N = H, s = z, c = j, d = K, p = Q, _ = X, $ = Y, f = J, g = Z, h = ee, P = te, y = ne, C = re, b = oe, v = ae, S = ie, R = le, E = se, k = ue, I = ce, T = de, x = me, M = pe, w = _e, A = fe, F = ge, O = he, B = ye, D = Ce, n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = p, n[8] = _, n[9] = f, n[10] = g, n[11] = h, n[12] = y, n[13] = C, n[14] = b, n[15] = v, n[16] = S, n[17] = R, n[18] = L, n[19] = E, n[20] = k, n[21] = I, n[22] = T, n[23] = D, n[24] = x, n[25] = $, n[26] = P, n[27] = N, n[28] = M, n[29] = w, n[30] = A, n[31] = F, n[32] = O, n[33] = B;
		} else a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], p = n[7], _ = n[8], f = n[9], g = n[10], h = n[11], y = n[12], C = n[13], b = n[14], v = n[15], S = n[16], R = n[17], L = n[18], E = n[19], k = n[20], I = n[21], T = n[22], D = n[23], x = n[24], $ = n[25], P = n[26], N = n[27], M = n[28], w = n[29], A = n[30], F = n[31], O = n[32], B = n[33];
		var be = $ === void 0 ? !1 : $, ve = P === void 0 ? !1 : P;
		r("useGeoEmptyStringViolation")(C, "GeoSelector");
		var Se = r("useUniqueID")(), Re;
		n[34] !== i ? (Re = u.Children.toArray(i), n[34] = i, n[35] = Re) : Re = n[35];
		var Le = Re, Ee = o("GeoPrivateSelectorItemUtils").useItems(Le), ke = Le.length, Ie;
		n[36] !== Le ? (Ie = o("GeoPrivateSelectorItemUtils").getShouldVirtualize(Le), n[36] = Le, n[37] = Ie) : Ie = n[37];
		var Te = Ie, De;
		n[38] !== Ee || n[39] !== A ? (De = Ee.get(A), n[38] = Ee, n[39] = A, n[40] = De) : De = n[40];
		var xe = De, $e = m(Ee, xe, p), Pe;
		n[41] !== R || n[42] !== xe || n[43] !== D.ratio ? (Pe = o("GeoPrivateSelectorMediaUtils").getSelectorItemMedia(xe, D.ratio, R), n[41] = R, n[42] = xe, n[43] = D.ratio, n[44] = Pe) : Pe = n[44];
		var Ne = Pe, Me = o("GeoPrivateSelectorFocusManager").useGeoPrivateVirtualListFocusManager(Ee, o("GeoPrivateSelectorItemUtils").useSelectedItems(Ee, A), Le, o("GeoPrivateSelectorItemUtils").getIsItemDisabled), we = Me[0], Ae = Me[1], Fe;
		n[45] !== k ? (Fe = function(t) {
			return void k(t);
		}, n[45] = k, n[46] = Fe) : Fe = n[46];
		var Oe;
		n[47] !== Fe || n[48] !== A ? (Oe = {
			onSelect: Fe,
			value: A
		}, n[47] = Fe, n[48] = A, n[49] = Oe) : Oe = n[49];
		var Be = Oe, We = be || ve, qe = d != null && We ? !1 : void 0, Ue = M != null ? M : w, Ve;
		n[50] !== $e || n[51] !== Ne || n[52] !== a || n[53] !== Le || n[54] !== be || n[55] !== f || n[56] !== ve || n[57] !== Te || n[58] !== ke || n[59] !== v || n[60] !== S || n[61] !== we || n[62] !== Se || n[63] !== L || n[64] !== I || n[65] !== T || n[66] !== D || n[67] !== F || n[68] !== Ae ? (Ve = function(t) {
			var e = t.describedBy, n = t.errorMessageID, o = t.inputID, a = t.labelledBy;
			return u.jsx(r("GeoPrivateBaseSelectorLayout.react"), babelHelpers.extends({}, D, {
				"data-layer-testid": L,
				"data-testid": void 0,
				describedBy: e,
				errorMessageID: n,
				inputID: o,
				isDisabled: be,
				isEdited: f,
				isReadOnly: ve,
				label: $e,
				labelledBy: a,
				layerAlign: v,
				listboxID: Se,
				loggingName: "GeoSelector",
				media: Ne,
				onClose: I,
				onOpen: T,
				variant: F,
				xstyle: S,
				children: function(t) {
					var e = t.labelID;
					return u.jsx(r("GeoPrivateBaseSelectorListbox.react"), {
						focusManager: Te ? Ae : void 0,
						id: Se,
						isVirtualized: Te,
						itemCount: ke,
						labelledBy: e,
						virtualListRef: we,
						children: function(t) {
							var e = t.index;
							return Le[e];
						}
					});
				}
			}));
		}, n[50] = $e, n[51] = Ne, n[52] = a, n[53] = Le, n[54] = be, n[55] = f, n[56] = ve, n[57] = Te, n[58] = ke, n[59] = v, n[60] = S, n[61] = we, n[62] = Se, n[63] = L, n[64] = I, n[65] = T, n[66] = D, n[67] = F, n[68] = Ae, n[69] = Ve) : Ve = n[69];
		var He;
		n[70] !== l || n[71] !== s || n[72] !== c || n[73] !== d || n[74] !== _ || n[75] !== f || n[76] !== We || n[77] !== g || n[78] !== h || n[79] !== y || n[80] !== C || n[81] !== b || n[82] !== E || n[83] !== x || n[84] !== Ue || n[85] !== Ve || n[86] !== N || n[87] !== O || n[88] !== B ? (He = u.jsx(r("GeoBaseFormInputLayout.react"), {
			containerRef: l,
			"data-testid": void 0,
			describedBy: s,
			description: c,
			disabledMessage: d,
			errorMessage: _,
			isDisabled: We,
			isEdited: f,
			isLabelHidden: g,
			isOptional: h,
			isValid: y,
			label: C,
			labelID: b,
			message: E,
			status: x,
			tooltip: Ue,
			warningMessage: O,
			xstyle: B,
			children: Ve
		}), n[70] = l, n[71] = s, n[72] = c, n[73] = d, n[74] = _, n[75] = f, n[76] = We, n[77] = g, n[78] = h, n[79] = y, n[80] = C, n[81] = b, n[82] = E, n[83] = x, n[84] = Ue, n[85] = Ve, n[86] = N, n[87] = O, n[88] = B, n[89] = He) : He = n[89];
		var Ge;
		n[90] !== Be || n[91] !== He ? (Ge = u.jsx(r("GeoSelectionContext").Provider, {
			value: Be,
			children: He
		}), n[90] = Be, n[91] = He, n[92] = Ge) : Ge = n[92];
		var ze;
		return n[93] !== Ge || n[94] !== qe ? (ze = u.jsx(r("GeoPrivateTruncationContext").Provider, {
			value: qe,
			children: Ge
		}), n[93] = Ge, n[94] = qe, n[95] = ze) : ze = n[95], ze;
	}
	function m(e, t, n) {
		var a = o("react-compiler-runtime").c(5), i;
		a[0] !== n || a[1] !== e || a[2] !== (t == null ? void 0 : t.label) || a[3] !== (t == null ? void 0 : t.value) ? (i = n == null ? void 0 : n([t == null ? void 0 : t.value, t == null ? void 0 : t.label], r("mapMap")(e, p)), a[0] = n, a[1] = e, a[2] = t == null ? void 0 : t.label, a[3] = t == null ? void 0 : t.value, a[4] = i) : i = a[4];
		var l = i;
		return l != null ? l : t == null ? void 0 : t.label;
	}
	function p(e) {
		return e.label;
	}
	var _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoSelector", d);
	l.default = _;
}), 98);
