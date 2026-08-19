__d("WAWebPersonRefreshedOutlineThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-refreshed-outline-thin";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 14, "0 0 14 20");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M7 10a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 4 7c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 7 4c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 7 10Zm-6 4.5V14a1.99 1.99 0 0 1 .98-1.62A10.24 10.24 0 0 1 7 11a9.7 9.7 0 0 1 5.02 1.38 2 2 0 0 1 .72.7c.17.3.26.6.26.92v.5c0 .41-.15.77-.44 1.06-.3.3-.65.44-1.06.44h-9c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06Zm1.5 0h9V14a.33.33 0 0 0-.06-.2.42.42 0 0 0-.17-.13 7.81 7.81 0 0 0-2.04-.88 8.53 8.53 0 0 0-6.5.88.66.66 0 0 0-.17.16.27.27 0 0 0-.06.17v.5Zm4.5-6c.42 0 .77-.15 1.06-.44.3-.3.44-.65.44-1.06 0-.42-.15-.77-.44-1.06-.3-.3-.65-.44-1.06-.44-.42 0-.77.15-1.06.44-.3.3-.44.65-.44 1.06 0 .42.15.77.44 1.06.3.3.65.44 1.06.44Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PersonRefreshedOutlineThinIcon = d;
}), 98);
