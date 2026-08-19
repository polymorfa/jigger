__d("WDSIconIcRedo.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-redo";
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
				d: "M16.2 10H9.9c-1.05 0-1.96.33-2.74 1A3.16 3.16 0 0 0 6 13.5c0 1 .39 1.83 1.16 2.5.78.67 1.69 1 2.74 1H16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 19H9.9c-1.62 0-3-.52-4.16-1.57A5.08 5.08 0 0 1 4 13.5c0-1.57.58-2.88 1.74-3.92A5.98 5.98 0 0 1 9.9 8h6.3l-1.9-1.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l3.6 3.6c.1.1.17.2.21.33a1.2 1.2 0 0 1 0 .75.88.88 0 0 1-.21.32l-3.6 3.6a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l1.9-1.9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
