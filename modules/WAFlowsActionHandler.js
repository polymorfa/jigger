__d("WAFlowsActionHandler", [
	"invariant",
	"Promise",
	"WAFlowsActionHandlerTypes",
	"WAFlowsActionHandlerUtils",
	"WAFlowsBridgeEvents",
	"WAFlowsConfigurationContext.react",
	"WAFlowsEntryPointUtils",
	"WAFlowsError",
	"WAFlowsResponseHandler",
	"WAFlowsScreenUtils",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsShoppingExternalDataChannelUtils",
	"WAFlowsSnackbarUtils",
	"WAFlowsStateParser",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJValidationUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["markButtonAsTapped"], u = ["error_message", "extension_message_response"], c = ["error_message", "extension_message_response"], d = ["error_message", "extension_message_response"], m, p = (function() {
		function t(e, t, n) {
			t === void 0 && (t = o("WAFlowsConfigurationContext.react").WA_FLOWS_DEAFULT_CONFIGURATION), n === void 0 && (n = null), this.invoke = e, this.getFlowInitData = (function() {
				return function() {
					return e({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsGetFlowData,
						payload: null,
						hasCallback: !0
					}).then(function(e) {
						return o("WAFlowsEntryPointUtils").parseJSBridgeInitData(e);
					});
				};
			})(), this.configuration = t, this.platform = n, this.eventPayload = null;
		}
		var a = t.prototype;
		return a.getTerminateFlowPayload = function(t, a, i, l, u, c, d) {
			var e = this;
			return (function() {
				var m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, m, p) {
					var _, f = m(), g = yield u();
					g != null || s(0, 72523);
					var h = g.environment, y = h.creation_source, C = h.flow_token;
					n(o("WAFlowsWELJActionCreators").createTerminateAction());
					var b = p(), v = b.getIsShoppingFlow(), S = o("WAFlowsStateParser").parseActionPayload(f.external, t, a, b), R = r("justknobx")._("2512");
					R && l && (S = o("WAFlowsStateParser").transformNativeComponentsValue(o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE, S, b, t)), c == null || c(t), !Array.isArray(S) || s(0, 73762);
					var L = r("unsafeCast")(babelHelpers.extends({}, S));
					l && (L.flow_token = C), y === "ADS_MANAGER_CTWA" && (L.flow_id = b.getFlowId());
					var E = (d == null || (_ = d.flows_termination_message_v2_sending_enabled) == null ? void 0 : _.boolValue) === !0 && !v && +b.getVersion() >= 501;
					return E && (L.response_message = JSON.stringify(o("WAFlowsResponseHandler").buildResponseMessage(b, f, i, e.configuration.responseMessageVersion))), v && (L.cart = o("WAFlowsShoppingCartStateUtils").getFlowResponseShoppingCart(f, b)), { extension_message_response: {
						params: L,
						markButtonAsTapped: !0
					} };
				});
				return function(e, t, n) {
					return m.apply(this, arguments);
				};
			})();
		}, a.terminateFlowInvoke = function(t, r) {
			return (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield r({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsComplete,
						hasCallback: !1,
						payload: t
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})();
		}, a.terminateCloseFlow = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i) {
				if (n != null && (n == null ? void 0 : n.params) != null) {
					var l, u = r.getFlowId();
					typeof u == "string" || s(0, 76655), e(this.terminateFlowActionHandler(t, (l = n.params) != null ? l : {}, a, void 0, o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE));
					return;
				}
				yield i({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsClose,
					payload: null,
					hasCallback: !1
				});
			});
			function t(t, n, r, o, a, i) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.terminateFlowActionHandler = function(r, a, i, l, s) {
			var t = this;
			return l === void 0 && (l = !1), (function() {
				var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, u, c) {
					n({
						name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
						payload: { isLoading: !0 }
					});
					var d = yield t.getTerminateFlowPayload(r, a, i, l, t.getFlowInitData)(n, u, c), m = d.extension_message_response, p = m.markButtonAsTapped, _ = babelHelpers.objectWithoutPropertiesLoose(m, e);
					s === "complete" && t.onInteractivePreviewEventRequest({
						data: _.params,
						action: s
					}), t.onInteractivePreviewEventCompletion(), yield t.terminateFlowInvoke(d, t.invoke)();
				});
				return function(e, t, n) {
					return u.apply(this, arguments);
				};
			})();
		}, a.errorActionHandler = function(t) {
			return function(e) {
				throw t;
			};
		}, a.onInteractivePreviewEventRequest = function(t) {}, a.onInteractivePreviewEventResponse = function(t) {}, a.onInteractivePreviewEventError = function(t) {}, a.onInteractivePreviewEventCompletion = function() {}, a.onError = function(t) {}, a.getNavigationScreensAndMeta = function(t) {
			return function(e) {
				var n = e();
				t.meta != null || s(0, 72442);
				var r = t.meta.currentScreen, o = t.next.name;
				return {
					meta: n,
					currentScreen: r,
					nextScreen: o
				};
			};
		}, a.updateScreenHistory = function(t, n, r, a, i, l, s, u, c) {
			t !== n && a === !0 && (i ? o("WAFlowsScreenUtils").popScreenFromHistory(r) : o("WAFlowsScreenUtils").pushScreenToHistory(t, n, r, c));
		}, a.navigateToNextScreen = function(t, n, r, a, i) {
			var e = this;
			return function(l, u) {
				var c, d, m = u(), p = t === "" ? n : t, _ = o("WAFlowsStateParser").parseActionPayload(m.external, p, (c = r.payload) != null ? c : {}, a);
				if (!Array.isArray(_) || s(0, 72449), a.isDataChannelLess() && e.invoke({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDataExchangeDuringNavigation,
					payload: {
						data: _,
						screen: r.next.name
					},
					hasCallback: !1
				}), !i) {
					var f;
					a != null || s(0, 72588), o("WAFlowsActionHandlerUtils").validateRoutingModel(n, t, a, r.name, _, e.configuration);
					var g = (f = a.getScreenMeta(p).isNavListScreen) != null ? f : !1;
					!Array.isArray(_) && g && o("WAFlowsActionHandlerUtils").validateSchemaOrThrowError(r.next.name, r.name, _, a, !0, p);
				}
				var h = m.internal.screenHistory, y = h[h.length - 2] === n;
				l(babelHelpers.extends({}, r, { payload: _ }));
				var C = (d = {}, d[o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.ERROR_MESSAGES] = {}, d[o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.INIT_VALUES] = {}, d);
				for (var b of [o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.ERROR_MESSAGES, o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.INIT_VALUES]) {
					var v, S, R, L, E, k, I, T = (v = (S = a.getScreenMeta(n)) == null || (S = S.form) == null || (S = S.formProps) == null ? void 0 : S[b]) != null ? v : {}, D = o("WAFlowsStateParser").getDynamicFieldsFromObject(T, n), x = u(), $ = babelHelpers.extends({}, x.external, (R = {}, R[n] = babelHelpers.extends({ data: _ }, x.external[n]), R)), P = o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS_FLOW_JSON_MAPPING[b], N = (L = o("WAFlowsStateParser").parseAndMapWELJProperties((E = {}, E[P] = T, E), n, $)[P]) != null ? L : {};
					typeof N == "object" || s(0, 77595), N = (k = Object.fromEntries(Object.entries(N).filter(function(e) {
						var t = e[0], n = e[1];
						return n != null;
					}))) != null ? k : {};
					var M = o("WAFlowsStateParser").getDynamicFieldsValuesFromSource($, D), w = b === o("WAFlowsStateParser").WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS.ERROR_MESSAGES && y && ((I = r.meta) == null ? void 0 : I.transitionReason) !== "data_exchange";
					C[b] = !w && (D.length === 0 && Object.keys(x.external[n].form).length === 0 || Object.keys(M).length > 0) ? N : {};
				}
				return l({
					name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_FORM_TRANSPILER_PROPS,
					payload: babelHelpers.extends({ screen: n }, C)
				}), {
					nextScreenState: _,
					isBack: y
				};
			};
		}, a.navigateActionHandler = function(t, n, r, o, a, i) {
			var e = this;
			return r === void 0 && (r = !1), o === void 0 && (o = !0), a === void 0 && (a = !1), function(l, s, u) {
				var c, d = e.getNavigationScreensAndMeta(t)(u), m = d.currentScreen, p = d.meta, _ = d.nextScreen, f = e.navigateToNextScreen(m, _, t, p, r)(l, s), g = f.isBack, h = f.nextScreenState, y = (c = t.meta) == null ? void 0 : c.transitionReason, C = t.next.name, b = g ? "BACK" : y;
				y === "navigate" && e.onInteractivePreviewEventRequest({
					data: h,
					screen: C,
					action: b != null ? b : ""
				}), e.onInteractivePreviewEventCompletion(), e.updateScreenHistory(_, m, n, o, g, a, p, l, i);
			};
		}, a.categoryListBackActionHandler = function(t, n) {
			return function(e, r) {
				var a, i = r(), l = ((a = i.internal) == null || (a = a.shopping) == null ? void 0 : a.categoryListPath) || [];
				if (t && l.length > 0) {
					var s = [].concat(l).slice(0, -1);
					e(o("WAFlowsWELJActionCreators").createCategoryListBackAction(s));
				}
				if (!t) {
					var u = [].concat(l, [n != null ? n : ""]);
					e(o("WAFlowsWELJActionCreators").createCategoryListBackAction(u));
				}
			};
		}, a.handleDataExchange = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
				var a = yield o("WAFlowsActionHandlerUtils").executeDataExchange(e, t, n, this.getFlowInitData, this);
				return yield r({
					eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDataExchangeDuringNavigation,
					payload: a,
					hasCallback: !1
				}), a;
			});
			function t(t, n, r, o) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.navigateToScreen = function(t, r, a, i, l, s, u, c, d, m) {
			var e = this;
			return (function() {
				var p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					if (l === "SUCCESS") {
						yield e.terminateCloseFlow(n, s, r, i, d, m);
						return;
					}
					o("WAFlowsActionHandlerUtils").validateRoutingModel(l, s, i, t, u, e.configuration);
					var p = o("WAFlowsWELJActionCreators").createWELJNavigateAction(s, l, u, c, t === "BACK" ? o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE : t);
					n(e.navigateActionHandler(p, a, !0)), n({
						name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
						payload: { isLoading: !1 }
					});
				});
				return function(e) {
					return p.apply(this, arguments);
				};
			})();
		}, a.dataExchangeActionHandler = function(t, a, i, l, s, c) {
			var e = this;
			return s === void 0 && (s = !0), (function() {
				var s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, s, c, d) {
					var m = c();
					o("WAFlowsActionHandlerUtils").dispatchFlowLoading(t)(n);
					try {
						var p = t.payload, _ = p.action, f = p.screen, g = s().external, h = yield e.handleDataExchange(m, t, g, e.invoke), y = h.data, C = h.screen;
						if (typeof y != "object") throw new (o("WAFlowsError")).WAFlowsInvalidDataChannelResponseError(o("WAFlowsWELJValidationUtils").WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage());
						var b = y != null ? y : {}, v = b.error_message, S = b.extension_message_response, R = babelHelpers.objectWithoutPropertiesLoose(b, u);
						yield e.navigateToScreen(_, S, a, m, C, f, R, i, l, e.invoke)(n), v != null && v !== "" && typeof v == "string" && o("WAFlowsSnackbarUtils").showSnackbar({ text: v }, e.invoke);
					} catch (e) {
						var L = t.payload.screen, E = r("getErrorSafe")(e), k = o("WAFlowsActionHandlerUtils").shouldDisableNativeMessageCTA(E);
						o("WAFlowsActionHandlerUtils").delegateErrorToHandler(E, L, t);
					}
				});
				return function(e, t, n, r) {
					return s.apply(this, arguments);
				};
			})();
		}, a.executeOnlyExternalDataExchangeRequest = function(t, r, a, i, l, s, u, c) {
			var e = this;
			return (function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					var a = t.screen, d = !1, m = r.getScreenExternalData(t.screen)[0];
					if (m !== void 0) {
						var p = yield o("WAFlowsShoppingExternalDataChannelUtils").executeMetaCatalogRequest(m, i, l, t.screen, e, c, r, void 0, u);
						return s.set(t.screen, [m.name.toString(), p]), n(o("WAFlowsWELJActionCreators").createWELJUpdateExternalDataAction(s, m.type)), {
							nextScreen: a,
							updateBrowserHistory: d
						};
					}
				});
				return function(e) {
					return a.apply(this, arguments);
				};
			})();
		}, a.executeParallelExternalRequests = function(t, a, i, l, s, u, d, p, _, f, g, h) {
			var e = this;
			return (function() {
				var y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (y) {
					var C = u, b = "";
					try {
						var v = "", S = yield (m || (m = n("Promise"))).all([o("WAFlowsActionHandlerUtils").executeDataExchange(t, a, i, e.getFlowInitData, e), m.all(s == null ? void 0 : s.map(function(n) {
							var r = t.getScreenExternalData(n)[0];
							if (r !== void 0) return v = r.type.toString(), o("WAFlowsShoppingExternalDataChannelUtils").executeMetaCatalogRequest(r, l, p, n, e, h, t).then(function(e) {
								return _.set(n, [r.name.toString(), e]);
							});
						}))]), R = S[0], L = S[1];
						y(o("WAFlowsWELJActionCreators").createWELJUpdateExternalDataAction(_, v)), g({
							eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDataExchangeDuringNavigation,
							payload: R,
							hasCallback: !1
						});
						var E = R.data, k = R.screen;
						if (C = k, typeof E != "object") throw new (o("WAFlowsError")).WAFlowsInvalidDataChannelResponseError(o("WAFlowsWELJValidationUtils").WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage());
						var I = E != null ? E : {}, T = I.error_message, D = I.extension_message_response, x = babelHelpers.objectWithoutPropertiesLoose(I, c);
						if (b = T != null ? T : "", C === "SUCCESS") return yield e.terminateCloseFlow(y, d, D, t, f, g), {
							nextScreen: C,
							errorMessageStr: b
						};
						o("WAFlowsActionHandlerUtils").validateRoutingModel(C, d, t, "data_exchange", x, e.configuration), y(o("WAFlowsWELJActionCreators").createWELJUpdate3POrNavigateDataAction(k, E != null ? E : {})), C = k;
					} catch (t) {
						e.logAndThrowError(r("getErrorSafe")(t));
					}
					return {
						nextScreen: C,
						errorMessageStr: b
					};
				});
				return function(e) {
					return y.apply(this, arguments);
				};
			})();
		}, a.executeSequentialExternalRequests = function(t, r, a, i, l, s, u, c, m, p) {
			var e = this, _ = l, f = "";
			return (function() {
				var g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, g) {
					r.payload.action !== "INIT" && n({
						name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
						payload: { isLoading: !0 }
					});
					var h = yield o("WAFlowsActionHandlerUtils").executeDataExchange(t, r, a, e.getFlowInitData, e);
					e.invoke({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDataExchangeDuringNavigation,
						payload: h,
						hasCallback: !1
					});
					var y = h.data, C = h.screen;
					if (_ = C, typeof y != "object") throw new (o("WAFlowsError")).WAFlowsInvalidDataChannelResponseError(o("WAFlowsWELJValidationUtils").WELJ_BUSINESS_ERROR_MESSAGES.getInvalidDataChannelResponseErrorMessage());
					var b = y != null ? y : {}, v = b.error_message, S = b.extension_message_response, R = babelHelpers.objectWithoutPropertiesLoose(b, d);
					if (f = v != null ? v : "", _ === "SUCCESS") return yield e.terminateCloseFlow(n, s, S, t, m, e.invoke), {
						nextScreen: _,
						errorMessageStr: f
					};
					o("WAFlowsActionHandlerUtils").validateRoutingModel(l, s, t, "data_exchange", R, e.configuration), n(o("WAFlowsWELJActionCreators").createWELJUpdate3POrNavigateDataAction(C, y != null ? y : {}));
					var L = t.getScreenExternalData(C)[0];
					if (L !== void 0) {
						var E = yield o("WAFlowsShoppingExternalDataChannelUtils").executeMetaCatalogRequest(L, i, u, l, e, p, t);
						c.set(C, [L.name.toString(), E]), n(o("WAFlowsWELJActionCreators").createWELJUpdateExternalDataAction(c, L.type));
					}
					return {
						nextScreen: _,
						errorMessageStr: f
					};
				});
				return function(e, t) {
					return g.apply(this, arguments);
				};
			})();
		}, a.logAndThrowError = function(t) {
			throw t;
		}, a.externalDataExchangeActionHandler = function(t, a, i, l, s, u, c, d) {
			var e = this;
			return l === void 0 && (l = !1), d === void 0 && (d = !1), (function() {
				var m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, m, p) {
					var _, f, g, h = m().external, y = p(), C = (_ = y.getBizJid()) != null ? _ : "", b = y.getRoutingModel()[t.screen], v = (f = b == null ? void 0 : b.find(function(e) {
						var t;
						return (t = y.getScreenExternalData(e)[0]) == null ? void 0 : t.isBindingValue;
					})) != null ? f : !1, S = new Map(), R = t.screen, L = "", E = !0, k = "";
					if (l) try {
						if (c) {
							var I;
							n(o("WAFlowsWELJActionCreators").createWELJUpdate3POrNavigateDataAction(t.screen, (I = c == null ? void 0 : c.payload) != null ? I : {}));
						}
						var T = yield e.executeOnlyExternalDataExchangeRequest(t, y, h, m(), C, S, s, d)(n);
						T != null && (L = T.nextScreen, E = T.updateBrowserHistory);
					} catch (t) {
						e.logAndThrowError(r("getErrorSafe")(t));
					}
					else if (!v && i && (i == null || (g = i.payload) == null ? void 0 : g.action) !== "INIT") {
						var D = yield e.executeParallelExternalRequests(y, i, h, m(), b, L, R, C, S, u, e.invoke, d)(n);
						L = D.nextScreen, k = D.errorMessageStr;
					} else if (i) try {
						var x = yield e.executeSequentialExternalRequests(y, i, h, m(), L, R, C, S, u, d)(n, m);
						L = x.nextScreen, k = x.errorMessageStr;
					} catch (t) {
						e.logAndThrowError(r("getErrorSafe")(t));
					}
					if (c) n(e.navigateActionHandler(c, a));
					else {
						var $ = o("WAFlowsWELJActionCreators").createWELJNavigateAction(R, L, {}, E, o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE);
						n(e.navigateActionHandler($, a, !1));
					}
					n({
						name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
						payload: { isLoading: !1 }
					}), k !== "" && typeof k == "string" && o("WAFlowsSnackbarUtils").showSnackbar({ text: k }, e.invoke);
				});
				return function(e, t, n) {
					return m.apply(this, arguments);
				};
			})();
		}, a.catalogCartItemsUpdateActionHandler = function(t, r) {
			var e = this;
			return (function() {
				var o = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, o, a) {
					var i, l = o().external, s = a(), u = (i = s.getBizJid()) != null ? i : "", c = new Map();
					yield e.executeOnlyExternalDataExchangeRequest(t, s, l, o(), u, c, r, !1)(n);
				});
				return function(e, t, n) {
					return o.apply(this, arguments);
				};
			})();
		}, a.updateDataActionHandler = function(t, n) {
			return function(e, r, a) {
				var i, l = a(), s = r(), u = o("WAFlowsStateParser").parseActionPayload(s.external, t, (i = n.payload) != null ? i : {}, l);
				Array.isArray(u) || (o("WAFlowsActionHandlerUtils").validateSchemaOrThrowError(t, n.name, u, l), e(o("WAFlowsWELJActionCreators").createWELJUpdateDataAction(t, u)));
			};
		}, a.copyTextActionHandler = function(t) {
			var e = this;
			return function(n, r, o) {
				var a = o().getFlowId();
				e.copyTextActionInvoke(t, a, e.invoke)();
			};
		}, a.copyTextActionInvoke = function(t, r, a) {
			return (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield a({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsCopyText,
						payload: {
							flow_id: r,
							text: t.textToCopy,
							notification_title: t.notificationTitle
						},
						hasCallback: !0
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})();
		}, a.downloadResponseActionHandler = function(t) {
			var e = this;
			return function(n, r, o) {
				e.downloadResponseActionInvoke(t, e.invoke)();
			};
		}, a.downloadResponseActionInvoke = function(t, r) {
			return (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield r({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsDownloadResponse,
						payload: { flow_id: t.flowId },
						hasCallback: !1
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})();
		}, t;
	})();
	l.WAFlowsActionHandler = p;
}), 98);
