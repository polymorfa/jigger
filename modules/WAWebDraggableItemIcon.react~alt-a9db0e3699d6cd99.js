__d("WAWebDraggableItemIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "draggable-item";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 6, 16, "0 0 16 6");
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
					fill: "#8696A0",
					d: "M15 0H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 1 1 0 0 0-1-1ZM1 6h14a1 1 0 0 0 1-1 1 1 0 0 0-1-1H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.DraggableItemIcon = d;
}), 98);
