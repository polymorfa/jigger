__d("WDSChip.react", [
	"BaseButtonV3.react",
	"WDSChipConfig",
	"WDSIconIcArrowDropDown.react",
	"WDSPressMotionStyles",
	"WDSText.react",
	"WDSTooltip.react",
	"getPlatformByGK",
	"intlSummarizeNumber",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"Icon",
		"label",
		"size",
		"directional",
		"iconOnly",
		"isSelected",
		"isNeutral",
		"onPress",
		"onPressIn",
		"onPressOut",
		"onHoverIn",
		"onHoverOut",
		"onFocus",
		"onBlur",
		"isDisabled",
		"focusable",
		"id",
		"testid",
		"smbLabelsContent",
		"showEndDropdownIcon",
		"endNumber",
		"truncateText",
		"profilePhoto",
		"platform",
		"tabOrder",
		"role",
		"aria-pressed"
	], u, c = u || (u = o("react")), d = u.useState, m = { truncatedText: {
		maxWidth: "x1qh4rir",
		$$css: !0
	} };
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.Icon, l = a.label, u = a.size, p = u === void 0 ? "default" : u, _ = a.directional, f = _ === void 0 ? !0 : _, g = a.iconOnly, h = g === void 0 ? !1 : g, y = a.isSelected, C = y === void 0 ? !1 : y, b = a.isNeutral, v = b === void 0 ? !1 : b, S = a.onPress, R = a.onPressIn, L = a.onPressOut, E = a.onHoverIn, k = a.onHoverOut, I = a.onFocus, T = a.onBlur, D = a.isDisabled, x = D === void 0 ? !1 : D, $ = a.focusable, P = $ === void 0 ? !0 : $, N = a.id, M = a.testid, w = a.smbLabelsContent, A = a.showEndDropdownIcon, F = a.endNumber, O = a.truncateText, B = O === void 0 ? !1 : O, W = a.profilePhoto, q = a.platform, U = q === void 0 ? o("getPlatformByGK").WDS_PLATFORM : q, V = a.tabOrder, H = a.role, G = a["aria-pressed"], z = babelHelpers.objectWithoutPropertiesLoose(a, s), j = U != null ? U : o("getPlatformByGK").WDS_PLATFORM, K = d(!1), Q = K[0], X = K[1], Y = d(!1), J = Y[0], Z = Y[1];
		function ee(e) {
			x !== !0 && (Z(!0), a.onHoverIn == null || a.onHoverIn(e));
		}
		function te(e) {
			x !== !0 && (Z(!1), X(!1), a.onHoverOut == null || a.onHoverOut(e));
		}
		function ne(e) {
			x !== !0 && (X(!0), a.onPressIn == null || a.onPressIn(e));
		}
		function re(e) {
			x !== !0 && (X(!1), a.onPressOut == null || a.onPressOut(e));
		}
		function oe() {
			x !== !0 && X(!1);
		}
		function ae() {
			x !== !0 && X(!1);
		}
		function ie(e) {
			S == null || S(e);
		}
		var le = o("WDSChipConfig").getChipIconSizeAndStyle(j), se = le[0], ue = le[1], ce;
		W != null ? ce = W : i != null && (ce = c.jsx(i, {
			height: se,
			width: se,
			xstyle: ue,
			directional: f
		}));
		var de;
		A === !0 && (de = c.jsx(r("WDSIconIcArrowDropDown.react"), {
			height: se,
			width: se,
			xstyle: ue,
			directional: f
		})), F != null && (de = c.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: o("WDSChipConfig").getButtonFontColor(C, v, x),
			selectable: !1,
			children: r("intlSummarizeNumber")(F)
		}));
		var me;
		w ? me = w : h && ce != null ? me = ce : me = c.jsx(r("WDSText.react"), {
			maxLines: 1,
			xstyle: B && m.truncatedText,
			type: "Body2Emphasized",
			colorName: o("WDSChipConfig").getButtonFontColor(C, v, x),
			selectable: !1,
			children: l
		}), B && (me = c.jsx("span", {
			title: l.toString(),
			children: me
		}));
		var pe = G;
		pe == null && a["aria-selected"] == null && (pe = C);
		var _e = A != null, fe = o("WDSChipConfig").getButtonColorStyles(C, v), ge = h ? o("WDSPressMotionStyles").WDSPressMotionStyles.compact : o("WDSPressMotionStyles").WDSPressMotionStyles.medium;
		return c.jsx(r("WDSTooltip.react"), {
			label: l,
			disabled: !h,
			children: c.jsx(r("BaseButtonV3.react"), babelHelpers.extends({}, z, {
				role: H,
				"aria-pressed": pe,
				disabled: x || void 0,
				variant: { xstyleConfig: babelHelpers.extends({}, fe.xstyleConfig, {
					pressable: [fe.xstyleConfig.pressable, o("WDSPressMotionStyles").WDSPressMotionStyles.pressable],
					pressablePressed: [fe.xstyleConfig.pressablePressed, ge]
				}) },
				sizeVariant: { xstyleConfig: o("WDSChipConfig").getButtonSizeStyles(p, ce != null, de != null && _e, de != null && !_e, h, j) },
				addOnStart: h ? void 0 : ce,
				addOnEnd: h ? void 0 : de,
				ref: n,
				focusable: P && !x,
				onClick: ie,
				onPointerDown: ne,
				onPointerUp: re,
				onPointerCancel: oe,
				onPointerLeave: ae,
				onMouseEnter: ee,
				onMouseLeave: te,
				onFocus: I,
				onBlur: T,
				"data-tab": V,
				hovered: J && !Q,
				pressed: Q,
				id: N,
				testid: void 0,
				children: me
			}))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
