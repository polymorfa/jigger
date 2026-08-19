__d("WAWebAssignmentIndIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "assignment-ind";
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
				fill: "currentColor",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "none",
						d: "M0 0h24v24H0V0z"
					}),
					u.jsx("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AssignmentIndIcon = d;
}), 98);
