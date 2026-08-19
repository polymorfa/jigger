__d("WAWebPollRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "poll-refreshed-thin";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20");
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
					d: "M1 6c0-.28.1-.51.3-.7.19-.2.42-.3.7-.3h8c.28 0 .51.1.7.3.2.19.3.42.3.7 0 .28-.1.51-.3.7-.19.2-.42.3-.7.3H2a.96.96 0 0 1-.7-.3A.96.96 0 0 1 1 6Zm0 4c0-.28.1-.51.3-.7.19-.2.42-.3.7-.3h12c.28 0 .51.1.7.3.2.19.3.42.3.7 0 .28-.1.51-.3.7-.19.2-.42.3-.7.3H2a.96.96 0 0 1-.7-.3.96.96 0 0 1-.3-.7Zm0 4c0-.28.1-.51.3-.7.19-.2.42-.3.7-.3h5c.28 0 .51.1.7.3.2.19.3.42.3.7 0 .28-.1.51-.3.7-.19.2-.42.3-.7.3H2a.96.96 0 0 1-.7-.3.96.96 0 0 1-.3-.7Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PollRefreshedThinIcon = d;
}), 98);
