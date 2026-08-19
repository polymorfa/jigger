__d("WAWebWdsIllClipMessagesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-clip-messages";
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
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsxs("g", {
						stroke: "#111b21",
						strokeWidth: 1.5,
						clipPath: "url(#WAWebWdsIllClipMessagesIcon__a)",
						children: [
							u.jsx("path", {
								fill: "#e6ffda",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "m44.45 38.36 79.73-19.77c2.2-.57 4.29 1.72 3.6 3.79l-4.72 14.16 7.17 29.03c4.63 18.78-6.43 37.66-24.73 42.2l-41.4 10.27c-18.29 4.54-36.88-7.01-41.5-25.77l-2.9-11.7c-4.62-18.78 6.45-37.67 24.73-42.2z"
							}),
							u.jsx("path", {
								fill: "#fcf5eb",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "m70.11 25.62 82 5.01c2.27.12 3.57 2.93 2.3 4.7l-8.75 12.1-1.86 29.85c-1.2 19.3-17.42 34-36.23 32.86l-42.58-2.61c-18.8-1.15-33.08-17.74-31.87-37.02l.74-12.03c1.21-19.3 17.44-34 36.24-32.86z"
							}),
							u.jsx("path", {
								strokeLinecap: "round",
								d: "M58.47 54.6 130 60.1M56.27 76.5l51.8 3.99"
							}),
							u.jsx("path", {
								fill: "#25d366",
								d: "M76.3 4.01a14.6 14.6 0 0 1 8.1 6.73c1.77 3.1 2.46 6.82 1.38 10.28l-4.8 19.1a8.44 8.44 0 0 1-16.43-3.89l4.27-19.18v-.03l.02-.03a2.82 2.82 0 0 1 5.4 1.62l-3.91 18.97a2.8 2.8 0 0 0 5.48 1.22l4.57-19.1c1.22-4.93-1.85-8.9-5.87-10.17a8.5 8.5 0 0 0-10.36 5.3l-2.47 10.72-.12.5-.52.07c-1.42.19-2.35.56-4.34 1.28l-1.3.47.32-1.35 3.21-13.56v-.03l.02-.03C61.4 5.14 69.49 1.86 76.3 4.01Zm21.18 11.72c.79.36 1.38.94 1.68 1.72.29.75.27 1.61 0 2.48l-1.4 4.73-.1.37-.37.13-4.04 1.4-.14.06-.16-.01-1.48-.1-.93-.07.26-.89 2.35-8.07.01-.05.02-.04a3.25 3.25 0 0 1 4.3-1.66Z"
							})
						]
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebWdsIllClipMessagesIcon__a",
						children: u.jsx("path", {
							fill: "#fff",
							d: "M0 0h180v120H0z"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllClipMessagesIcon = d;
}), 98);
