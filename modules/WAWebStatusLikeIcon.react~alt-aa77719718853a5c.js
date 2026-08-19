__d("WAWebStatusLikeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "status-like";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 17, 18, "0 0 18 17");
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
					c.jsx("path", {
						fill: "#25D366",
						d: "M8.46 3.13A3.76 3.76 0 0 0 3.1 3.1a3.86 3.86 0 0 0 .02 5.42l5.49 5.55c.23.23.6.23.82 0l5.47-5.52a3.86 3.86 0 0 0-.02-5.41 3.77 3.77 0 0 0-5.36-.02l-.53.53-.53-.53Z"
					}),
					c.jsx("path", {
						d: "m16.32 9.97-5.46 5.51a2.58 2.58 0 0 1-3.67 0l-5.5-5.54a5.86 5.86 0 0 1 0-8.23 5.76 5.76 0 0 1 7.3-.73 5.77 5.77 0 0 1 7.31.76 5.86 5.86 0 0 1 .02 8.23Zm-6.6-7.03c-.06.06-.14.12-.2.2l-.53.52-.53-.53a3.76 3.76 0 0 0-5.36-.01 3.86 3.86 0 0 0 .02 5.41l5.49 5.55c.23.23.6.23.82 0l5.47-5.52a3.86 3.86 0 0 0-.02-5.41 3.77 3.77 0 0 0-5.15-.21Z",
						className: s(n == null ? void 0 : n.border),
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.StatusLikeIcon = m;
}), 98);
