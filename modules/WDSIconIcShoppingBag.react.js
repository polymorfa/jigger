__d("WDSIconIcShoppingBag.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-shopping-bag";
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
				d: "M6 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V8c0-.55.2-1.02.59-1.41C4.98 6.19 5.45 6 6 6h2c0-1.1.4-2.04 1.18-2.83A3.85 3.85 0 0 1 12 2c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 16 6h2c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm0-2h12V8h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 15 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 14 10V8h-4v2c0 .28-.1.52-.29.71A.94.94 0 0 1 9 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 10V8H6v12Zm4-14h4c0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
