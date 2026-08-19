__d("WAWebTailInIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "tail-in";
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
						fill: "#0000000",
						d: "M1.53 3.57 8 12.19V1H2.81C1.04 1 .47 2.16 1.53 3.57z",
						opacity: .13
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M1.53 2.57 8 11.19V0H2.81C1.04 0 .47 1.16 1.53 2.57z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.TailInIcon = d;
}), 98);
