__d("WAWebLocationRefreshedOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "location-refreshed-outline";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 15, "0 0 15 20");
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
					d: "M7.5 16.02a23.14 23.14 0 0 0 3.74-4.1 6.22 6.22 0 0 0 1.26-3.36 4.93 4.93 0 0 0-5-5.06 4.93 4.93 0 0 0-5 5.06c0 .99.42 2.1 1.26 3.36a23.13 23.13 0 0 0 3.74 4.1Zm0 1.5c-.18 0-.35-.03-.51-.1a1.75 1.75 0 0 1-.47-.27 34.82 34.82 0 0 1-1.8-1.71 19.44 19.44 0 0 1-1.8-2.1 12.38 12.38 0 0 1-1.38-2.35A6.4 6.4 0 0 1 7.5 2a6.39 6.39 0 0 1 5.95 9c-.37.82-.83 1.6-1.38 2.35a17.9 17.9 0 0 1-1.79 2.1c-.64.64-1.25 1.21-1.8 1.7-.15.12-.31.21-.47.28-.16.06-.33.1-.51.1Zm0-7.52c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 7.5 7c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LocationRefreshedOutlineIcon = d;
}), 98);
