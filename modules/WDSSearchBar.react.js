__d("WDSSearchBar.react", [
	"BaseTextInputV2.react",
	"Locale",
	"MagnifyingglassIOS.svg.react",
	"UserAgent",
	"WAWebKeyboardShortcuts",
	"WDSChip.react",
	"WDSFlex.stylex",
	"WDSIconIcArrowBack.react",
	"WDSIconIcClose.react",
	"WDSIconIcSearch.react",
	"WDSSearchBarConfig",
	"WDSSearchBarUtils",
	"WDSShortcut.react",
	"XmarkCircleFillIOS.svg.react",
	"react",
	"react-strict-dom",
	"stylex",
	"useMergeRefs",
	"wdsHeight"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = { focusRingHideOutline: {
		outline: "x1ucz5p",
		$$css: !0
	} }, h = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb", y = o("Locale").isRTL() ? "rtl" : "ltr";
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.EndIcon, l = a.endAccessory, u = a.gpuAnimationEnabled, d = u === void 0 ? !1 : u, C = a.hintText, b = a.loading, v = b === void 0 ? !1 : b, S = a.onEndIconClick, R = a.onValueChange, L = a.onChange, E = a.onFocus, k = a.onBlur, I = a.onKeyDown, T = a.onEnter, D = a.onClear, x = a.value, $ = a.testid, P = a.platform, N = P === void 0 ? h : P, M = a.shortcut, w = a.defaultValue, A = w === void 0 ? "" : w, F = a.tabOrder, O = a.autoComplete, B = O === void 0 ? "off" : O, W = a.autoFocus, q = W === void 0 ? !1 : W, U = a.xstyle, V = _(null), H = _(null), G = f(function() {
			return String(A);
		}), z = G[0], j = G[1], K = x != null ? x : z, Q = m(function(e) {
			R == null || R(e), x == null && j(e);
		}, [x, R]), X = m(function() {
			D == null || D(), R == null || R(""), x == null && j("");
		}, [
			x,
			D,
			R
		]), Y = f(!1), J = Y[0], Z = Y[1], ee = m(function(e) {
			e.key === "Escape" && (X(), H.current != null && H.current.blur()), I == null || I(e);
		}, [X, I]);
		p(function() {
			var e = H.current;
			return e == null || e.addEventListener("keydown", ee), function() {
				e == null || e.removeEventListener("keydown", ee);
			};
		}, [ee]);
		var te = r("useMergeRefs")(H, n), ne = N === "macWeb" || N === "windowsWeb", re = ne ? o("WDSSearchBarConfig").SearchBarDensity.POINTER : o("WDSSearchBarConfig").SearchBarDensity.TOUCH, oe = o("WDSSearchBarConfig").getSearchBarVariant(re, N), ae = o("WDSSearchBarConfig").getSearchIconSize(re), ie = function(t) {
			t.preventDefault(), t.stopPropagation(), T == null || T(K);
		};
		p(function() {
			x != null && j(x);
		}, [x]), p(function() {
			H.current != null && F != null && H.current.setAttribute("data-tab", String(F));
		}, [F]);
		var le;
		M != null && (typeof M == "object" ? le = M : le = o("WAWebKeyboardShortcuts").getWDSShortcuts(M));
		var se = (function(e) {
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "chip" && "props" in e) {
				var t = e.props;
				return c.jsx(r("WDSChip.react"), babelHelpers.extends({}, t), "accessory");
			}
			return null;
		})(l), ue = null;
		v ? ue = c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEndSpinner, {
			density: re,
			gpuAnimationEnabled: d,
			platform: N,
			size: ae
		}, "builtin") : K !== "" ? ue = c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEnd, {
			platform: N,
			EndIcon: r(N === "iOS" ? "XmarkCircleFillIOS.svg.react" : "WDSIconIcClose.react"),
			onEndIconClick: X,
			density: re
		}, "builtin") : i != null && (ue = c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEnd, {
			EndIcon: i,
			platform: N,
			onEndIconClick: S,
			density: re
		}, "builtin"));
		var ce = ne && le != null && !v && K === "" ? c.jsx(r("WDSShortcut.react"), babelHelpers.extends({}, le), "shortcut") : null, de = [
			ce,
			se,
			ue
		].filter(Boolean), me = de.length === 0 ? void 0 : de.length === 1 ? de[0] : c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapHalf, o("wdsHeight").wdsHeight.fullHeight), { children: de })), pe = m(function(e) {
			Z(!0), E == null || E(e);
		}, [E]), _e = m(function(e) {
			Z(!1), k == null || k(e);
		}, [k]), fe;
		N === "android" && J ? fe = c.jsx(r("WDSIconIcArrowBack.react"), {
			width: ae,
			height: ae
		}) : N === "iOS" ? fe = c.jsx(r("MagnifyingglassIOS.svg.react"), {
			width: ae,
			height: ae
		}) : fe = c.jsx(r("WDSIconIcSearch.react"), {
			width: ae,
			height: ae
		});
		var ge = c.jsx(r("BaseTextInputV2.react"), {
			placeholder: C,
			testid: void 0,
			ref: te,
			"aria-label": C,
			addOnStart: fe,
			autoComplete: B,
			autoFocus: q,
			onValueChange: Q,
			onChange: L,
			onFocus: pe,
			onBlur: _e,
			value: K,
			variant: oe,
			addOnEnd: me,
			suppressFocusRing: !0,
			focusRingXStyle: g.focusRingHideOutline
		}), he = N === "iOS" ? c.jsx(o("WDSSearchBarUtils").SearchBarWrapperIOS, {
			isFocused: J,
			onCancel: X,
			textInput: ge
		}) : ge;
		return T ? c.jsx("form", babelHelpers.extends({
			ref: V,
			onSubmit: ie,
			dir: y
		}, (s || (s = r("stylex"))).props(U), { children: he })) : c.jsx(o("react-strict-dom").html.div, {
			dir: y,
			ref: V,
			style: U,
			children: he
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);
