__d("MAWAbPropsClient", ["WAAbPropsToUI"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { contents: o("WAAbPropsToUI").prepareAbPropsForUI() };
	function s(t) {
		e.contents = t;
	}
	function u() {
		return e.contents;
	}
	l.rewrite = s, l.getAbProps = u;
}), 98);
