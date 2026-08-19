__d("WAFlowsDatePickerV500.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsDatePicker.react",
	"WAFlowsDatePickerUtils",
	"WAFlowsDatePickerWheelsContainer.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsNativeState",
	"WAFlowsNoop",
	"WAFlowsOpenNativeComponent",
	"WAFlowsRegisterNativeFormValueCallback",
	"WAFlowsScreenAnimationContext",
	"WAFlowsStateProvider.react",
	"WAFlowsTextInput.react",
	"WAFlowsValidationConstants",
	"WAFlowsWELJActionCreators",
	"WAFlowsWELJUtils",
	"react",
	"scrollRefIntoView",
	"stylex",
	"useDebounced"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState;
	function h(e) {
		return typeof e == "string" && o("WAFlowsDatePickerUtils").isValidFormattedDateStr(e) ? e : "";
	}
	function y(e) {
		return typeof e == "string" && o("WAFlowsDatePickerUtils").isValidFormattedDateStr(e) ? e : null;
	}
	function C(t) {
		var n = t.enabled, a = t.helperText, i = t.label, l = t.maxDate, s = t.minDate, c = t.name, C = t.onSelect, b = t.required, v = o("WAFlowsEnvContext.react").useWAFlowsEnv(), S = v.env, R = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), L = R.actionOverrides, E = o("WAFlowsFormContext").useWAFlowsForm(), k = E.getError, I = E.getValue, T = E.setBlur, D = E.setFocus, x = E.setValue, $ = o("WAFlowsScreenAnimationContext").useWAFlowsScreenAnimation(), P = $.animatingScreen, N = f(), M = f(null), w = g(!1), A = w[0], F = w[1], O = g(!1), B = O[0], W = O[1], q = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), U = I(c);
		U = h(U);
		var V = y(s), H = y(l), G = S.hostPlatform === "android", z = G && !S.isJestTesting, j = r("useDebounced")(C != null ? C : r("WAFlowsNoop"), o("WAFlowsComponentConstants").WAITING_THRESHOLD, !1), K = function() {
			if (z) {
				D(c), r("WAFlowsOpenNativeComponent")({
					input_type: "DatePicker",
					input_name: c,
					params: {
						use_formatted_date: !0,
						initial_date_in_str: U,
						min_date_in_str: V,
						max_date_in_str: H,
						date_format: o("WAFlowsDatePickerUtils").DEFAULT_DATE_FORMAT_ANDROID
					}
				}, L.invoke), o("WAFlowsRegisterNativeFormValueCallback").WAFlowsRegisterNativeFormValueChangeCallback(E, function() {
					j(), T(c), o("WAFlowsNativeState").NativeStateChangeEventEmitter.remove("WAFOnNativeComponentValueChange");
				});
				return;
			}
			var e = !A;
			F(e), e && (o("scrollRefIntoView").scrollRefIntoView(N), Z(!0));
		}, Q = function() {
			F(!1), T(c);
		}, X = function(t) {
			var e = o("WAFlowsDatePickerUtils").getFormattedDateFromTimestamp(Number(t));
			e !== I(c) && (x(c, e), j());
		}, Y = function() {
			Q(), C == null || C();
		}, J = function() {
			return typeof U != "string" || U === "" ? "" : o("WAFlowsDatePickerUtils").getDisplayDate(U, S.locale);
		}, Z = d(function(e) {
			q(o("WAFlowsWELJActionCreators").createToggleDatePickerPanelAction(e));
		}, [q]), ee = m(o("WAFlowsNativeState").NativeContext), te = ee.keyboardState.change, ne = _(function() {
			return S.hostPlatform === "ios" && [
				"willShow",
				"didShow",
				"willHide"
			].includes(te);
		}, [S.hostPlatform, te]);
		p(function() {
			(ne || !A) && Z(!1);
		}, [
			A,
			B,
			ne,
			Z
		]);
		var re = J(), oe = o("WAFlowsDatePicker.react").getPlatformStyles(S.platform), ae = function(t) {
			t.target === M.current && (t.preventDefault(), K());
		}, ie = o("WAFlowsDatePickerUtils").getTimestampFromDateStr(U), le = o("WAFlowsDatePickerUtils").getTimestampFromDateStr(V), se = o("WAFlowsDatePickerUtils").getTimestampFromDateStr(H), ue = !z && !P && !ne && A;
		return u.jsxs("div", {
			ref: N,
			children: [
				z ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAFlowsDatePicker.react").trapStyles.container), { children: u.jsx("input", babelHelpers.extends({ ref: M }, (e || (e = r("stylex"))).props(o("WAFlowsDatePicker.react").trapStyles.input, oe.removeBackground), { onFocus: ae })) })) : null,
				u.jsx(o("WAFlowsTextInput.react").WAFlowsTextInput, {
					name: c,
					label: i,
					helperText: a,
					value: re,
					readOnly: !0,
					enabled: n,
					required: b,
					error: k(c),
					onClick: K,
					onClear: Y,
					useFormContext: !0,
					useCustomBlur: !0,
					triggerClickOnTouchTabbable: !0,
					showClearButtonOnBlur: !0,
					inputLabelXstyle: re ? oe.inputLabelNotGrowing : null
				}),
				ue && u.jsx(r("WAFlowsDatePickerWheelsContainer.react"), {
					value: ie,
					minDateValue: le,
					maxDateValue: se,
					enabled: n,
					isPanelVisible: A,
					onChange: X,
					inputEl: N.current,
					onClose: Q,
					onAnimatingChange: W
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = [
		{
			prop: "label",
			keyword: "maxLength",
			value: o("WAFlowsComponentConstants").DATE_PICKER_LABEL_MAX_LENGTH
		},
		{
			prop: "helperText",
			keyword: "maxLength",
			value: o("WAFlowsComponentConstants").DATE_PICKER_HELPER_TEXT_MAX_LENGTH
		},
		{
			prop: "minDate",
			keyword: o("WAFlowsValidationConstants").FORMATTED_DATE_STRING,
			value: !0
		},
		{
			prop: "maxDate",
			keyword: o("WAFlowsValidationConstants").FORMATTED_DATE_STRING,
			value: !0
		}
	], v = [
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").FORMATTED_DATE_STRING_ARRAY
	], S = "DatePicker", R = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			label: {
				type: "string",
				minLength: 1
			},
			helperText: { type: "string" },
			required: { type: "boolean" },
			unavailableDates: {
				type: "array",
				items: { type: "string" }
			},
			minDate: { type: "string" },
			maxDate: { type: "string" },
			name: { type: "string" },
			visible: { type: "boolean" },
			onSelect: {
				instanceof: "Function",
				properties: { name: { type: "string" } },
				required: ["name", "label"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["name", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getValidationSchema(b, v, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	l.WAFlowsDatePickerV500 = C, l.TYPE = S, l.SCHEMA = R;
}), 98);
