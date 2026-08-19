__d("WAWebStickerPanelContent.react", [
	"fbt",
	"WAFilterObjectNullishProps",
	"WALogger",
	"WAWebEmojiPickerConstants",
	"WAWebKeyboardHotKeys.react",
	"WAWebPanelsDisplayLocation",
	"WAWebStickerPanelContentStickerPackStickersFavorite.react",
	"WAWebStickerPanelContentStickerPackStickersRecentMd.react",
	"WAWebStickerPanelContentStickerSearchResultsScrollGrid.react",
	"WAWebStickerSearchCollection",
	"WAWebStopEvent",
	"WAWebWamEnumStickerSendOriginType",
	"WDSPaddings.stylex",
	"WDSSearchBar.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useImperativeHandle, g = p.useRef, h = p.useState, y = 250;
	function C(e) {
		var t = e.displayLocation, n = e.isAvatarStickers, a = n === void 0 ? !1 : n, i = e.onDownloadEnd, l = e.onDownloadStart, s = e.onFocusPrev, c = e.onStickerClick, d = e.ref, p = e.resetScroll, _ = e.searchText, f = e.selectedTab;
		if (_) return m.jsx(r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react"), {
			ref: d,
			onFocusPrev: s,
			onStickerClick: c,
			searchText: _,
			resetScroll: p,
			displayLocation: t
		});
		if (f === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES) return m.jsx(r("WAWebStickerPanelContentStickerPackStickersFavorite.react"), {
			ref: d,
			onFocusPrev: s,
			onStickerClick: c,
			resetScroll: p,
			displayLocation: t,
			onDownloadStart: function() {
				l == null || l(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
			},
			onDownloadEnd: function() {
				i == null || i(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
			}
		});
		if (f === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS) return m.jsx(o("WAWebStickerPanelContentStickerPackStickersRecentMd.react").StickerPackStickersRecent, {
			ref: d,
			onFocusPrev: s,
			onStickerClick: c,
			resetScroll: p,
			displayLocation: t,
			onDownloadStart: function() {
				l == null || l(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
			},
			onDownloadEnd: function() {
				i == null || i(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
			},
			isAvatarStickers: a
		});
		var g = o("WAWebEmojiPickerConstants").convertTabToMood(f);
		return g != null ? m.jsx(r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react"), {
			ref: d,
			selectedTab: f,
			onFocusPrev: s,
			onStickerClick: c,
			searchText: _,
			resetScroll: p,
			displayLocation: t
		}) : (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[_renderStickerScrollGrid] invalid tab: ", ""])), f).sendLogs("_renderStickerScrollGrid invalid tab"), null);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = {
		searchBarWrapper: {
			paddingTop: "x1y1aw1k",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xf7dkkf",
			paddingInlineEnd: "xv54qhq",
			$$css: !0
		},
		containerSearch: {
			boxSizing: "x9f619",
			height: "xqr4tnt",
			backgroundColor: "xhjsbib",
			$$css: !0
		},
		containerSearchExpressionsPanel: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		contentAvatar: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function v(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.defaultSearchText, u = i.selectedTab, d = g(!1), p = g(), v = g(0), S = g(0), R = g(), L = h(!0), E = L[0], k = L[1], I = function() {
			var e = p.current;
			e != null && (e.scrollTop = 0, S.current = 0, v.current = 0, k(!0));
		}, T = h(l || ""), D = T[0], x = T[1], $ = g(!1);
		_(function() {
			$.current ? x("") : $.current = !0;
		}, [u]);
		var P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				I();
				try {
					yield o("WAWebStickerSearchCollection").StickerSearchCollection.search(e);
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Sticker search promise failed"]))).sendLogs(e);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), N = r("useWAWebDebouncedCallback")(P, y), M = function(t) {
			i.onChange == null || i.onChange(t), x(t), t !== "" ? N(t) : N.cancel();
		}, w = function() {
			var e = R.current;
			if (!e) {
				d.current = !0, k(!0);
				return;
			}
			e.focus();
		}, A = function(t) {
			o("WAWebStopEvent").stopEvent(t), w();
		};
		_(function() {
			w(), l != null && l !== "" && P(l);
		}, []), f(a, function() {
			return {
				focus: function() {
					var e;
					(e = R.current) == null || e.focus();
				},
				clearSearchText: function() {
					x("");
				}
			};
		});
		var F = r("useWAWebThrottledCallback")(function() {
			var e = p.current;
			if (e) {
				i.onScroll == null || i.onScroll(e);
				var t = e.scrollTop, n = S.current - t;
				if (n === o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT) {
					v.current = n, S.current = t;
					return;
				}
				var r = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
				if (d.current = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST, n < 0) E && (t > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && r || S.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && t >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT) && k(!1);
				else if (!E) {
					var a = document.activeElement instanceof HTMLElement && document.activeElement.dataset.id === "sticker-item";
					!a && (r || t < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) && k(!0);
				}
				S.current = t, v.current = n;
			}
		}, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME), O = function(t, n) {
			var e;
			if (D ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_SEARCH : u === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_RECENTS : u === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_FAVORITES : e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_EMOTION, i.onSticker(t, e, n), D) {
				var r;
				(r = R.current) == null || r.focus();
			}
		}, B = g(), W = function() {
			var e;
			(e = B.current) == null || e.focus();
		}, q = g(null), U = function(t) {
			q.current = t;
		}, V = function(t) {
			t === q.current && (q.current = null);
		}, H = function(t) {
			if (t.key === "ArrowUp") return i.onFocusUp(), !1;
			if (t.key === "ArrowDown") return W(), !1;
		}, G = i.isAvatarStickers ? null : m.jsx(r("WDSSearchBar.react"), {
			hintText: s._(
				/*BTDS*/
				""
			),
			onValueChange: M,
			value: D || "",
			ref: R,
			onKeyDown: H,
			xstyle: b.searchBarWrapper,
			testid: "sticker_panel_search_bar"
		});
		return m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			xstyle: [
				b.containerSearch,
				i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
				i.isAvatarStickers && b.contentAvatar,
				i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel && b.containerSearchExpressionsPanel
			],
			handlers: o("WAFilterObjectNullishProps").filterObjectNullishProps({
				"shift+tab": i.onFocusPrev,
				tab: i.onFocusNext
			}),
			onClick: A,
			children: m.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x1280gxy x5yr21d" },
				2: { className: "x1n2onr6 x5yr21d x16w0wmm" },
				1: { className: "x1n2onr6 x1280gxy x5yr21d xfl633f" },
				3: { className: "x1n2onr6 x5yr21d x16w0wmm xfl633f" }
			}[(i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], { children: [G, m.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k" },
				2: { className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d" },
				1: { className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k x16w0wmm" },
				3: { className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d x16w0wmm" }
			}[!!i.isAvatarStickers << 1 | (i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], {
				onScroll: F,
				ref: p,
				children: m.jsx(C, {
					ref: B,
					onFocusPrev: w,
					onStickerClick: O,
					searchText: D.trim(),
					selectedTab: i.selectedTab,
					resetScroll: I,
					displayLocation: i.displayLocation,
					onDownloadStart: U,
					onDownloadEnd: V,
					isAvatarStickers: i.isAvatarStickers
				})
			}))] }))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
