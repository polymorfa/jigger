__d("WAWebNewsletterRecommendedV3.react", [
	"fbt",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebChatEntryPoint",
	"WAWebCommonNewsletterStrings",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebNewsletterDirectoryCell.react",
	"WAWebNewsletterDirectoryShimmer.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterRecommendedBlockHeading.react",
	"WAWebNewsletterRecommendedUnit.flow",
	"WAWebSingleSelection",
	"WAWebTabOrder",
	"WAWebWamEnumChannelEventUnit",
	"WAWebWamEnumTsSurface",
	"WDSIconIcAdd.react",
	"WDSIconIcGrid.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSectionDivider.react",
	"react",
	"stylex",
	"useLazyRef"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = {
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, g = { list: {
		width: "xh8yej3",
		overflowX: "x1plvlek",
		overflowY: "xryxfnj",
		$$css: !0
	} };
	function h(e) {
		var t = e.layout, n = e.loading, r = e.onCreateNewsletter, a = e.onDiscoverMoreClick, i = e.recommendedNewsletters, l = o("WAWebABProps").getABPropConfigValue("channels_creation_entrypoint_in_updates_tab_enabled") === 1 ? c.jsx(v, { onClick: r }) : null, s = c.jsx(b, {
			shouldRenderUpdatedButton: l != null,
			onClick: a
		});
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: "xh8yej3 x1plvlek xryxfnj",
			shrink: 0,
			align: "center",
			testid: "newsletter-recommended-unit",
			children: [
				c.jsx(C, { layout: t }),
				c.jsx(y, {
					items: i,
					loading: n
				}),
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					className: {
						0: "",
						1: "xh8yej3 x1plvlek xryxfnj"
					}[(l != null) << 0],
					shrink: 0,
					align: "center",
					children: c.jsxs("div", babelHelpers.extends({}, {
						0: {},
						2: { className: "xh8yej3 x1plvlek xryxfnj" },
						1: { className: "xh8yej3 x6ikm8r x10wlt62 x1lliihq" },
						3: { className: "xh8yej3 x6ikm8r x10wlt62 x1lliihq" }
					}[(l != null) << 1 | (l != null) << 0], { children: [s, l] }))
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.items, n = e.loading, a = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount(), i = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), l = _(), s = _(), u = _(), d = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}), m = p(function() {
			return t.slice(0, a).map(function(e, t) {
				return {
					newsletter: e,
					itemKey: "newsletter-" + e.id.toString(),
					index: t
				};
			});
		}, [t, a]);
		if (n) return c.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: a });
		var f = d.current, h = f.list;
		(h.length === 0 || h !== m) && f.init(m);
		var y = function(t) {
			if (m.length !== 0) {
				t == null || t.preventDefault(), t == null || t.stopPropagation();
				var e = d.current.prev();
				e > -1 && d.current.setPrev(!0);
			}
		}, C = function(t) {
			if (m.length !== 0) {
				t == null || t.preventDefault(), t == null || t.stopPropagation();
				var e = d.current.next();
				d.current.index !== e && d.current.setNext(!0);
			}
		}, b = function() {
			if (d.current.value) {
				var e = d.current.index;
				d.current.setVal(m[e], !0);
			} else d.current.setFirst(!0);
		}, v = {
			down: C,
			up: y
		};
		return c.jsx(r("WAWebFlatListContainer.react"), {
			ref: l,
			className: "xh8yej3 x1plvlek xryxfnj",
			flatListControllers: [i.current],
			children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: s,
				onFocus: function(t) {
					t.target === s.current && b();
				},
				role: "list",
				"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_LIST,
				handlers: v,
				children: c.jsx(o("WAWebFlatList.react").FlatList, {
					ref: u,
					data: m,
					viewportXstyles: g.list,
					flatListController: i.current,
					direction: "vertical",
					role: "navigation",
					renderItem: function(t) {
						var e = t.index, n = t.itemKey, a = t.newsletter;
						return c.jsx(r("WAWebNewsletterDirectoryCell.react"), {
							active: d.current,
							testid: "newsletter-recommended-item",
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsLetterRecommendation,
							newsletter: a,
							index: e,
							onSelect: null,
							bottomItem: e === m.length - 1,
							discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME,
							newsletterEventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT.RECOMMENDED_CHANNELS
						}, n);
					}
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.layout;
		switch (t) {
			case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Block: return c.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), { xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16 });
			case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Row: return c.jsx(r("WDSSectionDivider.react"), {
				header: { title: s._(
					/*BTDS*/
					""
				) },
				testid: "newsletter-recommended-header"
			});
		}
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.onClick, a = t.shouldRenderUpdatedButton, i = _(null), l = m(function() {
			r("WAWebFocusTracer").focus(i.current);
		}, []), u = s._(
			/*BTDS*/
			""
		), d = a ? c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			stretch: !0,
			onClick: n,
			testid: "find-newsletter-button",
			ref: i,
			icon: r("WDSIconIcGrid.react"),
			children: u
		}) : c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: n,
			testid: "find-newsletter-button",
			ref: i,
			children: u
		});
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onFocus: l,
			className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom10, f.paddingInline10),
			"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_BUTTON,
			children: d
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.onClick, a = _(null), i = m(function() {
			r("WAWebFocusTracer").focus(a.current);
		}, []);
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onFocus: i,
			className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingBottom20, f.paddingInline10),
			"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_CREATE_CHANNEL_BUTTON,
			children: c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				stretch: !0,
				onClick: n,
				testid: "create-newsletter-button",
				ref: a,
				icon: r("WDSIconIcAdd.react"),
				children: o("WAWebCommonNewsletterStrings").getCreateChannelText()
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = h;
}), 226);
