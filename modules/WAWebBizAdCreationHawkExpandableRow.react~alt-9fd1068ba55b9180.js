__d("WAWebBizAdCreationHawkExpandableRow.react", [
	"fbt",
	"WAWebBizAdCreationHawkRowStyles",
	"WAWebBizAdCreationHawkUtils",
	"WAWebFlex.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.expandedJsonFields, a = t.fieldKeyPrefix, i = t.isLast, l = t.label, u = t.toggleJsonField, d = t.value, m = a + "_" + l, p = o("WAWebBizAdCreationHawkUtils").isJsonValue(d), _ = o("WAWebBizAdCreationHawkUtils").formatValue(d), f = n[m] || !1, g = p && !f ? o("WAWebBizAdCreationHawkUtils").getTruncatedJson(_) : _;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(i ? r("WAWebBizAdCreationHawkRowStyles").lastRow : r("WAWebBizAdCreationHawkRowStyles").row), { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			justify: "all",
			children: [c.jsx("div", babelHelpers.extends({}, e.props(r("WAWebBizAdCreationHawkRowStyles").label), { children: l })), c.jsxs("div", {
				className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g x1hx0egp",
				children: [c.jsx("div", babelHelpers.extends({}, e.props(p ? r("WAWebBizAdCreationHawkRowStyles").valueJson : r("WAWebBizAdCreationHawkRowStyles").value), { children: g })), p && _.split("\n").length > 2 ? c.jsx("div", {
					className: "x1ph7ams x1ypdohk x1pg5gke x1bvjpef",
					onClick: function() {
						return u(m);
					},
					onKeyDown: function(t) {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), u(m));
					},
					role: "button",
					tabIndex: 0,
					children: f ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				}) : null]
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
