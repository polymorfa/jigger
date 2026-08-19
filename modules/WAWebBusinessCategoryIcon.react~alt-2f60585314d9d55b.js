__d("WAWebBusinessCategoryIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "business-category";
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
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M5.6 7.16c-.82 0-1.54-.73-1.54-1.55 0-.83.72-1.55 1.55-1.55.82 0 1.55.72 1.55 1.55a1.6 1.6 0 0 1-1.55 1.55M22 11.9l-9.29-9.28c-.3-.41-.82-.62-1.44-.62H4.06C2.93 2 2 2.93 2 4.06v7.22c0 .62.2 1.13.62 1.44L11.9 22c.41.41.93.62 1.44.62.62 0 1.14-.2 1.44-.62L22 14.78c.41-.4.62-.92.62-1.44 0-.62-.2-1.13-.62-1.44"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BusinessCategoryIcon = d;
}), 98);
