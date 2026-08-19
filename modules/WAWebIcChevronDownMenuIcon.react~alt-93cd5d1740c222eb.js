__d("WAWebIcChevronDownMenuIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-chevron-down-menu";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					d: "m10 12.1 4.9-4.9a.95.95 0 0 1 .7-.28.95.95 0 0 1 .97.98c0 .28-.09.52-.27.7l-5.6 5.6a.96.96 0 0 1-1.4 0L3.7 8.6a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcChevronDownMenuIcon = d;
}), 98);
