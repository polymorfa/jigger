__d("WAWebConnectionIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "connection";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32");
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
				enableBackground: "new 0 0 32 32",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M15.95 27.37 1.81 8.5a23.44 23.44 0 0 1 14.14-4.7c5.3 0 10.25 1.77 14.14 4.71L15.95 27.37zm-1.21-7.92h2.54V16.9h-2.54v2.55zm0-5.1h2.54V7.92h-2.54v6.45z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ConnectionIcon = d;
}), 98);
