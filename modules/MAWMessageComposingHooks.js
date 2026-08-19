__d("MAWMessageComposingHooks", [
	"MWFBLogger",
	"Promise",
	"WAJids",
	"WAQueryGroupsAndSync"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MWFBLogger").MWLogger().tags(["MAWMessageComposingHooks"]);
	function d(e, t) {
		p(e).catch(function(e) {
			c.catching(e).mustfix("Caught while calling maybeGetGroupInfoAheadOfGroupMessageSend hook for chat state composer.");
		});
	}
	var m = new Set();
	function p(t) {
		return o("WAJids").switchOnMsgrChatJidType(t, {
			group: function(r) {
				return m.has(r) ? (u || (u = n("Promise"))).resolve() : (c.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Querying group info ahead of group message send: ", ""])), r), m.add(r), o("WAQueryGroupsAndSync").queryGroupsAndSync({ groupJids: [r] }).catch(function(e) {
					c.catching(e).MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to query groups"])));
				}));
			},
			user: function() {
				return (u || (u = n("Promise"))).resolve();
			}
		});
	}
	l.callMessageComposingHooks = d;
}), 98);
