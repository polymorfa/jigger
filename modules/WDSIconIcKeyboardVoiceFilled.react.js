__d("WDSIconIcKeyboardVoiceFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-keyboard-voice-filled";
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
				d: "M12 14a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 9 11V5c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 12 2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12v6c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 12 14Zm0 7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 20v-2.1a6.86 6.86 0 0 1-5.92-5.82.84.84 0 0 1 .22-.76c.2-.21.47-.32.8-.32.23 0 .44.09.63.26.18.18.3.39.34.64a4.93 4.93 0 0 0 1.7 2.92c.92.79 2 1.18 3.23 1.18s2.3-.4 3.22-1.18a4.93 4.93 0 0 0 1.7-2.92c.05-.25.18-.46.37-.64a1 1 0 0 1 1.41.06c.2.22.28.47.23.75A6.86 6.86 0 0 1 13 17.9V20c0 .28-.1.52-.29.71A.94.94 0 0 1 12 21Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
