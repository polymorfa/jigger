__d("WAWebSettingsSecureIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings-secure";
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
					d: "m4.19 4.38 7-3.11a1.99 1.99 0 0 1 1.62 0l7 3.1A2 2 0 0 1 21 6.22v4.7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6.2a2 2 0 0 1 1.19-1.83ZM6.7 13.6l2.59 2.59a1 1 0 0 0 1.41 0l6.59-6.6a1 1 0 1 0-1.41-1.4L10 14.08 8.11 12.2a1 1 0 1 0-1.41 1.4Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsSecureIcon = d;
}), 98);
