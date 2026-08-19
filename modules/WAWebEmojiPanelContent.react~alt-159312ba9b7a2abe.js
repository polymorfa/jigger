__d("WAWebEmojiPanelContent.react", [
	"fbt",
	"WAMemoizeOne",
	"WAWebEmoji",
	"WAWebEmojiKeywordToUnicode",
	"WAWebEmojiPanelContentSectionScrollList.react",
	"WAWebEmojiPanelEmojiSections",
	"WAWebEmojiPanelSearchResultsAnnouncement.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebPanelsDisplayLocation",
	"WAWebRecentEmojiCollection",
	"WAWebRecentReactionsCollection",
	"WAWebStopEvent",
	"WAWebVelocityTransitionGroup",
	"WDSSearchBar.react",
	"react",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = {
		search: {
			position: "x1n2onr6",
			zIndex: "x12xzxwr",
			display: "x1lliihq",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		searchBarWrapper: {
			paddingTop: "x1y1aw1k",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xf7dkkf",
			paddingInlineEnd: "xv54qhq",
			$$css: !0
		}
	}, h = 15, y = 5;
	function C(e) {
		var t = e.displayLocation, n = e.onFocusUp, a = e.onSearchChange, i = e.onSearchDownKey, l = e.onSearchEnterKey, u = e.searchInputRef, d = e.searchText, m = e.transitionName, p = t === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), _ = function(t) {
			if (t.key === "ArrowUp") return n(), !1;
			if (t.key === "ArrowDown") return i(), !1;
		};
		return c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: m,
			xstyle: g.search,
			children: c.jsx(r("WDSSearchBar.react"), {
				hintText: p,
				onValueChange: a,
				onKeyDown: _,
				onEnter: l,
				ref: u,
				value: d,
				xstyle: g.searchBarWrapper,
				testid: "emoji_panel_search_bar"
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.data, n = e.displayLocation, r = e.onEmoji, a = e.onEmojiFocus, i = e.onSearchResultsFocusAbove, l = e.searchResultsRef, s = e.targetWindow, u = e.width;
		return c.jsx("div", {
			className: "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j",
			children: c.jsx(o("WAWebEmojiPanelContentSectionScrollList.react").EmojiSectionScrollList, {
				data: t,
				width: u,
				initialScrollTop: 0,
				searchInputVisible: !0,
				onFocusUp: i,
				onEmoji: r,
				onEmojiFocus: a,
				ref: l,
				showTitles: !1,
				displayLocation: n,
				targetWindow: s
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.displayLocation, l = a.onChange, s = a.onEmoji, u = a.onFocusNext, d = a.onFocusPrev, g = a.onFocusUp, v = a.onSection, L = a.sectionIds, E = a.width, k = _(null), I = _(null), T = _(null), D = _(null), x = _(!1), $ = _(!1), P = _(!1), N = _(a.displayCache.scrollTop), M = _(a.displayCache.sectionId), w = f(a.defaultSearchText || ""), A = w[0], F = w[1], O = f(a.displayCache.showSearchInput), B = O[0], W = O[1], q = f(function() {
			return L.map(function(e) {
				var t = [];
				switch (e) {
					case "RECENT":
						t = S();
						break;
					case "RECENT_REACTIONS":
						t = R();
						break;
					default: t = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(e);
				}
				return {
					sectionId: e,
					emojis: t
				};
			});
		}), U = q[0], V = o("useWAWebTimeout").useTimeout(function() {
			P.current = !1;
		}, 200), H = V[0], G = function(t, n) {
			P.current = !0, H();
			var e = n.scrollTop, r = t.getBoundingClientRect().top - n.getBoundingClientRect().top + e, a = 2, i = r - n.clientHeight + t.clientHeight + a, l = B ? r - o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT : r - a;
			n.scrollTop = Math.min(Math.max(e, i), l);
		}, z = function(t) {
			if (!I.current) {
				x.current = !0, W(!0);
				return;
			}
			I.current.focus();
		};
		m(function() {
			B && z(!0);
		}, [B]);
		var j = function() {
			P.current = !0, H(), z(), k.current && k.current.scrollToTop();
		}, K = function() {
			var e = N.current === 0;
			return e && W(!0), e;
		}, Q = function(t) {
			var e = t - N.current;
			if (N.current = t, !P.current && !$.current && !K()) {
				var n = Math.abs(e);
				x.current = n > h;
				var r = e >= 0 ? 1 : -1;
				if (t < o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT) {
					W(!0);
					return;
				}
				n < y || (B ? r === 1 && W(!1) : r === -1 && W(!0));
			}
		}, X = function(t) {
			$.current || (M.current = t, v(t));
		}, Y = function() {
			j();
		}, J = function(t) {
			l == null || l(t), F(t);
		}, Z = function() {
			j();
		}, ee = function() {
			if (A) {
				if (!T.current) return;
				T.current.focusFirstVisibleEmoji();
				return;
			}
			k.current && k.current.focusFirstVisibleEmoji(o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT);
		}, te = function() {
			A && T.current && T.current.selectFirstVisibleEmoji();
		}, ne = function(t) {
			if (t.preventDefault(), t.stopPropagation(), !!I.current) {
				if (document.activeElement !== I.current) return z();
				d == null || d();
			}
		}, re = function(t) {
			if (t.preventDefault(), t.stopPropagation(), !!I.current) {
				if (document.activeElement !== I.current) return z();
				u == null || u();
			}
		}, oe = async function(t) {
			M.current = t, await new Promise(function(e) {
				x.current = !0, F(""), W(!0), e();
			}), $.current = !0;
			var e = k.current ? k.current.scrollToSection(t, 0 - o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT) : Promise.resolve();
			return e.finally(function() {
				e === e && ($.current = !1, K());
			}), D.current = e, e;
		}, ae = function(t) {
			o("WAWebStopEvent").stopEvent(t), z();
		}, ie = r("WAMemoizeOne")(function(e) {
			var t = e.searchText, n = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(t.trimEnd());
			return [{
				sectionId: o("WAWebEmojiPanelEmojiSections").SECTIONS.SEARCH_RESULT,
				emojis: n
			}];
		}), le = function() {
			var e = A.replace(/^\s+/, "");
			return ie({ searchText: e });
		};
		p(n, function() {
			return {
				focusSearchInput: z,
				scrollToSection: oe
			};
		});
		var se = A ? le() : null;
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: {
				tab: re,
				"shift+tab": ne
			},
			tabIndex: null,
			className: "xqr4tnt",
			onClick: ae,
			children: c.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf" },
				2: { className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf xfl633f" },
				1: { className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf x16w0wmm" },
				3: { className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf xfl633f x16w0wmm" }
			}[(i === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (i === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions || i === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel || i === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown) << 0], { children: [
				c.jsx(C, {
					transitionName: x.current ? "emoji-search-slide-away-fast" : "emoji-search-slide-away",
					onFocusUp: g,
					searchInputRef: I,
					searchText: A,
					onSearchChange: J,
					onSearchDownKey: ee,
					onSearchEnterKey: te,
					displayLocation: i
				}),
				se != null ? c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebEmojiPanelSearchResultsAnnouncement.react"), {
					data: se,
					displayLocation: i
				}), c.jsx(b, {
					width: E,
					onEmoji: s,
					data: se,
					searchResultsRef: T,
					onEmojiFocus: G,
					onSearchResultsFocusAbove: Y,
					displayLocation: i,
					targetWindow: a.targetWindow
				})] }) : null,
				c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j" },
					1: { className: "x1s85apg x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j" }
				}[!!A << 0], { children: c.jsx(o("WAWebEmojiPanelContentSectionScrollList.react").EmojiSectionScrollList, {
					data: U,
					width: a.width,
					onFocusUp: Z,
					initialScrollTop: a.displayCache.scrollTop,
					searchInputVisible: B,
					onEmoji: a.onEmoji,
					onEmojiFocus: G,
					onScroll: Q,
					onSection: X,
					ref: k,
					showTitles: !0,
					displayLocation: i,
					targetWindow: a.targetWindow
				}) }))
			] }))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return Array.from(new Set(o("WAWebRecentEmojiCollection").RecentEmojiCollection.reduce(function(e, t) {
			var n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t.id) || t.id, r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
			return r != null && e.push(n), e;
		}, [])));
	}
	function R() {
		return Array.from(new Set(o("WAWebRecentReactionsCollection").RecentReactionsCollection.reduce(function(e, t) {
			var n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t.id) || t.id, r = o("WAWebEmoji").EmojiUtil.getGlyphId(n), a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
			return r != null && a != null && e.push(a), e;
		}, [])));
	}
	l.default = v;
}), 226);
