__d("WDSIconWdsIcVerified.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-verified";
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
					d: "M16.65 21.64c.6.16 1.2-.2 1.37-.8l.6-2.21 2.22-.6c.6-.16.95-.78.8-1.38l-.58-2.23 1.61-1.63c.43-.44.44-1.13.02-1.57l-.02-.01-1.6-1.63.58-2.23c.16-.6-.2-1.2-.8-1.37l-2.22-.6-.6-2.22c-.16-.6-.78-.95-1.37-.8l-2.23.58-1.64-1.61a1.12 1.12 0 0 0-1.58 0L9.57 2.94l-2.23-.58c-.6-.16-1.2.2-1.37.78l-.6 2.22-2.22.61c-.6.16-.95.77-.79 1.37l.58 2.23-1.61 1.64a1.12 1.12 0 0 0 0 1.58l1.61 1.63-.58 2.23c-.16.6.2 1.2.79 1.37l2.22.6.6 2.23c.16.6.78.95 1.37.8l2.23-.59 1.64 1.61a1.1 1.1 0 0 0 1.57 0l1.64-1.61 2.23.58ZM4.5 16.32 7 17l.68 2.49 2.5-.65 1.82 1.8 1.83-1.8 2.5.65.67-2.5 2.5-.67-.66-2.5 1.8-1.82-1.8-1.83.66-2.49L17 7l-.67-2.49-2.5.65L12 3.36l-1.83 1.8-2.5-.65L7 7l-2.48.68.66 2.5L3.36 12l1.8 1.83-.65 2.5Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M15.3 8.54a1 1 0 1 1 1.4 1.41l-2.73 2.76-2.75 2.75-.11.1a1.03 1.03 0 0 1-1.31-.1l-2.5-2.5a1 1 0 1 1 1.4-1.41l1.8 1.79 4.8-4.8Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
