__d("WDSIconIcErrorFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-error-filled";
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
				d: "M12 17c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 15c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 16c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V8c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 7c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 8v4c0 .28.1.52.29.71.19.2.43.29.71.29Zm0 9a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
