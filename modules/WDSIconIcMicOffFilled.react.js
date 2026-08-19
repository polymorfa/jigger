__d("WDSIconIcMicOffFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-mic-off-filled";
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
				d: "M17.98 14.57a.92.92 0 0 1-.46-.6 1 1 0 0 1 .1-.77 2.95 2.95 0 0 0 .45-1.22c.07-.29.2-.52.4-.7a1 1 0 0 1 .7-.28.9.9 0 0 1 .93 1.03 5.8 5.8 0 0 1-.75 2.17.97.97 0 0 1-.61.46.97.97 0 0 1-.76-.09Zm-3.5-4.12-3.73-3.72a1.94 1.94 0 0 1-.57-1.4V5c0-.83.29-1.54.87-2.13A2.9 2.9 0 0 1 13.18 2c.83 0 1.54.3 2.12.88.58.58.88 1.29.88 2.12v4.72c0 .46-.2.77-.62.94-.4.18-.77.1-1.09-.21ZM12.18 20v-2.1a6.86 6.86 0 0 1-5.93-5.87.9.9 0 0 1 .92-1.03c.29 0 .53.1.72.29.19.19.32.43.39.71A4.81 4.81 0 0 0 10 14.88 4.88 4.88 0 0 0 13.18 16a4.92 4.92 0 0 0 3-1l1.42 1.43c-.48.38-1.01.7-1.59.96-.57.26-1.19.43-1.84.51V20a.97.97 0 0 1-1 1 .97.97 0 0 1-.7-.29.97.97 0 0 1-.3-.71Zm8.1 1.9-17-17A.95.95 0 0 1 3 4.2a1 1 0 0 1 .27-.7.95.95 0 0 1 .7-.27c.29 0 .52.09.7.27l17 17c.19.18.28.42.28.7a1 1 0 0 1-.27.7.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.28Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
