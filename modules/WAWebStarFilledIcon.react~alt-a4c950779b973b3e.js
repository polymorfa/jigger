__d("WAWebStarFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "star-filled";
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
					d: "m6.1 15.1-4.9-5a.74.74 0 0 1-.03-.98.69.69 0 0 1 .42-.27l6.76-1.02 3.04-6.44a.64.64 0 0 1 .25-.28A.64.64 0 0 1 12 1c.12 0 .24.04.36.11.11.07.2.16.25.28l3.04 6.44 6.76 1.02a.7.7 0 0 1 .42.25c.11.14.17.3.17.47a.7.7 0 0 1-.2.52l-4.9 5 1.15 7.06.01.13a.7.7 0 0 1-.2.5.65.65 0 0 1-.49.22.65.65 0 0 1-.32-.08L12 19.58l-6.05 3.34c-.1.05-.2.08-.32.08a.65.65 0 0 1-.49-.21.71.71 0 0 1-.19-.64L6.1 15.1Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StarFilledIcon = d;
}), 98);
