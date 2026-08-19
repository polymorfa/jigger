__d("WAWebBizBroadcastProDefaultCostModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizBroadcastProBudgetStrings",
	"WAWebBizBroadcastProCurrencyUtils",
	"WAWebBizBroadcastProDefaultCostQuery",
	"WAWebBizBroadcastProValidationUtils",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSSpinner.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useCallback, p = c.useMemo, _ = c.useState, f = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			justifyContent: "x13a6bvl",
			marginTop: "x98l61r",
			$$css: !0
		},
		spinnerContainer: {
			minHeight: "xseoqlg",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onClose, a = e.onSetMaxBid, i = e.queryRef, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebBizBroadcastProBudgetStrings").getDefaultCostModalTitle(), t[0] = l) : l = t[0];
		var s;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: f.spinnerContainer,
			children: u.jsx(r("WDSSpinner.react"), { size: 24 })
		}), t[1] = s) : s = t[1];
		var c;
		t[2] !== n || t[3] !== a || t[4] !== i ? (c = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "bb-pro-default-cost-modal",
			fallback: h,
			children: u.jsx(d, {
				fallback: s,
				children: u.jsx(C, {
					onClose: n,
					onSetMaxBid: a,
					queryRef: i
				})
			})
		}), t[2] = n, t[3] = a, t[4] = i, t[5] = c) : c = t[5];
		var m;
		return t[6] !== n || t[7] !== c ? (m = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			title: l,
			onOverlayClick: n,
			testid: "bb_pro_default_cost_modal",
			children: c
		}), t[6] = n, t[7] = c, t[8] = m) : m = t[8], m;
	}
	function h() {
		return u.jsx(y, {});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.body,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[0] = t) : t = e[0], t;
	}
	function C(e) {
		var t, n, a = e.onClose, i = e.onSetMaxBid, l = e.queryRef, s = o("CometRelay").usePreloadedQuery(r("WAWebBizBroadcastProDefaultCostQuery"), l), c = s == null ? void 0 : s.xwa_mm_api_estimated_costs, d = p(function() {
			var e, t, n, r;
			return (e = (t = c == null || (n = c.find(function(e) {
				return e.is_default;
			})) == null ? void 0 : n.country_code) != null ? t : c == null || (r = c[0]) == null ? void 0 : r.country_code) != null ? e : "";
		}, [c]), g = _(d), h = g[0], C = g[1], b = p(function() {
			return (c == null ? void 0 : c.some(function(e) {
				return e.country_code === h;
			})) === !0 ? h : d;
		}, [
			c,
			h,
			d
		]), v = p(function() {
			return c == null ? void 0 : c.find(function(e) {
				return e.country_code === b;
			});
		}, [c, b]), S = (t = v == null ? void 0 : v.currency_code) != null ? t : "USD", R = p(function() {
			return o("WAWebBizBroadcastProCurrencyUtils").getCurrencySymbol(S);
		}, [S]), L = (n = v == null ? void 0 : v.estimated_cost) != null ? n : 0, E = p(function() {
			var e = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale().valueOf().replace(/_/g, "-");
			return new Intl.NumberFormat(e, {
				style: "currency",
				currency: S,
				minimumFractionDigits: 4,
				maximumFractionDigits: 4
			}).format(L);
		}, [L, S]), k = _(L > 0 ? L.toFixed(4) : ""), I = k[0], T = k[1], D = _(null), x = D[0], $ = D[1], P = m(function(e) {
			var t;
			C(e);
			var n = c == null ? void 0 : c.find(function(t) {
				return t.country_code === e;
			}), r = (t = n == null ? void 0 : n.estimated_cost) != null ? t : 0;
			T(r > 0 ? r.toFixed(4) : ""), $(null);
		}, [c]), N = m(function(e) {
			var t = o("WAWebBizBroadcastProValidationUtils").validateNumericInput(e);
			t.status === o("WAWebBizBroadcastProValidationUtils").ValidationStatus.VALID ? (T(e), $(null)) : $(t.errorMessage);
		}, []), M = m(function() {
			var e = parseFloat(I);
			Number.isFinite(e) && (T(e.toFixed(4)), $(null));
		}, [I]), w = m(function() {
			var e = parseFloat(I), t = Number.isFinite(e) ? e.toFixed(4) : I;
			i(t), a();
		}, [
			I,
			i,
			a
		]);
		return c == null || c.length === 0 ? u.jsx(y, {}) : u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.body,
			children: [
				u.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentDefault",
					children: o("WAWebBizBroadcastProBudgetStrings").getDefaultCostRegionLabel()
				}),
				u.jsx(o("WAWebSelect.react").Select, {
					testid: "bb_pro_default_cost_region_select",
					width: "100%",
					menuMaxHeight: 270,
					initialSelection: b,
					onChange: P,
					children: c.map(function(e) {
						return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
							optionId: e.country_code,
							primary: e.display_name
						}, e.country_code);
					})
				}, b),
				u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: o("WAWebBizBroadcastProBudgetStrings").getDefaultCostHelperText(E)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentDefault",
					children: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidInputLabel()
				}),
				u.jsx(r("WDSTextField.react"), {
					testid: "bb_pro_default_cost_modal_max_bid",
					label: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidInputLabel(),
					floatingLabel: !1,
					prefix: R,
					value: I,
					onValueChange: N,
					onBlur: M,
					error: x != null,
					errorText: x
				})
			]
		}), u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: f.footer,
			children: u.jsx(r("WDSButton.react"), {
				label: o("WAWebBizBroadcastProBudgetStrings").getSetMaximumBidLabel(),
				onPress: w,
				testid: "bb_pro_default_cost_modal_set_bid",
				variant: "filled",
				disabled: I === "" || Number(I) === 0
			})
		})] });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = g;
}), 226);
