__d("WDSIconIcMatchCase.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-match-case";
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
				d: "m6.17 14.9-.8 2.22a.84.84 0 0 1-.32.43.88.88 0 0 1-.5.15.84.84 0 0 1-.74-.39.82.82 0 0 1-.08-.81l3.44-9.2a.88.88 0 0 1 .34-.44c.16-.1.33-.16.52-.16h.7a.95.95 0 0 1 .87.6l3.45 9.22c.12.29.08.55-.1.8a.86.86 0 0 1-.72.38.83.83 0 0 1-.5-.16.9.9 0 0 1-.33-.44l-.78-2.2H6.18Zm.58-1.6h3.28l-1.6-4.55h-.1L6.74 13.3Zm9.88 4.65c-.85 0-1.53-.23-2.03-.69a2.34 2.34 0 0 1-.75-1.81c0-.73.29-1.34.86-1.81a3.36 3.36 0 0 1 2.21-.71 6.27 6.27 0 0 1 2.08.37V13c0-.48-.17-.88-.51-1.18a2 2 0 0 0-1.36-.45 2.46 2.46 0 0 0-1.41.45c-.21.17-.42.23-.6.18a.9.9 0 0 1-.47-.28.7.7 0 0 1-.18-.47c0-.18.1-.34.28-.47.33-.27.7-.47 1.13-.6.41-.12.84-.18 1.27-.18 1.15 0 2 .27 2.58.81.56.54.84 1.36.84 2.44v3.68c0 .21-.07.4-.23.55a.79.79 0 0 1-1.11-.02.8.8 0 0 1-.23-.56v-.13h-.1a2.3 2.3 0 0 1-.95.88c-.4.2-.84.3-1.32.3Zm.3-1.35c.58 0 1.07-.2 1.48-.6.41-.4.61-.87.61-1.4a4.27 4.27 0 0 0-1.8-.42c-.53 0-.95.11-1.25.35-.3.23-.45.54-.45.92 0 .33.14.6.4.82.27.22.6.33 1 .33Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
