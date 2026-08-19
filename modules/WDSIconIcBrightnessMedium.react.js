__d("WDSIconIcBrightnessMedium.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-brightness-medium";
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
				d: "M8.65 20H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-2.65L2.08 13.4c-.19-.2-.33-.42-.43-.66a1.91 1.91 0 0 1 0-1.48c.1-.24.24-.46.43-.66L4 8.65V6c0-.55.2-1.02.59-1.41C4.98 4.19 5.45 4 6 4h2.65l1.95-1.92c.2-.19.42-.33.66-.43a1.91 1.91 0 0 1 1.48 0c.24.1.46.24.66.43L15.35 4H18c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2.65l1.93 1.95c.18.2.32.42.42.66a1.91 1.91 0 0 1 0 1.48c-.1.24-.24.46-.43.66L20 15.35V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-2.65l-1.95 1.93c-.2.18-.42.32-.66.42a1.91 1.91 0 0 1-1.48 0c-.24-.1-.46-.24-.66-.43L8.65 20Zm.85-2 2.5 2.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm2.5-1c1.38 0 2.56-.49 3.54-1.46A4.82 4.82 0 0 0 17 12c0-1.38-.49-2.56-1.46-3.54A4.82 4.82 0 0 0 12 7v10Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
