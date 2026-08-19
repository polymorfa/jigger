__d("WAWebUnstarRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "unstar-refreshed";
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
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M6.75 8.16 2.8 4.22a1 1 0 0 1 1.41-1.41L21.2 19.78a1 1 0 0 1-1.41 1.41l-1.35-1.34a1.2 1.2 0 0 1-1.8.77L12 17.83l-4.64 2.79a1.2 1.2 0 0 1-1.78-1.3l1.21-5.24-4.08-3.53a1.2 1.2 0 0 1 .68-2.1l3.36-.29Zm9.16 9.16.14.6-3.43-2.05a1.2 1.2 0 0 0-1.24 0l-3.43 2.06.9-3.87a1.2 1.2 0 0 0-.38-1.18l-3.02-2.6L8.6 10l7.32 7.31Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M13.55 9.2c.04.1.08.17.13.24l.27.27c.18.13.38.2.6.22l4 .35-2.16 1.86 1.41 1.42 3.5-3c.8-.7.37-2.02-.69-2.11l-5.4-.47-2.1-4.94a1.2 1.2 0 0 0-2.21 0L9.82 5.58l1.52 1.52.66-1.54 1.55 3.65Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.UnstarRefreshedIcon = d;
}), 98);
