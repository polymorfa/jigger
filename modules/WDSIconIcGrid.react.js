__d("WDSIconIcGrid.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-grid";
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
				d: "M5 11q-.82 0-1.41-.59Q2.99 9.82 3 9V5q0-.82.59-1.41Q4.17 2.99 5 3h4q.82 0 1.41.59.6.58.59 1.41v4q0 .82-.59 1.41-.59.6-1.41.59zm0 10q-.82 0-1.41-.59-.6-.59-.59-1.41v-4q0-.83.59-1.41.58-.6 1.41-.59h4q.82 0 1.41.59.6.59.59 1.41v4q0 .83-.59 1.41-.59.6-1.41.59zm10-10q-.83 0-1.41-.59-.6-.59-.59-1.41V5q0-.82.59-1.41.59-.6 1.41-.59h4q.83 0 1.41.59.6.58.59 1.41v4q0 .82-.59 1.41-.59.6-1.41.59zm0 10q-.83 0-1.41-.59-.6-.59-.59-1.41v-4q0-.83.59-1.41.59-.6 1.41-.59h4q.83 0 1.41.59.6.59.59 1.41v4q0 .83-.59 1.41-.59.6-1.41.59zM5 9h4V5H5zm10 0h4V5h-4zm0 10h4v-4h-4zM5 19h4v-4H5z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
