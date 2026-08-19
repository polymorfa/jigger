__d("WAWebMediaSearchPdfButton.react", [
	"fbt",
	"WAWebMediaPanelHeaderTestIds",
	"WDSIconIcSearch.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isDisabled, n = t === void 0 ? !1 : t, o = e.onSearchClick;
		return u.jsx(r("WDSMenuBarItem.react"), {
			testid: r("WAWebMediaPanelHeaderTestIds").SEARCH_PDF_BUTTON.valueOf(),
			icon: r("WDSIconIcSearch.react"),
			title: s._(
				/*BTDS*/
				""
			),
			disabled: n,
			onClick: o
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
