__d("WDSIconIcStickyNote2.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sticky-note-2";
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
				d: "M5 19h9v-4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4V5H5v14Zm0 2c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v9.18a1.97 1.97 0 0 1-.57 1.4l-4.86 4.85a1.94 1.94 0 0 1-1.4.57H5Zm6-7H8a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 13c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 11 14Zm5-4H8a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 9c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 10Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
