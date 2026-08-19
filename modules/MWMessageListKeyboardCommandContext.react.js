__d("MWMessageListKeyboardCommandContext.react", [
	"ExecutionEnvironment",
	"MWMessageRowActionsRegistry.react",
	"cometGetKeyCommandConfig",
	"react",
	"react-compiler-runtime",
	"useGlobalKeyCommands"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useMemo;
	function d(t) {
		if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM || t == null) return null;
		var n = document.activeElement;
		if (!(n instanceof HTMLElement)) return null;
		var o = n.closest("[data-scope=\"messages_table\"]");
		if (!(o instanceof HTMLElement)) return null;
		var a = o.dataset.messageId;
		if (a == null || a === "") return null;
		var i = t.getActions(a);
		return i == null ? null : {
			forwardMessage: function() {
				return i.forwardMessage.current();
			},
			openReactionsMenu: function() {
				return i.openReactionsMenu.current();
			},
			removeMessage: function() {
				return i.removeMessage.current();
			},
			replyToMessage: function() {
				return i.replyToMessage.current();
			}
		};
	}
	function m(t) {
		"use no forget";
		var n = t.children, a = t.id, i = o("MWMessageRowActionsRegistry.react").useMWMessageRowActionsRegistry(), l = c(function() {
			var t;
			return [
				(t = o("cometGetKeyCommandConfig")).getCometAndGeminiKeyCommandConfig("chats", "jumpToMessageList", function() {
					if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) try {
						var t = document.querySelectorAll("[id=\"" + a + "\"] [tabindex=\"0\"][data-scope]");
						if (t.length === 0 && (t = document.querySelectorAll("[id=\"" + a + "\"] [data-scope]")), t.length > 0) {
							var n = t[t.length - 1];
							n instanceof HTMLElement && (n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus());
						}
					} catch (e) {}
				}),
				t.getCometAndGeminiKeyCommandConfig("chats", "likeMessage", function() {
					var e;
					(e = d(i)) == null || e.openReactionsMenu();
				}),
				t.getCometAndGeminiKeyCommandConfig("chats", "replyToMessage", function() {
					var e;
					(e = d(i)) == null || e.replyToMessage();
				}),
				t.getCometAndGeminiKeyCommandConfig("chats", "forwardMessage", function() {
					var e;
					(e = d(i)) == null || e.forwardMessage();
				}),
				t.getCometAndGeminiKeyCommandConfig("chats", "removeMessage", function() {
					var e;
					(e = d(i)) == null || e.removeMessage();
				})
			];
		}, [a, i]);
		return r("useGlobalKeyCommands")(l), n;
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.id, a;
		return t[0] !== n || t[1] !== r ? (a = u.jsx(o("MWMessageRowActionsRegistry.react").MWMessageRowActionsRegistryProvider, { children: u.jsx(m, {
			id: r,
			children: n
		}) }), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	l.default = p;
}), 98);
