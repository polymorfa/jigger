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
	"react-compiler-runtime",
	"useMAWCanThreadBeCutover",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(8), a = t.onPress, l = t.threadKey, u = (e || (e = r("useReStore")))(), d = r("useMAWCanThreadBeCutover")(l);
		if (r("isThreadLevelCutoverEnabled")() && d) {
			var m;
			n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(r("FDSMenuSeparator.react"), {}), n[0] = m) : m = n[0];
			var p;
			n[1] !== u || n[2] !== a || n[3] !== l ? (p = function(t) {
				a == null || a(t), r("promiseDone")(u.runInTransaction(function(e) {
					return r("LSInitiateThreadCutoverStoredProcedure")(r("LSFactory")(e), { openThreadId: l });
				}, "readwrite", void 0, void 0, i.id + ":42"));
			}, n[1] = u, n[2] = a, n[3] = l, n[4] = p) : p = n[4];
			var _;
			n[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
				/*BTDS*/
				""
			), n[5] = _) : _ = n[5];
			var f;
			return n[6] !== p ? (f = c.jsxs(c.Fragment, { children: [m, c.jsx(r("MWXMenuItem.react"), {
				icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
				onClick: p,
				primaryText: _,
				testid: void 0
			})] }), n[6] = p, n[7] = f) : f = n[7], f;
		}
		return null;
	}
	l.default = d;
}), 226);
