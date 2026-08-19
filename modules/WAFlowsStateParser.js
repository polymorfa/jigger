__d("WAFlowsStateParser", [
	"invariant",
	"ReactRouterDOM",
	"WAFlowsASTParser",
	"WAFlowsActionHandlerTypes",
	"WAFlowsConditionalRenderingParser",
	"WAFlowsDomainUtils",
	"WAFlowsDynamicDataUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsGet",
	"WAFlowsMediaPicker.react",
	"WAFlowsMeta",
	"WAFlowsNoop",
	"WAFlowsSet",
	"WAFlowsStateProvider.react",
	"WAFlowsTypeGuards",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJValidationUtils",
	"WebDriverConfig",
	"WhatsAppFlowsTemplateComponentType",
	"filterObject",
	"justknobx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = (u || (u = o("react"))).useContext, d = {
		ERROR_MESSAGES: "errorMessages",
		INIT_VALUES: "initValues"
	}, m = (e = {}, e[d.ERROR_MESSAGES] = "error-messages", e[d.INIT_VALUES] = "init-values", e), p = new Set(Object.values(r("WhatsAppFlowsTemplateComponentType"))), _ = {
		"on-click-action": "onClick",
		"on-select-action": "onSelect",
		"on-unselect-action": "onUnselect",
		"on-add-to-cart-click-action": "onAddToCartClick",
		"on-remove-from-cart-click-action": "onRemoveFromCartClick",
		"on-view-cart-click-action": "onViewCartClick",
		"on-cta-click-action": "onCtaClick",
		"on-add-more-click-action": "onAddMoreClick",
		"on-coupon-click-action": "onCouponClick",
		"on-last-level-click-action": "onLastLevelClick",
		"on-item-click-action": "onItemClick",
		"on-transition-action": "onTransition"
	}, f = { else: "elseStatement" };
	function g(e) {
		return typeof e == "string" && p.has(e) != null;
	}
	function h(e) {
		return e.startsWith("on-");
	}
	function y(e) {
		return e.replace(/-./g, function(e) {
			return e[1].toUpperCase();
		});
	}
	function C(e) {
		return e === "else" ? f[e] : e;
	}
	function b(e, t, n) {
		if (e != null) {
			if (n === "any") return r("WAFlowsGet")(e, "" + t);
			var o = e[t];
			return n === "array" ? Array.isArray(o) ? o : void 0 : typeof o == "object" && o != null ? o : void 0;
		}
	}
	function v(e, t) {
		var n = o("WAFlowsTypeGuards").isString(e) && o("WAFlowsDynamicDataUtils").isLocalBindingValue(e) ? "${screen." + t + "." + o("WAFlowsDynamicDataUtils").getDataKey(e) + "}" : e;
		return n;
	}
	function S(e, t, n, r) {
		var a = o("WAFlowsStateProvider.react").useWAFlowsState();
		return t != null || s(0, 72447), I(v(e, t), a.external, t, n, r);
	}
	function R(e, t, n, a) {
		var i, l, u = o("WAFlowsStateProvider.react").useWAFlowsState(), d = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext), m = o("ReactRouterDOM").useHistory(), p = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = p.env, f = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), g = f.actionOverrides, y = f.flowInitData, C = y[0], b = (i = C == null ? void 0 : C.environment.is_flow_interactive) != null ? i : !0;
		e != null || s(0, 72447), typeof t == "object" || s(0, 72237);
		var v = N(r("filterObject")(t, function(e, t) {
			return !h(t);
		}), e, u.external, a, n);
		Array.isArray(v.dataSource) && (v.dataSource = k(v.dataSource, e, d, m, n, _, g, b)), Array.isArray(v.listItems) && (v.listItems = k(v.listItems, e, d, m, n, _, g, b));
		var S = E(r("filterObject")(t, function(e, t) {
			return h(t);
		}), e, d, m, n, _, g, b), R = {
			screenID: e,
			enabled: u.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY ? typeof v.enabled == "boolean" ? v.enabled : !0 : !1,
			isLoading: u.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.INITIALIZING,
			isOverlayVisible: u.internal.isOverlayVisible,
			isNavBarContextMenuVisible: u.internal.isNavBarContextMenuVisible,
			version: n == null ? void 0 : n.getVersion(),
			isFlowInDraft: (l = n == null ? void 0 : n.isDraft()) != null ? l : !1
		};
		return babelHelpers.extends({}, v, S, R);
	}
	var L = [o("WAFlowsActionHandlerTypes").WELJActionType.UPDATE_DATA, o("WAFlowsActionHandlerTypes").WELJActionType.OPEN_URL];
	function E(e, t, n, o, a, i, l, u) {
		u === void 0 && (u = !0);
		var c = {};
		return e == null || typeof e != "object" ? c : Object.entries(e).reduce(function(e, c) {
			var d = c[0], m = c[1];
			if (!h(d)) return e;
			var p = _[d];
			return p != null || s(0, 72300), u ? a != null && a.getIsShoppingFlow() ? (e[p] = w(a, t, n, o, m, void 0, void 0, i, l), e) : (e[p] = M(m, t, n, o, i, l), e) : L.includes(m.name) ? (e[p] = M(m, t, n, o, i, l), e) : (e[p] = r("WAFlowsNoop"), e);
		}, {});
	}
	function k(e, t, n, r, o, a, i, l) {
		return l === void 0 && (l = !0), Array.isArray(e) ? e.map(function(e) {
			return e == null || typeof e != "object" ? e : Object.entries(e).reduce(function(s, u) {
				var c = u[0], d = u[1];
				if (!h(c)) return s[c] = d, s;
				var m = E(e, t, n, r, o, a, i, l);
				return babelHelpers.extends({}, s, m);
			}, {});
		}) : e;
	}
	function I(e, t, n, a, i) {
		var l = o("WAFlowsDynamicDataUtils").isBindingValue(e) || o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e);
		if (l && o("WAFlowsTypeGuards").isString(e)) {
			if (W(e, i)) return o("WAFlowsASTParser").parseFlowDynamicExpression(e, n, t, i);
			var s = o("WAFlowsDynamicDataUtils").getDataKey(v(e, n)), u = r("WAFlowsGet")(t, s, a);
			return u;
		} else return e;
	}
	function T(e, t, n, r) {
		function o(n, o, a) {
			var i = typeof o == "string" && h(o);
			return a == null || i ? n[o] = a : typeof a == "object" ? n[o] = T(e, t, a, r) : n[o] = I(a, e, t, void 0, r), n;
		}
		return Array.isArray(n) ? n.reduce(function(e, t, n) {
			return o(e, n, t);
		}, []) : Object.entries(n).reduce(function(e, t) {
			var n = t[0], r = t[1];
			return o(e, n, r);
		}, {});
	}
	function D(e, t, n, a) {
		if (Array.isArray(t)) return t;
		var i = new Set([
			"media_preview_image",
			"upload_progress",
			"media_size_bytes",
			"doc_page_count",
			"upload_state",
			"error_code",
			"is_retryable"
		]), l = new Set([
			"direct_path",
			"mime_type",
			"file_length",
			"media_type"
		]);
		i.forEach(function(e) {
			return l.add(e);
		});
		var s = new Set(["media_key_timestamp", "media_key"]), u = new Set([
			"hmac",
			"cdn_url",
			"hmac_key",
			"encryption_key",
			"iv"
		]);
		i.forEach(function(e) {
			return u.add(e);
		});
		var c = n.nativeComponentInDataExchMeta;
		c.set(a, new Map());
		var d = {}, m = {}, p = 0, _ = function() {
			var n = t[g];
			if (n === null || typeof n != "object" || !Object.prototype.hasOwnProperty.call(n, "__wa_flows_native_component_hint__") || !Object.prototype.hasOwnProperty.call(n, "__wa_flows_uploaded_media__") || n.__wa_flows_native_component_hint__ !== o("WAFlowsMediaPicker.react").NATIVE_COMPONENTS_ID) return 0;
			var r = n.__wa_flows_uploaded_media__, a = [], i = {
				__wa_flows_type_hint: "media",
				items: []
			};
			switch (e) {
				case o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE:
					r.forEach(function(e, t) {
						var n = "media_" + p;
						p++, d[n] = e.file_length, m[n] = e.mime_type;
						var r = $(e, l);
						r.encryption_metadata = $(r.encryption_metadata, s), a[t] = r;
					}), t[g] = a;
					break;
				case o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE:
					r.forEach(function(e, t) {
						var n = "media_" + p;
						p++, d[n] = e.file_length, m[n] = e.mime_type;
						var r = x(e);
						r = $(r, u), a[t] = r;
					}), i.items = a, t[g] = i;
					break;
				default:
			}
		}, f;
		for (var g in t) f = _();
		var h = new Map([[r("WAFlowsMeta").MEDIA_MIME_TYPE_PROP, JSON.stringify(m)], [r("WAFlowsMeta").MEDIA_SIZE_BYTES_PROP, JSON.stringify(d)]]);
		return c.set(a, h), t;
	}
	function x(e) {
		var t = {};
		for (var n in e) if (e[n] !== null && typeof e[n] == "object") for (var r in e[n]) r === "encrypted_hash" ? t.enc_hash = e[n][r] : t[r] = e[n][r];
		else t[n] = e[n];
		return t;
	}
	function $(e, t) {
		return e === null || typeof e != "object" ? e : Object.keys(e).reduce(function(n, r) {
			return t.has(r) || (n[r] = e[r]), n;
		}, {});
	}
	function P(e, t, n, a, i, l, s, u) {
		if (o("WAFlowsTypeGuards").isString(t) && h(t)) return o("WAFlowsWELJValidationUtils").isObject(e) && o("WAFlowsDynamicDataUtils").isExternalUrlValue(e) ? s(e, n, a) : e;
		if (o("WAFlowsTypeGuards").isString(t) && o("WAFlowsTypeGuards").isString(e) && o("WAFlowsConditionalRenderingParser").isConditionalRenderingValue(t)) return o("WAFlowsConditionalRenderingParser").parseConditionalRendering(e, i, l, a);
		if (o("WAFlowsTypeGuards").isString(e) && (o("WAFlowsDynamicDataUtils").isBindingValue(e) || o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e))) {
			if (W(e, a)) return o("WAFlowsASTParser").parseFlowDynamicExpression(e, i, l, a);
			var c = o("WAFlowsDynamicDataUtils").getDataKey(v(e, i)), d = b(n, t, "any");
			return r("WAFlowsGet")(l, c, d);
		}
		if (Array.isArray(e)) {
			var m = b(n, t, "array");
			return u(e, m, a);
		}
		if (e != null && typeof e == "object") {
			var p = b(n, t, "object");
			return s(e, p, a);
		}
		return e;
	}
	function N(e, t, n, o, a) {
		e != null && typeof e == "object" || s(0, 72237), o != null && (typeof o != "object" || s(0, 72238));
		function i(e, o, a) {
			return Object.entries(e).reduce(function(s, u) {
				var c = u[0], d = u[1], m = r("WAFlowsGet")(o != null ? o : {}, c), p = !h(c) && g(e == null ? void 0 : e.type), _ = C(c), f = p ? y(_) : _;
				return s[f] = P(d, c, m, a, t, n, i, l), s;
			}, {});
		}
		function l(e, o, a) {
			return e.map(function(e, s) {
				var u = r("WAFlowsGet")(o != null ? o : [], "" + s);
				return P(e, s, u, a, t, n, i, l);
			});
		}
		return i(e, o, a);
	}
	function M(e, t, n, a, i, l) {
		switch (e.name) {
			case o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE: return function(r) {
				var s;
				r === void 0 && (r = {});
				var u = o("WAFlowsWELJActionCreators").createDataExchangeAction(t, O((s = e == null ? void 0 : e.payload) != null ? s : {}, B(r)));
				n(l.dataExchangeActionHandler(u, a, !0, i));
			};
			case o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE: return function(r) {
				var i;
				r === void 0 && (r = {});
				var s = o("WAFlowsWELJActionCreators").createWELJNavigateAction(t, e.next.name, O((i = e == null ? void 0 : e.payload) != null ? i : {}, B(r)), !0);
				n(l.navigateActionHandler(s, a));
			};
			case o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE: return function(r) {
				var a;
				r === void 0 && (r = {}), n(l.terminateFlowActionHandler(t, O((a = e == null ? void 0 : e.payload) != null ? a : {}, B(r)), i, !0, o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE));
			};
			case o("WAFlowsActionHandlerTypes").WELJActionType.UPDATE_DATA: return function() {
				n(l.updateDataActionHandler(t, e));
			};
			case o("WAFlowsActionHandlerTypes").WELJActionType.OPEN_URL: {
				var s, u = function() {};
				return u.isOpenUrlAction = !0, u.url = (s = e == null ? void 0 : e.url) != null ? s : "", u;
			}
			case o("WAFlowsActionHandlerTypes").WELJActionType.COPY_TEXT: return function() {
				n(l.copyTextActionHandler(e));
			};
			case o("WAFlowsActionHandlerTypes").WELJActionType.DOWNLOAD_RESPONSES: return function() {
				n(l.downloadResponseActionHandler(e));
			};
			default: return r("WAFlowsNoop");
		}
	}
	function w(e, t, n, a, i, l, s, u, c) {
		return s === void 0 && (s = !1), i.name === o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE ? function() {
			var e;
			return n(c.terminateFlowActionHandler(t, (e = i == null ? void 0 : i.payload) != null ? e : {}, u, !0, o("WAFlowsActionHandlerTypes").WELJActionType.COMPLETE));
		} : i.name === o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE ? function(r) {
			var d, m;
			r === void 0 && (r = {});
			var p = l != null ? l : o("WAFlowsWELJActionCreators").createExternalDataExchangeAction(t, (d = e == null ? void 0 : e.getScreenExternalData(t)) != null ? d : []), _ = o("WAFlowsWELJActionCreators").createDataExchangeAction(t, O((m = i == null ? void 0 : i.payload) != null ? m : {}, B(r)));
			n(c.externalDataExchangeActionHandler(p, a, _, s, void 0, u));
		} : i.name === o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE ? function(r) {
			var s, d;
			r === void 0 && (r = {});
			var m = l != null ? l : o("WAFlowsWELJActionCreators").createExternalDataExchangeAction(i.next.name, (s = e == null ? void 0 : e.getScreenExternalData(i.next.name)) != null ? s : []), p = o("WAFlowsWELJActionCreators").createWELJNavigateAction(t, i.next.name, O((d = i == null ? void 0 : i.payload) != null ? d : {}, B(r)), !0);
			n(c.externalDataExchangeActionHandler(m, a, null, !0, void 0, u, p));
		} : r("WAFlowsNoop");
	}
	function A(e, t) {
		var n = function(r, a, i) {
			return r == null || (typeof r == "object" ? Object.keys(r).forEach(function(e) {
				n(r[e], a.concat(e), i);
			}) : typeof r == "string" && o("WAFlowsDynamicDataUtils").isBindingValue(r) && i.push({
				key: a.join("."),
				binding: v(r, t)
			})), i;
		};
		return n(e, [], []);
	}
	function F(e, t) {
		var n = {};
		for (var a of t) {
			var i = a.binding, l = a.key, s = r("WAFlowsGet")(e, o("WAFlowsDynamicDataUtils").getDataKey(i));
			r("WAFlowsSet")(n, l, s);
		}
		return n;
	}
	function O(e, t) {
		var n = [e, t];
		return n.reduce(function(e, t) {
			return Object.keys(t).forEach(function(n) {
				var r = e[n], a = t[n];
				o("WAFlowsWELJValidationUtils").isObject(r) && o("WAFlowsWELJValidationUtils").isObject(a) ? e[n] = O(r, a) : e[n] = a;
			}), e;
		}, {});
	}
	function B(e) {
		return e != null && e.constructor.name === "Object" ? e : {};
	}
	function W(e, t) {
		var n = t == null ? void 0 : t.getVersion();
		return o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e) && (o("WebDriverConfig").isJestE2ETestRun || o("WAFlowsDomainUtils").isOndemandFlowsUrl() || o("WAFlowsDomainUtils").isInternFlowsUrl() || r("justknobx")._("384") && n != null && n >= 600);
	}
	l.WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS = d, l.WA_FLOWS_TRANSPILER_CONTROLLED_FIELDS_FLOW_JSON_MAPPING = m, l.usePropertyValue = S, l.usePropertyValues = R, l.parsePropertyValue = I, l.parseActionPayload = T, l.transformNativeComponentsValue = D, l.parseAndMapWELJProperties = N, l.getDynamicFieldsFromObject = A, l.getDynamicFieldsValuesFromSource = F, l.mergeDeep = O;
}), 98);
