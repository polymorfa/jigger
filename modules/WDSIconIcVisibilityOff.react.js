__d("WDSIconIcVisibilityOff.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-visibility-off";
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
				d: "M15.18 8.32a4.4 4.4 0 0 1 1.3 3.55c0 .26-.1.47-.28.64a.91.91 0 0 1-.65.27.87.87 0 0 1-.64-.27.87.87 0 0 1-.26-.63 2.58 2.58 0 0 0-.7-2.28c-.28-.28-.63-.5-1.03-.65-.4-.15-.82-.18-1.27-.1a.85.85 0 0 1-.64-.28.91.91 0 0 1-.26-.65c0-.25.09-.46.26-.63a.87.87 0 0 1 .64-.27 4.34 4.34 0 0 1 3.53 1.3ZM12 6a9.37 9.37 0 0 0-1.83.17 1.02 1.02 0 0 1-1.23-.72.94.94 0 0 1 .1-.78c.14-.25.34-.4.61-.45a9.1 9.1 0 0 1 1.16-.17 11.46 11.46 0 0 1 7.45 1.75 11.8 11.8 0 0 1 4.34 4.85 1.88 1.88 0 0 1 .2.85c0 .15-.01.3-.04.44a1.5 1.5 0 0 1-.14.41 10.06 10.06 0 0 1-2.57 3.48.84.84 0 0 1-.7.22.91.91 0 0 1-.65-.4 1.1 1.1 0 0 1 .13-1.45 9.84 9.84 0 0 0 1.97-2.7A9.77 9.77 0 0 0 12 6Zm0 13c-2.23 0-4.28-.6-6.13-1.81a13 13 0 0 1-4.37-4.77 1.58 1.58 0 0 1-.19-.43 2.18 2.18 0 0 1-.01-.96c.03-.15.1-.3.18-.46.33-.66.72-1.3 1.16-1.9.44-.62.94-1.17 1.51-1.67L2.07 4.9a.97.97 0 0 1-.26-.71c.01-.28.1-.5.29-.69a.95.95 0 0 1 .7-.28c.28 0 .52.1.7.28l17 17a1 1 0 0 1 0 1.4.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.28l-3.5-3.45A11.92 11.92 0 0 1 12 19ZM5.55 8.4a8.96 8.96 0 0 0-2.35 3.1 9.77 9.77 0 0 0 10.75 5.3l-.9-.95A4.58 4.58 0 0 1 12 16a4.34 4.34 0 0 1-3.19-1.31 4.34 4.34 0 0 1-1.16-4.24L5.55 8.4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
