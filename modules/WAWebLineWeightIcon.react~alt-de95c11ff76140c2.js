__d("WAWebLineWeightIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "line-weight";
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
					d: "M3.5 20a.48.48 0 0 1-.35-.15.48.48 0 0 1 0-.7c.1-.1.22-.15.35-.15h17c.13 0 .25.05.35.15a.48.48 0 0 1 0 .7c-.1.1-.22.15-.35.15h-17Zm.5-3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 16c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 17H4Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 12v-1c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71v1c0 .28-.1.52-.29.71A.94.94 0 0 1 20 13H4Zm0-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 7V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71v2c0 .28-.1.52-.29.71A.94.94 0 0 1 20 8H4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LineWeightIcon = d;
}), 98);
