__d("WDSIconWdsIcVerifiedFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-verified-filled";
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
				d: "m22.69 11.22-.02-.01-1.6-1.63.58-2.23c.16-.6-.2-1.2-.8-1.37l-2.22-.6-.6-2.22c-.16-.6-.78-.95-1.37-.8l-2.23.58-1.64-1.61a1.12 1.12 0 0 0-1.58 0L9.57 2.94l-2.23-.58c-.6-.16-1.2.2-1.37.78l-.6 2.22-2.22.61c-.6.16-.95.77-.79 1.37l.58 2.23-1.61 1.64a1.12 1.12 0 0 0 0 1.58l1.61 1.63-.58 2.23c-.16.6.2 1.2.79 1.37l2.22.6.6 2.23c.16.6.78.95 1.37.8l2.23-.59 1.64 1.61a1.1 1.1 0 0 0 1.57 0l1.64-1.61 2.23.58c.6.16 1.2-.2 1.37-.8l.6-2.21 2.22-.6c.6-.16.95-.78.8-1.38l-.58-2.23 1.61-1.63c.43-.44.44-1.13.02-1.57Zm-12.2 2.12 4.8-4.8a1 1 0 1 1 1.42 1.41l-2.74 2.76-2.75 2.75-.11.1a1.03 1.03 0 0 1-1.31-.1l-2.5-2.5a1 1 0 1 1 1.4-1.41l1.8 1.79Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
