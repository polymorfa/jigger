__d("WAFlowsCoupons.react", [
	"WAFlowsActionHandlerTypes",
	"WAFlowsCouponPicker.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFooter.react",
	"WAFlowsFormContext",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsOverlay.react",
	"WAFlowsRadioButtonsGroup.react",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsSnackbarUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsTextInput.react",
	"WAFlowsWELJActionCreators",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useMemo, _ = u.useRef, f = u.useState, g = { availableCouponsTitle: {
		marginTop: "xj1urod",
		marginBottom: "xhbfen4",
		$$css: !0
	} }, h = { availableCouponsTitle: {
		marginTop: "x1c4vshn",
		marginBottom: "xhbfen4",
		$$css: !0
	} }, y = !0, C = 300, b = "coupon_input", v = "waf_shopping_coupons", S = [], R = {
		id: "",
		title: ""
	};
	function L(e, t, n) {
		e === void 0 && (t == null || window.navigator.onLine ? window.setTimeout(function() {
			n(!1);
		}, C) : n(!1));
	}
	function E(e, t, n, r, o) {
		return {
			getValue: function(r) {
				return r === b ? e : t == null ? void 0 : t.id;
			},
			setValue: function(a, i) {
				if (i != null && typeof i == "string" && i !== e) if (a === b) r(i), o(R);
				else {
					var t, l = (t = n.find(function(e) {
						var t = e.id;
						return t === i;
					})) != null ? t : R;
					o({
						id: l.id,
						title: l.title
					}), r("");
				}
			},
			getError: function() {},
			setFocus: function() {},
			setBlur: function() {},
			isFocused: function() {
				return !1;
			},
			isFormValid: function() {
				return !0;
			},
			isLastChild: function() {
				return !0;
			},
			getNextInput: function() {}
		};
	}
	function k(e, t, n, r, o, a, i, l) {
		return function(s) {
			var u, c, d = (u = s == null ? void 0 : s.error) != null ? u : "", m = (c = s == null ? void 0 : s.cart) != null ? c : "";
			(e == null ? void 0 : e.isTriggeredFromList) === !0 && n(""), r(d), d === "" && (o(t()), a(m), i(!1)), l();
		};
	}
	function I(e) {
		var t, n, a, i, l = e.catalogItems, u = e.dataSource, g = u === void 0 ? S : u, h = e.enabled, C = h === void 0 ? y : h, I = e.inCartItems, D = e.label, x = e.onSelect, $ = e.screenID, P = o("WAFlowsEnvContext.react").useWAFlowsEnv(), N = P.env, M = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), w = o("WAFlowsStateProvider.react").useWAFlowsState(), A = o("WAFlowsShoppingCustomActionCallbacks").useSyncIntegratedShoppingCartWithState($), F = (t = (n = w.internal.shopping) == null || (n = n.shoppingCart) == null ? void 0 : n.coupon) != null ? t : R, O = f(R), B = O[0], W = O[1], q = f({
			id: F == null ? void 0 : F.id,
			title: F == null ? void 0 : F.title,
			discount: F == null ? void 0 : F.discount
		}), U = q[0], V = q[1], H = f(!1), G = H[0], z = H[1], j = f(""), K = j[0], Q = j[1], X = f(""), Y = X[0], J = X[1], Z = _(null), ee = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext), te = p(function() {
			return E(K, B, g, Q, W);
		}, [
			K,
			g,
			B
		]), ne = c(function() {
			window.setTimeout(function() {
				var e;
				(e = Z.current) == null || e.focus();
			}, 100);
		}, [Z]), re = o("WAFlowsShoppingCustomActionCallbacks").useCartCouponClickCallback($), oe = c(function(e) {
			var t = R, n = k(e, function() {
				return t;
			}, Q, J, V, A, z, ne);
			if ((e == null ? void 0 : e.couponId) !== void 0) {
				var r = g.find(function(t) {
					var n = t.id;
					return n === (e == null ? void 0 : e.couponId);
				});
				r && (t = {
					id: r.id,
					title: r.title
				}, re(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.APPLY_COUPON, I, l, !0, t.title, n)), L(Y, x, z);
			} else {
				var a;
				t = babelHelpers.extends({}, t, { title: (a = e == null ? void 0 : e.couponCode) != null ? a : "" }), re(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.APPLY_COUPON, I, l, !0, t.title, n);
			}
		}, [
			ne,
			A,
			g,
			Y,
			re,
			I,
			l,
			x
		]), ae = c(function() {
			if (x == null || x(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.GET_COUPON, I, l, !0), z(!G), !G) {
				var e = g.find(function(e) {
					var t = e.title;
					return t === U.title;
				});
				e ? (W({
					id: e.id,
					title: e.title
				}), Q("")) : (W(R), Q(U.title));
			}
		}, [
			U,
			l,
			I,
			G,
			x,
			g
		]), ie = c(function() {
			oe({ couponCode: K !== "" ? K : B == null ? void 0 : B.title });
		}, [
			K,
			oe,
			B
		]), le = c(function() {
			var e, t, n = (e = w.internal.shopping) == null || (e = e.shoppingCart) == null ? void 0 : e.coupon, r = (t = w.internal.shopping) == null || (t = t.shoppingCart) == null ? void 0 : t.amount, a = function(t) {
				var e, n, r = (e = t == null ? void 0 : t.error) != null ? e : "", a = (n = t == null ? void 0 : t.cart) != null ? n : "";
				r === "" && (W(R), V(R), Q(""), ee(o("WAFlowsWELJActionCreators").createShoppingCartCouponUpdateAction(null)), A(a));
			};
			re(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.REMOVE_COUPON, I, l, !0, n == null ? void 0 : n.title, a), o("WAFlowsSnackbarUtils").showSnackbar({
				text: o("WAFlowsLocalization").getCartCouponRemovedFbt(),
				action: {
					text: o("WAFlowsLocalization").getCartItemOrOfferCodeRemoveUndoFbt(),
					callback: function() {
						n && (W(n), oe({ couponId: n == null ? void 0 : n.id }), ee(o("WAFlowsWELJActionCreators").createShoppingCartCouponUpdateAction(n)), ee(o("WAFlowsWELJActionCreators").createShoppingCartAmountUpdateAction(r)));
					}
				}
			}, M.invoke);
		}, [
			l,
			ee,
			oe,
			I,
			re,
			(a = w.internal.shopping) == null || (a = a.shoppingCart) == null ? void 0 : a.amount,
			(i = w.internal.shopping) == null || (i = i.shoppingCart) == null ? void 0 : i.coupon,
			A,
			M.invoke
		]);
		m(function() {
			ee(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: G ? D : void 0,
				backButtonAction: G ? o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY : void 0
			}));
		}, [
			ee,
			G,
			D
		]);
		var se = T(N.platform);
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAFlowsCouponPicker.react"), {
			label: D,
			ref: Z,
			enabled: C,
			selectedValue: U.title,
			onClick: ae,
			onClear: le
		}), s.jsxs(r("WAFlowsOverlay.react"), {
			isPanelVisible: G,
			onVisibilityChange: z,
			children: [s.jsxs(o("WAFlowsFormContext").WAFlowsFormContext.Provider, {
				value: te,
				children: [
					s.jsx(o("WAFlowsTextInput.react").WAFlowsTextInput, {
						name: b,
						label: o("WAFlowsLocalization").getShoppingCouponLabelFbt().toString(),
						error: Y,
						value: K,
						showClearButtonOnBlur: !0,
						required: !0
					}),
					s.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						text: o("WAFlowsLocalization").getShoppingCouponListTitleFbt().toString(),
						fontWeight: "medium",
						xstyle: se.availableCouponsTitle
					}),
					s.jsx(o("WAFlowsRadioButtonsGroup.react").WAFlowsRadioButtonsGroup, {
						dataSource: g,
						name: v,
						enabled: C,
						required: !0
					})
				]
			}), s.jsx(o("WAFlowsFooter.react").WAFlowsFooter, {
				label: o("WAFlowsLocalization").getApplyFbt().toString(),
				onClick: ie,
				enabled: ((B == null ? void 0 : B.id) !== "" || K !== "") && C
			})]
		})] });
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		return e === "android" ? h : g;
	}
	l.WAFlowsCoupons = I;
}), 98);
