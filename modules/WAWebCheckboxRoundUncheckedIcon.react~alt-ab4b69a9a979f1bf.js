__d("WAWebCheckboxRoundUncheckedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "checkbox-round-unchecked";
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
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 20 20",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					fillOpacity: "inherit",
					d: "M10 .25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5zM8.12 14.91 3.4 10.2l1.33-1.33 3.38 3.37 7.16-7.15 1.33 1.34-8.5 8.47z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.CheckboxRoundUncheckedIcon = d;
}), 98);
