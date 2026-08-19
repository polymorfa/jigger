__d("WAFlowsCartUtils.react", [
	"invariant",
	"WAFlowsExternalDataChannelRequest",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsShoppingGetCheckoutUrlRequestType",
	"WAFlowsShoppingJSBridges",
	"WAFlowsShoppingNavigationUtils",
	"WAFlowsShoppingStateUtils",
	"WAFlowsWELJActionCreators",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = "mm_disclosure_title", u = 100;
	function c(e, t, n) {
		n === void 0 && (n = !1);
		var r = d(e, t, n);
		return r.reduce(function(e, t) {
			return e + t.quantity;
		}, 0);
	}
	function d(e, t, n) {
		return n === void 0 && (n = !1), p(e, t, "IN_STOCK", n);
	}
	function m(e, t, n) {
		return n === void 0 && (n = !1), p(e, t, "OUT_OF_STOCK", n);
	}
	function p(e, t, n, r) {
		r === void 0 && (r = !1);
		var o = Object.fromEntries(t.map(function(e) {
			return [r ? e.retailer_id : e.id, e];
		}));
		return e.filter(function(e) {
			var t;
			return ((t = o[e.catalogItemId]) == null ? void 0 : t.product_availability) === n;
		}).map(function(e) {
			var t, n, a, i, l, s, u, c, d = o[e.catalogItemId];
			return {
				id: e.id,
				catalogItemId: e.catalogItemId,
				quantity: e.quantity,
				name: d == null ? void 0 : d.name,
				price: r && (t = e == null ? void 0 : e.price) != null ? t : d == null ? void 0 : d.price,
				salePrice: r && (n = e.salePrice) != null ? n : d == null ? void 0 : d.sale_price,
				currency: d == null ? void 0 : d.currency,
				maxAvailable: d == null ? void 0 : d.max_available,
				retailerId: d.retailer_id,
				media: {
					id: (a = d == null || (i = d.media.images) == null ? void 0 : i[0].id) != null ? a : "",
					url: (l = d == null || (s = d.media) == null || (s = s.images) == null ? void 0 : s[0].request_image_url) != null ? l : ""
				},
				labels: (u = (c = d.variant_info) == null ? void 0 : c.variant_properties) != null ? u : []
			};
		});
	}
	function _(e) {
		return e.reduce(function(e, t) {
			var n;
			return e + Number((n = t.salePrice) != null ? n : t.price) * t.quantity;
		}, 0);
	}
	function f(e, t, n) {
		return new Intl.NumberFormat(n != null ? n : "en-US", {
			style: "currency",
			currency: t
		}).format(e);
	}
	function g(e, t, n, r) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			var i, l, u = {
				phone_number: t,
				products: a,
				base_checkout_url: n
			}, c = { payload: { request: u } }, d = yield r("WAFlowsExternalDataChannelRequest")(c, o("WAFlowsShoppingGetCheckoutUrlRequestType").GET_CHECKOUT_URL_REQUEST_DOC_ID, e), m = (i = d == null || (l = d.data) == null || (l = l.xwa_generate_whatsapp_checkout_url) == null ? void 0 : l.cart_url_suffix) != null ? i : "";
			return m !== "" || s(0, 87458), m;
		}), h.apply(this, arguments);
	}
	function y(e) {
		var t = Math.round(e * u);
		return {
			value: t,
			offset: u
		};
	}
	function C(e, t) {
		var n = parseFloat((e / t).toFixed(2));
		return n;
	}
	function b(e, t, n, r, a) {
		var i;
		n === void 0 && (n = !1);
		var l = d(e, t, n), s = new Map(t.map(function(e) {
			return [n ? e.retailer_id : e.id, e];
		})), u = l.map(function(e) {
			var t, r, i, l, u, c, d = s.get(n ? e.retailerId : e.catalogItemId);
			if (!d) {
				var m = new Error("Catalog item not found for " + (n ? "retailer ID" : "catalog item ID") + ": " + (n ? e.retailerId : e.catalogItemId));
				throw m.stack, m;
			}
			return {
				retailer_id: d.retailer_id,
				quantity: e.quantity,
				amount: a === o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.APPLY_COUPON ? y((t = d == null ? void 0 : d.price) != null ? t : 0) : y((r = (i = e.price) != null ? i : d == null ? void 0 : d.price) != null ? r : 0),
				name: d.name,
				sale_amount: o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType.APPLY_COUPON ? y((l = d == null ? void 0 : d.sale_price) != null ? l : 0) : y((u = (c = e == null ? void 0 : e.salePrice) != null ? c : d == null ? void 0 : d.sale_price) != null ? u : 0)
			};
		}), c = (i = r.internal) == null || (i = i.shopping) == null ? void 0 : i.shoppingCart, m = v(c);
		return {
			amount: m,
			products: u
		};
	}
	function v(e) {
		var t, n, r, o, a, i, l, s = {
			currency: (t = e == null || (n = e.amount) == null ? void 0 : n.currency) != null ? t : "INR",
			total_amount: e == null || (r = e.amount) == null ? void 0 : r.totalAmount
		}, u = e == null ? void 0 : e.coupon;
		if (u === void 0) return s;
		var c = {
			code: (o = u == null ? void 0 : u.title) != null ? o : "",
			id: (a = u == null ? void 0 : u.id) != null ? a : ""
		}, d = u == null ? void 0 : u.discount, m = d !== void 0 ? y((i = d == null ? void 0 : d.price) != null ? i : 0) : {
			value: 0,
			offset: 0
		}, p = (l = d == null ? void 0 : d.description) != null ? l : "";
		return s.coupon = babelHelpers.extends({}, c, { discount: babelHelpers.extends({}, m, { description: p }) }), s;
	}
	function S(e, t, n, r, a, i, l, s, u, c) {
		var d;
		if (u === void 0 && (u = !1), c === void 0 && (c = !1), !(l == null || e == null)) {
			var m = function(t) {
				var e = {};
				return t.amount && (e.price = C(t.amount.value, t.amount.offset)), t.sale_amount && (e.salePrice = C(t.sale_amount.value, t.sale_amount.offset)), e;
			}, p = l.products.map(function(e) {
				return babelHelpers.extends({
					catalogItemId: e.retailer_id,
					quantity: e.quantity
				}, m(e));
			});
			if (u && s && !p.some(function(e) {
				return e.catalogItemId === s.retailerId;
			}) && p.push({
				catalogItemId: s == null ? void 0 : s.retailerId,
				quantity: 0
			}), t(o("WAFlowsWELJActionCreators").createShoppingUpdateCartItemAction(p)), !c && !r.isJestTesting) {
				var _, f = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction(e, (_ = i == null ? void 0 : i.getScreenExternalData(e)) != null ? _ : []), g = l.products.map(function(e) {
					return e.retailer_id;
				});
				t(a.externalDataExchangeActionHandler(f, n, void 0, !0, { product_ids: g }, r));
			}
			var h = l == null || (d = l.amount) == null ? void 0 : d.coupon;
			if (h) {
				var y, b, v, S, R = {
					price: C((y = h.discount) == null ? void 0 : y.value, (b = h.discount) == null ? void 0 : b.offset),
					description: (v = h.discount) == null ? void 0 : v.description
				}, L = h.code, E = (S = h.id) != null ? S : "";
				t(o("WAFlowsWELJActionCreators").createShoppingCartCouponUpdateAction({
					id: E,
					title: L,
					discount: R
				}));
			}
			var k = l == null ? void 0 : l.amount;
			if (k) {
				var I, T, D = {
					totalAmount: C((I = k.total_amount) == null ? void 0 : I.value, (T = k.total_amount) == null ? void 0 : T.offset),
					currency: k.currency
				};
				t(o("WAFlowsWELJActionCreators").createShoppingCartAmountUpdateAction(D));
			}
		}
	}
	function R(e) {
		var t = e.split("@");
		return t[0];
	}
	function L(e, t, n, r, o) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
			var i, l, s, u, c, d, m, p, _, f, h, y, C, b, v, S, L, E = e, k = E.flowInitData, I = k[0], T = k[1], D = R((i = I == null || (l = I.environment) == null ? void 0 : l.biz_jid) != null ? i : ""), x = (s = t.internal) == null ? void 0 : s.shopping, $ = E.actionOverrides, P = (u = (c = t.internal.shopping) == null || (c = c.shoppingCart) == null ? void 0 : c.items) != null ? u : [], N = (d = (m = t.external[o("WAFlowsShoppingNavigationUtils").getViewCartScreenIdForShoppingFlow(n)]) == null || (m = m.external_data) == null || (m = m.meta_catalog) == null ? void 0 : m.products) != null ? d : [], M = P.map(function(e) {
				var t, n = N.find(function(t) {
					return t.id === e.catalogItemId;
				});
				return {
					quantity: e.quantity,
					product_retailer_id: (t = n == null ? void 0 : n.retailer_id) != null ? t : ""
				};
			}), w = "", A = (p = x == null || (_ = x.offsiteCheckout) == null || (_ = _.linkoutUrls) == null ? void 0 : _.get(o("WAFlowsShoppingStateUtils").LINKOUT_BUSINESS_CONSENTED_URL)) != null ? p : "", F = (f = x == null || (h = x.offsiteCheckout) == null || (h = h.linkoutUrls) == null ? void 0 : h.get(o("WAFlowsShoppingStateUtils").LINKOUT_USER_CONSENTED_URL)) != null ? f : "", O = (y = x == null || (C = x.offsiteCheckout) == null || (C = C.linkoutUrls) == null ? void 0 : C.get(o("WAFlowsShoppingStateUtils").LINKOUT_USER_UNCONSENTED_URL)) != null ? y : "";
			if (A !== "") w = A;
			else if (F !== "" && O !== "") {
				var B, W = (B = a == null ? void 0 : a.is_accepted) != null ? B : !1;
				w = W ? F : O;
			} else O !== "" && (w = O);
			var q = (b = x == null || (v = x.offsiteCheckout) == null || (v = v.linkoutUrls) == null ? void 0 : v.get(o("WAFlowsShoppingStateUtils").LINKOUT_BASE_CHECKOUT_URL)) != null ? b : "", U = yield g($, D, q, M), V = (S = x == null || (L = x.offsiteCheckout) == null || (L = L.linkoutUrls) == null ? void 0 : L.get(o("WAFlowsShoppingStateUtils").LINKOUT_BASE_CHECKOUT_URL)) != null ? S : "";
			return w !== "" ? V = w + "?cart_url_suffix=" + U : V += atob(U), V;
		}), E.apply(this, arguments);
	}
	function k(e, t) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e == null ? void 0 : e.order_details, r = t.invoke;
			yield o("WAFlowsShoppingJSBridges").openNativeIntegratedShopping(r, n);
		}), I.apply(this, arguments);
	}
	function T(e, t, n) {
		var r, o, a, i = (r = (o = e.internal) == null || (o = o.shopping) == null ? void 0 : o.shoppingCart) != null ? r : { items: [] }, l = new Map(i.items.map(function(e) {
			return [e.catalogItemId, e];
		})), s = new Map((a = n == null ? void 0 : n.map(function(e) {
			return [e.retailer_id, e];
		})) != null ? a : []);
		t.forEach(function(e) {
			var t = e.catalogItemId, n = e.price, r = e.quantity, o = e.salePrice, a = l.get(t), i = s.get(t);
			a && r <= 0 ? l.delete(t) : a ? l.set(t, babelHelpers.extends({}, a, {
				price: n != null ? n : a.price,
				salePrice: o != null ? o : a.salePrice,
				quantity: r != null ? r : a.quantity
			})) : r > 0 && l.set(t, {
				catalogItemId: t,
				quantity: r,
				price: n != null ? n : i == null ? void 0 : i.price,
				salePrice: o != null ? o : i == null ? void 0 : i.sale_price
			});
		});
		var u = [];
		return l.forEach(function(e, t) {
			var n, r, o, a, i, l, c = s.get(t);
			c && u.push(babelHelpers.extends({}, e, {
				currency: (n = c == null ? void 0 : c.currency) != null ? n : "INR",
				media: {
					id: (r = (o = c.media) == null || (o = o.image) == null ? void 0 : o.id) != null ? r : "",
					url: (a = (i = c.media) == null || (i = i.image) == null ? void 0 : i.request_image_url) != null ? a : ""
				},
				retailerId: c == null ? void 0 : c.retailer_id,
				id: t,
				name: c == null ? void 0 : c.name,
				maxAvailable: (l = c == null ? void 0 : c.max_available) != null ? l : 1e3,
				catalogItemId: t
			}));
		}), u;
	}
	l.MM_DISCLOSURE_TITLE = e, l.getCartItemsCount = c, l.getInStockItems = d, l.getOutOfStockItems = m, l.filterCartItems = p, l.getSubtotalValue = _, l.getFormattedPrice = f, l.calculatePriceFromValueAndOffset = C, l.getIntegratedShoppingFlowCart = b, l.syncIntegratedShoppingCartWithStateCart = S, l.buildCheckoutUrl = L, l.cartCheckoutCallback = k, l.getShoppingInCartItems = T;
}), 98);
