__d("WAWebMuteNotificationsRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mute-notifications-refreshed";
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
					d: "M5 19a1 1 0 1 1 0-2h1v-7a6.3 6.3 0 0 1 .85-3.15l1.5 1.5A4.2 4.2 0 0 0 8 10v7h6.2L2.1 4.9a.99.99 0 1 1 1.4-1.4l17 17a1 1 0 0 1-1.4 1.4L16.15 19H5Zm13-3.85-2-2V10c0-1.1-.4-2.04-1.17-2.83A3.85 3.85 0 0 0 12 6c-.43 0-.85.07-1.25.2s-.77.33-1.1.6L8.2 5.35c.33-.27.7-.5 1.08-.7.38-.2.79-.35 1.22-.45v-.7c0-.42.15-.77.44-1.06.29-.3.64-.44 1.06-.44.42 0 .77.15 1.06.44.3.29.44.64.44 1.06v.7a5.77 5.77 0 0 1 3.25 2.11A5.86 5.86 0 0 1 18 10v5.15ZM12 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41h4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MuteNotificationsRefreshedIcon = d;
}), 98);
