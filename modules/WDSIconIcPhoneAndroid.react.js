__d("WDSIconIcPhoneAndroid.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-phone-android";
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
				d: "M10.5 20h3c.13 0 .25-.05.35-.15a.48.48 0 0 0 0-.7.48.48 0 0 0-.35-.15h-3a.48.48 0 0 0-.35.15.48.48 0 0 0 0 .7c.1.1.22.15.35.15ZM7 23c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V3c0-.55.2-1.02.59-1.41C5.98 1.19 6.45 1 7 1h10c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7Zm0-5v3h10v-3H7Zm0-2h10V6H7v10ZM7 4h10V3H7v1Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
