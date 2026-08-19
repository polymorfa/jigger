__d("WDSIconWdsIcLogoAppleMusic.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-apple-music";
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
				d: "M19.02 2c.52-.01.8.15.83.73q.02.46 0 .94v11.8c0 1.35.2 2.88-1.03 3.8a4 4 0 0 1-2.77.67 2.3 2.3 0 0 1-1.77-3.1c.53-1.35 1.82-1.53 3.08-1.78.44-.09 1.25-.17 1.3-.74q.05-.64.03-1.27V8.5l-.01-1.25c0-.17-.12-.35-.3-.36l-.41.02-1.54.32q-1.58.3-3.14.63l-1.8.36c-.44.08-1.17.17-1.5.43-.1.24-.1.34-.1.6-.02.27-.01.62-.01.9v7.93c0 .95.03 1.89-.56 2.7-.55.77-1.36 1.02-2.26 1.17a2.5 2.5 0 0 1-2.02-.42 2.3 2.3 0 0 1-.66-2.87c.98-2 4.17-1.17 4.31-2.34q.04-.46.03-.93V5.94c0-.62-.15-1.77.63-1.98.53-.15 1.11-.25 1.65-.36l2.93-.59 3.52-.7c.52-.1 1.06-.24 1.57-.3"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
