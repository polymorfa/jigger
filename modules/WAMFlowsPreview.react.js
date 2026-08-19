__d("WAMFlowsPreview.react", [
	"GeoFlexbox.react",
	"WAFlowsPreviewDeviceScreen.react",
	"WAMFlowsFlowProvider.react",
	"WhatsAppGkConfig",
	"geoWidth",
	"react",
	"useStyleXTransitionSingle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 640, c = {
		bottomSheet: {
			backgroundColor: "x12peec7",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			bottom: "x1ey2m1c",
			maxHeight: "xzhrocu",
			position: "x10l6tqk",
			transform: "x1weeur4",
			transitionProperty: "x11xpdln",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		bottomSheetFixedHeight: {
			height: "x1p1iix",
			$$css: !0
		},
		bottomSheetTransitionEnter: {
			transform: "xnn1q72",
			$$css: !0
		},
		bottomSheetTransitionLeave: {
			transform: "x1weeur4",
			$$css: !0
		},
		relative: {
			position: "x1n2onr6",
			$$css: !0
		},
		screenContainer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		screenContainerDarkBorder: {
			borderTopColor: "xkbhlo",
			borderInlineEndColor: "x1nl6wpg",
			borderBottomColor: "x13fxw37",
			borderInlineStartColor: "xqe1wwh",
			$$css: !0
		},
		screenContainerLightBorder: {
			borderTopColor: "xa98mnw",
			borderInlineEndColor: "x1drfh7l",
			borderBottomColor: "xtzk3ly",
			borderInlineStartColor: "x1v2liry",
			$$css: !0
		},
		screenContainerScaled: {
			scale: "x1tqmzwv",
			$$css: !0
		},
		screenContainerShadow: {
			boxShadow: "xvmsmd7",
			"@media (max-height: 1024px)_marginBottom": "x1wkgbrz",
			"@media (max-height: 1024px)_transform": "x7c9vq9",
			"@media (max-width: 1440px)_marginBottom": "x1nozs5s",
			"@media (max-width: 1440px)_transform": "x1vt752g",
			$$css: !0
		},
		scrrenContainerBorder: {
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "x709u02",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xvxx97b",
			borderInlineEndWidth: "x1028phh",
			borderBottomWidth: "x1es37l9",
			borderInlineStartWidth: "xq7a5ml",
			$$css: !0
		}
	}, d = [c.bottomSheet, r("WhatsAppGkConfig").waFlowsBuilderPreviewFixedHeight ? c.bottomSheetFixedHeight : null];
	function m(e) {
		var t = e.children, n = e.completionMessageCTAType, a = e.completionMessageText, i = e.ctwaImageCreative, l = e.ctwaWelcomeMessage, m = e.hideBorder, p = m === void 0 ? !1 : m, _ = e.isCompletionMessageEnabled, f = _ === void 0 ? !1 : _, g = e.isPreviewDisabled, h = e.isScaledPreview, y = h === void 0 ? !1 : h, C = e.onFlowPreview, b = e.onHideAnimationEnd, v = e.platform, S = e.showOverlayOnFlowPreview, R = S === void 0 ? !1 : S, L = e.theme, E = o("WAMFlowsFlowProvider.react").useWAMFlow(), k = E.isFlowVisible, I = r("useStyleXTransitionSingle")(k ? "bottom-sheet" : null, {
			base: [d, r("geoWidth").fullWidth],
			duration: 300,
			enter: c.bottomSheetTransitionEnter,
			leave: c.bottomSheetTransitionLeave,
			onLeaveComplete: b
		}), T = L === "dark" ? c.screenContainerDarkBorder : c.screenContainerLightBorder;
		return s.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			xstyle: [
				c.relative,
				c.screenContainer,
				y && c.screenContainerScaled
			].concat(p ? [] : [
				c.screenContainerShadow,
				c.scrrenContainerBorder,
				T
			]),
			children: [
				s.jsx(o("WAFlowsPreviewDeviceScreen.react").WAFlowsPreviewDeviceScreen, {
					completionMessageCTAType: n,
					completionMessageText: a,
					ctwaImageCreative: i,
					ctwaWelcomeMessage: l,
					height: u,
					isCompletionMessageEnabled: f,
					isPreviewDisabled: g,
					onOpen: function() {
						C();
					},
					platform: v,
					theme: L,
					width: 360
				}),
				R && s.jsx("div", babelHelpers.extends({}, {
					0: { className: "x18l40ae x1ey2m1c xu96u03 xg01cxk x47corl x10l6tqk x3m8u43 x13vifvy x1d8287x x19991ni x9lcvmn" },
					1: { className: "x18l40ae x1ey2m1c xu96u03 x47corl x10l6tqk x3m8u43 x13vifvy x1d8287x x19991ni x9lcvmn x1hc1fzr" }
				}[!!k << 0])),
				I && s.jsx(r("GeoFlexbox.react"), {
					direction: "column",
					style: I.style,
					xstyle: [d, I.xstyle],
					children: t
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.WAMFlowsPreview = m;
}), 98);
