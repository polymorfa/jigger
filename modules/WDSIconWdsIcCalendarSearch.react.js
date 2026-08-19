__d("WDSIconWdsIcCalendarSearch.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-calendar-search";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				stroke: "currentColor",
				d: "M16.5 12.5q1.67 0 2.83 1.17a3.8 3.8 0 0 1 1 3.95q-.2.55-.46 1.03l-.2.33.28.27 2.5 2.5q.13.12.13.35t-.13.35a.5.5 0 0 1-.35.13.5.5 0 0 1-.35-.13l-2.5-2.5-.27-.27-.33.19q-.48.27-1.03.46a3.84 3.84 0 0 1-3.95-1 3.8 3.8 0 0 1-1.17-2.83q0-1.67 1.17-2.83a3.8 3.8 0 0 1 2.83-1.17ZM15 2.5q.23 0 .36.14.14.14.14.36v1.5H17q.62 0 1.06.44T18.5 6v4.01q0 .23-.14.36-.14.15-.36.14a.5.5 0 0 1-.36-.14.5.5 0 0 1-.14-.36V9.5h-13v9h5.9q.22 0 .35.14.14.14.14.36 0 .23-.14.36-.13.15-.36.14H5q-.62 0-1.06-.44T3.5 18V6q0-.62.44-1.06T5 4.5h1.5V3q0-.23.14-.36.13-.15.36-.14t.36.14.14.36v1.5h7V3q0-.23.14-.36.13-.15.36-.14Zm1.5 11q-1.25 0-2.13.87-.87.88-.87 2.13t.87 2.13q.88.87 2.13.87t2.13-.87q.87-.88.87-2.13t-.87-2.13a3 3 0 0 0-2.13-.87Zm-12-5h13v-3h-13z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
