__d("WAWebWindowsBrokenHybrid2559ButterBar.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebWindowsBrokenHybrid2559Modal.react",
	"WDSBanner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx("div", {
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: u.jsx(r("WDSBanner.react"), {
				type: "warning",
				title: s._(
					/*BTDS*/
					""
				),
				body: s._(
					/*BTDS*/
					""
				),
				actionText: s._(
					/*BTDS*/
					""
				),
				onAction: d
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebWindowsBrokenHybrid2559Modal.react"), {}));
	}
	l.default = c;
}), 226);
