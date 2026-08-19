__d("WDSIconIcAlternateEmail.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-alternate-email";
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
				d: "M12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9v1.45c0 .98-.34 1.82-1.01 2.51-.68.7-1.5 1.04-2.49 1.04a3.77 3.77 0 0 1-2.95-1.45A4.81 4.81 0 0 1 12 17a4.82 4.82 0 0 1-3.54-1.46A4.82 4.82 0 0 1 7 12c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 12 7c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 17 12v1.45c0 .43.14.8.43 1.1.28.3.64.45 1.07.45.43 0 .8-.15 1.07-.45.29-.3.43-.67.43-1.1V12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 22h-4Zm0-7c.83 0 1.54-.3 2.13-.88.58-.58.87-1.29.87-2.12 0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 9c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 12c0 .83.3 1.54.88 2.13.58.58 1.29.87 2.12.87Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
