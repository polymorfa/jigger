__d("WDSIconIcSell.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sell";
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
				d: "M14.25 21.4c-.38.38-.86.58-1.43.58-.56 0-1.04-.2-1.42-.58l-8.8-8.8a2.08 2.08 0 0 1-.6-1.45V4c0-.55.2-1.02.59-1.41C2.98 2.19 3.45 2 4 2h7.15a1.99 1.99 0 0 1 1.45.6l8.8 8.83c.38.38.58.85.58 1.4 0 .57-.2 1.04-.58 1.42l-7.15 7.15ZM12.82 20l7.16-7.15L11.15 4H4v7.15L12.82 20ZM6.5 8c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 6.5 5c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
