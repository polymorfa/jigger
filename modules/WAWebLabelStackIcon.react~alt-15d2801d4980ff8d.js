__d("WAWebLabelStackIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "label-stack";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
					fill: "currentColor",
					d: "M6.4 4.01c.03-.22.09-.41.17-.57a2.26 2.26 0 0 1 1.85-1.23c.33-.03.87-.04 1.63-.04h5.36l1.2.01a3.14 3.14 0 0 1 2.23 1.1l.74.93 2.05 2.68c.2.26.36.46.45.6a1.23 1.23 0 0 1 .23.76c0 .13-.01.25-.04.36-.04.12-.1.25-.19.39l-.45.61-.2.27a9 9 0 0 0-.41-.56l-.09-.1-2.13-2.78a24 24 0 0 0-.77-.96 4.47 4.47 0 0 0-3.05-1.5c-.3-.02-.7-.03-1.21-.03H8.19c-.77 0-1.3.01-1.61.04l-.19.02Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LabelStackIcon = d;
}), 98);
