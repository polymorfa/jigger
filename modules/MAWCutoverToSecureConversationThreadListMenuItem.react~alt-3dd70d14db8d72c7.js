__d("MAWCutoverToSecureConversationThreadListMenuItem.react", [
	"fbt",
	"FDSMenuSeparator.react",
	"LSFactory",
	"LSInitiateThreadCutoverStoredProcedure",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"isThreadLevelCutoverEnabled",
	"promiseDone",
	"react",
	"useMAWCanThreadBeCutover",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.onPress, o = t.threadKey, a = (e || (e = r("useReStore")))(), l = r("useMAWCanThreadBeCutover")(o);
		return r("isThreadLevelCutoverEnabled")() && l ? c.jsxs(c.Fragment, { children: [c.jsx(r("FDSMenuSeparator.react"), {}), c.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			onClick: function(t) {
				n == null || n(t), r("promiseDone")(a.runInTransaction(function(e) {
					return r("LSInitiateThreadCutoverStoredProcedure")(r("LSFactory")(e), { openThreadId: o });
				}, "readwrite", void 0, void 0, i.id + ":42"));
			},
			primaryText: s._(
				/*BTDS*/
				""
			),
			testid: void 0
		})] }) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
