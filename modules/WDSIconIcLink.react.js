__d("WDSIconIcLink.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-link";
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
				d: "M7 17a4.82 4.82 0 0 1-3.54-1.46A4.82 4.82 0 0 1 2 12c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 7 7h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 10 9H7c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 4 12c0 .83.3 1.54.88 2.13.58.58 1.29.87 2.12.87h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 10 17H7Zm2-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 15 13H9Zm5 4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 16c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.83 0 1.54-.3 2.13-.88.58-.58.87-1.29.87-2.12 0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 17 9h-3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 22 12c0 1.38-.49 2.56-1.46 3.54A4.82 4.82 0 0 1 17 17h-3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
