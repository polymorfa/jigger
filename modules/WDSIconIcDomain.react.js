__d("WDSIconIcDomain.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-domain";
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
				d: "M2 19V5c0-.55.2-1.02.59-1.41C2.98 3.19 3.45 3 4 3h6c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2h8c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm2 0h2v-2H4v2Zm0-4h2v-2H4v2Zm0-4h2V9H4v2Zm0-4h2V5H4v2Zm4 12h2v-2H8v2Zm0-4h2v-2H8v2Zm0-4h2V9H8v2Zm0-4h2V5H8v2Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2v2Zm4-6v-2h2v2h-2Zm0 4v-2h2v2h-2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
