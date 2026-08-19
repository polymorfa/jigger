__d("WDSButton.react", [
	"BaseButtonV3.react",
	"WDSIconIcArrowDropDown.react",
	"WDSPressMotionStyles",
	"WDSSpinner.react",
	"WDSText.react",
	"cr:10098",
	"getPlatformByGK",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = {
		loading: {
			cursor: "xky4qsq",
			$$css: !0
		},
		disabled: {
			cursor: "x1h6gzvc",
			$$css: !0
		},
		unsetWillChange: {
			willChange: null,
			$$css: !0
		},
		truncatedLabel: {
			maxWidth: "x193iq5w",
			minWidth: "xeuugli",
			$$css: !0
		},
		truncatedRoot: {
			maxWidth: "x193iq5w",
			minWidth: "xeuugli",
			$$css: !0
		}
	}, m = {
		widthModeConstrained: {
			width: "xezivpi",
			$$css: !0
		},
		widthModeFit: {
			width: "xeq5yr9",
			$$css: !0
		},
		widthModeFlexible: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			$$css: !0
		},
		widthModeNoShrink: {
			flexShrink: "x2lah0s",
			$$css: !0
		}
	}, p = {
		constrained: m.widthModeConstrained,
		fit: m.widthModeFit,
		flexible: m.widthModeFlexible
	}, _ = {
		mediaLight: {
			":focus-visible_outlineColor": "x41cuts",
			":focus-visible_outlineStyle": "x9v5kkp",
			":focus-visible_outlineOffset": "xyu9ima",
			":focus-visible_outlineWidth": "x100v1rl",
			$$css: !0
		},
		mediaDark: {
			":focus-visible_outlineColor": "x3ce2fp",
			":focus-visible_outlineStyle": "x9v5kkp",
			":focus-visible_outlineOffset": "xyu9ima",
			":focus-visible_outlineWidth": "x100v1rl",
			$$css: !0
		},
		default: {
			":focus-visible_outlineColor": "xtnn1bt",
			":focus-visible_outlineStyle": "x9v5kkp",
			":focus-visible_outlineOffset": "xmw7ebm",
			":focus-visible_outlineWidth": "xrdum7p",
			$$css: !0
		}
	};
	function f(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.children, f = l.disabled, g = l.Icon, h = l.label, y = l.loading, C = l.profilePhoto, b = l.size, v = b === void 0 ? "medium" : b, S = l.type, R = S === void 0 ? "default" : S, L = l.widthMode, E = L === void 0 ? "fit" : L, k = l.variant, I = k === void 0 ? "filled" : k, T = l.directional, D = l.linkProps, x = l.id, $ = l.onFocusIn, P = l.onFocusOut, N = l.onPress, M = l.onPressIn, w = l.onPressOut, A = l.testid, F = l.truncateText, O = F === void 0 ? !1 : F, B = l.xstyle, W = l.platform, q = W === void 0 ? o("getPlatformByGK").WDS_PLATFORM : W, U = l.tabOrder, V = l["aria-disabled"], H = l["aria-expanded"], G = l["aria-haspopup"], z = l["aria-pressed"], j = l["aria-label"], K = q != null ? q : o("getPlatformByGK").WDS_PLATFORM, Q = l.showEndDropdownIcon === !0 && (K === "windowsWeb" || K === "macWeb"), X = c(!1), Y = X[0], J = X[1], Z = c(!1), ee = Z[0], te = Z[1];
		function ne(e) {
			y === !0 || f === !0 || (te(!0), l.onHoverIn == null || l.onHoverIn(e));
		}
		function re(e) {
			y === !0 || f === !0 || (te(!1), J(!1), l.onHoverOut == null || l.onHoverOut(e));
		}
		function oe(e) {
			y === !0 || f === !0 || (J(!0), M == null || M(e));
		}
		function ae(e) {
			y === !0 || f === !0 || (J(!1), w == null || w(e));
		}
		function ie() {
			y === !0 || f === !0 || J(!1);
		}
		function le() {
			y === !0 || f === !0 || J(!1);
		}
		function se(e) {
			y !== !0 && (N == null || N(e));
		}
		var ue = (D == null ? void 0 : D.href) != null, ce = g != null || C != null, de = Q === !0, me = h != null, pe = n("cr:10098").getButtonIconSizeAndStyle(v, ce && !me), _e = pe[0], fe = pe[1], ge;
		C != null ? ge = C : g != null && (ge = u.jsx(g, {
			height: _e,
			width: _e,
			xstyle: fe,
			directional: T
		}));
		var he;
		Q === !0 && (he = u.jsx(r("WDSIconIcArrowDropDown.react"), {
			height: _e,
			width: _e,
			xstyle: fe,
			directional: T
		}));
		var ye = n("cr:10098").getButtonColorStyles(I, R, ce || y === !0, me, f === !0, y === !0, K), Ce = _, be;
		R === "media" ? be = I === "filled" ? Ce.mediaLight : Ce.mediaDark : be = Ce.default;
		var ve = [
			be,
			y === !0 && d.loading,
			f === !0 && d.disabled,
			r("gkx")("9189") && d.unsetWillChange
		], Se = ye.xstyleConfig.pressableHovered, Re = [
			ye.xstyleConfig.pressable,
			ve,
			I !== "borderless" && o("WDSPressMotionStyles").WDSPressMotionStyles.pressable,
			E !== "flexible" && m.widthModeNoShrink
		], Le;
		ce && !me && de ? Le = o("WDSPressMotionStyles").WDSPressMotionStyles.small : ce && !me ? Le = o("WDSPressMotionStyles").WDSPressMotionStyles.compact : Le = o("WDSPressMotionStyles").WDSPressMotionStyles.medium;
		var Ee = { xstyleConfig: {
			pressable: Re,
			pressableDisabled: ye.xstyleConfig.pressableDisabled,
			pressableFocused: ye.xstyleConfig.pressableFocused,
			pressableHovered: Se,
			pressablePressed: [ye.xstyleConfig.pressablePressed, Le]
		} }, ke = me ? u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			selectable: !1,
			maxLines: 1,
			xstyle: O && d.truncatedLabel,
			platform: K,
			colorName: n("cr:10098").getButtonFontColor(I, R, f === !0, K),
			children: h
		}) : null, Ie = n("cr:10098").getButtonSizeStyles(v, ce || y === !0, de, me, I, K), Te = {
			ref: i,
			id: x,
			testid: A,
			sizeVariant: { xstyleConfig: babelHelpers.extends({}, Ie, {
				content: de ? [
					Ie.content,
					Ie.addOnEnd,
					B,
					O && d.truncatedRoot
				] : [
					Ie.content,
					B,
					O && d.truncatedRoot
				],
				children: [Ie.children, O && d.truncatedLabel],
				width: (a = p[E]) != null ? a : null
			}) },
			onPointerDown: oe,
			onPointerUp: ae,
			onPointerCancel: ie,
			onPointerLeave: le,
			onFocusIn: $,
			onFocusOut: P,
			addOnStart: y === !0 ? u.jsx(r("WDSSpinner.react"), {
				size: _e,
				platform: K
			}) : ge,
			addOnEnd: he,
			onMouseEnter: ne,
			onMouseLeave: re,
			variant: Ee,
			focusable: !l.disabled
		}, De = ue && D != null ? u.jsxs(r("BaseButtonV3.react"), babelHelpers.extends({}, Te, D, {
			onClick: se,
			"data-tab": U,
			hovered: ee,
			children: [ke, s]
		})) : u.jsxs(r("BaseButtonV3.react"), babelHelpers.extends({}, Te, {
			"data-tab": U,
			onClick: se,
			"aria-disabled": V,
			"aria-expanded": H,
			"aria-haspopup": G,
			"aria-pressed": z,
			"aria-label": j,
			disabled: f === !0,
			hovered: ee,
			pressed: Y,
			children: [ke, s]
		}));
		return ke && O ? u.jsx("span", {
			className: "x193iq5w xeuugli x6ikm8r x10wlt62 xh8yej3",
			title: h == null ? void 0 : h.toString(),
			children: De
		}) : De;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
