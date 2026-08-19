__d("WDSIconIcPhotoCamera.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-photo-camera";
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
				d: "M12 17.5c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 16.5 13c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 12 8.5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 7.5 13c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 12 17.5Zm0-2c-.7 0-1.3-.24-1.78-.72A2.41 2.41 0 0 1 9.5 13c0-.7.24-1.3.72-1.78A2.41 2.41 0 0 1 12 10.5a2.44 2.44 0 0 1 2.5 2.5 2.44 2.44 0 0 1-2.5 2.5ZM4 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.55.2-1.02.59-1.41C2.98 5.19 3.45 5 4 5h3.15L8.4 3.65A2 2 0 0 1 9.87 3h4.26a2 2 0 0 1 1.47.65L16.85 5H20c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h16V7h-4.05l-1.82-2H9.87L8.05 7H4v12Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
