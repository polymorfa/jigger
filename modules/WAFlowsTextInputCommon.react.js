__d("WAFlowsTextInputCommon.react", [
	"fbt",
	"WAFlowsEnvContext.react",
	"WAFlowsFormValidationUtils",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsNativeState",
	"WAFlowsUseForwardRef",
	"react",
	"scrollRefIntoView",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = {
		OFF: "off",
		ON: "on"
	}, h = {
		OFF: "off",
		ON: "on"
	}, y = { NEXT: "next" };
	function C(e) {
		return e != null && e.toString().length > 0;
	}
	var b = function(t) {
		switch (t) {
			case "text":
			case "password": return t;
			case "passcode": return "password";
			case "phone": return "tel";
			case "number": return "text";
			default: return "text";
		}
	}, v = function(t) {
		switch (t) {
			case "email": return "email";
			case "number": return "decimal";
			case "passcode": return "numeric";
			case "phone": return "tel";
			default: return;
		}
	}, S = {
		input: {
			width: "x1ng3b2o",
			height: "x5yr21d",
			boxSizing: "x9f619",
			color: "x9n2qya",
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			":focus_outline": "x1uvtmcs",
			textAlign: "x1yc453h",
			":-webkit-autofill_-webkit-background-clip": "xtpw4lu",
			":-webkit-autofill_-webkit-text-fill-color": "x1tutvks",
			":-webkit-autofill_transition": "x1s3xk63",
			$$css: !0
		},
		inputWAWeb: {
			color: "x9n2qya",
			$$css: !0
		},
		inputFocusedLTR: {
			paddingRight: "x1nd6s1w",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		iconContainer: {
			display: "x78zum5",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		errorIconContainerNew: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		disabled: {
			opacity: "xk1wqt1",
			$$css: !0
		},
		clearBtn: {
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			marginInlineStart: "x1jaw1fs",
			marginInlineEnd: "x1fs6pbq",
			marginLeft: null,
			marginRight: null,
			backgroundColor: "xjbqb8w",
			":active_outline": "xqh3lvm",
			opacity: "xg01cxk",
			$$css: !0
		},
		clearBtnHidden: {
			display: "x1s85apg",
			$$css: !0
		},
		errorIcon: {
			position: "x10l6tqk",
			WebkitMaskSize: "x561xij",
			$$css: !0
		},
		supportTextFontSize: {
			fontSize: "x8ucyde",
			$$css: !0
		},
		errorIconContainer: {
			width: "x1axo8wv",
			height: "x15o1h39",
			flexDirection: "x15zctf7",
			$$css: !0
		},
		buttonResetCSS: {
			background: "x11g6tue",
			color: "x1heor9g",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: null,
			borderInlineEndWidth: null,
			borderBottomWidth: null,
			borderInlineStartWidth: null,
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			font: "xln7xf2",
			cursor: "x1ypdohk",
			outline: "x12uuly6",
			width: "xh8yej3",
			$$css: !0
		}
	}, R = function(t, n) {
		t.key === "Enter" ? (t.preventDefault(), t.target instanceof HTMLElement && t.target.blur()) : t.nativeEvent.code === "Space" && n && (t.preventDefault(), t.stopPropagation(), n());
	};
	function L(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.name, l = a.dataTestId, c = l === void 0 ? "wa-flows-text-input-field" : l, m = a.value, C = a.readOnly, L = C === void 0 ? !1 : C, E = a.enabled, k = E === void 0 ? !0 : E, I = a.placeholder, T = I === void 0 ? "" : I, D = a.onFocus, x = a.onBlur, $ = a.xstyle, P = a.inputType, N = P === void 0 ? "text" : P, M = a.focused, w = M === void 0 ? !1 : M, A = a.autoCorrect, F = A === void 0 ? !0 : A, O = a.autoComplete, B = O === void 0 ? g.ON : O, W = a.onClick, q = a.onChange, U = v(N), V = o("WAFlowsEnvContext.react").useWAFlowsEnv(), H = V.env, G = p(o("WAFlowsNativeState").NativeContext), z = G.keyboardState.change, j = r("WAFlowsUseForwardRef")(n), K = j[0], Q = j[1], X = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), Y = X.flowInstanceId, J = f(function() {
			return H.hostPlatform === "web_tooling" ? g.OFF : B;
		}, [H.hostPlatform, B]);
		_(function() {
			K && K.current != null && w && z === "didShow" && o("scrollRefIntoView").scrollRefIntoView(K);
		}, [
			w,
			K,
			z,
			n
		]);
		var Z = N === "date" && H.platform === "android", ee = H.platform === "wa_web", te = d.jsx("input", babelHelpers.extends({
			"aria-labelledby": i,
			id: Y(i),
			"data-testid": void 0,
			placeholder: T,
			onClick: Z ? void 0 : W,
			type: b(N),
			inputMode: U,
			value: m == null || typeof m == "string" ? m : String(m),
			readOnly: L,
			autoComplete: J,
			disabled: !k,
			autoCorrect: F === !0 ? h.ON : h.OFF
		}, (u || (u = r("stylex"))).props(S.input, ee && S.inputWAWeb, w && !H.isRTL && S.inputFocusedLTR, $), {
			dir: "auto",
			enterKeyHint: y.NEXT,
			onFocus: D,
			spellCheck: "false",
			onBlur: x,
			onChange: function(t) {
				var e = ["password", "passcode"].includes(N) && o("WAFlowsFormValidationUtils").stringContainsEmoji(t.target.value) ? m != null ? m : "" : t.target.value;
				q == null || q(e);
			},
			onKeyDown: function(t) {
				return R(t, W);
			},
			ref: Q
		}));
		return Z ? d.jsx("button", {
			className: "x11g6tue x1heor9g x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xln7xf2 x1ypdohk x12uuly6 xh8yej3",
			onClick: function(t) {
				t.preventDefault(), t.stopPropagation(), W == null || W();
			},
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"aria-controls": Y(i),
			"aria-haspopup": "dialog",
			children: te
		}) : te;
	}
	L.displayName = L.name + " [from " + i.id + "]", l.KEYBOARD_AUTO_COMPLETE = g, l.KEYBOARD_AUTO_CORRECT = h, l.IOS_KEYBOARD_ENTER_KEY_HINT = y, l.textInputHasErrorFn = C, l.waFlowsTextInputCommonStyles = S, l.WAFlowsTextInputField = L;
}), 226);
