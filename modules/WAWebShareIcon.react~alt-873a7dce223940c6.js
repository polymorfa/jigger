__d("WAWebShareIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "share";
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
					d: "M16.5 20a2.4 2.4 0 0 1-1.77-.73 2.41 2.41 0 0 1-.65-2.37l-4.93-3.02c-.23.19-.48.34-.76.45a2.4 2.4 0 0 1-.89.17 2.4 2.4 0 0 1-1.77-.73A2.41 2.41 0 0 1 5 12c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 7.5 9.5a2.39 2.39 0 0 1 1.65.63l4.93-3.03a2.24 2.24 0 0 1-.08-.6c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 16.5 4c.7 0 1.28.24 1.77.73S19 5.8 19 6.5s-.24 1.28-.73 1.77S17.2 9 16.5 9a2.39 2.39 0 0 1-1.65-.63L9.92 11.4a2.23 2.23 0 0 1 0 1.2l4.93 3.03A2.58 2.58 0 0 1 16.5 15c.7 0 1.28.24 1.77.73S19 16.8 19 17.5s-.24 1.28-.73 1.77-1.07.73-1.77.73Zm0-1.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71a.97.97 0 0 0-.71-.29c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Zm-9-5.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 7.5 11c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Zm9-5.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71a.97.97 0 0 0-.71-.29c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ShareIcon = d;
}), 98);
