__d("WAFlowsTextAreaCommon.react", [
	"WAFlowsComponentConstants",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsNativeState",
	"react",
	"scrollRefIntoView",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect, p = c.useRef, _ = {
		scrollable: {
			width: "xh8yej3",
			$$css: !0
		},
		input: {
			height: "x5yr21d",
			width: "x1ng3b2o",
			lineHeight: "x3ty7n4",
			resize: "xtt52l0",
			wordWrap: "x1vvkbs",
			wordBreak: "x1lldw8n",
			boxSizing: "x9f619",
			color: "x1heor9g",
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			":focus_outline": "x1uvtmcs",
			textAlign: "x1yc453h",
			$$css: !0
		},
		inputContainerCounterDisabled: {
			opacity: "x1cvbfqh",
			$$css: !0
		},
		charCounterMaxLength: {
			width: "x14atkfc",
			whiteSpace: "xuxw1ft",
			transitionProperty: "x19991ni",
			transitionDuration: "xq7dr57",
			willChange: "x1larqbn",
			$$css: !0
		},
		errorIconContainer: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		supportTextFontSize: {
			fontSize: "x8ucyde",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.name, a = t.dataTestId, i = a === void 0 ? "wa-flows-text-area-field" : a, l = t.value, s = l === void 0 ? "" : l, c = t.maxLength, f = c === void 0 ? o("WAFlowsComponentConstants").TEXT_AREA_MAX_CHARS_DEFAULT : c, g = t.xstyle, h = t.charsLeft, y = t.placeholder, C = y === void 0 ? "" : y, b = t.enabled, v = b === void 0 ? !0 : b, S = t.focused, R = S === void 0 ? !1 : S, L = t.autoCorrect, E = L === void 0 ? !0 : L, k = t.onChange, I = t.onFocus, T = t.onBlur, D = p(), x = d(o("WAFlowsNativeState").NativeContext), $ = x.keyboardState.change, P = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), N = P.flowInstanceId;
		return m(function() {
			R && $ === "didShow" && o("scrollRefIntoView").scrollRefIntoView(D);
		}, [R, $]), u.jsx("textarea", babelHelpers.extends({
			id: N(n),
			"data-testid": void 0,
			value: h === 0 ? typeof s == "string" && s.substr(0, f != null ? f : o("WAFlowsComponentConstants").TEXT_AREA_MAX_CHARS_DEFAULT) : s,
			placeholder: C,
			autoCorrect: E === !0 ? "on" : "off",
			disabled: !v
		}, (e || (e = r("stylex"))).props(_.input, g), {
			onChange: function(t) {
				return k == null ? void 0 : k(t.target.value);
			},
			onFocus: I,
			onBlur: T,
			maxLength: f,
			ref: D,
			dir: "auto"
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e != null && e.toString().length > 0;
	}
	l.waFlowsTextAreaCommonStyle = _, l.WAFlowsTextAreaField = f, l.textAreaHasErrorFn = g;
}), 98);
