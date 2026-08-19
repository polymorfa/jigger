__d("WAWebLaunchIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "launch";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 19, "0 0 19 18");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m14 5.41-4.3 4.3a1 1 0 1 1-1.4-1.42L12.58 4H10a1 1 0 1 1 0-2h4a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V5.41ZM14 12a1 1 0 0 1 2 0v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LaunchIcon = d;
}), 98);
