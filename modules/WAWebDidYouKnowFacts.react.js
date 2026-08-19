__d("WAWebDidYouKnowFacts.react", [
	"$InternalEnum",
	"WAWebActions",
	"WAWebKeyboardShortcut.react",
	"gkx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = n("$InternalEnum").Mirrored([
		"OPEN_EMOJI_PANEL",
		"OPEN_GIF_PANEL",
		"OPEN_STICKER_PANEL",
		"MESSAGE_INFO",
		"STATUS_OVERLAY",
		"DEBUG_COMMANDS",
		"DEBUG_COMMANDS_TOGGLE_RTL",
		"DEBUG_COMMANDS_TOGGLE_CSS_DEBUG_MODE",
		"DEBUG_COMMANDS_TOGGLE_DARK_MODE",
		"DEBUG_COMMANDS_OPEN_QA",
		"JAVASCRIPT_CONSOLE_CHAT",
		"JAVASCRIPT_CONSOLE_MESSAGE",
		"JAVASCRIPT_CONSOLE_DEBUG",
		"JAVASCRIPT_CONSOLE_STORE",
		"UI_SHOWROOM",
		"GATE_KEEPER_OVERRIDE",
		"SERVER_AB_PROPS_OVERRIDE",
		"NONDIRECT_NOTIF"
	]), c = !1, d = r("gkx")("26258"), m = "(dev only)", p = "(intern only)";
	function _(e) {
		var t = o("react-compiler-runtime").c(18), n = e.fact;
		switch (n) {
			case u.OPEN_EMOJI_PANEL: {
				var r;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s.jsxs("span", { children: [
					"You can open the Emoji Panel with",
					" ",
					s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
						action: o("WAWebActions").Action.OPEN_EMOJI_PANEL,
						addModifiers: !0
					})
				] }), t[0] = r) : r = t[0], r;
			}
			case u.OPEN_GIF_PANEL: {
				var a;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsxs("span", { children: [
					"You can open the Gif Panel with",
					" ",
					s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
						action: o("WAWebActions").Action.OPEN_GIF_PANEL,
						addModifiers: !0
					})
				] }), t[1] = a) : a = t[1], a;
			}
			case u.OPEN_STICKER_PANEL: {
				var i;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsxs("span", { children: [
					"You can open the Sticker Panel with",
					" ",
					s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
						action: o("WAWebActions").Action.OPEN_STICKER_PANEL,
						addModifiers: !0
					})
				] }), t[2] = i) : i = t[2], i;
			}
			case u.MESSAGE_INFO: {
				var l;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx("span", { children: "You can open the Message Info panel by clicking on the read receipt checkmarks." }), t[3] = l) : l = t[3], l;
			}
			case u.STATUS_OVERLAY: {
				var c;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsxs("span", { children: [
					"You can let other internal users know you are on PTO by adding @pto to your About ",
					p,
					"."
				] }), t[4] = c) : c = t[4], c;
			}
			case u.DEBUG_COMMANDS: {
				var d;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsxs("span", { children: [
					"You can trigger the Debug Commands UI by typing \\ in the compose box",
					" ",
					m,
					"."
				] }), t[5] = d) : d = t[5], d;
			}
			case u.DEBUG_COMMANDS_TOGGLE_RTL: {
				var _;
				return t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsxs("span", { children: ["You can toggle RTL by typing \\toggleRTL in the compose box ", m] }), t[6] = _) : _ = t[6], _;
			}
			case u.DEBUG_COMMANDS_TOGGLE_CSS_DEBUG_MODE: {
				var f;
				return t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsxs("span", { children: ["You can visualize CSS containers by typing \\toggleCSSDebugMode in the compose box ", m] }), t[7] = f) : f = t[7], f;
			}
			case u.DEBUG_COMMANDS_TOGGLE_DARK_MODE: {
				var g;
				return t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsxs("span", { children: [
					"You can toggle dark mode by typing \\toggleDarkMode in the compose box",
					" ",
					m
				] }), t[8] = g) : g = t[8], g;
			}
			case u.DEBUG_COMMANDS_OPEN_QA: {
				var h;
				return t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsxs("span", { children: ["You can open WhatsApp Web Intern Q&A by typing \\openInternQA in the compose box ", m] }), t[9] = h) : h = t[9], h;
			}
			case u.JAVASCRIPT_CONSOLE_CHAT: {
				var y;
				return t[10] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsxs("span", { children: [
					"You can access the currently opened chat object via the",
					" ",
					s.jsx("code", { children: "chat" }),
					" variable in the JavaScript Console ",
					p,
					"."
				] }), t[10] = y) : y = t[10], y;
			}
			case u.JAVASCRIPT_CONSOLE_MESSAGE: {
				var C;
				return t[11] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsxs("span", { children: [
					"You can access the currently focused message object via the",
					" ",
					s.jsx("code", { children: "msg" }),
					" variable in the JavaScript Console ",
					p,
					"."
				] }), t[11] = C) : C = t[11], C;
			}
			case u.JAVASCRIPT_CONSOLE_DEBUG: {
				var b;
				return t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsxs("span", { children: [
					"You can access our debug utils via the ",
					s.jsx("code", { children: "Debug" }),
					" variable in the JavaScript Console ",
					p,
					"."
				] }), t[12] = b) : b = t[12], b;
			}
			case u.JAVASCRIPT_CONSOLE_STORE: {
				var v;
				return t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsxs("span", { children: [
					"You can access our collections via the ",
					s.jsx("code", { children: "Store" }),
					" variable in the JavaScript Console ",
					p,
					"."
				] }), t[13] = v) : v = t[13], v;
			}
			case u.UI_SHOWROOM: {
				var S;
				return t[14] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsxs("span", { children: [
					"You can open the UI Showroom from the settings drawer to look at our UI Components ",
					m,
					"."
				] }), t[14] = S) : S = t[14], S;
			}
			case u.GATE_KEEPER_OVERRIDE: {
				var R;
				return t[15] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsxs("span", { children: [
					"You can enable Gate Keeper Feature Flags by passing additional query parameters in the URL: ?gk_",
					"<feature_flag>",
					" ",
					p,
					"."
				] }), t[15] = R) : R = t[15], R;
			}
			case u.SERVER_AB_PROPS_OVERRIDE: {
				var L;
				return t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = s.jsxs("span", { children: [
					"You can override Server/AB Props by passing additional query parameters in the URL: ?",
					"<prop_1>=<value>&<prop_2>=<value>",
					" ",
					p,
					"."
				] }), t[16] = L) : L = t[16], L;
			}
			case u.NONDIRECT_NOTIF: {
				var E;
				return t[17] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsxs("span", { children: ["You can disable non-direct group notifications in the settings, restore the value of the audible ping! ", p] }), t[17] = E) : E = t[17], E;
			}
		}
	}
	var f = function(t) {
		switch (t) {
			case u.OPEN_EMOJI_PANEL:
			case u.OPEN_GIF_PANEL:
			case u.OPEN_STICKER_PANEL:
			case u.MESSAGE_INFO: return !0;
			case u.STATUS_OVERLAY:
			case u.NONDIRECT_NOTIF: return !d;
			case u.DEBUG_COMMANDS:
			case u.DEBUG_COMMANDS_TOGGLE_RTL:
			case u.DEBUG_COMMANDS_TOGGLE_CSS_DEBUG_MODE:
			case u.DEBUG_COMMANDS_TOGGLE_DARK_MODE:
			case u.DEBUG_COMMANDS_OPEN_QA:
			case u.JAVASCRIPT_CONSOLE_CHAT:
			case u.JAVASCRIPT_CONSOLE_MESSAGE:
			case u.JAVASCRIPT_CONSOLE_DEBUG:
			case u.JAVASCRIPT_CONSOLE_STORE:
			case u.UI_SHOWROOM:
			case u.GATE_KEEPER_OVERRIDE:
			case u.SERVER_AB_PROPS_OVERRIDE: return c;
		}
	};
	function g() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = Array.from(u.members()).filter(f), e[0] = t) : t = e[0];
		var n = t, r = n[Math.floor(Math.random() * n.length)], a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(_, { fact: r }), e[1] = a) : a = e[1], a;
	}
	l.default = g;
}), 98);
