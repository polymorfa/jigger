__d("WAWebStarRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "star-refreshed";
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
					d: "M12 5.56 10.45 9.2c-.18.4-.56.69-1 .72l-4 .35 3.02 2.6c.33.29.48.74.38 1.18l-.9 3.87 3.43-2.06a1.2 1.2 0 0 1 1.24 0l3.43 2.06-.9-3.87c-.1-.44.05-.89.38-1.18l3.02-2.6-4-.35a1.2 1.2 0 0 1-1-.72L12 5.56Zm-1.1-2.52a1.2 1.2 0 0 1 2.2 0l2.1 4.94 5.41.47a1.2 1.2 0 0 1 .68 2.1l-4.08 3.53 1.21 5.23a1.2 1.2 0 0 1-1.78 1.3L12 17.84l-4.64 2.79a1.2 1.2 0 0 1-1.78-1.3l1.21-5.24-4.08-3.53a1.2 1.2 0 0 1 .68-2.1l5.4-.47 2.1-4.94Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StarRefreshedIcon = d;
}), 98);
