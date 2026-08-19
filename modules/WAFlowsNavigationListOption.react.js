__d("WAFlowsNavigationListOption.react", [
	"fbt",
	"WAFlowsBadge.react",
	"WAFlowsContentBlock.react",
	"WAFlowsEnvContext.react",
	"WAFlowsGet",
	"WAFlowsIcon.react",
	"WAFlowsImage.react",
	"WAFlowsLocalization",
	"WAFlowsStateProvider.react",
	"WAFlowsTagsList.react",
	"WAFlowsUsePressedState",
	"WAFlowsUtils",
	"WDNativeImageComponentConstant",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"enabled",
		"hasImages",
		"navigationListRef"
	], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = "10px 30px", h = "x19ml7pd-B", y = "x626qny-B", C = {
		chevronRTL: {
			transform: "x19jd1h0",
			$$css: !0
		},
		itemContainer: {
			paddingLeft: "x9dzeaa",
			paddingRight: "x52dz5p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		}
	}, b = {
		itemContainer: {
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			"::after_opacity": "xmf22ne",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_backgroundColor": "xvn5ife",
			"::after_left": "xa667ol",
			"::after_right": "x1e9ms35",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_top": "x1m1drc7",
			"::after_bottom": "x1xrz1ek",
			"::after_zIndex": "xi4xitw",
			"::after_animationTimingFunction": "x1a986gr",
			"::after_animationFillMode": "x17pmmvk",
			"::after_animationDuration": "xml25ke",
			"::after_willChange": "x12j4teu",
			"::after_pointerEvents": "x2q1x1w",
			$$css: !0
		},
		optionContainerButtonPressed: {
			"::after_animationName": "xa0psnz",
			$$css: !0
		},
		optionContainerButtonNotPressed: {
			"::after_animationName": "xkdns79",
			$$css: !0
		},
		chevron: {
			transform: "x1rbgqaq",
			height: "x1pazyae",
			width: "x1y6pbyt",
			$$css: !0
		},
		chevronRTL: {
			transform: "x1iffjtl",
			$$css: !0
		}
	}, v = {
		hover: {
			":hover:after_animationDuration": "x1bjxnk",
			":hover:after_animationFillMode": "x16ltz6m",
			":hover:after_animationTimingFunction": "x11us75d",
			":hover:after_backgroundColor": "xq2izel",
			":hover:after_bottom": "x10ea3x",
			":hover:after_content": "x13u7r2b",
			":hover:after_left": "xe7wlq5",
			":hover:after_position": "xxlk3ui",
			":hover:after_right": "xjwme9s",
			":hover:after_insetInlineStart": null,
			":hover:after_insetInlineEnd": null,
			":hover:after_top": "x1q6ef53",
			":hover:after_willChange": "x1dvmqga",
			":hover:after_zIndex": "x1ugujaf",
			":focus-visible:after_borderTopColor": "x1qd7q8e",
			":focus-visible:after_borderInlineEndColor": "xlba9sa",
			":focus-visible:after_borderBottomColor": "x1y3cekh",
			":focus-visible:after_borderInlineStartColor": "x1da28aw",
			":focus-visible:after_borderTopStyle": "xv20ttu",
			":focus-visible:after_borderInlineEndStyle": "xll8nk5",
			":focus-visible:after_borderBottomStyle": "x1tif7y5",
			":focus-visible:after_borderInlineStartStyle": "x19bg6l1",
			":focus-visible:after_borderTopWidth": "x191mwxe",
			":focus-visible:after_borderInlineEndWidth": "xzoj9lz",
			":focus-visible:after_borderBottomWidth": "x2rvnex",
			":focus-visible:after_borderInlineStartWidth": "xs3cgf5",
			":focus-visible:after_bottom": "xhyhkv4",
			":focus-visible:after_content": "xjg22vo",
			":focus-visible:after_left": "xfa0z2w",
			":focus-visible:after_position": "x1noxyw7",
			":focus-visible:after_right": "x12956gh",
			":focus-visible:after_insetInlineStart": null,
			":focus-visible:after_insetInlineEnd": null,
			":focus-visible:after_top": "x1jp5syn",
			":focus-visible:after_willChange": "x1ldkc4z",
			":focus-visible:after_zIndex": "xtrba2w",
			":focus-visible_outline": "xk2swo9",
			$$css: !0
		},
		itemContainer: {
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			$$css: !0
		},
		chevron: {
			transform: "x1rbgqaq",
			height: "x1pazyae",
			width: "x1y6pbyt",
			$$css: !0
		},
		chevronRTL: {
			transform: "x1iffjtl",
			$$css: !0
		}
	}, S = {
		paddingBottomWithTags: {
			paddingBottom: "xmnamis",
			$$css: !0
		},
		paddingBottomNoTags: {
			paddingBottom: "x2yie3v",
			$$css: !0
		},
		itemContainer: {
			paddingTop: "x12t3zde",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			width: "x1qrby5j",
			columnGap: "x1izhsip",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		mainColumnContainer: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		alignStart: {
			alignSelf: "x1y8v6su",
			$$css: !0
		},
		alignCenter: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		endAddOnAligment: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		endAddOnInlineAlignment: {
			alignItems: "xuk3077",
			$$css: !0
		},
		endAddOnContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "xuk3077",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			maxWidth: "x10i8ze8",
			$$css: !0
		},
		wrapEndAddOnContainer: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			width: "x1qrby5j",
			$$css: !0
		},
		imageContainer: {
			borderTopWidth: "xt8cgyo",
			borderInlineEndWidth: "x128c8uf",
			borderBottomWidth: "x1co6499",
			borderInlineStartWidth: "xc5fred",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x70ww71",
			borderInlineEndColor: "x19ux63p",
			borderBottomColor: "xcrgkh0",
			borderInlineStartColor: "x1rdera9",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		disabledState: {
			opacity: "xkx5w7",
			$$css: !0
		}
	}, R = 70, L = 58, E = 72, k = 65;
	function I(t) {
		var n, a = t.enabled, i = a === void 0 ? !0 : a, l = t.hasImages, s = l === void 0 ? !1 : l, c = t.navigationListRef, m = babelHelpers.objectWithoutPropertiesLoose(t, e), g = _(null), h = f(0), y = h[0], C = h[1], b = o("WAFlowsEnvContext.react").useWAFlowsEnv(), v = b.env, R = o("WAFlowsStateProvider.react").useWAFlowsState(), L = R.internal.scrollConfig, I = w(v.platform);
		p(function() {
			C(function(e) {
				return e || parseInt(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", c.current), 10);
			});
		}, [c]);
		var T = o("WAFlowsUsePressedState").usePressedState(v, y, g, L == null ? void 0 : L.isScrolling), D = (n = r("WAFlowsGet")(m, ["main-content"])) != null ? n : { title: "" }, x = Object.values(o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType), $ = x.includes(m.mediaSize) ? m.mediaSize : o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType.REGULAR, A = m.tags != null && m.badge == null ? S.paddingBottomWithTags : S.paddingBottomNoTags, F = _(), O = v.platform === "ios" ? k : E, B = o("WAFlowsUtils").useUpdateContentWrap(O, F, m.setIsTopAligned, m.isTopAligned), W = function(t) {
			t.stopPropagation(), t.preventDefault(), i && m.onChange(m.id);
		};
		return d.jsxs("section", babelHelpers.extends({
			"data-testid": void 0,
			tabIndex: 0,
			ref: g,
			role: "button"
		}, (u || (u = r("stylex"))).props([
			S.itemContainer,
			I.itemContainer,
			i && I.hover,
			!i && S.disabledState,
			T && i === !0 ? I.optionContainerButtonPressed : I.optionContainerButtonNotPressed
		]), {
			onKeyDown: function(t) {
				t.key === "Enter" && W(t);
			},
			onClick: W,
			children: [
				d.jsx(N, {
					hasImages: s,
					isStartAligned: B === !0,
					mediaSize: $,
					start: m.start,
					title: D.title
				}),
				d.jsx(M, {
					badge: m.badge,
					containerBottomPadding: A,
					end: m.end,
					hasOneColumn: m.hasOneColumn,
					isStartAligned: B === !0,
					mainContainerRef: F,
					mainContentProps: D,
					tags: m.tags
				}),
				d.jsx(P, {
					end: m.end,
					hasOneColumn: m.hasOneColumn,
					setHasOneColumn: m.setHasOneColumn,
					isStartAligned: B === !0,
					isRTL: v.isRTL,
					platformChevronStyle: I.chevron,
					platformChevronRTLStyle: I.chevronRTL
				})
			]
		}));
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.description, n = e.metadata, o = e.title;
		return d.jsx(r("WAFlowsContentBlock.react"), {
			title: o,
			description: t,
			metadata: n
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.xstyle, n = e.description, a = e.hasOneColumn, i = e.metadata, l = e.setHasOneColumn, s = e.title, c = o("WAFlowsEnvContext.react").useWAFlowsEnv(), m = c.env, p = m.platform === "ios" ? L : R, f = _(), g = o("WAFlowsUtils").useUpdateContentWrap(p, f, l, a);
		return n == null && s == null && i == null ? null : d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g === !1 ? S.endAddOnContainer : S.wrapEndAddOnContainer, a === !0 ? S.alignStart : S.alignCenter, t), {
			ref: f,
			children: (s != null || n != null || i != null) && d.jsx(r("WAFlowsContentBlock.react"), {
				title: s,
				description: n,
				metadata: i,
				xstyle: [S.endAddOnAligment, g === !1 && S.endAddOnInlineAlignment]
			})
		}));
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.altText, n = e.image, r = e.mediaSize, a = e.title, i = [S.imageContainer], l = o("WDNativeImageComponentConstant").WDSNativeNavListMediaSizeToContainerSize[r];
		return d.jsx("div", {
			className: "x1y8v6su",
			children: d.jsx(o("WAFlowsImage.react").WAFlowsImage, {
				altText: o("WAFlowsLocalization").getListImageAltTextFbt(t != null ? t : a),
				mediaSize: r,
				src: n != null ? n : "",
				width: l,
				height: l,
				scaleType: "cover",
				xstyle: i,
				isImageInPicker: !0,
				hasFixedSize: !0,
				maxFileSize: o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE
			})
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.badge, n = e.tags;
		return !(n != null && n.length) && t == null ? null : t != null ? d.jsx(r("WAFlowsBadge.react"), { text: t }) : n != null && d.jsx(r("WAFlowsTagsList.react"), { tags: n });
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.end, n = e.hasOneColumn, o = e.isRTL, a = e.isStartAligned, i = e.platformChevronRTLStyle, l = e.platformChevronStyle, u = e.setHasOneColumn, c = a ? S.alignStart : S.alignCenter;
		return !n && t != null ? d.jsx(D, babelHelpers.extends({}, t, {
			setHasOneColumn: u,
			hasOneColumn: n,
			xstyle: [c, S.paddingBottomNoTags]
		})) : d.jsx("div", {
			className: "x2yie3v",
			children: d.jsx(r("WAFlowsIcon.react"), {
				altText: s._(
					/*BTDS*/
					""
				),
				xstyle: [l, o && i],
				id: "waf_chevron_secondary"
			})
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.hasImages, n = e.isStartAligned, o = e.mediaSize, a = e.start, i = e.title;
		if (a == null && !t) return null;
		var l = n ? S.alignStart : S.alignCenter;
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(S.paddingBottomNoTags, l), { children: d.jsx(x, babelHelpers.extends({}, a, {
			mediaSize: o,
			title: i
		})) }));
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.badge, n = e.containerBottomPadding, o = e.end, a = e.hasOneColumn, i = e.isStartAligned, l = e.mainContainerRef, s = e.mainContentProps, c = e.tags, m = i ? S.alignStart : S.alignCenter;
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(S.mainColumnContainer, n, m), { children: d.jsxs("div", {
			className: "x78zum5 xdt5ytf x1fc8kun",
			ref: i ? void 0 : l,
			children: [
				d.jsx(T, babelHelpers.extends({}, s)),
				a && d.jsx(D, babelHelpers.extends({}, o, { hasOneColumn: a })),
				d.jsx($, {
					tags: c,
					badge: t
				})
			]
		}) }));
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t = {
			android: b,
			ios: C,
			wa_web: v
		};
		return t[e];
	}
	l.WAFlowsNavigationListOption = I;
}), 226);
