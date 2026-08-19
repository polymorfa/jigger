__d("WAWebWorldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "world";
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
					d: "M12 22a9.7 9.7 0 0 1-3.88-.79 10.1 10.1 0 0 1-3.18-2.15 10.1 10.1 0 0 1-2.15-3.18A9.7 9.7 0 0 1 2 12q0-2.08.79-3.89a10.2 10.2 0 0 1 2.15-3.17 10.1 10.1 0 0 1 3.19-2.15A9.7 9.7 0 0 1 12 2q2.08 0 3.89.79a10.2 10.2 0 0 1 3.17 2.15 10.2 10.2 0 0 1 2.15 3.17A9.65 9.65 0 0 1 22 12a9.7 9.7 0 0 1-.79 3.88 10.1 10.1 0 0 1-2.15 3.18 10.2 10.2 0 0 1-3.17 2.15A9.65 9.65 0 0 1 12 22m0-2.05q.65-.9 1.13-1.88T13.9 16h-3.8q.3 1.1.78 2.08T12 19.95m-2.6-.4q-.45-.82-.79-1.71A15 15 0 0 1 8.05 16H5.1a8.3 8.3 0 0 0 1.81 2.17 7.2 7.2 0 0 0 2.49 1.38m5.2 0a7.2 7.2 0 0 0 2.49-1.38A8.3 8.3 0 0 0 18.9 16h-2.95q-.23.95-.56 1.84a14 14 0 0 1-.79 1.71M4.25 14h3.4a13 13 0 0 1-.15-2 13 13 0 0 1 .15-2h-3.4A8 8 0 0 0 4 12a8 8 0 0 0 .25 2m5.4 0h4.7q.08-.5.11-.99.04-.48.04-1.01a13 13 0 0 0-.15-2h-4.7q-.07.5-.11.99-.04.48-.04 1.01a13 13 0 0 0 .15 2m6.7 0h3.4a8 8 0 0 0 .25-2 8 8 0 0 0-.25-2h-3.4q.07.5.11.99.04.48.04 1.01a13 13 0 0 1-.15 2m-.4-6h2.95a8.3 8.3 0 0 0-1.81-2.17 7.2 7.2 0 0 0-2.49-1.38q.45.82.79 1.71.33.89.56 1.84M10.1 8h3.8q-.3-1.1-.78-2.08A12.7 12.7 0 0 0 12 4.05q-.65.9-1.13 1.88T10.1 8m-5 0h2.95q.22-.95.56-1.84.34-.89.79-1.71Q8 4.9 6.91 5.83A8.3 8.3 0 0 0 5.1 8"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WorldIcon = d;
}), 98);
