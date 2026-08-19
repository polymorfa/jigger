__d("WAWebSettingsDocumentIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "settings-document";
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
					d: "M6 2a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83A1.97 1.97 0 0 0 13.17 2H6Zm7 6V3.5L18.5 9H14a1 1 0 0 1-1-1Zm-5 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm6 5a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsDocumentIcon = d;
}), 98);
