__d("WAWebPencilRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pencil-refreshed";
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
					d: "M5 19h1.4l9.8-9.78-1.42-1.42L5 17.6V19Zm-1 2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-2.43a1.97 1.97 0 0 1 .58-1.4L16.2 3.57a2.07 2.07 0 0 1 2.19-.43c.24.11.46.26.66.46L20.43 5c.2.18.34.4.43.64a2.13 2.13 0 0 1 0 1.51c-.09.25-.23.47-.43.67l-12.6 12.6a1.94 1.94 0 0 1-1.4.58H4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PencilRefreshedIcon = d;
}), 98);
