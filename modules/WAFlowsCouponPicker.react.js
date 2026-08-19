__d("WAFlowsCouponPicker.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsIconButton.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsStateProvider.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = !0, d = {
		invisibleButton: {
			borderStartStartRadius: null,
			borderStartEndRadius: null,
			borderEndEndRadius: null,
			borderEndStartRadius: null,
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			backgroundColor: "xjbqb8w",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		flexRow: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			columnGap: "x1izhsip",
			$$css: !0
		},
		iconAndLabel: {
			flexGrow: "x1iyjqo2",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		plusIcon: {
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		emptyValue: {
			color: "xo1mcw5",
			$$css: !0
		},
		filledValue: {
			color: "x14ug900",
			$$css: !0
		},
		disabled: {
			opacity: "x1cvbfqh",
			$$css: !0
		},
		discountDescription: {
			color: "xhslqc4",
			$$css: !0
		}
	}, m = {
		iconAndLabel: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xsaxbkt",
			paddingInlineStart: "x8945me",
			$$css: !0
		},
		offerTagIcon: {
			width: "xh29eag",
			height: "xb8l8e1",
			backgroundColor: "x3l9nec",
			$$css: !0
		},
		removeIconButton: {
			width: "xwqq7k2",
			height: "xmll18r",
			backgroundColor: "x3l9nec",
			$$css: !0
		},
		removeIconButtonBg: {
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			$$css: !0
		}
	}, p = {
		rootContainer: {
			paddingTop: "x12t3zde",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		offerTagIcon: {
			width: "xp8d6y2",
			height: "xam5rvr",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		offerTagIconContainer: {
			borderStartStartRadius: "x1r3yvgy",
			borderStartEndRadius: "x10qicr6",
			borderEndEndRadius: "x9ro07m",
			borderEndStartRadius: "x1frmzlk",
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "xqfkjy8",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x1rgrh6f",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		removeIconButton: {
			width: "xp8d6y2",
			height: "xam5rvr",
			backgroundColor: "x3qdkio",
			$$css: !0
		},
		removeIconButtonBg: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	};
	function _(t) {
		var n, a, i = t.ref, l = t.onClick, s = t.label, m = t.selectedValue, p = m === void 0 ? "" : m, _ = t.enabled, g = _ === void 0 ? c : _, h = t.onClear, y = o("WAFlowsEnvContext.react").useWAFlowsEnv(), C = y.env, b = o("WAFlowsStateProvider.react").useWAFlowsState().internal.shopping, v = f(C.platform), S = p.length === 0 ? s : o("WAFlowsLocalization").getCouponAppliedFbt(p), R = (n = b == null || (a = b.shoppingCart) == null || (a = a.coupon) == null || (a = a.discount) == null ? void 0 : a.description) != null ? n : "", L = p.length === 0 || R === "" ? "" : R;
		return u.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (e || (e = r("stylex"))).props([
			g ? null : d.disabled,
			v.rootContainer,
			d.flexRow
		]), { children: [u.jsxs("button", babelHelpers.extends({
			ref: i,
			disabled: !g
		}, e.props([
			d.flexRow,
			d.iconAndLabel,
			v.iconAndLabel,
			d.invisibleButton
		]), {
			"aria-label": S.toString() + ". " + L,
			onClick: l,
			children: [
				C.platform === "android" && p.length === 0 && u.jsx(r("WAFlowsIcon.react"), {
					id: "waf_plus",
					xstyle: d.plusIcon
				}),
				p.length !== 0 && u.jsx(r("WAFlowsIcon.react"), {
					id: "waf_offer_tag",
					xstyle: v.offerTagIcon,
					responsiveFontContainerXStyle: v.offerTagIconContainer
				}),
				u.jsxs("div", { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					xstyle: p.length ? d.filledValue : d.emptyValue,
					ariaLabel: S,
					text: S
				}), L !== "" && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					xstyle: p.length ? d.discountDescription : d.emptyValue,
					ariaLabel: L,
					text: L
				})] })
			]
		})), p.length !== 0 && u.jsx(r("WAFlowsIconButton.react"), {
			enabled: g,
			onClick: h,
			ariaDescribedBy: "waf_coupon_picker_remove_icon",
			ariaLabel: o("WAFlowsLocalization").getShoppingRemoveCouponFbt(),
			altText: o("WAFlowsLocalization").getShoppingRemoveCouponFbt(),
			xstyleIcon: v.removeIconButton,
			xstyleBackground: [d.invisibleButton, v.removeIconButtonBg],
			iconID: "waf_times"
		})] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e === "android" ? p : m;
	}
	l.default = _;
}), 98);
