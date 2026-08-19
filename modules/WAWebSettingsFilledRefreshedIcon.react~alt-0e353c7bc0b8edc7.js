__d("WAWebSettingsFilledRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings-filled-refreshed";
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
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M9.66 21.55c.33.3.71.45 1.16.45h2.36c.45 0 .83-.15 1.16-.45.32-.3.52-.67.59-1.1l.22-1.65a5.03 5.03 0 0 0 1.17-.68l1.5.65c.42.19.84.2 1.25.05.42-.14.75-.41.98-.8l1.2-2.04c.23-.39.3-.8.2-1.23a1.9 1.9 0 0 0-.68-1.07l-1.32-1c.03-.12.05-.23.05-.34v-.68c0-.1 0-.22-.02-.34l1.32-1c.35-.28.57-.64.68-1.07.1-.43.03-.84-.2-1.22L20.1 5.98a1.84 1.84 0 0 0-.98-.8 1.63 1.63 0 0 0-1.25.04l-1.55.66a8.28 8.28 0 0 0-.56-.38 3.8 3.8 0 0 0-.61-.3l-.22-1.65c-.07-.43-.27-.8-.6-1.1-.32-.3-.7-.45-1.15-.45h-2.36c-.45 0-.83.15-1.16.45-.32.3-.52.67-.59 1.1L8.85 5.2a5.03 5.03 0 0 0-1.18.67l-1.55-.65a1.6 1.6 0 0 0-1.25-.04c-.41.15-.74.41-.97.8L2.72 8.02c-.23.39-.3.8-.2 1.23.1.43.33.8.68 1.07l1.32 1-.02.34v.68c0 .1 0 .22.02.34l-1.32 1a1.9 1.9 0 0 0-.68 1.07c-.1.43-.03.84.2 1.22l1.18 2.05c.23.39.56.66.97.8.42.16.84.14 1.25-.05l1.55-.64.57.37c.19.12.4.22.61.3l.22 1.65c.07.43.27.8.6 1.1ZM12 15c.83 0 1.54-.3 2.12-.88.59-.58.88-1.3.88-2.12 0-.83-.3-1.54-.88-2.12A2.89 2.89 0 0 0 12 9c-.84 0-1.55.3-2.13.88A2.9 2.9 0 0 0 9 12c0 .83.29 1.54.87 2.12.58.59 1.29.88 2.13.88Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsFilledRefreshedIcon = d;
}), 98);
