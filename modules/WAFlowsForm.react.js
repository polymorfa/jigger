__d("WAFlowsForm.react", [
	"invariant",
	"WAFlowsActionHandlerTypes",
	"WAFlowsComponentTemplate.react",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsFormUtils",
	"WAFlowsFormValidationUtils",
	"WAFlowsHorizontalDivider.react",
	"WAFlowsLayoutUtils",
	"WAFlowsSingleColumnLayoutTemplate.react",
	"WAFlowsStateProvider.react",
	"WAFlowsTypeGuards",
	"WAFlowsTypes",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useDeepEqualMemo"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useLayoutEffect, g = d.useMemo, h = d.useRef, y = d.useState;
	function C(e, t) {
		var n;
		return t[e] ? t : babelHelpers.extends({}, t, (n = {}, n[e] = !0, n));
	}
	function b(e, t) {
		if (t[e] != null) {
			var n;
			return babelHelpers.extends({}, t, (n = {}, n[e] = void 0, n));
		}
		return t;
	}
	function v(e) {
		return e.flatMap(function(e) {
			return e.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM && e.children ? e.children : [e];
		});
	}
	function S(t, n, a, i, l) {
		var s = o("WAFlowsFormUtils").isHorizontalDividerVisible(a, n, l), u = n > 0 ? o("WAFlowsLayoutUtils").WA_FLOWS_TEXT_COMPONENTS.has(a[n - 1].type) : s;
		return c.jsxs("div", { children: [s === !0 && c.jsx(o("WAFlowsHorizontalDivider.react").WAFlowsHorizontalDivider, {
			containerXStyle: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginBottom12, o("WDSMargins.stylex").wdsMargins.marginTop16, o("WDSPaddings.stylex").wdsPaddings.paddingTop12),
			xstyle: "xdj266r xat24cr"
		}, t.type + "_" + n + "_divider"), c.jsx(r("WAFlowsComponentTemplate.react"), {
			screenID: i,
			component: t,
			hasTextPredecessor: u
		}, t.type + "_" + n)] }, t.type + "_" + n + "_div");
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t;
		return Array.from((t = e == null ? void 0 : e.elements) != null ? t : []).reduce(function(e, t) {
			return (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && t.id != null && e.push(t), e;
		}, []);
	}
	function L(e, t, n, r, a, i, l) {
		var s = n == null ? void 0 : n[e], u = r == null ? void 0 : r[e], c = a !== e && i[e] && l[e];
		if (c && o("WAFlowsFormValidationUtils").existsError(s)) return s;
		if (o("WAFlowsFormValidationUtils").existsError(u)) {
			if (typeof u != "object" || u === null || !o("WAFlowsTypeGuards").isObjectWithStringProperties(u) || t && !Array.isArray(u)) return u;
			var d = Object.keys(u);
			return u[d[0]];
		}
	}
	function E(e) {
		var t = e.children, n = e.name, a = e.screenID, i = o("WAFlowsEnvContext.react").useWAFlowsEnv(), l = i.env, u = r("useDeepEqualMemo")(v(t)), d = p(o("WAFlowsStateProvider.react").FlowStateDispatchContext), E = o("WAFlowsStateProvider.react").useWAFlowsState(), k = E.internal.screenInternalData[a], I = k.formErrorMessages, T = k.formInitData, D = y(o("WAFlowsFormValidationUtils").getInitValues(E, a, T)), x = D[0], $ = D[1], P = h(x), N = y({}), M = N[0], w = N[1], A = y(function() {
			return o("WAFlowsFormValidationUtils").getInitErrors(t, o("WAFlowsFormValidationUtils").getInitValues(E, a, T));
		}), F = A[0], O = A[1], B = h(null), W = y([]), q = W[0], U = W[1];
		f(function() {
			U(R(B.current));
		}, []), _(function() {
			var e = o("WAFlowsFormValidationUtils").getInitErrors(u, o("WAFlowsFormValidationUtils").getInitValues(E, a, T));
			o("WAFlowsFormValidationUtils").hasModelEqualityChanged(F, e) && O(e);
		}, [
			F,
			u,
			T,
			a,
			E
		]);
		var V = g(function() {
			var e = {};
			for (var t in x) e[t] = !0;
			return e;
		}, [x]), H = y(V), G = H[0], z = H[1], j = y(V), K = j[0], Q = j[1], X = y(), Y = X[0], J = X[1], Z = m(function(e) {
			a != null || s(0, 72638), d({
				name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_FORM_DATA,
				payload: {
					screen: a,
					values: e
				}
			});
		}, [d, a]), ee = m(function(e, t) {
			var n, r = u.find(function(t) {
				return t.name === e;
			});
			P.current[e] = t, $(babelHelpers.extends({}, P.current)), Z((n = {}, n[e] = t, n)), z(function(t) {
				return C(e, t);
			}), Q(function(t) {
				return C(e, t);
			}), w(function(t) {
				return b(e, t);
			}), r && O(function(n) {
				var a;
				return babelHelpers.extends({}, n, (a = {}, a[e] = o("WAFlowsFormValidationUtils").getError(r, t), a));
			});
		}, [u, Z]), te = m(function(e) {
			var t;
			return (t = P.current) == null ? void 0 : t[e];
		}, []), ne = g(function() {
			return {
				getValue: te,
				setValue: ee,
				getError: function(t, n) {
					return n === void 0 && (n = !1), L(t, n, F, M, Y, K, G);
				},
				setFocus: function(t) {
					J(t);
				},
				setBlur: function(t) {
					J(null), z(function() {
						var e;
						return babelHelpers.extends({}, G, (e = {}, e[t] = !0, e));
					}), w(function(e) {
						return b(t, e);
					});
				},
				isFocused: function(t) {
					return t === Y;
				},
				isFormValid: function() {
					return o("WAFlowsFormValidationUtils").isFormValid(F) && o("WAFlowsFormValidationUtils").isFormValid(M);
				},
				isLastChild: function(t) {
					return o("WAFlowsFormUtils").isLastChild(t, u);
				},
				getNextInput: function(t) {
					var e = q.findIndex(function(e) {
						return e.id === t;
					}) + 1;
					return q[e];
				}
			};
		}, [
			te,
			ee,
			F,
			M,
			Y,
			K,
			G,
			u,
			q
		]);
		return _(function() {
			$(function(e) {
				return P.current = e, Z(e), e;
			});
		}, []), _(function() {
			var e = I != null ? I : {}, t = u.filter(function(t) {
				return t.name != null && Object.prototype.hasOwnProperty.call(e, t.name);
			}).reduce(function(t, n) {
				return t[n.name] = e[n.name], t;
			}, {});
			Object.keys(t).length > 0 && w(t), Object.keys(e).length > 0 && d({
				name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_UPDATE_FORM_TRANSPILER_PROPS,
				payload: {
					screen: a,
					initValues: T,
					errorMessages: {}
				}
			});
		}, [
			u,
			d,
			I,
			T,
			a
		]), _(function() {
			var e;
			((e = E.internal.displayedScreenReason) == null ? void 0 : e.action) === o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE && T != null && Object.keys(T).length > 0 && $(function(e) {
				var t = babelHelpers.extends({}, e, T);
				return (!o("WAFlowsFormValidationUtils").isEqual(e, t) || l.hostPlatform !== "web_tooling") && Z(t), P.current = t, t;
			});
		}, [T, Z]), c.jsx("form", {
			name: n,
			ref: B,
			children: c.jsx(o("WAFlowsFormContext").WAFlowsFormContext.Provider, {
				value: ne,
				children: c.jsx(r("WAFlowsSingleColumnLayoutTemplate.react"), { children: u.map(function(e, t) {
					return S(e, t, u, a, l.platform);
				}) })
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	var k = {
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			children: {
				type: "array",
				items: {
					type: "object",
					required: ["type"]
				}
			},
			name: {
				type: "string",
				minLength: 1
			},
			errorMessages: { type: "object" },
			initValues: { type: "object" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["children", "isSoftValidationMode"],
		additionalProperties: !1
	};
	l.WAFlowsForm = E, l.TYPE = o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM, l.SCHEMA = k;
}), 98);
