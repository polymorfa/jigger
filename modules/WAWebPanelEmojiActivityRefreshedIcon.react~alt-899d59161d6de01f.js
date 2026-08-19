__d("WAWebPanelEmojiActivityRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "panel-emoji-activity-refreshed";
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
					d: "M4.05 11H6.9a5.84 5.84 0 0 0-1.65-3.25q-.45.72-.76 1.54A7.7 7.7 0 0 0 4.05 11m13.05 0h2.85q-.12-.9-.44-1.71a9 9 0 0 0-.76-1.54A5.84 5.84 0 0 0 17.1 11M5.25 16.25A5.84 5.84 0 0 0 6.9 13H4.05q.13.9.44 1.71.31.82.76 1.54m13.5 0q.45-.72.76-1.54a7.7 7.7 0 0 0 .44-1.71H17.1a5.84 5.84 0 0 0 1.65 3.25M8.95 11H11V4.05a8.8 8.8 0 0 0-2.46.74A7.5 7.5 0 0 0 6.5 6.2a8.6 8.6 0 0 1 1.61 2.16q.64 1.21.84 2.64M13 11h2.05q.2-1.43.84-2.64A8.6 8.6 0 0 1 17.5 6.2a7.5 7.5 0 0 0-2.04-1.41A8.8 8.8 0 0 0 13 4.05zm-2 8.95V13H8.95a8 8 0 0 1-.84 2.64A8.6 8.6 0 0 1 6.5 17.8q.9.88 2.04 1.41 1.13.54 2.46.74m2 0a8.8 8.8 0 0 0 2.46-.74 7.5 7.5 0 0 0 2.04-1.41 8.6 8.6 0 0 1-1.61-2.16 8 8 0 0 1-.84-2.64H13zM12 22a9.7 9.7 0 0 1-3.9-.79 10.1 10.1 0 0 1-3.17-2.14q-1.35-1.35-2.14-3.17A9.7 9.7 0 0 1 2 12q0-2.08.79-3.9a10.1 10.1 0 0 1 2.14-3.17Q6.28 3.57 8.1 2.78A9.7 9.7 0 0 1 12 2q2.08 0 3.9.79a10.1 10.1 0 0 1 3.17 2.14q1.35 1.35 2.14 3.17A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.79 3.9 10.1 10.1 0 0 1-2.14 3.17q-1.35 1.35-3.17 2.14A9.7 9.7 0 0 1 12 22"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PanelEmojiActivityRefreshedIcon = d;
}), 98);
