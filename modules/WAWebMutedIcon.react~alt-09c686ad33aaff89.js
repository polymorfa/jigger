__d("WAWebMutedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "muted";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 16, "0 0 16 18");
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
				enableBackground: "new 0 0 16 18",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M11.52 9.2c0-1.4-.78-2.56-1.94-3.1v1.7l1.94 1.95v-.54zm1.95 0c0 .7-.16 1.4-.4 2.03l1.17 1.16c.55-.93.78-2.1.78-3.26a7.01 7.01 0 0 0-5.44-6.85v1.64a5.6 5.6 0 0 1 3.88 5.29zm-11.44-7L1.02 3.23l3.66 3.65H1.02v4.67h3.11l3.89 3.89v-5.21l3.34 3.34c-.54.4-1.09.7-1.79.93v1.64a6.64 6.64 0 0 0 2.88-1.4l1.56 1.55 1.01-1-7-7L2.03 2.2zm5.99.78L6.39 4.62l1.63 1.63V2.98z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MutedIcon = d;
}), 98);
