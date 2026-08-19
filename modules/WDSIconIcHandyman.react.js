__d("WDSIconIcHandyman.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-handyman";
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
				d: "M18.85 21.98a1.1 1.1 0 0 1-.38-.07.88.88 0 0 1-.32-.21l-5.1-5.1a.88.88 0 0 1-.21-.33 1.1 1.1 0 0 1-.06-.37c0-.13.02-.26.06-.38a.88.88 0 0 1 .21-.32l2.13-2.13c.1-.1.2-.17.32-.2a1.1 1.1 0 0 1 .75 0c.12.03.23.1.32.2l5.1 5.1c.1.1.18.21.22.33a1.16 1.16 0 0 1 0 .75.88.88 0 0 1-.21.32l-2.13 2.13a.8.8 0 0 1-.32.21 1.1 1.1 0 0 1-.38.07Zm0-2.38.72-.73-3.67-3.67-.72.73 3.67 3.67ZM5.12 22a1.03 1.03 0 0 1-.72-.3l-2.1-2.1a1 1 0 0 1-.3-.73.94.94 0 0 1 .3-.7l5.3-5.3h2.13l.84-.84L6.45 7.9H5.03L2 4.87l2.83-2.82 3.02 3.03V6.5l4.13 4.13 2.9-2.9-1.08-1.08 1.4-1.4h-2.82l-.7-.7L15.21 1l.7.7v2.83l1.4-1.4 3.55 3.54a2.98 2.98 0 0 1 0 4.23l-2.12-2.13-1.4 1.4-1.05-1.04-5.18 5.17v2.1l-5.3 5.3a1 1 0 0 1-.32.23.94.94 0 0 1-.38.07Zm0-2.4 4.25-4.25v-.72h-.72L4.4 18.87l.72.73Zm0 0-.72-.73.38.36.34.37Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
