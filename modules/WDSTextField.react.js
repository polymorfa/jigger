__d("WDSTextField.react", [
	"BaseTextInputV2.react",
	"Locale",
	"UserAgent",
	"WDSTextFieldUtils",
	"WDSTextFieldUtils.iOS",
	"WDSTextFieldVariants",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useId, _ = c.useLayoutEffect, f = c.useRef, g = c.useState, h = { focusRingHideOutline: {
		outline: "x1ucz5p",
		$$css: !0
	} }, y = o("Locale").isRTL(), C = 8, b = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
	function v(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.EndIcon, c = l.StartIcon, v = l.bottomText, S = l.defaultValue, R = S === void 0 ? "" : S, L = l.error, E = L === void 0 ? !1 : L, k = l.errorText, I = l.success, T = I === void 0 ? !1 : I, D = l.successText, x = l.label, $ = l.floatingLabel, P = $ === void 0 ? !0 : $, N = l.maxCharacterCount, M = l.onEndIconClick, w = l.onValueChange, A = l.onChange, F = l.onFocus, O = l.onBlur, B = l.onEnter, W = l.value, q = l.prefix, U = l.suffix, V = l.disabled, H = l.loading, G = H === void 0 ? !1 : H, z = l.testid, j = l.labelTestId, K = l.loadingText, Q = l.readOnly, X = l.type, Y = l.autoComplete, J = l.name, Z = l.endIconAriaLabel, ee = l.platform, te = ee === void 0 ? b : ee, ne = g(function() {
			return String(R);
		}), re = ne[0], oe = ne[1], ae = W != null ? W : re, ie = g(0), le = ie[0], se = ie[1], ue = g(0), ce = ue[0], de = ue[1], me = f(null), pe = p(), _e = "bottom-text-" + pe, fe = te === "iOS", ge = N != null && ae.length > N, he = E || ge, ye = V === !0 && !he, Ce = g(!1), be = Ce[0], ve = Ce[1];
		_(function() {
			if (me.current) {
				var e = me.current, t = e.querySelector("label");
				if (t) {
					var n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
					if (y === !0) {
						var o = r.right - n.right, a = o - C;
						se(a);
					} else {
						var i = n.left - r.left, l = i - C;
						se(-l);
					}
				}
			}
		}, [c, q]), _(function() {
			if (me.current) {
				var e = me.current;
				de(e.offsetWidth);
			}
		}, []);
		var Se = d(function(e) {
			w == null || w(e), W == null && oe(e);
		}, [W, w]), Re = function(t) {
			t.preventDefault(), t.stopPropagation(), B == null || B();
		}, Le = d(function() {
			w == null || w(""), W == null && oe("");
		}, [W, w]), Ee = d(function() {
			ve(!0), F == null || F();
		}, [F]), ke = d(function() {
			ve(!1), O == null || O();
		}, [O]);
		m(function() {
			W != null && oe(W);
		}, [W]);
		var Ie = fe ? he && k != null || G && K != null || T && D != null : v != null || k != null || N != null, Te = null;
		Ie && (fe ? Te = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnBottom, {
			errorText: k,
			loading: G,
			loadingText: K,
			shouldShowError: he,
			successText: D,
			shouldShowSuccess: T
		}) : Te = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnBottom, {
			bottomText: v,
			errorText: k,
			maxCharacterCount: N,
			value: ae,
			platform: te,
			shouldShowError: he,
			bottomId: _e
		}));
		var De = fe ? E || N != null || G || T || ae.length > 0 : he || s != null || U != null || G, xe = null;
		De && (fe ? xe = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnEnd, {
			shouldShowError: E,
			maxCharacterCount: N,
			value: ae,
			shouldShowSuccess: T,
			loading: G,
			onClearInput: Le,
			isFocused: be && Q !== !0
		}) : xe = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnEnd, {
			shouldShowError: he,
			EndIcon: s,
			endIconAriaLabel: Z,
			suffix: U,
			onEndIconClick: M,
			loading: G,
			platform: te
		}));
		var $e = c != null || q != null, Pe = null;
		$e && (fe ? Pe = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnStart, { prefix: q }) : Pe = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnStart, {
			prefix: q,
			StartIcon: c,
			platform: te
		}));
		var Ne = P === !1 && (be || ae !== "") ? "" : x, Me = u.jsx(r("BaseTextInputV2.react"), {
			readOnly: Q,
			type: X,
			autoComplete: Y,
			name: J,
			disabled: ye,
			testid: void 0,
			labelTestId: j,
			ref: i,
			label: Ne,
			addOnStart: Pe,
			addOnEnd: xe,
			addOnBottom: Te,
			onValueChange: Se,
			onChange: A,
			onFocus: Ee,
			onBlur: ke,
			value: ae,
			variant: o("WDSTextFieldVariants").WDSTextFieldLabelVariant(he, ye, De, te),
			variantColor: o("WDSTextFieldVariants").WDSTextFieldColorVariant(he, te),
			suppressFocusRing: !0,
			focusRingXStyle: h.focusRingHideOutline,
			"aria-invalid": he,
			"aria-errormessage": he && Te ? _e : void 0,
			"aria-describedby": Te ? _e : void 0
		});
		if (B) {
			var we, Ae;
			return u.jsx("form", {
				ref: me,
				style: babelHelpers.extends((we = {}, we[o("WDSTextFieldVariants").labelMoveDistanceVarname] = le + "px", we), fe && (Ae = {}, Ae[o("WDSTextFieldVariants").textFieldLabelWidth] = "calc(0.35 * (" + ce + "px - 2 * " + o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline + "))", Ae)),
				onSubmit: Re,
				children: Me
			});
		}
		return u.jsx("div", {
			ref: me,
			style: babelHelpers.extends((n = {}, n[o("WDSTextFieldVariants").labelMoveDistanceVarname] = le + "px", n), fe && (a = {}, a[o("WDSTextFieldVariants").textFieldLabelWidth] = "calc(0.35 * (" + ce + "px - 2 * " + o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline + "))", a)),
			children: Me
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 98);
