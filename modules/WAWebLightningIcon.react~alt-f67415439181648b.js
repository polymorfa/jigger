__d("WAWebLightningIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lightning";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 13 22");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M4.48 22a.7.7 0 0 1-.7-.8l1.1-7.76H.62c-1.08 0-.4-.91-.38-.95L7.13.35a.7.7 0 0 1 1.3.45L7.35 8.57h4.3c.48 0 .75.23.48.8L5.1 21.65a.7.7 0 0 1-.6.35Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LightningIcon = d;
}), 98);
