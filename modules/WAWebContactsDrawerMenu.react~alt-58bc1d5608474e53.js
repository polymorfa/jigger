__d("WAWebContactsDrawerMenu.react", [
	"fbt",
	"WAWebNoop",
	"WDSIconIcCheckBox.react",
	"WDSIconIcPersonAddFilled.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onAddContact;
		return u.jsxs(r("WDSMenu.react"), {
			testid: "contacts-header-dropdown",
			children: [u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPersonAddFilled.react"),
				onPress: t,
				title: s._(
					/*BTDS*/
					""
				)
			}, "add-contact"), u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCheckBox.react"),
				onPress: r("WAWebNoop"),
				title: s._(
					/*BTDS*/
					""
				)
			}, "select-contacts")]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
