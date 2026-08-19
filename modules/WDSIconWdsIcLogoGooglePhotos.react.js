__d("WDSIconWdsIcLogoGooglePhotos.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-google-photos";
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
				d: "M7 6.55a5 5 0 0 1 5 5V12H2.45a.45.45 0 0 1-.45-.45 5 5 0 0 1 5-5M17.45 7a5 5 0 0 1-5 5H12V2.45c0-.25.2-.45.45-.45a5 5 0 0 1 5 5M17 17.45a5 5 0 0 1-5-5V12h9.55c.25 0 .45.2.45.45a5 5 0 0 1-5 5M6.55 17a5 5 0 0 1 5-5H12v9.55c0 .25-.2.45-.45.45a5 5 0 0 1-5-5"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
