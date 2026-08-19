__d("WAWebCommunitySquircleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "community-squircle";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 180, 180, "0 0 180 180");
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
						fill: "currentColor",
						d: "M90 0C0 0 0 0 0 90s0 90 90 90 90 0 90-90 0-90-90-90Z",
						className: s(n == null ? void 0 : n.background)
					}),
					c.jsx("path", {
						fill: "#fff",
						fillRule: "evenodd",
						d: "M116.07 77.37a12.46 12.46 0 0 0 1.48 4.34 11.53 11.53 0 0 0 2.89 3.3 11.28 11.28 0 0 0 6.86 2.3c6.27 0 11.35-5.27 11.35-11.77s-5.08-11.77-11.35-11.77a11.54 11.54 0 0 0-5 1.13 11.13 11.13 0 0 0-5.48 5.98 11.9 11.9 0 0 0-.75 2.82 13.29 13.29 0 0 0 0 3.67Zm-52.14 0a11.81 11.81 0 0 1-4.37 7.65 11.28 11.28 0 0 1-6.86 2.29c-6.27 0-11.35-5.27-11.35-11.77s5.08-11.77 11.35-11.77a11.55 11.55 0 0 1 5 1.13 11.13 11.13 0 0 1 5.48 5.98 11.9 11.9 0 0 1 .75 2.82c.17 1.22.17 2.45 0 3.67Zm85.41 28.7a18.08 18.08 0 0 0-1.17-1.8 23.26 23.26 0 0 0-1.95-2.33 24.16 24.16 0 0 0-7.43-5.31l-.06-.03a32.1 32.1 0 0 0-25.18 0l-.33.16-.52.27.3.16a39.9 39.9 0 0 1 13.35 12.6c.32.51.6.96.83 1.37a9.3 9.3 0 0 1 1 2.44l.08.6h18.34a3.4 3.4 0 0 0 3.4-3.4v-3.43c-.19-.45-.4-.88-.66-1.3Zm-41.7-38.45a19.58 19.58 0 0 0-2.32-6.83 17.3 17.3 0 0 0-11.65-8.42A18.13 18.13 0 0 0 90 52c-10.1 0-17.84 8.01-17.84 18.5 0 10.48 7.73 18.49 17.84 18.49a18.59 18.59 0 0 0 5.4-.82 17.28 17.28 0 0 0 9.92-7.97 18.4 18.4 0 0 0 2.32-6.83c.26-1.9.26-3.85 0-5.75Zm15.46 45.8a28.94 28.94 0 0 0-2.94-4.3 33.78 33.78 0 0 0-4.37-4.52 34.81 34.81 0 0 0-7.84-5.1c-4.7-2.23-10.6-3.79-17.95-3.79-7.34 0-13.25 1.56-17.95 3.78l-.47.24a37.45 37.45 0 0 0-2.99 1.66 35.77 35.77 0 0 0-7.22 5.95 32.72 32.72 0 0 0-5.03 7.14c-.27.53-.4.84-.4.84v7.25a3.4 3.4 0 0 0 3.4 3.4h61.31a3.4 3.4 0 0 0 3.4-3.4v-7.25a19.8 19.8 0 0 0-.95-1.9Zm-71.32.19c.05-.43.19-.83.4-1.2.17-.32.3-.72.56-1.17.29-.5.52-.94.83-1.43.34-.53.7-1.1 1.15-1.7A38.65 38.65 0 0 1 67.3 96.99c-.15-.07-.28-.15-.43-.21l-.33-.17a29.82 29.82 0 0 0-12.6-2.57 29.9 29.9 0 0 0-12.6 2.57l-.06.03a24.35 24.35 0 0 0-10.09 8.65l-.5.8c-.47.8-.69 1.29-.69 1.29v3.43a3.4 3.4 0 0 0 3.4 3.4h18.34l.04-.6Z",
						className: s(n == null ? void 0 : n.primary),
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CommunitySquircleIcon = m;
}), 98);
