__d("WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-detected-outcomes-automated-labels";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, null);
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
						fill: "#E6FFDA",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M15.52 9.55H60.2c1.03 0 2 .2 2.93.6l.4.18a7.06 7.06 0 0 1 2.3 1.82l.27.34 18.3 24.4a7.08 7.08 0 0 1 1.47 4.42c0 1.56-.43 2.94-1.3 4.17l-.17.25L66.1 70.1a7 7 0 0 1-2.2 1.96l-.38.2a7.32 7.32 0 0 1-3.32.79H15.52a7.08 7.08 0 0 1-4.94-1.9l-.27-.27a7.08 7.08 0 0 1-2.17-5.2V16.91c0-1.9.63-3.54 1.9-4.93l.27-.28a7.08 7.08 0 0 1 5.2-2.16Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M59.66 19.67c2.76 2.63 3.32 7.32 1.66 13.03-1.65 5.67-5.46 12.13-11.05 18-5.59 5.86-11.85 9.97-17.44 11.9-5.62 1.94-10.33 1.6-13.1-1.03-2.76-2.63-3.32-7.32-1.66-13.03 1.65-5.67 5.46-12.13 11.05-18 5.59-5.87 11.85-9.98 17.44-11.9 5.62-1.94 10.33-1.6 13.1 1.03Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M19.73 19.67c-2.76 2.63-3.33 7.32-1.66 13.03 1.65 5.67 5.46 12.13 11.05 18 5.59 5.86 11.85 9.97 17.44 11.9 5.62 1.94 10.33 1.6 13.1-1.03 2.76-2.63 3.32-7.32 1.66-13.03-1.66-5.67-5.46-12.13-11.05-18-5.59-5.87-11.85-9.98-17.44-11.9-5.62-1.94-10.33-1.6-13.1 1.03Z"
					}),
					u.jsx("circle", {
						cx: 39.69,
						cy: 40.62,
						r: 5.75,
						stroke: "#111B21",
						strokeWidth: 1.5
					}),
					u.jsx("path", {
						fill: "#FCF5EB",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M12.46 60.83H30.5a11.3 11.3 0 0 1 0 22.59H12.46a11.3 11.3 0 0 1 0-22.6Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M29.25 79.07a6.95 6.95 0 1 0 0-13.9 6.95 6.95 0 0 0 0 13.9Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllDetectedOutcomesAutomatedLabelsIcon = d;
}), 98);
