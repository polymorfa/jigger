__d("WAWebWaBrandArrowOutIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wa-brand-arrow-out";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 16, "0 0 16 16");
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
						clipPath: "url(#WAWebWaBrandArrowOutIcon__a)",
						children: u.jsx("path", {
							fill: "currentColor",
							fillRule: "evenodd",
							d: "M4.76 3.45a.75.75 0 0 0 0 1.5l5.71.02-6.28 6.28a.75.75 0 1 0 1.06 1.06l6.28-6.28.02 5.71a.75.75 0 0 0 1.5 0l-.03-7.49a.75.75 0 0 0-.78-.77z",
							clipRule: "evenodd"
						})
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebWaBrandArrowOutIcon__a",
						children: u.jsx("path", {
							fill: "#fff",
							d: "M.5 0h16v16H.5z"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WaBrandArrowOutIcon = d;
}), 98);
