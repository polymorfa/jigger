__d("WAWebDidYouKnowFacts.react", [
	"$InternalEnum",
	"WAWebActions",
	"WAWebKeyboardShortcut.react",
	"gkx",
	"react"
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
		var t = e.fact;
		switch (t) {
			case u.OPEN_EMOJI_PANEL: return s.jsxs("span", { children: [
				"You can open the Emoji Panel with",
				" ",
				s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
					action: o("WAWebActions").Action.OPEN_EMOJI_PANEL,
					addModifiers: !0
				})
			] });
			case u.OPEN_GIF_PANEL: return s.jsxs("span", { children: [
				"You can open the Gif Panel with",
				" ",
				s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
					action: o("WAWebActions").Action.OPEN_GIF_PANEL,
					addModifiers: !0
				})
			] });
			case u.OPEN_STICKER_PANEL: return s.jsxs("span", { children: [
				"You can open the Sticker Panel with",
				" ",
				s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
					action: o("WAWebActions").Action.OPEN_STICKER_PANEL,
					addModifiers: !0
				})
			] });
			case u.MESSAGE_INFO: return s.jsx("span", { children: "You can open the Message Info panel by clicking on the read receipt checkmarks." });
			case u.STATUS_OVERLAY: return s.jsxs("span", { children: [
				"You can let other internal users know you are on PTO by adding @pto to your About ",
				p,
				"."
			] });
			case u.DEBUG_COMMANDS: return s.jsxs("span", { children: [
				"You can trigger the Debug Commands UI by typing \\ in the compose box",
				" ",
				m,
				"."
			] });
			case u.DEBUG_COMMANDS_TOGGLE_RTL: return s.jsxs("span", { children: ["You can toggle RTL by typing \\toggleRTL in the compose box ", m] });
			case u.DEBUG_COMMANDS_TOGGLE_CSS_DEBUG_MODE: return s.jsxs("span", { children: ["You can visualize CSS containers by typing \\toggleCSSDebugMode in the compose box ", m] });
			case u.DEBUG_COMMANDS_TOGGLE_DARK_MODE: return s.jsxs("span", { children: [
				"You can toggle dark mode by typing \\toggleDarkMode in the compose box",
				" ",
				m
			] });
			case u.DEBUG_COMMANDS_OPEN_QA: return s.jsxs("span", { children: ["You can open WhatsApp Web Intern Q&A by typing \\openInternQA in the compose box ", m] });
			case u.JAVASCRIPT_CONSOLE_CHAT: return s.jsxs("span", { children: [
				"You can access the currently opened chat object via the",
				" ",
				s.jsx("code", { children: "chat" }),
				" variable in the JavaScript Console ",
				p,
				"."
			] });
			case u.JAVASCRIPT_CONSOLE_MESSAGE: return s.jsxs("span", { children: [
				"You can access the currently focused message object via the",
				" ",
				s.jsx("code", { children: "msg" }),
				" variable in the JavaScript Console ",
				p,
				"."
			] });
			case u.JAVASCRIPT_CONSOLE_DEBUG: return s.jsxs("span", { children: [
				"You can access our debug utils via the ",
				s.jsx("code", { children: "Debug" }),
				" variable in the JavaScript Console ",
				p,
				"."
			] });
			case u.JAVASCRIPT_CONSOLE_STORE: return s.jsxs("span", { children: [
				"You can access our collections via the ",
				s.jsx("code", { children: "Store" }),
				" variable in the JavaScript Console ",
				p,
				"."
			] });
			case u.UI_SHOWROOM: return s.jsxs("span", { children: [
				"You can open the UI Showroom from the settings drawer to look at our UI Components ",
				m,
				"."
			] });
			case u.GATE_KEEPER_OVERRIDE: return s.jsxs("span", { children: [
				"You can enable Gate Keeper Feature Flags by passing additional query parameters in the URL: ?gk_",
				"<feature_flag>",
				" ",
				p,
				"."
			] });
			case u.SERVER_AB_PROPS_OVERRIDE: return s.jsxs("span", { children: [
				"You can override Server/AB Props by passing additional query parameters in the URL: ?",
				"<prop_1>=<value>&<prop_2>=<value>",
				" ",
				p,
				"."
			] });
			case u.NONDIRECT_NOTIF: return s.jsxs("span", { children: ["You can disable non-direct group notifications in the settings, restore the value of the audible ping! ", p] });
		}
	}
	_.displayName = _.name + " [from " + i.id + "]";
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
		var e = Array.from(u.members()).filter(f), t = e[Math.floor(Math.random() * e.length)];
		return s.jsx(_, { fact: t });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
