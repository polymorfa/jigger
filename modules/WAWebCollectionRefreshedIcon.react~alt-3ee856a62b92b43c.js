__d("WAWebCollectionRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "collection-refreshed";
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
					fillRule: "evenodd",
					d: "M6.64 2C5.46 2 4.5 2.9 4.5 4h15c0-1.1-.96-2-2.14-2H6.64ZM5 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V8c0-.55.2-1.02.59-1.41C3.98 6.19 4.45 6 5 6h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h14V8H5v12Zm2-9.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Zm0 5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Zm6.5-5.5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3Zm-.5 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.CollectionRefreshedIcon = d;
}), 98);
