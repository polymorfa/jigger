__d("WAWebIcRateAppIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-rate-app";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "m12 13.63 2.11 1.28q.3.2.61-.02a.5.5 0 0 0 .22-.57l-.55-2.41 1.88-1.64a.53.53 0 0 0 .17-.6q-.11-.34-.5-.37l-2.47-.2-.97-2.27a.5.5 0 0 0-.5-.33.5.5 0 0 0-.5.33l-.97 2.28-2.47.2q-.39.02-.5.37a.53.53 0 0 0 .17.6L9.6 11.9l-.55 2.41q-.08.36.22.57a.51.51 0 0 0 .61.02z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M2 4.6A2.6 2.6 0 0 1 4.6 2h14.8A2.6 2.6 0 0 1 22 4.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-3.49l-3.03 3.03a1.25 1.25 0 0 1-1.76 0L8.09 20H4.6A2.6 2.6 0 0 1 2 17.4zM4.6 4a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6h3.7a1.5 1.5 0 0 1 1.05.44L12 21.08l2.65-2.64A1.5 1.5 0 0 1 15.7 18h3.69a.6.6 0 0 0 .6-.6V4.6a.6.6 0 0 0-.6-.6z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcRateAppIcon = d;
}), 98);
