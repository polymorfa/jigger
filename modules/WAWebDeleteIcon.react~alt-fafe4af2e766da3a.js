__d("WAWebDeleteIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "delete";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 25, 24, "0 0 24 25");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M7 21.5c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-13a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 5.5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29v13c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7Zm10-15H7v13h10v-13Zm-7 11c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-7c0-.28-.1-.52-.29-.71A.97.97 0 0 0 10 8.5c-.28 0-.52.1-.71.29A.94.94 0 0 0 9 9.5v7c0 .28.1.52.29.71.19.2.43.29.71.29Zm4 0c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-7c0-.28-.1-.52-.29-.71A.97.97 0 0 0 14 8.5c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71v7c0 .28.1.52.29.71.19.2.43.29.71.29Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DeleteIcon = d;
}), 98);
