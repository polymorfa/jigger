__d("WAWebNewRoundRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "new-round-refreshed";
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
						d: "M12 16a1 1 0 0 1-1-1v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-1 1Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewRoundRefreshedIcon = d;
}), 98);
