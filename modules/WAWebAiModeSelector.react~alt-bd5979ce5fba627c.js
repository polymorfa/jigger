__d("WAWebAiModeSelector.react", [
	"fbt",
	"WAWebAiModeSelectorUtils",
	"WAWebBotBaseGating",
	"WAWebBotJourneyLogger",
	"WAWebDynamicAIModesCache",
	"WAWebGetAvailableBotSelectionModes",
	"WAWebMaybeGetBotModeSelection",
	"WAWebUpdateBotModeSelectionAction",
	"WAWebWamEnumTsSurface",
	"WDSChip.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSTooltip.react",
	"react",
	"useWAWebBotModeSelection",
	"useWAWebDynamicBotModeOverride",
	"useWAWebModeSelectionImpressionLogging",
	"useWAWebResolvedBotMode",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(e) {
		var t = e.chat, n = e.threadId, a = o("useWAWebResolvedBotMode").useWAWebResolvedBotMode(t, n), i = a.icon, l = a.subtitle, s = a.title, c = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging(), d = u.jsx(r("WDSChip.react"), {
			Icon: i,
			label: s,
			isNeutral: !0,
			testid: "chat_thread_ai_mode_selector_chip",
			isDisabled: !0
		});
		return u.jsx("div", {
			ref: c,
			children: l != null ? u.jsx(r("WDSTooltip.react"), {
				label: l,
				children: d
			}) : d
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.chat, n = e.threadId, a = o("useWAWebBotModeSelection").useWAWebBotModeSelection(t, n), i = a[0], l = p(null), s = l[0], c = l[1], _ = p(i), f = _[0], g = _[1], h = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging();
		i !== f && (g(i), c(null));
		var y = s != null ? s : i;
		d(function() {
			return function() {
				o("WAWebMaybeGetBotModeSelection").clearInMemoryBotMode();
			};
		}, []);
		var C = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(y), b = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(y), v = m(null);
		function S(e) {
			c(e), o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), o("WAWebUpdateBotModeSelectionAction").persistBotModeSelection({
				chat: t,
				threadId: n,
				botModeSelection: [e]
			}), L();
		}
		var R = r("useWDSMenu")({
			targetRef: v,
			menu: u.jsx(r("WDSMenu.react"), { children: o("WAWebGetAvailableBotSelectionModes").getAvailableBotSelectionModes().map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					testid: "ai-mode-" + String(e),
					Icon: o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(e),
					title: o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(e),
					subtitle: o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(e),
					isToggleable: !0,
					toggled: e === y,
					onPress: function() {
						return S(e);
					}
				}, "ai-mode-" + String(e));
			}) }),
			position: "above",
			align: "end"
		}), L = R.closeMenu, E = R.isMenuOpen, k = R.menuPortal, I = R.openMenu, T = m(!1);
		d(function() {
			var e = T.current;
			T.current = E, E && !e && o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
		}, [E]);
		function D() {
			o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), I();
		}
		return u.jsxs("div", {
			ref: h,
			children: [u.jsx(r("WDSChip.react"), {
				ref: v,
				Icon: C,
				label: b,
				isNeutral: !0,
				onPress: D,
				"aria-expanded": E,
				isSelected: E,
				testid: "chat_thread_ai_mode_selector_chip"
			}), k]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.chat, a = e.threadId, i = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(n, a), l = p(null), c = l[0], _ = l[1], f = p(i), g = f[0], h = f[1];
		i !== g && (h(i), _(null));
		var y = (t = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes()) != null ? t : [], C = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode(), b = c != null ? c : i, v = b != null && y.length > 0 && !y.some(function(e) {
			return e.modeId === b.modeId;
		}), S = v ? C : b != null ? b : C, R = y.length <= 1;
		d(function() {
			v && !R && o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
				chat: n,
				threadId: a,
				botModeOverride: [C.modeId]
			});
		}, [
			v,
			R,
			n,
			a,
			C.modeId
		]), d(function() {
			return function() {
				o("WAWebMaybeGetBotModeSelection").clearInMemoryBotModeOverride();
			};
		}, []);
		var L = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging(), E = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(S.type), k = m(null);
		function I(e) {
			_(e), o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
				chat: n,
				threadId: a,
				botModeOverride: [e.modeId]
			}), D();
		}
		var T = r("useWDSMenu")({
			targetRef: k,
			menu: u.jsx(r("WDSMenu.react"), { children: y.map(function(e) {
				var t = e.isExperimental ? s._(
					/*BTDS*/
					"",
					[s._param("subtitle", e.subtitle), s._param("internalTag", s._(
						/*BTDS*/
						""
					))]
				) : e.subtitle;
				return u.jsx(r("WDSMenuItem.react"), {
					testid: "ai-mode-" + e.modeId,
					Icon: o("WAWebAiModeSelectorUtils").getDynamicModeIcon(e.type),
					title: e.title,
					subtitle: t,
					isToggleable: !0,
					toggled: S.modeId === e.modeId,
					onPress: function() {
						return I(e);
					}
				}, "ai-mode-" + e.modeId);
			}) }),
			position: "above",
			align: "end"
		}), D = T.closeMenu, x = T.isMenuOpen, $ = T.menuPortal, P = T.openMenu, N = m(!1);
		d(function() {
			var e = N.current;
			N.current = x, x && !e && o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
		}, [x]);
		function M() {
			o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), P();
		}
		return R ? null : u.jsxs("div", {
			ref: L,
			children: [u.jsx(r("WDSChip.react"), {
				ref: k,
				Icon: E,
				label: S.title,
				isNeutral: !0,
				onPress: M,
				"aria-expanded": x,
				isSelected: x,
				testid: "chat_thread_ai_mode_selector_chip"
			}), $]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.chat, n = e.isInteractive, r = n === void 0 ? !1 : n, a = e.threadId;
		return o("WAWebBotBaseGating").isDynamicModeSelectorEnabled() ? r ? u.jsx(g, {
			chat: t,
			threadId: a
		}) : null : r ? u.jsx(f, {
			chat: t,
			threadId: a
		}) : u.jsx(_, {
			chat: t,
			threadId: a
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
