__d("WAFlowsChipsSelector.react", [
	"WAFlowsChip.react",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsFormValidationUtils",
	"WAFlowsGroupComponentLabel.react",
	"WAFlowsListSelectionComponentResponseView.react",
	"WAFlowsLocalization",
	"WAFlowsTypes",
	"WAFlowsUseDataSourceFormValueReset",
	"WAFlowsUseValueUpdaterOnInit",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"WDSNativeSelectListOptionConstant",
	"react",
	"useTruncateText"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = e.dataSource, n = e.description, r = e.enabled, a = e.label, i = e.maxSelectedItems, l = e.minSelectedItems, u = e.name, p = e.onSelect, _ = e.onUnselect, f = e.required, g = e.version, h = o("WAFlowsEnvContext.react").useWAFlowsEnv(), y = h.env, C = y.platform === "wa_web", b = o("WAFlowsFormContext").useWAFlowsForm(), v = b.getError, S = b.getValue, R = b.setValue, L = v(u), E = L != null && typeof L != "boolean" ? L : void 0, k = S(u), I = m(new Set()), T = I[0], D = I[1], x = m(new Set()), $ = x[0], P = x[1];
		c(function() {
			o("WAFlowsFormValidationUtils").isComponentValueArrayOfStr(k) && D(new Set(k));
		}, [k]), o("WAFlowsUseValueUpdaterOnInit").useValueUpdaterOnInit({
			initialValue: k,
			updateCondition: function(t, n) {
				return !o("WAFlowsFormValidationUtils").isEqual(t, n);
			},
			onUpdate: p,
			isEnabled: o("WAFlowsComponentsCommon").getExecuteOnSelectActionScreenChange(g)
		});
		var N = o("useTruncateText").useTruncateText(a, o("WAFlowsComponentConstants").CHIPS_SELECTOR_TITLE_MAX_LENGTH), M = o("useTruncateText").useTruncateText(n, o("WAFlowsComponentConstants").CHIPS_SELECTOR_DESCRIPTION_MAX_LENGTH);
		c(function() {
			i !== void 0 && (i === T.size ? P(t.reduce(function(e, t) {
				return T.has(t.id) ? e.delete(t.id) : e.add(t.id), e;
			}, new Set())) : P(new Set()));
		}, [
			T,
			t,
			i
		]), o("WAFlowsUseDataSourceFormValueReset").useWAFlowsDataSourceFormReset(u, t, o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR);
		var w = d(function() {
			return function(e, t, n) {
				var r = new Set(T);
				r.has(e) ? (r.delete(e), n == null || n(), _ == null || _()) : (i === void 0 || T.size < i) && (r.add(e), t == null || t(), p == null || p()), D(r), R(u, Array.from(r));
			};
		}, [
			u,
			p,
			_,
			R,
			T,
			i
		]), A = d(function() {
			var e = r;
			return t.map(function(t) {
				var n = t.enabled, r = t.id, a = t.onSelect, i = t.onUnselect, l = t.title;
				return s.jsx(o("WAFlowsChip.react").WAFlowsChip, {
					supportsHover: C,
					dataTestId: u + "-" + r,
					label: l,
					selected: T != null && T.has(r),
					onClick: function() {
						return w(r, a, i);
					},
					enabled: e !== !1 && n !== !1 && !$.has(r)
				}, r);
			});
		}, [
			r,
			t,
			C,
			u,
			T,
			$,
			w
		]), F = o("WAFlowsLocalization").getMinMaxSelectionLabelV400(l, i);
		return s.jsxs(s.Fragment, { children: [s.jsx(o("WAFlowsGroupComponentLabel.react").WAFlowsGroupComponentLabel, {
			dataTestId: u,
			label: N,
			description: M,
			validationString: F != null ? F : void 0,
			required: f,
			enabled: r,
			errorMessage: E
		}), s.jsx("div", {
			role: "group",
			"aria-label": N,
			className: "x1b58sdr x78zum5 x1fc8kun x4prdry x1a02dak",
			children: A
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = [
		o("WAFlowsValidationConstants").MIN_SELECTED_ITEMS_LESS_THAN_MAX_SELECTED_ITEMS,
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE
	], f = "ChipsSelector", g = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			name: { type: "string" },
			dataSource: babelHelpers.extends({ type: "array" }, o("WAFlowsWELJUtils").getHardValidation([o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE, o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE]), {
				minItems: o("WAFlowsComponentConstants").CHIPS_SELECTOR_MIN_ITEMS,
				maxItems: o("WAFlowsComponentConstants").CHIPS_SELECTOR_MAX_ITEMS,
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						title: { type: "string" },
						enabled: { type: "boolean" },
						onSelect: {
							instanceof: "Function",
							properties: {
								name: { type: "string" },
								payload: { type: "object" }
							},
							required: ["name", "payload"]
						},
						onUnselect: {
							instanceof: "Function",
							properties: {
								name: { type: "string" },
								payload: { type: "object" }
							},
							required: ["name", "payload"]
						}
					},
					required: ["id", "title"],
					additionalProperties: !1
				}
			}),
			description: { type: "string" },
			label: { type: "string" },
			minSelectedItems: { type: "number" },
			maxSelectedItems: { type: "number" },
			visible: { type: "boolean" },
			required: { type: "boolean" },
			onSelect: {
				instanceof: "Function",
				properties: { name: { type: "string" } },
				required: ["name"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}, o("WAFlowsWELJUtils").getValidationSchema([{
		prop: "label",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").CHIPS_SELECTOR_TITLE_MAX_LENGTH
	}, {
		prop: "description",
		keyword: "maxLength",
		value: o("WDSNativeSelectListOptionConstant").SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH
	}], _, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE], !0), {
		required: ["dataSource", "label"],
		additionalProperties: !1
	});
	function h(e) {
		var t = e.componentResponse;
		return s.jsx(r("WAFlowsListSelectionComponentResponseView.react"), {
			componentResponse: t,
			isMultiSelectList: !0
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.WAFlowsChipsSelector = p, l.TYPE = f, l.SCHEMA = g, l.RESPONSE_VIEW = h;
}), 98);
