__d("WDSIconIcAddAPhoto.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-add-a-photo";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M3 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.55.2-1.02.59-1.41C1.98 5.19 2.45 5 3 5h3.15L7.4 3.65A2 2 0 0 1 8.87 3H13c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 13 5H8.87L7.05 7H3v12h16v-8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3ZM19 5h-1a.97.97 0 0 1-.71-.29A.97.97 0 0 1 17 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1V2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v1h1c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 5h-1v1c0 .28-.1.52-.29.71A.94.94 0 0 1 20 7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 19 6V5Zm-8 12.5c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 15.5 13c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 11 8.5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 6.5 13c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 11 17.5Zm0-2c-.7 0-1.3-.24-1.78-.72A2.41 2.41 0 0 1 8.5 13c0-.7.24-1.3.72-1.78A2.41 2.41 0 0 1 11 10.5a2.44 2.44 0 0 1 2.5 2.5 2.44 2.44 0 0 1-2.5 2.5Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
