__d("WAFlowsUseAsyncReducer", [
	"invariant",
	"Promise",
	"ReactRouterDOM",
	"WAFlowsActionHandlerTypes",
	"WAFlowsCache",
	"WAFlowsCartUtils.react",
	"WAFlowsDecodeFlowActionData",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsError",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsScreenUtils",
	"WAFlowsShoppingCartStateUtils",
	"WAFlowsShoppingJSBridges",
	"WAFlowsShoppingStateUtils",
	"WAFlowsStateErrorHandling",
	"WAFlowsStateProvider.react",
	"WAFlowsTypes",
	"WAFlowsWELJActionCreators",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useAsyncEffect"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = {
		external: {},
		internal: {
			isDraft: !1,
			status: o("WAFlowsStateProvider.react").flowJSONLoadState.INITIALIZING,
			isOverlayVisible: !1,
			isNavBarContextMenuVisible: !1,
			isDatePickerPanelVisible: !1,
			screenHistory: [],
			navBarConfig: {},
			screenInternalData: {}
		}
	};
	function h(e, t, n, r, a, i, l) {
		var s = l === !0, u = o("WAFlowsStateErrorHandling").showSnackBarError(n) && !s;
		o("WAFlowsStateErrorHandling").propagateErrorTo3pDataChannel(r, n, a, i), o("WAFlowsStateErrorHandling").logErrorToServer(n, a, !u, r), a.onError(n), o("WAFlowsStateErrorHandling").showErrorOnUI(e, t, n, r, u, a);
	}
	function y(e, t, n, r, a, i, l, s) {
		var u = (t == null ? void 0 : t.internal.flowActionPayload) !== (s == null ? void 0 : s.environment.flow_action_payload) || (t == null ? void 0 : t.internal.flowAction) !== (s == null ? void 0 : s.environment.flow_action), c = s == null ? void 0 : s.environment.surface_request;
		t === null || Object.keys(t).length === 0 || c !== void 0 && String(c).toLowerCase() === String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) || o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(t) || u ? L(e, n, r, a, i, l) : v(t, n, r, l, i.platform);
	}
	function C(e, t, n, r, o, a, i, l) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l, s) {
			var u, c = s.flowInitData, d = c[0], m = d == null ? void 0 : d.environment.surface_request;
			o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(t) || (yield o("WAFlowsShoppingJSBridges").storeShoppingFlowContext(s.invoke));
			var p = o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(t) ? null : yield o("WAFlowsShoppingJSBridges").getShoppingCartStateFromNative(s.invoke, i.isJestTesting);
			if (t === null || Object.keys(t).length === 0 || m !== void 0 && String(m).toLowerCase() === String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) || o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(t) || o("WAFlowsShoppingStateUtils").isShoppingIntegratedShoppingMessageFlow(t)) {
				var _;
				e.current = (_ = o("WAFlowsShoppingCartStateUtils").getUpdatedStateWithShoppingCart(e.current, p, r, l, a, i)) != null ? _ : e.current;
			}
			y(e.current, (u = o("WAFlowsShoppingCartStateUtils").getUpdatedStateWithShoppingCart(t, p, r, l, a, i)) != null ? u : t, n, r, a, i, l, d);
		}), b.apply(this, arguments);
	}
	function v(e, t, n, r, a) {
		var i, l, s = e.internal.screenHistory, u = (i = s[s.length - 2]) != null ? i : "", c = (l = s[s.length - 1]) != null ? l : "";
		s.slice(0, s.length - 1).forEach(function(e, n) {
			return o("WAFlowsScreenUtils").pushScreenToHistory(e, s[n - 1], t);
		}), n({
			name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_RESTORE_STATE,
			payload: e
		});
		var d = o("WAFlowsWELJActionCreators").createWELJNavigateAction(u, c, e.external[c].data);
		n(r.navigateActionHandler(d, t, !0, !0, !0, a));
	}
	function S(e, t, n, r, a, i) {
		var l, s, u = e == null ? void 0 : e.data, c = u == null ? void 0 : u.source;
		c != null && t(o("WAFlowsWELJActionCreators").createShoppingUpdateSourceAction(String(c)));
		var d = u == null ? void 0 : u.linkout_urls;
		if (d) {
			var m = new Map(Object.entries(d != null ? d : {}).map(function(e) {
				var t = e[0], n = e[1];
				return [t, String(n)];
			}));
			t(o("WAFlowsWELJActionCreators").createShoppingOffsiteCheckoutUpdateLinkoutUrlsAction(m));
		}
		var p = u == null || (l = u.features) == null ? void 0 : l.coupons, _ = u == null || (s = u.features) == null ? void 0 : s.shipping, f = u == null ? void 0 : u.cart;
		c === o("WAFlowsShoppingStateUtils").SOURCE_INTEGRATED_SHOPPING && (t(o("WAFlowsWELJActionCreators").createShoppingIntegratedShoppingUpdateStateAction(!!p, !!_)), o("WAFlowsCartUtils.react").syncIntegratedShoppingCartWithStateCart(i.getScreenIdByLayoutType(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART), t, n, r, a, i, f, null, !1, !1));
		var g = c === o("WAFlowsShoppingStateUtils").SOURCE_OFFSITE_CHECKOUT && d !== null && (d == null ? void 0 : d.base_checkout_url) != null, h = c === o("WAFlowsShoppingStateUtils").SOURCE_INTEGRATED_SHOPPING;
		(g || h) && !r.isJestTesting && t(o("WAFlowsWELJActionCreators").createShoppingMMUpdateItemDetailData(i.getShoppingItemDetailScreenId(), u));
	}
	function R(e, t, n, a, i, l, u) {
		var c, d, m, p, _ = r("WAFlowsDecodeFlowActionData")(e);
		i.getIsShoppingFlow() && t !== void 0 && String(t).toLowerCase() === String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) && (_ = babelHelpers.extends({}, _, { screen: i.getShoppingCartScreenId() })), ((c = _) == null ? void 0 : c.screen) != null || s(0, 80735);
		var f = o("WAFlowsWELJActionCreators").createWELJNavigateAction("", (d = _) == null ? void 0 : d.screen, (m = (p = _) == null ? void 0 : p.data) != null ? m : {}, !0);
		if (i.getIsShoppingFlow() && S(_, a, n, l, u, i), i.getIsShoppingFlow() && !l.isJestTesting) {
			var g, h, y = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction((g = _) == null ? void 0 : g.screen, i.getScreenExternalData((h = _) == null ? void 0 : h.screen));
			a(u.externalDataExchangeActionHandler(y, n, null, !0, void 0, l, f));
		} else a(u.navigateActionHandler(f, n, void 0, void 0, void 0, l.platform));
	}
	function L(e, t, n, a, i, l) {
		e.internal.status !== o("WAFlowsStateProvider.react").flowJSONLoadState.READY && l.getFlowInitData().then(function(e) {
			var r;
			if (e != null || s(0, 72522), e.environment.is_flow_interactive === !0) {
				var u = e.environment, c = u.flow_action, d = c === void 0 ? "data_exchange" : c, m = u.flow_action_payload, p = u.surface_request;
				if (d === o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE) {
					var _ = "";
					a.getIsShoppingFlow() && p !== void 0 && String(p).toLowerCase() === String(o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType.FAB_SHOPPING) && (_ = a.getShoppingCartScreenId());
					var f = [
						_,
						{},
						!0
					], g = o("WAFlowsWELJActionCreators").createDataExchangeAction.apply(void 0, f);
					if (a.getIsShoppingFlow()) {
						var h = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction("", a.getScreenExternalData(""));
						n(l.externalDataExchangeActionHandler(h, t, g, !1, void 0, i));
					} else n(l.dataExchangeActionHandler(g, t, !0, i));
				} else d === o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE && R(m, p, t, n, a, i, l);
			}
			if (((r = e.environment) == null ? void 0 : r.is_flow_interactive) === !1 && a.getIsShoppingFlow()) {
				var y = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction("", []);
				n(l.externalDataExchangeActionHandler(y, t, null, !0, void 0, i));
			}
		}).catch(function(t) {
			return h(n, e, r("getErrorSafe")(t), a, l);
		});
	}
	function E(e) {
		return e instanceof o("WAFlowsError").WAFlowsDataChannelError && e.getWAFlowErrorCode() === o("WAFlowsError").WAFlowsErrorCodes.NO_INTERNET_CONNECTION;
	}
	function k(t, r, o, a, i, l) {
		try {
			var s = t(r, o, a, i);
			s instanceof (e || (e = n("Promise"))) && s.catch(l);
		} catch (e) {
			l(e);
		}
	}
	function I(e, t, n, r) {
		if (+r.getVersion() >= 120 && e === !1 && t != null && t.environment.flow_token) {
			var a, i = t.logging.qplLogging, l = t == null || (a = t.environment) == null ? void 0 : a.surface_request;
			if (i != null || s(0, 76723), n.internal.screenError === void 0) o("WAFlowsCache").updateStateCache(r, n, i.qpl_message_id, l);
			else {
				var u, c = n.internal.screenError.error;
				if (c && E(c)) return;
				o("WAFlowsCache").clearStateCache((u = r.getFlowId()) != null ? u : "", i.qpl_message_id, l);
			}
		}
	}
	function T(e, t, n, r, o, a, i, l, s) {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l, u, c) {
			try {
				var d, m;
				yield o("WAFlowsCache").clearExpiredCachedStates();
				var p = u == null || (d = u.logging.qplLogging) == null ? void 0 : d.qpl_message_id, _ = u == null ? void 0 : u.environment.surface_request;
				p != null || s(0, 76749);
				var f = yield o("WAFlowsCache").getStateFromCache((m = t.current.getFlowId()) != null ? m : "", p, _);
				c.getIsShoppingFlow() && o("WAFlowsShoppingJSBridges").isNativeCartIntegrationEnabled(c) ? yield C(e, f, n, r, t.current, a, i, l) : y(e.current, f, n, r, t.current, a, i, u);
			} catch (e) {}
		}), D.apply(this, arguments);
	}
	function x(e, t, a, i) {
		var l, u = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), c = u.flowInitData, y = c[0], C = y == null ? void 0 : y.environment.is_flow_interactive, b = f(function() {
			return i ? i(a) : a != null ? a : babelHelpers.extends({}, g);
		}), v = b[0], S = b[1], R = m(o("WAFlowsStateProvider.react").FlowMetaContext);
		R != null || s(0, 72745);
		var E = _(v), D = _(R), x = o("ReactRouterDOM").useHistory(), $ = o("WAFlowsEnvContext.react").useWAFlowsEnv(), P = $.env, N = u.actionOverrides, M = function() {
			return E.current;
		}, w = function() {
			return D.current;
		}, A = function(t) {
			return [t.name].includes(o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_IS_SCROLLING);
		}, F = d(function n(a) {
			if (typeof a == "function") {
				var i = E.current.internal, l = i.screenHistory, s = i.status, c = l.length > 0, d = s === o("WAFlowsStateProvider.react").flowJSONLoadState.INITIALIZING || !c;
				k(a, n, M, w, u, function(e) {
					return h(n, E.current, r("getErrorSafe")(e), D.current, N, y, d);
				});
			} else E.current = e(E.current, a), A(a) || I(t, y, E.current, D.current), S(E.current);
		}, [
			N,
			y,
			e,
			t
		]);
		p(function() {
			D.current = R;
		}, [v, R]);
		var O = (y == null ? void 0 : y.environment) || {}, B = O.flow_action, W = O.flow_action_payload;
		return p(function() {
			E.current = babelHelpers.extends({}, E.current, { internal: babelHelpers.extends({}, E.current.internal, {
				flowActionPayload: W,
				flowAction: B
			}) }), S(E.current);
		}, [W, B]), r("useAsyncEffect")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e;
			(y != null && (e = y.logging.qplLogging) != null && e.qpl_message_id || P.hostPlatform === "web_tooling") && (+D.current.getVersion() < 120 || t ? L(E.current, x, F, D.current, P, N) : yield T(E, D, x, F, P, N, u, y, R));
		}), [
			t,
			y == null || (l = y.logging.qplLogging) == null ? void 0 : l.qpl_message_id,
			D.current.getFlowId(),
			C
		]), [v, F];
	}
	l.default = x;
}), 98);
