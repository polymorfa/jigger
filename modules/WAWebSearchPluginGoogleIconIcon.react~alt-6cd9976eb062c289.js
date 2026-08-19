__d("WAWebSearchPluginGoogleIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-plugin-google-icon";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 21, 20, "0 0 20 21");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#4285F4",
						fillRule: "evenodd",
						d: "M20 10.44c0-.73-.07-1.42-.19-2.1h-9.6v3.96h5.49a4.7 4.7 0 0 1-2.05 3.07v2.57h3.3c1.94-1.78 3.05-4.4 3.05-7.5Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "#34A853",
						fillRule: "evenodd",
						d: "M10.2 20.4c2.76 0 5.07-.9 6.76-2.46l-3.31-2.57a6.1 6.1 0 0 1-3.45.98 6.1 6.1 0 0 1-5.71-4.2h-3.4v2.64a10.2 10.2 0 0 0 9.11 5.62Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "#FBBC05",
						fillRule: "evenodd",
						d: "M4.49 12.14a6.11 6.11 0 0 1 0-3.87V5.63h-3.4a10.08 10.08 0 0 0 0 9.15l2.65-2.06.75-.58Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "#EA4335",
						fillRule: "evenodd",
						d: "M10.2 4.06c1.5 0 2.84.52 3.91 1.52l2.92-2.92A9.79 9.79 0 0 0 10.2 0C6.22 0 2.77 2.3 1.1 5.63l3.39 2.64a6.1 6.1 0 0 1 5.71-4.2Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchPluginGoogleIconIcon = d;
}), 98);
