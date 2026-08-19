__d("WAFlowsCategoryList.react", [
	"fbt",
	"WAFlowsBaseList.react",
	"WAFlowsCategoryListUtils.react",
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsImage.react",
	"WAFlowsScreenUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WAFlowsUsePressedState",
	"WAFlowsWELJActionCreators",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = "10px 30px", C = "x19ml7pd-B", b = "x626qny-B", v = {
		categoryName: {
			color: "x14ug900",
			$$css: !0
		},
		categoryNameDisabled: {
			color: "x18cpw0e",
			$$css: !0
		},
		content: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		contentWithImage: {
			height: "xyew0d1",
			$$css: !0
		},
		contentWithoutImage: {
			height: "x5he6zg",
			$$css: !0
		},
		image: {
			borderStartStartRadius: "x1obq294",
			borderStartEndRadius: "x5a5i1n",
			borderEndEndRadius: "xde0f50",
			borderEndStartRadius: "x15x8krk",
			borderTopWidth: "x10b6y01",
			borderInlineEndWidth: "x1vs7ofh",
			borderBottomWidth: "x8mxp1h",
			borderInlineStartWidth: "xnh1d43",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		parentContentAlign: {
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		chevronColorDisabled: {
			backgroundColor: "x3qdkio",
			$$css: !0
		}
	}, S = {
		categoryListCell: {
			width: "xh8yej3",
			$$css: !0
		},
		chevron: {
			width: "xcdlrvm",
			height: "x1lut4zz",
			$$css: !0
		},
		chevronRTL: {
			transform: "x19jd1h0",
			$$css: !0
		},
		chevronLTR: { $$css: !0 },
		blockContainerOption: {
			"::after_width": "x1itn6jy",
			$$css: !0
		}
	}, R = {
		categoryListCell: {
			width: "xh8yej3",
			$$css: !0
		},
		chevron: {
			width: "xoml2pt",
			height: "x1ub0la8",
			$$css: !0
		},
		chevronLTR: {
			transform: "x1rbgqaq",
			$$css: !0
		},
		chevronRTL: {
			transform: "x1iffjtl",
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
		}
	};
	function L(t) {
		var n, a = t.baseListRef, i = t.category, l = t.hideMedia, u = t.onCategoryClick, d = g(null), p = h(0), f = p[0], y = p[1], C = o("WAFlowsStateProvider.react").useWAFlowsState(), b = C.internal, S = b.scrollConfig, R = b.status, L = o("WAFlowsEnvContext.react").useWAFlowsEnv(), E = L.env, I = k(E.platform), T = (n = i.media) == null || (n = n.image) == null ? void 0 : n.request_image_url, D = m(function(e) {
			e.stopPropagation(), e.preventDefault(), u(i.category_id, i.name);
		}, [
			i.category_id,
			i.name,
			u
		]), x = { width: o("WAFlowsComponentConstants").CATEGORY_LIST_IMAGE_WIDTH + "px" };
		_(function() {
			y(function(e) {
				return e || o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", a.current));
			});
		}, [a]);
		var $ = o("WAFlowsUsePressedState").usePressedState(E, f, d, S == null ? void 0 : S.isScrolling);
		return c.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.content, v.parentContentAlign, l ? v.contentWithoutImage : v.contentWithImage, I.optionContainerButton, $ ? I.optionContainerButtonPressed : I.optionContainerButtonNotPressed), {
			"data-testid": void 0,
			role: "button",
			onClick: D,
			tabIndex: 0,
			ref: d,
			children: [!l && T != null && c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1sv007z" },
				1: { className: "x11pwdeo" }
			}[!!E.isRTL << 0], { children: c.jsx("div", {
				style: x,
				children: c.jsx(o("WAFlowsImage.react").WAFlowsImage, {
					src: T != null ? T : "",
					altText: "category_image",
					height: o("WAFlowsComponentConstants").CATEGORY_LIST_IMAGE_HEIGHT,
					width: o("WAFlowsComponentConstants").CATEGORY_LIST_IMAGE_WIDTH,
					xstyle: v.image
				})
			}) })), c.jsx("div", {
				className: "xh8yej3",
				children: c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1qughib",
					children: [c.jsx(o("WAFlowsText.react").WAFlowsTextBody, {
						text: i.name,
						xstyle: R === o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING ? v.categoryNameDisabled : v.categoryName
					}), c.jsx(r("WAFlowsIcon.react"), {
						id: "waf_chevron_secondary",
						altText: s._(
							/*BTDS*/
							""
						),
						xstyle: [
							I.chevron,
							E.isRTL ? I.chevronRTL : I.chevronLTR,
							R === o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING ? v.chevronColorDisabled : null
						]
					})]
				})
			})]
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(t) {
		var n, a, i, l = t.categories, s = t.dataTestId, u = s === void 0 ? "WAFlowsCategoryListLayout" : s, d = t.hideMedia, m = d === void 0 ? !1 : d, h = t.onCategoryClick, y = t.screenID, C = t.xstyle, b = p(o("WAFlowsStateProvider.react").FlowStateDispatchContext), v = g(null), S = o("WAFlowsStateProvider.react").useWAFlowsState(), R = o("WAFlowsEnvContext.react").useWAFlowsEnv(), E = R.env, I = (S == null || (n = S.external[y]) == null || (n = n.external_data) == null ? void 0 : n.meta_catalog) !== void 0 ? !0 : m, T = (a = (i = S.internal) == null || (i = i.shopping) == null ? void 0 : i.categoryListPath) != null ? a : [], D = T.length > 0 ? T[T.length - 1] : "", x = f(function() {
			return o("WAFlowsCategoryListUtils.react").getDisplayCategoryData(D, l);
		}, [l, D]);
		_(function() {
			E.isJestTesting || b(o("WAFlowsWELJActionCreators").createConfigNavbarAction({}));
		}, [
			l,
			b,
			E.isJestTesting,
			D
		]);
		var $ = k(E.platform);
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C), {
			"data-testid": void 0,
			children: c.jsx(r("WAFlowsBaseList.react"), {
				dataSource: x != null ? x : [],
				hideMedia: I,
				dataTestId: u + "-category-base-list",
				listItemXstyle: [I && $.blockContainerOption],
				baseListRef: v,
				renderItem: function(t) {
					return c.jsx(L, {
						category: t,
						onCategoryClick: h,
						hideMedia: I,
						baseListRef: v
					});
				}
			})
		}));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		return e === "android" ? R : S;
	}
	l.default = E;
}), 226);
