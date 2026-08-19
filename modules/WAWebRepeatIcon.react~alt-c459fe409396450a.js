__d("WAWebRepeatIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "repeat";
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
					u.jsx("mask", {
						id: "WAWebRepeatIcon__a",
						width: 24,
						height: 24,
						x: 0,
						y: 0,
						maskUnits: "userSpaceOnUse",
						style: { maskType: "alpha" },
						children: u.jsx("path", {
							fill: "#D9D9D9",
							d: "M0 0h24v24H0z"
						})
					}),
					u.jsx("g", {
						mask: "url(#WAWebRepeatIcon__a)",
						children: u.jsx("path", {
							fill: "currentColor",
							d: "m7 22-4-4 4-4 1.4 1.45L6.85 17H17v-4h2v6H6.85l1.55 1.55L7 22ZM5 11V5h12.15L15.6 3.45 17 2l4 4-4 4-1.4-1.45L17.15 7H7v4H5Z"
						})
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RepeatIcon = d;
}), 98);
