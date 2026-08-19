__d("WAWebIcMusicNoteIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-music-note";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					d: "M10 21a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 6 17c0-1.1.4-2.04 1.17-2.82A3.85 3.85 0 0 1 10 13a3.9 3.9 0 0 1 2 .55V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71v2c0 .28-.1.52-.29.71A.94.94 0 0 1 17 7h-3v10c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 10 21Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcMusicNoteIcon = d;
}), 98);
