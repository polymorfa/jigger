__d("WAWebUserShieldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "user-shield";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20");
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
					d: "M8 11c.97 0 1.8-.34 2.47-1.02A3.37 3.37 0 0 0 11.5 7.5c0-.97-.34-1.8-1.03-2.47A3.37 3.37 0 0 0 8 4c-.97 0-1.8.34-2.47 1.03A3.37 3.37 0 0 0 4.5 7.5c0 .97.34 1.8 1.03 2.48C6.2 10.66 7.03 11 8 11Zm0 6.9a7.2 7.2 0 0 0 2.61-1.49c.76-.67 1.42-1.43 1.99-2.28A10.36 10.36 0 0 0 8 13a9.8 9.8 0 0 0-4.6 1.13c.57.85 1.23 1.6 1.99 2.28A7.2 7.2 0 0 0 8 17.9Zm0 2a1.98 1.98 0 0 1-.63-.1A10.11 10.11 0 0 1 2 15.64C.67 13.6 0 11.44 0 9.1V4.38c0-.42.12-.8.36-1.13.24-.33.56-.57.94-.72l6-2.25a2.07 2.07 0 0 1 1.4 0l6 2.25c.38.15.7.39.94.72.24.33.36.7.36 1.13V9.1c0 2.33-.67 4.51-2 6.54a10.11 10.11 0 0 1-5.68 4.24L8 19.9Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.UserShieldIcon = d;
}), 98);
