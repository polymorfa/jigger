__d("WDSIconIcSyncAlt.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sync-alt";
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
				d: "m5.83 17 1.9 1.9c.2.2.3.43.28.7a1 1 0 0 1-.31.7c-.2.18-.43.28-.7.29a.92.92 0 0 1-.7-.29l-3.6-3.6a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1-.07-.38c0-.13.03-.26.07-.38a.88.88 0 0 1 .21-.32l3.6-3.6a.93.93 0 0 1 .69-.27.97.97 0 0 1 1.01.99c0 .27-.1.5-.3.7L5.82 15H20c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 17H5.82Zm12.35-8H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14.18l-1.9-1.9a.92.92 0 0 1-.3-.7 1 1 0 0 1 .32-.7c.2-.18.43-.28.7-.29.27 0 .5.09.7.29l3.6 3.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .75.88.88 0 0 1-.21.33l-3.6 3.6a.93.93 0 0 1-.69.27.97.97 0 0 1-1.01-.99c0-.27.1-.5.3-.7L18.18 9Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
