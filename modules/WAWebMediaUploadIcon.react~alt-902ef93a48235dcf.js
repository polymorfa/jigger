__d("WAWebMediaUploadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-upload";
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
					d: "M5 10.1h4.3v6.5c0 .5.4.9.9.9h4.3c.5 0 .9-.4.9-.9v-6.5h4.3c.8 0 1-.5.5-1.1l-6.9-7.2c-.7-.9-1.3-.7-2 0L4.6 9c-.6.6-.4 1.1.4 1.1ZM20.1 20H4.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h15.6c.3 0 .5-.2.5-.5v-1c0-.2-.2-.5-.5-.5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MediaUploadIcon = d;
}), 98);
