__d("WDSIconIcLogout.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-logout";
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
				d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h6c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 11 5H5v14h6c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 11 21H5Zm12.18-8H10a.97.97 0 0 1-.71-.29A.97.97 0 0 1 9 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h7.18L15.3 9.12a1 1 0 0 1 .7-1.69c.28 0 .52.1.73.3l3.57 3.57a.96.96 0 0 1 0 1.4l-3.57 3.57c-.2.2-.44.3-.72.3a1.08 1.08 0 0 1-.71-.32.97.97 0 0 1-.26-.71c0-.28.1-.5.29-.69L17.18 13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
