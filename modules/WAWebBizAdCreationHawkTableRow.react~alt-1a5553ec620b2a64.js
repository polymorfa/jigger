__d("WAWebBizAdCreationHawkTableRow.react", [
	"WAWebBizAdCreationHawkRowStyles",
	"WAWebBizAdCreationHawkUtils",
	"WAWebFlex.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.isLast, a = t.label, i = t.value;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n ? r("WAWebBizAdCreationHawkRowStyles").lastRow : r("WAWebBizAdCreationHawkRowStyles").row), { children: u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			justify: "all",
			children: [u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebBizAdCreationHawkRowStyles").label), { children: a })), u.jsx("div", babelHelpers.extends({}, e.props(o("WAWebBizAdCreationHawkUtils").isJsonValue(i) ? r("WAWebBizAdCreationHawkRowStyles").valueJson : r("WAWebBizAdCreationHawkRowStyles").value), { children: o("WAWebBizAdCreationHawkUtils").formatValue(i) }))]
		}) }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
