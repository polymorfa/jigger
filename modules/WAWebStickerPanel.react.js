__d("WAWebStickerPanel.react", [
	"fbt",
	"WAWebCircledPlusCustomIcon",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebEmojiPickerConstants",
	"WAWebKeyboardTabUtils",
	"WAWebMiscGatingUtils",
	"WAWebPanelsDisplayLocation",
	"WAWebPanelsMenu.react",
	"WAWebPanelsMenuTab.react",
	"WAWebStickerGreetingIcon.react",
	"WAWebStickerPackCollectionMd",
	"WAWebStickerPanelContent.react",
	"WAWebStickerPickerOpenedWamEvent",
	"WAWebStickerStoreFlowLoadable",
	"WAWebStickerStoreOpenedWamEvent",
	"WAWebStopEvent",
	"WAWebWaPlusBenefitJourneyLogger",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"WDSIconIcCake.react",
	"WDSIconIcFavorite.react",
	"WDSIconIcGrade.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcSentimentDissatisfied.react",
	"WDSIconIcSentimentExcited.react",
	"WDSIconIcSentimentExtremelyDissatisfied.react",
	"react",
	"useLazyRef",
	"useWAWebOnUnmount",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useMemo, f = d.useRef, g = d.useState;
	function h(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.displayLocation, u = s === void 0 ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown : s, d = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox || u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel, h = o("WAWebMiscGatingUtils").isFavoriteStickersEnabled(), S = _(function() {
			var e = [];
			return e.push(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS), h && e.push(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES), e.push(o("WAWebEmojiPickerConstants").StickerTabs.LOVE, o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS, o("WAWebEmojiPickerConstants").StickerTabs.HAPPY, o("WAWebEmojiPickerConstants").StickerTabs.SAD, o("WAWebEmojiPickerConstants").StickerTabs.ANGRY, o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE), d && e.push(o("WAWebEmojiPickerConstants").StickerTabs.STORE), e;
		}, [d, h]), R = f(), L = f(), E = f(), k = r("useLazyRef")(function() {
			return new Map();
		}), I = g(((n = l.displayCache) == null ? void 0 : n.selectedTab) || o("WAWebEmojiPickerConstants").StickerTabs.RECENTS), T = I[0], D = I[1], x = g(-1), $ = x[0], P = x[1], N = r("useLazyRef")(function() {
			return o("WAWebWaPlusBenefitJourneyLogger").clearSharedSessionId(o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS), new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
				benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
				surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_TRAY
			});
		});
		r("useWAWebOnUnmount")(function() {
			l.onDisplayCache == null || l.onDisplayCache({
				scrollTop: L.current,
				selectedTab: T
			});
		});
		var M = r("useWAWebUiIdle")(), w = function() {
			return M(function() {
				var e = E.current;
				e && e.focus();
			});
		};
		p(i, function() {
			return {
				restoreFocus: w,
				getElement: function() {
					return R.current;
				}
			};
		});
		var A = function(t) {
			var e;
			o("WAWebStopEvent").stopEvent(t), (e = k.current.get(T)) == null || e.focus(), P(S.indexOf(T));
		}, F = function(t) {
			o("WAWebStopEvent").stopEvent(t), l.onFocusNext();
		}, O = function(t) {
			o("WAWebStopEvent").stopEvent(t), l.onFocusPrev();
		}, B = r("useWAWebUiIdle")(), W = function() {
			var e = l.onStickerFromStore;
			e != null && (new (o("WAWebStickerStoreOpenedWamEvent")).StickerStoreOpenedWamEvent().commit(), o("WAWebCmd").Cmd.closeExpressionPanels(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable, { onSticker: e }), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			}), B(function() {
				o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetch();
			}));
		}, q = function(t, n) {
			var e, r;
			if (n == null || n.preventDefault(), t === o("WAWebEmojiPickerConstants").StickerTabs.STORE) {
				W();
				return;
			}
			D(t), (e = E.current) == null || e.clearSearchText(), l.onChange == null || l.onChange(""), (r = E.current) == null || r.focus();
		}, U = function(t) {
			P(-1), q(S[$]);
		}, V = function(t) {
			var e;
			o("WAWebStopEvent").stopEvent(t);
			var n = (S.length + $ - 1) % S.length, r = S[n];
			(e = k.current.get(r)) == null || e.focus(), P(n);
		}, H = function(t) {
			var e;
			o("WAWebStopEvent").stopEvent(t);
			var n = ($ + 1) % S.length, r = S[n];
			(e = k.current.get(r)) == null || e.focus(), P(n);
		}, G = function(t) {
			o("WAWebStopEvent").stopEvent(t), w(), P(-1);
		};
		m(function() {
			new (o("WAWebStickerPickerOpenedWamEvent")).StickerPickerOpenedWamEvent().commit(), N.current.logView({ success: !0 }), w();
		}, []);
		var z = function(t) {
			var e = t.scrollTop;
			L.current = e;
		}, j = {
			0: "xhjsbib xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3",
			8: "xhjsbib xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3",
			4: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm",
			12: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm",
			2: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1mf5yl2 x1cipttk",
			10: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1mf5yl2 x1cipttk",
			6: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1mf5yl2 x1cipttk",
			14: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1mf5yl2 x1cipttk",
			1: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1kaczmr",
			9: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1kaczmr",
			5: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1kaczmr",
			13: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1kaczmr",
			3: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1cipttk x1kaczmr",
			11: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1cipttk x1kaczmr",
			7: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1cipttk x1kaczmr",
			15: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1cipttk x1kaczmr"
		}[(u === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown || u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 3 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 2 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0];
		return c.jsxs("div", {
			className: j,
			ref: R,
			children: [c.jsx(r("WAWebPanelsMenu.react"), {
				selectedSectionId: T,
				sectionIds: S,
				renderSectionTab: function(t, n) {
					var e = y(t), r = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? b(t) : C(t), a = v(t), i = function(n) {
						k.current.set(t, n);
					};
					return c.jsx(o("WAWebPanelsMenuTab.react").MenuTab, {
						onClick: q,
						sectionId: t,
						selected: n,
						showFocusIndicator: $ !== -1,
						title: e,
						theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
						testid: a,
						onRef: i,
						children: c.jsx("span", {
							className: "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft",
							children: r
						})
					}, t);
				},
				showTabHighlight: !((a = l.defaultSearchText) != null && a.trim()),
				onFocusPrev: V,
				onFocusNext: H,
				onEnter: U,
				onFocusLeave: G,
				displayLocation: u
			}), c.jsx(r("WAWebStickerPanelContent.react"), {
				ref: E,
				onFocusUp: A,
				onFocusNext: F,
				onFocusPrev: O,
				onScroll: z,
				onChange: l.onChange,
				onSticker: l.onSticker,
				defaultSearchText: l.defaultSearchText,
				selectedTab: T,
				displayLocation: u,
				isAvatarStickers: !1
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		switch (e) {
			case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.LOVE: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.SAD: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebEmojiPickerConstants").StickerTabs.STORE: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function C(e) {
		switch (e) {
			case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES: return c.jsx(r("WDSIconIcGrade.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS: return c.jsx(r("WDSIconIcSchedule.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.STORE: return c.jsx(r("WAWebCircledPlusCustomIcon"), { height: 18 });
			default: return y(e);
		}
	}
	function b(e) {
		switch (e) {
			case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS: return c.jsx(r("WDSIconIcSchedule.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES: return c.jsx(r("WDSIconIcGrade.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.LOVE: return c.jsx(r("WDSIconIcFavorite.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS: return c.jsx(o("WAWebStickerGreetingIcon.react").StickerGreetingIcon, {});
			case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY: return c.jsx(r("WDSIconIcSentimentExcited.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.SAD: return c.jsx(r("WDSIconIcSentimentDissatisfied.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY: return c.jsx(r("WDSIconIcSentimentExtremelyDissatisfied.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE: return c.jsx(r("WDSIconIcCake.react"), {});
			case o("WAWebEmojiPickerConstants").StickerTabs.STORE: return c.jsx(r("WAWebCircledPlusCustomIcon"), { height: 18 });
		}
	}
	function v(e) {
		switch (e) {
			case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES: return "panel-starred";
			case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS: return "panel-recent";
			case o("WAWebEmojiPickerConstants").StickerTabs.STORE: return "sticker-store";
			case o("WAWebEmojiPickerConstants").StickerTabs.LOVE: return "sticker-love";
			default: return null;
		}
	}
	l.default = h;
}), 226);
