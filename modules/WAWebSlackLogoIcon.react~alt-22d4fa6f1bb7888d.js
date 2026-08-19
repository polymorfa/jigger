__d("WAWebSlackLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "slack-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 127, 127, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#E01E5A",
						d: "M27.2 80c0 7.3-5.9 13.2-13.2 13.2S.8 87.3.8 80 6.7 66.8 14 66.8h13.2zm6.6 0c0-7.3 5.9-13.2 13.2-13.2S60.2 72.7 60.2 80v33c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2z"
					}),
					u.jsx("path", {
						fill: "#36C5F0",
						d: "M47 27c-7.3 0-13.2-5.9-13.2-13.2S39.7.6 47 .6s13.2 5.9 13.2 13.2V27zm0 6.7c7.3 0 13.2 5.9 13.2 13.2S54.3 60.1 47 60.1H13.9C6.6 60.1.7 54.2.7 46.9s5.9-13.2 13.2-13.2z"
					}),
					u.jsx("path", {
						fill: "#2EB67D",
						d: "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2H99.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6s13.2 5.9 13.2 13.2z"
					}),
					u.jsx("path", {
						fill: "#ECB22E",
						d: "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2-13.2-5.9-13.2-13.2V99.8zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2s5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SlackLogoIcon = d;
}), 98);
