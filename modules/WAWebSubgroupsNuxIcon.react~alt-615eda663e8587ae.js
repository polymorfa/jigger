__d("WAWebSubgroupsNuxIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "subgroups-nux";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 27, 27, "0 0 27 27");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					stroke: "currentColor",
					children: [
						u.jsx("rect", {
							width: 17,
							height: 17,
							fill: "#D1D7DB",
							rx: 8.5,
							transform: "matrix(-1 0 0 1 18 4)"
						}),
						u.jsx("rect", {
							width: 17,
							height: 17,
							fill: "#AEBAC1",
							rx: 8.5,
							transform: "matrix(-1 0 0 1 22 4)"
						}),
						u.jsx("rect", {
							width: 17,
							height: 17,
							fill: "#8696A0",
							rx: 8.5,
							transform: "matrix(-1 0 0 1 26 4)"
						})
					]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SubgroupsNuxIcon = d;
}), 98);
