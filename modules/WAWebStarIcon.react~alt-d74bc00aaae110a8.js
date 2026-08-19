__d("WAWebStarIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "star";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 15, 16, "0 0 16 15");
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
				enableBackground: "new 0 0 16 15",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StarIcon = d;
}), 98);
