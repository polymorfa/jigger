__d("WDSIconIcAccountCircleOff.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-account-circle-off";
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
				d: "M12 20a7.77 7.77 0 0 0 4.65-1.5 7.77 7.77 0 0 0-7.1-1.11c-.78.26-1.52.63-2.2 1.11A7.77 7.77 0 0 0 12 20Zm2.65-8.2-1.43-1.43c.09-.13.15-.27.2-.42a1.45 1.45 0 0 0-.36-1.51 1.45 1.45 0 0 0-1.51-.37c-.15.05-.3.12-.43.2L9.7 6.86a3.3 3.3 0 0 1 2.3-.85c.97 0 1.8.34 2.47 1.03.69.68 1.03 1.5 1.03 2.47a3.3 3.3 0 0 1-.85 2.3Zm5.7 5.7-1.45-1.45A7.7 7.7 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a8.07 8.07 0 0 0-4.05 1.1L6.5 3.65A10.19 10.19 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1 9.84 9.84 0 0 1-.86 9.4ZM12 22a10.1 10.1 0 0 1-9.21-6.1 10.12 10.12 0 0 1 .84-9.43L1.38 4.2a.93.93 0 0 1-.3-.71c.02-.28.12-.52.32-.72.2-.2.44-.3.71-.3.28 0 .52.1.72.3l18.37 18.4c.2.2.3.44.29.72-.01.27-.11.51-.31.71a.96.96 0 0 1-1.4 0L5.1 7.95A7.7 7.7 0 0 0 4 12a7.88 7.88 0 0 0 1.85 5.1 9.88 9.88 0 0 1 9.9-1.35l3.32 3.32A9.86 9.86 0 0 1 12 22Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
