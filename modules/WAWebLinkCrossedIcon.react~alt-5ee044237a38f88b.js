__d("WAWebLinkCrossedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "link-crossed";
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
					d: "M17 7h-4v1.9h4a3.09 3.09 0 0 1 .79 6.08l1.46 1.46A4.97 4.97 0 0 0 17 7Zm-1 4h-2.19l2 2H16v-2ZM2 4.27l3.11 3.11A5 5 0 0 0 7 17h4v-1.9H7a3.1 3.1 0 0 1-.34-6.17L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LinkCrossedIcon = d;
}), 98);
