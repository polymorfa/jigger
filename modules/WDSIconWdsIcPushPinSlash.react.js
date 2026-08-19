__d("WDSIconWdsIcPushPinSlash.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-push-pin-slash";
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
				d: "M14.71 4h-4v2.17L7.96 3.42a.85.85 0 0 1-.18-.27.77.77 0 0 1-.07-.3.9.9 0 0 1 .23-.59.75.75 0 0 1 .6-.26h8.17c.29 0 .52.1.71.29.2.19.3.43.3.71 0 .27-.13.45-.37.56-.24.11-.45.26-.64.44v6c0 .28-.1.52-.29.71a.91.91 0 0 1-.7.29.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71V4Zm-3 17v-6h-3.6c-.41 0-.75-.15-1-.44a1.48 1.48 0 0 1-.26-1.54c.08-.18.2-.35.36-.52l1.5-1.5V9.85L2.81 3.9a.98.98 0 0 1-.28-.69.95.95 0 0 1 .99-.99c.28 0 .5.1.7.28l16.97 16.98c.2.2.3.43.29.7a1.02 1.02 0 0 1-1.02 1 .92.92 0 0 1-.7-.28l-5.9-5.9h-.15v6c0 .28-.1.52-.29.71a.91.91 0 0 1-.7.29.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71Zm-2.15-8h2.3l-1.1-1.1-.05-.05L9.56 13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
