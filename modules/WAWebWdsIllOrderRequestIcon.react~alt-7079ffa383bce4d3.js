__d("WAWebWdsIllOrderRequestIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-order-request";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 120, 180, "0 0 180 120");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				id: "Layer_1",
				x: "0px",
				y: "0px",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M107.4 74.2H155v24.5c0 11.2-9.1 20.3-20.3 20.3h-27.2l-.1-44.8h0z"
					}),
					u.jsx("path", {
						fill: "#E6FFDA",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M114.6 1c-4.5 0-4.5 4.3-9 4.3s-4.5-4.3-9-4.3-4.5 4.3-8.9 4.3c-4.5 0-4.5-4.3-9-4.3s-4.5 4.3-8.9 4.3-4.5-4.3-9-4.3-4.5 4.3-9 4.3S47.4 1 42.9 1s-4.5 4.3-9 4.3-4.5-4.3-9-4.3v97.4c0 11.3 6.9 20.6 18.2 20.6h89.6c-11.3 0-18.2-9.2-18.2-20.6l.1-97.4h0z"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M46 77h44M46 99h44M46 34.4h44m-44 22h44"
					}),
					u.jsx("path", {
						fill: "#FCF5EB",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "m137.9 60.4-41.4.6c-1.1 0-1.9-1.3-1.3-2.2l3.9-6.3-.2-14.7c-.1-9.5 7.5-17.3 17-17.5l21.5-.3c9.5-.1 17.3 7.5 17.5 17l.1 5.9c0 9.6-7.6 17.4-17.1 17.5h0z"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M112.1 29.6h2.5c1.4 0 2.7 1 2.9 2.5l2 11.9c.2 1.3 1.3 2.2 2.7 2.2h14.4"
					}),
					u.jsx("path", {
						fill: "none",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M119.1 41.9h15.7c1.5 0 2.8-1.1 3-2.6l.9-6.5h-21.3m5.3 20.2a1.9 1.9 0 1 0-1.9-1.9c0 1.1.8 1.9 1.9 1.9zm11.4 0a1.9 1.9 0 1 0-1.9-1.9c.1 1.1.9 1.9 1.9 1.9z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllOrderRequestIcon = d;
}), 98);
