__d("WAWebPremiumChannelFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "premium-channel-filled";
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
					d: "m8.63 10.4 2.08 10.55a2 2 0 0 0 2.58 0l2.08-10.55zm-1.84 0 1.54 7.81-5.65-6.62A3.5 3.5 0 0 1 2 10.4zM1.91 8.6H6.8L8.56 3H7.4a4 4 0 0 0-3.38 1.86L2.4 7.44a3.5 3.5 0 0 0-.5 1.16m6.76 0h6.66l-1.69-5.33A.9.9 0 0 1 13.6 3h-3.2q0 .14-.04.27zm8.54 0L15.44 3h1.16a4 4 0 0 1 3.38 1.86l1.64 2.58c.23.36.38.76.47 1.16zm4.8 1.8a3.5 3.5 0 0 1-.67 1.19l-5.66 6.62 1.55-7.81z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PremiumChannelFilledIcon = d;
}), 98);
