__d("WDSIconIcKey.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-key";
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
				d: "M7 14c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0 4a5.79 5.79 0 0 1-4.25-1.75A5.79 5.79 0 0 1 1 12c0-1.67.58-3.08 1.75-4.25A5.79 5.79 0 0 1 7 6c1.12 0 2.13.28 3.04.83.9.54 1.63 1.27 2.16 2.17h8.38a1.03 1.03 0 0 1 .72.3l2 2c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-3.18 3.18a.95.95 0 0 1-.3.2c-.11.05-.23.08-.34.1a.88.88 0 0 1-.68-.2L17.5 15l-1.43 1.07a.94.94 0 0 1-.89.15.86.86 0 0 1-.28-.14L13.37 15H12.2a6.21 6.21 0 0 1-2.16 2.18c-.91.55-1.92.82-3.04.82Zm0-2a4.03 4.03 0 0 0 3.88-3H14l1.45 1.03 2.05-1.53 1.77 1.38L21.15 12l-1-1h-9.27A4.03 4.03 0 0 0 7 8c-1.1 0-2.04.4-2.83 1.18A3.85 3.85 0 0 0 3 12c0 1.1.4 2.04 1.17 2.82A3.85 3.85 0 0 0 7 16Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
