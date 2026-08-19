__d("WDSIconIcLabelFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-label-filled";
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
				d: "m20.18 13.15-3.53 5c-.18.27-.42.48-.71.63-.3.14-.6.22-.94.22H5c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.55.2-1.02.59-1.41C3.98 5.19 4.45 5 5 5h10a2.02 2.02 0 0 1 1.65.85l3.53 5a1.94 1.94 0 0 1 0 2.3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
