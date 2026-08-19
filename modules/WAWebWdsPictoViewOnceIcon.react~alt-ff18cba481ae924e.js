__d("WAWebWdsPictoViewOnceIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-view-once";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				id: "Layer_1",
				x: "0",
				y: "0",
				version: "1.1",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("style", { children: ".st1{fill:none;stroke:#111b21;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10}" }),
					u.jsx("path", {
						d: "M77.5 44a33.5 33.5 0 1 1-67 0 33.5 33.5 0 0 1 67 0z",
						style: {
							fill: "#25d366",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeMiterlimit: 10
						}
					}),
					u.jsx("path", {
						d: "M43.3 16.5c-14.2.8-25.4 11.3-27.1 23.8-2 14.8 9.9 29.9 27.1 31.3",
						className: "st1"
					}),
					u.jsx("path", {
						d: "M46.4 57.2c1.3 0 2.2-1.1 2.2-2.2V34.4c0-2.2-2.1-4-4.3-3.5l-5.8 1.4c-1.6.3-2.6 1.8-2.6 3.5 0 2.2 2.1 3.8 4.2 3.5l1.8-.3v16c0 1.3 1.1 2.2 2.2 2.2h2.3z",
						style: {
							fill: "none",
							stroke: "#111b21",
							strokeWidth: 1.5,
							strokeMiterlimit: 10
						}
					}),
					u.jsx("circle", {
						cx: 56.6,
						cy: 20.5,
						r: 1.7,
						className: "st1"
					}),
					u.jsx("circle", {
						cx: 66.6,
						cy: 30.8,
						r: 1.7,
						className: "st1"
					}),
					u.jsx("circle", {
						cx: 70.3,
						cy: 44.5,
						r: 1.7,
						className: "st1"
					}),
					u.jsx("circle", {
						cx: 66.6,
						cy: 58.3,
						r: 1.7,
						className: "st1"
					}),
					u.jsx("circle", {
						cx: 57,
						cy: 67.9,
						r: 1.7,
						className: "st1"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoViewOnceIcon = d;
}), 98);
