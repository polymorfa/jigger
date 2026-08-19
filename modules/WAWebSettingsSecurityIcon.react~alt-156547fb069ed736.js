__d("WAWebSettingsSecurityIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings-security";
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
					d: "M12.03 2 4 5.57v5.35c0 4.95 3.42 9.58 8.03 10.7 4.6-1.12 8.02-5.75 8.02-10.7V5.57L12.03 2Zm0 9.8h6.24c-.47 3.68-2.93 6.95-6.24 7.98V11.8H5.78V6.73l6.25-2.78v7.85Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsSecurityIcon = d;
}), 98);
