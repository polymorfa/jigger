__d("WAWebPinned2Icon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pinned2";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 15, 13, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M12.07 4.21 8.7 8.23l.12 4.23a.4.4 0 0 1-.66.32L.43 6.3a.4.4 0 0 1 .2-.7l4.2-.63L8.2.96a.63.63 0 0 1 .88-.08L12 3.32a.63.63 0 0 1 .07.9ZM1.3 14.23a.71.71 0 0 1-1.1-.93l2.68-3.64 1.53 1.3-3.12 3.26Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.Pinned2Icon = d;
}), 98);
