__d("WDSIconIcArchive.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-archive";
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
				d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6.5c0-.25.04-.47.13-.67.08-.2.19-.4.32-.58l1.4-1.7c.13-.18.3-.32.5-.41.2-.1.42-.14.65-.14h12c.23 0 .45.05.65.14.2.09.37.23.5.41l1.4 1.7c.13.18.24.38.32.58.09.2.13.42.13.67V19c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 19h14V8H5v11Zm7-1.43c.13 0 .26-.02.38-.06a.88.88 0 0 0 .32-.21l2.6-2.6a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7.95.95 0 0 0-.7-.28c-.28 0-.52.1-.7.28l-.9.9V11c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 10c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 11v3.2l-.9-.9a.95.95 0 0 0-.7-.28.95.95 0 0 0-.97.97c0 .3.09.53.27.71l2.6 2.6c.1.1.2.17.32.21.12.04.25.06.38.06Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
