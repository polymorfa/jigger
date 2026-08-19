__d("WDSIconIcBookmark.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-bookmark";
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
				d: "m12 18-4.2 1.8c-.67.28-1.3.23-1.9-.16-.6-.4-.9-.95-.9-1.66V5c0-.55.2-1.02.59-1.41C5.98 3.19 6.45 3 7 3h10c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12.98c0 .71-.3 1.27-.9 1.66-.6.39-1.23.44-1.9.16L12 18Zm0-2.2 5 2.15V5H7v12.95l5-2.15Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
