__d("WAWebWdsPictoWarningBadgeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-warning-badge";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 32, 32, "0 0 32 32");
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
						fill: "#FFB938",
						stroke: "#111B21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M16 31a15 15 0 1 0 0-30 15 15 0 0 0 0 30Z"
					}),
					u.jsx("path", {
						fill: "white",
						d: "M16.46 6.54h-.91v.01c-1.2 0-2.16.96-2.16 2.16v6.59a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17V8.69c0-1.19-.96-2.15-2.15-2.15Zm0 14.16h-.91c-1.2 0-2.16.97-2.16 2.16v.47a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17v-.43c0-1.2-.96-2.16-2.15-2.16Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeLinejoin: "round",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M16.46 6.54h-.91v.01c-1.2 0-2.16.96-2.16 2.16v6.59a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17V8.69c0-1.19-.96-2.15-2.15-2.15Zm0 14.16h-.91c-1.2 0-2.16.97-2.16 2.16v.47a2.16 2.16 0 0 0 2.17 2.14l.91-.01v-.01a2.15 2.15 0 0 0 2.14-2.17v-.43c0-1.2-.96-2.16-2.15-2.16Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsPictoWarningBadgeIcon = d;
}), 98);
