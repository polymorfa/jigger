__d("WAWebDefaultPersonIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "default-person";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 158, 158, "0 0 158 158");
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
					d: "M79 75.5c2.6 0 5.2-.3 7.7-.7 1.2-.2 2.4-.5 3.6-.9 1.8-.5 3.5-1.2 5.1-2 2.2-1 4.2-2.3 6.1-3.7 2.9-2.1 5.4-4.6 7.5-7.5.7-1 1.4-1.9 2-3 .9-1.5 1.7-3.2 2.4-4.8.5-1.1.9-2.3 1.2-3.5.2-.6.3-1.2.5-1.8a40.46 40.46 0 0 0 1.1-9.5 40.46 40.46 0 0 0-1.1-9.5c-.1-.6-.3-1.2-.5-1.8-.4-1.2-.8-2.3-1.2-3.5-.7-1.7-1.5-3.3-2.4-4.8-.6-1-1.3-2-2-3-2.1-2.9-4.6-5.4-7.5-7.5-1.9-1.4-4-2.6-6.1-3.7-1.6-.8-3.3-1.4-5.1-2A38.7 38.7 0 0 0 79 .7C57.8.7 41.7 16.9 41.7 38c0 21.3 16.1 37.5 37.3 37.5Zm69 48.4c-.4-.7-.9-1.5-1.4-2.3-.6-.9-1.3-1.9-2.1-3-.8-1-1.6-2.2-2.6-3.3-1-1.1-2-2.3-3.2-3.5a80.9 80.9 0 0 0-5.9-5.5 75.69 75.69 0 0 0-16.2-10.1c-.1 0-.1-.1-.2-.1-9.8-4.4-22.1-7.5-37.4-7.5-15.3 0-27.6 3.1-37.4 7.5-.3.2-.7.3-1 .5-1.4.7-2.8 1.4-4.1 2.1l-2.1 1.2c-3.4 2-6.5 4.2-9.1 6.4a63.6 63.6 0 0 0-5.9 5.5c-1.2 1.2-2.2 2.4-3.2 3.5s-1.8 2.2-2.6 3.3c-.8 1-1.5 2-2.1 3-.6.8-1 1.6-1.4 2.3 0 .1-.1.1-.1.2v.1C.4 139.2.4 157.1.4 157.1H158s-.3-18.1-10-33.2Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DefaultPersonIcon = d;
}), 98);
