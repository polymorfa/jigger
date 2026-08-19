__d("WAWebBizAdCreationBudgetInput.react", [
	"fbt",
	"WAWebBizAdCreationBudgetReducer",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationEditableInput",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useRef, _ = {
		editModeContainer: {
			backgroundColor: "x1280gxy",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		viewModeContainer: {
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			cursor: "x1ed109x",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			transition: "x9v64kc",
			":hover_backgroundColor": "x1ubxc9n",
			":hover_borderTopColor": "x1j88qlk",
			":hover_borderInlineEndColor": "xmly02p",
			":hover_borderBottomColor": "x36lclb",
			":hover_borderInlineStartColor": "xzyl2ln",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(50), n = e.displayBudget, a = e.hasError, i = e.setLocalBudget, l = e.adAccountID, c = e.currency, d = e.defaultBudget, f = e.maxBudget, g = e.minBudget, h = e.selectedBudget, y = a === void 0 ? !1 : a, C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [r("WAWebBizAdCreationBudgetReducer")], t[0] = C) : C = t[0];
		var b = r("useWAWebBizAdCreationSpecDispatcherContext")(C), v = m(r("WAWebBizAdCreationLoggerContext")), S = p(null), R;
		t[1] !== c ? (R = r("WAWebBizAdCreationCurrencyUtils").getCurrencySymbol(c), t[1] = c, t[2] = R) : R = t[2];
		var L = R, E;
		t[3] !== c || t[4] !== n ? (E = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(n, c, {
			withDecimals: !1,
			withNumberDelimiters: !0,
			withSymbol: !0
		}), t[3] = c, t[4] = n, t[5] = E) : E = t[5];
		var k = E, I;
		t[6] !== b ? (I = function(t) {
			b({
				budgetData: { budget: t },
				type: "budget_reducer.update_budget"
			});
		}, t[6] = b, t[7] = I) : I = t[7];
		var T = I, D;
		t[8] !== l || t[9] !== c || t[10] !== d || t[11] !== v || t[12] !== f || t[13] !== g || t[14] !== T || t[15] !== h || t[16] !== i ? (D = function(t) {
			var e, n = r("WAWebBizAdCreationCurrencyUtils").parseCurrencyInput(t, c);
			if (n != null) {
				var a = o("WAWebBizNativeAdsGatingUtils").minMaxBudgetFixesEnabled() ? o("WAWebBizAdCreationBudgetUtils").clampBudget(n, g, f) : n, s = (e = S.current) != null ? e : h;
				a !== s && v != null && r("WAWebBizAdLogger").log({
					adAccountID: l,
					budget: a,
					budgetType: "DAILY_BUDGET",
					currency: c,
					defaultBudget: d,
					event: "change_budget",
					extra: {
						input_type: "manual_input",
						old_budget: s
					},
					loggerContext: v
				}), S.current = a, i(a), T(a);
			}
		}, t[8] = l, t[9] = c, t[10] = d, t[11] = v, t[12] = f, t[13] = g, t[14] = T, t[15] = h, t[16] = i, t[17] = D) : D = t[17];
		var x = D, $;
		t[18] !== x ? ($ = { onSave: x }, t[18] = x, t[19] = $) : $ = t[19];
		var P = r("useWAWebBizAdCreationEditableInput")($), N = P.handleBlur, M = P.handleInputChange, w = P.handleKeyDown, A = P.inputRef, F = P.inputValue, O = P.inputWidth, B = P.isEditing, W = P.startEditing, q;
		t[20] !== c || t[21] !== h || t[22] !== W ? (q = function() {
			W(r("WAWebBizAdCreationCurrencyUtils").formatCurrencyForInput(h, c));
		}, t[20] = c, t[21] = h, t[22] = W, t[23] = q) : q = t[23];
		var U = q;
		if (B) {
			var V = y ? "secondaryNegative" : "contentDefault", H;
			t[24] !== L || t[25] !== V ? (H = u.jsx(r("WDSText.react"), {
				colorName: V,
				type: "LargeTitle1",
				children: L
			}), t[24] = L, t[25] = V, t[26] = H) : H = t[26];
			var G;
			t[27] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), t[27] = G) : G = t[27];
			var z;
			t[28] !== O ? (z = { width: O }, t[28] = O, t[29] = z) : z = t[29];
			var j;
			t[30] !== y ? (j = {
				0: { className: "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x14ug900 x579bpy x1fcty0u xnei2rj x1a2a7pz xexx8yu xyri2b x18d9i69 x1c1uobl x2b8uid" },
				1: { className: "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x579bpy x1fcty0u xnei2rj x1a2a7pz xexx8yu xyri2b x18d9i69 x1c1uobl x2b8uid x30a034" }
			}[!!y << 0], t[30] = y, t[31] = j) : j = t[31];
			var K;
			t[32] !== N || t[33] !== M || t[34] !== w || t[35] !== A || t[36] !== F || t[37] !== z || t[38] !== j ? (K = u.jsx("input", babelHelpers.extends({
				ref: A,
				"aria-label": G,
				inputMode: "numeric",
				onBlur: N,
				onChange: M,
				onKeyDown: w,
				style: z,
				type: "text",
				value: F
			}, j)), t[32] = N, t[33] = M, t[34] = w, t[35] = A, t[36] = F, t[37] = z, t[38] = j, t[39] = K) : K = t[39];
			var Q;
			return t[40] !== H || t[41] !== K ? (Q = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 0,
				xstyle: _.editModeContainer,
				children: [H, K]
			}), t[40] = H, t[41] = K, t[42] = Q) : Q = t[42], Q;
		}
		var X;
		t[43] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), t[43] = X) : X = t[43];
		var Y = y ? "secondaryNegative" : "contentDefault", J;
		t[44] !== k || t[45] !== Y ? (J = u.jsx(r("WDSText.react"), {
			colorName: Y,
			type: "LargeTitle1",
			children: k
		}), t[44] = k, t[45] = Y, t[46] = J) : J = t[46];
		var Z;
		return t[47] !== U || t[48] !== J ? (Z = u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": X,
			onClick: U,
			xstyle: _.viewModeContainer,
			children: J
		}), t[47] = U, t[48] = J, t[49] = Z) : Z = t[49], Z;
	}
	var g = r("withWAWebBizAdCreationSpecContext")(f, function(e) {
		var t;
		return {
			adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID,
			currency: e.adAccountData.currency,
			defaultBudget: e.budgetData.defaultBudget,
			maxBudget: e.budgetData.maxBudget,
			minBudget: e.budgetData.minBudget,
			selectedBudget: e.budgetData.budget
		};
	});
	l.default = g;
}), 226);
