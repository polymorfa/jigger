__d("WAWebRevokeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "revoke";
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
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 24 24",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M7.7 11.1v1.8h8.7v-1.8H7.7zM12 3.3c-4.7 0-8.7 3.8-8.7 8.7s3.8 8.7 8.7 8.7 8.7-3.9 8.7-8.7-4-8.7-8.7-8.7zm0 15.6c-3.9 0-6.9-3.1-6.9-6.9s3-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3 6.9-6.9 6.9z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RevokeIcon = d;
}), 98);
