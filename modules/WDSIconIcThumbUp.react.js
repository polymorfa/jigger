__d("WDSIconIcThumbUp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-thumb-up";
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
				d: "M21 8c.53 0 1 .2 1.4.6.4.4.6.87.6 1.4v2c0 .12-.02.24-.05.38l-.1.37-3 7.05c-.15.33-.4.62-.75.85-.35.23-.72.35-1.1.35H7V8l6-5.95c.25-.25.55-.4.89-.44.34-.04.67.02.98.19.32.17.56.4.7.7.15.3.19.6.1.92L14.55 8H21ZM9 8.85V19h9l3-7v-2h-9l1.35-5.5L9 8.85ZM4 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-9c0-.55.2-1.02.59-1.41C2.98 8.19 3.45 8 4 8h3v2H4v9h3v2H4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
