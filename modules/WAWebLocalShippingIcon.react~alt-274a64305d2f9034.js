__d("WAWebLocalShippingIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "local-shipping";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 8, 12, "0 0 12 8");
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
					fill: "#667781",
					fillRule: "evenodd",
					d: "M8.5 2h1.25c.15 0 .3.08.4.2l1.15 1.53a1 1 0 0 1 .2.6V6a.5.5 0 0 1-.5.5h-.5a1.5 1.5 0 1 1-3 0h-3a1.5 1.5 0 1 1-3 0 1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1Zm-6 4.5c0 .28.23.5.5.5a.5.5 0 0 0 .5-.5A.5.5 0 0 0 3 6a.5.5 0 0 0-.5.5Zm7.25-3.75L10.73 4H8.5V2.75h1.25ZM8.5 6.5c0 .28.22.5.5.5a.5.5 0 0 0 .5-.5A.5.5 0 0 0 9 6a.5.5 0 0 0-.5.5Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LocalShippingIcon = d;
}), 98);
