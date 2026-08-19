__d("WAWebReelPluginVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "reel-plugin-video";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 22, "0 0 22 22");
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
					fill: "white",
					d: "M15.1 5.27 11.96 0H7.18c-.33 0-.66.02-.96.04l2.79 5.22h6.1v.01ZM4.55.32A6.05 6.05 0 0 0 .16 5.27h7.02L4.55.32Zm17.29 4.95a6.04 6.04 0 0 0-1.69-3.4C18.81.57 17.31 0 14.55 0h-.74l3.17 5.27h4.86ZM22 7.25 21.99 7H.01v.06L0 7.45v7.32c.03 2.62.6 4.07 1.85 5.37C3.19 21.44 4.69 22 7.45 22h7.31c2.63-.03 4.08-.6 5.38-1.84 1.3-1.35 1.86-2.84 1.86-5.6V7.25Zm-7.41 7.43-5.13 3-.06.02a.8.8 0 0 1-1.15-.72v-6.07a.8.8 0 0 1 1.2-.63l5.14 3 .06.04a.8.8 0 0 1 .19 1.13.72.72 0 0 1-.25.23Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReelPluginVideoIcon = d;
}), 98);
