__d("WAFlowsDatePicker.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
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
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState, h = { removeBackground: {
		backgroundColor: "xjbqb8w",
		$$css: !0
	} }, y = { inputLabelNotGrowing: {
		width: "x18itk1x",
		$$css: !0
	} }, C = {
		container: {
			position: "x1n2onr6",
			$$css: !0
		},
		input: {
			width: "xnalus7",
			height: "xqtp20y",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			position: "x10l6tqk",
			$$css: !0
		}
	};
	function b(t) {
		var n = t.enabled, a = t.helperText, i = t.label, l = t.maxDate, s = t.minDate, c = t.name, h = t.onSelect, y = t.required, b = o("WAFlowsEnvContext.react").useWAFlowsEnv(), v = b.env, S = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), R = S.actionOverrides, L = o("WAFlowsFormContext").useWAFlowsForm(), k = L.getError, I = L.getValue, T = L.setBlur, D = L.setFocus, x = L.setValue, $ = o("WAFlowsScreenAnimationContext").useWAFlowsScreenAnimation(), P = $.animatingScreen, N = f(), M = f(null), w = g(!1), A = w[0], F = w[1], O = g(!1), B = O[0], W = O[1], q = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), U = o("WAFlowsDatePickerUtils").getTimestampFromStr(I(c)), V = o("WAFlowsDatePickerUtils").getTimestampFromStr(s), H = o("WAFlowsDatePickerUtils").getTimestampFromStr(l), G = v.hostPlatform === "android", z = r("useDebounced")(h != null ? h : r("WAFlowsNoop"), o("WAFlowsComponentConstants").WAITING_THRESHOLD, !1), j = function() {
			if (G && !v.isJestTesting) D(c), r("WAFlowsOpenNativeComponent")({
				input_type: "DatePicker",
				input_name: c,
				params: {
					initial_ts_in_millis: U,
					min_ts_in_millis: V,
					max_ts_in_millis: H
				}
			}, R.invoke), o("WAFlowsRegisterNativeFormValueCallback").WAFlowsRegisterNativeFormValueChangeCallback(L, function() {
				z(), T(c), o("WAFlowsNativeState").NativeStateChangeEventEmitter.remove("WAFOnNativeComponentValueChange");
			});
			else {
				var e = !A;
				F(e), e && (o("scrollRefIntoView").scrollRefIntoView(N), J(!0));
			}
		}, K = function() {
			F(!1), T(c);
		}, Q = function(t) {
			t !== I(c) && (x(c, t), z());
		}, X = function() {
			K(), h == null || h();
		}, Y = function() {
			if (U === void 0) return "";
			var e = new Date(U);
			return o("WAFlowsDatePickerUtils").formatDisplayDate(e, v.locale);
		}, J = d(function(e) {
			q(o("WAFlowsWELJActionCreators").createToggleDatePickerPanelAction(e));
		}, [q]), Z = m(o("WAFlowsNativeState").NativeContext), ee = Z.keyboardState.change, te = _(function() {
			return v.hostPlatform === "ios" && [
				"willShow",
				"didShow",
				"willHide"
			].includes(ee);
		}, [v.hostPlatform, ee]);
		p(function() {
			(te || !A) && J(!1);
		}, [
			A,
			B,
			te,
			J
		]);
		var ne = Y(), re = E(v.platform), oe = function(t) {
			t.target === M.current && (t.preventDefault(), j());
		};
		return u.jsxs("div", {
			ref: N,
			children: [
				G && !v.isJestTesting ? u.jsx("div", {
					className: "x1n2onr6",
					children: u.jsx("input", babelHelpers.extends({ ref: M }, (e || (e = r("stylex"))).props(C.input, re.removeBackground), { onFocus: oe }))
				}) : null,
				u.jsx(o("WAFlowsTextInput.react").WAFlowsTextInput, {
					name: c,
					label: i,
					helperText: a,
					value: ne,
					readOnly: !0,
					enabled: n,
					required: y,
					error: k(c),
					onClick: j,
					onClear: X,
					useFormContext: !0,
					useCustomBlur: !0,
					showClearButtonOnBlur: !0,
					triggerClickOnTouchTabbable: !0,
					inputLabelXstyle: ne ? re.inputLabelNotGrowing : null
				}),
				(!G || v.isJestTesting) && !P && !te && A && u.jsx(r("WAFlowsDatePickerWheelsContainer.react"), {
					value: U,
					minDateValue: V,
					maxDateValue: H,
					enabled: n,
					isPanelVisible: A,
					onChange: Q,
					inputEl: N.current,
					onClose: K,
					onAnimatingChange: W
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = [
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
			keyword: o("WAFlowsValidationConstants").UNIX_TIME_STRING,
			value: !0
		},
		{
			prop: "maxDate",
			keyword: o("WAFlowsValidationConstants").UNIX_TIME_STRING,
			value: !0
		}
	], S = [
		o("WAFlowsValidationConstants").REQUIRED_AND_ENABLED,
		o("WAFlowsValidationConstants").REQUIRED_AND_VISIBLE,
		o("WAFlowsValidationConstants").UNIX_TIME_STRING_ARRAY
	], R = "DatePicker", L = babelHelpers.extends({
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
	}, o("WAFlowsWELJUtils").getValidationSchema(v, S, [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE]), { additionalProperties: !1 });
	function E(e) {
		return e === "ios" ? y : h;
	}
	l.trapStyles = C, l.WAFlowsDatePicker = b, l.TYPE = R, l.SCHEMA = L, l.getPlatformStyles = E;
}), 98);
