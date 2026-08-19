__d("WDSIconIcFullscreenExit.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-fullscreen-exit";
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
				d: "M6 18H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 17c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71v3c0 .28-.1.52-.29.71A.94.94 0 0 1 7 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 6 20v-2Zm12 0v2c0 .28-.1.52-.29.71A.94.94 0 0 1 17 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 16 20v-3c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 18h-2ZM6 6V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v3c0 .28-.1.52-.29.71A.94.94 0 0 1 7 8H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2Zm12 0h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 8h-3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 16 7V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
