__d("MAWEditMenuItem.react", [
	"fbt",
	"MWXMenuItem.react",
	"react",
	"useTriggerEditAction"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.disableReason, n = e.message, o = e.onEditClickCallback, a = o === void 0 ? null : o, i = e.threadType, l = r("useTriggerEditAction")(n, i), c = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("MWXMenuItem.react"), {
			"aria-label": c,
			disabled: t !== void 0,
			onClick: function() {
				l(), a && a();
			},
			primaryText: c,
			secondaryText: t,
			testid: void 0
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
