__d("WAFlowsWELJStateReducer", [
	"invariant",
	"WAFlowsActionHandlerTypes",
	"WAFlowsNativeExperienceUtils",
	"WAFlowsNativeMediaUploadTypes",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsShoppingExternalDataChannelUtils",
	"WAFlowsShoppingStateUtils",
	"WAFlowsStateProvider.react",
	"immer"
], (function(t, n, r, o, a, i, l, s) {
	function e(e, t, n) {
		var r = t[t.length - 2], o = t[t.length - 1];
		r === n ? e.internal.screenHistory.pop() : o !== n && e.internal.screenHistory.push(n);
	}
	function u(e) {
		for (var t in e) typeof e[t] == "number" && (e[t] = e[t].toString());
	}
	function c(e, t) {
		switch (t.name) {
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_OFFSITE_CHECKOUT_UPDATE_DISCLOSURE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedOffsiteCheckoutState(e, { disclosureState: t.payload.disclosureState });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_OFFSITE_CHECKOUT_SHOW_DISCLOSURE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedOffsiteCheckoutState(e, { showDisclosure: t.payload.showDisclosure });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_CATEGORY_LIST_BACK: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, { categoryListPath: t.CategoryIdsPath });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOPPING_LAST_PAGE_CALL: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, { shoppingLastPageCall: t.payload.pagingAfter });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOPPING_CART_QUANTITY: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, { shoppingCartQuantity: t.payload.quantity });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_UPDATE_SOURCE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, { source: t.payload.source });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_OFFSITE_CHECKOUT_UPDATE_LINKOUT_URLS: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedOffsiteCheckoutState(e, { linkoutUrls: t.payload.linkoutUrls });
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_INTEGRATED_SHOPPING_UPDATE_STATE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedIntegratedShoppingState(e, {
					couponEnabled: t.payload.couponEnabled,
					shippingEnabled: t.payload.shippingEnabled
				});
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_UPDATE_CART_COUPON: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingCartStateUtils").getUpdatedShoppingCartCoupon(e, t.payload.coupon);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_UPDATE_CART_AMOUNT: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingCartStateUtils").getUpdatedShoppingCartAmount(e, t.payload.amount);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_UPDATE_CART_ITEM: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingCartStateUtils").getUpdatedShoppingCartItems(e, t.payload.cartItems);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_MM_UPDATE_ITEM_DETAIL_DATA: return o("immer").produce(e, function(e) {
				var n;
				e.external[t.payload.screenId].data = (n = t.payload.data) != null ? n : {};
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_CATEGORY_UPDATE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, {
					categoryId: t.payload.categoryId,
					categoryName: t.payload.categoryName
				});
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.FLOWJ_SHOPPING_CATALOG_ITEM_UPDATE: return o("immer").produce(e, function(e) {
				e.internal.shopping = o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, {
					catalogItemId: t.payload.catalogItemId,
					catalogItemName: t.payload.catalogItemName,
					catalogItemRetailerId: t.payload.selectedRetailerId
				});
			});
			default: return null;
		}
	}
	var d = function(n, r) {
		var t = r.payload, a = t === void 0 ? {} : t, i = c(n, r);
		if (i !== null) return i;
		switch (r.name) {
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING: return o("immer").produce(n, function(e) {
				e.internal.status = r.payload.isLoading ? o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING : o("WAFlowsStateProvider.react").flowJSONLoadState.READY, e.internal.screenError = void 0;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOW_OVERLAY: return o("immer").produce(n, function(e) {
				e.internal.isOverlayVisible = r.payload.isOverlayVisible;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.SHOW_ERROR_OVERLAY: return o("immer").produce(n, function(e) {
				e.internal.isOverlayVisible = !0, e.internal.isErrorOverlayVisible = !0, e.internal.errorOverlayError = r.payload.error;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.HIDE_ERROR_OVERLAY: return o("immer").produce(n, function(e) {
				e.internal.isOverlayVisible = !1, e.internal.isErrorOverlayVisible = !1, e.internal.errorOverlayError = void 0;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOW_NAVBAR_CONTEXT_MENU: return o("immer").produce(n, function(e) {
				e.internal.isNavBarContextMenuVisible = r.payload.isNavBarContextMenuVisible;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_IS_SCROLLING: return o("immer").produce(n, function(e) {
				e.internal.scrollConfig = r.payload;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOW_DATE_PICKER_PANEL: return o("immer").produce(n, function(e) {
				e.internal.isDatePickerPanelVisible = r.payload.isDatePickerPanelVisible;
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_NAV_BAR_CONFIG: return o("immer").produce(n, function(e) {
				e.internal.navBarConfig = babelHelpers.extends({}, r.payload);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_FORM_TRANSPILER_PROPS: return o("immer").produce(n, function(e) {
				e.internal.screenInternalData[r.payload.screen].formErrorMessages = babelHelpers.extends({}, r.payload.errorMessages), u(r.payload.initValues), e.internal.screenInternalData[r.payload.screen].formInitData = babelHelpers.extends({}, r.payload.initValues);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_SHOW_SCREEN_ERROR: return o("immer").produce(n, function(e) {
				e.internal.status = o("WAFlowsStateProvider.react").flowJSONLoadState.READY, e.internal.screenError = {
					message: r.payload.message,
					retryDataExchangeAction: r.payload.retryDataExchangeAction,
					error: r.payload.error
				};
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE: return o("immer").produce(n, function(t) {
				var i, l, u, c;
				r.next.name != null || s(0, 72258);
				var d = r.next.name, m = (i = (l = r.meta) == null ? void 0 : l.currentScreen) != null ? i : "";
				t.external[r.next.name] != null && Object.assign(t.external[r.next.name].data, a), t.internal.status = o("WAFlowsStateProvider.react").flowJSONLoadState.READY, t.internal.screenError = void 0, t.internal.navBarConfig = {
					title: void 0,
					backButtonAction: void 0
				}, ((u = r.meta) == null ? void 0 : u.transitionReason) != null || s(0, 73191), t.internal.displayedScreenReason = {
					action: r.meta.transitionReason,
					sourceScreen: m
				}, ((c = r.meta) == null ? void 0 : c.updateStateHistory) === !0 && e(t, n.internal.screenHistory, d);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_EXTERNAL_DATA: return o("immer").produce(n, function(e) {
				Array.from(r.payload).map(function(t) {
					var a = t[0], i = t[1];
					Object.assign(e.external[a].external_data, o("WAFlowsShoppingExternalDataChannelUtils").storeMetaCatalogFormattedExternalData(r.apiType, i[1], i[0], n, a));
				});
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_3P_OR_NAVIGATE_DATA: return o("immer").produce(n, function(e) {
				Object.assign(e.external[r.screen].data, a);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_FORM_DATA: return o("immer").produce(n, function(e) {
				Object.assign(e.external[r.payload.screen].form, r.payload.values);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.UPDATE_DATA: return o("immer").produce(n, function(e) {
				var t, n = (t = r.meta) == null ? void 0 : t.currentScreen;
				n != null || s(0, 72258), Object.assign(e.external[n].data, r.payload);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_RESTORE_STATE: return m(r.payload), o("immer").produce(n, function(e) {
				return Object.assign(e, r.payload);
			});
			case o("WAFlowsActionHandlerTypes").WELJActionType.TOGGLE_CALENDAR_PICKER: return o("immer").produce(n, function(e) {
				e.internal.isCalendarPickerDialogVisible = r.payload.isCalendarPickerDialogVisible;
			});
			default: return n;
		}
	};
	function m(e) {
		Object.keys(e.external).forEach(function(t) {
			var n = e.external[t].form;
			Object.keys(n).forEach(function(e) {
				var t = n[e];
				if (o("WAFlowsNativeExperienceUtils").isMediaPickerFormValue(t)) {
					var r = t.__wa_flows_uploaded_media__, a = r.filter(function(e) {
						return e.upload_state === o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS;
					});
					t.__wa_flows_uploaded_media__ = a, n[e] = t;
				}
			});
		});
	}
	var p = d;
	l.default = p;
}), 98);
