__d("WAWebScissorsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "scissors";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("circle", {
						cx: 6,
						cy: 18,
						r: 3.13,
						stroke: "currentColor",
						strokeWidth: 1.75
					}),
					u.jsx("circle", {
						cx: 6,
						cy: 6,
						r: 3.13,
						stroke: "currentColor",
						strokeWidth: 1.75
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M7.72 14.74a1 1 0 1 0 1.41 1.42l2.8-2.8-1.4-1.42-2.81 2.8Zm5.65-5.65 1.42 1.41 5.9-5.9a1 1 0 0 0-1.4-1.42l-5.92 5.9Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M9.02 7.6A1 1 0 0 0 7.6 9.02l11.76 11.75a1 1 0 1 0 1.41-1.41L9.02 7.6ZM12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ScissorsIcon = d;
}), 98);
