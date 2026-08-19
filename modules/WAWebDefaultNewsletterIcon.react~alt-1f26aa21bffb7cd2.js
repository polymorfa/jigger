__d("WAWebDefaultNewsletterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-newsletter";
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
				fill: "none",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("rect", {
						width: 212,
						height: 212,
						fill: "currentColor",
						className: s(n == null ? void 0 : n.background),
						rx: 106
					}),
					c.jsx("path", {
						fill: "#FFFFFF",
						d: "M157.12 99.03c-3.1-23.49-22.5-42.21-46.02-44.33-30.55-2.8-55.78 20.69-56.35 51.2-.2 10.97 3.97 20.39 6.09 24.42l-6.14 20.33a5.14 5.14 0 0 0 6.4 6.41l20.02-6a51.34 51.34 0 0 0 24.97 6.47c30.65 0 55.11-27 50.98-58.5h.05Zm-71.41 20.79a5.24 5.24 0 0 1-.52 6.62 5.18 5.18 0 0 1-8.05-.88 35.03 35.03 0 0 1 .47-39.88c1.8-2.53 5.57-2.69 7.8-.46a5.19 5.19 0 0 1 .5 6.67 24.46 24.46 0 0 0-4.38 14.07c0 5.22 1.6 9.88 4.28 13.8l-.1.06Zm20.64-6.1a7.74 7.74 0 0 1-7.74-7.76 7.74 7.74 0 1 1 15.48 0c0 4.3-3.46 7.76-7.74 7.76Zm28.12 12.62a5.1 5.1 0 0 1-7.74.46 5.19 5.19 0 0 1-.51-6.67 24.66 24.66 0 0 0-.1-28.35 5.33 5.33 0 0 1 .4-6.82 5.13 5.13 0 0 1 7.74.46 34.75 34.75 0 0 1 6.71 20.64c0 7.76-2.42 14.59-6.5 20.33v-.05Z",
						className: s(n == null ? void 0 : n.primary)
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultNewsletterIcon = m;
}), 98);
