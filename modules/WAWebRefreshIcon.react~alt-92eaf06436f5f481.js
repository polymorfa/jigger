__d("WAWebRefreshIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "refresh";
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
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 24 24",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M17.6 6.4A7.62 7.62 0 0 0 12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 6.8-2.6 7.7-6h-2.1A5.96 5.96 0 0 1 6 12c0-3.3 2.7-6 6-6 1.7 0 3.1.7 4.2 1.8L13 11h7V4l-2.4 2.4z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RefreshIcon = d;
}), 98);
