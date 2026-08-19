__d("WDSIconIcGoogleLensIcon.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-google-lens-icon";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-9 .9A4.1 4.1 0 0 0 7.1 21H11a1 1 0 0 0 0-2l-4-.01c-1.1 0-1.99-1.03-1.99-2.24V15.5a1 1 0 1 0-2 0v1.4Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M9.7 3.4a1 1 0 0 1 .8-.4h3a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h.9A4.1 4.1 0 0 1 21 9.1V12a1 1 0 1 1-2 0V9.25C19 8.04 18.1 7 17 7H7C5.9 7 5 8.04 5 9.25v1.25a1 1 0 1 1-2 0V9.1A4.1 4.1 0 0 1 7.1 5H8a1 1 0 0 0 .8-.4l.9-1.2Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
