__d("WAFlowsWebPreviewActionHandler", [
	"WAFlowsActionHandler",
	"WAFlowsActionHandlerUtils",
	"WAFlowsBridgeEvents",
	"WAFlowsDomainUtils",
	"WAFlowsEntryPointUtils",
	"WAFlowsError",
	"WAFlowsErrorDetails.react",
	"WAFlowsShoppingGetCategoriesRequestTypes",
	"WAFlowsShoppingGetProductListRequestTypes",
	"WAFlowsShoppingGetProductRequestTypes",
	"WAFlowsShoppingGetSingleCollectionRequestTypes",
	"WAFlowsSnackbarUtils",
	"WAFlowsTypes",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJValidationUtils",
	"WAFlowsWebPreviewShoppingComponentsMockData",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["error_message", "extension_message_response"], s = (function(t) {
		function a(e, n) {
			var r;
			return r = t.call(this, e, n != null ? n : void 0, "web_tooling") || this, r.invoke = e, r.getFlowInitData = function() {
				return e({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsGetFlowData,
					payload: null,
					hasCallback: !0
				}).then(o("WAFlowsEntryPointUtils").parseJSBridgeInitData);
			}, r.eventPayload = null, r;
		}
		babelHelpers.inheritsLoose(a, t);
		var i = a.prototype;
		return i.terminateFlowActionHandler = function(n, r, o, a, i) {
			return a === void 0 && (a = !1), t.prototype.terminateFlowActionHandler.call(this, n, r, o, !1, i);
		}, i.navigateActionHandler = function(n, r, o, a, i, l) {
			return o === void 0 && (o = !1), a === void 0 && (a = !0), i === void 0 && (i = !1), t.prototype.navigateActionHandler.call(this, n, r, o, a, i, l != null ? l : this.platform);
		}, i.dataExchangeActionHandler = function(a, i, l, s) {
			var t = this;
			return (function() {
				var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, u, c) {
					var d = yield t.getFlowInitData();
					if ((d == null ? void 0 : d.environment.is_flow_interactive) === !0) {
						var m = c();
						o("WAFlowsActionHandlerUtils").dispatchFlowLoading(a)(n);
						try {
							var p = a.payload, _ = p.action, f = p.screen, g = u().external, h = yield o("WAFlowsActionHandlerUtils").executeDataExchange(m, a, g, t.getFlowInitData, t), y = h.data, C = h.screen;
							if (o("WAFlowsDomainUtils").isOndemandFlowsUrl() && JSON.stringify(babelHelpers.extends({}, y, { screen: C })), typeof y != "object") throw new (o("WAFlowsError")).WAFlowsInvalidDataChannelResponseError(o("WAFlowsWELJValidationUtils").WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage());
							var b = y != null ? y : {}, v = b.error_message, S = b.extension_message_response, R = babelHelpers.objectWithoutPropertiesLoose(b, e);
							yield t.navigateToScreen(_, S, i, m, C, f, R, l, s, t.invoke)(n), v != null && v !== "" && typeof v == "string" && o("WAFlowsSnackbarUtils").showSnackbar({ text: v }, t.invoke);
						} catch (e) {
							var L = a.payload.screen;
							o("WAFlowsActionHandlerUtils").delegateErrorToHandler(r("getErrorSafe")(e), L, a, t);
						}
					}
				});
				return function(e, t, n) {
					return u.apply(this, arguments);
				};
			})();
		}, i.externalDataExchangeActionHandler = function(t, n, r, a, i, l) {
			return a === void 0 && (a = !1), function(e, t, n) {
				var r = t().external, a = n(), i = Object.keys(r), l = [
					"CartLayout",
					"CategoryListLayout",
					"ItemDetailLayout",
					"ItemListLayout"
				], s = i.filter(function(e) {
					return l.includes(a.getScreenMeta(e).layoutType) === !0;
				}), u = new Map(), c = null;
				s.forEach(function(e) {
					var t = a.getScreenExternalData(e)[0];
					c = c == null ? t.type : c;
					var n = a.getScreenMeta(e).layoutType;
					n === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST ? u.set(e, [o("WAFlowsShoppingGetCategoriesRequestTypes").GET_CATEGORIES_API_NAME, o("WAFlowsWebPreviewShoppingComponentsMockData").getMockedExternalDataResponseForCategoryListLayout()]) : n === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL ? u.set(e, [o("WAFlowsShoppingGetProductRequestTypes").GET_PRODUCT_API_NAME, o("WAFlowsWebPreviewShoppingComponentsMockData").getMockedExternalDataResponseForItemDetailLayout()]) : n === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST ? u.set(e, [o("WAFlowsShoppingGetSingleCollectionRequestTypes").GET_SINGLE_COLLECTION_API_NAME, o("WAFlowsWebPreviewShoppingComponentsMockData").getMockedExternalDataResponseForItemListLayout()]) : n === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART && u.set(e, [o("WAFlowsShoppingGetProductListRequestTypes").GET_PRODUCT_LIST_API_NAME, o("WAFlowsWebPreviewShoppingComponentsMockData").getMockedExternalDataResponseForCartLayout()]);
				}), e(o("WAFlowsWELJActionCreators").createWELJUpdateExternalDataAction(u, c != null ? c : "meta_catalog"));
			};
		}, i.onInteractivePreviewEventRequest = function(t) {
			var e = t != null ? t : {}, n = e.action, r = e.data, o = e.flowToken, a = e.screen, i = e.version;
			this.eventPayload = babelHelpers.extends({}, this.eventPayload, {
				request: {
					action: n != null ? n : "",
					data: r,
					screen: a,
					flowToken: o,
					version: i
				},
				status: "success"
			});
		}, i.onInteractivePreviewEventResponse = function(t) {
			this.eventPayload = babelHelpers.extends({}, this.eventPayload, {
				response: t,
				status: "success",
				statusCode: 200
			});
		}, i.onInteractivePreviewEventError = function(t) {
			var e, n;
			this.eventPayload = babelHelpers.extends({}, this.eventPayload, {
				error: t,
				status: "error",
				statusCode: (e = o("WAFlowsErrorDetails.react").getErrorStatusCode(t)) != null ? e : (n = this.eventPayload) == null ? void 0 : n.statusCode
			}), this.onInteractivePreviewEventCompletion();
		}, i.onInteractivePreviewEventCompletion = function() {
			this.eventPayload != null && (this.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsInteractivePreviewEvent,
				payload: this.eventPayload,
				hasCallback: !1
			}), this.eventPayload = null);
		}, i.onError = function(t) {
			this.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsError,
				payload: { error: t },
				hasCallback: !1
			});
		}, a;
	})(o("WAFlowsActionHandler").WAFlowsActionHandler);
	l.WAFlowsWebPreviewActionHandler = s;
}), 98);
