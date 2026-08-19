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
	"react-compiler-runtime",
	"useWAWebBotModeSelection",
	"useWAWebDynamicBotModeOverride",
	"useWAWebModeSelectionImpressionLogging",
	"useWAWebResolvedBotMode",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(9), n = e.chat, a = e.threadId, i = o("useWAWebResolvedBotMode").useWAWebResolvedBotMode(n, a), l = i.icon, s = i.subtitle, c = i.title, d = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging(), m;
		t[0] !== l || t[1] !== c ? (m = u.jsx(r("WDSChip.react"), {
			Icon: l,
			label: c,
			isNeutral: !0,
			testid: "chat_thread_ai_mode_selector_chip",
			isDisabled: !0
		}), t[0] = l, t[1] = c, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== p || t[4] !== s ? (_ = s != null ? u.jsx(r("WDSTooltip.react"), {
			label: s,
			children: p
		}) : p, t[3] = p, t[4] = s, t[5] = _) : _ = t[5];
		var f;
		return t[6] !== _ || t[7] !== d ? (f = u.jsx("div", {
			ref: d,
			children: _
		}), t[6] = _, t[7] = d, t[8] = f) : f = t[8], f;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(19), n = e.chat, a = e.threadId, i = o("useWAWebBotModeSelection").useWAWebBotModeSelection(n, a), l = i[0], s = p(null), c = s[0], _ = s[1], f = p(l), h = f[0], y = f[1], C = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging();
		l !== h && (y(l), _(null));
		var b = c != null ? c : l, v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = [], t[0] = v) : v = t[0], d(g, v);
		var S;
		t[1] !== b ? (S = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(b), t[1] = b, t[2] = S) : S = t[2];
		var R = S, L;
		t[3] !== b ? (L = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(b), t[3] = b, t[4] = L) : L = t[4];
		var E = L, k = m(null), I = function(t) {
			_(t), o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), o("WAWebUpdateBotModeSelectionAction").persistBotModeSelection({
				chat: n,
				threadId: a,
				botModeSelection: [t]
			}), N();
		}, T = r("useWDSMenu")({
			targetRef: k,
			menu: u.jsx(r("WDSMenu.react"), { children: o("WAWebGetAvailableBotSelectionModes").getAvailableBotSelectionModes().map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					testid: "ai-mode-" + String(e),
					Icon: o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(e),
					title: o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(e),
					subtitle: o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(e),
					isToggleable: !0,
					toggled: e === b,
					onPress: function() {
						return I(e);
					}
				}, "ai-mode-" + String(e));
			}) }),
			position: "above",
			align: "end"
		}), D = T.closeMenu, x = T.isMenuOpen, $ = T.menuPortal, P = T.openMenu, N = D, M = m(!1), w, A;
		t[5] !== x ? (w = function() {
			var e = M.current;
			M.current = x, x && !e && o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
		}, A = [x], t[5] = x, t[6] = w, t[7] = A) : (w = t[6], A = t[7]), d(w, A);
		var F;
		t[8] !== P ? (F = function() {
			o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), P();
		}, t[8] = P, t[9] = F) : F = t[9];
		var O = F, B;
		t[10] !== R || t[11] !== O || t[12] !== x || t[13] !== E ? (B = u.jsx(r("WDSChip.react"), {
			ref: k,
			Icon: R,
			label: E,
			isNeutral: !0,
			onPress: O,
			"aria-expanded": x,
			isSelected: x,
			testid: "chat_thread_ai_mode_selector_chip"
		}), t[10] = R, t[11] = O, t[12] = x, t[13] = E, t[14] = B) : B = t[14];
		var W;
		return t[15] !== $ || t[16] !== B || t[17] !== C ? (W = u.jsxs("div", {
			ref: C,
			children: [B, $]
		}), t[15] = $, t[16] = B, t[17] = C, t[18] = W) : W = t[18], W;
	}
	function g() {
		return h;
	}
	function h() {
		o("WAWebMaybeGetBotModeSelection").clearInMemoryBotMode();
	}
	function y(e) {
		var t, n = o("react-compiler-runtime").c(24), a = e.chat, i = e.threadId, l = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(a, i), c = p(null), _ = c[0], f = c[1], g = p(l), h = g[0], y = g[1];
		l !== h && (y(l), f(null));
		var b = (t = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes()) != null ? t : [], v;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode(), n[0] = v) : v = n[0];
		var S = v, R = _ != null ? _ : l, L = R != null && b.length > 0 && !b.some(function(e) {
			return e.modeId === R.modeId;
		}), E = L ? S : R != null ? R : S, k = b.length <= 1, I, T;
		n[1] !== a || n[2] !== L || n[3] !== k || n[4] !== i ? (I = function() {
			L && !k && o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
				chat: a,
				threadId: i,
				botModeOverride: [S.modeId]
			});
		}, T = [
			L,
			k,
			a,
			i,
			S.modeId
		], n[1] = a, n[2] = L, n[3] = k, n[4] = i, n[5] = I, n[6] = T) : (I = n[5], T = n[6]), d(I, T);
		var D;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (D = [], n[7] = D) : D = n[7], d(C, D);
		var x = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging(), $;
		n[8] !== E.type ? ($ = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(E.type), n[8] = E.type, n[9] = $) : $ = n[9];
		var P = $, N = m(null), M = function(t) {
			f(t), o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
				chat: a,
				threadId: i,
				botModeOverride: [t.modeId]
			}), W();
		}, w = r("useWDSMenu")({
			targetRef: N,
			menu: u.jsx(r("WDSMenu.react"), { children: b.map(function(e) {
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
					toggled: E.modeId === e.modeId,
					onPress: function() {
						return M(e);
					}
				}, "ai-mode-" + e.modeId);
			}) }),
			position: "above",
			align: "end"
		}), A = w.closeMenu, F = w.isMenuOpen, O = w.menuPortal, B = w.openMenu, W = A, q = m(!1), U, V;
		n[10] !== F ? (U = function() {
			var e = q.current;
			q.current = F, F && !e && o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
		}, V = [F], n[10] = F, n[11] = U, n[12] = V) : (U = n[11], V = n[12]), d(U, V);
		var H;
		n[13] !== B ? (H = function() {
			o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick(), B();
		}, n[13] = B, n[14] = H) : H = n[14];
		var G = H;
		if (k) return null;
		var z;
		n[15] !== P || n[16] !== E.title || n[17] !== G || n[18] !== F ? (z = u.jsx(r("WDSChip.react"), {
			ref: N,
			Icon: P,
			label: E.title,
			isNeutral: !0,
			onPress: G,
			"aria-expanded": F,
			isSelected: F,
			testid: "chat_thread_ai_mode_selector_chip"
		}), n[15] = P, n[16] = E.title, n[17] = G, n[18] = F, n[19] = z) : z = n[19];
		var j;
		return n[20] !== O || n[21] !== z || n[22] !== x ? (j = u.jsxs("div", {
			ref: x,
			children: [z, O]
		}), n[20] = O, n[21] = z, n[22] = x, n[23] = j) : j = n[23], j;
	}
	function C() {
		return b;
	}
	function b() {
		o("WAWebMaybeGetBotModeSelection").clearInMemoryBotModeOverride();
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(9), n = e.chat, r = e.isInteractive, a = e.threadId, i = r === void 0 ? !1 : r;
		if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
			if (!i) return null;
			var l;
			return t[0] !== n || t[1] !== a ? (l = u.jsx(y, {
				chat: n,
				threadId: a
			}), t[0] = n, t[1] = a, t[2] = l) : l = t[2], l;
		}
		if (i) {
			var s;
			return t[3] !== n || t[4] !== a ? (s = u.jsx(f, {
				chat: n,
				threadId: a
			}), t[3] = n, t[4] = a, t[5] = s) : s = t[5], s;
		}
		var c;
		return t[6] !== n || t[7] !== a ? (c = u.jsx(_, {
			chat: n,
			threadId: a
		}), t[6] = n, t[7] = a, t[8] = c) : c = t[8], c;
	}
	l.default = v;
}), 226);
