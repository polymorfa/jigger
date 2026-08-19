__d("WAWebWdsSmbPictoArrowsTransferIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-smb-picto-arrows-transfer";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "#25D366",
					stroke: "#111B21",
					strokeWidth: 1.5,
					d: "m59.67 36.8 1.28-1.28H16.82a4.23 4.23 0 1 1 0-8.47h44.13l-1.28-1.28-1.79-1.8A4.23 4.23 0 1 1 63.87 18l10.3 10.3a4.23 4.23 0 0 1 0 5.99L64.44 44a4.23 4.23 0 0 1-5.99-5.99l1.22-1.21ZM28.32 51.2l-1.28 1.28h44.13a4.23 4.23 0 1 1 0 8.47H27.04l1.28 1.28 1.79 1.8A4.23 4.23 0 1 1 24.12 70l-10.3-10.3a4.23 4.23 0 0 1 0-5.99L23.55 44a4.23 4.23 0 0 1 5.99 5.99l-1.22 1.21Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsSmbPictoArrowsTransferIcon = d;
}), 98);
