__d("WDSIconIcVideoCallingGrid.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-video-calling-grid";
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
				fillRule: "evenodd",
				d: "M21 19q0 .82-.59 1.41A1.93 1.93 0 0 1 19 21H5q-.82 0-1.41-.59A1.93 1.93 0 0 1 3 19V5q0-.82.59-1.41A1.93 1.93 0 0 1 5 3h14q.82 0 1.41.59T21 5zM8.33 15.78H5V19h3.33zM5 5v8.78h14V5zm8.67 10.78h-3.34V19h3.34zm2 0V19H19v-3.22z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
