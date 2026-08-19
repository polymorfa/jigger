__d("WAWebDevIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "dev";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
					d: "M4 15a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 1 12c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 4 9V7c0-.55.2-1.02.59-1.41C4.98 5.19 5.45 5 6 5h3c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 12 2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12h3c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 20 15v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-4Zm5-2c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 9 10c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Zm6 0c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 15 10c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Zm-6 4h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 15H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 16c0 .28.1.52.29.71.19.2.43.29.71.29Zm-3 2h12V7H6v12Z",
					opacity: .9
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DevIcon = d;
}), 98);
