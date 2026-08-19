__d("WAFlowsComponentWrapper.react", [
	"Random",
	"WAFlowsBanner.react",
	"WAFlowsComponentConstants",
	"WAFlowsComponentLoader.react",
	"WAFlowsComponentToVersion.react",
	"WAFlowsComponentsCommon",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsError",
	"WAFlowsFormContext",
	"WAFlowsFormValidationUtils",
	"WAFlowsLayoutUtils",
	"WAFlowsMJVRules",
	"WAFlowsSchemaValidationUtils",
	"WAFlowsScreenAnimationContext",
	"WAFlowsStateProvider.react",
	"WAFlowsTypes",
	"WAFlowsValidationConstants",
	"WAFlowsWELJValidationUtils",
	"WDNativeImageComponentConstant",
	"cancelIdleCallback",
	"filterNulls",
	"react",
	"requestIdleCallback",
	"useDeepEqualMemo"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"Component",
		"SCHEMA",
		"TYPE",
		"flowHashId",
		"hasTextPredecessor"
	], s, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useLayoutEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = {
		validatedComponentContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		defaultComponentPadding: {
			paddingTop: "x1hovqzm",
			$$css: !0
		},
		conditionalRenderingComponentPadding: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		consecutiveTextComponentPadding: {
			paddingTop: "xjkqmoq",
			$$css: !0
		}
	};
	function y(e, t) {
		if (e != null && t != null) {
			var n = e.filter(function(e) {
				return e.enabled === !1;
			}).map(function(e) {
				return e.id;
			});
			return o("WAFlowsFormValidationUtils").isComponentValueArrayOfStr(t) ? t.filter(function(e) {
				return n.includes(e);
			}) : [t.toString()];
		}
		return [""];
	}
	function C(e, t) {
		return e === void 0 && (e = []), e.length > 0 && t === "EmbeddedLink" && b(e) ? "on-click-action" : "";
	}
	function b(e) {
		return e === void 0 && (e = []), e == null || e.length === 0 ? !1 : e.some(function(e) {
			return e.dataPath.includes("onClick") && e.keyword === "url";
		});
	}
	var v = (s = {}, s[o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getUniqueItemsErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getNonEmptyIdInDataSourceErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").MIN_CHARS_LESS_OR_EQUAL_TO_MAX_CHARS] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinCharGreaterThanMaxCharErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").MIN_SELECTED_ITEMS_LESS_THAN_MAX_SELECTED_ITEMS] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinSelectedItemsGreaterMaxSelectedItemsErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getInitValueDoesNotMatchTypeErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getRequiredAndDisabledErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getRequiredAndNotVisibleErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").UNIX_TIME_STRING_ARRAY] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getUnavailableDateIsNotTimestampErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").FORMATTED_DATE_STRING_ARRAY] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getUnavailableDateIsNotFormattedDateStrErrorMessage(e, t);
	}, s[o("WAFlowsValidationConstants").NO_DATA_SOURCE_CAN_HAVE_IMAGES_AND_COLORS] = function(e, t) {
		return o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getDataSourceShouldNotHaveBothImagesAndColors(e, t);
	}, s);
	function S(e, t, n, a, i, l, s, u, c) {
		var d, m;
		return n === void 0 && (n = []), u === void 0 && (u = !1), r("filterNulls")((d = (m = n) == null ? void 0 : m.map(function(n) {
			var r, d;
			if (n == null) return n;
			var m = n.dataPath, p = v[n.keyword];
			if (p != null) return {
				error: p(e, t),
				keyword: n.keyword
			};
			switch (n.keyword) {
				case "pattern": {
					var _ = m.split(".")[1], f = n.params.pattern;
					return f != null ? {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getPatternMismatchErrorMessage(e, t, f, _),
						keyword: n.keyword
					} : null;
				}
				case "minLength":
				case "maxLength": return L(e, t, n, n.params.limit);
				case o("WAFlowsValidationConstants").CALENDAR_PICKER_MAX_LENGTH_LABEL: return L(e, t, n, o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_LABEL);
				case o("WAFlowsValidationConstants").CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT: return L(e, t, n, o("WAFlowsComponentConstants").CALENDAR_PICKER_MAX_LENGTH_HELPER_TEXT);
				case o("WAFlowsValidationConstants").TEXT_ENTRY_LABEL_MAX_LENGTH: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getLabelMaxLengthErrorMessage(e, t, (c == null ? void 0 : c.labelVariant) === o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE),
					keyword: n.keyword
				};
				case "minItems":
				case "maxItems": {
					var g, h = m.split(".").pop();
					return !a && n.keyword === "maxItems" ? void 0 : {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinMaxItemsInDataSourceErrorMessage(e, (g = n.params.limit) != null ? g : 0, n.keyword, t, h),
						keyword: n.keyword
					};
				}
				case "minimum":
				case "maximum": {
					var y, C = m.split(".")[1];
					return {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinMaxValueErrorMessage(e, (y = n.params.limit) != null ? y : 0, n.keyword, t, C),
						keyword: n.keyword
					};
				}
				case o("WAFlowsValidationConstants").DROPDOWN_DATA_SOURCE_MAX_ITEMS:
				case o("WAFlowsValidationConstants").DROPDOWN_DATA_SOURCE_MAX_ITEMS_IMAGES: return a ? {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinMaxItemsInDataSourceErrorMessage(e, n.keyword === o("WAFlowsValidationConstants").DROPDOWN_DATA_SOURCE_MAX_ITEMS ? o("WAFlowsComponentConstants").DROPDOWN_MAX_OPTIONS : o("WAFlowsComponentConstants").DROPDOWN_MAX_OPTIONS_IMAGES, "maxItems", t),
					keyword: n.keyword
				} : void 0;
				case o("WAFlowsValidationConstants").NATIVE_COMPONENT_IN_INIT_VALUES: return {
					error: e + " cannot be initialised using init-values.",
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").DISABLED_OPTION_SELECTED: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getDisabledOptionSelectedErrorMessage(e, i, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").UNIX_TIME_STRING: {
					var b = m.split("."), S = o("WAFlowsWELJValidationUtils").splitCamelCasePropName(b[1]);
					return {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getDateIsNotTimestampErrorMessage(e, S, t),
						keyword: n.keyword
					};
				}
				case o("WAFlowsValidationConstants").FORMATTED_DATE_STRING: {
					var R = m.split("."), E = o("WAFlowsWELJValidationUtils").splitCamelCasePropName(R[1]);
					return {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getDateIsNotFormattedDateStrErrorMessage(e, E, t),
						keyword: n.keyword
					};
				}
				case o("WAFlowsValidationConstants").IMAGE_SIZE_IS_UNDER_300KB: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getImageSizeErrorMessage(e),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").DATA_SOURCE_IMAGE_SIZE_IS_UNDER_300KB: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getImageInDataSourceSizeErrorMessage("data-source"),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").DATA_SOURCE_IMAGE_SIZE_IS_UNDER_100KB: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getImageInDataSourceSizeErrorMessage("data-source", o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE),
					keyword: n.keyword
				};
				case "if": return;
				case "required":
					if (l === !1) return null;
					if ((u || a) && ((r = n.params) == null ? void 0 : r.missingProperty) != null) return {
						error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getRequiredErrorMessage(e, t, n.params.missingProperty),
						keyword: n.keyword
					};
					break;
				case "type": {
					var k, I, T = (k = n.params) == null ? void 0 : k.type, D = (I = n.message) != null ? I : T != null ? "should be " + T : "has invalid type";
					return {
						error: o("WAFlowsWELJValidationUtils").WELJ_SCHEMA_ERROR_MESSAGES.getComponentFieldWrongTypeErrorMessage(e, n.dataPath.slice(1), D),
						keyword: n.keyword
					};
				}
				case o("WAFlowsValidationConstants").NAVIGATION_LIST_IMAGE_SIZE_IS_UNDER_100KB: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getImageInDataSourceSizeErrorMessage("list-items", o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").NAVIGATION_LIST_INVALID_BADGE_COUNT: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getInvalidPropertyCount("\"badge\"", 1, e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").NAVIGATION_LIST_INVALID_MEDIA_SIZE_AND_ADDON: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getInvalidPropertyCombination("\"end\" add-on", "large \"media-size\"", e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").NAVIGATION_LIST_END_ADD_ON: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getInvalidPatternInList("\"end\" add-on present", e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.exclusiveValidator("on-select-action", e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.exclusiveValidator("on-unselect-action", e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").ON_CLICK_ACTION_EXCLUSIVE_VALIDATOR: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.exclusiveValidator("on-click-action", e, t),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").ON_CLICK_ACTION_MISSING_VALIDATOR: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getRequiredErrorMessage(e, t, "on-click-action"),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").PROPERTIES_COUNT_VALIDATOR: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getPropertiesCountErrorMessage(e, t, o("WAFlowsWELJValidationUtils").getComponentPropCountLocation(n.dataPath)),
					keyword: n.keyword
				};
				case o("WAFlowsValidationConstants").EXTERNAL_URL: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getPatternMismatchErrorMessage(e, t, o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_URI_REGEX, s != null ? s : "url"),
					keyword: n.keyword
				};
				default: return {
					error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getDefaultErrorMessage(e, (d = n.message) != null ? d : "component's schema and properties do not match", Object.values(n.params).toString()),
					keyword: n.keyword
				};
			}
		})) != null ? d : []);
	}
	var R = function(t, n, r, a, i) {
		i === void 0 && (i = 0);
		var e = a.length;
		if (!(e < 2)) {
			if (e >= 3 && (r.dataPath.contains("main-content") || r.dataPath.contains("end") || r.dataPath.contains("badge") || r.dataPath.contains("tag"))) return {
				error: t + " " + o("WAFlowsWELJValidationUtils").getComponentName(n) + " option '" + a[e - 2] + "." + a[e - 1] + "' must be " + i + " characters or less.",
				keyword: r.keyword
			};
			var l = o("WAFlowsWELJValidationUtils").splitCamelCasePropName(a[1]);
			return {
				error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinMaxLimitErrorMessage(t, i, l, r.keyword, n),
				keyword: r.keyword
			};
		}
	}, L = function(t, n, r, a) {
		a === void 0 && (a = 0);
		var e = r.dataPath.split(".");
		if (t === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST) return R(t, n, r, e, a);
		var i = "";
		return e.length > 2 ? i = "Option " + o("WAFlowsWELJValidationUtils").splitCamelCasePropName(e[2]) : i = o("WAFlowsWELJValidationUtils").splitCamelCasePropName(e[1]), {
			error: o("WAFlowsWELJValidationUtils").WELJ_SOFT_VALIDATION_ERROR_MESSAGES.getMinMaxLimitErrorMessage(t, a, i, r.keyword, n),
			keyword: r.keyword
		};
	}, E = new Map();
	function k(e, t, n, r, a, i) {
		return i == null ? null : i && o("WAFlowsLayoutUtils").WA_FLOWS_TEXT_COMPONENTS.has(e) ? h.consecutiveTextComponentPadding : e === "If" ? t === !0 || n != null ? h.defaultComponentPadding : h.conditionalRenderingComponentPadding : e === "Switch" ? r != null && r.hasOwnProperty(a) ? h.defaultComponentPadding : h.conditionalRenderingComponentPadding : h.defaultComponentPadding;
	}
	function I(e, t, n, a, i, l, s, u, c) {
		var d = r("WAFlowsMJVRules").validate(e, babelHelpers.extends({}, t, {
			initValue: n,
			type: a,
			isSoftValidationMode: i,
			errorMessage: l
		}));
		if (d) return {
			errors: [],
			hardValidationError: null
		};
		var m = r("WAFlowsMJVRules").errors, p = y(t.dataSource, n), _ = x(m, t), f = s.length === 0 ? C(m, a) : s, g = S(a, f, m, i, p, u, _, !1, t), h = g.length > 0 && !i && c !== !0 && t.visible === !0 ? new (o("WAFlowsError")).WAFlowsComponentHardValidationError(g.map(function(e) {
			return e.error;
		}).join("\n")) : null;
		return {
			errors: g,
			hardValidationError: h
		};
	}
	function T(e, t, n, o) {
		return e ? t ? n.map(function(e, t) {
			var n = e.error;
			return c.jsx(r("WAFlowsBanner.react"), {
				text: n,
				type: "error"
			}, t);
		}) : o > -1 ? c.jsx(r("WAFlowsBanner.react"), {
			text: n[o].error,
			type: "error"
		}) : null : null;
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(t) {
		var n, a, i, l, s = t.Component, u = t.SCHEMA, d = t.TYPE, h = t.flowHashId, y = t.hasTextPredecessor, C = babelHelpers.objectWithoutPropertiesLoose(t, e), b = o("WAFlowsStateProvider.react").useWAFlowsState(), v = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), S = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().actionOverrides, R = JSON.stringify((n = b.internal) == null ? void 0 : n.displayedScreenReason), L = o("WAFlowsFormContext").useWAFlowsForm(), D = L.getError, x = L.getValue, $ = o("WAFlowsStateProvider.react").useWAFlowsMeta(), P = $.templateMeta, N = o("WAFlowsScreenAnimationContext").useWAFlowsScreenAnimation(), M = N.animatingScreen, w = P.draft_mode, A = (a = C.name) != null ? a : "", F = (i = C.visible) != null ? i : !0, O = r("useDeepEqualMemo")(C), B = x(A), W = D(A), q = o("WAFlowsComponentToVersion.react").getComponentSchemaByVersion(d, u, C.version), U = _(function() {
			return babelHelpers.extends({}, q, { properties: babelHelpers.extends({}, q.properties, {
				errorMessage: {},
				initValue: {},
				type: { type: "string" }
			}) });
		}, [q]), V = g([]), H = V[0], G = V[1], z = (l = C.screenID) != null ? l : "", j = f(r("Random").uint32());
		p(function() {
			var e = j.current + "-" + z, t = E.get(e);
			if (t != null && r("cancelIdleCallback")(t), b.internal.status === "LOADING" || M) G(function(e) {
				return e.length > 0 ? [] : e;
			});
			else {
				var n = r("requestIdleCallback")(function() {
					var t = I(U, O, B, d, w, W, A, F, b.internal.isErrorOverlayVisible), n = t.errors, r = t.hardValidationError;
					r != null && v(S.errorActionHandler(r)), G(n), E.delete(e);
				});
				E.set(e, n);
			}
		}, [
			d,
			A,
			B,
			F,
			w,
			O,
			S,
			v,
			b.internal.status,
			M,
			R,
			z,
			h,
			b.internal.isErrorOverlayVisible,
			U,
			W
		]);
		var K = H.findIndex(function(e) {
			return e.keyword === o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE;
		}), Q = k(d, C.condition, C.elseStatement, C.cases, C.value, y);
		return C.visible === !1 && K < 0 ? c.jsx(c.Fragment, {}) : c.jsxs("div", {
			className: "x78zum5 xdt5ytf",
			"root-component-type": d,
			children: [C.visible === !1 ? null : c.jsx(r("WAFlowsComponentLoader.react"), {
				loading: C.isLoading === !0,
				enabled: C.enabled === !0,
				type: d,
				"data-testid": void 0,
				xstyle: Q,
				children: c.jsx(s, babelHelpers.extends({}, C))
			}), T(w, C.visible !== !1, H, K)]
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e, t) {
		if (e === void 0 && (e = []), e.length > 0 && b(e)) {
			var n;
			return (n = t.onClick) == null ? void 0 : n.url;
		}
		return null;
	}
	function $(e, t, n, r, o) {
		return function(a) {
			return c.jsx(D, babelHelpers.extends({}, a, {
				Component: e,
				TYPE: t,
				SCHEMA: n,
				hasTextPredecessor: r,
				flowHashId: o
			}));
		};
	}
	l.isExternalURLSchemaError = b, l.filterFJVValidationErrors = S, l.withSchemaValidation = $;
}), 98);
