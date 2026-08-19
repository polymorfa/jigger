__d("WAWebRoundSendInvIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "round-send-inv";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 35, 35, "0 0 35 35");
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
				enableBackground: "new 0 0 35 35",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M17.5.25C7.99.25.25 7.99.25 17.5S7.99 34.75 17.5 34.75s17.25-7.74 17.25-17.25S27.01.25 17.5.25zM14.3 24.2l-5.6-5.6 1.4-1.4 4.2 4.2 10.6-10.6 1.4 1.4-12 12z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RoundSendInvIcon = d;
}), 98);
