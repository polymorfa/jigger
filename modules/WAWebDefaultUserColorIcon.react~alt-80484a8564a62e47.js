__d("WAWebDefaultUserColorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "default-user-color";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 212, 212, "0 0 212 212");
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
				enableBackground: "new 0 0 212 212",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M106.25.5C164.65.5 212 47.85 212 106.25S164.65 212 106.25 212 .5 164.65.5 106.25 47.85.5 106.25.5z",
						className: "background"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "M173.56 171.62a62.77 62.77 0 0 0-4.67-6.26 70.11 70.11 0 0 0-9.11-9 72.46 72.46 0 0 0-16.18-10.08l-.18-.08c-9.8-4.44-22.11-7.53-37.42-7.53s-27.62 3.09-37.42 7.53l-.98.47a75.37 75.37 0 0 0-6.23 3.3 72.59 72.59 0 0 0-15.07 11.86 70.06 70.06 0 0 0-7.86 9.78 63.2 63.2 0 0 0-1.45 2.33l-.1.17c-.44.75-.8 1.4-1.07 1.93-.56 1.07-.82 1.68-.82 1.68v.4a101.01 101.01 0 0 0 70.94 28.98c27.68 0 52.77-11.1 71.06-29.1v-.29s-.62-1.45-2-3.77c-.4-.7-.88-1.48-1.44-2.32zM106 125.5a39.87 39.87 0 0 0 11.3-1.63 37.12 37.12 0 0 0 11.28-5.63 35.92 35.92 0 0 0 11.9-15.32 37.05 37.05 0 0 0 2.45-8.95 40.28 40.28 0 0 0-1.22-17.12 37.05 37.05 0 0 0-5.63-11.27 35.92 35.92 0 0 0-13.65-11.18 37.12 37.12 0 0 0-8.75-2.85 39.87 39.87 0 0 0-7.68-.74c-21.16 0-37.34 16.19-37.34 37.35S84.84 125.5 106 125.5z",
						className: "primary"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DefaultUserColorIcon = d;
}), 98);
