__d("WAWebSettingsBlockedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings-blocked";
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
					d: "M12 2.3a9.7 9.7 0 1 0 .02 19.42A9.7 9.7 0 0 0 12 2.3ZM4.7 12C4.7 8 8 4.7 12 4.7c1.6 0 3.1.5 4.3 1.4L6.1 16.3c-.9-1.2-1.4-2.7-1.4-4.3Zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 7.8c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3Z",
					style: { fillOpacity: 1 }
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsBlockedIcon = d;
}), 98);
