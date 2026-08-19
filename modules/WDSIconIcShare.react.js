__d("WDSIconIcShare.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-share";
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
				d: "M18 22a2.9 2.9 0 0 1-2.13-.88 2.9 2.9 0 0 1-.77-2.82l-7.05-4.1c-.28.25-.6.45-.95.59A2.9 2.9 0 0 1 6 15a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 3 12c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 6 9c.38 0 .75.07 1.1.21.35.14.67.34.95.59l7.05-4.1A2.74 2.74 0 0 1 15 5c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 18 2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 18 8a2.9 2.9 0 0 1-1.1-.21 3.3 3.3 0 0 1-.95-.59L8.9 11.3a2.74 2.74 0 0 1 0 1.4l7.05 4.1c.28-.25.6-.45.95-.59A2.9 2.9 0 0 1 18 16c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 18 22Zm0-16c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 18 4c-.28 0-.52.1-.71.29A.94.94 0 0 0 17 5c0 .28.1.52.29.71.19.2.43.29.71.29ZM6 13c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 6 11c-.28 0-.52.1-.71.29A.94.94 0 0 0 5 12c0 .28.1.52.29.71.19.2.43.29.71.29Zm12 7c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 18 18c-.28 0-.52.1-.71.29A.94.94 0 0 0 17 19c0 .28.1.52.29.71.19.2.43.29.71.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
