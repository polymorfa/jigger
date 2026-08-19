__d("WDSIconWdsIcLogoSpotify.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-spotify";
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
				d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.59 14.42a.6.6 0 0 1-.86.2q-3.54-2.14-8.79-.95a.62.62 0 0 1-.27-1.22c3.8-.87 7.07-.5 9.7 1.12.3.18.4.56.22.85m1.22-2.72a.8.8 0 0 1-1.07.26 13.1 13.1 0 0 0-9.97-1.17.78.78 0 0 1-.45-1.49c3.63-1.1 8.15-.57 11.23 1.33.37.22.49.7.26 1.07m.1-2.84C14.7 8.95 9.37 8.77 6.3 9.71a.94.94 0 1 1-.55-1.8c3.54-1.06 9.4-.86 13.12 1.35a.93.93 0 1 1-.96 1.6"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
