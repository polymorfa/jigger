__d("WAWebMultiDeviceIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "multi-device";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 22, "0 0 22 16");
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
					d: "M3.67 2.5h16.5V.67H3.67c-1.01 0-1.84.82-1.84 1.83v10.08H0v2.75h12.83v-2.75H3.67V2.5Zm17.41 1.83h-5.5c-.5 0-.91.42-.91.92v9.17c0 .5.4.91.91.91h5.5c.5 0 .92-.4.92-.91V5.25c0-.5-.41-.92-.92-.92Zm-.91 8.25H16.5V6.17h3.67v6.41Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MultiDeviceIcon = d;
}), 98);
