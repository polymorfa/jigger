__d("WDSIconIcUnarchive.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-unarchive";
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
				d: "M12 17.68c.28 0 .52-.1.71-.3a.9.9 0 0 0 .29-.7v-3.2l.9.9c.18.18.42.27.7.27a.95.95 0 0 0 .97-.97.94.94 0 0 0-.27-.7l-2.6-2.58a.96.96 0 0 0-1.4 0l-2.6 2.57a.95.95 0 0 0-.27.7.94.94 0 0 0 .97.98c.28 0 .52-.1.7-.28l.9-.9v3.2c0 .29.1.53.29.72.19.19.43.29.71.29ZM5 8v11h14V8H5Zm0 13c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6.53a2.05 2.05 0 0 1 .45-1.28L4.7 3.73c.18-.24.41-.42.69-.54.27-.13.56-.19.86-.19h11.5a1.96 1.96 0 0 1 1.55.73l1.25 1.52A1.95 1.95 0 0 1 21 6.53V19c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm.4-15h13.2l-.85-1H6.25L5.4 6Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
