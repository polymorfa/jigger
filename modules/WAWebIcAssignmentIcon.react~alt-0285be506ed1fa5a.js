__d("WAWebIcAssignmentIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-assignment";
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
					d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h4.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H19c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v14c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h14V5H5v14Zm3-2h5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 13 15H8c-.28 0-.52.1-.71.29A.94.94 0 0 0 7 16c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h8c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 16 11H8c-.28 0-.52.1-.71.29A.94.94 0 0 0 7 12c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h8c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 16 7H8c-.28 0-.52.1-.71.29A.94.94 0 0 0 7 8c0 .28.1.52.29.71.19.2.43.29.71.29Zm4-4.75a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75.73.73 0 0 0-.75.75.73.73 0 0 0 .75.75Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcAssignmentIcon = d;
}), 98);
