__d("WAWebPttFileIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ptt-file";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 55, 55, "0 0 55 55");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 55 55",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#FA6533",
						d: "M0 0h55v55H0V0z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "M27.1 14.8c1.8 0 3.2 1.5 3.2 3.5v9.5c0 1.9-1.4 3.5-3.2 3.5-1.8 0-3.2-1.5-3.2-3.5v-9.5c.1-2 1.5-3.5 3.2-3.5z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "M27.4 35.1h-.9c-3.1-.3-5.6-2.9-6-6.3v-.3c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7l.1.3c.5 2.5 2.5 4.4 5 4.4 2.4 0 4.5-1.9 4.9-4.4l.1-.4c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7 0 0 0 .1-.1.5-.5 3.3-3.1 5.9-6.3 6.1l-.2.1z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "M28 39.5c0 .4-.3.7-.7.7H27c-.4 0-.7-.3-.7-.7v-4.6c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7v4.6z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PttFileIcon = d;
}), 98);
