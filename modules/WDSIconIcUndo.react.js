__d("WDSIconIcUndo.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-undo";
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
				d: "M8 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6.1c1.05 0 1.96-.33 2.74-1A3.16 3.16 0 0 0 18 13.5c0-1-.39-1.83-1.16-2.5-.78-.67-1.69-1-2.74-1H7.8l1.9 1.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L4.7 9.7a.88.88 0 0 1-.21-.32A1.1 1.1 0 0 1 4.42 9c0-.13.03-.26.07-.37a.88.88 0 0 1 .21-.33l3.6-3.6a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L7.8 8h6.3c1.62 0 3 .53 4.16 1.58A5.08 5.08 0 0 1 20 13.5c0 1.57-.58 2.88-1.74 3.93A5.98 5.98 0 0 1 14.1 19H8Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
