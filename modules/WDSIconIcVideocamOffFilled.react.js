__d("WDSIconIcVideocamOffFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-videocam-off-filled";
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
				d: "m1.75 4.15.9.9c-.17.28-.25.6-.25.95v12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h12c.35 0 .67-.08.96-.24l2.89 2.89c.18.18.42.28.7.28a.95.95 0 0 0 .98-.98c0-.28-.1-.52-.28-.7L18.4 18 4.4 4 3.15 2.75a.95.95 0 0 0-.7-.28.95.95 0 0 0-.98.98c0 .28.1.52.28.7Zm19.8 3.2L18.4 10.5V6c0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59H9.65a.9.9 0 0 0-.57.17 1.2 1.2 0 0 0-.35.45.99.99 0 0 0-.1.55c.03.19.13.36.3.53l7.77 7.77c.23.24.5.33.81.28.31-.05.55-.2.71-.43l3.33 3.33c.17.17.35.2.55.13.2-.09.3-.25.3-.48V7.7c0-.23-.1-.4-.3-.48-.2-.08-.38-.04-.55.13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
