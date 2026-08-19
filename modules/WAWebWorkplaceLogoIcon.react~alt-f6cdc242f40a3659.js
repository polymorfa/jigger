__d("WAWebWorkplaceLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "workplace-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 2500, 2258, "57.298 33.288 725.764 773.407");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "#4526ce",
					d: "M783 373c0-187.67-152.18-339.57-339.58-339.57A378 378 0 0 0 293.23 64.1a386.62 386.62 0 0 0 0 712.09 383.25 383.25 0 0 0 150.48 30.38 387.7 387.7 0 0 0 142.25-27l-29.25-73.82A307.16 307.16 0 0 1 226.5 202.94c58.21-57.92 135.15-90 217.21-90 143.67 0 260.07 116.41 260.07 260.08a259.15 259.15 0 0 1-43.15 143.38L593.05 350c-9.93-24.42-21.86-61-66.72-61s-56.78 36.91-66.44 61l-62.18 153.62-83.47-210.68H226.5L330.42 549c10.51 25.84 22.15 61.05 67.29 61.05s56.5-35.21 67-61.05l61.61-152.18L588.23 549c12.49 31.52 25.83 61.05 67 61.05 29.25 0 47.7-18.74 57.92-31A338 338 0 0 0 783 373"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WorkplaceLogoIcon = d;
}), 98);
