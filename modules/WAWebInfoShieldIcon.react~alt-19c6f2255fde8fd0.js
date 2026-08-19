__d("WAWebInfoShieldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "info-shield";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 12, "0 0 12 16");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "currentColor",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", { d: "M5.25 11.75h1.5v-4.5h-1.5v4.5Zm.75-6c.21 0 .4-.07.53-.22A.73.73 0 0 0 6.75 5c0-.21-.07-.4-.22-.53A.73.73 0 0 0 6 4.25c-.21 0-.4.07-.53.22a.73.73 0 0 0-.22.53c0 .21.07.4.22.53a.7.7 0 0 0 .53.22Zm0 9.75a7.47 7.47 0 0 1-4.3-3A8.61 8.61 0 0 1 0 7.34V2.75L6 .5l6 2.25v4.58c0 1.9-.57 3.62-1.7 5.18A7.47 7.47 0 0 1 6 15.5Zm0-1.57a6.1 6.1 0 0 0 3.22-2.48 7.12 7.12 0 0 0 1.28-4.12V3.78L6 2.1 1.5 3.8v3.54c0 1.5.43 2.88 1.27 4.12A6.1 6.1 0 0 0 6 13.93Z" })]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.InfoShieldIcon = d;
}), 98);
