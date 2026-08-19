__d("WAWebDefaultUserSquareIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-user-square";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 212, 212, "0 0 212 212");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 212 212",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("path", {
						fill: "#DFE5E7",
						d: "M0 0h212v212H0V0z",
						className: s(n == null ? void 0 : n.background)
					}),
					c.jsx("path", {
						fill: "#FFFFFF",
						d: "M106 125.5c2.6 0 5.2-.3 7.7-.7 1.2-.2 2.4-.5 3.6-.9 1.8-.5 3.5-1.2 5.1-2 2.2-1 4.2-2.3 6.1-3.7 2.9-2.1 5.4-4.6 7.5-7.5.7-1 1.4-1.9 2-3 .9-1.5 1.7-3.2 2.4-4.8.5-1.1.9-2.3 1.2-3.5.2-.6.3-1.2.5-1.8a40.46 40.46 0 0 0 1.1-9.5 40.46 40.46 0 0 0-1.1-9.5c-.1-.6-.3-1.2-.5-1.8-.4-1.2-.8-2.3-1.2-3.5-.7-1.7-1.5-3.3-2.4-4.8-.6-1-1.3-2-2-3-2.1-2.9-4.6-5.4-7.5-7.5-1.9-1.4-4-2.6-6.1-3.7-1.6-.8-3.3-1.4-5.1-2a38.7 38.7 0 0 0-11.3-1.6c-21.2 0-37.3 16.2-37.3 37.3 0 21.3 16.1 37.5 37.3 37.5zm69 48.4c-.4-.7-.9-1.5-1.4-2.3-.6-.9-1.3-1.9-2.1-3-.8-1-1.6-2.2-2.6-3.3s-2-2.3-3.2-3.5a80.9 80.9 0 0 0-5.9-5.5 75.69 75.69 0 0 0-16.2-10.1c-.1 0-.1-.1-.2-.1-9.8-4.4-22.1-7.5-37.4-7.5s-27.6 3.1-37.4 7.5c-.3.2-.7.3-1 .5-1.4.7-2.8 1.4-4.1 2.1l-2.1 1.2c-3.4 2-6.5 4.2-9.1 6.4a63.6 63.6 0 0 0-5.9 5.5c-1.2 1.2-2.2 2.4-3.2 3.5s-1.8 2.2-2.6 3.3c-.8 1-1.5 2-2.1 3-.6.8-1 1.6-1.4 2.3 0 .1-.1.1-.1.2v.1c-9.6 15-9.6 32.9-9.6 32.9H185s-.3-18.1-10-33.2z",
						className: s(n == null ? void 0 : n.primary)
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultUserSquareIcon = m;
}), 98);
