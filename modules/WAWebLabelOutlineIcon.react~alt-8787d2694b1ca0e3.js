__d("WAWebLabelOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "label-outline";
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
					u.jsx("g", {
						clipPath: "url(#WAWebLabelOutlineIcon__a)",
						children: u.jsx("path", {
							fill: "currentColor",
							d: "M17.63 5.84A2 2 0 0 0 16 5L5 5.01A2 2 0 0 0 3 7v10a2 2 0 0 0 2 1.99L16 19a2 2 0 0 0 1.63-.84L22 12l-4.37-6.16ZM16 17H5V7h11l3.55 5L16 17Z"
						})
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebLabelOutlineIcon__a",
						children: u.jsx("path", {
							fill: "white",
							d: "M0 0h24v24H0z"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LabelOutlineIcon = d;
}), 98);
