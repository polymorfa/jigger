__d("WAWebNonContactsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "non-contacts";
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
				fill: "#010101",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", { d: "M9.77 6.2a3.37 3.37 0 1 1 4.66 4.66L9.77 6.19Zm9.57 9.57a2.54 2.54 0 0 0-1.36-2.21 9.68 9.68 0 0 0-1.49-.64l2.85 2.85Zm.41 2.8L5.44 4.25a.84.84 0 1 0-1.2 1.19l6.9 6.9c-1.53.19-2.87.67-3.96 1.22a2.53 2.53 0 0 0-1.33 2.25v2.34h11.1l1.6 1.6c.34.33.87.33 1.2 0a.83.83 0 0 0 0-1.18Z" })]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NonContactsIcon = d;
}), 98);
