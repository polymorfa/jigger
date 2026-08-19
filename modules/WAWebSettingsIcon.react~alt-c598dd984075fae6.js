__d("WAWebSettingsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings";
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
					fillRule: "evenodd",
					d: "M19.26 12c0 .34-.03.66-.07.98l2.11 1.65a.5.5 0 0 1 .13.64l-2 3.46c-.13.22-.39.31-.62.22l-2.5-1a7.7 7.7 0 0 1-1.69.98l-.38 2.65a.49.49 0 0 1-.49.42h-4a.49.49 0 0 1-.5-.42l-.38-2.65a7.32 7.32 0 0 1-1.7-.98l-2.49 1a.5.5 0 0 1-.6-.22l-2.01-3.46a.5.5 0 0 1 .12-.64l2.11-1.65a7.91 7.91 0 0 1 0-1.96L2.2 9.37a.5.5 0 0 1-.12-.64l2-3.46c.12-.22.38-.31.61-.22l2.5 1a7.7 7.7 0 0 1 1.7-.98l.37-2.65a.49.49 0 0 1 .5-.42h4a.5.5 0 0 1 .5.42l.37 2.65c.61.25 1.17.58 1.7.98l2.49-1a.5.5 0 0 1 .61.22l2 3.46a.5.5 0 0 1-.12.64l-2.1 1.65c.03.32.06.64.06.98ZM8.24 12a3.5 3.5 0 1 0 7.01-.01 3.5 3.5 0 0 0-7 .01Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsIcon = d;
}), 98);
