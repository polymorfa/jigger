__d("WAWebQuantityControlsRemoveItemBtnIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "quantity-controls-remove-item-btn";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 2, 12, "0 0 12 2");
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
					fill: "#667781",
					d: "M.38 1.8V.2h11.24v1.6H.38Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.QuantityControlsRemoveItemBtnIcon = d;
}), 98);
