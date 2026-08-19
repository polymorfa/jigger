__d("WAWebWdsIcLogoFacebookIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-facebook";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					fill: "#0A1014",
					fillRule: "evenodd",
					d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 2c4.43 0 8 3.57 8 8a7.98 7.98 0 0 1-6.78 7.9v-5.51h2.33l.36-2.37h-2.69v-1.3c0-.98.32-1.85 1.24-1.85h1.48V6.81c-.26-.04-.81-.11-1.85-.11-2.17 0-3.44 1.14-3.44 3.75v1.57H8.43v2.37h2.22v5.49A7.98 7.98 0 0 1 4 12c0-4.43 3.57-8 8-8Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIcLogoFacebookIcon = d;
}), 98);
