__d("WDSIconWdsIcLogoFacebook.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-facebook";
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
				d: "M12 1.5a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21m0 1.83a8.67 8.67 0 0 0-2.32 17.03v-5.43H7.7V12h1.98v-1.26c0-3.26 1.48-4.78 4.68-4.78.6 0 1.65.12 2.08.24v2.66a12 12 0 0 0-1.1-.04c-1.58 0-2.18.6-2.18 2.15V12h3.13l-.54 2.93h-2.59v5.67A8.67 8.67 0 0 0 12 3.33"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
