__d("WAWebIcNumbersIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-numbers";
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
					d: "m9 16-.82 3.27a.91.91 0 0 1-.93.73.95.95 0 0 1-.77-.38.88.88 0 0 1-.18-.82L7 16H4.28a.96.96 0 0 1-.8-.39.95.95 0 0 1-.18-.86.88.88 0 0 1 .35-.55c.18-.13.4-.2.63-.2H7.5l1-4H5.78a.96.96 0 0 1-.8-.39.95.95 0 0 1-.18-.86.88.88 0 0 1 .35-.55c.18-.13.4-.2.63-.2H9l.83-3.28a.92.92 0 0 1 .92-.72c.32 0 .57.13.78.38.2.25.25.52.17.82L11 8h4l.82-3.28a.91.91 0 0 1 .93-.72c.32 0 .57.13.77.38.2.25.26.52.18.82L17 8h2.73c.33 0 .6.13.8.39.2.26.25.54.17.86a.88.88 0 0 1-.35.55c-.18.13-.4.2-.63.2H16.5l-1 4h2.73c.33 0 .6.13.8.39.2.26.25.54.17.86a.88.88 0 0 1-.35.55c-.18.13-.4.2-.63.2H15l-.82 3.27a.91.91 0 0 1-.93.73.95.95 0 0 1-.78-.38.88.88 0 0 1-.17-.82L13 16H9Zm.5-2h4l1-4h-4l-1 4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcNumbersIcon = d;
}), 98);
