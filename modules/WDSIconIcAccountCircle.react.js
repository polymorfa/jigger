__d("WDSIconIcAccountCircle.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-account-circle";
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
				d: "M5.85 17.1c.85-.65 1.8-1.16 2.85-1.54A9.74 9.74 0 0 1 12 15c1.15 0 2.25.19 3.3.56 1.05.38 2 .89 2.85 1.54A7.73 7.73 0 0 0 20 12a7.7 7.7 0 0 0-2.34-5.66A7.71 7.71 0 0 0 12 4a7.7 7.7 0 0 0-5.66 2.34A7.71 7.71 0 0 0 4 12a7.84 7.84 0 0 0 1.85 5.1ZM12 13c-.98 0-1.81-.34-2.49-1.01A3.38 3.38 0 0 1 8.5 9.5c0-.98.34-1.81 1.01-2.49A3.38 3.38 0 0 1 12 6c.98 0 1.81.34 2.49 1.01A3.4 3.4 0 0 1 15.5 9.5c0 .98-.34 1.81-1.01 2.49A3.38 3.38 0 0 1 12 13Zm0 9a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2a7.93 7.93 0 0 0 4.65-1.5A7.53 7.53 0 0 0 12 17a7.93 7.93 0 0 0-4.65 1.5A7.53 7.53 0 0 0 12 20Zm0-9a1.46 1.46 0 0 0 1.5-1.5A1.46 1.46 0 0 0 12 8a1.46 1.46 0 0 0-1.5 1.5A1.46 1.46 0 0 0 12 11Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
