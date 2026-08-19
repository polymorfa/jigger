__d("WAWebInfoFilledGreenCircleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "info-filled-green-circle";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 49, 48, "0 0 48 49");
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
					u.jsx("path", {
						fill: "#00A884",
						d: "M46 24.5a22 22 0 1 1-44 0 22 22 0 0 1 44 0Z"
					}),
					u.jsx("path", {
						fill: "white",
						fillRule: "evenodd",
						d: "M24 16.17a8.34 8.34 0 1 0 0 16.67 8.34 8.34 0 0 0 0-16.67Zm0 12.5a.84.84 0 0 1-.83-.84V24.5a.83.83 0 1 1 1.66 0v3.33c0 .46-.37.84-.83.84ZM23.17 22h1.66v-1.67h-1.66V22Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.InfoFilledGreenCircleIcon = d;
}), 98);
