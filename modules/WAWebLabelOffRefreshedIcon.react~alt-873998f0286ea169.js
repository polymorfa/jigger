__d("WAWebLabelOffRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "label-off-refreshed";
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
					d: "M18.45 15.6 17 14.15 18.55 12 15 7H9.85l-2-2H15a1.95 1.95 0 0 1 1.65.85l3.53 5a1.94 1.94 0 0 1 0 2.3l-1.73 2.45ZM5 19c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7a1.87 1.87 0 0 1 .25-.95L2.1 4.9a.95.95 0 0 1-.27-.7c0-.28.09-.52.27-.7a.95.95 0 0 1 .7-.28c.28 0 .52.1.7.28l17 17c.18.18.28.42.28.7a.95.95 0 0 1-.98.98.95.95 0 0 1-.7-.28l-3.15-3.15A1.87 1.87 0 0 1 15 19H5Zm9.2-2L5 7.8V17h9.2Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LabelOffRefreshedIcon = d;
}), 98);
