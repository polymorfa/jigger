__d("WDSIconIcThumbDown.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-thumb-down";
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
				d: "M3 16c-.53 0-1-.2-1.4-.6-.4-.4-.6-.87-.6-1.4v-2c0-.12.02-.24.05-.38l.1-.37 3-7.05c.15-.33.4-.62.75-.85C5.25 3.12 5.62 3 6 3h11v13l-6 5.95c-.25.25-.55.4-.89.44a1.6 1.6 0 0 1-.98-.19c-.32-.17-.56-.4-.7-.7-.15-.3-.19-.6-.1-.93L9.45 16H3Zm12-.85V5H6l-3 7v2h9l-1.35 5.5L15 15.15ZM20 3c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v9c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-3v-2h3V5h-3V3h3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
