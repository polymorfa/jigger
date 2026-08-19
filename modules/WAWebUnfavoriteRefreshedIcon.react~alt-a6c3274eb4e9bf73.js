__d("WAWebUnfavoriteRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "unfavorite-refreshed";
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
					d: "M1.06 3.06a1 1 0 0 0 0 1.42l1.61 1.6A5.5 5.5 0 0 0 2 8.82c0 1.92.71 3.67 2.14 5.26 1.42 1.6 3.02 3.2 4.78 4.81l1.73 1.58c.18.18.4.32.64.4a2.18 2.18 0 0 0 1.42 0c.24-.08.46-.22.64-.4l1.7-1.55.24-.22 2.67 2.67a1 1 0 0 0 1.41-1.4L2.47 3.06a1 1 0 0 0-1.4 0ZM13.88 17.3 4.19 7.6c-.13.38-.19.78-.19 1.22 0 .87.3 1.79.92 2.76a19.2 19.2 0 0 0 2.22 2.84c.86.92 1.74 1.77 2.65 2.57L12 18.97l1.88-1.68Zm2.98-2.87-.14.15 1.41 1.4a53.3 53.3 0 0 0 1.74-1.88A7.79 7.79 0 0 0 22 8.82c0-1.57-.53-2.88-1.58-3.93a5.33 5.33 0 0 0-3.92-1.57 5.96 5.96 0 0 0-4.5 2.1 5.96 5.96 0 0 0-6.27-1.84l1.75 1.74h.02c.78 0 1.45.18 2 .54.55.36 1.07.88 1.55 1.56a1.14 1.14 0 0 0 .95.5 1.16 1.16 0 0 0 .95-.5c.48-.68 1-1.2 1.55-1.56a3.58 3.58 0 0 1 2-.54 3.4 3.4 0 0 1 3.5 3.5c0 .87-.3 1.79-.93 2.76-.61.98-1.35 1.92-2.2 2.84Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.UnfavoriteRefreshedIcon = d;
}), 98);
