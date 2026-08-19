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
		var t = e.displayBudget, n = e.hasError, a = n === void 0 ? !1 : n, i = e.setLocalBudget, l = e.adAccountID, c = e.currency, f = e.defaultBudget, g = e.maxBudget, h = e.minBudget, y = e.selectedBudget, C = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationBudgetReducer")]), b = m(r("WAWebBizAdCreationLoggerContext")), v = p(null), S = r("WAWebBizAdCreationCurrencyUtils").getCurrencySymbol(c), R = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, c, {
			withDecimals: !1,
			withNumberDelimiters: !0,
			withSymbol: !0
		}), L = d(function(e) {
			C({
				budgetData: { budget: e },
				type: "budget_reducer.update_budget"
			});
		}, [C]), E = d(function(e) {
			var t, n = r("WAWebBizAdCreationCurrencyUtils").parseCurrencyInput(e, c);
			if (n != null) {
				var a = o("WAWebBizNativeAdsGatingUtils").minMaxBudgetFixesEnabled() ? o("WAWebBizAdCreationBudgetUtils").clampBudget(n, h, g) : n, s = (t = v.current) != null ? t : y;
				a !== s && b != null && r("WAWebBizAdLogger").log({
					adAccountID: l,
					budget: a,
					budgetType: "DAILY_BUDGET",
					currency: c,
					defaultBudget: f,
					event: "change_budget",
					extra: {
						input_type: "manual_input",
						old_budget: s
					},
					loggerContext: b
				}), v.current = a, i(a), L(a);
			}
		}, [
			c,
			g,
			h,
			y,
			b,
			i,
			L,
			l,
			f
		]), k = r("useWAWebBizAdCreationEditableInput")({ onSave: E }), I = k.handleBlur, T = k.handleInputChange, D = k.handleKeyDown, x = k.inputRef, $ = k.inputValue, P = k.inputWidth, N = k.isEditing, M = k.startEditing, w = d(function() {
			M(r("WAWebBizAdCreationCurrencyUtils").formatCurrencyForInput(y, c));
		}, [
			M,
			y,
			c
		]);
		return N ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 0,
			xstyle: _.editModeContainer,
			children: [u.jsx(r("WDSText.react"), {
				colorName: a ? "secondaryNegative" : "contentDefault",
				type: "LargeTitle1",
				children: S
			}), u.jsx("input", babelHelpers.extends({
				ref: x,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				inputMode: "numeric",
				onBlur: I,
				onChange: T,
				onKeyDown: D,
				style: { width: P },
				type: "text",
				value: $
			}, {
				0: { className: "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x14ug900 x579bpy x1fcty0u xnei2rj x1a2a7pz xexx8yu xyri2b x18d9i69 x1c1uobl x2b8uid" },
				1: { className: "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x579bpy x1fcty0u xnei2rj x1a2a7pz xexx8yu xyri2b x18d9i69 x1c1uobl x2b8uid x30a034" }
			}[!!a << 0]))]
		}) : u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: w,
			xstyle: _.viewModeContainer,
			children: u.jsx(r("WDSText.react"), {
				colorName: a ? "secondaryNegative" : "contentDefault",
				type: "LargeTitle1",
				children: R
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
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
