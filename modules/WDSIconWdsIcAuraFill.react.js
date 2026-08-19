__d("WDSIconWdsIcAuraFill.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-aura-fill";
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
				d: "M5.89 4.25a51 51 0 0 1 12.21 0c.47.1.94.26 1.25.65l.2.31 1.88 3.73c.4.64.2 1.61-.25 2.17l-7.66 9.15q-.61.7-1.52.73c-.6 0-1.12-.3-1.52-.73l-7.65-9.15c-.46-.55-.65-1.53-.25-2.17L4.45 5.2l.2-.31a2 2 0 0 1 1.24-.65m6.55 3.04a.47.47 0 0 0-.88 0l-.84 1.98-2.15.17c-.42.03-.63.57-.29.84l1.64 1.43-.48 2.1c-.12.4.39.74.72.5L12 13.2l1.84 1.1c.33.24.84-.1.72-.5l-.48-2.1 1.64-1.43c.34-.27.13-.81-.29-.84l-2.15-.17z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
