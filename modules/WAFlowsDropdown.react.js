__d("WAFlowsDropdown.react", [
	"WAFlowsActionHandlerTypes",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsDropdownPicker.react",
	"WAFlowsFormContext",
	"WAFlowsFormValidationUtils",
	"WAFlowsListSelectionComponentResponseView.react",
	"WAFlowsOverlay.react",
	"WAFlowsSelectOptionList.react",
	"WAFlowsStateProvider.react",
	"WAFlowsTypes",
	"WAFlowsUseDataSourceFormValueReset",
	"WAFlowsUseSelectOptionListTracker",
	"WAFlowsUseValueUpdaterOnInit",
	"WAFlowsValidationConstants",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJUtils",
	"WDSNativeSelectListOptionConstant",
	"cr:22878",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useMemo, _ = u.useRef, f = u.useState, g = !0, h = !1, y = 300, C = 40, b = [];
	function v(e) {
		var t = e.dataSource, a = t === void 0 ? b : t, i = e.enabled, l = i === void 0 ? g : i, u = e.hideClearButton, v = u === void 0 ? !1 : u, S = e.label, R = e.name, L = e.onSelect, E = e.onUnselect, k = e.required, I = k === void 0 ? h : k, T = e.version, D = o("WAFlowsFormContext").useWAFlowsForm(), x = D.getError, $ = D.getValue, P = D.setValue, N = $(R), M = _(null), w = f(!1), A = w[0], F = w[1], O = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext), B = c(function() {
			window.setTimeout(function() {
				var e;
				(e = M.current) == null || e.focus();
			}, 100);
		}, [M]), W = p(function() {
			if (N == null) return "";
			var e = a.find(function(e) {
				var t = e.id;
				return t === N;
			});
			return e == null ? "" : e.title;
		}, [N, a]), q = f(a), U = q[0], V = q[1];
		o("WAFlowsUseValueUpdaterOnInit").useValueUpdaterOnInit({
			initialValue: N,
			updateCondition: function(t, n) {
				return !o("WAFlowsFormValidationUtils").isEqual(t, n);
			},
			onUpdate: L,
			isEnabled: o("WAFlowsComponentsCommon").getExecuteOnSelectActionScreenChange(T)
		});
		var H = c(function(e) {
			var t = function() {
				var t = $(R), n = e !== "";
				if (B(), P(R, e), n) {
					E !== void 0 && ![
						void 0,
						"",
						e
					].includes(t) && (E == null || E()), L == null || L();
					return;
				}
				if (E) {
					E == null || E();
					return;
				}
				L == null || L();
			};
			window.setTimeout(t, y);
		}, [
			$,
			R,
			B,
			P,
			E,
			L
		]), G = f(!1), z = G[0], j = G[1];
		o("WAFlowsUseSelectOptionListTracker").useSelectOptionListTracker({
			selectedValue: N,
			dataSource: U,
			hasUserInteracted: z,
			version: T
		}), m(function() {
			V(a);
		}, [a]), o("WAFlowsUseDataSourceFormValueReset").useWAFlowsDataSourceFormReset(R, a, o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.DROPDOWN), m(function() {
			O(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: A ? S : void 0,
				backButtonAction: A ? o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY : void 0
			}));
		}, [
			O,
			A,
			S
		]);
		var K = a.length >= C;
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAFlowsDropdownPicker.react"), {
			ref: M,
			isDropdownListShown: A,
			label: S,
			name: R,
			enabled: l,
			required: I,
			selectedValue: W,
			onClick: function() {
				F(!A);
			},
			onClear: function() {
				return H("");
			},
			errorMessage: x(R),
			hideClearButton: v
		}), s.jsxs(r("WAFlowsOverlay.react"), {
			isPanelVisible: A,
			onVisibilityChange: F,
			noPadding: !0,
			children: [K && n("cr:22878") !== null && s.jsx(n("cr:22878"), {
				dataSource: a,
				setSearchOptions: V
			}), s.jsx(r("WAFlowsSelectOptionList.react"), {
				dataSource: U,
				value: N,
				name: R,
				enabled: l,
				disableSelectOptionTracker: !0,
				onChange: function(t) {
					j(!0), H(t), L == null || window.navigator.onLine ? window.setTimeout(function() {
						F(!1);
					}, y) : F(!1);
				},
				multiple: !1,
				isDropdownList: !0,
				version: T
			})]
		})] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = [
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").DISABLED_OPTION_SELECTED
	], R = "Dropdown", L = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			label: {
				type: "string",
				minLength: 1
			},
			name: {
				type: "string",
				minLength: 1
			},
			required: { type: "boolean" },
			selectedId: { type: "string" },
			dataSource: babelHelpers.extends({
				type: "array",
				minItems: o("WDSNativeSelectListOptionConstant").SELECT_LIST_MIN_OPTIONS,
				maxItems: o("WAFlowsComponentConstants").DROPDOWN_MAX_OPTIONS
			}, o("WAFlowsWELJUtils").getHardValidation([o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE, o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE]), { items: {
				type: "object",
				properties: {
					id: { type: "string" },
					title: { type: "string" },
					metadata: { type: "string" },
					description: { type: "string" },
					enabled: { type: "boolean" }
				},
				required: ["id", "title"],
				additionalProperties: !1
			} }),
			visible: { type: "boolean" },
			onSelect: {
				instanceof: "Function",
				properties: { name: { type: "string" } },
				required: ["name"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}, o("WAFlowsWELJUtils").getValidationSchema([{
		prop: "label",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").DROPDOWN_SELECT_LIST_LABEL_MAX_LENGTH
	}], S, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE], !0, o("WAFlowsComponentConstants").DROPDOWN_SELECT_LIST_OPTION_TITLE_MAX_LENGTH), {
		required: [
			"dataSource",
			"name",
			"label",
			"isSoftValidationMode"
		],
		additionalProperties: !1
	});
	function E(e) {
		var t = e.componentResponse;
		return s.jsx(r("WAFlowsListSelectionComponentResponseView.react"), { componentResponse: t });
	}
	E.displayName = E.name + " [from " + i.id + "]", l.WAFlowsDropdown = v, l.TYPE = R, l.SCHEMA = L, l.RESPONSE_VIEW = E;
}), 98);
