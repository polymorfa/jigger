__d("MAWEditMenuItem.react", [
	"fbt",
	"MWXMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useTriggerEditAction"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.disableReason, a = e.message, i = e.onEditClickCallback, l = e.threadType, c = i === void 0 ? null : i, d = r("useTriggerEditAction")(a, l), m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[0] = m) : m = t[0];
		var p = m, _ = n !== void 0, f;
		t[1] !== c || t[2] !== d ? (f = function() {
			d(), c && c();
		}, t[1] = c, t[2] = d, t[3] = f) : f = t[3];
		var g;
		return t[4] !== n || t[5] !== _ || t[6] !== f ? (g = u.jsx(r("MWXMenuItem.react"), {
			"aria-label": p,
			disabled: _,
			onClick: f,
			primaryText: p,
			secondaryText: n,
			testid: void 0
		}), t[4] = n, t[5] = _, t[6] = f, t[7] = g) : g = t[7], g;
	}
	l.default = c;
}), 226);
