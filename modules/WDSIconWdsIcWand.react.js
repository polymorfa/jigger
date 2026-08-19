__d("WDSIconWdsIcWand.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-wand";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M9.14 6.6a2 2 0 0 0-.65.44L7.07 8.45a2 2 0 0 0 0 2.83l11.1 11.1a2 2 0 0 0 2.82 0l1.42-1.4a2 2 0 0 0 0-2.84l-11.1-11.1a2 2 0 0 0-2.17-.43Zm-.59 3.33.04.05 2.08 2.06 1.42-1.4L10 8.56a.15.15 0 0 0-.22 0l-1.2 1.2a.15.15 0 0 0-.04.17Zm10.92 10.94-7.38-7.4h-.01l1.4-1.43 7.4 7.41a.15.15 0 0 1 0 .21l-1.2 1.21a.17.17 0 0 1-.2 0Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M10.61 3.96a.95.95 0 0 0 1.38 0c.2-.2.3-.43.3-.7v-2a.96.96 0 0 0-.99-.99c-.27 0-.5.1-.7.3-.2.2-.29.42-.29.68v2.02c0 .26.1.49.3.69ZM6.35 6.3a.97.97 0 0 1-1.41 0L2.82 4.19a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72a.97.97 0 0 1 1.41 0L6.35 4.9a.97.97 0 0 1 0 1.41ZM4 11.95a.95.95 0 0 0 0-1.38.95.95 0 0 0-.69-.3H1.3a.96.96 0 0 0-.99.99c0 .27.11.5.3.7.2.2.43.29.69.29h2c.26 0 .49-.1.69-.3Zm.23 7.39c.27 0 .5-.1.7-.3l1.42-1.42a.97.97 0 0 0 0-1.41.97.97 0 0 0-.7-.3c-.28 0-.51.1-.71.3l-1.42 1.41a.98.98 0 0 0 0 1.41c.2.2.44.3.7.3ZM17.66 6.3a.97.97 0 0 1-1.41 0 .97.97 0 0 1-.3-.7c0-.28.1-.51.3-.71l1.41-1.42a.98.98 0 0 1 1.41 0 .97.97 0 0 1 0 1.41l-1.4 1.42Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
