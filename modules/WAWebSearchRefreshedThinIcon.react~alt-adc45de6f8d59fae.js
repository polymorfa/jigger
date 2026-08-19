__d("WAWebSearchRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-refreshed-thin";
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
					d: "M4.37 4.37c1-1 2.2-1.5 3.63-1.5 1.42 0 2.64.5 3.63 1.5 1 1 1.5 2.2 1.5 3.63a4.9 4.9 0 0 1-.94 2.94l4.38 4.38c.18.18.27.38.27.62 0 .23-.1.44-.27.61a.86.86 0 0 1-1.25 0l-4.38-4.36a4.91 4.91 0 0 1-2.94.94c-1.42 0-2.64-.5-3.63-1.5-1-1-1.5-2.2-1.5-3.63 0-1.42.5-2.64 1.5-3.63ZM8 4.63c-.94 0-1.73.33-2.39.98A3.25 3.25 0 0 0 4.63 8c0 .94.33 1.73.98 2.39.66.65 1.45.98 2.39.98.94 0 1.73-.33 2.39-.98.65-.66.98-1.45.98-2.39 0-.94-.33-1.73-.98-2.39A3.25 3.25 0 0 0 8 4.63Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchRefreshedThinIcon = d;
}), 98);
