__d("WDSIconIcFormatBold.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-format-bold";
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
				d: "M8.8 19c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h3.52a5 5 0 0 1 3 1c.92.67 1.38 1.6 1.38 2.78 0 .85-.2 1.5-.57 1.96-.39.46-.75.79-1.08.98.42.19.88.53 1.39 1.03.5.5.76 1.25.76 2.25 0 1.48-.54 2.52-1.63 3.11a6.4 6.4 0 0 1-3.04.89H8.8Zm1.02-2.8h2.6c.8 0 1.3-.2 1.47-.61.17-.41.26-.7.26-.89 0-.18-.09-.48-.26-.89-.18-.4-.69-.61-1.54-.61H9.82v3Zm0-5.7h2.33c.55 0 .95-.14 1.2-.43.25-.28.38-.6.38-.95 0-.4-.15-.72-.43-.97a1.6 1.6 0 0 0-1.1-.38H9.82v2.73Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
