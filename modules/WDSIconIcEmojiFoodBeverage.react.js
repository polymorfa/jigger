__d("WDSIconIcEmojiFoodBeverage.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-emoji-food-beverage";
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
				d: "M5 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 20c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 21H5Zm3-4a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 4 13V5.22c0-.61.22-1.14.65-1.57.43-.43.96-.65 1.57-.65H20c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v3c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-2v3c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 14 17H8Zm10-9h2V5h-2v3Zm-4 7c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41V5h-6v.4l1.8 1.45c.03.03.1.17.2.4v4.25c0 .13-.05.25-.15.35-.1.1-.22.15-.35.15h-4a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V7.25c0-.03.07-.17.2-.4L9 5.4V5H6v8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h6Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
