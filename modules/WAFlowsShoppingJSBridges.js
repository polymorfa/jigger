__d("WAFlowsShoppingJSBridges", [
	"Promise",
	"WAFlowsBridgeEvents",
	"WAFlowsCartMockData",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			if (r === void 0 && (r = !1), r) return (e || (e = n("Promise"))).resolve(o("WAFlowsCartMockData").nativeCartMockData);
			try {
				return yield t({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsGetCart,
					payload: null,
					fallBackDataForWeb: null,
					hasCallback: !0
				});
			} catch (e) {
				return;
			}
		}), u.apply(this, arguments);
	}
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			t === void 0 && (t = !1);
			var n = yield s(e, t);
			if (Array.isArray(n == null ? void 0 : n.cart)) return { items: n.cart.filter(function(e) {
				return e.quantity > 0;
			}).map(function(e) {
				return {
					catalogItemId: e.id,
					quantity: e.quantity
				};
			}) };
		}), d.apply(this, arguments);
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (t === void 0 && (t = !1), !t) try {
				return yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMarketingDisclosureState,
					payload: null,
					fallBackDataForWeb: null,
					hasCallback: !0
				});
			} catch (e) {
				return;
			}
		}), p.apply(this, arguments);
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (n === void 0 && (n = !1), !n) try {
				yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMarketingDisclosureUserAction,
					payload: t,
					hasCallback: !1
				});
			} catch (e) {
				var r = new Error("Failed to send marketing message user disclosure action to native.");
				throw r.stack, r;
			}
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			try {
				var n;
				return (n = yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsSetCartItem,
					payload: t,
					fallBackDataForWeb: { success: !0 },
					hasCallback: !0
				})) != null ? n : { success: !1 };
			} catch (e) {
				return { success: !1 };
			}
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		var n, r, o, a, i, l = {
			id: t.catalogItemId,
			title: t.name,
			quantity: t.quantity,
			price_1000: t.price != null ? t.price * 1e3 : 0,
			sale_price_1000: t.salePrice != null ? t.salePrice * 1e3 : void 0,
			currency_code: t.currency,
			max_available: (n = t.maxAvailable) != null ? n : 0,
			image_id: (r = (o = t.media) == null ? void 0 : o.id) != null ? r : "",
			scaled_image_url: (a = (i = t.media) == null ? void 0 : i.url) != null ? a : ""
		};
		return g(e, l);
	}
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClearCart,
					payload: null,
					hasCallback: !1
				});
			} catch (e) {}
		}), b.apply(this, arguments);
	}
	function v(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClearCart,
					payload: null,
					hasCallback: !1
				}), yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClose,
					payload: null,
					hasCallback: !1
				});
			} catch (e) {}
		}), S.apply(this, arguments);
	}
	function R(e) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsStoreShoppingFlowContext,
					payload: null,
					hasCallback: !1
				});
			} catch (e) {
				var t = new Error("Failed to send shopping flow context to native.");
				throw t.stack, t;
			}
		}), L.apply(this, arguments);
	}
	function E(e) {
		return !e.isDraft();
	}
	function k(e, t, n) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (n === void 0 && (n = !1), !n) try {
				yield e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsNativeCheckout,
					payload: t,
					hasCallback: !1
				});
			} catch (e) {
				var r = new Error("Failed to open native integrated checkout experience.");
				throw r.stack, r;
			}
		}), I.apply(this, arguments);
	}
	l.getRawNativeCart = s, l.getShoppingCartStateFromNative = c, l.getShoppingFlowsMarketingDisclosureState = m, l.sendShoppingFlowsMarketingDisclosureUserAction = _, l.setRawNativeShoppingCartItem = g, l.setNativeShoppingCartItem = y, l.clearNativeShoppingCart = C, l.clearNativeCartAndCloseFlow = v, l.storeShoppingFlowContext = R, l.isNativeCartIntegrationEnabled = E, l.openNativeIntegratedShopping = k;
}), 98);
