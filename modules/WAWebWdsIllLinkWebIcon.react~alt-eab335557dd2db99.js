__d("WAWebWdsIllLinkWebIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-link-web";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 121, 180, null);
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
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M34.05 110.86c-8.64 0-15.7-7.05-15.7-15.7v-72.2a12.1 12.1 0 0 1 12.1-12.1h119.1a12.1 12.1 0 0 1 12.1 12.1v72.2c0 8.65-7.06 15.7-15.7 15.7H34.05Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M18.36 26.02v-3.06a12.1 12.1 0 0 1 12.1-12.1h119.08a12.1 12.1 0 0 1 12.1 12.1V26H18.36Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "m143.1 15.18 7.24 7.24m.06-7.24-7.24 7.24"
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M84.06 47.9a3.68 3.68 0 0 1 0 7.37h-8.8c-2.1 0-3.88.68-5.4 2.06l-.29.28a7.73 7.73 0 0 0-2.34 5.7c0 2.25.77 4.13 2.34 5.7a7.73 7.73 0 0 0 5.7 2.35h8.8a3.68 3.68 0 0 1 0 7.36h-8.8c-4.12 0-7.67-1.42-10.62-4.23l-.28-.28c-3-3-4.5-6.65-4.5-10.9s1.5-7.9 4.5-10.9l.28-.28a14.85 14.85 0 0 1 10.62-4.23h8.8Zm14.66 11.73a3.68 3.68 0 1 1 0 7.36H81.13a3.68 3.68 0 0 1 0-7.36h17.6Z"
					}),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeWidth: 1.5,
						d: "M95.94 47.9a3.68 3.68 0 0 0 0 7.37h8.8c2.1 0 3.89.68 5.4 2.06l.29.28a7.74 7.74 0 0 1 2.34 5.7c0 2.25-.77 4.13-2.34 5.7a7.73 7.73 0 0 1-5.7 2.35h-8.8a3.68 3.68 0 0 0 0 7.36h8.8c4.12 0 7.67-1.42 10.62-4.23l.28-.28c3-3 4.5-6.65 4.5-10.9s-1.5-7.9-4.5-10.9l-.28-.28a14.85 14.85 0 0 0-10.62-4.23h-8.8Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllLinkWebIcon = d;
}), 98);
