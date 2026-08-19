__d("WDSIconWdsIcLogoFacebookFill.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-facebook-fill";
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
				d: "M13.27 22.46a10.5 10.5 0 1 0-3.8-.23v-6.98H7.3v-3.21h2.16v-1.38c0-3.58 1.62-5.23 5.13-5.23.66 0 1.8.13 2.28.26v2.9q-.61-.04-1.22-.03c-1.72 0-2.38.65-2.38 2.35v1.13h3.43l-.59 3.21h-2.84z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
