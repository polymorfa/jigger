__d("WAWebTimerIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "timer";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 19, 18, "0 0 18 19");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M8 1a1 1 0 0 1 1-1 8.99 8.99 0 0 1 9 9.29 9.1 9.1 0 0 1-8.79 8.7A9 9 0 0 1 2.86 2.45c.4-.37 1.02-.36 1.4.02L9.7 7.89a1 1 0 1 1-1.4 1.4l-4.73-4.7A7 7 0 0 0 9.12 16 7.1 7.1 0 0 0 16 8.74a7 7 0 0 0-6-6.66V3a1 1 0 0 1-1 1 1 1 0 0 1-1-1V1ZM3 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TimerIcon = d;
}), 98);
