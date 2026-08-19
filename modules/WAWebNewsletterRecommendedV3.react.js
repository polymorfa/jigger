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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(26), n = e.layout, r = e.loading, a = e.onCreateNewsletter, i = e.onDiscoverMoreClick, l = e.recommendedNewsletters, s;
		t[0] !== a ? (s = o("WAWebABProps").getABPropConfigValue("channels_creation_entrypoint_in_updates_tab_enabled") === 1 ? c.jsx(v, { onClick: a }) : null, t[0] = a, t[1] = s) : s = t[1];
		var u = s, d = u != null, m;
		t[2] !== i || t[3] !== d ? (m = c.jsx(b, {
			shouldRenderUpdatedButton: d,
			onClick: i
		}), t[2] = i, t[3] = d, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = "xh8yej3 x1plvlek xryxfnj", t[5] = _) : _ = t[5];
		var f;
		t[6] !== n ? (f = c.jsx(C, { layout: n }), t[6] = n, t[7] = f) : f = t[7];
		var g;
		t[8] !== r || t[9] !== l ? (g = c.jsx(y, {
			items: l,
			loading: r
		}), t[8] = r, t[9] = l, t[10] = g) : g = t[10];
		var h;
		t[11] !== u ? (h = {
			0: "",
			1: "xh8yej3 x1plvlek xryxfnj"
		}[(u != null) << 0], t[11] = u, t[12] = h) : h = t[12];
		var S;
		t[13] !== u ? (S = {
			0: {},
			2: { className: "xh8yej3 x1plvlek xryxfnj" },
			1: { className: "xh8yej3 x6ikm8r x10wlt62 x1lliihq" },
			3: { className: "xh8yej3 x6ikm8r x10wlt62 x1lliihq" }
		}[(u != null) << 1 | (u != null) << 0], t[13] = u, t[14] = S) : S = t[14];
		var R;
		t[15] !== u || t[16] !== p || t[17] !== S ? (R = c.jsxs("div", babelHelpers.extends({}, S, { children: [p, u] })), t[15] = u, t[16] = p, t[17] = S, t[18] = R) : R = t[18];
		var L;
		t[19] !== h || t[20] !== R ? (L = c.jsx(o("WAWebFlex.react").FlexColumn, {
			className: h,
			shrink: 0,
			align: "center",
			children: R
		}), t[19] = h, t[20] = R, t[21] = L) : L = t[21];
		var E;
		return t[22] !== L || t[23] !== f || t[24] !== g ? (E = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: _,
			shrink: 0,
			align: "center",
			testid: "newsletter-recommended-unit",
			children: [
				f,
				g,
				L
			]
		}), t[22] = L, t[23] = f, t[24] = g, t[25] = E) : E = t[25], E;
	}
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
		var t = o("react-compiler-runtime").c(2), n = e.layout;
		switch (n) {
			case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Block: {
				var a;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), { xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16 }), t[0] = a) : a = t[0], a;
			}
			case o("WAWebNewsletterRecommendedUnit.flow").RecommendedUnitLayoutType.Row: {
				var i;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(r("WDSSectionDivider.react"), {
					header: { title: s._(
						/*BTDS*/
						""
					) },
					testid: "newsletter-recommended-header"
				}), t[1] = i) : i = t[1], i;
			}
		}
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(8), a = t.onClick, i = t.shouldRenderUpdatedButton, l = _(null), u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = function() {
			r("WAWebFocusTracer").focus(l.current);
		}, n[0] = u) : u = n[0];
		var d = u, m;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), n[1] = m) : m = n[1];
		var p = m, g;
		n[2] !== a || n[3] !== i ? (g = i ? c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			stretch: !0,
			onClick: a,
			testid: "find-newsletter-button",
			ref: l,
			icon: r("WDSIconIcGrid.react"),
			children: p
		}) : c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: a,
			testid: "find-newsletter-button",
			ref: l,
			children: p
		}), n[2] = a, n[3] = i, n[4] = g) : g = n[4];
		var h = g, y;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom10, f.paddingInline10), n[5] = y) : y = n[5];
		var C;
		return n[6] !== h ? (C = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onFocus: d,
			className: y,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_RECOMMENDED_BUTTON,
			children: h
		}), n[6] = h, n[7] = C) : C = n[7], C;
	}
	function v(t) {
		var n = o("react-compiler-runtime").c(5), a = t.onClick, i = _(null), l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			r("WAWebFocusTracer").focus(i.current);
		}, n[0] = l) : l = n[0];
		var s = l, u;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (u = (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingBottom20, f.paddingInline10), n[1] = u) : u = n[1];
		var d;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebCommonNewsletterStrings").getCreateChannelText(), n[2] = d) : d = n[2];
		var m;
		return n[3] !== a ? (m = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onFocus: s,
			className: u,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_CREATE_CHANNEL_BUTTON,
			children: c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				stretch: !0,
				onClick: a,
				testid: "create-newsletter-button",
				ref: i,
				icon: r("WDSIconIcAdd.react"),
				children: d
			})
		}), n[3] = a, n[4] = m) : m = n[4], m;
	}
	l.default = h;
}), 226);
