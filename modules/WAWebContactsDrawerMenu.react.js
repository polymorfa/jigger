__d("WAWebContactsDrawerMenu.react", [
	"fbt",
	"WAWebNoop",
	"WDSIconIcCheckBox.react",
	"WDSIconIcPersonAddFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onAddContact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPersonAddFilled.react"),
			onPress: n,
			title: a
		}, "add-contact"), t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCheckBox.react"),
			onPress: r("WAWebNoop"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "select-contacts"), t[3] = l) : l = t[3];
		var c;
		return t[4] !== i ? (c = u.jsxs(r("WDSMenu.react"), {
			testid: "contacts-header-dropdown",
			children: [i, l]
		}), t[4] = i, t[5] = c) : c = t[5], c;
	}
	l.default = c;
}), 226);
