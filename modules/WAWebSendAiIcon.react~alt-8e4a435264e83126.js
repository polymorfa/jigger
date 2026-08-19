__d("WAWebSendAiIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "send-ai";
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
					d: "M16.11 16.8a.58.58 0 0 1 1.07 0l.77 1.79c.06.14.17.25.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.77a.55.55 0 0 0-.3.3l-.78 1.82a.58.58 0 0 1-1.06.01l-.84-1.85a.58.58 0 0 0-.29-.29l-1.74-.76a.58.58 0 0 1 0-1.06l1.81-.77a.55.55 0 0 0 .3-.3l.77-1.79h-.01Zm3.66.19a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68Zm-.08-4.5-15.4 6.5a1 1 0 0 1-.95-.09.93.93 0 0 1-.45-.84v-13c0-.37.15-.65.45-.84a1 1 0 0 1 .95-.09l15.4 6.5c.42.18.62.49.62.93 0 .44-.21.74-.62.93Zm-14.8 4.07 11.85-5-11.85-5v3.5l6 1.5-6 1.5v3.5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SendAiIcon = d;
}), 98);
