__d("WDSIconIcWallpaper.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-wallpaper";
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
				d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5h5c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 10 21H5Zm14 0h-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 20c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h5v-5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm-7.75-5 2.6-3.47c.1-.14.23-.2.4-.2s.3.06.4.2l2.75 3.67c.13.17.15.34.05.53A.48.48 0 0 1 17 17H7a.5.5 0 0 1-.45-.27.44.44 0 0 1 .05-.53l2-2.67c.1-.14.23-.2.4-.2s.3.06.4.2L11.25 16ZM3 5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h5c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 10 5H5v5c0 .28-.1.52-.29.71A.94.94 0 0 1 4 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 10V5Zm18 0v5c0 .28-.1.52-.29.71A.94.94 0 0 1 20 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 19 10V5h-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h5c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41Zm-5.5 5A1.46 1.46 0 0 1 14 8.5 1.46 1.46 0 0 1 15.5 7 1.46 1.46 0 0 1 17 8.5a1.46 1.46 0 0 1-1.5 1.5Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
