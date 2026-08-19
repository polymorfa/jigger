__d("WDSIconIcAttachMoney.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-attach-money";
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
				d: "M12.03 21a.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71v-1.15a4.45 4.45 0 0 1-3.35-2.63.85.85 0 0 1 0-.73c.1-.26.3-.45.58-.56a.9.9 0 0 1 .72 0c.25.12.45.3.58.54.28.5.64.88 1.07 1.14.44.26.97.39 1.6.39a3.1 3.1 0 0 0 1.74-.46c.48-.31.71-.79.71-1.44a1.8 1.8 0 0 0-.54-1.39 7.81 7.81 0 0 0-2.56-1.16c-1.43-.45-2.41-.99-2.95-1.61a3.4 3.4 0 0 1-.8-2.29c0-1.08.35-1.93 1.05-2.53.7-.6 1.42-.94 2.16-1.02V4a.97.97 0 0 1 1-1c.28 0 .52.1.7.29.2.19.3.43.3.71v1.1a4.12 4.12 0 0 1 2.8 1.75c.14.22.17.46.08.73a.94.94 0 0 1-.56.57c-.23.1-.47.1-.72.01a1.63 1.63 0 0 1-.7-.49 2.23 2.23 0 0 0-.77-.53 2.66 2.66 0 0 0-1.09-.19c-.73 0-1.29.16-1.67.49-.38.32-.58.73-.58 1.21 0 .55.25.98.75 1.3.5.32 1.37.65 2.6 1 1.15.33 2.03.86 2.62 1.59.59.72.89 1.56.89 2.51 0 1.18-.36 2.08-1.05 2.7-.7.62-1.57 1-2.6 1.15V20c0 .28-.1.52-.3.71a.9.9 0 0 1-.7.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
