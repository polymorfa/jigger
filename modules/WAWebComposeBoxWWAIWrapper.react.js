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
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState;
	function g(t) {
		var n = t.chatId, a = t.fabSlot, i = t.getComposeText, l = t.isBot, s = t.onAcceptSuggestion, c = t.onWillOpenTray, m = t.wordCount, _ = o("WAWebWWAIGating").isWWAIEnabledForChat(n), f = S(), g = o("WAWebUseWWAISuggestions").useWWAISuggestions(), v = g.state.state !== "idle", R = g.state.state === "nux_pending", L = g.closeTray, E = p(function() {
			try {
				var t = o("WAWebABProps").getABPropConfigValue("ai_rewrite_entry_point_min_words");
				return typeof t == "number" && t > 0 ? t : o("WAWebWWAIConstants").DEFAULT_MIN_WORDS;
			} catch (t) {
				return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WWAI] ABProp ai_rewrite_entry_point_min_words read fail"]))).sendLogs("wwai-abprop-read-fail"), o("WAWebWWAIConstants").DEFAULT_MIN_WORDS;
			}
		}, []);
		b(v && !R), h(n, L), y(m, E, v, L), C(v, L);
		var k = d(function() {
			v ? g.closeTray() : (c(), g.openTray(i()));
		}, [
			v,
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
			v && !R && u.jsx("div", {
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
		var n = o("react-compiler-runtime").c(4), r = _(e), a, i;
		n[0] !== e || n[1] !== t ? (a = function() {
			r.current !== e && (r.current = e, t());
		}, i = [e, t], n[0] = e, n[1] = t, n[2] = a, n[3] = i) : (a = n[2], i = n[3]), m(a, i);
	}
	function y(e, t, n, r) {
		var a = o("react-compiler-runtime").c(6), i, l;
		a[0] !== r || a[1] !== n || a[2] !== t || a[3] !== e ? (i = function() {
			n && e < t && r();
		}, l = [
			e,
			t,
			n,
			r
		], a[0] = r, a[1] = n, a[2] = t, a[3] = e, a[4] = i, a[5] = l) : (i = a[4], l = a[5]), m(i, l);
	}
	function C(e, t) {
		var n = o("react-compiler-runtime").c(3), r;
		n[0] !== t ? (r = function(n) {
			n.key === "Escape" && (n.stopPropagation(), n.preventDefault(), t());
		}, n[0] = t, n[1] = r) : r = n[1];
		var a = r, i;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (i = { capture: !0 }, n[2] = i) : i = n[2], o("useWAWebListener").useListener(e ? document : null, "keydown", a, i);
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = _(!1), r, a;
		t[0] !== e ? (r = function() {
			if (e && !n.current) {
				var t = window.setTimeout(v, 200);
				return n.current = !0, (function() {
					return window.clearTimeout(t);
				});
			}
			e || (n.current = !1);
		}, a = [e], t[0] = e, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), m(r, a);
	}
	function v() {
		var e = document.querySelector("[data-testid=\"wwai_tray\"] [role=\"tab\"][aria-selected=\"true\"]");
		e instanceof HTMLElement && e.focus();
	}
	function S() {
		var e = o("react-compiler-runtime").c(2), t = f(R), n = t[0], a = t[1], i, l;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			r("WAWebWWAITeeTransportInit")(), a(o("WAWebWWAITransportRegistry").isTransportAvailable());
		}, l = [], e[0] = i, e[1] = l) : (i = e[0], l = e[1]), m(i, l), n;
	}
	function R() {
		return o("WAWebWWAITransportRegistry").isTransportAvailable();
	}
	l.default = g;
}), 98);
