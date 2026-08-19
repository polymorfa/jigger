__d("WAWebComposeBoxWWAIWrapper.react", [
	"ReactDOM",
	"WALogger",
	"WAWebABProps",
	"WAWebComposeBoxFAB.react",
	"WAWebUseWWAISuggestions",
	"WAWebWWAIConstants",
	"WAWebWWAIGating",
	"WAWebWWAINUXModal.react",
	"WAWebWWAITeeTransportInit",
	"WAWebWWAITransportRegistry",
	"WAWebWWAITrayLoadable",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState;
	function g(t) {
		var n = t.chatId, a = t.fabSlot, i = t.getComposeText, l = t.isBot, s = t.onAcceptSuggestion, c = t.onWillOpenTray, m = t.wordCount, _ = o("WAWebWWAIGating").isWWAIEnabledForChat(n), f = v(), g = o("WAWebUseWWAISuggestions").useWWAISuggestions(), S = g.state.state !== "idle", R = g.state.state === "nux_pending", L = g.closeTray, E = p(function() {
			try {
				var t = o("WAWebABProps").getABPropConfigValue("ai_rewrite_entry_point_min_words");
				return typeof t == "number" && t > 0 ? t : o("WAWebWWAIConstants").DEFAULT_MIN_WORDS;
			} catch (t) {
				return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WWAI] ABProp ai_rewrite_entry_point_min_words read fail"]))).sendLogs("wwai-abprop-read-fail"), o("WAWebWWAIConstants").DEFAULT_MIN_WORDS;
			}
		}, []);
		b(S && !R), h(n, L), y(m, E, S, L), C(S, L);
		var k = d(function() {
			S ? g.closeTray() : (c(), g.openTray(i()));
		}, [
			S,
			c,
			i,
			g
		]), I = d(function() {
			g.acceptNux(i());
		}, [g, i]), T = d(function(e) {
			s == null || s(e), g.closeTray();
		}, [s, g]), D = m >= E && f && !l && _;
		return l || !_ ? null : u.jsxs(u.Fragment, { children: [
			a != null && o("ReactDOM").createPortal(u.jsx(r("WAWebComposeBoxFAB.react"), {
				isVisible: D,
				onPress: k
			}), a),
			S && !R && u.jsx("div", {
				className: "x10l6tqk xwmwtye xtijo5x xewp6mh xzkaem6",
				children: u.jsx(r("WAWebWWAITrayLoadable"), {
					api: g,
					getComposeText: i,
					onAcceptSuggestion: T,
					onClose: L
				})
			}),
			R && u.jsx(r("WAWebWWAINUXModal.react"), {
				onAccept: I,
				onDecline: L
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		var n = _(e);
		m(function() {
			n.current !== e && (n.current = e, t());
		}, [e, t]);
	}
	function y(e, t, n, r) {
		m(function() {
			n && e < t && r();
		}, [
			e,
			t,
			n,
			r
		]);
	}
	function C(e, t) {
		var n = d(function(e) {
			e.key === "Escape" && (e.stopPropagation(), e.preventDefault(), t());
		}, [t]);
		o("useWAWebListener").useListener(e ? document : null, "keydown", n, { capture: !0 });
	}
	function b(e) {
		var t = _(!1);
		m(function() {
			if (e && !t.current) {
				var n = window.setTimeout(function() {
					var e = document.querySelector("[data-testid=\"wwai_tray\"] [role=\"tab\"][aria-selected=\"true\"]");
					e instanceof HTMLElement && e.focus();
				}, 200);
				return t.current = !0, function() {
					return window.clearTimeout(n);
				};
			}
			e || (t.current = !1);
		}, [e]);
	}
	function v() {
		var e = f(function() {
			return o("WAWebWWAITransportRegistry").isTransportAvailable();
		}), t = e[0], n = e[1];
		return m(function() {
			r("WAWebWWAITeeTransportInit")(), n(o("WAWebWWAITransportRegistry").isTransportAvailable());
		}, []), t;
	}
	l.default = g;
}), 98);
