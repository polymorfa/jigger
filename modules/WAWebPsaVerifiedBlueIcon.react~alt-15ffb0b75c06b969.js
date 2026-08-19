__d("WAWebPsaVerifiedBlueIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "psa-verified-blue";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20");
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
					fill: "#007BFC",
					fillRule: "evenodd",
					d: "m16.6 8.24 1.17 1.19c.3.31.3.82 0 1.14l-1.18 1.2.42 1.61c.1.44-.15.89-.58 1l-1.61.44-.44 1.61a.82.82 0 0 1-1 .58l-1.62-.42-1.2 1.17A.82.82 0 0 1 10 18a.82.82 0 0 1-.58-.24L8.23 16.6l-1.62.4a.82.82 0 0 1-1-.58l-.43-1.61-1.62-.44a.82.82 0 0 1-.57-1l.42-1.62-1.17-1.19a.81.81 0 0 1 0-1.15L3.4 8.23 3 6.61a.81.81 0 0 1 .57-1l1.62-.44.44-1.61a.82.82 0 0 1 1-.57l1.61.42 1.2-1.17a.81.81 0 0 1 1.15 0l1.19 1.17L13.39 3c.43-.1.88.15 1 .58l.43 1.61 1.62.44c.43.12.7.56.58 1l-.43 1.62Zm-7.22 4.53a.79.79 0 0 1-.57.23.83.83 0 0 1-.57-.23l-2-2a.8.8 0 1 1 1.12-1.13l1.44 1.43 3.84-3.84a.8.8 0 1 1 1.13 1.13l-2.2 2.2-2.2 2.2Z",
					clipRule: "evenodd",
					style: {
						fill: "#007bfc",
						fillOpacity: 1
					}
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PsaVerifiedBlueIcon = d;
}), 98);
