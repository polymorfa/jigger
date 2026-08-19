__d("WDSIconIcFastForward.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-fast-forward";
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
				d: "M19.18 11 15.3 7.12a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72.2-.18.44-.28.71-.28.28 0 .5.1.69.28l4.6 4.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-4.6 4.6a.9.9 0 0 1-.7.29c-.27-.01-.5-.1-.7-.29a1 1 0 0 1-.31-.7.87.87 0 0 1 .29-.7l3.9-3.9Zm-6 1H7c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 4 15v3c0 .28-.1.52-.29.71A.94.94 0 0 1 3 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 18v-3c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 7 10h6.18L10.3 7.12a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72.2-.18.44-.28.71-.28.28 0 .5.1.69.28l4.6 4.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-4.6 4.6a.9.9 0 0 1-.7.29c-.27-.01-.5-.1-.7-.29a1 1 0 0 1-.31-.7.87.87 0 0 1 .29-.7l2.9-2.9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
