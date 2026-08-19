__d("WDSIconWdsIcLogoThreads.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-threads";
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
				d: "M16.77 11.3c-.03-2.7-1.47-4.32-3.9-4.32-1.61 0-2.98.75-3.7 1.94l1.58 1.1c.4-.64.96-1.18 2-1.18 1.16 0 1.76.65 1.93 1.87a11 11 0 0 0-1.7-.13c-3.14 0-4.62 1.44-4.62 3.35 0 1.95 1.48 3.09 3.66 3.09 2.39 0 3.81-1.64 4.4-3.66.6.28 1.02.93 1.02 1.9 0 2.62-2.97 4.05-5.5 4.05-3.7 0-6.14-2.48-6.14-6.51 0-4.94 3.22-8.1 7.54-8.1 2.9 0 4.33 1.28 5.3 3.02l1.6-1.14c-1.06-2.25-3.42-3.85-6.97-3.85-5.66 0-9.51 4.07-9.51 10 0 5.4 3.77 8.54 8.26 8.54 3.7 0 7.46-2.2 7.46-5.96 0-1.97-1.11-3.27-2.71-4m-4.82 3.74c-.82 0-1.54-.4-1.54-1.12 0-1.15 1.38-1.5 2.74-1.5.52 0 1.02.04 1.47.14-.32 1.49-1.27 2.48-2.67 2.48"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
