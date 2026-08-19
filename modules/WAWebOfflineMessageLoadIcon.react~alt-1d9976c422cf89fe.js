__d("WAWebOfflineMessageLoadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "offline-message-load";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 12, 17, "0 0 17 12");
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
					fill: "white",
					fillRule: "evenodd",
					d: "M.7 2.47c0-.9.75-1.64 1.65-1.64h14.3c.31 0 .42.2.23.46l-2.8 3.86v5.02c0 .9-.73 1.64-1.63 1.64H2.35c-.9 0-1.64-.74-1.64-1.64v-7.7Zm9.93 1.9c.2 0 .35.16.35.36v.7c0 .2-.16.36-.35.36H4.25a.35.35 0 0 1-.35-.35v-.71c0-.2.15-.36.35-.36h6.38ZM9.56 6.85c.2 0 .36.16.36.36v.7c0 .2-.16.36-.36.36H4.25a.35.35 0 0 1-.35-.36v-.7c0-.2.15-.36.35-.36h5.31Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.OfflineMessageLoadIcon = d;
}), 98);
