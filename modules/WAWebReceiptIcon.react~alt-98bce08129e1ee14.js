__d("WAWebReceiptIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "receipt";
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
						clipPath: "url(#WAWebReceiptIcon__a)",
						children: u.jsx("path", {
							fill: "currentColor",
							d: "M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5ZM19 19.09H5V4.91h14v14.18ZM6 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
						})
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebReceiptIcon__a",
						children: u.jsx("path", {
							fill: "white",
							d: "M0 0h24v24H0z"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReceiptIcon = d;
}), 98);
