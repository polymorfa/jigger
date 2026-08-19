__d("MAWEndToEndEncryptionKeysMenuItem.react", [
	"fbt",
	"MAWEndToEndEncryptionKeysVerifyDialog.entrypoint",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useMWXEntryPointDialog"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.loggingEvent, a = e.thread, i;
		t[0] !== a.threadKey ? (i = { threadKey: a.threadKey }, t[0] = a.threadKey, t[1] = i) : i = t[1];
		var l = r("useMWXEntryPointDialog")(r("MAWEndToEndEncryptionKeysVerifyDialog.entrypoint"), i), c = l[0], d = l[1], m = l[2], p = l[3], _;
		t[2] !== c || t[3] !== a.threadKey ? (_ = function() {
			return c({ threadKey: a.threadKey });
		}, t[2] = c, t[3] = a.threadKey, t[4] = _) : _ = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[5] = f) : f = t[5];
		var g;
		return t[6] !== n || t[7] !== d || t[8] !== m || t[9] !== p || t[10] !== _ ? (g = u.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").EndToEndEncryptionKeys,
			loggingEvent: n,
			onClick: _,
			onHoverIn: d,
			onHoverOut: m,
			onPressIn: p,
			primaryText: f,
			testid: void 0
		}), t[6] = n, t[7] = d, t[8] = m, t[9] = p, t[10] = _, t[11] = g) : g = t[11], g;
	}
	l.default = c;
}), 226);
