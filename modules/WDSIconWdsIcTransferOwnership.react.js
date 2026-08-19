__d("WDSIconWdsIcTransferOwnership.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-transfer-ownership";
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
					d: "M12 12c2.22 0 4-1.78 4-4 0-2.22-1.78-4-4-4-2.22 0-4 1.78-4 4 0 2.22 1.78 4 4 4Zm0-2a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M4 17.2v.8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h7.17a3.06 3.06 0 0 1 0-2H6v-.8c0-.42.25-.71.5-.85a11.84 11.84 0 0 1 9.6-.6c.2-.94.77-1.49 1.1-1.74a13.91 13.91 0 0 0-11.6.54 2.9 2.9 0 0 0-1.16 1.09c-.3.47-.44 1-.44 1.56ZM19.2 20H16c-.57 0-1-.43-1-1 0-.57.43-1 1-1h3.2l-.9-.9a1.02 1.02 0 0 1 0-1.4 1.02 1.02 0 0 1 1.4 0l2.6 2.6c.4.4.4 1 0 1.4l-2.6 2.6c-.37.37-1.03.37-1.4 0a1.02 1.02 0 0 1 0-1.4l.9-.9Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
