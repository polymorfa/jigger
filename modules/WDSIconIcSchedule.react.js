__d("WDSIconIcSchedule.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-schedule";
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
				d: "M13 11.6V8c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 7c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 8v3.97a1.03 1.03 0 0 0 .3.73l3.3 3.3c.18.18.42.27.7.27.28 0 .52-.09.7-.27a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7l-3-3ZM12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2a7.7 7.7 0 0 0 5.66-2.34A7.71 7.71 0 0 0 20 12a7.7 7.7 0 0 0-2.34-5.66A7.71 7.71 0 0 0 12 4a7.7 7.7 0 0 0-5.66 2.34A7.71 7.71 0 0 0 4 12c0 2.22.78 4.1 2.34 5.66A7.71 7.71 0 0 0 12 20Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
