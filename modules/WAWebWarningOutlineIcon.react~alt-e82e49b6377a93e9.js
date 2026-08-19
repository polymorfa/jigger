__d("WAWebWarningOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "warning-outline";
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
					d: "M1.16 22a1.14 1.14 0 0 1-1-.58 1.13 1.13 0 0 1 0-1.17L10.98 1.58c.11-.2.26-.34.45-.43.19-.1.38-.15.57-.15a1.21 1.21 0 0 1 1.02.58l10.82 18.67a1.13 1.13 0 0 1 0 1.17 1.14 1.14 0 0 1-1 .58H1.16Zm2.01-2.33h17.66L12 4.5 3.17 19.67ZM12 18.5c.33 0 .6-.11.83-.34.23-.22.34-.5.34-.83 0-.33-.11-.6-.34-.83-.22-.22-.5-.33-.83-.33-.33 0-.6.1-.83.33-.23.23-.34.5-.34.83 0 .33.11.61.34.83.22.23.5.34.83.34Zm0-3.5c.33 0 .6-.11.83-.34.23-.22.34-.5.34-.83v-3.5c0-.33-.11-.6-.34-.83-.22-.22-.5-.33-.83-.33-.33 0-.6.1-.83.33-.23.23-.34.5-.34.83v3.5c0 .33.11.61.34.83.22.23.5.34.83.34Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WarningOutlineIcon = d;
}), 98);
