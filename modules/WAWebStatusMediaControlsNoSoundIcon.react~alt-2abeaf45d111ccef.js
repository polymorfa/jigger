__d("WAWebStatusMediaControlsNoSoundIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-media-controls-no-sound";
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
					d: "M3 10v4a1 1 0 0 0 1 1h3l3.29 3.29a1 1 0 0 0 1.71-.71V6.41a1 1 0 0 0-1.71-.71L7 9H4a1 1 0 0 0-1 1Zm15.5 2.1 1.38-1.39a1 1 0 1 0-1.4-1.4l-1.4 1.36L15.7 9.3a1 1 0 1 0-1.4 1.41l1.37 1.38-1.38 1.38a1 1 0 1 0 1.41 1.41l1.38-1.36 1.38 1.38a1 1 0 1 0 1.41-1.4l-1.37-1.4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusMediaControlsNoSoundIcon = d;
}), 98);
