__d("WAWebStatusMediaControlsVolumeOnIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-media-controls-volume-on";
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
					fillRule: "evenodd",
					d: "M14 4.65v-.2c0-.63.63-1.08 1.21-.85a8.98 8.98 0 0 1 0 16.8.9.9 0 0 1-1.21-.85v-.2c0-.38.24-.7.6-.85a7 7 0 0 0 0-13 .93.93 0 0 1-.6-.85ZM3 10v4a1 1 0 0 0 1 1h3l3.29 3.3a1 1 0 0 0 1.71-.72V6.41a1 1 0 0 0-1.71-.7L7 9H4a1 1 0 0 0-1 1Zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.05A4.47 4.47 0 0 0 16.5 12Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusMediaControlsVolumeOnIcon = d;
}), 98);
