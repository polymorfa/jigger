__d("WAWebAlertComputerIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-computer";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 48, 48, "0 0 48 48");
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
				enableBackground: "new 0 0 48 48",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2zM24 34.14 12.97 19.46a18.25 18.25 0 0 1 11-3.67c4.13 0 7.99 1.38 11.01 3.67L24 34.14zm-.95-5.65h1.98V26.5h-1.98v1.98zm0-3.96h1.98V19.5h-1.98v5.02z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertComputerIcon = d;
}), 98);
