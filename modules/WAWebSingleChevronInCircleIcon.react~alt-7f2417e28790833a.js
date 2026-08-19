__d("WAWebSingleChevronInCircleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "single-chevron-in-circle";
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
					fillRule: "evenodd",
					d: "M10 1.67a8.34 8.34 0 1 1 0 16.67 8.34 8.34 0 0 1 0-16.67Zm0 1.67a6.66 6.66 0 1 0 0 13.33 6.66 6.66 0 0 0 0-13.33Zm.73 6.66-2.15 2.16a.85.85 0 0 0 0 1.18c.32.32.85.32 1.17 0l2.75-2.75a.83.83 0 0 0 0-1.17L9.76 6.67a.83.83 0 1 0-1.18 1.18L10.73 10Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SingleChevronInCircleIcon = d;
}), 98);
