__d("WAWebThumbsDownIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "thumbs-down";
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
					d: "M14.1 4.2H6.31c-.7 0-1.3.43-1.56 1.04l-2.59 6.13c-.08.17-.17.34-.17.6v1.73c0 .95.78 1.73 1.73 1.73h5.44L8.3 19.4v.26c0 .34.18.69.35.95l.95.86 5.7-5.7c.34-.34.52-.77.52-1.2V5.92c0-.95-.78-1.73-1.73-1.73zm3.45 0v10.36H21V4.2h-3.45z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ThumbsDownIcon = d;
}), 98);
