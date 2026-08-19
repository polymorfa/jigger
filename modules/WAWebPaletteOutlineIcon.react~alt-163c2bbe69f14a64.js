__d("WAWebPaletteOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "palette-outline";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					d: "M10 20a9.7 9.7 0 0 1-3.88-.79 10.1 10.1 0 0 1-3.18-2.15 10.1 10.1 0 0 1-2.15-3.18A9.7 9.7 0 0 1 0 10q0-2.07.81-3.9a10.1 10.1 0 0 1 2.2-3.17A10.5 10.5 0 0 1 6.25.78 10 10 0 0 1 10.2 0q2 0 3.77.69a9.9 9.9 0 0 1 3.12 1.9 9.1 9.1 0 0 1 2.12 2.87A8.3 8.3 0 0 1 20 9.05q0 2.88-1.75 4.41Q16.5 15 14 15h-1.85q-.23 0-.31.13a.47.47 0 0 0-.09.27q0 .3.38.86t.37 1.29q0 1.25-.69 1.85T10 20m-5.5-9q.65 0 1.07-.42T6 9.5t-.42-1.07T4.5 8t-1.07.42T3 9.5t.42 1.07T4.5 11m3-4q.65 0 1.07-.42T9 5.5t-.42-1.07T7.5 4t-1.07.42T6 5.5t.42 1.07T7.5 7m5 0q.65 0 1.07-.42T14 5.5t-.42-1.07T12.5 4t-1.07.42T11 5.5t.42 1.07T12.5 7m3 4q.65 0 1.07-.42T17 9.5t-.42-1.07T15.5 8t-1.07.42T14 9.5t.42 1.07 1.08.43M10 18q.22 0 .36-.13a.42.42 0 0 0 .14-.32q0-.35-.38-.82t-.37-1.43q0-1.05.72-1.68t1.78-.62H14q1.65 0 2.83-.96Q18 11.08 18 9.05q0-3.02-2.31-5.04Q13.38 2 10.2 2 6.8 2 4.4 4.33T2 10q0 3.33 2.34 5.66T10 18"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PaletteOutlineIcon = d;
}), 98);
