__d("WAWebSearchIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search";
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
					d: "M15 13.8h-.63l-.22-.21a5.2 5.2 0 1 0-.57.57l.23.21v.64l4 4 1.2-1.2-4-4zm-4.8 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchIcon = d;
}), 98);
