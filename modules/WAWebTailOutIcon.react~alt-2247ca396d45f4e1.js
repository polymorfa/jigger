__d("WAWebTailOutIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "tail-out";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 13, 8, "0 0 8 13");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 8 13",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						d: "M5.19 1H0v11.2l6.47-8.63C7.53 2.16 6.96 1 5.19 1z",
						opacity: .13
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M5.19 0H0v11.2l6.47-8.63C7.53 1.16 6.96 0 5.19 0z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TailOutIcon = d;
}), 98);
