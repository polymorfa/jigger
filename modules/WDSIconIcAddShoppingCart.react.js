__d("WDSIconIcAddShoppingCart.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-add-shopping-cart";
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
				d: "M11 6H9a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 15 6h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 12 9a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 8V6ZM7 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm10 0c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59ZM3 4H2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 1 3c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1.65a1 1 0 0 1 .9.58L8.53 11h7l3.62-6.5c.08-.17.2-.3.35-.38.15-.08.32-.12.5-.12.38 0 .67.16.86.49.2.32.2.65.02.98l-3.58 6.48A2 2 0 0 1 15.55 13H8.1L7 15h11c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 18 17H7c-.75 0-1.32-.32-1.71-.98-.4-.64-.4-1.3-.04-1.97L6.6 11.6 3 4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
