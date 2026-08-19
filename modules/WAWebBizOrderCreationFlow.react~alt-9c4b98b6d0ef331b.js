__d("WAWebBizOrderCreationFlow.react", [
	"$InternalEnum",
	"WAMemoizeCache",
	"WAWebBizComplianceUtil",
	"WAWebBizEntryPoint",
	"WAWebBizFrontendGatingUtils",
	"WAWebBizOrderGetFriendlyRandomIdAction",
	"WAWebBizSendOrderAction",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebCatalogCollection",
	"WAWebCurrencyUtils",
	"WAWebDataSharingUpsellModel",
	"WAWebDrawerManager",
	"WAWebL10NCountryCodes",
	"WAWebModalManager",
	"WAWebMultiSelection",
	"WAWebOrderAdditionalChargesFormDrawer",
	"WAWebOrderCatalogFormDrawer",
	"WAWebOrderCollection",
	"WAWebOrderConfirmDiscardModal",
	"WAWebOrderCustomItemFormDrawer",
	"WAWebOrderDetailMath",
	"WAWebOrderDetails",
	"WAWebOrderDetailsCreationActionWamEventUtil",
	"WAWebOrderEnterPriceToastMessage",
	"WAWebOrderGatingUtils",
	"WAWebOrderItemModel",
	"WAWebOrderPaymentStatus",
	"WAWebOrderRequestDrawer.react",
	"WAWebOrderSummaryDrawer",
	"WAWebOrdersExpansionCountries",
	"WAWebUimUie.react",
	"WAWebUserPrefsCustomPaymentMethods",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsPaymentInfo",
	"WAWebVelocityTransitionGroup",
	"react",
	"sumBy",
	"useLazyRef",
	"useWAWebCallbackOnce",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.experimental_useEffectEvent, d = u.useEffect, m = u.useMemo, p = u.useState, _ = n("$InternalEnum").Mirrored([
		"CATALOG_PRODUCTS_FORM",
		"CUSTOM_ITEM_FORM",
		"ORDER_SUMMARY",
		"ORDER_REQUEST",
		"ADDITIONAL_CHARGES_FORM"
	]), f = Array.from(_.members()), g = o("WAMemoizeCache").memoizeWithArgs(function() {
		var e, t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), n = t != null ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t.user) : (e = o("WAWebBizComplianceUtil").getCountryShortcodeByWid(o("WAWebUserPrefsMeUser").getMeUserOrThrow())) != null ? e : "";
		return o("WAWebCurrencyUtils").currencyForCountryShortcode(n);
	}, function() {
		return "";
	});
	function h(e, t, n) {
		return e ? t.length !== e.products.length || t.some(function(t, r) {
			var o, a;
			return t.id !== e.products[r].id || t.quantity !== e.products[r].quantity || ((o = (a = t.price) != null ? a : n[t.id]) != null ? o : null) !== e.products[r].price;
		}) : t.length > 0;
	}
	function y(e) {
		if (!e) return [];
		var t = {
			isCustomItem: !1,
			isQuantitySet: !0
		}, n = e.products.map(function(e) {
			return new (r("WAWebOrderItemModel"))(babelHelpers.extends({}, t, e));
		});
		return o("WAWebOrderEnterPriceToastMessage").notifyIfAnyProductMissesPrice(n, {}), n;
	}
	function C() {
		var e = [];
		return o("WAWebBizFrontendGatingUtils").isOrderDetailsPaymentInstructionsSyncEnabled() && o("WAWebUserPrefsPaymentInfo").isCPIInfoValid() && e.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.CPI), o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled() && o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() && e.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX), e;
	}
	function b(e) {
		var t, n, a = e.chat, i = e.entryPoint, l = e.onBack, u = e.onCancel, b = e.onDeclineOrder, v = e.onSend, S = e.order, R = e.ref, L = r("useWAWebUnmountSignal")(), E = (i === r("WAWebBizEntryPoint").FROM_CART || i === r("WAWebBizEntryPoint").ORDER_REQUEST_LIST) && o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled(), k = E ? _.ORDER_REQUEST : _.ORDER_SUMMARY, I = p(k), T = I[0], D = I[1], x = p(null), $ = x[0], P = x[1], N = p(!1), M = N[0], w = N[1], A = p(function() {
			return y(S);
		}), F = A[0], O = A[1], B = p({}), W = B[0], q = B[1], U = p(null), V = U[0], H = U[1], G = r("useLazyRef")(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), z = G.current, j = o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow()), K = function(t, n) {
			q(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[n] = t, r));
			});
		}, Q = m(function() {
			return r("sumBy")(F, function(e) {
				var t, n;
				return ((t = (n = W[e.id]) != null ? n : e.price) != null ? t : 0) * e.quantity;
			});
		}, [F, W]), X = o("WAWebOrderDetailMath").calculateFlatAmounts({
			discountText: (V == null ? void 0 : V.discountText) || "",
			discountType: (V == null ? void 0 : V.discountType) || "",
			orderSubtotal: Q / o("WAWebOrderDetailMath").DEFAULT_OFFSET,
			shippingText: (V == null ? void 0 : V.shippingText) || "",
			taxText: (V == null ? void 0 : V.taxText) || "",
			taxType: (V == null ? void 0 : V.taxType) || ""
		}), Y = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), J = o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(Y)), Z = g(), ee = o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCurrencies(a.contact.id.user), te = (t = (n = F.at(0)) == null ? void 0 : n.currency) != null ? t : Z, ne = C(), re = function() {
			var e = F.some(function(e) {
				return W[e.id];
			});
			i != null && o("WAWebOrderDetailsCreationActionWamEventUtil").createSendOrderDetailsWamEvent(a, i, F, X, J, e, ne, te).commit();
			var t = S != null ? S : o("WAWebOrderCollection").OrderCollection.addOrder();
			t.products = F.map(function(e) {
				var t, n;
				return e.price = (t = W[e.id]) != null ? t : e.price, e.currency = (n = e.currency) != null ? n : Z, e;
			}), t.currency = te, t.subtotal = Q, t.triggerItemCollectionUpdate(), o("WAWebBizSendOrderAction").sendOrderDetailsMessageAsMerchant({
				chat: a,
				discount: X.discount,
				offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
				order: t,
				orderNote: "",
				shipping: X.shipping,
				tax: X.tax,
				total: X.total
			}), v == null || v(), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, oe = r("useWAWebCallbackOnce")(function() {
			l ? l() : (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), u == null || u());
		}), ae = function() {
			h(S, F, W) ? o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: oe })) : oe();
		}, ie = function(t) {
			L.aborted || (t !== !0 && o("WAWebOrderEnterPriceToastMessage").notifyIfAnyProductMissesPrice(F, W), D(k));
		}, le = function() {
			D(_.CATALOG_PRODUCTS_FORM);
		}, se = function(t, n) {
			var e = Number.isInteger(t) ? t : null;
			P(e), w(n === !0), D(e == null || F[e].isCustomItem ? _.CUSTOM_ITEM_FORM : _.CATALOG_PRODUCTS_FORM);
		}, ue = function() {
			D(_.ADDITIONAL_CHARGES_FORM);
		}, ce = function(t, n) {
			var e = t.length, r = t.reduce(function(e, t, n) {
				return e.set(t.id, n);
			}, new Map());
			return n.toSorted(function(t, n) {
				var o, a;
				return ((o = r.get(t.id)) != null ? o : e) - ((a = r.get(n.id)) != null ? a : e);
			});
		}, de = function(t) {
			return t.map(function(e) {
				var t;
				return new (r("WAWebOrderItemModel"))({
					id: e.id,
					isCustomItem: !1,
					isQuantitySet: !0,
					name: e.name,
					price: e.priceAmount1000,
					quantity: Number(z.getVal(e)),
					thumbnailUrl: (t = e.getPreviewImage()) == null ? void 0 : t.mediaUrl
				});
			});
		}, me = function(t, n, r) {
			var e = j == null ? void 0 : j.productCollection.getProductModels(), o = new Set(n.map(function(e) {
				var t = e.id;
				return t;
			})), a = new Set(e == null ? void 0 : e.map(function(e) {
				var t = e.id;
				return t;
			}));
			return r.reduce(function(e, t) {
				var n = o.has(t.id), r = a.has(t.id);
				return n || r ? e : e.concat(t);
			}, t);
		}, pe = function(t) {
			t === void 0 && (t = !0), J && O(function(e) {
				var n = z.getSelected(), r = de(n), a = me(r, n, e);
				return t && o("WAWebOrderEnterPriceToastMessage").notifyIfAnyProductMissesPrice(a, W), ce(e, a);
			});
		}, _e = function(t) {
			var e = t.currency, n = t.isQuantitySet, a = t.name, i = t.priceAmount1000, l = t.quantity, s = o("WAWebOrderDetails").getCustomItemIdPrefix() + "-" + r("WAWebBizOrderGetFriendlyRandomIdAction")();
			O(function(t) {
				var o = ce(t, [].concat(t, [new (r("WAWebOrderItemModel"))({
					currency: e,
					id: s,
					isCustomItem: !0,
					isQuantitySet: n,
					name: a,
					price: i,
					quantity: l != null ? l : 1
				})]));
				return o;
			});
		}, fe = function(t) {
			return z.getSelected().find(function(e) {
				var n = e.id;
				return n === t.id;
			});
		}, ge = function(t, n) {
			z.setVal(t, n);
		}, he = function(t) {
			if (!F[t].isCustomItem) {
				var e = fe(F[t]);
				e && ge(e, 0);
			}
			O(function(e) {
				return [].concat(e.slice(0, t), e.slice(t + 1));
			});
		}, ye = function(t, n) {
			n ? O(function(e) {
				var r = [].concat(e);
				return r[t].quantity = n, r[t].isQuantitySet = !0, r;
			}) : he(t);
		}, Ce = function(t, n) {
			var e = F[t];
			if (e.isCustomItem) ye(t, n);
			else {
				var r = fe(F[t]);
				r && ge(r, n), pe(!1);
			}
		}, be = function() {
			var e = F.some(function(e) {
				return W[e.id];
			});
			i != null && o("WAWebOrderDetailsCreationActionWamEventUtil").createClickAddItemWamEvent({
				entryPoint: i,
				hasAddedPrice: e,
				hasCatalog: J
			}).commit(), J && o("WAWebOrderGatingUtils").orderDetailsFromCatalogEnabled() ? le() : se();
		}, ve = async function(t) {
			if (!(j == null || Y == null)) for (var e = j.productCollection.getProductModels(), n, r = e.length, a = 0; (!n || !z.isSelected(n)) && a < r;) {
				var i;
				await o("WAWebCatalogCollection").CatalogCollection.update(Y), a = r, e = j.productCollection.getProductModels(), n = (i = e) == null ? void 0 : i.find(function(e) {
					return e.id === t.id;
				}), n && ge(n, t.quantity), r = e.length;
			}
		}, Se = c(function() {
			if (S) {
				var e = j == null ? void 0 : j.productCollection.getProductModels(), t = function(n) {
					var t = e == null ? void 0 : e.find(function(e) {
						return e.id === n.id;
					});
					t ? ge(t, n.quantity) : ve(n);
				};
				for (var n of S.products) t(n);
			}
		}), Re = function() {
			if (pe(), ie(!0), i) {
				var e = F.some(function(e) {
					return W[e.id];
				});
				o("WAWebOrderDetailsCreationActionWamEventUtil").createClickAddItemsWamEvent(i, J, e).commit();
			}
		}, Le = function(t) {
			switch (t) {
				case _.CATALOG_PRODUCTS_FORM: return s.jsx(r("WAWebOrderCatalogFormDrawer"), {
					currency: Z,
					productsSelection: z,
					orderItems: F,
					priceMap: W,
					onBack: ie,
					onAddProducts: Re,
					onAddCustomItem: function() {
						se(null, !0);
					},
					onProductSelectionChange: ge
				});
				case _.CUSTOM_ITEM_FORM: return s.jsx(r("WAWebOrderCustomItemFormDrawer"), {
					currency: te,
					eligibleCurrencies: F.length === 0 && z.getSelected().length === 0 ? ee : [],
					onBack: M ? le : ie,
					onSaveCustomItem: function(t) {
						pe(), _e(t), ie();
					},
					customItem: F[Number.isInteger($) ? Number($) : -1]
				});
				case _.ORDER_REQUEST: return s.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestDrawer, {
					chat: a,
					currency: te,
					priceMap: W,
					orderItems: F,
					orderSubtotal: Q,
					additionalCharges: V,
					flatAmounts: X,
					onPriceChange: K,
					onBack: ae,
					onSubmit: re,
					onAdditionalCharges: ue,
					onItemQuantityChange: Ce,
					onAddItem: be,
					onDeclineOrder: b,
					entryPoint: i
				});
				case _.ORDER_SUMMARY: return s.jsx(o("WAWebOrderSummaryDrawer").OrderSummaryDrawer, {
					chat: a,
					currency: te,
					priceMap: W,
					orderItems: F,
					orderSubtotal: Q,
					additionalCharges: V,
					flatAmounts: X,
					onPriceChange: K,
					onBack: ae,
					onSubmit: re,
					onAddItem: be,
					onAdditionalCharges: ue,
					onDeleteItem: he,
					onItemQuantityChange: Ce,
					entryPoint: i,
					onDeclineOrder: b
				});
				case _.ADDITIONAL_CHARGES_FORM: return s.jsx(r("WAWebOrderAdditionalChargesFormDrawer"), {
					currency: te,
					additionalCharges: V,
					subtotal: Q,
					onBack: ie,
					onApply: function(t) {
						H(function(e) {
							return babelHelpers.extends({}, e, t);
						}), ie();
					}
				});
			}
		};
		if (d(function() {
			return Se(), function() {
				o("WAWebDataSharingUpsellModel").enableUpsell();
			};
		}, []), !T) return null;
		var Ee = f.indexOf(T);
		return s.jsx(r("WAWebVelocityTransitionGroup"), {
			ref: R,
			children: s.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "FlowDrawer" + Ee,
				escapable: !0,
				children: s.jsx("div", { children: Le(T) })
			}, Ee)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
