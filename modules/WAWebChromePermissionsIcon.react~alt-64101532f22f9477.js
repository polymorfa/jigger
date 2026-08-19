__d("WAWebChromePermissionsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "chrome-permissions";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14");
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
						fillRule: "evenodd",
						d: "M11.13 7.62a2.76 2.76 0 0 1 2.62 2.75v.15a2.76 2.76 0 0 1-2.76 2.62h-.14a2.76 2.76 0 0 1-2.62-2.62v-.15a2.76 2.76 0 0 1 2.76-2.76zm-.14 1.8a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.93",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M7 11.3H.86V9.45H7z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M3.15.87a2.76 2.76 0 0 1 2.62 2.75v.15a2.76 2.76 0 0 1-2.76 2.62h-.14A2.76 2.76 0 0 1 .25 3.76v-.15A2.76 2.76 0 0 1 3.01.87zm-.14 1.8a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.93",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M13.14 4.54H7V2.7h6.14z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ChromePermissionsIcon = d;
}), 98);
