__d("WAWebCheckBoxRound.react", [
	"WAWebCheckboxRoundCheckedIcon.react",
	"WAWebCheckboxRoundUncheckedIcon.react",
	"WAWebFocusTracer",
	"WAWebVelocityTransitionGroup",
	"WDSFocusStateStyles",
	"WDSIconIcRadioButtonChecked.react",
	"WDSIconIcRadioButtonUnchecked.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		container: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			width: "xw4jnvo",
			height: "x1qx5ct2",
			verticalAlign: "xxymvpz",
			cursor: "x1ypdohk",
			transform: "x916qxe",
			$$css: !0
		},
		disabledContainer: {
			cursor: "xt0e3qv",
			opacity: "xbyyjgo",
			$$css: !0
		},
		roundIcon: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			width: "xh8yej3",
			height: "x5yr21d",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		checkedSvgStyle: {
			color: "x1v5yvga",
			$$css: !0
		},
		disabledCheckedSvgStyle: {
			color: "x18cpw0e",
			$$css: !0
		},
		uncheckedSvgStyle: {
			fillOpacity: "xrmlzy3",
			transitionDuration: "x1g2r6go",
			transitionProperty: "x18sm2im",
			transitionTimingFunction: "xwji4o3",
			$$css: !0
		},
		uncheckedSvgHoverStyle: {
			fillOpacity: "xlyfr8p",
			$$css: !0
		},
		iconPathFillWhite: {
			color: "x17t9dm2",
			$$css: !0
		},
		iconPathFillSecondary: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(33), a = t.ariaLabel, i = t.checked, l = t.disabled, s = t.hover, c = t.onClick, d = t.radio, g = t.systemUncheckedColor, h = t.testid, y = p(null), C = p(!0), b = _(!1), v = b[0], S = b[1], R, L;
		n[0] !== i ? (R = function() {
			C.current === !1 && i === !0 && r("WAWebFocusTracer").focus(y.current), C.current = !1;
		}, L = [i], n[0] = i, n[1] = R, n[2] = L) : (R = n[1], L = n[2]), m(R, L);
		var E;
		n[3] !== l || n[4] !== c ? (E = function(t) {
			l !== !0 && (t && t.stopPropagation(), c());
		}, n[3] = l, n[4] = c, n[5] = E) : E = n[5];
		var k = E, I, T;
		i ? (d === !0 ? T = null : T = o("WAWebCheckboxRoundCheckedIcon.react").CheckboxRoundCheckedIcon, I = "checked") : (I = "unchecked", T = s ? o("WAWebCheckboxRoundUncheckedIcon.react").CheckboxRoundUncheckedIcon : null);
		var D;
		n[6] !== i || n[7] !== l || n[8] !== v || n[9] !== g ? (D = i ? [f.checkedSvgStyle, l === !0 && f.disabledCheckedSvgStyle] : [
			f.uncheckedSvgStyle,
			g === !0 ? f.iconPathFillSecondary : f.iconPathFillWhite,
			v && g !== !0 && f.uncheckedSvgHoverStyle
		], n[6] = i, n[7] = l, n[8] = v, n[9] = g, n[10] = D) : D = n[10];
		var x = D, $;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return S(!0);
		}, n[11] = $) : $ = n[11];
		var P = $, N;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			return S(!1);
		}, n[12] = N) : N = n[12];
		var M = N, w = r("useWAWebIsKeyboardUser")(), A = w.isKeyboardUser, F;
		n[13] !== T || n[14] !== i || n[15] !== x ? (F = T != null ? u.jsx(T, { iconXstyle: x }) : i ? u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
			iconXstyle: x,
			height: 20,
			width: 20,
			testid: "checkbox-round-radio-checked"
		}) : u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
			iconXstyle: x,
			height: 20,
			width: 20,
			testid: "checkbox-round-passive"
		}), n[13] = T, n[14] = i, n[15] = x, n[16] = F) : F = n[16];
		var O = F, B = l === !0 && f.disabledContainer, W;
		n[17] !== B ? (W = [f.container, B], n[17] = B, n[18] = W) : W = n[18];
		var q = d === !0 ? "radio" : "checkbox", U;
		n[19] !== A ? (U = (e || (e = r("stylex"))).props(f.roundIcon, A && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), n[19] = A, n[20] = U) : U = n[20];
		var V = a || "", H;
		n[21] !== i || n[22] !== k || n[23] !== O || n[24] !== I || n[25] !== q || n[26] !== U || n[27] !== V || n[28] !== h ? (H = u.createElement("button", babelHelpers.extends({
			ref: y,
			role: q
		}, U, {
			"aria-checked": i,
			"aria-label": V,
			key: I,
			onClick: k,
			onMouseEnter: P,
			onFocus: P,
			onMouseLeave: M,
			onBlur: M,
			"data-testid": h
		}), O), n[21] = i, n[22] = k, n[23] = O, n[24] = I, n[25] = q, n[26] = U, n[27] = V, n[28] = h, n[29] = H) : H = n[29];
		var G;
		return n[30] !== H || n[31] !== W ? (G = u.jsx(r("WAWebVelocityTransitionGroup"), {
			xstyle: W,
			transitionName: "pop",
			children: H
		}), n[30] = H, n[31] = W, n[32] = G) : G = n[32], G;
	}
	l.default = g;
}), 98);
