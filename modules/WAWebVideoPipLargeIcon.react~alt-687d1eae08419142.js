__d("WAWebVideoPipLargeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-pip-large";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 37, "0 0 37 28");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M33.84 12H22.16c-1.2 0-2.16-.97-2.16-2.16V3.16c0-1.2.97-2.16 2.16-2.16h11.68C35.03 1 36 1.97 36 3.16v6.68c0 1.2-.97 2.16-2.16 2.16Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M17.57 5v2H4.16C3.52 7 3 7.52 3 8.16l.01 15.67c0 .64.52 1.16 1.16 1.16h23.68c.64 0 1.16-.52 1.16-1.16l-.01-9.5 2-.01.01 9.51A3.16 3.16 0 0 1 27.85 27H4.17a3.16 3.16 0 0 1-3.16-3.16L1 8.16A3.16 3.16 0 0 1 4.16 5h13.4Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.VideoPipLargeIcon = d;
}), 98);
