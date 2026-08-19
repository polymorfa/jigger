__d("WAWebSearchUnreadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-unread";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M19.72 11.16v4.18A1.7 1.7 0 0 1 18 17H7.72A1.7 1.7 0 0 1 6 15.34V10.5L3.4 6.74c-.27-.4-.1-.74.4-.74h9.81a4.51 4.51 0 0 0 6.1 5.16Z"
					}),
					u.jsx("path", {
						fill: "#727475",
						fillOpacity: .4,
						d: "M18 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchUnreadIcon = d;
}), 98);
