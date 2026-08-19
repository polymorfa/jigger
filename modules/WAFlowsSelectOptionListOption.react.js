__d("WAFlowsSelectOptionListOption.react", [
	"WAFlowsColour.react",
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsImage.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsTickInput.react",
	"WAFlowsUtils",
	"WDNativeImageComponentConstant",
	"WDSNativeSelectListOptionConstant",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = 24, g = "10px 30px", h = "x19ml7pd-B", y = "x626qny-B", C = {
		android: 48,
		ios: 44,
		wa_web: 32
	}, b = {
		blockContainer: {
			boxSizing: "x9f619",
			$$css: !0
		},
		optionContainerButton: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			alignItems: "x6s0dn4",
			appearance: "xjyslct",
			width: "xh8yej3",
			backgroundColor: "xjbqb8w",
			color: "x1heor9g",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			outline: "x1a2a7pz",
			$$css: !0
		},
		optionTitleDisabled: {
			opacity: "xtfnd2r",
			$$css: !0
		},
		optionDescriptionDisabled: {
			opacity: "x1icm1lw",
			$$css: !0
		},
		optionMetadataColumnWrapper: {
			flexGrow: "xgmij7l",
			flexShrink: "x5wqa0o",
			minWidth: "xb1udk4",
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			$$css: !0
		},
		optionMetadataColumnWrapperMultiline: {
			justifyContent: "x1nhvcw1",
			paddingTop: "x1iul6r4",
			$$css: !0
		},
		optionMetadataColumnWrapperTruncationImprovementsEnabled: {
			width: "xh8yej3",
			flexShrink: "x5wqa0o",
			$$css: !0
		},
		optionMetadataColumn: {
			width: "x14atkfc",
			$$css: !0
		},
		optionMetadataColumnDisabled: {
			opacity: "x1a866tc",
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
			borderTopColor: "x1nltdlb",
			borderInlineEndColor: "x1n2sthp",
			borderBottomColor: "x14c79ym",
			borderInlineStartColor: "xpxvak5",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		disabledAndNotSelected: {
			opacity: "xkx5w7",
			$$css: !0
		},
		optionContentPaddingLTR: {
			paddingRight: "x33uob6",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		optionContentPaddingRTL: {
			paddingLeft: "x79ra4s",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		opacityTransition: {
			transitionProperty: "x19991ni",
			transitionDuration: "xq7dr57",
			$$css: !0
		}
	}, v = {
		blockContainer: {
			minHeight: "x1gg8mnh",
			$$css: !0
		},
		optionDescription: {
			color: "xhslqc4",
			$$css: !0
		},
		optionMetadataColumnEnabled: {
			color: "xorj6pj",
			$$css: !0
		},
		optionContainerButtonPadding: {
			paddingTop: "xzi3mdb",
			paddingInlineEnd: "x193vv82",
			paddingBottom: "xxbrewl",
			paddingInlineStart: "x1d8cgvq",
			$$css: !0
		},
		blockContainerOption: {
			position: "x1n2onr6",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_bottom": "x1xrz1ek",
			"::after_right": "xnbfe2x",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_height": "xex3w2j",
			"::after_backgroundColor": "x1dwy1gy",
			":last-child::after_display": "xsrs1j1",
			$$css: !0
		},
		dividerWithStartPadding: {
			"::after_width": "x1itn6jy",
			$$css: !0
		},
		dividerWithoutStartPadding: {
			"::after_width": "x4eaejv",
			$$css: !0
		},
		imageContainerLTR: {
			marginRight: "xdh7pzt",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		imageContainerRTL: {
			marginLeft: "xuqiktq",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		disabledItem: {
			opacity: "xkx5w7",
			$$css: !0
		}
	}, S = {
		optionDescription: {
			color: "xhslqc4",
			$$css: !0
		},
		optionMetadataColumnEnabled: {
			color: "xorj6pj",
			$$css: !0
		},
		optionContainerDropdownButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xsaxbkt",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		optionContainerButton: {
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
		optionContainerButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xsaxbkt",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		optionContainsLastButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		blockContainer: {
			minHeight: "x1wxaq2x",
			$$css: !0
		},
		blockLastContainer: {
			minHeight: "x65nank",
			$$css: !0
		},
		selectedOption: {
			color: "x1v5yvga",
			fontWeight: "x12ioufu",
			$$css: !0
		},
		blockContainerOptions: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		imageContainerLTR: {
			marginRight: "x1t5w0y4",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		imageContainerRTL: {
			marginLeft: "xt3xpxm",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	}, R = {
		blockContainer: {
			minHeight: "x21xpn4",
			$$css: !0
		},
		optionDescription: {
			color: "xhslqc4",
			$$css: !0
		},
		optionMetadataColumnEnabled: {
			color: "xorj6pj",
			$$css: !0
		},
		optionContainerDropdownButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "x193vv82",
			paddingBottom: "xsaxbkt",
			paddingInlineStart: "x1d8cgvq",
			$$css: !0
		},
		optionContainerDropdownButtonHoverAndFocus: {
			":hover_backgroundColor": "x1ubxc9n",
			":focus-visible_backgroundColor": "xy28gfk",
			$$css: !0
		},
		optionContainerButton: {
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
		contextualMenuButton: {
			":hover_backgroundColor": "x1ubxc9n",
			":hover_borderStartStartRadius": "x166zhl2",
			":hover_borderStartEndRadius": "x1mowo",
			":hover_borderEndEndRadius": "x1apalnj",
			":hover_borderEndStartRadius": "x1opdvn9",
			":focus-visible_outline": "xmpb5ev",
			":focus-visible_backgroundColor": "xy28gfk",
			":focus-visible_borderStartStartRadius": "xh01mxq",
			":focus-visible_borderStartEndRadius": "xpg0krl",
			":focus-visible_borderEndEndRadius": "xglpzkh",
			":focus-visible_borderEndStartRadius": "xrzvfyg",
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
		optionContainerButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xsaxbkt",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		contextMenuOptionContainerButtonPadding: {
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "xqfkjy8",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x1rgrh6f",
			$$css: !0
		},
		optionContainsLastButtonPadding: {
			paddingTop: "x1q57ora",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		blockLastContainer: {
			minHeight: "x65nank",
			$$css: !0
		},
		selectedOption: {
			color: "x1v5yvga",
			fontWeight: "x12ioufu",
			$$css: !0
		},
		blockContainerOptions: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		imageContainerLTR: {
			marginRight: "x1t5w0y4",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		imageContainerRTL: {
			marginLeft: "xt3xpxm",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		contextMenuOption: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function L(t) {
		var n, a = t.id, i = t.title, l = t.description, s = t.metadata, c = t.name, g = t.selectedValue, h = t.enabled, y = t.multiple, C = y === void 0 ? !1 : y, v = t.showSelectedTickIcon, S = v === void 0 ? !0 : v, R = t.onChange, L = t.onKeyDown, k = t.isContextualMenu, I = k === void 0 ? !1 : k, T = t.isDropdownList, D = T === void 0 ? !1 : T, x = t.minPressedDuration, $ = t.isScrolling, P = $ === void 0 ? !1 : $, N = t.iconId, M = t.image, w = t.color, A = t.altText, F = t.mediaSize, O = F === void 0 ? o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType.REGULAR : F, B = t.isMultilineMeta, W = t.setIsMultilineMeta, q = t.version, U = t.isLastOption, V = U === void 0 ? !1 : U, H = p(null), G = p({ lastPressedTime: 0 }), z = _(null), j = z[0], K = z[1], Q = o("WAFlowsEnvContext.react").useWAFlowsEnv(), X = Q.env, Y = E(X.platform), J = X.platform === "ios", Z = c + "-" + a, ee = g != null ? Array.isArray(g) && C ? g.includes(a) : g === a : !1, te = p(), ne = (n = o("WAFlowsUtils").useUpdateContentWrap(f, te, W, B)) != null ? n : !1, re = C ? "checkbox" : D ? X.platform === "ios" ? "ios-dropdown" : "android-dropdown" : "radio", oe = o("WAFlowsLocalization").getListOptionAltTextFbt(i + ". " + (l != null ? l : "") + ". " + (s != null ? s : "")), ae = {};
		X.platform === "android" && (C ? ae = {
			role: "menuitemcheckbox",
			"aria-checked": ee,
			"aria-label": oe
		} : I || D ? ae = {
			role: "menuitem",
			"aria-label": oe
		} : ae = {
			role: "menuitemradio",
			"aria-checked": ee,
			"aria-label": oe
		});
		var ie = function() {
			return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		}, le = d(function() {
			j !== !0 && (K(!0), G.current.lastPressedTime = Date.now());
		}, [j]), se = d(function() {
			if (j === !0) {
				var e = Date.now() - G.current.lastPressedTime;
				e > x ? K(!1) : window.setTimeout(function() {
					K(!1);
				}, x - e);
			}
		}, [j, x]);
		m(function() {
			if (X.platform === "android") {
				var e = H.current, t = {
					setPress: ["mousedown"],
					unsetPress: ["mouseup", "mouseleave"]
				}, n = {
					setPress: ["touchstart"],
					unsetPress: [
						"touchend",
						"touchmove",
						"touchcancel"
					]
				}, r = ie() ? n : t;
				return r.setPress.forEach(function(t) {
					e == null || e.addEventListener(t, le);
				}), r.unsetPress.forEach(function(t) {
					e == null || e.addEventListener(t, se);
				}), function() {
					r.setPress.forEach(function(t) {
						e == null || e.removeEventListener(t, le);
					}), r.unsetPress.forEach(function(t) {
						e == null || e.removeEventListener(t, se);
					});
				};
			}
		}, [
			X.platform,
			le,
			se
		]), m(function() {
			P && se();
		}, [P, se]);
		var ue = D && ee, ce = h ? {} : X.platform === "android" && ue ? {} : b.disabledAndNotSelected, de = [
			b.imageContainer,
			ce,
			b.opacityTransition,
			X.isRTL ? Y.imageContainerRTL : Y.imageContainerLTR
		], me = function(t) {
			var e = {
				text: t,
				dataTestId: Z + "-metadata",
				htmlFor: Z,
				responsiveFontContainerXStyle: [
					b.optionMetadataColumnWrapper,
					b.optionMetadataColumnWrapperTruncationImprovementsEnabled,
					ne ? b.optionMetadataColumnWrapperMultiline : void 0
				],
				xstyle: [
					b.opacityTransition,
					b.optionMetadataColumn,
					h ? Y.optionMetadataColumnEnabled : b.optionMetadataColumnDisabled
				]
			};
			return ne ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, babelHelpers.extends({ maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_OPTION_METADATA_MULTILINE }, e)) : u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, babelHelpers.extends({ ref: te }, e, { xstyle: [].concat(e.xstyle, [X.isRTL ? b.optionContentPaddingRTL : b.optionContentPaddingLTR]) }));
		}, pe = o("WDNativeImageComponentConstant").WDSNativePickerMediaSizeToContainerSize[O], _e = function() {
			return X.platform === "wa_web" && I ? Y.contextMenuOptionContainerButtonPadding : X.platform === "ios" || X.platform === "wa_web" && !D ? Y.optionContainerButtonPadding : D ? [Y.optionContainerDropdownButtonPadding, h && Y.optionContainerDropdownButtonHoverAndFocus] : V ? Y.optionContainsLastButtonPadding : Y.optionContainerButtonPadding;
		};
		return u.jsx("li", babelHelpers.extends({}, (e || (e = r("stylex"))).props(b.blockContainer, V && X.platform !== "ios" ? Y.blockLastContainer : Y.blockContainer, Y.blockContainerOption, I ? Y.dividerWithoutStartPadding : Y.dividerWithStartPadding, I && X.platform !== "wa_web" && !J ? b.optionContentPaddingRTL : {}), { children: u.jsxs("button", babelHelpers.extends({}, ae, {
			className: e([
				b.optionContainerButton,
				Y.optionContainerButton,
				I && Y.contextualMenuButton,
				_e(),
				h && j === !0 && Y.optionContainerButtonPressed,
				h && j === !1 && Y.optionContainerButtonNotPressed
			]),
			onKeyDown: L,
			onClick: function(t) {
				t.stopPropagation(), t.preventDefault(), R == null || R();
			},
			disabled: !h,
			ref: H,
			children: [
				w != null && M == null && u.jsx(r("WAFlowsColour.react"), {
					color: w,
					colourName: i,
					width: o("WDSNativeSelectListOptionConstant").SELECT_LIST_OPTION_COLOUR_DEFAULT_SIZE,
					height: o("WDSNativeSelectListOptionConstant").SELECT_LIST_OPTION_COLOUR_DEFAULT_SIZE,
					xstyle: de,
					enableImagesInPickers: !0
				}),
				M != null && u.jsx(o("WAFlowsImage.react").WAFlowsImage, {
					altText: o("WAFlowsLocalization").getListImageAltTextFbt(A != null ? A : i),
					mediaSize: O,
					src: M,
					width: pe,
					height: pe,
					scaleType: "cover",
					xstyle: de,
					isImageInPicker: !0,
					maxFileSize: q != null && parseInt(q, 10) >= 600 ? o("WDNativeImageComponentConstant").LIST_IMAGE_MAX_SIZE : o("WDNativeImageComponentConstant").IMAGE_MAX_SIZE
				}),
				u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "xgyuaek xs83m0k xh8yej3 x33uob6" },
					1: { className: "xgyuaek xs83m0k xh8yej3 x79ra4s" }
				}[!!X.isRTL << 0], { children: [
					u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						text: i,
						maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_OPTION_TITLE,
						dataTestId: Z + "-label",
						htmlFor: Z,
						xstyle: [
							b.opacityTransition,
							!h && b.optionTitleDisabled,
							ue && Y.selectedOption,
							ue && !h && b.disabledAndNotSelected,
							I && Y.contextMenuOption
						]
					}),
					l !== void 0 && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
						text: l,
						maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_OPTION_DESCRIPTION,
						dataTestId: Z + "-description",
						htmlFor: Z,
						xstyle: [b.opacityTransition, h ? Y.optionDescription : b.optionDescriptionDisabled]
					}),
					ne && s !== void 0 && me(s)
				] })),
				!ne && s !== void 0 && me(s),
				S && u.jsx(r("WAFlowsTickInput.react"), {
					type: re,
					name: c,
					id: Z,
					dataTestId: Z + "-tick-input",
					checked: ee,
					enabled: h
				}),
				X.platform === "ios" && N != null && u.jsx(r("WAFlowsIcon.react"), {
					id: N,
					altText: "hello"
				})
			]
		})) }));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = {
			android: S,
			ios: v,
			wa_web: R
		};
		return t[e];
	}
	l.default = L;
}), 98);
