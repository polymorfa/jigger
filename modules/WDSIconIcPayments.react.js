__d("WDSIconIcPayments.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-payments";
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
				d: "M14 13a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 11 10c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 14 7c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 14 13Zm-7 3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C5.98 4.19 6.45 4 7 4h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7Zm2-2h10c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59V8c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41H9c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59v4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41Zm-6 6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v10h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 20H3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
