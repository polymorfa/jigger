__d("WAFlowsQuantityInput.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsIconButton.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"displaySmallIcons",
		"enabled",
		"enableV2Style",
		"maxQuantity",
		"minQuantity",
		"onChange",
		"quantity"
	], s, u, c = u || (u = o("react")), d = u.useCallback, m = {
		mainContainer: {
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		iconButtonContainer: {
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderStartStartRadius: "xonzrd",
			borderStartEndRadius: "x91000x",
			borderEndEndRadius: "x6s831t",
			borderEndStartRadius: "xvd4kul",
			$$css: !0
		},
		largeIconButtonContainer: {
			backgroundColor: "x16b0rez",
			paddingTop: "x1h4y3nd",
			paddingInlineEnd: "x16tlnqy",
			paddingBottom: "x15ma6mj",
			paddingInlineStart: "x1bgxvut",
			$$css: !0
		},
		smallIconButtonContainer: {
			backgroundColor: "x5p9t5d",
			paddingTop: "x1vsopq6",
			paddingInlineEnd: "x1rmfiua",
			paddingBottom: "x15c4njp",
			paddingInlineStart: "x12fx06d",
			$$css: !0
		},
		largeIconContainer: {
			width: "xfjcqko",
			height: "xx55fl2",
			$$css: !0
		},
		smallIconContainer: {
			width: "x43akkn",
			height: "xdr870d",
			$$css: !0
		},
		quantityTextDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		enabledIcon: {
			backgroundColor: "x3l9nec",
			$$css: !0
		},
		disabledIcon: {
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		iconButtonContainerV2: {
			borderTopWidth: "x1xne9ju",
			borderInlineEndWidth: "x16afnuc",
			borderBottomWidth: "xkdan4w",
			borderInlineStartWidth: "x1j9wq4p",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderStartStartRadius: "x1eji417",
			borderStartEndRadius: "xzkpoan",
			borderEndEndRadius: "x1k3a427",
			borderEndStartRadius: "xqlen8n",
			backgroundColor: "xjbqb8w",
			paddingTop: "xdw4a7e",
			paddingInlineEnd: "x1jd6uc7",
			paddingBottom: "xejuzgl",
			paddingInlineStart: "xq1n0lg",
			$$css: !0
		},
		iconContainer: {
			width: "xsk17dz",
			height: "xaylbqo",
			$$css: !0
		},
		enabledIconV2: {
			backgroundColor: "x1vej66i",
			$$css: !0
		},
		quantityInputLabelSmall: {
			fontSize: "x1dbuin5",
			$$css: !0
		}
	};
	function p(e, t, n) {
		return [n ? m.iconContainer : t ? m.smallIconContainer : m.largeIconContainer, e ? n ? m.enabledIconV2 : m.enabledIcon : m.disabledIcon];
	}
	function _(t) {
		var n = t.displaySmallIcons, a = n === void 0 ? !1 : n, i = t.enabled, l = i === void 0 ? !0 : i, u = t.enableV2Style, _ = u === void 0 ? !1 : u, f = t.maxQuantity, g = f === void 0 ? o("WAFlowsComponentConstants").QUANTITY_INPUT_MAX_VALUE : f, h = t.minQuantity, y = h === void 0 ? o("WAFlowsComponentConstants").QUANTITY_INPUT_MIN_VALUE : h, C = t.onChange, b = t.quantity, v = b === void 0 ? o("WAFlowsComponentConstants").QUANTITY_INPUT_INITIAL_VALUE : b, S = babelHelpers.objectWithoutPropertiesLoose(t, e), R = l && v > y, L = l && v < g, E = o("WAFlowsEnvContext.react").useWAFlowsEnv(), k = E.env, I = _ && k.platform === "android", T = d(function() {
			C && C(v - 1, v);
		}, [v, C]), D = d(function() {
			C && C(v + 1, v);
		}, [v, C]), x = I ? o("WAFlowsLabel.react").WAFlowsLabelSmall : o("WAFlowsLabel.react").WAFlowsLabel;
		return c.jsxs("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props([m.mainContainer, S.xstyle]), { children: [
			c.jsx(r("WAFlowsIconButton.react"), {
				iconID: "waf_minus",
				onClick: T,
				altText: o("WAFlowsLocalization").getAltTextForQuantityInputMinusBtn(),
				ariaDescribedBy: "QuantityInputMinusBtnSelector",
				ariaLabel: o("WAFlowsLocalization").getAltTextForQuantityInputMinusBtn(),
				enabled: R,
				xstyleIcon: p(R, a, I),
				xstyleBackground: [m.iconButtonContainer, I ? m.iconButtonContainerV2 : a ? m.smallIconButtonContainer : m.largeIconButtonContainer]
			}),
			c.jsx("div", babelHelpers.extends({}, {
				0: { className: "xp8d6y2 xwaiz5r x6s0dn4 xl56j7k x78zum5" },
				1: { className: "xp8d6y2 xwaiz5r x6s0dn4 xl56j7k x78zum5 xf00w7v x1d60ukw" }
			}[!I << 0], { children: c.jsx(x, {
				text: v.toString(),
				textAlign: "center",
				htmlFor: "quantity_input",
				dataTestId: S.dataTestId,
				xstyle: [!l && m.quantityTextDisabled, _ || k.platform === "ios" ? m.quantityInputLabelSmall : null],
				fontWeight: I ? "medium" : "normal"
			}) })),
			c.jsx(r("WAFlowsIconButton.react"), {
				iconID: "waf_plus",
				onClick: D,
				altText: o("WAFlowsLocalization").getAltTextForQuantityInputPlusBtn(),
				ariaDescribedBy: "QuantityInputPlusBtnSelector",
				ariaLabel: o("WAFlowsLocalization").getAltTextForQuantityInputPlusBtn(),
				enabled: L,
				xstyleIcon: p(L, a, I),
				xstyleBackground: [
					m.iconButtonContainer,
					a ? m.smallIconButtonContainer : m.largeIconButtonContainer,
					I ? m.iconButtonContainerV2 : null
				]
			})
		] }));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
