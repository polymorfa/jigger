__d("WAWebIcHeadphonesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-headphones";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-7c0-1.25.24-2.42.71-3.51A9.15 9.15 0 0 1 8.5 3.7 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 3.51.71A9.15 9.15 0 0 1 20.3 8.5 8.7 8.7 0 0 1 21 12v7c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-2c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-4c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h2v-1c0-1.95-.68-3.6-2.04-4.96A6.75 6.75 0 0 0 12 5c-1.95 0-3.6.68-4.96 2.04A6.75 6.75 0 0 0 5 12v1h2c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h2v-4H5v4Zm12 0h2v-4h-2v4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcHeadphonesIcon = d;
}), 98);
