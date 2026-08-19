__d("WAWebKeyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "key";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					u.jsx("mask", {
						id: "WAWebKeyIcon__a",
						width: 20,
						height: 20,
						x: 0,
						y: 0,
						maskUnits: "userSpaceOnUse",
						style: { maskType: "alpha" },
						children: u.jsx("path", {
							fill: "currentColor",
							d: "M0 0h20v20H0z"
						})
					}),
					u.jsx("g", {
						mask: "url(#WAWebKeyIcon__a)",
						children: u.jsx("path", {
							fill: "currentColor",
							d: "M6 12.81c-.64 0-1.18-.22-1.64-.67-.45-.45-.67-1-.67-1.64 0-.64.22-1.18.67-1.64.45-.45 1-.67 1.64-.67.64 0 1.18.22 1.64.67.45.45.67 1 .67 1.64 0 .64-.22 1.18-.67 1.64-.45.45-1 .67-1.64.67Zm0 2.69a4.9 4.9 0 0 0 2.88-.94 4.65 4.65 0 0 0 1.8-2.41H11l1.06 1.06a.8.8 0 0 0 .3.19c.1.04.22.06.33.06a.86.86 0 0 0 .6-.25l1.04-1.04 1.07 1.04a.83.83 0 0 0 .6.25.98.98 0 0 0 .63-.25l2.1-2.13a1 1 0 0 0 .2-.29.8.8 0 0 0 0-.67 1 1 0 0 0-.2-.29l-.77-.77a.84.84 0 0 0-.6-.25h-6.67A4.72 4.72 0 0 0 8.9 6.44 4.86 4.86 0 0 0 6 5.5c-1.39 0-2.57.49-3.54 1.46A4.82 4.82 0 0 0 1 10.5c0 1.39.49 2.57 1.46 3.54A4.82 4.82 0 0 0 6 15.5Z"
						})
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.KeyIcon = d;
}), 98);
