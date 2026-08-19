__d("WAWebEmojiPanel.react", [
	"WAWebDropdown.react",
	"WAWebEmojiPanelContent.react",
	"WAWebEmojiPanelEmojiSections",
	"WAWebEmojiPanelMenuSectionTab.react",
	"WAWebExpressionsPanelPicker.react",
	"WAWebPanelsDisplayLocation",
	"WAWebPanelsMenu.react",
	"WAWebRecentEmojiCollection",
	"WAWebRecentReactionsCollection",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = { widthContainer: function(t) {
		return [{
			width: t != null ? "x5lhr3w" : t,
			$$css: !0
		}, { "--x-width": (function(e) {
			return typeof e == "number" ? e + "px" : e != null ? e : void 0;
		})(t) }];
	} };
	function h(t) {
		"use no forget";
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.displayLocation, u = l === void 0 ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown : l, d = i.size, h = _(), y = _(), C = r("useLazyRef")(function() {
			var e = u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions, t = [];
			!e && o("WAWebRecentEmojiCollection").RecentEmojiCollection.length > 0 && t.push(o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT), e && o("WAWebRecentReactionsCollection").RecentReactionsCollection.length > 0 && t.push(o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS);
			var n = [].concat(t, o("WAWebEmojiPanelEmojiSections").ORDERED_TAB_SECTION_IDS);
			return n;
		}), b = _(C.current), v = r("useLazyRef")(function() {
			var e;
			return (e = i.displayCache) != null ? e : {
				scrollTop: 0,
				sectionId: C.current[0],
				showSearchInput: !0
			};
		}), S = _(), R = f(v.current.sectionId), L = R[0], E = R[1], k = f(-1), I = k[0], T = k[1], D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), x = _(new Map()), $ = function(t) {
			var e;
			(e = y.current) == null || e.focusSearchInput(t);
		}, P = function(t) {
			$(t);
		}, N = r("useWAWebUiIdle")();
		m(function() {
			N(P);
		}, []), p(a, function() {
			return {
				getElement: function() {
					return S.current;
				},
				restoreFocus: P
			};
		});
		var M = function() {
			T(-1), $();
		}, w = function(t) {
			h.current || L !== t && E(t);
		}, A = function(t) {
			if (y.current) {
				var e = y.current.scrollToSection(t);
				h.current = e, e.finally(function() {
					e === h.current && (h.current = null);
				});
			}
		}, F = function(t) {
			L !== t && (E(t), A(t));
		}, O = function(t) {
			i.onChange == null || i.onChange(t), D();
		}, B = function(t) {
			var e = u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions;
			e || o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t), i.onEmoji(t);
		}, W = function(t, n) {
			F(t), i.onChange == null || i.onChange(""), $(), n == null || n.preventDefault();
		}, q = function() {
			var e, t = C.current, n = (t.length + I - 1) % t.length, r = t[n];
			(e = x.current.get(r)) == null || e.focus(), T(n);
		}, U = function() {
			var e, t = C.current, n = (I + 1) % t.length, r = t[n];
			(e = x.current.get(r)) == null || e.focus(), T(n);
		}, V = function(t) {
			t == null || t.preventDefault();
			var e = C.current[I];
			T(-1), W(e);
		}, H = function() {
			var e;
			(e = x.current.get(L)) == null || e.focus(), T(C.current.indexOf(L));
		}, G = function(t, n) {
			return c.jsx(r("WAWebEmojiPanelMenuSectionTab.react"), {
				onClick: W,
				sectionId: t,
				selected: n,
				showFocusIndicator: I !== -1,
				ref: function(n) {
					x.current.set(t, n);
				}
			}, t);
		}, z = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel && d !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL, j = i.width, K = j === void 0 ? o("WAWebDropdown.react").EMOJI_PICKER_WIDTH : j;
		return c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(i.width != null ? g.widthContainer(i.width) : null), { children: c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp x78zum5 xdt5ytf x6nvzda x4i4b9w xhl9efl xj65ea0" },
			8: { className: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp x78zum5 xdt5ytf x6nvzda x4i4b9w xhl9efl xj65ea0" },
			4: { className: "x78zum5 xdt5ytf xu3xrit x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1120s5i x6nvzda x4i4b9w xhl9efl xj65ea0" },
			12: { className: "x78zum5 xdt5ytf xu3xrit x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1120s5i x6nvzda x4i4b9w xhl9efl xj65ea0" },
			2: { className: "x78zum5 xdt5ytf x1mf5yl2 x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x6nvzda x4i4b9w xhl9efl xj65ea0" },
			10: { className: "x78zum5 xdt5ytf x1mf5yl2 x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x6nvzda x4i4b9w xhl9efl xj65ea0" },
			6: { className: "x78zum5 xdt5ytf x1120s5i x1mf5yl2 x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x6nvzda x4i4b9w xhl9efl xj65ea0" },
			14: { className: "x78zum5 xdt5ytf x1120s5i x1mf5yl2 x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x6nvzda x4i4b9w xhl9efl xj65ea0" },
			1: { className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x78zum5 xdt5ytf x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			9: { className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x78zum5 xdt5ytf x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			5: { className: "x78zum5 xdt5ytf x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1120s5i x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			13: { className: "x78zum5 xdt5ytf x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1120s5i x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			3: { className: "x78zum5 xdt5ytf x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			11: { className: "x78zum5 xdt5ytf x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			7: { className: "x78zum5 xdt5ytf x1120s5i x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" },
			15: { className: "x78zum5 xdt5ytf x1120s5i x1cipttk x6ikm8r x10wlt62 x17dzmu4 xm4efwp x1kaczmr x6nvzda x4i4b9w xhl9efl xj65ea0" }
		}[(u === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown) << 3 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) << 2 | !!z << 1 | !!z << 0], {
			ref: S,
			role: "grid",
			children: [c.jsx(r("WAWebPanelsMenu.react"), {
				selectedSectionId: L,
				sectionIds: C.current,
				renderSectionTab: G,
				showTabHighlight: !((n = i.defaultSearchText) != null && n.trim()),
				onFocusPrev: q,
				onFocusNext: U,
				onFocusLeave: M,
				onEnter: V,
				displayLocation: u
			}), c.jsx(r("WAWebEmojiPanelContent.react"), {
				displayCache: v.current,
				width: K,
				onFocusUp: H,
				onFocusPrev: i.onFocusPrev,
				onFocusNext: i.onFocusNext,
				onEmoji: B,
				onSection: w,
				ref: y,
				sectionIds: b.current,
				onChange: O,
				defaultSearchText: i.defaultSearchText,
				displayLocation: u,
				targetWindow: i.targetWindow
			})]
		})) }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
