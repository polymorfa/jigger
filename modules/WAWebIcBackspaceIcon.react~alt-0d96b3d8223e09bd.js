__d("WAWebIcBackspaceIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-backspace";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					d: "M9 19a2.02 2.02 0 0 1-1.65-.85l-3.52-5a1.94 1.94 0 0 1 0-2.3l3.52-5A1.96 1.96 0 0 1 9 5h10c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H9Zm0-2h10V7H9l-3.55 5L9 17Zm5-3.6 1.9 1.9c.18.18.42.27.7.27.28 0 .52-.09.7-.27a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7L15.4 12l1.9-1.9a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7.95.95 0 0 0-.7-.27.96.96 0 0 0-.7.27L14 10.6l-1.9-1.9a.95.95 0 0 0-.7-.27.96.96 0 0 0-.7.27.95.95 0 0 0-.27.7c0 .28.09.52.27.7l1.9 1.9-1.9 1.9a.95.95 0 0 0-.27.7c0 .28.09.52.27.7.18.18.42.27.7.27.28 0 .52-.09.7-.27l1.9-1.9Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcBackspaceIcon = d;
}), 98);
