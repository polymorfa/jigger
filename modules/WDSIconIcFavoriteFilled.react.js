__d("WDSIconIcFavoriteFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-favorite-filled";
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
				d: "M12 20.32c-.23 0-.47-.04-.71-.12a1.65 1.65 0 0 1-.64-.4l-1.72-1.57a68.36 68.36 0 0 1-4.8-4.82A7.72 7.72 0 0 1 2 8.15c0-1.57.52-2.87 1.58-3.92A5.33 5.33 0 0 1 7.5 2.65a5.96 5.96 0 0 1 4.5 2.1 5.96 5.96 0 0 1 4.5-2.1c1.57 0 2.88.53 3.93 1.58A5.33 5.33 0 0 1 22 8.15c0 1.92-.7 3.67-2.13 5.28a59.85 59.85 0 0 1-4.82 4.82l-1.7 1.55c-.18.18-.4.32-.64.4-.24.08-.48.13-.71.13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
