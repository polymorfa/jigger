__d("WAWebPixLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "pix-logo";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 32, 32, "0 0 32 32");
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
						width: 32,
						height: 32,
						fill: "#86A3B3",
						className: s(n == null ? void 0 : n.background),
						rx: 16,
						style: { fillOpacity: 1 }
					}),
					c.jsx("path", {
						fill: "white",
						d: "M20.03 19.82a2.1 2.1 0 0 1-1.5-.62l-2.16-2.16a.41.41 0 0 0-.56 0l-2.17 2.16a2.1 2.1 0 0 1-1.5.62h-.42l2.74 2.74a2.19 2.19 0 0 0 3.1 0l2.73-2.74h-.26Zm-7.89-7.64a2.1 2.1 0 0 1 1.5.62l2.17 2.16a.4.4 0 0 0 .56 0l2.16-2.16a2.1 2.1 0 0 1 1.5-.62h.26l-2.74-2.74a2.19 2.19 0 0 0-3.1 0l-2.73 2.74h.42Z",
						className: s(n == null ? void 0 : n.primary),
						style: { fillOpacity: 1 }
					}),
					c.jsx("path", {
						fill: "white",
						d: "M22.56 14.45 20.9 12.8a.32.32 0 0 1-.12.02h-.75c-.4 0-.77.16-1.05.43l-2.16 2.16a1.04 1.04 0 0 1-1.46 0l-2.17-2.17a1.49 1.49 0 0 0-1.05-.43h-.92c-.04 0-.08 0-.11-.02l-1.67 1.66a2.19 2.19 0 0 0 0 3.1l1.66 1.66a.31.31 0 0 1 .12-.02h.92c.4 0 .77-.16 1.05-.43l2.17-2.17c.39-.4 1.07-.4 1.46 0l2.16 2.16c.28.27.66.43 1.05.43h.75c.04 0 .08 0 .12.02l1.66-1.65a2.19 2.19 0 0 0 0-3.1",
						className: s(n == null ? void 0 : n.primary),
						style: { fillOpacity: 1 }
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.PixLogoIcon = m;
}), 98);
