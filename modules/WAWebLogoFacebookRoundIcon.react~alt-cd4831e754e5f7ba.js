__d("WAWebLogoFacebookRoundIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "logo-facebook-round";
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
					d: "M24 12a12 12 0 1 0-12 12h.21v-9.34H9.63v-3h2.58V9.43c0-2.56 1.57-3.96 3.85-3.96 1.1 0 2.04.08 2.32.12v2.68H16.8c-1.24 0-1.49.59-1.49 1.46v1.9h2.98l-.39 3.01h-2.59v8.89A12 12 0 0 0 24 12Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LogoFacebookRoundIcon = d;
}), 98);
