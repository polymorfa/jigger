__d("WDSBanner.react", [
	"WAWebFbtCommon",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcError.react",
	"WDSIconIcLightbulb.react",
	"WDSIconIcWarning.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"WDSTooltip.react",
	"err",
	"getPlatformByGK",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = 36, d = 40, m = {
		container: {
			columnGap: "xs2akgl",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		containerWithBoxShadow: {
			boxShadow: "xokadva",
			$$css: !0
		},
		icon: {
			objectFit: "x19kjcj4",
			$$css: !0
		},
		bordered: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			$$css: !0
		}
	}, p = {
		default: {
			backgroundColor: "x1abdmlv",
			$$css: !0
		},
		warning: {
			backgroundColor: "xj44v4f",
			$$css: !0
		},
		tip: {
			backgroundColor: "x1280gxy",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			$$css: !0
		},
		error: {
			backgroundColor: "xrkjzwr",
			$$css: !0
		}
	}, _ = { container: {
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		paddingTop: "x1xrf6ya",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xscbp6u",
		paddingInlineStart: "xdx6fka",
		$$css: !0
	} }, f = { container: {
		borderStartStartRadius: "xoqha5s",
		borderStartEndRadius: "x16jayiz",
		borderEndEndRadius: "xlylnr5",
		borderEndStartRadius: "x17ximpp",
		paddingTop: "x1xrf6ya",
		paddingInlineEnd: "xde1mab",
		paddingBottom: "xscbp6u",
		paddingInlineStart: "x1iw51ew",
		$$css: !0
	} }, g = {
		default: {
			color: "x1v5yvga",
			$$css: !0
		},
		warning: {
			color: "x1f81s73",
			$$css: !0
		},
		tip: {
			color: "xhslqc4",
			$$css: !0
		},
		error: {
			color: "x30a034",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.actionText, a = t.body, i = t.bordered, l = i === void 0 ? !1 : i, s = t.boxShadowEnabled, h = s === void 0 ? !1 : s, y = t.icon, C = t.onAction, b = t.onDismiss, v = t.platform, S = v === void 0 ? o("getPlatformByGK").WDS_PLATFORM : v, R = t.ref, L = t.tabOrder, E = t.testid, k = t.title, I = t.type, T = S === "iOS", D = T ? d : c, x = y;
		if (I === "warning" ? x = r("WDSIconIcWarning.react") : I === "tip" ? x = r("WDSIconIcLightbulb.react") : I === "error" && (x = r("WDSIconIcError.react")), a == null && k == null && n == null) throw r("err")("WDSBanner used without any content");
		return u.jsxs("div", {
			ref: R,
			className: "x1n2onr6",
			"data-testid": void 0,
			children: [b != null && u.jsx("div", {
				className: "x67dgr1 x10l6tqk x1ngp85i",
				children: u.jsx(r("WDSTooltip.react"), {
					label: r("WAWebFbtCommon")("Close"),
					children: u.jsx(r("WDSButton.react"), {
						variant: "borderless",
						size: "medium",
						onPress: function() {
							b();
						},
						Icon: r("WDSIconIcClose.react"),
						"aria-label": r("WAWebFbtCommon")("Close"),
						tabOrder: L
					})
				})
			}), u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				m.container,
				T ? f.container : _.container,
				!T && p[I],
				l && m.bordered,
				h && m.containerWithBoxShadow
			]), { children: [x != null && u.jsx(x, {
				viewBox: {
					x: 0,
					y: 0,
					width: 24,
					height: 24
				},
				xstyle: [g[I], m.icon],
				width: D,
				height: D
			}), u.jsxs("div", {
				className: "x78zum5 xdt5ytf x129bwdz x1yc453h",
				children: [k != null && u.jsx("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "xp48ta0" }
				}[(b != null) << 0], { children: u.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentDefault",
					maxLines: 2,
					children: k
				}) })), u.jsx("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "xp48ta0" }
				}[(k == null && b != null) << 0], { children: u.jsxs(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: [a, n != null && u.jsxs(u.Fragment, { children: ["\xA0", u.jsx(r("WDSTextualLink.react"), {
						onClick: C,
						"data-tab": L,
						children: n
					})] })]
				}) }))]
			})] }))]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
