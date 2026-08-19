__d("WDSIconIcExpandMore.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-expand-more";
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
				d: "M12 14.95a1.1 1.1 0 0 1-.38-.06.88.88 0 0 1-.32-.21l-4.6-4.6a.95.95 0 0 1-.28-.7.95.95 0 0 1 .98-.97c.28-.01.52.08.7.27l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.28.95.95 0 0 1 .97.97c0 .29-.09.52-.27.7l-4.6 4.6c-.1.1-.2.18-.32.22a1.1 1.1 0 0 1-.38.06Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
