__d("WDSIconIcSecurity.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-security";
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
				d: "M12 19.9a7.82 7.82 0 0 0 4.05-2.96 9.87 9.87 0 0 0 1.9-4.94H12V4.13L6 6.38v5.17c0 .12.02.27.05.45H12v7.9Zm0 2a1.98 1.98 0 0 1-.63-.1A10.11 10.11 0 0 1 6 17.64a11.7 11.7 0 0 1-2-6.54V6.38c0-.42.12-.8.36-1.13.24-.33.56-.57.94-.72l6-2.25a2.07 2.07 0 0 1 1.4 0l6 2.25c.38.15.7.39.94.72.24.33.36.7.36 1.13v4.72c0 2.33-.67 4.51-2 6.54a10.11 10.11 0 0 1-5.68 4.23c-.1.02-.2.03-.32.03Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
