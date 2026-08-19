__d("WAWebMapPlaceholderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "map-placeholder";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 320, 580, "0 0 580 320");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "none",
					fillRule: "evenodd",
					children: [
						u.jsx("path", {
							fill: "#EAEAEA",
							d: "M0 112h358v208H0z"
						}),
						u.jsx("path", {
							fill: "#FFF1B6",
							fillRule: "nonzero",
							d: "M12.5 541C-148.6 541-281 449.87-281 334s132.4-207 293.5-207S306 218.13 306 334 173.6 541 12.5 541Zm0-32C157.92 509 274 429.1 274 334S157.92 159 12.5 159C-132.92 159-249 238.9-249 334s116.08 175 261.5 175Z"
						}),
						u.jsx("path", {
							fill: "#CBE6A3",
							d: "M0 0h358v80H0z"
						}),
						u.jsx("path", {
							fill: "#8CCEFF",
							d: "M390 0h190v80H390z"
						}),
						u.jsx("path", {
							fill: "#F0E0C9",
							d: "M391 112h190v59H391zm0 91h110v117H391zm143 0h46v117h-46z"
						}),
						u.jsx("path", {
							fill: "#FFF1B6",
							d: "M0 80h580v32H0zm391 91h190v32H391z"
						}),
						u.jsx("path", {
							fill: "#FFF1B6",
							d: "M358 0h33v320h-33zm143 171h33v149h-33z"
						})
					]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MapPlaceholderIcon = d;
}), 98);
