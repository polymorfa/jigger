__d("WAWebMicIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mic";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 12, "0 0 12 20");
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
					d: "M6 12a2.4 2.4 0 0 1-1.77-.73A2.41 2.41 0 0 1 3.5 9.5v-5c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 6 2c.7 0 1.28.24 1.77.73S8.5 3.8 8.5 4.5v5c0 .7-.24 1.28-.73 1.77S6.7 12 6 12Zm-.75 5.25v-2.31a5.23 5.23 0 0 1-3.14-1.53 5.34 5.34 0 0 1-1.55-3.14.67.67 0 0 1 .69-.77c.2 0 .39.07.53.22.15.14.24.32.28.53.18.96.65 1.74 1.39 2.34.74.6 1.59.91 2.54.91.97 0 1.82-.3 2.56-.92a3.88 3.88 0 0 0 1.39-2.33c.04-.2.13-.39.27-.53a.71.71 0 0 1 .54-.22c.2 0 .38.08.52.23.14.15.2.33.17.54a5.34 5.34 0 0 1-1.55 3.14 5.23 5.23 0 0 1-3.14 1.53v2.31a.7.7 0 0 1-.21.53A.72.72 0 0 1 6 18a.73.73 0 0 1-.53-.22.72.72 0 0 1-.22-.53Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MicIcon = d;
}), 98);
