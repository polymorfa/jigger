__d("WDSIconWdsIcAi.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-ai";
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
				fillRule: "evenodd",
				d: "M11.19 12.24 9.79 9a1.05 1.05 0 0 0-1.93 0l-1.39 3.24c-.1.25-.3.45-.55.55l-3.28 1.4a1.05 1.05 0 0 0-.01 1.93l3.15 1.39c.24.1.43.29.54.52l1.52 3.35c.38.84 1.57.82 1.93-.02l1.42-3.3c.1-.25.3-.45.55-.56L15 16.11c.85-.36.85-1.56 0-1.93l-3.25-1.39c-.25-.1-.44-.3-.55-.55Zm-4.6 3.44c.68.3 1.24.84 1.55 1.52l.64 1.4.57-1.33c.31-.72.89-1.3 1.6-1.6l1.21-.52-1.2-.52c-.72-.3-1.3-.88-1.6-1.6l-.53-1.21-.52 1.21c-.31.72-.89 1.3-1.6 1.6l-1.27.54 1.15.5Zm9.04-10.95a2.73 2.73 0 1 1-5.45 0 2.73 2.73 0 0 1 5.45 0Zm4.46 1.43c.36.11.63.4.72.77l1.16 5.22a1.05 1.05 0 0 1-1.33 1.24l-5.1-1.6a1.05 1.05 0 0 1-.4-1.78l3.93-3.62c.28-.26.67-.34 1.02-.23Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
