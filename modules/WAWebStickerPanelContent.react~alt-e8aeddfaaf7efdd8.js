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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.defaultSearchText, l = a.selectedTab, u = g(!1), d = g(), p = g(0), v = g(0), S = g(), R = h(!0), L = R[0], E = R[1], k = function() {
			var e = d.current;
			e != null && (e.scrollTop = 0, v.current = 0, p.current = 0, E(!0));
		}, I = h(i || ""), T = I[0], D = I[1], x = g(!1);
		_(function() {
			x.current ? D("") : x.current = !0;
		}, [l]);
		var $ = async function(t) {
			k();
			try {
				await o("WAWebStickerSearchCollection").StickerSearchCollection.search(t);
			} catch (e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Sticker search promise failed"]))).sendLogs(e);
			}
		}, P = r("useWAWebDebouncedCallback")($, y), N = function(t) {
			a.onChange == null || a.onChange(t), D(t), t !== "" ? P(t) : P.cancel();
		}, M = function() {
			var e = S.current;
			if (!e) {
				u.current = !0, E(!0);
				return;
			}
			e.focus();
		}, w = function(t) {
			o("WAWebStopEvent").stopEvent(t), M();
		};
		_(function() {
			M(), i != null && i !== "" && $(i);
		}, []), f(n, function() {
			return {
				focus: function() {
					var e;
					(e = S.current) == null || e.focus();
				},
				clearSearchText: function() {
					D("");
				}
			};
		});
		var A = r("useWAWebThrottledCallback")(function() {
			var e = d.current;
			if (e) {
				a.onScroll == null || a.onScroll(e);
				var t = e.scrollTop, n = v.current - t;
				if (n === o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT) {
					p.current = n, v.current = t;
					return;
				}
				var r = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
				if (u.current = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST, n < 0) L && (t > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && r || v.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && t >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT) && E(!1);
				else if (!L) {
					var i = document.activeElement instanceof HTMLElement && document.activeElement.dataset.id === "sticker-item";
					!i && (r || t < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) && E(!0);
				}
				v.current = t, p.current = n;
			}
		}, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME), F = function(t, n) {
			var e;
			if (T ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_SEARCH : l === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_RECENTS : l === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_FAVORITES : e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_EMOTION, a.onSticker(t, e, n), T) {
				var r;
				(r = S.current) == null || r.focus();
			}
		}, O = g(), B = function() {
			var e;
			(e = O.current) == null || e.focus();
		}, W = g(null), q = function(t) {
			W.current = t;
		}, U = function(t) {
			t === W.current && (W.current = null);
		}, V = function(t) {
			if (t.key === "ArrowUp") return a.onFocusUp(), !1;
			if (t.key === "ArrowDown") return B(), !1;
		}, H = a.isAvatarStickers ? null : m.jsx(r("WDSSearchBar.react"), {
			hintText: s._(
				/*BTDS*/
				""
			),
			onValueChange: N,
			value: T || "",
			ref: S,
			onKeyDown: V,
			xstyle: b.searchBarWrapper,
			testid: "sticker_panel_search_bar"
		});
		return m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			xstyle: [
				b.containerSearch,
				a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
				a.isAvatarStickers && b.contentAvatar,
				a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel && b.containerSearchExpressionsPanel
			],
			handlers: o("WAFilterObjectNullishProps").filterObjectNullishProps({
				"shift+tab": a.onFocusPrev,
				tab: a.onFocusNext
			}),
			onClick: w,
			children: m.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x1280gxy x5yr21d" },
				2: { className: "x1n2onr6 x5yr21d x16w0wmm" },
				1: { className: "x1n2onr6 x1280gxy x5yr21d xfl633f" },
				3: { className: "x1n2onr6 x5yr21d x16w0wmm xfl633f" }
			}[(a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], { children: [H, m.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k" },
				2: { className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d" },
				1: { className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k x16w0wmm" },
				3: { className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d x16w0wmm" }
			}[!!a.isAvatarStickers << 1 | (a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], {
				onScroll: A,
				ref: d,
				children: m.jsx(C, {
					ref: O,
					onFocusPrev: M,
					onStickerClick: F,
					searchText: T.trim(),
					selectedTab: a.selectedTab,
					resetScroll: k,
					displayLocation: a.displayLocation,
					onDownloadStart: q,
					onDownloadEnd: U,
					isAvatarStickers: a.isAvatarStickers
				})
			}))] }))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
