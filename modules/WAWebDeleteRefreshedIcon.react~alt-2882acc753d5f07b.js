__d("WAWebDeleteRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "delete-refreshed";
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
					d: "M7 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6a1 1 0 0 1 0-2h4v-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V4h4a1 1 0 1 1 0 2v13c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7ZM17 6H7v13h10V6ZM9 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Zm4 0c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v8Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DeleteRefreshedIcon = d;
}), 98);
