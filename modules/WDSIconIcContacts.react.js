__d("WDSIconIcContacts.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-contacts";
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
				d: "M5 23a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 22c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 23H5ZM5 3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 3H5Zm7 10c.83 0 1.54-.3 2.13-.88.58-.58.87-1.29.87-2.12 0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 7c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 10c0 .83.3 1.54.88 2.13.58.58 1.29.87 2.12.87Zm-8 7c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm1.75-2A7.77 7.77 0 0 1 12 15a7.77 7.77 0 0 1 6.25 3H20V6H4v12h1.75Zm2.95 0h6.6a5.52 5.52 0 0 0-3.3-1 5.52 5.52 0 0 0-3.3 1Zm3.3-7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 12 11Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
